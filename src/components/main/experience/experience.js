import React from 'react';

const Experience = (props) => {

    return <section id="experience">
        <h1 className='text-center title-font sm:text-3xl text-3xl mb-4 font-medium dark:text-white'>Experience</h1>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 m-3">
                <h3 className='dark:text-white'>Airtel XLabs</h3>
                <h4 className='text-sm'>Shop E-commerce</h4><br />
                <h4 className='dark:text-white'>Role</h4>
                <h5 className='text-sm'>Senior Software Engineer</h5><br />
                <h4 className='dark:text-white'>Banglore,India</h4>
                <h5 className='text-sm'>Feb 2022-Present</h5>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 m-3">
                <h3 className='dark:text-white'>Publicis Sapient</h3>
                <h4 className='text-sm'>Finance, Investment Banking</h4><br />
                <h4 className='dark:text-white'>Role</h4>
                <h5 className='text-sm'>Associate Experience Technology L2</h5><br />
                <h4 className='dark:text-white'>Gurgaon,India</h4>
                <h5 className='text-sm'>Feb 2021-Feb 2022</h5>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 m-3">
                <h3 className='dark:text-white'>Newgen Softwares</h3>
                <h4 className='text-sm'>Banking and Government</h4><br />
                <h4 className='dark:text-white'>Role</h4>
                <h5 className='text-sm'>Senior Software Engineer</h5><br />
                <h4 className='dark:text-white'>Noida,India</h4>
                <h5 className='text-sm'>Jul 2018-Feb 2021</h5>
            </div>
        </div>
    </section>

}

export default Experience;