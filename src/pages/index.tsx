import style from './home.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className={style.main}>
        <section className={style.content}>
          <img src="./images/market-logo.svg" alt="Rui &amp; Dinora" className={style.supermarket_logo} />
          <h1>Olá, o supermercado está em desenvolvimento.</h1>
          <h2>Quando estiver pronta, você poderá fazer compras e encontrar seus produtos favoritos nesse site.</h2>
          <div>
            <Link href="https://agenciadigitalx3.com/">
              <a>
                <img src="./images/adx3_logo.svg" alt="Rui &amp; Dinora" className={style.adx_logo} />
              </a>
            </Link>
          </div>
        </section>
      </main>

    </>
  )
}
