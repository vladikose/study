import React from 'react';
import { useQuery } from '@apollo/client';
import ProductListing from 'shared/lib/productListing/productListing';
import { NodeByUri } from 'shared/lib/nodeByUri/nodeByUri';

const ShopLoad = () => {
    const { loading, error, data } = useQuery(NodeByUri, {
        variables: { uri: '/shop' },
    });

    if (loading) return <p>Loading...</p>;
    if (error) {
        return (
            <p>
                Error:
                {error.message}
            </p>
        );
    }

    const products = data?.products?.edges?.map(({ node }:{node:any}) => node) || [];
    return <ProductListing products={products} />;
};

export default ShopLoad;
