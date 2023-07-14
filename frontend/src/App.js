import './App.css';
import Login from './components/LoginPage/Login';
import Register from './components/LoginPage/Register';
import NavBar from './NavBar/NavBar';
import Home from './components/HomePage/Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, } from 'react-router-dom';
import ProfileView from './components/Profile/ProfileView';
import Dashboard from './components/Dashboard/Dashboard';
import RequestForm from './components/RequestForm/RequestForm';
import About from './components/About/About';

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/profile" element={<ProfileView />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/about" element={<About />} />
					<Route path="/request" element={<RequestForm />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
