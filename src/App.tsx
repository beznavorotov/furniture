import { Outlet, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Promotions } from './pages/Promotions/Promotions';
import { Delivery } from './pages/Delivery/Delivery';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { LogIn } from './components/LogIn/LogIn';
import { SignUp } from './components/SignUp/SignUp';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="promotions" element={<Promotions />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
