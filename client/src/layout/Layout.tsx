import { useLocation } from 'react-router-dom';
import ShoppingCart from '../components/ShoppingCart';
import { Footer, Header, Main } from '../containers';
import { useEffect } from 'react';
import GoToTheTop from '../components/GoToTheTop';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
}
const Layout = () => {
  return (
    <>
      <Header />
      <Main />
      {/* <Footer /> */}
      <ScrollToTop />
      <ShoppingCart />
      <GoToTheTop />
    </>
  );
};
export default Layout;
