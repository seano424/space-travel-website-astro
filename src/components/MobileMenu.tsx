import clsx from 'clsx';
import { menuStore } from '../menuStore';
import { useStore } from '@nanostores/react';

interface Props {
  pathname?: string
}

export const MobileMenu = ({ pathname }: Props) => {
  const isMenuOpen = useStore(menuStore)
  const links = [
    { title: 'Home', href: '/', number: '00' },
    { title: 'Destination', href: '/destination', number: '01' },
    { title: 'Crew', href: '/crew', number: '02' },
    { title: 'Technology', href: '/technology', number: '03' },
  ]
  return (
    <nav
      className={clsx(
        'md:hidden fixed top-0 right-0 w-2/3 h-screen bg-theme-dark/50 backdrop-blur-2xl z-20 flex flex-col gap-5 pl-12 pt-32',
        'transition-all duration-500',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      {
        links.map((link) => (
          <a
            key={link.title}
            className={clsx("uppercase relative font-sans-cond text-base text-theme-white/90 after:content-[''] tracking-1 after:absolute after:right-2 after:bg-theme-accent/25 after:w-[3px] after:h-full after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-100 after:focus:opacity-100 after:focus:bg-theme-white",
              pathname === link.href ? 'after:opacity-100 after:bg-theme-white' : ''
            )}
            href={link.href}
          >
            <span className="font-bold pr-1">{link.number}</span> {link.title}
          </a>
        ))
      }
    </nav>
  )
};

export default MobileMenu
