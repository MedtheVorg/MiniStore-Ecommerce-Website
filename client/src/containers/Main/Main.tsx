//React router
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

// Pages
import HomePage from '../../pages/HomePage.tsx';
import ContactPage from '../../pages/ContactPage.tsx';
import AboutPage from '../../pages/AboutPage.tsx';
import ShopPage from '../../pages/shopPage/ShopPage.tsx';
import ErrorPage from '../../pages/error/ErrorPage.tsx';

import ProductPage from '../../pages/productPage/ProductPage.tsx';
import CartPage from '../../pages/cartPage/CartPage.tsx';
import CheckOutPage from '../../pages/checkoutPage/CheckOutPage.tsx';
import BlogsPage from '../../pages/blogsPage/BlogsPage.tsx';
import LogInPage from '../../pages/LogInPage.tsx';
import SignUpPage from '../../pages/SignUpPage.tsx';
import { StoreType } from '../../redux/reduxStore.ts';
import { useSelector } from 'react-redux';
import ProfilePage from '../../pages/ProfilePage.tsx';
import { AnimatePresence } from 'framer-motion';
import FramerMotionWrapper from '../../components/FramerMotionWrapper.tsx';
import BlogPage from '../../pages/blogsPage/BlogPage.tsx';

const Main = () => {
  const user = useSelector((state: StoreType) => state.userState.user);
  const cartProducts = useSelector(
    (state: StoreType) => state.cartState.products
  );

  const location = useLocation();

  return (
    <main>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            index
            element={
              <FramerMotionWrapper>
                <HomePage />
              </FramerMotionWrapper>
            }
          />
          <Route
            path="about"
            element={
              <FramerMotionWrapper>
                <AboutPage />
              </FramerMotionWrapper>
            }
          />
          <Route
            path="contact"
            element={
              <FramerMotionWrapper>
                <ContactPage />
              </FramerMotionWrapper>
            }
          />
          <Route
            path="shop"
            element={
              <FramerMotionWrapper>
                <ShopPage />
              </FramerMotionWrapper>
            }
          />
          <Route
            path="shop/:id"
            element={
              <FramerMotionWrapper>
                <ProductPage />
              </FramerMotionWrapper>
            }
          />
          <Route
            path="cart"
            element={
              <FramerMotionWrapper>
                <CartPage />
              </FramerMotionWrapper>
            }
          />
          <Route
            path="checkout"
            element={
              cartProducts.length > 0 ? (
                user ? (
                  <FramerMotionWrapper>
                    <CheckOutPage />
                  </FramerMotionWrapper>
                ) : (
                  <FramerMotionWrapper>
                    <LogInPage />
                  </FramerMotionWrapper>
                )
              ) : (
                <Navigate to={'/'} />
              )
            }
          />
          <Route
            path="blogs"
            element={
              <FramerMotionWrapper>
                <BlogsPage />
              </FramerMotionWrapper>
            }
          />
          <Route
            path="blogs/:id"
            element={
              <FramerMotionWrapper>
                <BlogPage />
              </FramerMotionWrapper>
            }
          />
          <Route
            path="profile"
            element={
              user ? (
                <FramerMotionWrapper>
                  <ProfilePage />
                </FramerMotionWrapper>
              ) : (
                <Navigate to={'/'} />
              )
            }
          />
          <Route
            path="auth/login"
            element={
              user == null ? (
                <FramerMotionWrapper>
                  <LogInPage />
                </FramerMotionWrapper>
              ) : (
                <Navigate to={'/'} />
              )
            }
          />
          <Route
            path="auth/signup"
            element={
              user == null ? (
                <FramerMotionWrapper>
                  <SignUpPage />
                </FramerMotionWrapper>
              ) : (
                <Navigate to={'/'} />
              )
            }
          />

          <Route
            path="*"
            element={
              <FramerMotionWrapper>
                <ErrorPage />
              </FramerMotionWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </main>
  );
};
export default Main;
