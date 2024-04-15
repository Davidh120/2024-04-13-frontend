import { useEffect, useContext } from 'react'

import { DataContext } from '../context/DataContextProvider';

import { TableHeader } from '../components/TableHeader'
import { TableData } from '../components/TableData'
import { DataLoading } from '../components/DataLoading'
import { NotDataJet} from '../components/NotDataJet'
import { DataForm } from '../components/DataForm';

import  LogoName from '../assets/Imagologotipo_motion.svg?react'
import Plus from '../assets/Icon_crear.svg?react'




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
            return dataContext.candidatesData.map((item) => (
                <TableData key={item.id} id={item.id} brand={item.brand} office={item.office} candidate={item.name} />
            ))
            
        }
    }
    
    return(
        <section className=" h-screen font-montserrat">
            <div className="h-[85vh] flex">
                <div>
                    <div className=' relative h-[335px] w-[640px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25);] rounded-[20px] ml-[160px] mt-[98px]'>
                        <div className=' relative top-[13px] left-[28px]' >
                            <Plus />
                        </div>
                        <DataForm />
                    </div>
                </div>
                <div className='mt-[98px] w-full '>
                    <div className='px-16'>
                        <div className='flex justify-between '>
                            <TableHeader name='Marca' width={246} />
                            <TableHeader name='Sucursal' width={246} />
                            <TableHeader name='Aspirante' width={385} />
                        </div>
                        <div className=''>                 
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