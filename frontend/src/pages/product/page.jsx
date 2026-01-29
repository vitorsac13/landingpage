import styles from "./page.module.css"
import genericoImg from "../../assets/generico.png"

export default function Product() {

  // Mock do produto (depois você pode pegar por API ou params)
  const produto = {
    nome: "Aripiprazol",
    dose: "10mg",
    apresentacao: "30 cápsulas",
    descricao:
      "O Aripiprazol é um medicamento antipsicótico atípico indicado para o tratamento de transtornos mentais, conforme orientação médica.",
    indicacoes: [
      "Esquizofrenia",
      "Transtorno bipolar",
      "Adjunto no tratamento de depressão"
    ],
    composicao: "Cada cápsula contém 10mg de aripiprazol.",
    img: genericoImg
  }

  return (
    <div className={styles.container}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>{produto.nome} {produto.dose}</h1>
        <p>Medicamento genérico Real Pharma</p>
      </section>

      {/* PRODUTO PRINCIPAL */}
      <section className={styles.productSection}>
        <div className={styles.imageBox}>
          <img src={produto.img} alt={produto.nome} />
        </div>

        <div className={styles.infoBox}>
          <h2>{produto.nome}</h2>
          <p><strong>Dosagem:</strong> {produto.dose}</p>
          <p><strong>Apresentação:</strong> {produto.apresentacao}</p>

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
          {produto.indicacoes.map((item, index) => (
            <li key={index}>{item}</li>
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
          Este produto é um medicamento. Seu uso deve ser orientado por um profissional de saúde.
          Consulte a bula e o médico ou farmacêutico.
        </p>
      </section>

    </div>
  )
}