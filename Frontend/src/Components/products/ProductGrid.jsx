import React from 'react';
import { Link } from 'react-router-dom';

function ProductGrid({ products, loading, error }) {
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }
    if (!products || products.length === 0) {
        return <p>No products found.</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
                <Link to={`/product/${product._id}`} key={index}>
                    <div className="bg-white rounded-lg p-4">
                        <div className='w-full h-70 mb-4'>
                            <img
                                src={product.images?.[0]?.url || 'default-image-url'} // Fallback to a default image
                                alt={product.images?.[0]?.altText || 'Product image'} // Fallback to a default alt text
                                className='w-full h-full object-cover rounded-lg'
                            />
                        </div>
                        <h3 className='text-sm font-medium mb-2'>{product.name}</h3>
                        <p className='text-gray-600 mb-2 font-medium text-sm tracking-tighter'>${product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ProductGrid;