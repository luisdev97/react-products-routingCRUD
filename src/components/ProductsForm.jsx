import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';


const ProductsForm = ({ history, setReloadProducts }) => {

    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ error, setError ] = useState(false);

    const getRadioValue = e => {
        setCategory(e.target.value)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(name === '' || price === '' || category === '')
            setError(true);
        else{
            setError(false);

            try{
                const res = await axios.post('http://localhost:4000/restaurant', {
                    name,
                    price,
                    category
                });

                if(res.status === 201)
                    Swal.fire(
                        'Product added',
                        'The product was added',
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
            <h1 className="text-center">Add new Product</h1>
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
                        onChange = { e => setName(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label>Price of the dish</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="price"
                        placeholder="Price of the dish"
                        onChange = { e => setPrice(e.target.value) }
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
                    />
                    <label className="form-check-label">
                        Meats
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="category"
                        value="salads"
                        onChange={ getRadioValue }
                    />
                    <label className="form-check-label">
                        Salads
                    </label>
                </div>
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Add Product" />
            </form>
        </div>
        
    );
};

export default  withRouter(ProductsForm);