import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const FirstPage: React.FC = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (data: any) => {
    localStorage.setItem('userData', JSON.stringify(data));
    navigate('/second-page');
  };

  return (
    <div>
      <h1>First Page</h1>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default FirstPage;
