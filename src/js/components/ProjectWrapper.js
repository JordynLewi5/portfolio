import TypeWriter from "js/components/TypeWriter"
import { useNavigate } from 'react-router-dom';

function ProjectWrapper(props) {
    const navigate = useNavigate();
    const goBack = () => { navigate(-1); };

    return (
        <div className="project-page__wrapper super-blue-gradient">
            <div className="project-page neumorphic-lg border-radius">
                <button onClick={goBack} className="back-button neumorphic">Go Back</button>
                <h1 className="project-page__header">
                    <TypeWriter text={props.title} cursor_blink={true} delay={0} offset={0} scrollYThreshold={0} duration={35} className="skill-header"/>
                </h1>
                <div className="project-page__content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default ProjectWrapper