import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetCart } from '../redux/cart/cartSlice';
const FakeLoader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    let timer = true;

    setTimeout(() => {
      if (timer) {
        toast.info(
          'your order was received  and is being proccesed , thanks for your purchase!',
          { position: 'top-center' }
        );
        dispatch(resetCart());
        navigate('/');
      }
    }, 5000);

    return () => {
      timer = false;
    };
  }, []);
  return (
    <dialog
      className="fixed top-0 left-0 bottom-0 right-0 h-screen w-screen  grid place-content-center z-50 overflow-hidden  open:bg-dark/80"
      open
    >
      <p className="w-[80px] h-[80px] border-8 border-b-semiBlue rounded-full animate-spin"></p>
    </dialog>
  );
};
export default FakeLoader;
