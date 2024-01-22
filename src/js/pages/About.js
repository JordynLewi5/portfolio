import TypeWriter from "js/components/TypeWriter";

function About() {
    return (
        <div className="about-div" id="about-div">
            <TypeWriter text="<About Me 👋 />" cursor_blink={true} delay={200} offset={-900} duration={20} className="about-header"/>
            <div className="about-text neumorphic-md border-radius">
                <TypeWriter 
                    text="Hi, I'm Jordyn!"
                    cursor_blink={false} 
                    delay={100} 
                    offset={-900} 
                    duration={20} 
                    className="about-name"
                >
                    <TypeWriter
                        text="I'm a Software Engineering student at Auburn University passionate about all things software.
                        I love to spend the day out on the lake rowing, biking around town, playing with my dog, playing chess, and of course, coding!" 
                        cursor_blink={false} 
                        delay={0} 
                        offset={-900} 
                        duration={4} 
                        className="about-description"
                    />
                </TypeWriter>
                <div className="about-images">
                    <img src="/images/rowing.svg" alt="rower" className="image" id="rowing" />
                    <img src="/images/biking.svg" alt="biker" className="image" id="biking" />
                    <img src="/images/dog.svg" alt="dog" className="image" id="dog" />
                    <img src="/images/chess.svg" alt="chess" className="image" id="chess" />
                </div>
            </div>
        </div>
    );
}

export default About;