import React, { useRef } from 'react';

const FormWithRef = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${nameRef.current.value}, ${emailRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            ref={nameRef}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            ref={emailRef}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWithRef;