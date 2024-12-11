import { useState } from "react";
import "./App.css";

function App() {
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
  }

  return (
    <>
      <div className="form">
        <form className="form" onSubmit={handleSubmitMyInfo}>
          <label htmlFor="name">
            Name: <input value={name} type="text" id="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label htmlFor="phone">
            Phone number: <input value={phoneNumber} type="number" id="phone" onChange={(e) => setPhoneNumber(e.target.value)} />
          </label>
          <label htmlFor="email">
            Email: <input value={email} type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
      <MyCv myInfo={myInfo} />
    </>
  );
}

function MyCv({ myInfo }) {
  return (
    <div className="MyCvBlock1">
      <h1>My Information</h1>
      <h2>Name:</h2>
      <div>{myInfo.name}</div>
      <h2>Phone number:</h2>
      <div>{myInfo.phoneNumber}</div>
      <h2>Email:</h2>
      <div>{myInfo.email}</div>
    </div>
  );
}

export default App;
