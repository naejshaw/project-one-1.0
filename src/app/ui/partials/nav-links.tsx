'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function NavLinks() {
  const pathname = usePathname()
 
  return (<>
    <div className='w-full h-14 m-auto relative border-solid border border-b-[var(--line-header)] p-8 flex justify-between items-center'>
      <Link href="/" className="flex justify-around items-center text-xl text-[var(--tertiary)] logo">Sua Logo.</Link>
      <nav className='hidden md:flex md:gap-8'>
        <Link className={`link flex gap-8 ${pathname === '/' ? 'active' : ''}`} href="/">
          Início
        </Link>
  
        <Link
          className={`link flex gap-8 ${pathname === '/about' ? 'active' : ''}`}
          href="/#about"
        >
          Sobre
        </Link>
        <Link
          className={`link flex gap-8 ${pathname === '/#activity' ? 'active' : ''}`}
          href="/#activity"
        >
          Atuação
        </Link>
        <Link
          className={`link flex gap-8 ${pathname === '/#testimonials' ? 'active' : ''}`}
          href="/#testimonials"
        >
          Clientes
        </Link>
      </nav>
      <Link href="/#contact" className="hidden md:flex bg-[var(--secondary)] text-[var(--tertiary)] py-2.5 px-12 border-none outline-none rounded-lg text-base font-semibold cursor-pointer action_btn">Contato</Link>
    </div>
    <div className="md:hidden text-[var(--tertiary)] text-2xl cursor-pointer toggle_btn"><i className="fa fa-bars" aria-hidden="true"></i>
    </div>

    <nav className="flex flex-col list-none md:hidden md:absolute md:right-8 top-16 w-72 h-72 md:h-0 rounded-ee-lg">
          <Link className={`link p-4 flex items-center justify-center ${pathname === '/#activity' ? 'active' : ''}`} href="#home">Início</Link>
          <Link className={`link p-4 flex items-center justify-center ${pathname === '/#activity' ? 'active' : ''}`} href="#about">Sobre nós</Link>
          <Link className={`link p-4 flex items-center justify-center ${pathname === '/#activity' ? 'active' : ''}`} href="#activity">Atuação</Link>
          <Link className={`link p-4 flex items-center justify-center ${pathname === '/#activity' ? 'active' : ''}`} href="#testimonials">Clientes</Link>
          <Link className={`link py-4 px-0 flex items-center justify-center w-full  ${pathname === '/#activity' ? 'active' : ''}`} href="#contact">Contato</Link>
    </nav>
  </>)
}