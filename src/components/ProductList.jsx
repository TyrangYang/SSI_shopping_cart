import React, { useState, useEffect, useMemo } from 'react';
import ProductListItem from './ProductListItem';
import CheckoutModule from './Checkout';
import fakeData from '../fakeData.json';
import '../css/ProductList.css';

import { Button } from '@material-ui/core';

export default function ProductList() {
    const [allProducts, setAllProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showCheckout, setShowCheckout] = useState(true);

    useEffect(() => {
        // fetch data
        fakeData.forEach((e) => (e.quantity = 1));
        setAllProducts(fakeData);
        setIsLoaded(true);

        return () => {};
    }, []);

    const totalPrice = useMemo(() => {
        return (
            Math.ceil(
                allProducts.reduce((prev, cur) => {
                    return (
                        prev +
                        cur.quantity * cur.price * 100 * (1 - cur.discount)
                    );
                }, 0)
            ) / 100
        );
    }, [allProducts]);

    // change product quantity
    const changeProductQuantity = (id, quantity) => {
        let newAllProducts = allProducts.map((product) => {
            if (id === product.id) {
                product.quantity = +quantity;
            }
            return product;
        });

        setAllProducts(newAllProducts);
    };

    // delete a product
    const deleteProduct = (id) => {
        setAllProducts(allProducts.filter((product) => id !== product.id));
    };

    // loading
    if (!isLoaded) return <div>loading</div>;
    // display data
    return (
        <div>
            <table className="productList">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Discount</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts.map((product) => (
                        <ProductListItem
                            product={product}
                            key={product.id}
                            changeProductQuantity={changeProductQuantity}
                            deleteProduct={deleteProduct}
                        />
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total: ${totalPrice}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>

            <div className="btnBoard">
                <Button variant="contained" color="primary">
                    continue shopping
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setShowCheckout(!showCheckout);
                    }}
                >
                    checkout
                </Button>
            </div>
            {showCheckout ? (
                <CheckoutModule setShowCheckout={setShowCheckout} />
            ) : (
                ''
            )}
        </div>
    );
}
