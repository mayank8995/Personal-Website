import React from 'react';
import $ from 'jquery';
const Header = (props) => {
    const linksContainer = document.querySelector(".links-container");

    function animateScroll(idToScrollTo) {
        if (window.outerWidth <= 425)
            linksContainer.style.height = 0;
        $("html, body").animate({ scrollTop: $('#' + idToScrollTo).offset().top - 80 }, 100);
    }
    return <header className='bg-stone-800 md:sticky top-0 z-10'>
        <div className='links-container container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <a className='text-white' href="#home" onClick={() => animateScroll('home')}>Mayank Gupta</a>
            <nav className='mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'>
                <a className='mr-5 hover:text-white' href="#experience" onClick={() => animateScroll('experience')}>Experience</a>
                <a className='mr-5 hover:text-white' href="#skills" onClick={() => animateScroll('skills')}>Skills</a>
                <a className='mr-5 hover:text-white' href="#projects" onClick={() => animateScroll('projects')}>Projects</a>
            </nav>
            <a className='text-white' href="#connect">Connect <i class='fas fa-arrow-right'></i></a>
        </div>

    </header>

}

export default Header;