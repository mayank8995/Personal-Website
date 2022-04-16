import React, { useState, useEffect } from 'react';
import $ from 'jquery';
const Header = (props) => {
    const linksContainer = document.querySelector(".links-container");
    const [theme, setTheme] = useState(true);
    function animateScroll(idToScrollTo) {
        if (window.outerWidth <= 425)
            linksContainer.style.height = 0;
        $("html, body").animate({ scrollTop: $('#' + idToScrollTo).offset().top - 80 }, 100);
    }
    useEffect(() => {
        if (theme) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('bg-gray-900');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('bg-gray-900');
        }
    }, [theme])
    function setThemeBackground() {
        if (theme) {
            setTheme(false);
        } else {
            setTheme(true);
        }
    }
    function openbar() {
        document.querySelector(".links-container").style.display = 'flex';
        document.querySelector(".open").style.display = 'none';
        document.querySelector(".close").style.display = 'block';
        document.querySelector(".connect").classList.add('connect-position');
        document.querySelector(".name").classList.add('name-position');
    }
    function closebar() {
        document.querySelector(".links-container").style.display = 'none';
        document.querySelector(".open").style.display = 'block';
        document.querySelector(".close").style.display = 'none';
        document.querySelector(".connect").classList.remove('connect-position');
        document.querySelector(".name").classList.remove('name-position');
    }
    return <header className='top-0 z-10'>
        <div className='links-container container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <div className='name'>
                <a className='dark:text-white' href="#home" onClick={() => animateScroll('home')}>Mayank Gupta</a>
            </div>
            <nav className='mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'>
                <a className='mr-5 no-underline hover:dark:text-white hover:underline' href="#experience" onClick={() => animateScroll('experience')}>Experience</a>
                <hr />
                <a className='mr-5 no-underline hover:dark:text-white hover:underline' href="#skills" onClick={() => animateScroll('skills')}>Skills</a>
                <hr />
                <a className='mr-5 no-underline hover:dark:text-white hover:underline' href="#projects" onClick={() => animateScroll('projects')}>Projects</a>
                <hr />
            </nav>
            <div className='connect'>
                <a className='dark:text-white mr-5 no-underline hover:underline' href="#connect">Connect</a>
                <label className="switch" >
                    <input onClick={setThemeBackground} type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
        <div className="nav-header">
            <button className='open' onClick={openbar}>
                <i className="fas fa-bars"></i>
            </button>
            <button className='close' onClick={closebar}>
                <i className="fas fa-times" aria-hidden="true"></i>
            </button>
        </div>

    </header>

}

export default Header;