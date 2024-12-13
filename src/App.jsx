import { useState } from "react";
import "./Forms.css";
import "./MyCV.css";
import { MyCvInfo } from "./MyCVinfo";
import { MyCvEducation } from "./MyCVeducation";
import { MyCVLastJob } from "./MyCVlastjob";

function App() {
  const [name, setName] = useState(``);
  const [phoneNumber, setPhoneNumber] = useState(``);
  const [email, setEmail] = useState(``);
  const [myInfo, setMyInfo] = useState({ name, phoneNumber, email });

  const [placeOfStudy, setplaceOfStudy] = useState(``);
  const [degree, setDegree] = useState(``);
  const [date, setDate] = useState(``);
  const [myEducation, setMyEducation] = useState({ placeOfStudy, degree, date });

  const [companyName, setCompanyName] = useState(``);
  const [positionTitle, setPositionTitle] = useState(``);
  const [responsibilities, setResponsibilities] = useState(``);
  const [dateIn, setDateIn] = useState(``);
  const [dateOut, setDateOut] = useState(``);
  const [myLastJob, setMyLastJob] = useState({ companyName, positionTitle, responsibilities, dateIn, dateOut });

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
  function handleSubmitMyLastJob(e) {
    e.preventDefault();
    setMyLastJob({
      companyName: companyName,
      positionTitle: positionTitle,
      responsibilities: responsibilities,
      dateIn: dateIn,
      dateOut: dateOut,
    });
    setCompanyName(``);
    setPositionTitle(``);
    setResponsibilities(``);
    setDateIn(``);
    setDateOut(``);
  }
  function hideForm(ogform, secondform, thirdform) {
    const form = document.querySelector(ogform);
    const otherform1 = document.querySelector(secondform);
    const otherform2 = document.querySelector(thirdform);

    if (form.classList.contains("hideform")) {
      form.classList.remove(`hideform`);
      otherform1.classList.add(`hideform`);
      otherform2.classList.add(`hideform`);
    } else {
      form.classList.add(`hideform`);
    }
  }
  function editForm1(parameter) {
    setName(parameter.name);
    setPhoneNumber(parameter.phoneNumber);
    setEmail(parameter.email);
  }
  function editForm2(parameter) {
    setplaceOfStudy(parameter.placeOfStudy);
    setDegree(parameter.degree);
    setDate(parameter.date);
  }
  function editForm3(parameter) {
    setCompanyName(parameter.companyName);
    setPositionTitle(parameter.positionTitle);
    setResponsibilities(parameter.responsibilities);
    setDateIn(parameter.dateIn);
    setDateOut(parameter.dateOut);
  }
  return (
    <>
      <div className="container">
        <div className="allforms">
          <div className="firstform">
            <div className="title">
              <h1 className="h1style">Me</h1>
              <button onClick={() => hideForm(`.form1`, `.form2`, `.form3`)} className="botoncito">
                {" "}
                &gt;{" "}
              </button>
            </div>
            <form className="form form1" onSubmit={handleSubmitMyInfo}>
              <label htmlFor="name">
                Name: <input value={name} autoComplete="off" type="text" id="name" onChange={(e) => setName(e.target.value)} required />
              </label>
              <label htmlFor="phone">
                Phone number:{" "}
                <input
                  value={phoneNumber}
                  autoComplete="off"
                  type="number"
                  id="phone"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </label>
              <label htmlFor="email">
                E-mail:{" "}
                <input value={email} autoComplete="off" type="email" id="email" onChange={(e) => setEmail(e.target.value)} required />
              </label>
              <div className="buttons">
                <button className="formbuttons" type="button" onClick={() => editForm1(myInfo)}>
                  EDIT
                </button>
                <button className="formbuttons" type="submit">
                  SEND
                </button>
              </div>
            </form>
          </div>

          <div className="secondform">
            <div className="title">
              <h1 className="h1style">Education</h1>
              <button onClick={() => hideForm(`.form2`, `.form1`, `.form3`)}> &gt; </button>
            </div>
            <form className="form form2 hideform" onSubmit={handleSubmitMyEducation}>
              <label htmlFor="placeofstudy">
                Place of study:{" "}
                <input
                  value={placeOfStudy}
                  autoComplete="off"
                  type="text"
                  id="placeofstudy"
                  onChange={(e) => setplaceOfStudy(e.target.value)}
                  required
                />
              </label>
              <label htmlFor="degree">
                Degree:{" "}
                <input value={degree} autoComplete="off" type="text" id="degree" onChange={(e) => setDegree(e.target.value)} required />
              </label>
              <label htmlFor="date">
                Date of graduation:{" "}
                <input value={date} autoComplete="off" type="date" id="date" onChange={(e) => setDate(e.target.value)} required />
              </label>
              <div className="buttons">
                <button className="formbuttons" type="button" onClick={() => editForm2(myEducation)}>
                  EDIT
                </button>
                <button className="formbuttons" type="submit">
                  SEND
                </button>
              </div>
            </form>
          </div>

          <div className="thirdform">
            <div className="title">
              <h1 className="h1style">Last job</h1>
              <button onClick={() => hideForm(`.form3`, `.form1`, `.form2`)}> &gt; </button>
            </div>
            <form className="form form3 hideform" onSubmit={handleSubmitMyLastJob}>
              <label htmlFor="companyname">
                Company name:{" "}
                <input
                  value={companyName}
                  autoComplete="off"
                  type="text"
                  id="companyname"
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </label>
              <label htmlFor="positiontitile">
                Position title:{" "}
                <input
                  value={positionTitle}
                  autoComplete="off"
                  type="text"
                  id="positiontitile"
                  onChange={(e) => setPositionTitle(e.target.value)}
                  required
                />
              </label>
              <label htmlFor="responsibilities">
                Responibilities:{" "}
                <textarea
                  value={responsibilities}
                  autoComplete="off"
                  type="text"
                  id="responsibilities"
                  rows={5}
                  onChange={(e) => setResponsibilities(e.target.value)}
                  required
                />
              </label>
              <div className="dateinandout">
                <label htmlFor="datein">
                  Started on:{" "}
                  <input value={dateIn} autoComplete="off" type="date" id="datein" onChange={(e) => setDateIn(e.target.value)} required />
                </label>
                <label htmlFor="dateout">
                  Left on:{" "}
                  <input
                    value={dateOut}
                    autoComplete="off"
                    type="date"
                    id="dateout"
                    onChange={(e) => setDateOut(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="buttons">
                <button className="formbuttons" type="button" onClick={() => editForm3(myLastJob)}>
                  EDIT
                </button>
                <button className="formbuttons" type="submit">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mycv">
          <h1 className="mycvtitle">My Cv</h1>
          <MyCvInfo myInfo={myInfo} />
          <MyCvEducation myEducation={myEducation} />
          <MyCVLastJob myLastJob={myLastJob} />
        </div>
      </div>
    </>
  );
}

export default App;
