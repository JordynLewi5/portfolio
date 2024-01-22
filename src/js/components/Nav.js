import { useEffect } from "react";

function Nav() {
    const selector_icon = "👈"

    // Add event listener to nav for hamburger menu 
    useEffect(() => {
        const nav = document.querySelector('.nav');
        const nav_hamburger = document.querySelector('.nav-hamburger');
        const nav_menu = document.querySelector('.nav-menu');
        
        nav_hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        nav_menu.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        
        document.addEventListener('click', (e) => {
            if (e.target !== nav_hamburger && e.target !== nav_menu) {
                nav.classList.remove('active');
            }
        })
    }, []);

    return (
        <div className="nav">
            <div className="nav-hamburger">
                <div className="nav-hamburger-line" id="nav-hamburger-line-1"></div>
                <div className="nav-hamburger-line" id="nav-hamburger-line-2"></div>
                <div className="nav-hamburger-line" id="nav-hamburger-line-3"></div>
            </div>
            <div className="nav-connection-line"></div>
            <nav className="nav-menu">
                <ul className="nav-menu-list">
                    <a href="#landing-section" className="nav-menu-list-item">
                        <div class="nav-menu-list-item-text">Home</div>
                        <div className="nav-menu-list-item-selector">{selector_icon}</div>
                    </a>
                    <a href="#projects-section" className="nav-menu-list-item">
                        <div class="nav-menu-list-item-text">Projects</div>
                        <div className="nav-menu-list-item-selector">{selector_icon}</div>
                    </a>
                    <a href="#skills-section" className="nav-menu-list-item">
                        <div class="nav-menu-list-item-text">Skills</div>
                        <div className="nav-menu-list-item-selector">{selector_icon}</div>
                    </a>
                    <a href="#about-section" className="nav-menu-list-item">
                        <div class="nav-menu-list-item-text">About Me</div>
                        <div className="nav-menu-list-item-selector">{selector_icon}</div>
                    </a>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;