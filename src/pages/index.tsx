import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import Typical from 'react-typical'
// import { Chrono } from "react-chrono";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


import styles from './home.module.scss'

export default function Home() {

  return (
    <>
      <Head>
        <title>Interfaces XIV</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <Typical
            steps={['Bom dia!', 2500, 'Seja bem-vinda!', 5000, 'Seja bem-vindo!', 2500]}
            loop={Infinity}
            wrapper="p"
          />
          <h1>Movimentos Sociais & Memoria Cultural: O lugar do Sujeito do Conhecimento nesta <span> História.</span></h1>
          <p>
            Universidade Federal Rural do Rio de Janeiro — UFRRJ <br />
            <span>XIV Interfaces</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/ativism.svg" alt="Girl Coding" />
      </main>
    </>
  )
}


