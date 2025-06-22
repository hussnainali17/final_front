import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserDataContext } from '../../Context/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';
const Cart2 = () => {
  const [items, setItems] = useState([]);
  const { UCON, setUCON } = useContext(UserDataContext);
  const navigate=useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem('UCON');
    if (storedUser) {
      setUCON(JSON.parse(storedUser));
    }
  }, [setUCON]);

  useEffect(() => {
    const fetchCart = async () => {
      if (!UCON || !UCON.userId) return;

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/cart/get`, {
          userId: UCON.userId,
        },{withCredentials:true});

        const cartItems = response.data.items.map((item) => ({
          id: item.productId._id,
          title: item.productId.title,
          price: item.productId.price,
          quantity: item.quantity,
        }));

        setItems(cartItems);
      } catch (error) {
        console.error('Error fetching cart for checkout:', error);
      }
    };

    fetchCart();
  }, [UCON]);

  // Calculations
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal > 500 ? 10 : 0; // optionally apply a discount here
  const tax = subtotal * 0.1; // 10% tax (example)
  const total = subtotal - discount + tax;

  return (
    <div className="w-full border border-gray-300 p-4 md:p-7 rounded-md bg-white">
      {/* Coupon Section */}
      <div className="mb-4">
        <p className="text-gray-500 mb-2 text-sm md:text-base">Have a Coupon?</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <input
            type="text"
            placeholder="Add Coupon"
            className="flex-1 p-2 border border-gray-300 text-sm text-blue-500 rounded-md"
          />
          <button className="p-2 px-4 border border-gray-300 text-sm text-blue-500 rounded-md">
            Apply
          </button>
        </div>
      </div>

      {/* Summary Section */}
      <div className="flex flex-col items-center md:items-start border border-gray-300 p-4 rounded-md space-y-4">
        <div className="w-full border-b pb-2 border-gray-300 flex justify-between text-sm text-gray-600">
          <ul className="space-y-2">
            <li>Subtotal:</li>
            <li>Discount:</li>
            <li>Tax:</li>
          </ul>
          <ul className="space-y-2 text-right">
            <li>${subtotal.toFixed(2)}</li>
            <li className="text-red-600">- ${discount.toFixed(2)}</li>
            <li className="text-green-600">+ ${tax.toFixed(2)}</li>
          </ul>
        </div>

        <div className="flex justify-between w-full font-semibold text-base md:text-lg">
          <p>Total :</p>
          <p className="text-green-700 text-xl">${total.toFixed(2)}</p>
        </div>

        <button className="w-full md:w-auto p-2 px-6 text-sm text-white bg-green-600 rounded-md">
          CheckOut
        </button>

        <div className="flex justify-center md:justify-start gap-2 flex-wrap">
          <img src="https://i.postimg.cc/tJfZcNcW/payment-3.png" alt="Visa" className="h-6" />
          <img src="https://i.postimg.cc/RFSHJFf6/payment-1.png" alt="Mastercard" className="h-6" />
          <img src="https://i.postimg.cc/RFSHJFf6/payment-1.png" alt="Stripe" className="h-6" />
          <img src="https://i.postimg.cc/qR1CsTXm/payment-2.png" alt="PayPal" className="h-6" />
          <img src="https://i.postimg.cc/G3Sy9bpt/payment-4.png" alt="Apple Pay" className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default Cart2;
