import { UploadForm } from "../uploadform/UploadForm";
import toast from "react-hot-toast";

export const UploadPage = (props) => {
  const reDirect = () => {
    props.history.push("/");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    toast("Upload Complete!");

    setTimeout(reDirect, 1000);
  };

  return (
    <main>
      <UploadForm submitHandler={submitHandler} />
    </main>
  );
};
