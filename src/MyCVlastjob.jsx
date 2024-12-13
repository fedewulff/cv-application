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
