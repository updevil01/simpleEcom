import React from 'react';

const ProductCard = ({ product }) => {

    return (
        <div className="card">
             <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Price: {product.price} Bath.</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductCard;
