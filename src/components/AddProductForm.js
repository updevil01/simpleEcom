import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
    const [inputValues, setInputValues] = useState(
        { name: '', price: '', description: '', imageUrl: '' });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleSubmit = () => {
        onAddProduct(inputValues); 
        setInputValues({ name: '', price: '', description: '', imageUrl: '' }); // reset form
    };
    
    return (
        <div className="add-product-form">
            <h1>Add Product</h1>
            <input
                name="name"
                type="text"
                placeholder="Product Name"
                value={inputValues.name}
                onChange={handleInputChange}
            />
            <input
                name="price"
                type="number"
                placeholder="Price"
                value={inputValues.price}
                onChange={handleInputChange}
            />
            <input
                name="imageUrl"
                type="text"
                placeholder="Image URL"
                value={inputValues.imageUrl}
                onChange={handleInputChange}
            />
            <textarea
                name="description"
                placeholder="Description"
                value={inputValues.description}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default AddProductForm;
