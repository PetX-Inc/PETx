import React, { useRef, useEffect } from "react";
import { Form } from "react-final-form";
import "./popup.css"; // import CSS file with blur-effect class

const PopUp = ({ isDoctorForm, onClose, onSubmit }) => {
  const popUpRef = useRef(null);

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.body.classList.add("blur-effect"); // add blur-effect class to body element
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.body.classList.remove("blur-effect"); // remove blur-effect class from body element
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [onClose]);

  return (
    <div className="popup-container">
      <div className="popup" ref={popUpRef}>
        <h2>{isDoctorForm ? "Doctor Form" : "Rescue Form"}</h2>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
              <button type="submit">Submit</button>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default PopUp;
