import React, { useState, useEffect } from 'react';
import $ from 'jquery';
const Header = (props) => {
    const linksContainer = document.querySelector(".links-container");
    const [theme, setTheme] = useState(true)
    function animateScroll(idToScrollTo) {
        if (window.outerWidth <= 425)
            linksContainer.style.height = 0;
        $("html, body").animate({ scrollTop: $('#' + idToScrollTo).offset().top - 80 }, 100);
    }
    useEffect(() => {
        if (theme) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])
    function setThemeBackground() {
        if (theme) {
            setTheme(false);
        } else {
            setTheme(true);
        }
    }
    return <header className='top-0 z-10'>
        <div className='links-container container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <a className='dark:text-white' href="#home" onClick={() => animateScroll('home')}>Mayank Gupta</a>
            <nav className='mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'>
                <a className='mr-5 no-underline hover:underline' href="#experience" onClick={() => animateScroll('experience')}>Experience</a>
                <a className='mr-5 no-underline hover:underline' href="#skills" onClick={() => animateScroll('skills')}>Skills</a>
                <a className='mr-5 no-underline hover:underline' href="#projects" onClick={() => animateScroll('projects')}>Projects</a>
            </nav>
            <a className='dark:text-white mr-5 no-underline hover:underline' href="#connect">Connect</a>
            <label className="switch" >
                <input onClick={setThemeBackground} type="checkbox" defaultChecked />
                <span className="slider round"></span>
            </label>
        </div>

    </header>

}

export default Header;