
import './App.css';
import Navbar from './Components/Navbar';
import Video from './Video';
import Movieslist from './Components/Movieslist';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([
    { image: "https://pbs.twimg.com/media/D4E1l1gWAAApftP?format=jpg&name=900x900", name: "DEMON SLAYER" },
    { image: "https://images4.alphacoders.com/637/thumbbig-637345.webp", name: "HUNTER X HUNTER" },
    { image: "https://rare-gallery.com/thumbnail/1342088-Eren-Yeager-Shingeki-No-KyojinAttack-on-Titan-Season.png", name: "ATTACK ON TITAN" },
    { image: "https://images5.alphacoders.com/759/thumbbig-759145.webp", name: "BLEACH" }
  ]);
  const addmovie=(x)=>{
    setMovies([x,...movies])
  }
  return (
    <div className="App">
<Navbar addnew={addmovie}/>
<Video/>
<Movieslist   movies={movies}/>
    </div>
  );
}

export default App;
