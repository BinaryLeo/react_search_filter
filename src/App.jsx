import "./app.css"
import { Users } from "./users"
import { useState } from 'react';
import { Table } from "./Table";

//*BASIC SEARCH
/* function App() {
  const [query, setQuery] = useState("");
  //*query gets the value of the input field and
  //*setQuery sets the value each time the input field changes
  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <ul className="list">
        {
          Users.filter(user => user.first_name.toLowerCase().includes(query))
          .map((user) => (
            <li key={user.id} className="list-item">{user.first_name}</li>
          ))
        }
      </ul>
    </div>
  );
} */

//*Using a Data Table
function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];
  const searchUsers = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  /* const searchUsers = (data) => {
    return data.filter(item => 
     item.first_name.toLowerCase().includes(query)||
     item.last_name.toLowerCase().includes(query)||
     item.email.toLowerCase().includes(query))
    } */
    
  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {<Table data={searchUsers(Users)} />}
    </div>
  );
}

export default App;