import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/LoginPage';  // Import LoginPage
import SignupPage from './routes/Signup';
import Header from './Header';
import Footer from './Footer';
import Image from './image';
import Homepage from './routes/HomePage';
import Signout from './SignOut';


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path='/signup' element={<SignupPage />} />
                    <Route path='/signout' element={<Signout />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;