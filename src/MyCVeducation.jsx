import { useState } from "react";

export function EducationForm({ getInfoFromEducation, hideForm }) {
  const [placeOfStudy, setplaceOfStudy] = useState(``);
  const [degree, setDegree] = useState(``);
  const [date, setDate] = useState(``);
  const [myEducation, setMyEducation] = useState({ placeOfStudy, degree, date });

  function handleSubmitMyEducation(e) {
    e.preventDefault();
    setMyEducation({ placeOfStudy: placeOfStudy, degree: degree, date: date });
    setplaceOfStudy(``);
    setDegree(``);
    setDate(``);
    getInfoFromEducation({ placeOfStudy: placeOfStudy, degree: degree, date: date });
  }

  function editForm2(parameter) {
    setplaceOfStudy(parameter.placeOfStudy);
    setDegree(parameter.degree);
    setDate(parameter.date);
  }

  return (
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
          Degree: <input value={degree} autoComplete="off" type="text" id="degree" onChange={(e) => setDegree(e.target.value)} required />
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
  );
}

export function MyCvEducation({ myEducation }) {
  return (
    <div className="mycvBlock">
      <div>
        <h1 className="h1style">My Education</h1>
      </div>
      <div className="data">
        <div>
          <h2 className="h2style">Place of study:</h2>
          <div>{myEducation.placeOfStudy}</div>
        </div>
        <div>
          <h2 className="h2style">Degree:</h2>
          <div>{myEducation.degree}</div>
        </div>
        <div>
          <h2 className="h2style">Date of graduation:</h2>
          <div>{myEducation.date}</div>
        </div>
      </div>
    </div>
  );
}
