import styles from './page.module.css'
import generico from "../../assets/generico.png"

export default function Products(){

    // Lista de medicamentos
  const medicamentos = [
    { nome: "Aripiprazol", dose: "10mg", qtd: "30 cápsulas", img: generico},
    { nome: "Cloridrato de Venlafaxina", dose: "75mg", qtd: "30 cápsulas", img: generico},
    { nome: "Cloridrato de Venlafaxina", dose: "150mg", qtd: "30 cápsulas", img: generico},
    { nome: "Paracetamol", dose: "500mg", qtd: "30 cápsulas", img: generico},
    { nome: "Dipirona", dose: "1g", qtd: "20 cápsulas", img: generico},
    { nome: "Ibuprofeno", dose: "400mg", qtd: "10 cápsulas", img: generico},
    { nome: "Maleato de Dexclorfeniramina", dose: "2mg", qtd: "20 cápsulas", img: generico},
  ]

  return (
    <div className={styles.container}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Produtos</h1>
        <p>
          Medicamentos genéricos com qualidade, segurança e preços acessíveis.
        </p>
      </section>

      {/* GRID DE PRODUTOS */}
      <section className={styles.productsSection}>
        <h2>Medicamentos Genéricos Real Pharma</h2>

        <div className={styles.grid}>
          {medicamentos.map((med, index) => (
            <div key={index} className={styles.card}>
              <img src={med.img} alt={med.nome} className={styles.productImage} />

              <h3>{med.nome}</h3>
              <p><strong>Dosagem:</strong> {med.dose}</p>
              <p><strong>Apresentação:</strong> {med.qtd}</p>

              <button>Ver detalhes</button>
            </div>
          ))}
        </div>
      </section>

    </div>
  )

}