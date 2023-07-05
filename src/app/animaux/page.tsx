/* eslint-disable react/no-unescaped-entities */
import styles from '../page.module.css'
import animals from '../../images/animals.jpg'
import Image from 'next/image'

export default function Page() {
  return (
    <main className={styles.main}>
      <Image className="page-cover-image" src={animals} alt="Des bons gros farmers"/>
      <div className="standard-section-title">Les animaux, c'est rigolo!</div>
      <span className="standard-paragraph">Les ânes, cochons, boucs, canards, poules et cochons d'Inde de la ferme sont une source inépuisable de rires"</span>
      <span className="standard-paragraph">Les ânes avec leurs grandes oreilles, les cochons avec leurs bains de boue, les boucs qui sautent partout, les canards qui gloussent, les poules qui picorent et les cochons d'Inde avec leurs petits cris.</span>
      <span className="standard-paragraph">Leurs comportements drôles et espiègles illuminent la ferme et nous rappellent l'importance de la légèreté et de la joie dans la vie quotidienne. Passe du temps avec eux et laisse-toi emporter par leurs facéties hilarantes!</span>
    </main>
  )
}
