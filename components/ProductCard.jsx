import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';


const ProductCard = (props) => {
    const product = props.specs.attributes;
    const dispatch = useDispatch();
  return (
    <div className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
        <img className="w-full" src={product.image} alt="Product Image" />
        <div className='p-4 text-black/[0.9]'>
            <h2 className='text-lg font-medium inline'>{product.name}</h2>
            <div className="flex items-center text-black/[0.5]">
                <p className="mr-2 text-lg font-semibold">₹{product.price}</p>
                {product.price != product.original_price && (
                    <>
                        <p className="text-base font-medium line-through">₹{product.original_price}</p>
                        <p className="ml-auto text-base font-medium text-green-500">{(((product.original_price-product.price)/product.original_price)*100).toFixed(2)}% off</p>
                    </>
                )}
            </div>
            
            <button 
                className='w-1/2 py-1 rounded-full bg-black text-white text-lg
                font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'
                
                onClick={()=>{
                    dispatch(addToCart({
                        ...props.specs,
                        oneQuantityPrice: product.price
                    })
                );
                props.toastify();
            }}
            >
                Add to Cart
            </button>
        </div>
    </div>
  );
}

export default ProductCard;

{/*className='border-red-500 bg-blue-400 rounded-full px-2 text-white 
                font-semibold duration-200 hover:scale-105 cursor-pointer'*/}