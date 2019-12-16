import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const ProductRow = ({ product, setReloadProducts }) => {

    const { name, price, category, id } = product;
  
    const removeProduct = id => {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!',
        cancelButtonText: 'Cancel'
      }).then( async(result) => {
        if (result.value) {


           

            try {

                const res = await axios.delete(`http://localhost:4000/restaurant/${ product.id}`);
                if(res.status === 200){
                    Swal.fire(
                        'Removed!',
                        'Your Product has been removed.',
                        'success'
                    );
                    setReloadProducts(true);
                }

            } catch (error) {
                Swal.fire({
                    type: 'error',
                    title: 'Error',
                    text: 'E rror removing product'
                })
            }


          
        }
      })
    }

    return (
        <li data-category={ category } className="list-group-item d-flex justify-content-between align-items-center">
            <p>
                { name + ' '}
                <span className="font-weight-bold">${ price }</span>
            </p>

            <div>
                <Link to={`/products/edit/${id}`} className="btn btn-success mr-2"> Edit </Link>
                <button onClick={ () => { removeProduct(id) } } className="btn btn-danger">Delete</button>
            </div>

        </li>
    );
};

export default ProductRow;
