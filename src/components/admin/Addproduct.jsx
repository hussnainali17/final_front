import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState([{ url: '', alt: '' }]);

    const handleImageChange = (index, field, value) => {
        const newImages = [...images];
        newImages[index][field] = value;
        setImages(newImages);
    };

    const addImageField = () => {
        setImages([...images, { url: '', alt: '' }]);
    };

    const removeImageField = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        const productData = {
            title,
            description,
            price,
            stock,
            category,
            images,
        };
        console.log(productData);
        // For demonstration
        const addProduct = async () => {
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/products_add`, productData,{
  withCredentials: true // ✅ this sends the cookie
});
                console.log("Product added successfully:", response.data);
            } catch (error) {
                console.error("Error adding product:", error.response?.data || error.message);
            }
        };

        addProduct();
        setTitle('');
        setDescription(''); 
        setPrice('');
        setStock('');
        setCategory('');
        setImages([{ url: '', alt: '' }]); // Reset images to initial state
    };

        return (
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Product Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        placeholder="Product Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="number"
                        placeholder="Product Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
                        Stock
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="stock"
                        type="number"
                        placeholder="Product Stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Category
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category"
                        type="text"
                        placeholder="Product Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Images
                    </label>
                    {images.map((image, index) => (
                        <div key={index} className="mb-4 flex items-center space-x-2">
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`url-${index}`}>
                                    URL
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id={`url-${index}`}
                                    type="text"
                                    placeholder="Image URL"
                                    value={image.url}
                                    onChange={(e) => handleImageChange(index, 'url', e.target.value)}
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`alt-${index}`}>
                                    Alt Text
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id={`alt-${index}`}
                                    type="text"
                                    placeholder="Image Alt Text"
                                    value={image.alt}
                                    onChange={(e) => handleImageChange(index, 'alt', e.target.value)}
                                />
                            </div>
                            {images.length > 1 && (
                                <button
                                    type="button"
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() => removeImageField(index)}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                        onClick={addImageField}
                    >
                        Add Image
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        );
    };

    export default AddProductForm;