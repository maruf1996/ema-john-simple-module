import React from 'react';
import './Shipping.css'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
        const { register, handleSubmit, formState: { errors } } = useForm();
        const {user}=useAuth();
        const onSubmit = data => {
            console.log(data);
        }
    return (
        <div>
            <form className='shipping_form' onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Your Name' defaultValue={user.displayName} {...register("name")} />
            <input placeholder='Your Email' defaultValue={user.email} {...register("email", { required: true })} /> 
            {errors.email && <span className='error'>This field is required</span>}
            <input placeholder='Address' defaultValue="" {...register("address")} />
            <input placeholder='City' defaultValue="" {...register("city")} />
            <input placeholder='Phone Number' defaultValue="" {...register("phone")} />
            <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;