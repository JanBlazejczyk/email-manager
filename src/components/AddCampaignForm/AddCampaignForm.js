import { useForm } from "react-hook-form";
import { addCampaign } from "../../api";

function AddCampaignForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => addCampaign(data); // here we send the data to the API

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Subject" {...register("Subject", { required: true, minLength: 3 })} />
            {errors.Subject && errors.Subject.type === "required" && <span>Subject is required</span>}
            {errors.Subject && errors.Subject.type === "minLength" && <span>Subject must be at least 3 characters long</span>}

            <textarea placeholder="E-mail content" {...register("Content", { required: true })} />
            {errors.Content && errors.Content.type === "required" && <span>Can't send a message without content</span>}

            <input type="submit" value="Send" />
        </form >
    );
}

export default AddCampaignForm;