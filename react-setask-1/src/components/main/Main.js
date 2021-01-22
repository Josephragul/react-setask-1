import './Main.css';



const Main = () => {


 
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
        <button type="submit" id="sub-btn" >
          SUBMIT
        </button>
      </div>
    );
}

export default Main;
