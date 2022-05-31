import "./app.css"
import {Users} from "./users"
import {useState} from 'react';
function App(){
  const [query, setQuery] = useState("");
  return (

    <div className="app">
    <input type="text" className="search" placeholder="Search" onChange={e=>setQuery(e.target.value)}></input>
    <ul className="list">
    {
      Users.filter(user=>user.first_name.toLowerCase().includes(query)).map((user)=>(
        <li key={user.id} className="list-item">{user.first_name}</li>
      ))
    }
    </ul>
    </div>

  )

}
export default App;