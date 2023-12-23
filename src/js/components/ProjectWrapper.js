import TypeWriter from "js/components/TypeWriter"
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
  } from 'react-router-dom';

function ProjectWrapper(props) {
    const navigate = useNavigate();
    const goBack = () => { navigate(-1); };

    return (
        <div className="project-page__wrapper">
            <div className="project-page">
                <button onClick={goBack} className="back-button">Go Back</button>
                <div className="project-page__header">
                    <TypeWriter text={props.title} cursor_blink={true} delay={0} offset={0} scrollYThreshold={0} duration={35} className="skill-header"/>
                </div>
                <div className="project-page__content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default ProjectWrapper