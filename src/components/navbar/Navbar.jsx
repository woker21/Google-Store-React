import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo}>
                <img src="/assets/img/google-logo.png" alt="Logo" />
            </Link>
            <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <li>
                    <Link to="/earbuds" activeClassName={styles.active}>Earbuds</Link>
                </li>
                <li>
                    <Link to="/watches" activeClassName={styles.active}>Watches</Link>
                </li>
                <li>
                    <Link to="/cart" activeClassName={styles.active}>Cart</Link>
                </li>
            </ul>
            <div className={styles.menuIcon} onClick={toggleMobileMenu}>
                <img src="/assets/img/menu-icon.png" alt="Menu" />
            </div>
        </nav>
    );
};

export default Navbar;
