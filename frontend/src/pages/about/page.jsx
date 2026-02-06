import styles from './page.module.css'
import { FaPills, FaHeartbeat, FaCheckCircle } from "react-icons/fa"

export default function About(){

    return (
    <div className={styles.container}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Quem Somos</h1>
        <p>
          A Umbrella Pharma é uma empresa farmacêutica dedicada à produção de
          medicamentos genéricos com qualidade, segurança e acessibilidade.
        </p>
      </section>

      {/* SOBRE */}
      <section className={styles.section}>
        <h2>Nossa História</h2>
        <p>
          A Umbrella Pharma nasceu com o propósito de democratizar o acesso à saúde,
          oferecendo medicamentos genéricos com a mesma eficácia dos
          medicamentos de referência, seguindo rigorosos padrões de qualidade.
        </p>
      </section>

      {/* MISSÃO VISÃO VALORES */}
      <section className={styles.cardsSection}>
        <div className={styles.card}>
          <FaHeartbeat className={styles.icon} />
          <h3>Missão</h3>
          <p>
            Garantir o acesso da população a medicamentos seguros, eficazes e
            com preços justos.
          </p>
        </div>

        <div className={styles.card}>
          <FaPills className={styles.icon} />
          <h3>Visão</h3>
          <p>
            Ser referência nacional em medicamentos genéricos, reconhecida pela
            excelência e inovação.
          </p>
        </div>

        <div className={styles.card}>
          <FaCheckCircle className={styles.icon} />
          <h3>Valores</h3>
          <p>
            Ética, qualidade, responsabilidade social, inovação e respeito à vida.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Compromisso com a Saúde</h2>
        <p>
          Trabalhamos todos os dias para oferecer confiança e bem-estar a milhões
          de pessoas.
        </p>
      </section>

    </div>
  )
  
}