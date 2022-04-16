import React from 'react';

const Skills = (props) => {

    return <section id="skills">
        <h1 className='text-center title-font sm:text-3xl text-3xl mb-4 font-medium text-white'>Skills</h1>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-start">
            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 m-3">
                <h3 className='text-white'>Frontend</h3>
                <ul className='text-base'>
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Rxjs</li>
                    <li>Angular</li>
                    <li>HTML5,CSS3,SCSS</li>
                </ul>

            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 m-3">
                <h3 className='text-white'>Backend</h3>
                <ul className='text-base'>
                    <li>Java (Basic)</li>
                    <li>Spring Boot (Basic)</li>
                    <li>Node</li>
                </ul>

            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 m-3">
                <h3 className='text-white'>Tools</h3>
                <ul className='text-base'>

                    <li>Npm</li>
                    <li>Git</li>
                    <li>Bit Bucket</li>
                    <li>Jira</li>
                </ul>

            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 m-3">
                <h3 className='text-white'>Other Skills</h3>
                <ul className='text-base'>
                    <li>Good Communication Skills</li>
                    <li>Team Player</li>
                </ul>

            </div>
        </div>
    </section>

}

export default Skills;