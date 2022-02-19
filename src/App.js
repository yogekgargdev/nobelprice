import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [users, setUser] = useState([]);


  useEffect(() => {
    fetch("http://api.nobelprize.org/v1/prize.json").then((result) => {
      result.json().then((resp) => {
        setUser(resp['prizes'])
      })
    })
  }, [])


  return (

    <div className="App">

        <center>
          <h1>Nobel Prize Winners </h1>
          <table border="1" style={{ width: 1200 }}>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Prize</td>
              </tr>
              {users.map((item, key) => (
                <>
                  {item.laureates?.map((x) => (
                    <tr>
                      <td>{x.firstname}</td>
                      <td>{x.motivation}</td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </center>
      </div>
  );


};

export default App;