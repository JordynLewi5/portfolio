import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'js/pages/Home';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path = "/" element={<Home />} />
                <Route path = "*" element={<Navigate to = "/" />} />
            </Routes>
        </div>
    );
}

export default App;