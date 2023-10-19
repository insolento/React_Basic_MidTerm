import React, { useState } from 'react';
import './ShopForm.css';

const SimpleShopForm = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description });

    alert(`Form submitted successfully!\nName: ${name}\nDescription: ${description}`);

    setName('');
    setDescription('');
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
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default SimpleShopForm;
