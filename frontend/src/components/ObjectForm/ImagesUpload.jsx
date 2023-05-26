import { useState } from "react";
import styles from "./styles.module.sass";
import { ButtonDefault } from "../ButtonDefault/ButtonDefault";

import imagesUpload from "./imagesUpload.module.sass";

export const ImagesUpload = ({ files, setFiles}) => {
  const [selectedfile, SetSelectedFile] = useState([]);



  const InputChange = (e) => {
    let images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(e.target.files[i]);
      let reader = new FileReader();
      let file = e.target.files[i];
      reader.onloadend = () => {
        SetSelectedFile((preValue) => {
          return [
            ...preValue,
            {
              image: reader.result,
            },
          ];
        });
      };
      if (e.target.files[i]) {
        reader.readAsDataURL(file);
      }
    }
  };

  const FileUploadSubmit = async (e) => {
    e.preventDefault();
    if (selectedfile.length > 0) {
      for (let index = 0; index < selectedfile.length; index++) {
        setFiles((preValue) => {
          return [...preValue, selectedfile[index]];
        });
      }
      SetSelectedFile([]);
    } else {
      alert("Please select file");
    }
  };

  return (
    <div className={imagesUpload.section}>
      <div className={imagesUpload.uploadBox}>
        <input
          type="file"
          id="fileupload"
          className={imagesUpload.input}
          onChange={InputChange}
          multiple
        />
        <span>
          Перетащите или{" "}
          <span className={imagesUpload.link}>выберите фотографии</span>
        </span>
      </div>

<div className={imagesUpload.textWrapper}>
      <p className={imagesUpload.text}>
        {selectedfile.length} выбранно
      </p>
      <p className={imagesUpload.text}> {files.length} загруженно</p>
      </div>

      <div className={imagesUpload.btnWrapper}>
        <ButtonDefault
          lable="Загрузить выбранные фото"
          action={FileUploadSubmit}
        />
      </div>
    </div>
  );
};
