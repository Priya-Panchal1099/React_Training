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

const UserRegister = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("name:",formData.name ,"email:",formData.email);
    setFormData({ name: '', email: '' }); // Reset form
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        {/*  */}
        <div>
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
        <div>
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
        <button type="submit">Submit</button>
      </form>

      {formData && (
        <div style={{ marginTop: '20px' }}>
          <h2>Submitted Data:</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserRegister;

