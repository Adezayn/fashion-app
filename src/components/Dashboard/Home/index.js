import React, {useState, useEffect} from 'react';
import Navbar from '../Navbar';
import TextInput from '../../TextInput/index';
import Button from '../../Button/index';
import {useHistory} from 'react-router-dom';
import {firestore} from '../../../config/firebase';

const Index = (props) => {
 const {handleLogout, displayName} = props;
 const [productName, setProductName] = useState('');
 const [productValue, setProductValue] = useState('');
 const history = useHistory();
 const uid = localStorage.getItem('uid');

useEffect(() => {
 if (!uid) {
  history.push('/');
 }
},[uid, history]);

const handleChange = (e) => {
    const {name, value} = e.currentTarget;
    if (name === 'productName') {
        setProductName(value);
    } else if (name === 'productValue') {
        setProductValue(value)
    }
}

const handleAdd = (e) => {
    e.preventDefault();
const data = firestore.collection('products').add({
    uid,
    productName,
    productValue,
})
console.log('Product added');

};

const handleDelete = (e) => {
    e.preventDefault();
    try {
        const data = firestore.collection('products').doc('9Ekj8W6elG5K3NjUxa7E').delete();
        console.log('Product deleted');
    } catch(error) {
        console.log(error);
    }
};

    return(
       <div>
           <Navbar handleLogout= {handleLogout} displayName= {displayName} />
        <h1>Welcome to your dashboard</h1>
        <form> 

              <TextInput 
              placeholder=" Enter Product Name"
              type="text"
              label="Product Name"
              name="productName"
              value={productName}
              handleChange={handleChange} 
              />

              <TextInput 
              placeholder=" Enter Product Value"
              type="text"
              label="Product Value"
              name="productValue"
              value={productValue}
              handleChange={handleChange} 
              />
              <Button text="Add" handleClick={handleAdd} className="buttonLogin blue" />
              <Button text="Delete" handleClick={handleDelete} className="buttonLogin yellow" />
              </form>
        </div>
    )
    };

export default Index;