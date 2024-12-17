import { useState } from "react";

export function LastJobForm({ getInfoFromLastJob, hideForm }) {
  const [companyName, setCompanyName] = useState(``);
  const [positionTitle, setPositionTitle] = useState(``);
  const [responsibilities, setResponsibilities] = useState(``);
  const [dateIn, setDateIn] = useState(``);
  const [dateOut, setDateOut] = useState(``);
  const [myLastJob, setMyLastJob] = useState({ companyName, positionTitle, responsibilities, dateIn, dateOut });

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
    getInfoFromLastJob({
      companyName: companyName,
      positionTitle: positionTitle,
      responsibilities: responsibilities,
      dateIn: dateIn,
      dateOut: dateOut,
    });
  }

  function editForm3(parameter) {
    setCompanyName(parameter.companyName);
    setPositionTitle(parameter.positionTitle);
    setResponsibilities(parameter.responsibilities);
    setDateIn(parameter.dateIn);
    setDateOut(parameter.dateOut);
  }

  return (
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
            <input value={dateOut} autoComplete="off" type="date" id="dateout" onChange={(e) => setDateOut(e.target.value)} required />
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
  );
}

export function MyCVLastJob({ myLastJob }) {
  return (
    <div className="mycvBlock">
      <div>
        <h1 className="h1style">Last Job</h1>
      </div>
      <div className="data">
        <div>
          <h2 className="h2style">Company name:</h2>
          <div>{myLastJob.companyName}</div>
        </div>
        <div>
          <h2 className="h2style">Position title:</h2>
          <div>{myLastJob.positionTitle}</div>
        </div>
        <div>
          <h2 className="h2style">Responsibilities:</h2>
          <div>{myLastJob.responsibilities}</div>
        </div>
        <div className="dateinandoutCV">
          <div>
            <h2 className="h2style">Date in:</h2>
            <div>{myLastJob.dateIn}</div>
          </div>
          <div>
            <h2 className="h2style">Date out:</h2>
            <div>{myLastJob.dateOut}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
