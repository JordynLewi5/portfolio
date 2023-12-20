import TypeWriter from "../components/TypeWriter";
import SkillsCard from "../components/SkillCard";

function Skills() {
    return (
        <div className="skill-div">
            <TypeWriter text="<Skills />" cursor_bink={true} delay={0} offset={-750} duration={50} className="skill-header"/>
            <div className="skill-levels"></div>
            {/* Front End */}
            <div className="skill-card-list">
                <h2>Front End</h2>
                <div className="skill-card-list front-end">
                    <SkillsCard name="JavaScript" level={90} offset={-750} href="" src="/images/javascript.svg" alt="JavaScript"/>
                    <SkillsCard name="HTML" level={85} offset={-750} href="" src="/images/html.svg" alt="HTML" />
                    <SkillsCard name="CSS" level={75} offset={-750} href="" src="/images/css.svg" alt="CSS" />
                    <SkillsCard name="jQuery" level={75} offset={-750} href="" src="/images/jquery.svg" alt="jQuery" />
                    <SkillsCard name="React.js" level={75} offset={-750} href="" src="/images/react.svg" alt="React.js" />
                    <SkillsCard name="Laravel" level={65} offset={-750} href="" src="/images/laravel.svg" alt="Laravel" />
                    <SkillsCard name="WordPress" level={75} offset={-750} href="" src="/images/wordpress.svg" alt="WordPress" />
                    <SkillsCard name="Tailwind" level={70} offset={-750} href="" src="/images/tailwind.svg" alt="Tailwind" />
                    <SkillsCard name="Bootstrap" level={70} offset={-750} href="" src="/images/bootstrap.svg" alt="Bootstrap" />
                </div>
                {/* Back End */}
                <h2>Back End</h2>
                <div className="skill-card-list back-end">
                    <SkillsCard name="Node.js" level={90} offset={-750} href="" src="/images/nodejs.svg" alt="Node.js" />
                    <SkillsCard name="Java" level={80} offset={-750} href="" src="/images/java.svg" alt="Java" />
                    <SkillsCard name="Python" level={80} offset={-750} href="" src="/images/python.svg" alt="Python" />
                    <SkillsCard name="PHP" level={60} offset={-750} href="" src="/images/php.svg" alt="PHP" />
                    <SkillsCard name="C++" level={50} offset={-750} href="" src="/images/cpp.svg" alt="C++" />
                </div>
                {/* Database */}
                <h2>Database</h2>
                <div className="skill-card-list database">
                    <SkillsCard name="MySQL" level={60} offset={-750} href="" src="/images/mysql.svg" alt="MySQL" />
                    <SkillsCard name="SQLite" level={60} offset={-750} href="" src="/images/sqlite.svg" alt="SQLite" />
                    <SkillsCard name="MongoDB" level={50} offset={-750} href="" src="/images/mongodb.svg" alt="MongoDB" />
                </div>
            </div>
        </div>
    )
}

export default Skills;