import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

function Hero() {
  return (
    <section id="home" className={`flex md:flex-row flex-col`}>

      {/* esto crea la parte izquierda del HERO */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}> 
        {/* Etiqueta de descuento */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph}`}>
            <span className="text-white"> 20% </span>
            Discount Fot {" "}
            <span className="text-white"> 1 Month </span>
            Account
          </p>
        </div>

        {/* Texto debajo de la etiqueta de descuento */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>The Next 
            <br className='sm:block hidden' /> {" "}
            <span className='text-gradient'> Generation</span>
          </h1>
          
          {/* aqui va el icono de getting started */}
          <div className='ss:flex hidden md:mr-4 mr-0'>
            {/* import el componete */}
            <GetStarted />
          </div>
        </div>

        {/* esto va debajo de las palabras THE NEXT GENRATION */}
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Payment Method
        </h1>

        {/* Texto complementario que va debajo del texto THE NEXT GENERATION */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
        </p>

      </div>
      
      {/* esto crea la parte derecha del HERO */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[85%] bottom-40 rounded-full white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 blue__gradient'/>
      </div>
      {/* esto pone de nuevo el boton de Getting starte para cuando se esta en mobile */}
      <div className={`ss:hidden ${styles.flexCenter} `}>
        <GetStarted />
      </div>

    </section>
  )
}

export default Hero