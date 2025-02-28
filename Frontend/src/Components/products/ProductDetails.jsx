import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetails, fetchSimilarProducts } from '../../redux/slices/productSlice';
import { addToCart } from '../../redux/slices/cartSlice';

function ProductDetails({ productId }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading, error, similarProducts } = useSelector((state) => state.products);
  const { user, guestId } = useSelector((state) => state.auth);

  const [mainImage, setMainImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const productFetchId = productId || id;

  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProducts({id: productFetchId})); 
    }
  }, [dispatch, productFetchId]);
  

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0]?.url);
    }
  }, [selectedProduct]);
  

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === 'plus' ? prev + 1 : prev > 1 ? prev - 1 : prev));
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error('Please select color and size', { duration: 1000 });
      return;
    }

    setIsButtonDisabled(true);
    dispatch(
      addToCart({
        productId: selectedProduct._id,
        quantity,
        color: selectedColor,
        size: selectedSize,
        guestId,
        userId: user?._id,
      })
    )
      .then(() => {
        toast.success('Product added to cart', { duration: 1000 });
      })
      .finally(() => setIsButtonDisabled(false));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      {selectedProduct && (
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* Image Gallery */}
            <div className="hidden md:flex flex-col space-y-4 mr-6">
              {selectedProduct.images?.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.altText || 'Product image'}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${mainImage === img.url ? 'border-black' : 'border-gray-300'}`}
                  onClick={() => setMainImage(img.url)}
                />
              ))}
            </div>

            <div className="md:w-1/2">
              <img
                src={mainImage}
                alt={selectedProduct.image?.[0]?.altText || 'Main product image'}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="md:w-1/2 md:ml-10">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">{selectedProduct.name}</h1>
              <p className="text-xl text-gray-600 mb-1 line-through">${selectedProduct.price}</p>
              <p className="text-xl mb-4 text-gray-800">${selectedProduct.discountPrice}</p>
              <p className="text-gray-700 mb-4">{selectedProduct.description}</p>

              {/* Color Selector */}
              <div className="mb-4">
                <p className="text-gray-700">Color:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.colors?.map((color, index) => (
                    <button
                      key={index}
                      style={{ backgroundColor: color.toLowerCase(), filter: 'brightness(0.8)' }}
                      className={`w-8 h-8 rounded-full border ${selectedColor === color ? 'border-4 border-black' : 'border-gray-300'}`}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-4">
                <p className="text-gray-700">Size:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.sizes?.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded border ${selectedSize === size ? 'bg-black text-white' : 'border-gray-300'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Control */}
              <div className="mb-6">
                <p className="text-gray-700">Quantity:</p>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => handleQuantityChange('minus')} className="px-2 py-1 bg-gray-200 rounded border">-</button>
                  <p className="px-2 py-1">{quantity}</p>
                  <button onClick={() => handleQuantityChange('plus')} className="px-2 py-1 bg-gray-200 rounded border">+</button>
                </div>
              </div>

              <button
                disabled={isButtonDisabled}
                onClick={handleAddToCart}
                className={`w-full py-2 bg-gray-800 text-white rounded ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-900'}`}
              >
                {isButtonDisabled ? 'Adding to cart...' : 'Add to cart'}
              </button>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl text-center font-semibold mb-4">You may also like</h2>
            <ProductGrid products={similarProducts} loading={loading} error={error} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
