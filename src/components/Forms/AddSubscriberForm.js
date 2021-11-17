import { useForm } from "react-hook-form";
import { addSubscriber } from "../../api";

import "./Forms.scss"

function AddSubscriberForm({ closeDialog }) {
    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        addSubscriber(data);
        closeDialog()
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input className="form__input form__input--name" placeholder="Name" {...register("Name", { required: true, pattern: /^[A-Za-z]+$/i, minLength: 3 })} />
            {errors.Name && errors.Name.type === "required" && <span>Name is required</span>}
            {errors.Name && errors.Name.type === "pattern" && <span>Name must contain letters only</span>}
            {errors.Name && errors.Name.type === "minLength" && <span>Name must be at least 3 characters long</span>}

            <input className="form__input form__input--email" placeholder="E-mail" {...register("E-mail", { required: true, pattern: /\S+@\S+\.\S+/ })} />
            {errors.Email && errors.Email.type === "required" && <span>Email is required</span>}
            {errors.Email && errors.Email.type === "pattern" && <span>Please enter a valid email address</span>}

            <input className="form__button" type="submit" value="Add  subscriber" />
        </form >
    );
}

export default AddSubscriberForm;