import styles from '../style';
import { arrowUp } from '../assets';

function GetStarted() {
  return (
    // esto crea un circula con un color de gradiente
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      {/* esto crea internamente en el circulo otro circulo de color negro para crear la sensacion de un borde del circulo exterior */}
      <div className={`${styles.flexCenter} w-[100%] h-[100%] flex-col bg-primary rounded-full`}>
        {/* aqui creo los estilos para el texto que va a estar dentro del circulo solo las palabras GER y la imagen de la flecha */}
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[32px] mr-2">
            <span className="text-gradient"> Get </span>
          </p>
          <img src={arrowUp} alt="arrowUp" className="w-[23px] h-[23px] object-contain" />
        </div>
        {/* esto crea la otra palabra STARTED */}
        <p className="font-poppins font-medium text-[18px] leading-[32px]">
          <span className="text-gradient"> Started </span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted