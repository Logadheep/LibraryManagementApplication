import './App.css';
import Login from './components/LoginPage/Login';
import Register from './components/LoginPage/Register';
import NavBar from './NavBar/NavBar';
import Home from './components/HomePage/Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
