
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './compouent/Header';
import  { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './compouent/Footer';

function App() {

  const dispatch = useDispatch()
  const producData = useSelector((state) => state.product)
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`)
      const resData = await res.json()
      dispatch(setDataProduct(resData))
    })()
  }, [dispatch])


  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
