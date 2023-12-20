import ProjectCard from "../components/ProjectCard"
import TypeWriter from "../components/TypeWriter"

function Projects() {
    return (
        <div className="projects-div">
            {/* PROJECTS HEADER */}
            <TypeWriter text="<Projects />" offset={-900} duration={50} className="projects-header"/>
            
            <div className="project-card-list">
                <ProjectCard name="Empire State Building Lights" offset={-700} href="/esblights" target="" src="/images/esblights-thumbnail.png" alt="Empire State Building Lights" />
                <ProjectCard name="Empire State Building Lights Hue" offset={-800} href="/esblights-hue" target="" src="/images/weathervane.png" alt="Empire State Building Lights Hue System" />
                <ProjectCard name="Partie Discord Bot" offset={-900} href="/partie" target="" src="/images/partie-cropped.gif" alt="Partie Discord Bot" />
                <ProjectCard name="Rowing Guide" offset={-800} href="/rowing-guide" target="" src="/images/rowingguide.png" alt="Rowing Guide" />

            </div>
        </div>
    )
}

export default Projects