import React from 'react';
import './Signin.css';
import Logo from '../../assets/logo.JPG';


class ForgotPassword extends React.Component {
  render() {
    return (
      <div className={'signinBox'}>
        <div className={'leftBox'}>
          <div className={'imageLogo'}>
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className={'rightBox'}>
          <div className={'box'}>
            <div className={'titleBox'}>FORGOT PASSWORD ?</div>
            <div className={'text-1'}>We Will send a reset link to your Email ID to reset Password</div>
            <div className={'inputSBox'}>
              <input
                className={'inputS'}
                type={'text'}
                placeholder={'Email ID'}
              />
            </div>

            <div className={'btn-submit'}>SUBMIT</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
