import React from 'react';

const ProductListing = ({ products }:{products:any}) => (
    <div>
        <div className="products">
            {products.map((product :any) => (
                <div key={product.id} className="product">
                    <img src={product.image.sourceUrl} alt="" />
                    <h3>{product.name}</h3>
                </div>
            ))}
        </div>
    </div>
);

export default ProductListing;
