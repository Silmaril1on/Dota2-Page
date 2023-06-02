import { useState } from "react";
import Language from "./Language";
import "./NavigationBar";
import HomeBtn from "../04-Home/01-Heroes/HomeBtn";
import { AiOutlineClose } from "react-icons/Ai";

function Login() {
  const [forms, setForms] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    if (!email) return;
    const fakeId = Date.now();
    const setNewUsers = { id: fakeId, name };
    const updatedUsers = [...users, setNewUsers];
    setUsers(updatedUsers);
    setName("");
    setEmail("");
    setForms(false);
  };

  const login = () => {
    setForms(!forms);
  };

  return (
    <div className="user-container">
      <div className="nickname-container">
        <h1 className="nickName">
          {users
            ? users.map((user) => {
                return (
                  <div key={user.id}>
                    <h2>{user.name}</h2>
                  </div>
                );
              })
            : ""}
        </h1>
        {forms && (
          <section className="login-section" onSubmit={handleSubmit}>
            <AiOutlineClose
              onClick={() => {
                setForms(false);
              }}
            />
            <h1>enter account</h1>
            <form className="form">
              <div className="form-inputs">
                <label htmlFor="name">account id</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="email">account Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <HomeBtn type="submit">submit</HomeBtn>
            </form>
          </section>
        )}
        <button className="login-button" onClick={login}>
          {users ? "login" : "login"}
        </button>
      </div>
      <Language />
    </div>
  );
}

export default Login;
