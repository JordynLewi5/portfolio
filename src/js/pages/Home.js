import TypeWriter from 'js/components/TypeWriter';
import Footer from 'js/components/Footer';
import Projects from 'js/pages/Projects';
import Skills from 'js/pages/Skills';
import About from './About';

function Home() {
    return (
        <div className="home">
            <div className="landing-div">
                <div className="landing-text super-blue-gradient-text">
                    <TypeWriter text="Jordyn Lewis" cursor_blink={false} delay={0} duration={50} scrollYThreshold={0} offset={0} className="name"/>
                    <TypeWriter text="Portfolio" cursor_blink={true} delay={2000} duration={50} scrollYThreshold={0} offset={0} className="title"/>
                </div>
            </div>
            <Projects />
            <Skills />
            <About />
        </div>
    );
}

export default Home;