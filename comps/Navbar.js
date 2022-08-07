import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link href={`/`}>
                <Image src="/icon-home.svg" alt="home" width='100%' height='100%'/>
            </Link>
            <Link href={`/calendar`}>
                <Image src="/icon-calendar.svg" alt="home" width='100%' height='100%'/>
            </Link>
            <Link href={`/profile`}>
                <Image src="/icon-profile.svg" alt="home" width='100%' height='100%'/>
            </Link>
        </div>
    )
};

export default Navbar;