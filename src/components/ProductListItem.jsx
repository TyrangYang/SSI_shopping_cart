import React from 'react';
import '../css/ProductListItem.css';

export default function ProductListItem({
    product,
    changeProductQuantity,
    deleteProduct,
}) {
    let handleQuantityChange = (e) => {
        changeProductQuantity(product.id, +e.target.value);
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
        <tr className="productListItem">
            <td className="productContent">
                <img src={product.image} alt="?" />
                <h1>{product.name}</h1>
                <p>{product.description}</p>
            </td>
            <td>
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
            </td>
            <td>
                <p>
                    {product.discount === 0
                        ? 'N/A'
                        : `${product.discount * 100}%off`}
                </p>
            </td>
            <td>
                <p>
                    ${Math.ceil(product.price * product.quantity * 100) / 100}
                </p>
            </td>
            <td>
                <button onClick={clickDeleteButton}>delete</button>
                <button onClick={clickRefreshButton}>refresh</button>
            </td>
        </tr>
    );
}
