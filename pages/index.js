import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import data from "./products";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const products = data;

  const notify = () => {
    toast.success('🦄 Successfully added!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    <main className="">
      <HeroBanner />
      <ToastContainer />
      <Wrapper>
        {/* Headind and paragraph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">Cushioning for Your Miles</div>
          <div className="text-md md:text-xl">A lightweight Nike ZoomX midsole is combined with increased stack heights to help provide cushioning during extended stretches of running.</div>
        </div>
        {/* Headind and paragraph end */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {products.map((p, index) =>(
          <ProductCard key={p.id} specs={p} toastify={notify}/>
        ))}
      </div>
      </Wrapper>
    </main>
  );
}
