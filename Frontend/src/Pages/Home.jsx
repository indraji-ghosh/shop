import React, { useEffect, useState } from 'react';

import Hero from '../Components/layout/Hero';
import GenderCollectionSection from '../Components/products/GenderCollectionSection';
import ProductDetails from '../Components/products/ProductDetails';
import ProductGrid from '../Components/products/ProductGrid';
import FeatureSection from '../Components/products/FeatureSection';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByFilters } from '../redux/slices/productSlice';
import axios from 'axios';

function Home() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() => {
    // Fetch women's bottom wear products
    dispatch(
      fetchProductByFilters({
        gender: 'Women',
        limit: 8,
      })
    );

    // Fetch best-seller product
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        if (response.data) setBestSellerProduct(response.data);
        console.log('Best Seller:', response.data);
        
      } catch (error) {
        console.error('Error fetching best seller:', error.message);
      }
    };

    fetchBestSeller();
  }, [dispatch]);

  return (
    <>
      <Hero />
      <GenderCollectionSection />

      {/* Best Seller Section */}
      <h2 className='text-center text-4xl font-bold mt-16'>Best Seller</h2>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct._id} />
      ) : loading ? (
        <p className='text-center'>Loading Best Seller Products...</p>
      ) : (
        <p className='text-center text-red-500'>Failed to load best seller.</p>
      )}

      {/* Women's Top Wear Section */}
      <div className='container max-w-6xl mx-auto'>
        <h2 className='text-center text-3xl font-bold mb-4'>Top Wears for Women</h2>
        {loading ? (
          <p className='text-center'>Loading Products...</p>
        ) : error ? (
          <p className='text-center text-red-500'>{error}</p>
        ) : (
          <ProductGrid products={products} loading={loading} error={error} />
        )}
      </div>

      <FeatureSection />
    </>
  );
}

export default Home;
