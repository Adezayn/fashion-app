import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import TextInput from '../TextInput/index';
import Button from '../Button/index';
import {auth} from '../../config/firebase';


const Index = () => {

    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [errorEmail, setErrorEmail] =useState(null);
    const [errorMessage, setErrorMessage] =useState('');
    const history =useHistory();

    const handleChange = (e) => {
    const{name,value} = e.currentTarget;
   
    if (name === "email") {
        setEmail(value);           
     } else if (name === "password") {
         setPassword(value);
     }
}

    const handleSubmit = async (e) => {
        e.preventDefault();
           try {
            if (!email || !password) {
                setErrorMessage('All fields are required')
            }
            const {user} = await auth.signInWithEmailAndPassword(email, password);
            localStorage.setItem('uid',user.uid);
                history.push('/dashboard');
           } catch (error) {
               if (error.code === 'auth/user-not-found') {
                   setErrorMessage('Invalid email address or password')
               } else if (error.code === 'auth/invalid-email') {
                
               } else if (error.code === 'auth/wrong-password') {
                   setErrorMessage('Invalid email or password')
               }
               console.log(error.code);
               console.log(error.message);
            }

           }  

           const handleKeyUp = () => {
            setErrorMessage('')
    
        }

    return(
         <form onSubmit={handleSubmit}> 
             <div className="SignIn">
              <NavLink to="/" className="SignInTitle">Bold</NavLink>
              {errorMessage ? <p className="errorMessage">{errorMessage}</p> : '' }
              <TextInput placeholder=" Enter Email address"
                type="email" 
                label="Email address"
                name="email"
              value={email} 
              handleChange={handleChange}
              handleKeyUp={handleKeyUp}
             
              error={errorEmail} />

              <TextInput placeholder=" Enter Password"
                type="password" 
                label="Password"
                name="password"
                value={password}
                handleChange={handleChange}
                handleKeyUp={handleKeyUp}
               
                />
              <Button text="Log In" className="buttonSignIn blue darken-3" />
              <p className="center-align">Don't have an account? <a href="/signup">Sign Up</a></p>
             </div>
         </form>
    )
}

export default Index;