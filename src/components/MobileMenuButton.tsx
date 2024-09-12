import { useStore } from '@nanostores/react';
import { menuStore } from '../menuStore';

export const MobileMenuButton = () => {
  const isMenuOpen = useStore(menuStore)
  const openIcon = '/assets/shared/icon-hamburger.svg'
  const closeIcon = '/assets/shared/icon-close.svg'

  const handleClick = () => {
    menuStore.set(!isMenuOpen)
  }

  return (
    <button className="pr-5 md:hidden relative z-30" onClick={handleClick}>
      <img
        src={openIcon}
        alt="menu button open"
        className={`${isMenuOpen ? 'hidden' : 'block'}`}
      />
      <img
        src={closeIcon}
        alt="menu button close"
        className={`${isMenuOpen ? 'block' : 'hidden'}`}
      />
    </button>
  )
}

export default MobileMenuButton
