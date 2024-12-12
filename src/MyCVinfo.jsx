// export function InformationForm(handleSubmitMyInfo, name, phoneNumber, email) {
//   return (
//     <div className="form">
//       <form className="form" onSubmit={handleSubmitMyInfo}>
//         <label htmlFor="name">
//           Name: <input value={name} type="text" id="name" onChange={(e) => setName(e.target.value)} />
//         </label>
//         <label htmlFor="phone">
//           Phone number: <input value={phoneNumber} type="number" id="phone" onChange={(e) => setPhoneNumber(e.target.value)} />
//         </label>
//         <label htmlFor="email">
//           Email: <input value={email} type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

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
