import { Button, FormControl, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { log } from "console";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface FormData {
    username:string;
    firstname:string;
    lastname:string;
    phonenumber:string;
    birthdate:any;
    gender:string;
}
const itemSchema=z.object({
    username:z.string().trim().min(1, { message: "username is Required" }),
    firstname:z.string().trim().min(1, { message: "firstname is Required" }),
    lastname:z.string().trim().min(1,{message:"lastname is Required"}),
    phonenumber:z.string(),
    birthdate:z.string().min(1,{message:"Birthdate is Required"}),
    gender:z.string().trim().min(1,{message:"Gender is required"})
})
const RegistrationForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(itemSchema) })


    const saveData=async(data:FormData)=>{
        console.log("submitting data",data);
        
        const response=await fetch('http://localhost:8080/user/save',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json', // Set content type
            },
            body:JSON.stringify(data)
        });
        console.log("data",data);
        console.log("Response",response);
        
        
        const result = await response.json();
        alert("data saved")
        console.log('Success:', result);
    };
    return (
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit(saveData)} name="Registration-form" id="Registration-form">
                <FormControl isInvalid={!!errors.username}>
                    <label>User Name:</label>
                    <Input type="text" {...register("username")}/>
                    {errors.username && <span>{errors.username.message}</span>}
                </FormControl>

                <FormControl isInvalid={!!errors.firstname}>
                    <label>First Name:</label>
                    <Input type="text" {...register("firstname")}/>
                    {errors.firstname && <span>{errors.firstname.message}</span>}
                </FormControl>

                <FormControl isInvalid={!!errors.lastname}>
                    <label>Last Name:</label>
                    <Input type="text" {...register("lastname")}/>
                    {errors.lastname && <span>{errors.lastname.message}</span>}
                </FormControl>

                <FormControl isInvalid={!!errors.phonenumber}>
                    <label>Phone Number:</label>
                    <Input type="text" {...register("phonenumber")} />
                    {errors.phonenumber && <span>{errors.phonenumber.message}</span>}
                </FormControl>

                <FormControl isRequired isInvalid={!!errors.birthdate}>
                    <label>Birth date:</label>
                    <Input type="date" {...register("birthdate")} />
                    {/* {errors.birthdate && <span>{errors.birthdate.message}</span>} */}
                </FormControl>

                <FormControl isInvalid={!!errors.gender}>
                    <label>Gender: </label>
                    <select {...register("gender")}>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                    {errors.gender && <span>{errors.gender.message}</span>}
                </FormControl>

                <Button type="submit">
                        Submit
                </Button>
            </form>
        </div>
    );
};
export default RegistrationForm;