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
