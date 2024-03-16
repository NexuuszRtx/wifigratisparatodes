import { Inter, Averia_Serif_Libre } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
const averia = Averia_Serif_Libre({ subsets: ['latin'], weight: ["300", "400", "700"] })

export default function Home() {

  return (
    <div className={`${styles.container} ${inter.className}`}>

      <div>
        <Image src="/hero2.png" alt="Wifi Grátis" width={152} height={48} />
      </div>

      <div className={styles.form}>
        <div className={styles.form_header}>
          <Image src="/hero.jpg" alt="Wifi Grátis" width={540} height={263} />
        </div>

        <div className={styles.form_body}>
          <div className={styles.form_content}>
            <h2 className={averia.className}>
              Muitos pedidos, Mas relaxa.
            </h2>

            <p>Em 15 minutos ou menos você receberá os dados de acesso! </p>
          </div>
        </div>
      </div>

      <div>
        <span className={styles.copy}>
          © 2024 Wifi Grátis de alunos Brasil
        </span>
      </div>

    </div>
  )
}
