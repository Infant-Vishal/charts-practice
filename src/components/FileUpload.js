import React, { useState } from "react";

const FileUpload = () => {
  document.cookie = "username=John Doe";

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    console.log(selectedFile);
  };
  return (
    <div>
      <input type="file" name="file" onChange={handleChange} />
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
};

export default FileUpload;
