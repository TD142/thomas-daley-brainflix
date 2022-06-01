import { UploadForm } from "../uploadform/UploadForm";

export const UploadPage = (props) => {
  const clickHandler = (event) => {
    event.preventDefault();
    alert("Upload Complete!");

    props.history.push("/");
  };

  return (
    <main>
      <UploadForm clickHandler={clickHandler} />
    </main>
  );
};
