import Link from 'next/link';
import logoImg from '@/assets/logo.png'; // Able to call on assets such as images :)
import Image from 'next/image';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/"> {/* Refers too the root directory */}
                    <Image src={logoImg} alt="A plate with food on it" priority/>
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Browse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Browse Meals</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}