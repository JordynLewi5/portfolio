import TypeWriter from "js/components/TypeWriter";

function About() {
    return (
        <div className="about-div">
            <TypeWriter text="<About Me />" cursor_blink={true} delay={0} offset={-900} duration={50} className="about-header"/>
        </div>
    );
}

export default About;