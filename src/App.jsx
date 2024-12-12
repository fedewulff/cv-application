import { useState } from "react";
import "./App.css";
import { MyCvInfo } from "./MyCVinfo";
import { MyCvEducation } from "./MyCVeducation";

function App() {
  const [name, setName] = useState(``);
  const [phoneNumber, setPhoneNumber] = useState(``);
  const [email, setEmail] = useState(``);
  const [myInfo, setMyInfo] = useState({ name, phoneNumber, email });
  const [placeOfStudy, setplaceOfStudy] = useState(``);
  const [degree, setDegree] = useState(``);
  const [date, setDate] = useState(``);
  const [myEducation, setMyEducation] = useState({ placeOfStudy, degree, date });
  function handleSubmitMyInfo(e) {
    e.preventDefault();
    setMyInfo({ name: name, phoneNumber: phoneNumber, email: email });
    setName(``);
    setPhoneNumber(``);
    setEmail(``);
  }
  function handleSubmitMyEducation(e) {
    e.preventDefault();
    setMyEducation({ placeOfStudy: placeOfStudy, degree: degree, date: date });
    setplaceOfStudy(``);
    setDegree(``);
    setDate(``);
  }
  return (
    <>
      <div className="container">
        <div className="allforms">
          <div className="firstform">
            <div className="title">
              <h1 className="h1style">Me</h1>
              <button> &gt; </button>
            </div>
            <form className="form" onSubmit={handleSubmitMyInfo}>
              <label htmlFor="name">
                Name: <input value={name} type="text" id="name" onChange={(e) => setName(e.target.value)} />
              </label>
              <label htmlFor="phone">
                Phone number: <input value={phoneNumber} type="number" id="phone" onChange={(e) => setPhoneNumber(e.target.value)} />
              </label>
              <label htmlFor="email">
                E-mail: <input value={email} type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
              </label>
              <button className="formbuttons" type="submit">
                SEND
              </button>
            </form>
          </div>

          <div className="secondform">
            <div className="title">
              <h1 className="h1style">Education</h1>
              <button> &gt; </button>
            </div>
            <form className="form" onSubmit={handleSubmitMyEducation}>
              <label htmlFor="placeofstudy">
                Place of study:{" "}
                <input value={placeOfStudy} type="text" id="placeofstudy" onChange={(e) => setplaceOfStudy(e.target.value)} />
              </label>
              <label htmlFor="degree">
                Degree: <input value={degree} type="text" id="degree" onChange={(e) => setDegree(e.target.value)} />
              </label>
              <label htmlFor="date">
                Date of graduation: <input value={date} type="date" id="date" onChange={(e) => setDate(e.target.value)} />
              </label>
              <button className="formbuttons" type="submit">
                SEND
              </button>
            </form>
          </div>
        </div>

        <div className="mycv">
          <h1 className="mycvtitle">My Cv</h1>
          <MyCvInfo myInfo={myInfo} />
          <MyCvEducation myEducation={myEducation} />
        </div>
      </div>
    </>
  );
}

export default App;
