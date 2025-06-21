import { useState, useContext, useEffect } from 'react';
import { UserDataContext } from '../../Context/UserContext';
import axios from 'axios';

const Pro_Cart = () => {
  const [items, setItems] = useState([]);
  const { UCON, setUCON } = useContext(UserDataContext);

  useEffect(() => {
    const storedUser = localStorage.getItem('UCON');
    if (storedUser) {
      setUCON(JSON.parse(storedUser));
    }
  }, [setUCON]);

  useEffect(() => {
    if (!UCON || !UCON.userId) return;

    const fetchCart = async () => {
      try {
        const response = await axios.post('http://localhost:4000/cart/get', {
          userId: UCON.userId
        },{withCredentials:true});

        const cartItems = response.data.items.map((item) => ({
          id: item.productId._id,
          image: item.productId.images[0]?.url || '',
          title: item.productId.title,
          price: item.productId.price,
          quantity: item.quantity,
        }));

        setItems(cartItems);
      } catch (error) {
        console.error('Error fetching cart:', error.response?.data || error.message);
      }
    };

    fetchCart();
  }, [UCON]);

  const handleIncrement = async (productId) => {
    try {
      await axios.post('http://localhost:4000/cart/add', {
        userId: UCON.userId,
        items: [{ productId, quantity: 1 }]
      },{withCredentials:true});

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } catch (error) {
      console.error('Error incrementing quantity:', error);
    }
  };

  const handleDecrement = async (productId, quantity) => {
    try {
      // Send removal request
      await axios.post('http://localhost:4000/cart/remove', {
        data: {
          productId,
          userId: UCON.userId
        }
      },{withCredentials:true});

      // If quantity was 1, remove item entirely
      if (quantity === 1) {
        setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
      } else {
        // Otherwise, just decrement quantity
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
          )
        );
      }
    } catch (error) {
      console.error('Error decrementing quantity:', error);
    }
  };

  if (!UCON || !UCON.userId) {
    return <div className="p-4">Loading cart...</div>;
  }

  return (
    <div className="w-full mx-auto bg-white rounded-md border border-gray-300 md:w-[90%]">
      <div className="p-4 border-b font-semibold text-lg block md:hidden">
        Shopping cart
      </div>

      {items.length === 0 ? (
        <div className="p-6 text-gray-500 text-center">Your cart is empty.</div>
      ) : (
        items.map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-start md:items-center border-b p-4 sm:p-6">
            <div className="w-20 h-20 md:w-[80px] md:h-[80px] flex-shrink-0 flex items-center justify-center mb-2 md:mb-0">
              <img src={item.image} alt={item.title} className="object-contain w-full h-full" />
            </div>

            <div className="flex-1 w-full md:ml-4">
              <div className="flex justify-between md:justify-between items-start">
                <p className="text-sm font-semibold md:text-base">{item.title}</p>
                <p className="text-sm font-semibold md:text-base">${item.price}</p>
              </div>

              <p className="text-gray-500 text-xs mt-1">
                Size: medium, Color: blue<br />
                Seller: Artel Market
              </p>

              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center border rounded-md px-2 py-1 text-sm gap-2">
                  <button className="text-xl" onClick={() => handleDecrement(item.id, item.quantity)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="text-xl" onClick={() => handleIncrement(item.id)}>+</button>
                </div>
                <div className="text-gray-500 text-lg">
                  <i className="fas fa-ellipsis-v"></i>
                </div>
              </div>

              <div className="hidden md:flex gap-3 mt-3">
                <button
                  className='p-2 text-sm border border-gray-300 text-red-600 rounded-md'
                  onClick={() => handleDecrement(item.id, 1)} // acts as full remove
                >
                  Remove
                </button>
                <button className='p-2 text-sm border border-gray-300 text-blue-500 rounded-md'>Save for Later</button>
              </div>
            </div>
          </div>
        ))
      )}

      {items.length > 0 && (
        <div className='hidden md:flex justify-between px-5 items-center m-6'>
          <button className='p-2 mt-2 bg-blue-500 text-sm text-white rounded-md'>
            <i className="fa-solid fa-arrow-left"></i> Back To Shop
          </button>
          <button className='p-2 mt-2 border border-gray-300 text-sm text-blue-500 rounded-md'>Remove All</button>
        </div>
      )}
    </div>
  );
};

export default Pro_Cart;
