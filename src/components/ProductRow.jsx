import React from 'react';
import { Link } from 'react-router-dom';
const ProductRow = ({ product }) => {

    const { name, price, category, id } = product;
  
    const deleteProduct = id => {
        console.log("eliminar producto " + id)
    }

    return (
        <li data-category={ category } className="list-group-item d-flex justify-content-between align-items-center">
            <p>
                { name + ' '}
                <span className="font-weigth-bold">${ price }</span>
            </p>

            <div>
                <Link to={`/products/edit/${id}`} className="btn btn-success mr-2"> Edit </Link>
                <button onClick={ () => { deleteProduct(id) } } className="btn btn-danger">Delete</button>
            </div>

        </li>
    );
};

export default ProductRow;