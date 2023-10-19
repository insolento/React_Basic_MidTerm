// src/App.js
import React, { useState } from 'react';
import SimpleShopForm from './SimpleShopForm';
import AdvancedShopForm from './AdvancedShopForm';

const App = () => {
  const [showSimpleForm, setShowSimpleForm] = useState(false);
  const [showAdvancedForm, setShowAdvancedForm] = useState(false);

  const handleSimpleFormSubmit = (data) => {
    console.log('Simple Form submitted with data:', data);
    setShowSimpleForm(false);
  };

  const handleAdvancedFormSubmit = (data) => {
    console.log('Advanced Form submitted with data:', data);
    setShowAdvancedForm(false);
  };

  const handleFormCancel = () => {
    setShowSimpleForm(false);
    setShowAdvancedForm(false);
  };

  const showSimpleFormHandler = () => {
    setShowSimpleForm(true);
    setShowAdvancedForm(false);
  };

  const showAdvancedFormHandler = () => {
    setShowAdvancedForm(true);
    setShowSimpleForm(false);
  };

  return (
    <div>
      <h1>My Shop App</h1>
      <button onClick={showSimpleFormHandler}>New Shop (Simple)</button>
      <button onClick={showAdvancedFormHandler}>New Shop (Advanced)</button>

      {showSimpleForm && <SimpleShopForm onSubmit={handleSimpleFormSubmit} onCancel={handleFormCancel} />}
      {showAdvancedForm && <AdvancedShopForm onSubmit={handleAdvancedFormSubmit} onCancel={handleFormCancel} />}
    </div>
  );
};

export default App;
