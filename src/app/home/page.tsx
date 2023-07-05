/* eslint-disable react/no-unescaped-entities */
import farm from "../../images/farm.jpg"
import styles from './../page.module.css'
import Image from "next/image"

export default function Home() {
  return (
    <main className={styles.main}>
      <Image className="page-cover-image" src={farm} alt="Une vue aérienne d'une ferme"/>
      <div className="standard-section-title">Bienvenue à la ferme!</div>
      <span className="standard-paragraph">La ferme est un lieu enchanteur où l'harmonie règne entre l'homme et la nature. Chaque matin, tu te réveilles au son du chant du coq, entouré de paysages verdoyants à perte de vue. Cultiver tes propres légumes devient une source de satisfaction inégalée, rien de tel que de déguster des produits frais, directement de la terre à ton assiette."</span>
      <span className="standard-paragraph">La vie à la ferme est synonyme de convivialité et de générosité. Les habitants sont accueillants, prêts à partager leurs connaissances et à te faire découvrir les traditions rurales. En échange, tu te retrouves immergé dans une atmosphère chaleureuse, où tu peux participer aux activités quotidiennes."</span>
      <span className="standard-paragraph">Rejoins-nous à la ferme et découvre un mode de vie authentique. Savoure la simplicité des choses et laisse-toi imprégner par le bonheur. La ferme est un monde à part, un endroit vraiment trop cool !"</span>
    </main>
  )
}