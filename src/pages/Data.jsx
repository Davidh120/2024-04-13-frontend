import { useEffect, useContext } from 'react'
import {useNavigate} from 'react-router'

import { DataContext } from '../context/DataContextProvider';
// importing the components
import { TableHeader } from '../components/TableHeader'
import { TableData } from '../components/TableData'
import { DataLoading } from '../components/DataLoading'
import { NotDataJet} from '../components/NotDataJet'
import { DataForm } from '../components/DataForm';
// import svg as ReactComponent
import  LogoName from '../assets/Imagologotipo_motion.svg?react'

export const Data = () => {

    const navigate = useNavigate() // to navigate to /home

    const dataContext = useContext(DataContext)

        // used when the page loading to call the data
    useEffect(() => {
        dataContext.fetchData()
    }, [])

    const printData = () => {
        // verify what data will be showed on the data table, options described below
        // if candidates data == null, then the db called is running, the skeleton will be showed
        if (dataContext.candidatesData == null){
            const loadingComponents = Array.from({ length: 15 }, (_, index) => (
                <DataLoading key={index} />
              ));
              return loadingComponents;
              // if candidates data == [] the db is empty, then not data jet will be showed
        } else if (dataContext.candidatesData == []){
            return (
                <NotDataJet />
            )
        } else {
            // if deleting now is false, then show the data wo news
            if (!dataContext.deletingNow ){
                return dataContext.candidatesData.map((item,index) => (
                    <TableData key={index} id={item.id} brand={item.brand} office={item.office} candidate={item.name} />
                ))
            } else {
                // but if deleting is true we need to run a animation, to this, the function to delete return us two arrays to show, and the second runs a animation
                return (
                    <div>
                        <div className=' bg-white'>
                            {dataContext.candidatesData1.map((item,index) => (
                            <TableData key={index} id={item.id} brand={item.brand} office={item.office} candidate={item.name} />
                            ))}
                        </div>
                        
                        <div className={`${dataContext.getUpAnimation ? ' animate-get-up' : ''} bg-white z-[-1] relative`} >
                            {dataContext.candidatesData2.map((item,index) => (
                            <TableData key={index} id={item.id} brand={item.brand} office={item.office} candidate={item.name} />
                            ))}
                        </div>
                    </div>
                )
            
            }
            
            
        }
    }
    
    return(
        <section className=" h-screen font-montserrat">
            <div className="h-[85vh] flex">
                <div>
                    <DataForm />
                </div>
                
                <div className='mt-[98px] w-full '>
                    <div className='px-16'>
                        <div className='flex justify-between '>
                            <TableHeader name='Marca' width={246} />
                            <TableHeader name='Sucursal' width={246} />
                            <TableHeader name='Aspirante' width={385} />
                        </div>
                        <div className={` ${dataContext.getDownAnimation ? 'animate-get-down' : ''} max-h-[615px] overflow-x-scroll `}>                 
                            {printData()}
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <footer className='h-[15vh] flex justify-center items-center'>
                <LogoName onClick={() =>  navigate('/')} className=' hover: cursor-pointer' />
            </footer>
        </section>
    )
}