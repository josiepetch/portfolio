import { Link, NavLink } from 'react-router-dom'
import logo from '@/assets/images/logo-j.png';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faHome, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
            <Link className='logo' to={'/'} onClick={() => setShowNav(false)}>
                <img src={logo} alt="" />
            </Link>

            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4d' />
                </NavLink>
                <NavLink
                    to="/project"
                    className={({ isActive }) => (isActive ? 'active portfolio-link' : 'portfolio-link')}
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faFolderOpen} color='#4d4d4d' />
                </NavLink>
                <NavLink
                    to="https://www.linkedin.com/in/josie-petchnumsin-a7ba4391"
                    className={({ isActive }) => (isActive ? 'active contact-link' : 'contact-link')}
                    target='_blank'
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4d' />
                </NavLink>
                <NavLink
                    to="https://github.com/josiepetch?tab=repositories"
                    className={({ isActive }) => (isActive ? 'active github-link' : 'github-link')}
                    target='_blank'
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4d' />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="2x"
                    className='close-icon' />
            </nav>

            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="2x"
                className='hamburger-icon' />
        </div>
    )
}