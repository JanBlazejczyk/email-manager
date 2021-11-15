import { useForm } from "react-hook-form";

function AddSubscriberForm() {
    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data); // here we send the data to the API

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Name" {...register("name", { required: true, pattern: /^[A-Za-z]+$/i, minLength: 3 })} />
            {errors.name && errors.name.type === "required" && <span>Name is required</span>}
            {errors.name && errors.name.type === "pattern" && <span>Name must contain letters only</span>}
            {errors.name && errors.name.type === "minLength" && <span>Name must be at least 3 characters long</span>}

            <input placeholder="E-mail" {...register("E-mail", { required: true, pattern: /\S+@\S+\.\S+/ })} />
            {errors.Email && errors.Email.type === "required" && <span>Email is required</span>}
            {errors.Email && errors.Email.type === "pattern" && <span>Please enter a valid email address</span>}

            <input type="submit" value="Add  subscriber" />
        </form >
    );
}

export default AddSubscriberForm;