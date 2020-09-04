import React from 'react';
import '../css/ProductListItem.css';

export default function ProductListItem({
    product,
    changeProductQuantity,
    deleteProduct,
}) {
    let handleQuantityChange = (e) => {
        changeProductQuantity(product.id, e.target.value);
    };

    let clickDeleteButton = () => {
        if (window.confirm('delete?')) {
            deleteProduct(product.id);
        }
    };

    let clickRefreshButton = () => {
        changeProductQuantity(product.id, 1);
    };

    return (
        <div className="productListItem">
            <img src={product.image} alt="?" />
            <h1>{product.name}</h1>
            <p>{product.description}</p>

            <select
                name="quantity"
                id="item-quantity"
                value={'' + product.quantity}
                onChange={handleQuantityChange}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <p>${product.price * product.quantity}</p>

            <button onClick={clickDeleteButton}>delete</button>
            <button onClick={clickRefreshButton}>refresh</button>
        </div>
    );
}
