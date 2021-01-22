import React, {useState }from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import "./Navbar.css"
import Logo from '../../assets/logo.JPG';

export default function ParamsExample() {



  return (
    <Router>
      <div className="tabBar">
        <ul>
          <li>
            <Link class="active" to="/">
              {' '}
              PERSONAL
            </Link>
          </li>
          <li>
            <Link to="/Main2">ADDITIONAL</Link>
          </li>
          <li>
            <Link to="/Main3">REFERENCES</Link>
          </li>
          <li>
            <Link to="/Main4">DOCUMENTS</Link>
          </li>
          <li>
            <Link to="/SigninContainer" className="navbar__right">
              Login
            </Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/Main2">
            <Main2 />
          </Route>
          <Route path="/Main3">
            <Main3 />
          </Route>
          <Route path="/Main4">
            <Main4 />
          </Route>
          <Route path="/SigninContainer">
            <SigninContainer />
          </Route>
          <Route path="/ForgotPassword">
            <ForgotPassword />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



function Main() {

  






  const [isAuth, setIsAuth] = useState();
  if(isAuth){
    return <Redirect to="/Main2" />
  }

  return (
    <div className="main__container">
      <div className="main__title">
        <h2>PERSONAL DETAILS</h2>
        <hr />
      </div>
      <form>
        <div className="details_form">
          <input type="text" placeholder="FIRST NAME"></input>
          <input type="text" placeholder="LAST NAME"></input>
        </div>
        <div className="details_form">
          <input type="text" placeholder="DOB"></input>
          <input type="text" placeholder="PHONE"></input>
        </div>
        <div className="details_form">
          <input type="text" placeholder="TENURE"></input>
          <input type="text" placeholder="GENDER"></input>
        </div>
        <div className="details_form">
          <input type="text" placeholder="EMAIL ID"></input>
          <input type="text" placeholder="LOAN AMOUNT REQUIRED"></input>
        </div>
      </form>
      <div className="main__title">
        <h2>IDENTITY DETAILS</h2>
        <hr />
      </div>
      <form>
        <div className="details_form">
          <input
            type="text"
            placeholder="PERMENANT ACCOUNT NUMBER(PAN)"
          ></input>
          <input type="text" placeholder="AADHAAR NUMBER"></input>
        </div>
        <div className="details_form">
          <input type="text" placeholder="VOTER ID"></input>
          <input type="text" placeholder="VOTER ID STATE"></input>
        </div>
        <div className="details_form">
          <input type="text" placeholder="PASSPORT"></input>
          <input type="text" placeholder="DRIVING LICENSE STATE"></input>
        </div>
        <div className="details_form">
          <input
            type="text"
            id="driving"
            placeholder="DRIVING LICENSE "
          ></input>
        </div>
      </form>
      <div className="main__title">
        <h2>ADDRESS</h2>
        <hr />
      </div>
      <form>
        <div className="details_form">
          <input type="text" placeholder="PRESENT ADDRESS"></input>
          <input type="text" placeholder="CITY"></input>
        </div>
        <div className="details_form">
          <input type="text" placeholder="STATE"></input>
          <input type="text" placeholder="PINCODE"></input>
        </div>
        <div className="details_form">
          <input type="text" placeholder="PERMENANT ADDRESS"></input>
          <input type="text" placeholder="CITY"></input>
        </div>
        <div className="details_form">
          <input type="text" placeholder="STATE"></input>
          <input type="text" placeholder="PINCODE"></input>
        </div>
      </form>

      <button
        type="submit"
        id="sub-btn"
        onClick={() => setIsAuth(true)}>
        SUBMIT
      </button>
    </div>
  );
}

function Main2() {
   const [isAuth, setIsAuth] = useState();
   if (isAuth) {
     return <Redirect to="/Main3" />;
   }
  return (
    <div className="main__container mt-30">
      <div className="main__title">
        <h2>GENERAL INFORMATION</h2>
        <hr />
      </div>
      <form>
        <div className="details_form">
          <input type="text" placeholder="EMPLOYER NAME"></input>
          <input type="text" placeholder="OFFICE EMAIL"></input>
        </div>
        <div className="details_form">
          <input type="text" placeholder="TOTAL EXPERIENCE"></input>
          <input type="text" placeholder="OFFICE PHONE"></input>
        </div>
      </form>
      <div className="main__title">
        <h2>BANK DETAILS</h2>
        <hr />
      </div>
      <form>
        <div className="details_form">
          <input type="text" placeholder="BANK ACCOUNT NUMBER"></input>
          <input type="text" placeholder="BANK BRANCH"></input>
        </div>
        <div className="details_form">
          <input type="text" placeholder="IFSC CODE"></input>
          <input type="text" placeholder="BANK NAME"></input>
        </div>
      </form>

      <button type="submit" id="sub-btn" onClick={() => setIsAuth(true)}
        > SUBMIT
      </button>
    </div>
  );
}

function Main3() {
   const [isAuth, setIsAuth] = useState();
   if (isAuth) {
     return <Redirect to="/Main4" />;
   }
  return (
    <div className="main__container mt-30">
      <div className="main__title">
        <h2>PREFERENCES</h2>
        <hr />
      </div>
      <form>
        <div className="details_form">
          <input type="text" placeholder="PREFERENCE NAME 1"></input>
          <input type="text" placeholder="ADDRESS"></input>
        </div>
        <div className="details_form">
          <input type="text" placeholder="PHONE NUMBER"></input>
          <input type="text" placeholder="CITY"></input>
        </div>
        <div className="details_form">
          <input type="text" placeholder="STATE"></input>
          <input type="text" placeholder="PINCODE"></input>
        </div>
        <div className="details_form">
          <input type="text" placeholder="PREFERENCE NAME 2"></input>
          <input type="text" placeholder="ADDRESS"></input>
        </div>
        <div className="details_form">
          <input type="text" placeholder="PHONE NUMBER"></input>
          <input type="text" placeholder="CITY"></input>
        </div>
        <div className="details_form">
          <input type="text" placeholder="STATE"></input>
          <input type="text" placeholder="PINCODE"></input>
        </div>
      </form>

      <button type="submit" id="sub-btn" onClick={() => setIsAuth(true)}>
        SUBMIT
      </button>
    </div>
  );
}
function Main4() {
  const [file, setFile] = React.useState('');
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }
  return (
    <div className="document mt-30">
      <div id="upload-box">
        <input type="file" onChange={handleUpload} />
      </div>
    </div>
  );
}


function SigninContainer() {
  const [isAuth, setIsAuth] = useState();
  if (isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <div>
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
            <div className={'text-1'}>
              <Link to="/ForgotPassword">Forgot password ?</Link>
            </div>
            <button className={'btn-submit'} onClick={() => setIsAuth(true)}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function ForgotPassword() {
  return (
    <div>
      <div className={'signinBox'}>
        <div className={'leftBox'}>
          <div className={'imageLogo'}>
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className={'rightBox'}>
          <div className={'box'}>
            <div className={'titleBox'}>FORGOT PASSWORD ?</div>
            <div className={'text-1'}>
              We Will send a reset link to your Email ID to reset Password
            </div>
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
    </div>
  );
}