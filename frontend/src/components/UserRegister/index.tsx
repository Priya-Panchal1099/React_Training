import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Box,
  Heading,
  Flex,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { text } from 'stream/consumers';


const UserRegister = () => {
  const MAX_COUNT = 5;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    designation:'',
    address:''
  });


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("name:", formData.name, "email:", formData.email);
    setFormData({ name: '', email: '' ,designation:'',address:''}); // Reset form
  };

 
  return (
    <body>
      
    
    <div className='userLoginpage'>
     <h1 >Employee Details Form</h1>
      <form onSubmit={handleSubmit}>
      
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Designation:
            <input
              type='text'
              name='designation'
              onChange={handleChange}
              required/>
          </label>
        </div>
        <div className="form-group">
          <label> Address:
            <input type="textArea"
            name='address'
            onChange={handleChange}
            required />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {formData && (
        <div style={{ marginTop: '20px' }}>
          <h1>Submitted Data:</h1>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Designation: {formData.designation}</p>
        </div>
      )}
    </div>
    </body>
  );
};

export default UserRegister;

