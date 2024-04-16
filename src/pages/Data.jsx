import { useEffect, useContext } from 'react'

import { DataContext } from '../context/DataContextProvider';

import { TableHeader } from '../components/TableHeader'
import { TableData } from '../components/TableData'
import { DataLoading } from '../components/DataLoading'
import { NotDataJet} from '../components/NotDataJet'
import { DataForm } from '../components/DataForm';

import  LogoName from '../assets/Imagologotipo_motion.svg?react'





export const Data = () => {

    const dataContext = useContext(DataContext)

    useEffect(() => {
        dataContext.fetchData()
    }, [])

    const printData = () => {
        if (dataContext.candidatesData == null){
            return (
                <DataLoading />     
            )
        } else if (dataContext.candidatesData == []){
            return (
                <NotDataJet />
            )
        } else {
            if (!dataContext.deletingNow ){
                return dataContext.candidatesData.map((item,index) => (
                    <TableData key={index} id={item.id} brand={item.brand} office={item.office} candidate={item.name} />
                ))
            } else {
                return (
                    <div>
                        <div className=' '>
                            {dataContext.candidatesData1.map((item,index) => (
                            <TableData key={index} id={item.id} brand={item.brand} office={item.office} candidate={item.name} />
                            ))}
                        </div>
                        
                        <div className={`${dataContext.getUpAnimation ? ' animate-get-up' : ''}`} >
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
                        <div className={` ${dataContext.getDownAnimation ? 'animate-get-down' : ''}   `}>                 
                            {printData()}
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <footer className='h-[15vh] flex justify-center items-center'>
                <LogoName />
            </footer>
        </section>
    )
}