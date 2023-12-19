import TypeWriter from 'js/components/TypeWriter';
import Footer from 'js/components/Footer';
import Projects from 'js/pages/Projects';
import Skills from 'js/pages/Skills';

function Home() {
    return (
        <div className="home">
            <div className="landing-div">
                <div className="landing-text">
                    <TypeWriter text="<Jordyn Lewis />" duration={100} scrollYThreshold={0} offset={0} className="name super-blue-gradient-text"/>
                </div>
            </div>
            
            <Projects />

            <Skills />

            <Footer />
        </div>
    );
}

export default Home;