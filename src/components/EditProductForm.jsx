import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

import Error from './Error';
const EditProductForm = ({ product, history, setReloadProducts }) => {
    const { category } = product;

    const priceRef = useRef('');
    const nameRef = useRef('');

    const [ categoryValue , setCategory ] = useState('');
    const [ error, setError ] = useState(false);


    const getRadioValue = e => {
        setCategory(e.target.value)
    }


    const handleSubmit = async(e) => {
        e.preventDefault();

        let category = (categoryValue === '') ? product.category : categoryValue;

        const editProduct = {
            name : nameRef.current.value,
            price: priceRef.current.value,
            category
        }
        
        if(editProduct.name === '' || editProduct.price === '' || editProduct.category === '')
            setError(true);
        else{
            setError(false);

            try{
                const res = await axios.put(`http://localhost:4000/restaurant/${ product.id}`, editProduct);

                if(res.status === 200)
                    Swal.fire(
                        'Product modified',
                        'The product was modified',
                        'success'
                    );
            }catch(error){
                console.log('error', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error processing the form'
                  })
            }
            setReloadProducts(true);
            history.push('/products');
        }
    }


    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Edict Product</h1>
            { error ? <Error messagge="All fields are required"/> : null}
            <form
                className="mt-5"
                onSubmit={ handleSubmit }
            >
                <div className="form-group">
                    <label>Name of the dish</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        placeholder="Name of the dish"
                        ref={ nameRef }
                        defaultValue={ product.name }
                    />
                </div>

                <div className="form-group">
                    <label>Price of the dish</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="price"
                        placeholder="Price of the dish"
                        ref={ priceRef }
                        defaultValue={ product.price }
                    />
                </div>


                <legend className="text-center">Category:</legend>
                <div className="text-center">
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="category"
                        value="desserts"
                        onChange={ getRadioValue }
                        defaultChecked={ (category === 'desserts') }
                    />
                    <label className="form-check-label">
                        Dessert
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="category"
                        value="drinks"
                        onChange={ getRadioValue }
                        defaultChecked={ (category === 'drinks') }
                    />
                    <label className="form-check-label">
                        Drink
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="category"
                        value="meats"
                        onChange={ getRadioValue }
                        defaultChecked={ (category === 'meats') }
                    />
                    <label className="form-check-label">
                        Cuts
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="category"
                        value="salads"
                        onChange={ getRadioValue }
                        defaultChecked={ (category === 'salads') }
                    />
                    <label className="form-check-label">
                        Salads
                    </label>
                </div>
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Edit Product" />
            </form>
        </div>
    );
};

export default withRouter(EditProductForm);