import React, { useState } from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen'

const LoginScreen = () => {


 const[signIn,setSignIn] = useState(false)





  return (
    <div className='login-screen'>
        <div className='loginscreen_background'>
            <img className='login_screen_logo'src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt=''/>
         <button onClick={()=>setSignIn(true)} className='login_screen_button'>Sign In</button>
       <div className='login_screen_gradient'/>
        </div>
        <div className='login_screen_body'>
          {signIn ? (
            <SignInScreen/>
          ):(
            <>
            <h1>Unlimited movies, TV shows and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='login_screen_input'>
            <form>
            <input type='email' placeholder='Email Address'/>
            <button  onClick={()=>{setSignIn(true)}}className='get_started_button'>Get Started</button>
            </form>
            </div>
            </>
          )}
          
        </div>
        </div>
  )
}

export default LoginScreen