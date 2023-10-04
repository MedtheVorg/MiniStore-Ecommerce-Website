import { Routes, Route } from 'react-router-dom';

//toast notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './layout/Layout';
function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
