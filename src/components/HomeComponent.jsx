import  Logo from '../assets/Imagologo_motion.svg?react'


export const HomeComponent = () => {

    return (
        <section className="h-screen" >
            <div className='h-screen'>
                <Logo className='left-[58px] top-[43px] absolute ' />
                <div className=' font-montserrat text-center font-bold text-blue1 my-auto' >
                    <h1 className=' text-[140px] '>
                        BIENVENIDO A 
                    </h1>
                    <h1 className=' text-[90px] border-white border-4'>
                        MONITORING INNOVATION
                    </h1>
                </div>
            </div>

            
        </section>
    )
}