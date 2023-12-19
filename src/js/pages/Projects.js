import ProjectCard from "../components/ProjectCard"
import TypeWriter from "../components/TypeWriter"

function Projects() {
    return (
        <div className="projects-div">
            {/* PROJECTS HEADER */}
            <TypeWriter text="<Projects />" offset={-700} duration={100} className="projects-header"/>
            
            <div className="project-card-list">
                <ProjectCard offset={-500} href="https://esblights.kinetic.com">
                    <div className="description">
                        <h1>Empire State Building Lights</h1>
                        {/* <p>ESB Lights displays the current color scheme of the Empire State Building Lights, derived from the color description on the Empire State Building website via OpenAI's API using model ChatGPT3.5. Consists of an API for connecting external applications, like the ESB Lights website, Google Calendar Events, and Hue Lights systems.</p> */}
                    </div>
                    <div className="image">
                        <img src="/images/esblights-thumbnail.png" alt="Empire State Building Lights" />
                    </div>
                </ProjectCard>
                <ProjectCard offset={-550} href="https://github.com/KineticTeam/esblights-hue">
                    <div className="description">
                        <h1>Empire State Building Lights Hue</h1>
                        {/* <p>ESB Lights Hue is the application of the ESB Lights network that works with Hue Lights Systems. It consists of a robust light scheduler and flexible light interval configurability.</p> */}
                    </div>
                    <div className="image">
                        <img src="/images/weathervane.png" alt="Empire State Building Lights Hue System" />
                    </div>
                </ProjectCard>
                <ProjectCard offset={-600} href="https://top.gg/bot/817608521679896586">
                    <div className="description">
                        <h1>Partie Discord Bot</h1>
                    </div>
                    <div className="image">
                        <img src="/images/partie-cropped.gif" alt="Partie Discord Bot" />
                    </div>
                </ProjectCard>
            </div>
        </div>
    )
}

export default Projects