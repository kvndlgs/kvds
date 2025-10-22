'use client'

import StaggeredMenu from './StaggeredMenu';
import { useNav } from '@/lib/NavContext';
//import Logo from './logo';

const menuItems = [
    {label: 'Home', ariaLabel: 'Go to home page', link: '/'},
  { label: 'Projects', ariaLabel: 'See recent works', link: '#projects' },
  { label: 'About', ariaLabel: 'Learn about me', link: '#about' },
  { label: 'Blog', ariaLabel: 'See my last posts', link: '#blog' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
  { label: 'X', link: 'https://x.com/BredSheera78517' },
  { label: 'GitHub', link: 'https://github.com/kvndlgs' },
  { label: 'LinkedIn', link: 'https://linkedin.com/kevindesloges' }
];

export default function Nav() {
  const { isNavOpen, setIsNavOpen } = useNav();

return (
<div className='absolute right-0 top-0 w-screen h-screen z-50'>
  <StaggeredMenu
    isFixed={false}
    position="right"
    items={menuItems}
    socialItems={socialItems}
    displaySocials={true}
    displayItemNumbering={true}
    menuButtonColor="#4A4A4A"
    openMenuButtonColor="#4A4A4A"
    changeMenuColorOnOpen={true}
    colors={['#7dd6e8a2', '#e87dda8d']}
    logoUrl="/kd.svg"
    accentColor="#E87D89"
    onMenuOpen={() => setIsNavOpen(true)}
    onMenuClose={() => setIsNavOpen(false)}
  />
  </div>
  )
};