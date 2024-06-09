import logo from './logo.svg';
import './App.css';
import { Search } from './Search/Search';
import { useState } from 'react';
import { Films } from './Films/Films';
import { Infofilms } from './InfoFilms/Infofilms';

function App() {
  const [info, setInfo] = useState(false)
  const [film, setFilm] = useState([])
  const [dataS, setDataS] = useState([])
  console.log(dataS)
  function searchfunc(event){
    event.preventDefault()
    const infosearch = [event.target.typefilm.value , event.target.filmtitle.value]
      fetchData(`http://www.omdbapi.com/?apikey=765c8b08&s=${infosearch[1]}&type=${infosearch[0]}`)
        .then((data) => setDataS(data.Search))
        .catch((error) => console.error(error));
    };
   
   function fetchData(url) {
     return fetch(url) 
       .then((response) => {
         if (!response.ok) {        
             throw new Error("Network response was not ok");
         }      
         return response.json();
       })
       .catch((error) =>
         console.error("Сломалось",error)
       );
   }
   
   
function funcfilm(id){
 fetchData(`http://www.omdbapi.com/?apikey=765c8b08&i=${id}`)
  .then((data) =>  setFilm(data))
  .catch((error) => console.error(error));
  {setInfo(true)}
}

  return (
  <div>
    <Search searchfunc = {searchfunc}/>
    <Films dataS = {dataS} func={funcfilm} />  
    {info && <Infofilms film = {film} />}
  </div>
  
  );
}

export default App;
