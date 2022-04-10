import React from "react";

const Footer = (props) => {

    return <footer className='bg-stone-800 md:sticky top-0 z-10' id="connect">
        <div className='justify-center container mx-auto flex flex-wrap p-5 flex-col md:flex-col items-center'>
            <span className="text-white">Connect</span>
            <span>
                <a href="https://www.linkedin.com/in/mgupta8995/" target="_blank"><i className="fa-2x fab fa-linkedin"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/mayank8995" target="_blank"><i className="fa-2x fab fa-github"></i></a>
            </span>
        </div>
    </footer>
}

export default Footer;