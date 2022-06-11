import { UploadForm } from "../../uploadform/UploadForm";
import toast from "react-hot-toast";
import axios from "axios";
import { API_URL } from "../../../data/Api";
import { useState } from "react";

export const UploadPage = (props) => {
  // storing input values in state, and then posting them to api.

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const handleTitleInputChange = (event) => {
    setFormValues((values) => ({
      ...values,
      title: event.target.value,
    }));
  };

  const handleDescriptionInputChange = (event) => {
    setFormValues((values) => ({
      ...values,
      description: event.target.value,
    }));
  };

  const reDirect = () => {
    props.history.push("/");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.post(`${API_URL}`, formValues, config);

    toast("Upload Complete!");

    setTimeout(reDirect, 1000);
  };

  return (
    <main>
      <UploadForm
        submitHandler={submitHandler}
        formValues={formValues}
        handleTitleInputChange={handleTitleInputChange}
        handleDescriptionInputChange={handleDescriptionInputChange}
      />
    </main>
  );
};
