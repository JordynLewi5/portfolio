import { useEffect } from "react";


function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="contact-links">
                <a id="github" href="https://www.github.com/jordynlewi5" target="__">
                    <img src="/images/github.svg" alt="GitHub" />
                </a>
                <a id="linkedin" href="https://www.linkedin.com/in/jordyn-lewis-60a1bb1ba/" target="__">
                    <img src="/images/linkedin.svg" alt="LinkedIn" />
                </a>
                <a id="email" href="mailto:jcl0076@auburn.edu" target="__">
                    <img src="/images/email.svg" alt="Email" />
                </a>
            </div>
            <div className="footer-text">
                <p>© {currentYear} Jordyn Lewis</p>
            </div>
        </div>
    )
}

export default Footer;