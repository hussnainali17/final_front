import React from "react";
import { useContext } from "react";
import { ProductDataContext } from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const categories = [
  {
    title: "Home and outdoor",
    image: "https://i.postimg.cc/HkM5fFdx/Group.png",
    button: true,
  },
  {
    title: "Consumer electronics and gadgets",
    image: "https://i.postimg.cc/7PBg7gKx/gadgets.png",
    button: true,
  },
];

const CategoryBlock = ({ title, button, items, image , onItemClick }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-white border  border-gray-300 rounded-xl p-0 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Desktop title section */}
        {image && (
          <div className="hidden md:block col-span-1 relative">
            <img
              src={image}
              alt="category"
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 text-gray-700 bg-opacity-50 p-2 rounded space-y-2 max-w-full">
              <div className="text-lg font-semibold whitespace-normal break-words">
                {title}
              </div>
              <button className="bg-white text-black text-sm font-medium px-3 py-1 rounded hover:bg-gray-200 transition">
                Source Now
              </button>
            </div>
          </div>
        )}

        {/* Main content */}
        <div className="col-span-1 md:col-span-4 w-full">
          {/* MOBILE ONLY */}
          <div className="md:hidden px-4 pt-4 pb-2">
            <div className="text-base font-semibold text-gray-800">{title}</div>
          </div>
          <div className="md:hidden w-full overflow-x-auto border-b border-gray-200">
            <div className="flex flex-nowrap gap-0">
              {items.slice(0,8).map((item, idx) => (
                <div
                  onClick={() => onItemClick(item)}
                  key={idx}
                  className="min-w-[140px] flex-shrink-0 flex flex-col items-center text-center py-3 border-r border-gray-200 last:border-r-0"
                >
                  <img
                    src={item.images[0].url}
                    alt={item.title}
                    className="h-16 w-auto object-contain mb-2"
                  />
                  <div className="font-normal text-[15px] text-gray-800 mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-500">From {item.price}</div>
                </div>
              ))}
            </div>
          </div>
          {button && (
            <div className="md:hidden px-4 py-3">
              <button className="text-blue-600 font-medium flex items-center gap-1">
                Source now <span aria-hidden>→</span>
              </button>
            </div>
          )}
          {/* DESKTOP */}
          <div className="hidden md:grid grid-cols-4 gap-4 mt-4">
            {items.slice(0,8).map((item, idx) => (
              <div onClick={() => onItemClick(item)}
                key={idx}
                className="bg-white border border-gray-200 p-4 rounded-lg flex flex-col items-center text-center"
              >
                <img
                  src={item.images[0].url}
                  alt={item.title}
                  className="h-20 object-contain mb-3"
                />
                <div className="font-medium text-sm text-gray-800">
                  {item.title}
                </div>
                <div className="text-xs text-gray-500">From {item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductGrid({ groupedProducts }) {
  

  const electronics = groupedProducts["Consumer electronics and gadgets"] || [];
  const homeAndOutdoor = groupedProducts["Home And Outdoor"] || [];
   const { Product, setProduct } = useContext(ProductDataContext);
    const navigate = useNavigate();
    const handleViewDetails = async (item) => {
        try {
           
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/product/${item._id}`, { withCredentials: true });
            localStorage.setItem('productDetails', JSON.stringify(res.data)); 
            setProduct({
                id: res.data._id,
                title: res.data.title,
                price: res.data.price,
                stock: res.data.stock,
                description: res.data.description,
                images: res.data.images,
                category: res.data.category,
            });
            navigate('/product_detail'); // Navigate to the product details page
        } catch (error) {
            console.error('Error fetching product details:', error);
            // Handle error (e.g., display an error message)
        }
    };

  return (
    <div className="px-0 md:px-6 bg-gray-100 space-y-0">
      <CategoryBlock
        title="Home and outdoor"
        items={homeAndOutdoor}
        image="https://i.postimg.cc/HkM5fFdx/Group.png"
        button={true}
        onItemClick={handleViewDetails}
      />
      <CategoryBlock
        title="Consumer electronics and gadgets"
        items={electronics}
        image="https://i.postimg.cc/7PBg7gKx/gadgets.png"
        button={true}
        onItemClick={handleViewDetails}
      />
    </div>
  );
}


// const categories = [
// 	{
// 		title: "Home and outdoor",
// 		tag: null,
// 		button: true,
// 		image: "src/images/Group.png",
// 		items: [
// 			{ name: "Soft chairs", price: "USD 19", image: "src/images/g-1.png" },
// 			{ name: "Sofa & chair", price: "USD 19", image: "src/images/g-1.png" },
// 			{ name: "Kitchen dishes", price: "USD 19", image: "src/images/g-2.png" },
// 			{ name: "Smart watches", price: "USD 19", image: "src/images/g-2.png" },
// 			{ name: "Kitchen mixer", price: "USD 100", image: "src/images/g-2.png" },
// 			{ name: "Blenders", price: "USD 39", image: "src/images/g3.png" },
// 			{ name: "Home appliance", price: "USD 19", image: "src/images/g3.png" },
// 			{ name: "Coffee maker", price: "USD 19", image: "src/images/g3.png" },
// 		],
// 	},
// 	{
// 		title: "Consumer electronics and gadgets",
// 		tag: null,
// 		button: true,
// 		image: "src/images/gadgets.png",
// 		items: [
// 			{ name: "Smart watches", price: "USD 19", image: "src/images/g3.png" },
// 			{ name: "Cameras", price: "USD 89", image: "src/images/g3.png" },
// 			{ name: "Headphones", price: "USD 10", image: "src/images/g3.png" },
// 			{ name: "Smart watches", price: "USD 90", image: "src/images/g3.png" },
// 			{ name: "Gaming set", price: "USD 35", image: "src/images/g3.png" },
// 			{ name: "Laptops & PC", price: "USD 340", image: "src/images/g3.png" },
// 			{ name: "Smartphones", price: "USD 19", image: "src/images/g3.png" },
// 			{ name: "Electric kettle", price: "USD 240", image: "src/images/g3.png" },
// 		],
// 	},
// ];
//  const CategoryBlock = ({ title, button, items, image }) => (
// 	<div className="bg-white border border-gray-300 rounded-xl p-0 mb-4">
// 		<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
// 			{/* Desktop title section (unchanged) */}
// 			{image && (
// 				<div className="hidden md:block col-span-1 relative">
// 					<img
// 						src={image}
// 						alt="category"
// 						className="rounded-lg w-full h-full object-cover"
// 					/>
// 					<div className="absolute top-2 left-2 text-gray-700 bg-opacity-50 p-2 rounded space-y-2 max-w-full">
// 						<div className="text-lg font-semibold whitespace-normal break-words">
// 							{title}
// 						</div>
// 						<button className="bg-white text-black text-sm font-medium px-3 py-1 rounded hover:bg-gray-200 transition">
// 							Source Now
// 						</button>
// 					</div>
// 				</div>
// 			)}
// 			{/* Main content */}
// 			<div className="col-span-1 md:col-span-4 w-full">
// 				{/* MOBILE ONLY */}
// 				<div className="md:hidden px-4 pt-4 pb-2">
// 					<div className="text-base font-semibold text-gray-800">{title}</div>
// 				</div>
// 				<div className="md:hidden w-full overflow-x-auto border-b border-gray-200">
// 					<div className="flex flex-nowrap gap-0">
// 						{items.map((item, idx) => (
// 							<div
// 								key={idx}
// 								className="min-w-[140px] flex-shrink-0 flex flex-col items-center text-center py-3 border-r border-gray-200 last:border-r-0"
// 							>
// 								<img
// 									src={item.image}
// 									alt={item.name}
// 									className="h-16 w-auto object-contain mb-2"
// 								/>
// 								<div className="font-normal text-[15px] text-gray-800 mb-1">
// 									{item.name}
// 								</div>
// 								<div className="text-xs text-gray-500">From {item.price}</div>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 				{button && (
// 					<div className="md:hidden px-4 py-3">
// 						<button className="text-blue-600 font-medium flex items-center gap-1">
// 							Source now <span aria-hidden>→</span>
// 						</button>
// 					</div>
// 				)}
// 				{/* DESKTOP remains unchanged */}
// 				<div className="hidden md:grid grid-cols-4 gap-4 mt-4">
// 					{items.map((item, idx) => (
// 						<div
// 							key={idx}
// 							className="bg-white border border-gray-200 p-4 rounded-lg flex flex-col items-center text-center"
// 						>
// 							<img
// 								src={item.image}
// 								alt={item.name}
// 								className="h-20 object-contain mb-3"
// 							/>
// 							<div className="font-medium text-sm text-gray-800">
// 								{item.name}
// 							</div>
// 							<div className="text-xs text-gray-500">From {item.price}</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// );

// export default function ProductGrid({groupedProducts}) {
// console.log("Grouped Products in details:", groupedProducts);
// const electronics=groupedProducts['Consumer electronics and gadgets'] || [];
// const homeAndOutdoor=groupedProducts['Home And Outdoor'] || [];
// // const specific={
// // 	"Home And Outdoor": groupedProducts['Home And Outdoor'],
// // 	"Consumer electronics and gadgets": groupedProducts['Consumer electronics and gadgets']
// // }
// 	return (
// 		<div className="px-0 md:px-6 bg-gray-100 min-h-screen space-y-0">
// 			{categories.map((cat, index) => (
// 				<div className="mb-0" key={index}>
// 					<CategoryBlock {...cat} />
// 				</div>
// 			))}
// 		</div>
// 	);
// }
