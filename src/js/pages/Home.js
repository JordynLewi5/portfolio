import TypeWriter from 'js/components/TypeWriter';
import ScrollDownArrow from 'js/components/ScrollDownArrow';
import ProjectCard from 'js/components/ProjectCard';
import Footer from 'js/components/Footer';

function Home() {
    return (
        <div className="home">
            <div className="landing-div">
                <div className="landing-text">
                    <TypeWriter text="< Jordyn Lewis />" duration={100} scrollYThreshold={0} className="name"/>
                </div>
                <ScrollDownArrow />
            </div>
            
            <div className="projects-div">
                <TypeWriter text="< Projects />" duration={100} scrollYThreshold={200} className="projects-header"/>
                <div className="project-card-list">
                    <ProjectCard offset={100} scrollYThreshold={500} href="https://esblights.kinetic.com">
                        <div className="description">
                            <h1>Empire State Building Lights</h1>
                            <p>ESB Lights displays the current color scheme of the Empire State Building Lights, derived from the color description on the Empire State Building website via OpenAI's API using model ChatGPT3.5. Consists of an API for connecting external applications, like the ESB Lights website, Google Calendar Events, and Hue Lights systems.</p>
                        </div>
                        <div className="image">
                            <img src="/images/esblights-thumbnail.png" alt="Empire State Building Lights" />
                        </div>
                    </ProjectCard>
                    <ProjectCard offset={300} scrollYThreshold={500} href="https://esblights.kinetic.com/api">
                        <div className="description">
                            <h1>Empire State Building Lights Hue</h1>
                            <p>ESB Lights Hue is the application of the ESB Lights network that works with Hue Lights Systems. It consists of a robust light scheduler and flexible light interval configurability.</p>
                        </div>
                        <div className="image">
                            <img src="/images/weathervane.png" alt="Empire State Building Lights Hue System" />
                        </div>
                    </ProjectCard>
                    <ProjectCard offset={700} scrollYThreshold={500} href="https://esblights.kinetic.com">
                        <div className="description">
                            <h1>Empire State Building Lights</h1>
                        </div>
                        <div className="image">
                            <img src="/images/esblights-thumbnail.png" alt="Empire State Building Lights" />
                        </div>
                    </ProjectCard>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;