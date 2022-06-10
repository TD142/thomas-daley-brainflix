import { UploadForm } from "../../uploadform/UploadForm";
import toast from "react-hot-toast";
import axios from "axios";
import { API_URL } from "../../../data/Api";

export const UploadPage = (props) => {
  const reDirect = () => {
    props.history.push("/");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.addTitle.value);
    console.log(event.target.addDescription.value);

    const submitVideo = {
      title: event.target.addTitle.value,
      description: event.target.addDescription.value,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.post(`${API_URL}`, submitVideo, config);

    toast("Upload Complete!");

    setTimeout(reDirect, 1000);
  };

  return (
    <main>
      <UploadForm submitHandler={submitHandler} />
    </main>
  );
};
