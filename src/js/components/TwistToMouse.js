import { useEffect } from 'react';

function TwistToMouse(props) {
    useEffect(() => {
        const TwistToMouse = document.querySelector('.twist-to-mouse');
        const TwistToMouseContent = document.querySelector('.twist-to-mouse-content');

        TwistToMouse.addEventListener("mousemove", function(event) {
            // Get the mouse coordinates within the element
            let rect = TwistToMouse.getBoundingClientRect();
            let mouseX = event.clientX - rect.left;
            let mouseY = event.clientY - rect.top;

            // Calculate the angle based on mouse position relative to the center
            let centerX = rect.width / 2;
            let centerY = rect.height / 2;
            let angleX = (centerY - mouseY) / centerY * -10; // Adjust the multiplier for the desired twist effect
            let angleY = (centerX - mouseX) / centerX * 10; // Adjust the multiplier for the desired twist effect

            // Apply the rotation to the content element
            TwistToMouseContent.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });

        // Reset the rotation when the mouse leaves the element
        TwistToMouse.addEventListener("mouseleave", function() {
            TwistToMouseContent.style.transform = "rotateX(0deg) rotateY(0deg)";
        });
    }, []);

    return (
        <div className="twist-to-mouse">
            <div className="twist-to-mouse-content">
                {props.children}
            </div>
        </div>
    );
}

export default TwistToMouse;
