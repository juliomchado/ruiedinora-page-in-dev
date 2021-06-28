/* eslint-disable @next/next/no-img-element */
import style from './home.module.scss';
import Link from 'next/link';
// import Image from 'next/image'
// import supermarketLogo from '../../public/images/market_logo.svg';
// import adx3Logo from '../../public/images/adx3_logo.svg';

export default function Home() {
  return (
    <>
      <main className={style.main}>
        <section className={style.content}>
            <img src="./images/market_logo.svg" alt="Logo do supermercado Rui &amp; Dinora"  className={style.supermarket_logo}/>
          <h1>Olá, o supermercado está em desenvolvimento.</h1>
          <h2>Quando estiver pronto, você poderá fazer compras e encontrar seus produtos favoritos neste site.</h2>
          <div>
            <Link href="https://agenciadigitalx3.com/">
              <a>
                  <img src="./images/adx3_logo.svg" alt="Logo da Agência ADX3" className={style.adx_logo} />
              </a>
            </Link>
          </div>
        </section>
      </main>

    </>
  )
}
