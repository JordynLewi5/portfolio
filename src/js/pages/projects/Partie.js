import ProjectWrapper from "js/components/ProjectWrapper"; 
import CaptionImage from "js/components/CaptionImage";

function Partie() {
    return (
        <ProjectWrapper title="Partie Discord Bot">
            <CaptionImage src="/images/partie-cropped.gif" alt="Partie Discord Bot" caption="Click to view ⮕" className="image-link" href="https://top.gg/bot/817608521679896586"/>

            <p>
                Partie is a Discord bot that I created to help server admins keep 
                their servers clean and organized. It allowed users to create and customize
                temporary text and voice channels, and gave admins the ability to control how their
                server members used it. At its peak, it was in over 150 servers and 
                41,000 users had interacted with it.
            </p>
        </ProjectWrapper>
    )
}

export default Partie;