import ProjectWrapper from "js/components/ProjectWrapper"; 
import CaptionImage from "js/components/CaptionImage";

function ESBLights() {
  return (
    <ProjectWrapper title="Empire State Building Lights (ESB Lights)">

        <CaptionImage src="/images/esblights-thumbnail.png" alt="ESB Lights Website" caption="Click to view ⮕" className="image-link" href="https://esblights.kinetic.com"/>

        <p>
          This was a really cool project to work on that employed many of the skills
          I've developed over the years during my software engineering journey.
        </p>
        <h3>What is it?</h3>
        <p>
          ESB Lights is a network of applications consisting of and utilizing
          my <a href="https://esblights.kinetic.com/#api" target="__">ESB Lights API</a>.
          The API allows users to request derived hexcode color information about the current state
          of the Empire State Building's lights. Users can then use the color data in any application they
          need; in my case I wanted to display the colors on a Hue Lights system, which uses the 1931 CIE color coding
          system, which the API also provides data for. The ESB Lights website demos the API and shows a few recent
          color schemes, so feel free to check it out!
        </p>
        <h3>How Does it Work?</h3>
        <p>
          When a request is made to the API, the server will check to see if the color data already exists
          in its database, if it does then the server responds with the exisiting color data. If the color doesn't
          yet exist, then a fetch request is made to the Empire State Building's website to pull the HTML and extract
          the color description. Then a request is made to the OpenAI API (ChatGPT 3.5 Model) prompting it to derive some
          hexcode color scheme from the color description. The server receives a response and parses out the hexcodes.
          Some calculations are done to provide data for other color coding systems, for ease of use, and then all of the
          data is sent back to the initial requester.
        </p>
    </ProjectWrapper>
  );
}

export default ESBLights;