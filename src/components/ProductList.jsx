import React, { useState, useEffect } from 'react';
import ProductListItem from './ProductListItem';
import fakeData from '../fakeData.json';
import '../css/ProductList.css';

export default function ProductList() {
    const [allProducts, setAllProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        // fetch data
        fakeData.forEach((e) => (e.quantity = 1));
        setAllProducts(fakeData);
        setIsLoaded(true);
        return () => {};
    }, []);

    // change product quantity
    let changeProductQuantity = (id, quantity) => {
        let newAllProducts = allProducts.map((product) => {
            if (id === product.id) {
                product.quantity = quantity;
            }
            return product;
        });

        setAllProducts(newAllProducts);
    };

    // delete a product
    let deleteProduct = (id) => {
        setAllProducts(allProducts.filter((product) => id !== product.id));
    };

    // loading
    if (!isLoaded) return <div>loading</div>;
    // display data
    return (
        <div>
            <ul className="productList">
                {allProducts.map((product) => (
                    <ProductListItem
                        product={product}
                        key={product.id}
                        changeProductQuantity={changeProductQuantity}
                        deleteProduct={deleteProduct}
                    />
                ))}
            </ul>
        </div>
    );
}
