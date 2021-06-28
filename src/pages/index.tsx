import style from './home.module.scss';
import Link from 'next/link';
import Image from 'next/image'
import supermarketLogo from '../../public/images/market_logo.svg';
import adx3Logo from '../../public/images/market_logo.svg';

export default function Home() {
  return (
    <>
      <main className={style.main}>
        <section className={style.content}>
          <Image src={supermarketLogo} alt="Rui &amp; Dinora" className={style.supermarket_logo} />
          <h1>Olá, o supermercado está em desenvolvimento.</h1>
          <h2>Quando estiver pronta, você poderá fazer compras e encontrar seus produtos favoritos nesse site.</h2>
          <div>
            <Link href="https://agenciadigitalx3.com/">
              <a>
                <Image src={adx3Logo} alt="Rui &amp; Dinora" className={style.adx_logo} />
              </a>
            </Link>
          </div>
        </section>
      </main>

    </>
  )
}
