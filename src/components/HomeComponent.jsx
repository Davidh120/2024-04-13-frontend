import  Logo from '../assets/Imagologo_motion.svg?react'
import Cellphone from '../assets/Telefono-01.png'

export const HomeComponent = () => {

    return (
        <section className="h-screen font-montserrat overflow-hidden max-w-full" >
            <div className='h-screen absolute top-0 left-0 w-screen'>
                <Logo className='left-[58px] top-[43px] absolute ' />

                <div className='top-0 h-[85vh] w-full absolute flex items-center justify-center'>
                    <img className='' src={Cellphone} alt="Icon with a cellphone" />                    
                </div>

                <div className='top-0 h-[85vh] '>
                    <div className=' text-center font-bold text-blue1 h-full flex flex-col justify-center' >
                        <h1 className=' text-[140px]'>
                            BIENVENIDO A 
                        </h1>
                        <h1 className=' text-[90px] z-10' style={{ textShadow: "-4px -4px 0 #fff, 4px -4px 0 #fff, -4px 4px 0 #fff, 4px 4px 0 #fff" }}>
                            MONITORING INNOVATION
                        </h1>
                    </div>
                </div>

                <ul className='h-[15vh] flex justify-around text-blue2 text-[20px] font-medium'>
                    <a href="">MONITORING INNOVATION</a>
                    <a href="">GPS CONTROL</a>
                    <a href="">Link repo front</a>
                    <a href="">Link repo back</a>
                </ul>
            </div>

            <div  className='h-[130vh] w-[200vw] relative top-[-15vh] left-full -z-10 rounded-[800px] shadow-[-22px_0px_57px_-15px_rgba(0,0,0,1)] animate-wave-left'></div>
        </section>
    )
}