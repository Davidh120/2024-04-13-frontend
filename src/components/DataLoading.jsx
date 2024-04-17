// calling the svgs to use thats as ReacComponents
import Modifier from '../assets/Icon_editar1.svg?react'
import Deleter from '../assets/Icon_eliminar1.svg?react'


export const DataLoading = () => {
    // This shows just a component simulating data with a animation 
    // the component will be displayed during the fst fetch

    return(
        <div className='flex font-montserrat text-gray1 font-[500] text-[28.73px] border-b-[2.3px] border-red2 h-[50px] justify-between animate-pulse'>
            <p className='w-[246px] flex items-center'>
                -----------
            </p>
            <p className='w-[246px] flex items-center'>
                -----------
            </p>
            <div className=' flex w-[385px] justify-between items-center'>
                <p>
                ----------------
                </p>
                <div className='flex items-center'> 
                    <Modifier />
                    <Deleter className='ml-3' />
                </div>
                
            </div>
        </div>
    )
}