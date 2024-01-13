import TypeWriter from 'js/components/TypeWriter';
import Projects from 'js/pages/Projects';
import Skills from 'js/pages/Skills';
import About from './About';

function Home() {
    return (
        <div className="home">
            <div className="landing-div">
                <div className="landing-text super-blue-gradient-text">
                    <TypeWriter text="Jordyn Lewis" cursor_blink={false} delay={0} duration={30} scrollYThreshold={0} offset={0} className="name">
                        <TypeWriter text="Portfolio" cursor_blink={true} delay={0} duration={30} scrollYThreshold={0} offset={0} className="title"/>
                    </TypeWriter>
                </div>
            </div>
            <Projects />
            <Skills />
            <About />
        </div>
    );
}

export default Home;