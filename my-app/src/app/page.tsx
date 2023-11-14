import Image from 'next/image'
import { IntroSection } from './_components/intro-section';

export default function Home() {
  return (
    <main>
      <IntroSection/>
      <section id='tech'>
        <h2 className='text-primary'>Tech Stacks</h2>
      </section>
      <section id='investment'>
        <h2 className='text-primary'>Investiment</h2>
      </section>
      <section id='about'>
        <h2 className='text-primary'>About</h2>
      </section>
      <section id='faq'>
        <h2 className='text-primary'>FAQ</h2>
      </section>
    </main>
  )
}
