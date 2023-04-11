// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [details, setDetails] = useState([]);//details
  const updateRef = useRef(null);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleNumber(e) {
    setNumber(e.target.value);
  }

  function handleClick() {
    let users = {
      id: Date.now(),
      name: name,
      email: email,
      number: number,
    };
    setDetails([...details, users]);
    setName("");
    setEmail("");
    setNumber("");
  }

  function handleDelete(id) {
    setDetails(details.filter((item) => item.id !== id));
  }

  function handleUpdate(id) {
    let updatedUser = { name, email, number };
    let newUser = [...details];
    newUser[id] = updatedUser;
    setDetails(newUser);
    setName("");
    setEmail("");
    setNumber("");
    updateRef.current.focus();
  }

  useEffect(() => {
    updateRef.current.focus();
  }, []);

  return (
    <div className='App'>
      <div className='Upperfields'>
      <div className='Input1'>
        Name:{" "}
        <input value={name} ref={updateRef} onChange={handleName} type="text" />
        <br />
        <br />
       e-mail: <input value={email} onChange={handleEmail} type="email" />
        <br />
        <br />
        Mobile: <input value={number} onChange={handleNumber} type="tel" />
        <br />
        <br />
        <button onClick={handleClick}>Add details</button>
      </div>

      <div className='Table'>
        <h3>Name: {name}</h3>
        <h3>Email: {email}</h3>
        <h3>Mobile: {number}</h3>
      </div>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>delete</th>
              <th>update</th>
            </tr>
          </thead>

          <tbody>
            {details.map((user, index) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td onClick={() => handleDelete(user.id)}>delete</td>
                <td onClick={() => handleUpdate(index)}>update</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
