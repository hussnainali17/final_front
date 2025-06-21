import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Update_product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([{ url: '', alt: '' }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      title,
      description,
      price: parseFloat(price),
      stock: parseInt(stock, 10),
      category,
      images,
    };

    try {
      await axios.put(`http://localhost:4000/admin/products/${id}`, productData,{
  withCredentials: true // ✅ this sends the cookie
});
      navigate('/dashboard/product_view'); // Redirect after success
    } catch (err) {
      setError(err.message || 'Failed to update product');
    }
  };

  if (loading) return <div className="text-center py-4">Loading product details...</div>;
  if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Update Product</h2>

      {/* Title */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2 text-gray-700">Title</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 shadow focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2 text-gray-700">Description</label>
        <textarea
          className="w-full border rounded px-3 py-2 shadow focus:outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Price */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2 text-gray-700">Price</label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2 shadow focus:outline-none"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      {/* Stock */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2 text-gray-700">Stock</label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2 shadow focus:outline-none"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2 text-gray-700">Category</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 shadow focus:outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      {/* Images */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2 text-gray-700">Images</label>
        {images.map((image, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              placeholder="Image URL"
              value={image.url}
              onChange={(e) => handleImageChange(index, 'url', e.target.value)}
              className="w-1/2 border rounded px-3 py-2 shadow focus:outline-none"
            />
            <input
              type="text"
              placeholder="Alt Text"
              value={image.alt}
              onChange={(e) => handleImageChange(index, 'alt', e.target.value)}
              className="w-1/2 border rounded px-3 py-2 shadow focus:outline-none"
            />
            {images.length > 1 && (
              <button
                type="button"
                onClick={() => removeImageField(index)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1 rounded"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addImageField}
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded mt-2"
        >
          Add Image
        </button>
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none"
        >
          Update Product
        </button>
      </div>
    </form>
  );
};

export default Update_product;
