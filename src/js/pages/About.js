import TypeWriter from "js/components/TypeWriter";

function About() {
    return (
        <div className="about-div">
            <TypeWriter text="<About Me 👋 />" cursor_blink={true} delay={200} offset={-900} duration={30} className="about-header"/>
            <div className="about-text neumorphic-md border-radius">
                <TypeWriter 
                    text="Hi, I'm Jordyn!"
                    cursor_blink={false} 
                    delay={500} 
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
                        duration={10} 
                        className="about-description"
                    />
                </TypeWriter>
                <div className="about-images">
                    <div className="image" id="rowing">
                        🚣‍♂️
                    </div>
                    <div className="image" id="biking">
                        🚴‍♂️
                    </div>
                    <div className="image" id="dog">
                        🐶
                    </div>
                    <div className="image" id="chess">
                        ♟️
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;