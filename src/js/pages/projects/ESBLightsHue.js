import ProjectWrapper from "js/components/ProjectWrapper"; 
import CaptionImage from "js/components/CaptionImage";

function ESBLightsHue() {
    return (
        <ProjectWrapper title="Empire State Building Lights Hue (ESB Lights Hue)">
            <CaptionImage src="/images/weathervane.png" alt="ESB Lights Hue" caption="Click to view ⮕" className="image-link" href="https://github.com/KineticTeam/esblights-hue"/>

            <p>
                ESB Lights Hue is a Node.js application that was designed to be 
                easily configured to control the lights of any Hue lights system.
                It's initial purpose was to sync 
                the <a href="https://kinetic.com/the-company/virtual-tour/">kWeatherVane</a> light 
                located on the top of a prominant building in Birmingham, AL, with the lights of the 
                Empire State Building in New York, NY.
            </p>
        </ProjectWrapper>
    )
}

export default ESBLightsHue;