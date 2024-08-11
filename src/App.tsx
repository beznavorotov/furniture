import { useEffect } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from '@/pages/Home/Home';
import { About } from '@/pages/About/About';
import { Contact } from '@/pages/Contact/Contact';
import { Promotions } from '@/pages/Promotions/Promotions';
import { Delivery } from '@/pages/Delivery/Delivery';
import { Profile } from '@/pages/Profile/Profile';
import { Cart } from '@/pages/Cart/Cart';
import { Product } from '@/pages/Product/Product';
import { Catalog } from '@/pages/Catalog/Catalog';
import { Order } from '@/pages/Order/Order';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { LogIn } from '@/pages/Authorize/LogIn/LogIn';
import { SignUp } from '@/pages/Authorize/SignUp/SignUp';
import { Reset } from '@/pages/Authorize/Reset/Reset';
import { AddToCartModalWindow } from '@/components/AddToCartModalWindow/AddToCartModalWindow';
import scrollToTop from '@/utils/scrollToTop';

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
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop('instant');
  }, [pathname]);

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
        <Route path="catalog/:id" element={<Catalog />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="order" element={<Order />} />
      </Route>
    </Routes>
  );
}

export default App;
