import React from 'react'
import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"


const CardDeal = () => {
  return (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Encontre a Melhor Oferta De Cartão <br className="sm:block hidden" /> Em Poucos Passos.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Tudo para que você tenha a melhor experiência com seu dinheiro
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
    </section>
  )
}

export default CardDeal