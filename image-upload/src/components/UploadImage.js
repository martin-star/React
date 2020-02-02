import React, { useState } from "react";
import '../styles.css'
const UploadFile = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "upload");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dokjbsgkw/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div className='container'>
      
    <div className="custom-file mb-4">
    
  
    
    <input
        type="file"
        className="custom-file-input"
        id="customFile"
        onChange={uploadImage}
      />
  
      <label className="custom-file-label" for="customFile">
        Choose image
      </label>
   
</div>
     

      {  loading ? (
        <h3 className='loading'>Loading...</h3>
      )  : (
        <img
          className="new-file"
          src= {image === '' ? '/img/default_imge.png' : image}
          alt="img"
          
        />
      )}
      
    </div>
    
  );
};

export default UploadFile;
