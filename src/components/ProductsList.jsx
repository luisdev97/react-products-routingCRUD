import React from 'react';
import ProductRow  from './ProductRow';


const ProductsList = ({ products, setReloadProducts }) => {

    
    const renderProducts = products => {
        return products.map( product => <ProductRow key={ product.id }product={ product } setReloadProducts={ setReloadProducts }/>)
    }

    return (
        <>
            <h1 className="text-center">Products</h1>
            <ul className="list-group mt-5">
                { renderProducts(products) }
            </ul>
        </>
    );
};

export default ProductsList;