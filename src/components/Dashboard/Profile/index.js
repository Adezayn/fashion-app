import React, {useEffect, useState} from 'react';
import Navbar from '../Navbar/index';
import TextInput from '../../TextInput/index';
import Button from '../../Button/index';
import {firestore, storage} from '../../../config/firebase';
import {useHistory} from 'react-router-dom';

const Index = () => {

    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(null);
    const history = useHistory();

    const uid = localStorage.getItem('uid');


    const handleChange = (e) => {
    const {name, value} = e.currentTarget;
    if (name === "fullName") {
        setFullname(value);
    } else if (name === "email") {
        setEmail(value);
    } else if (name === "phone") {
        setPhone(value);
    }
    }

    useEffect(() => {
        if (!uid) {
         history.push('/');
        }
       },[uid, history]);

    useEffect (() => {
        const fetchedData = async () =>{
            const data = await firestore.collection('users').get();
            data.forEach((doc) => {

                if (doc.id === uid) {
                    setFullname(doc.data().fullName);
                    setEmail(doc.data().email);
                }
            })
        }
        fetchedData()
    },[uid]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = firestore.collection('users').doc(uid);
        user.update({
            fullName, phone
        })
    }

    const FileUpload = () => {
    }

    const handleUpload = () => {

    };

return (
    <div>
    <Navbar />
    <h2>Profile Page</h2>
    <input type="file"  handleChange={handleChange} />
    <button onClick={handleUpload}>Upload</button>
    <form onSubmit={handleSubmit}>
    <TextInput 
              placeholder=" Enter Full Name"
              type="text"
              label="Full Name"
              name="fullName"
              value={fullName}
              handleChange={handleChange} 
              />

              <TextInput 
              placeholder=" Enter Email address"
              type="email"
              label="Email Address"
              name="email"
              value={email}
              handleChange={handleChange} 
              />

              <TextInput 
              placeholder=" Enter Phone Number"
              type="tel"
              label="Phone Number"
              name="phone"
              value={phone}
              handleChange={handleChange} 
              />
              <Button text="Update" className="buttonLogin black" />
    </form>
    </div>
)
}

export default Index;