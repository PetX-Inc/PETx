import React, { useRef, useEffect } from "react";
import { Form, Field } from "react-final-form";
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

  const handleFormSubmit = (values) => {
    onSubmit(values);
    onClose();
  };

  return (
    <div className="popup-container">
      <div className="popup" ref={popUpRef}>
        <h2>{isDoctorForm ? "Doctor Form" : "SOS Form"}</h2>
        <Form onSubmit={handleFormSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="name">
                {({ input }) => (
                  <div>
                    <label>Name:</label>
                    <input {...input} type="text" required />
                  </div>
                )}
              </Field>
              <Field name="address">
                {({ input }) => (
                  <div>
                    <label>Address:</label>
                    <input {...input} type="text" required />
                  </div>
                )}
              </Field>
              <Field name="phone">
                {({ input }) => (
                  <div>
                    <label>Phone:</label>
                    <input {...input} type="text" required />
                  </div>
                )}
              </Field>
              {isDoctorForm ? (
                <div>
                  <label>Doctor:</label>
                  <Field name="doctor" component="select" required>
                    <option value="">Select a doctor</option>
                    <option value="Dr. Smith ($100)">Dr. Smith ($100)</option>
                    <option value="Dr. Johnson ($150)">
                      Dr. Johnson ($150)
                    </option>
                    <option value="Dr. Patel ($200)">Dr. Patel ($200)</option>
                  </Field>
                </div>
              ) : (
                <div>
                  <label>Description:</label>
                  <Field name="description">
                    {({ input }) => (
                      <textarea {...input} rows={5} required />
                    )}
                  </Field>
                </div>
              )}
              <button type="submit">Submit</button>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
};

export default PopUp;


// const PopUp = ({ isDoctorForm, onClose, onSubmit }) => {
//   const popUpRef = useRef(null);

//   useEffect(() => {
//     const handleMouseDown = (event) => {
//       if (popUpRef.current && !popUpRef.current.contains(event.target)) {
//         onClose();
//       }
//     };
//     document.body.classList.add("blur-effect"); // add blur-effect class to body element
//     document.addEventListener("mousedown", handleMouseDown);
//     return () => {
//       document.body.classList.remove("blur-effect"); // remove blur-effect class from body element
//       document.removeEventListener("mousedown", handleMouseDown);
//     };
//   }, [onClose]);

//   return (
//     <div className="popup-container">
//       <div className="popup" ref={popUpRef}>
//         <h2>{isDoctorForm ? "Doctor Form" : "Rescue Form"}</h2>
//         <Form
//           onSubmit={onSubmit}
//           render={({ handleSubmit }) => (
//             <form onSubmit={handleSubmit}>
//               {/* Form fields */}
//               <button type="submit">Submit</button>
//             </form>
//           )}
//         />
//       </div>
//     </div>
//   );
// };

// export default PopUp;
