import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
const items = [
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    image: "src/images/mob.png",
    title: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: "⭐⭐⭐⭐⭐",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  // Add more items as needed
];


const Pro_Like = () => {

  const [items, setitems] = useState([]);

  useEffect(() => {
    const fetchPublicProducts = async () => {
      try {
        const res = await axios.get('http://localhost:4000/admin/products',{withCredentials:true});
        setitems(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPublicProducts();
  }, []);

  return (
    <div className="w-[40vh] h-[95vh] p-4 border border-gray-300 rounded-md flex flex-col items-center">
      <div className="text-lg font-semibold mb-2">Like Products</div>
      
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col">
          {items.slice(4, 14).map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 w-[30vh] p-3 m-2 rounded-md border border-gray-300 items-center justify-center"
            >
              <img
                src={item.images[0].url}
                className="h-[25vh] w-[25vh] object-cover"
                alt={item.title}
              />
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <p className="text-gray-400 text-[12px]">
                  {item.price} - {item.price + 10}$
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pro_Like;