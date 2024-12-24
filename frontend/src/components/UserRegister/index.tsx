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
import { useMemo } from 'react';
import {  z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const UserRegister = () => {

    const validationSchema= useMemo(()=>{
        return z
        .object({
            username:z.string().regex(/^[A-Za-z0-9_]{3,20}$/,{
                message:"username are required"
            })
        });
        
    },[]);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(validationSchema),
      });
      
  return (
    <Flex
      align="center" // Center vertically
      justify="center" // Center horizontally
      minH="70vh" // Full viewport height
      bg="gray.100" // Optional: background color for the entire viewport
    >
        
        <form autoComplete="off" noValidate className="d-flex flex-column gap-4" id="register-form">
          <Stack spacing={4}>
            <FormControl isInvalid={!!errors.username}>
              <FormLabel>User Name</FormLabel>
              <Input placeholder="Username" autoComplete="off" autoCorrect="off" />
              {/* <FormErrorMessage>{errors.username?.message}</FormErrorMessage> */}
            </FormControl>

            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="First Name" autoComplete="off" autoCorrect="off" />
              {/* <FormErrorMessage>{errors.firstname?.message}</FormErrorMessage> */}
            </FormControl>

            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Last Name" autoComplete="off" autoCorrect="off" />
              {/* <FormErrorMessage>{errors.lastname?.message}</FormErrorMessage> */}
            </FormControl>

            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input placeholder="Phone Number" autoComplete="off" autoCorrect="off" />
              {/* <FormErrorMessage>{errors.phonenumber?.message}</FormErrorMessage> */}
            </FormControl>

            <FormControl>
              <FormLabel>Birth Date</FormLabel>
              <Input type="date" autoComplete="off" autoCorrect="off" />
            </FormControl>

            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Input placeholder="Gender" autoComplete="off" autoCorrect="off" />
              {/* <FormErrorMessage>{errors.gender?.message}</FormErrorMessage> */}
            </FormControl>

            <Button colorScheme="teal" type="submit" mt={4}>
              Register
            </Button>
          </Stack>
        </form>
      {/* </Box> */}
    </Flex>
  );
};

export default UserRegister;

