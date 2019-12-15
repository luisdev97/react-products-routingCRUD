import React, { useState } from 'react';
import Error from './Error';
import axios from 'axios';

const ProductsForm = () => {

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
                console.log('res', res);
            }catch(error){
                console.log('error', error);
            }
        }

    }

    return (
        
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Agregar Nuevo Producto</h1>
            { error ? <Error messagge="All fields are required"/> : null}
            <form
                className="mt-5"
                onSubmit={ handleSubmit }
            >
                <div className="form-group">
                    <label>Nombre Platillo</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Nombre Platillo"
                        onChange = { e => setName(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label>Precio Platillo</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="precio"
                        placeholder="Precio Platillo"
                        onChange = { e => setPrice(e.target.value) }
                    />
                </div>

                <legend className="text-center">Categoría:</legend>
                <div className="text-center">
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="postre"
                        onChange={ getRadioValue }
                    />
                    <label className="form-check-label">
                        Postre
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="bebida"
                        onChange={ getRadioValue }
                    />
                    <label className="form-check-label">
                        Bebida
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="cortes"
                        onChange={ getRadioValue }
                    />
                    <label className="form-check-label">
                        Cortes
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="ensalada"
                        onChange={ getRadioValue }
                    />
                    <label className="form-check-label">
                        Ensalada
                    </label>
                </div>
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Producto" />
            </form>
        </div>
        
    );
};

export default ProductsForm;