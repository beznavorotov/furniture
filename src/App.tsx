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
import { Profile } from './pages/Profile/Profile';
import { Cart } from './pages/Cart/Cart';
import { Reset } from './components/Reset/Reset';
import { Product } from './pages/Product/Product';
import { Catalog } from './pages/Catalog/Catalog';
import { AddToCartModalWindow } from './components/AddToCartModalWindow/AddToCartModalWindow';
import { Search } from './pages/Search/Search';

function Layout() {
  return (
    <>
      <AddToCartModalWindow />
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
        <Route path="reset" element={<Reset />} />
        <Route path="profile" element={<Profile />} />
        <Route path="favorites" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="catalog" element={<Catalog />} /> */}
        <Route path="catalog/:id" element={<Catalog />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
