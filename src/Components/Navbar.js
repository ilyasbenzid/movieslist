import React, { useState }  from "react";
function Navbar({addnew}) {
const [ADD, setADD] = useState(false);
const [newmovie, setnewmovie] = useState({name:"",image:""});
  return (
    <div className="navbar">
      <img
        className="navbar-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
      />
      <ul className="navbar-links">
        <li className="navbar-link">Home</li>
        <li className="navbar-link">TV Shows</li>
        <li className="navbar-link">Movies</li>
        <li className="navbar-link">New & Popular</li>
        <li className="navbar-link">My List</li>
      </ul>
      <nav>
<input type="text" className="text-input" placeholder="Searsh For Mouves"></input>
<button className="button-in"><em>Searsh</em></button>
<div>
<button onClick={() => setADD(true)}>ADD</button>
{ADD && (
  <div>
    <input type="text" placeholder="name" onchange={(e)=>setnewmovie({...newmovie,name:e.target.value})} />
    <input type="text" placeholder="image url" onchange={(e)=>setnewmovie({...newmovie,image:e.target.value})} />gi
    <button onClick={()=>addnew(newmovie)}>SAVE</button>
  </div>

)}
</div>
</nav>
    </div>
  );
}

export default Navbar;
