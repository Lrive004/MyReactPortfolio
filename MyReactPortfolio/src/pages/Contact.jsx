import { useState } from "react";

function Form() {
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if(inputType === 'fullName') {
      setfullName(inputValue);
    } else if(inputType === 'email') {
      setEmail(inputValue); 
    } else {
      setMessage(inputValue);
    }
  };

const handleFormSubmit = (e) => {
  e.preventDefault();

  setfullName('');
  setEmail('');
  setMessage('');
};

return(
  <div>
    <h1>Contact</h1>
    <form className= "form" onSubmit={handleFormSubmit}>
      <input
      value={fullName}
      name="Name:"
      onChange={handleInputChange}
      type="text"
      placeholder="Name"
      />
      <input
      value={email}
      name="Email:"
      onChange={handleInputChange}
      type="text"
      placeholder="Email"
      />
      <input
      value={message}
      name="Message:"
      onChange={handleInputChange}
      type="text"
      placeholder="Enter message here"
      />
      <button type="submit">
        Send
      </button>
    </form>
  </div>
);
}

export default Form;