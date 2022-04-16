import React, { useEffect } from 'react';

const Home = (props) => {
    let id;
    useEffect(() => {
        var TxtRotate = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };
        //Text animation:https://codepen.io/CheeseTurtle/pen/jzdgI
        TxtRotate.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 300 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            id = setTimeout(function () {
                that.tick();
            }, delta);
        };
        function onload() {
            var elements = document.getElementsByClassName('txt-rotate');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-rotate');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtRotate(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
            document.body.appendChild(css);
        };
        onload()
        return () => {
            clearTimeout(id)
        }
    }, [])

    return <section id="home">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium dark:text-white">
                    Hello,👋 I'm Mayank.
                    <br className="hidden lg:inline-block" />I am a Software Engineer.
                </h1>
                <h1 className='wrap'>
                    I&nbsp;
                    <span className="txt-rotate"
                        data-period="2000"
                        data-rotate='["work on React, Typescript and Javascript.","am Iron Man." ]'></span>
                </h1>
                {/* <div className="flex justify-center">
                    <a
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Work With Me
                    </a>
                    <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        See My Past Work
                    </a>
                </div> */}
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={`${process.env.PUBLIC_URL}/images/coding.png`}
                />
            </div>
        </div>
    </section>

}

export default Home;