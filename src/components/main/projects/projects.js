import React from 'react';

const Projects = (props) => {

    return <section id="projects">
        <h1 className='text-center title-font sm:text-3xl text-3xl mb-4 font-medium dark:text-white'>Projects</h1>
        <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-start">
            <div className="px-10 lg:max-w-lg lg:w-full md:w-1/3 w-5/6 m-3">
                <h3 className='dark:text-white'>Shop E-commerce</h3>
                <h4 className='text-sm dark:text-slate-300'>Airtel XLabs, Banglore</h4>
                <p >
                    <ul className='text-base'>
                        <li>
                            Currently working in Airtel shop team to enhance customer shopping experience.
                        </li>
                    </ul>

                </p>
            </div>
            <div className="px-10 lg:max-w-lg lg:w-full md:w-1/3 w-5/6 m-3">
                <h3 className='dark:text-white'>Finance, Investment Banking</h3>
                <h4 className='text-sm dark:text-slate-300'>Publicis Sapient, Gurgaon</h4>
                <p>
                    <ul className='text-base'>
                        <li>
                            Contributed to a feature in the project which is used to detect the compliance violations using React.js.
                        </li>
                        <li>
                            Contributed to a feature which helped the company to onboard new clients.
                        </li>
                    </ul>

                </p>
            </div>
            <div className="px-10 lg:max-w-lg lg:w-full md:w-1/3 w-5/6 m-3">
                <h3 className='dark:text-white'>Corms</h3>
                <h4 className='text-sm dark:text-slate-300'>Newgen Softwares, Noida</h4>
                <p>
                    <ul className='text-base'>

                        <li>Contributed in the development of the core product which is used to automate the end to end process  in government and banking domain which increases the efficiency of the overall process.</li>

                        <li>Created POCs which helped the company to win major deals nationally and internationally using VanillaJS, HTML5 and CSS3.</li>
                    </ul>
                </p>
            </div>
        </div>
    </section>

}

export default Projects;