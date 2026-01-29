import styles from './page.module.css'
import generico from "../../assets/generico.png"
import { Link } from 'react-router-dom'
import { medicamentos } from "../../data/medicamentos"

export default function Products(){

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
          {medicamentos.map((med) => (
			<div key={med.id} className={styles.card}>
				
				<img src={med.img} alt={med.nome} className={styles.productImage} />

				<h3>{med.nome}</h3>
				<p>{med.dose}</p>
				<p>{med.qtd}</p>

				<Link to={`/product/${med.id}`}>
				<button>Ver detalhes</button>
				</Link>

			</div>
			))}
        </div>
      </section>

    </div>
  )

}