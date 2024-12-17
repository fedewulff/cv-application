import { useState } from "react";

export function InformationForm({ hideForm, getInfoFromForm }) {
  const [name, setName] = useState(``);
  const [phoneNumber, setPhoneNumber] = useState(``);
  const [email, setEmail] = useState(``);
  const [myInfo, setMyInfo] = useState({ name, phoneNumber, email });

  function handleSubmitMyInfo(e) {
    e.preventDefault();
    setMyInfo({ name: name, phoneNumber: phoneNumber, email: email });
    setName(``);
    setPhoneNumber(``);
    setEmail(``);
    getInfoFromForm({ name: name, phoneNumber: phoneNumber, email: email });
  }

  function editForm1(parameter) {
    setName(parameter.name);
    setPhoneNumber(parameter.phoneNumber);
    setEmail(parameter.email);
  }

  return (
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
          E-mail: <input value={email} autoComplete="off" type="email" id="email" onChange={(e) => setEmail(e.target.value)} required />
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
  );
}

export function MyCvInfo({ myInfo }) {
  return (
    <div className="mycvBlock">
      <div>
        <h1 className="h1style">My Information</h1>
      </div>
      <div className="data">
        <div>
          <h2 className="h2style">Name:</h2>
          <div>{myInfo.name}</div>
        </div>
        <div>
          <h2 className="h2style">Phone number:</h2>
          <div>{myInfo.phoneNumber}</div>
        </div>
        <div>
          <h2 className="h2style">E-mail:</h2>
          <div>{myInfo.email}</div>
        </div>
      </div>
    </div>
  );
}
