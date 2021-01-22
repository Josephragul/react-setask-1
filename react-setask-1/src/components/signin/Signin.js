import React from 'react';
import "./Signin.css";
import Logo from "../../assets/logo.JPG";

class SigninContainer extends React.Component{
    render(){
        return (
          <div className={'signinBox'}>
            <div className={'leftBox'}>
              <div className={'imageLogo'}>
                <img src={Logo} alt="Logo" />
              </div>
            </div>
            <div className={'rightBox'}>
              <div className={'box'}>
                <div className={'titleBox'}>LOGIN</div>
                <div className={'inputSBox'}>
                  <input
                    className={'inputS'}
                    type={'text'}
                    placeholder={'Username'}
                  />
                </div>
                <div className={'inputSBox'}>
                  <input
                    className={'inputS'}
                    type={'password'}
                    placeholder={'Password'}
                  />
                </div>
                <div className={'text-1'}>Forgot password ?</div>
                <div className={'btn-submit'}>LOGIN</div>
              </div>
            </div>
          </div>
        );
    }
}


export default SigninContainer;