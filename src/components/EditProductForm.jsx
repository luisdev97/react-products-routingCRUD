import React, { useState, useRef } from 'react';
import Error from './Error';
const EditProductForm = ({ product }) => {
    const { category } = product;

    const price = useRef('');
    const name = useRef('');

    const [ categoryValue , setCategory ] = useState('');
    const [ error, setError ] = useState(false);


    const getRadioValue = e => {
        setCategory(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault();
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
                        ref={ name }
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
                        ref={ price }
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
                        value="cortes"
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
                        value="ensalada"
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

export default EditProductForm;