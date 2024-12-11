import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './data.module.scss';

interface Image {
    id: number;
    src: string; // URL изображения
    alt: string;
}

interface Product {
    id: number;
    name: string;
    images: Image[];
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]); // Устанавливаем тип состояния для продуктов
    const [error, setError] = useState<string | null>(null); // Устанавливаем тип состояния для ошибок

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const consumerKey = 'ck_893747800836200eea532a1fad49ab8b4ba803e0';
                const consumerSecret = 'cs_57a64ae2f98c6a613b64d4140638aa49e9ff695b';
                const headers = {
                    Authorization: `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
                };
                const response = await axios.get<Product[]>(
                    'https://omoikiri.ru/wp-json/wc/v3/products?category=33',
                    { headers },
                );
                setProducts(response.data);
                console.log('Product Response:', response.data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch products');
            }
        };
        fetchProducts();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    const formatImageUrl = (url: string): string => {
        const extensionIndex = url.lastIndexOf('.');
        if (extensionIndex === -1) return url; // Если расширение не найдено, возвращаем оригинальный URL
        return `${url.slice(0, extensionIndex)}-300x300${url.slice(extensionIndex)}`;
    };

    return (
        <div>
            <h1>Products</h1>
            <div className={classNames(cls.data, {})}>
                {products.map((product) => (
                    <div className={classNames(cls.item, {})} key={product.id}>
                        {product.images && product.images.length > 0 && (
                            <img
                                src={formatImageUrl(product.images[0].src)}
                                alt={product.images[0].alt}
                                style={{ width: '100px', height: 'auto' }}
                            />
                        )}
                        <strong>{product.name}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
