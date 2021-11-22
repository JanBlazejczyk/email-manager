import PropTypes from 'prop-types';

import { addCampaign } from "../../api";
import "./Forms.scss";

import { useForm } from "react-hook-form";

function CampaignForm({ closeDialog, edit, subjectContent = null, emailContent = null, update = false, activeId = null }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    if (update) {
      edit(activeId, data);
    } else {
      addCampaign(data);
    }
    closeDialog();
  };

  return (

    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={subjectContent} className="form__input form__input--subject" placeholder="Subject" {...register("Subject", { required: true, minLength: 3 })} />
      {errors.Subject && errors.Subject.type === "required" && <span>Subject is required</span>}
      {errors.Subject && errors.Subject.type === "minLength" && <span>Subject must be at least 3 characters long</span>}

      <textarea defaultValue={emailContent} className="form__input form__input--content" placeholder="E-mail content" {...register("Content", { required: true })} />
      {errors.Content && errors.Content.type === "required" && <span>Can't send a message without content</span>}

      <input className="form__button" type="submit" value="Save" />
    </form>

  );
}

CampaignForm.propTypes = {
  closeDialog: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  subjectContent: PropTypes.string,
  emailContent: PropTypes.string,
  update: PropTypes.bool,
  activeId: PropTypes.string
}

export default CampaignForm;