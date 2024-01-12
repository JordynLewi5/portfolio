import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from 'js/components/Footer';
import Home from 'js/pages/Home';
/* Projects */
import ESBLights from 'js/pages/projects/ESBLights';
import ESBLightsHue from 'js/pages/projects/ESBLightsHue';
import Partie from 'js/pages/projects/Partie';
import RowingGuide from 'js/pages/projects/RowingGuide';
import RowingGuideDemo from 'js/pages/demo/RowingGuideDemo'
function App() {
    return (
        <div className="app">
            <Routes>
                <Route path = "/" element={<Home />} />
                <Route path = "/esblights" element={<ESBLights />} />
                <Route path = "/esblights-hue" element={<ESBLightsHue />} />
                <Route path = "/partie" element={<Partie />} />
                <Route path = "/rowing-guide" element={<RowingGuide />} />
                <Route path = "/demo/rowing-guide" element={<RowingGuideDemo />} />
                <Route path = "*" element={<Navigate to = "/" />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;