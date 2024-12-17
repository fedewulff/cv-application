import { useState } from "react";
import "./Forms.css";
import "./MyCV.css";
import { InformationForm, MyCvInfo } from "./MyCVinfo";
import { EducationForm, MyCvEducation } from "./MyCVeducation";
import { LastJobForm, MyCVLastJob } from "./MyCVlastjob";

function App() {
  const [dataInfo, setDataInfo] = useState(``);
  const [dataEducation, setDataEducation] = useState(``);
  const [dataLastJob, setLastJob] = useState(``);

  function getInfoFromForm(data) {
    setDataInfo(data);
  }
  function getInfoFromEducation(data) {
    setDataEducation(data);
  }
  function getInfoFromLastJob(data) {
    setLastJob(data);
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

  return (
    <>
      <div className="container">
        <div className="allforms">
          <InformationForm getInfoFromForm={getInfoFromForm} hideForm={hideForm} />
          <EducationForm getInfoFromEducation={getInfoFromEducation} hideForm={hideForm} />
          <LastJobForm getInfoFromLastJob={getInfoFromLastJob} hideForm={hideForm} />
        </div>

        <div className="mycv">
          <h1 className="mycvtitle">My Cv</h1>
          <MyCvInfo myInfo={dataInfo} />
          <MyCvEducation myEducation={dataEducation} />
          <MyCVLastJob myLastJob={dataLastJob} />
        </div>
      </div>
    </>
  );
}

export default App;
