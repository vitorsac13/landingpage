import { useParams } from "react-router-dom"
import { medicamentos } from "../../data/medicamentos"
import styles from "./page.module.css"

export default function Product() {
  const { id } = useParams()

  const produto = medicamentos.find(m => m.id === Number(id))

  if (!produto) return <h2 className={styles.notFound}>Produto não encontrado</h2>

  return (
    <div className={styles.container}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>{produto.nome} {produto.dose}</h1>
        <p>Medicamento Genérico Real Pharma</p>
      </section>

      {/* PRODUTO PRINCIPAL */}
      <section className={styles.productSection}>
        <div className={styles.imageBox}>
          <img src={produto.img} alt={produto.nome} />
        </div>

        <div className={styles.infoBox}>
          <h2>{produto.nome}</h2>
          <p><strong>Dosagem:</strong> {produto.dose}</p>
          <p><strong>Apresentação:</strong> {produto.qtd}</p>

          <button>Solicitar informações</button>
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.textSection}>
        <h3>Descrição</h3>
        <p>{produto.descricao}</p>
      </section>

      {/* INDICAÇÕES */}
      <section className={styles.textSection}>
        <h3>Indicações</h3>
        <ul>
          {produto.indicacoes.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      </section>

      {/* COMPOSIÇÃO */}
      <section className={styles.textSection}>
        <h3>Composição</h3>
        <p>{produto.composicao}</p>
      </section>

      {/* DISCLAIMER */}
      <section className={styles.disclaimer}>
        <p>
          Este medicamento deve ser utilizado somente sob orientação médica ou farmacêutica.
          Leia a bula antes de usar.
        </p>
      </section>

    </div>
  )
}