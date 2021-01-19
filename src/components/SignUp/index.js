import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import TextInput from '../TextInput/index';
import Button from '../Button/index';
import{auth,firestore, provider} from '../../config/firebase';

const Index = () => {
    const [fullName, setFullname] =useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [errorEmail, setErrorEmail] =useState(null);
    const [errorPassword, setErrorPassword] =useState(null);
    const [errorMessage, setErrorMessage] =useState('');
    const history =useHistory();

    const handleChange = (e) => {
        const{name,value} = e.currentTarget;

        if (name === "fullName") {
            setFullname(value);
        } else if (name === "email") {
            setEmail(value);           
         } else if (name === "password") {
             setPassword(value);
         }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
             if (!fullName || !email || !password) {
                 setErrorMessage('All fields are required')
             }
             const {user} = await auth.createUserWithEmailAndPassword(email, password);
             if (user) {
                 const profile = firestore.collection('users').doc(user.uid);
                 await profile.set({fullName,
                email})
                localStorage.setItem('uid',user.uid);
                history.push('/dashboard');
             }
            
        } catch(error) {
            if (error.code === 'auth/weak-password'){
                setErrorPassword(error.message)
            } else if (error.code === 'auth/email-already-in-use') {
                setErrorEmail(error.message)
            } else if (error.code === 'auth/invalid-email') {
                setErrorEmail(error.message)
            }
           
        }
    }

   const handleGoogle = async (e) => {
        e.preventDefault();
      
        try{
          const {user} = await auth.signInWithPopup(provider);
          console.log(user.email);
          console.log(user.name);
          const profile = firestore.collection('users').doc(user.uid)
          await profile.set({
              fullName: user.displayName,
              email: user.email
          }) 

        }  catch (error) {
           console.log("google error", error);
          }
        
        }

    const handleKeyUp = () => {
        setErrorMessage('')

    }
    return(
         <form> 
             <div className="SignUp">
              <NavLink to="/" className="SignupTitle">Bold</NavLink>
              {errorMessage ? <p className="errorMessage">{errorMessage}</p> : '' }
              <TextInput 
              placeholder=" Enter Full Name"
              type="text"
              label="Full Name"
              name="fullName"
              value={fullName}
              handleChange={handleChange} 
              handleKeyUp={handleKeyUp}
              />


              <TextInput placeholder=" Enter Email address"
              type="email" 
              label="Email address"
              name="email"
              value={email} 
              handleChange={handleChange}
              handleKeyUp={handleKeyUp}
              error={errorEmail}/>


              <TextInput placeholder=" Enter Password"
               type="password"  
              label="Password"
              name="password"
              value={password}
              handleChange={handleChange}
              handleKeyUp={handleKeyUp}
              error={errorPassword}/>


              <Button text="Sign Up" className="buttonSignUp blue darken-3" handleClick={handleSubmit}/>
              <Button text="Sign Up With Google" className="buttonSignUp red darken-3" handleClick={handleGoogle} />
        
              <p className="center-align">Already have an account? <a href="/login">Log In</a></p>
             </div>
         </form>
    )
} 

export default Index;