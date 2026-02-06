import styles from './page.module.css'
import {
  FaHeartbeat,
  FaPills,
  FaLeaf,
  FaUserMd,
  FaCheckCircle,
  FaShieldAlt,
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn
} from "react-icons/fa"

export default function Home() {
  return (
    <div className={styles.home}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Umbrella Pharma</h1>
          <p>
            Cuidando da sua saúde com qualidade, confiança e medicamentos
            acessíveis.
          </p>
          <button>Conheça nossos produtos</button>
        </div>
      </section>

      {/* SAÚDE E BEM-ESTAR */}
      <section className={styles.section}>
        <h2>Saúde & Bem-Estar</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <FaHeartbeat className={styles.icon} />
            <h3>Qualidade de Vida</h3>
            <p>
              Soluções farmacêuticas pensadas para melhorar seu dia a dia.
            </p>
          </div>

          <div className={styles.card}>
            <FaLeaf className={styles.icon} />
            <h3>Bem-Estar Integral</h3>
            <p>
              Cuidamos da sua saúde física e mental com responsabilidade.
            </p>
          </div>

          <div className={styles.card}>
            <FaUserMd className={styles.icon} />
            <h3>Confiança Médica</h3>
            <p>
              Produtos desenvolvidos seguindo rigorosos padrões científicos.
            </p>
          </div>
        </div>
      </section>

      {/* MEDICAMENTOS GENÉRICOS */}
      <section className={styles.section}>
        <h2>Medicamentos Genéricos</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <FaPills className={styles.icon} />
            <h3>Acessibilidade</h3>
            <p>
              Preços mais acessíveis sem abrir mão da qualidade.
            </p>
          </div>

          <div className={styles.card}>
            <FaCheckCircle className={styles.icon} />
            <h3>Eficiência Comprovada</h3>
            <p>
              Mesma eficácia e segurança dos medicamentos de referência.
            </p>
          </div>

          <div className={styles.card}>
            <FaShieldAlt className={styles.icon} />
            <h3>Segurança</h3>
            <p>
              Produção certificada e aprovada pelos órgãos reguladores.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}