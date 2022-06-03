import { UploadForm } from "../uploadform/UploadForm";
import toast from "react-hot-toast";

export const UploadPage = (props) => {
  const reDirect = () => {
    props.history.push("/");
  };

  const clickHandler = (event) => {
    event.preventDefault();

    toast("Upload Complete!");

    setTimeout(reDirect, 1000);
  };

  return (
    <main>
      <UploadForm clickHandler={clickHandler} />
    </main>
  );
};
