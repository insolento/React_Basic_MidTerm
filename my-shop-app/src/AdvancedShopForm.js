import React, { useState } from 'react';
import './ShopForm.css';

const AdvancedShopForm = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [quantityError, setQuantityError] = useState(false);
  const [priceError, setPriceError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const quantityNumber = Number(quantity);
    const priceNumber = Number(price);

    if (isNaN(quantityNumber)) {
      setQuantityError(true);
      return;
    }

    if (isNaN(priceNumber)) {
      setPriceError(true);
      return;
    }

    setQuantityError(false);
    setPriceError(false);

    onSubmit({
      name,
      description,
      category,
      quantity: quantityNumber,
      price: priceNumber,
    });

    alert(`Form submitted successfully!\nName: ${name}\nDescription: ${description}\nCategory: ${category}\nQuantity: ${quantity}\nPrice: ${price}`);
    setName('');
    setDescription('');
    setCategory('');
    setQuantity('');
    setPrice('');
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="form-container">
      <h2>New Shop</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input-field" />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="input-field" />
        </label>
        <br />
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="input-field" />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="text"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
              setQuantityError(false);
            }}
            className={`input-field ${quantityError ? 'error' : ''}`}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              setPriceError(false);
            }}
            className={`input-field ${priceError ? 'error' : ''}`}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AdvancedShopForm;
