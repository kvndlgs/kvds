import Logo from './logo';

export default function Navbar() {
    return (
        <nav className='w-full flex items-center justify-start gap-10 h-auto px-8 py-6'>
            <a href="/">
             <Logo />
             </a>
             <div className='flex items-stretch justify-start px-8 py-4 gap-12 bg-white/20 backdrop-blur-3xl rounded-full'>
             <a href="#project" className='font-sans font-medium'> Projects </a>
             <a href="#about" className='font-sans font-medium'> About </a>
             <a href="#blog" className='font-sans font-medium'> Blog </a>
             <a href="#contact" className='font-sans font-medium'> Contact </a>
             </div>
        </nav>
    )
}