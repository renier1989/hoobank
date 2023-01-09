import { feedback } from "../constants";
import styles from "../style";
import FeedBackCard from "./FeedBackCard";

function Testimonials() {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      {/* esto es el gradiente que va a un lado de la vista */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

      {/* esto contiene el titulo en letras grandes y el texto en letras pequeñas al inicio de la seccion */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>What people are <br className="sm:block hidden" /> saying about us</h1>
          <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
          </div>
      </div>

      {/* esto es el contenedor de las cartas de los testimonios */}
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedBackCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )
}

export default Testimonials