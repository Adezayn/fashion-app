import React from 'react';
import {TextInput} from 'react-materialize';


const Index = (props) => {
    const {label,placeholder,type,handleChange, value, name, handleKeyUp, error} = props;
    return(
           <div>
               <label>{label}</label>
               <TextInput
  id="TextInput-4"
  placeholder={placeholder}
  type={type}
  name={name}
  value={value}
  inputClassName="browser-default"
  onChange={handleChange}
  onKeyUp={handleKeyUp}
/>

    <p className="red-text">{error}</p>
               
           </div>
    )
}

export default Index;