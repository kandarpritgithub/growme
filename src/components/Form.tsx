import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prevData) => ({ ...prevData, [key]: e.target.value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div>
      <TextField
        label="Name"
        value={formData.name}
        onChange={handleChange('name')}
      />
      <TextField
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange('phoneNumber')}
      />
      <TextField
        label="Email"
        value={formData.email}
        onChange={handleChange('email')}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Form;
