import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link

const View_product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/admin/products',{
  withCredentials: true // ✅ this sends the cookie
}); // Replace with your API endpoint
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/admin/products/${id}`,{
  withCredentials: true // ✅ this sends the cookie
}); // Replace with your API endpoint
      // Update the product list after successful deletion
      setProducts(products.filter(product => product._id !== id));
    } catch (err) {
      setError(err.message || 'Failed to delete product');
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            {product.images && product.images.length > 0 ? (
              <img
                className="w-full h-48 object-cover"
                src={product.images[0].url} // Assuming the first image is the main image
                alt={product.images[0].alt}
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                No Image
              </div>
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-gray-700">{product.description && product.description.substring(0, 100) + '...'}</p>
              <p className="text-sm text-gray-500">Stock: {product.stock}</p>

              {/* Update and Delete Buttons */}
              <div className="mt-4 flex space-x-2">
                <Link
                  to={`/dashboard/product_update/${product._id}`} // Link to update page
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Update
                </Link>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleDelete(product._id)} // Call handleDelete on click
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View_product;