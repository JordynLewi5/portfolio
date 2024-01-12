import ProjectWrapper from "js/components/ProjectWrapper"; 
import CaptionImage from "js/components/CaptionImage";

function RowingGuide() {
    return (
        <ProjectWrapper title="Rowing Guide">
            <CaptionImage src="/images/rowingguide.png" alt="Rowing Guide" caption="Click to view ⮕" className="image-link" href="/demo/rowing-guide"/>
            <p>
                Rowing Guide is a website that I created to help rowers and coaches
                learn and teach the sport of rowing. It contains a collection of helpful lessons, diagrams,
                and more. It is currently in development, and I am working on adding more content to it. This project uses
                WordPress as a CMS and a custom theme.
            </p>
        </ProjectWrapper>
    )
}

export default RowingGuide;