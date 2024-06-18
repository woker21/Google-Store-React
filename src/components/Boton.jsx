import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('/products.json');
            const data = await res.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Productos de Amazon</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <a href={product.url} target="_blank" rel="noopener noreferrer">Ver en Amazon</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
