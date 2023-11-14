import React from "react";
import { useAuth } from "../../../AuthProvider/AuthProvider";
import { useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const Cart = () => {
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();

  const [cartProduct, setCartProduct] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    axiosSecure.get(`/get-cart/${user?.email}`)
      .then(res => {
        setCartProduct(res?.data?.data);
      })
  }, [control])


  const totalPrice = cartProduct.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleInc = (id) => {
    const updateQuantity = {
      id: id,
      type: "inc"
    };
    axiosSecure.put('/update-cart-product-quantity', updateQuantity)
      .then(res => {
        if (res?.data?.success) {
          setControl(true)
        }
      })
      .catch(err => {
        console.log(err.message);
      })
  }
  const handleDec = (id) => {
    const updateQuantity = {
      id: id,
      type: "dec"
    };
    axiosSecure.put('/update-cart-product-quantity', updateQuantity)
      .then(res => {
        if (res?.data?.success) {
          setControl(true)
        }
      })
      .catch(err => {
        console.log(err.message);
      })
  }
  return (
    <div className="max-w-[1200px] mx-auto">
      <h2 className="my-10 md:text-5xl text-xl ms-2">My Cart Page</h2>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-8 col-span-12 p-10">
          <div className="flex justify-between items-center">
            <span className="font-bold">{cartProduct?.length} item Added</span>
            <span className="font-bold">Total: ${totalPrice}</span>
          </div>
          {cartProduct.map((item, i) => {
            return (
              <div key={i} className="p-2 border mt-4">
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-start gap-2">
                    <img className="w-[100px]" src={item?.product_image} alt="image" />
                    <div className="flex flex-col justify-center items-start ps-6 py-2">
                      <h3 className="font-bold">{item?.product_name.length > 54 ? item?.product_name.slice(0, 54) : item?.product_name}</h3>
                      <h2 className="mt-4">${item?.price}</h2>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <button onclick={() => handleDec(item._id)} className="btn hover:bg-black btn-sm text-xl bg-black text-white" disabled={item?.quantity === 1}>-</button>
                      <p>{item?.quantity}</p>
                      <button onClick={() => handleInc(item._id)} className="btn hover:bg-black btn-sm text-xl bg-black text-white">+</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:col-span-4 col-span-12 p-10 flex flex-col gap-2">
          <h3 className="text-black font-bold">Product Details</h3>
          <div>
            <div className="flex justify-between items-start">
              <p>Total Price</p>
              <p>{totalPrice}</p>
            </div>
            <div className="flex justify-between items-start">
              <p>Discount</p>
              <p>0</p>
            </div>
            <div className="flex justify-between items-start">
              <p>Tex</p>
              <p>0</p>
            </div>
            <hr />
            <div className="flex justify-between items-start mt-5">
              <p>Order Total</p>
              <p>${totalPrice}</p>
            </div>
            <button className="brand-btn mt-5 w-full py-1">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
