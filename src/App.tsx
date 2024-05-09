import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Promotions } from './pages/Promotions/Promotions';
import { Delivery } from './pages/Delivery/Delivery';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='about'
					element={<About />}
				/>
				<Route
					path='promotions'
					element={<Promotions />}
				/>
				<Route
					path='delivery'
					element={<Delivery />}
				/>
				<Route
					path='contact'
					element={<Contact />}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
