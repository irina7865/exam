import './Infofilm.css'

export const Infofilms = ({film}) => {
    return ( <div id='sok'>   
                 <h2>Film info:</h2>
             <div className="DivInfo" key={film.imdbID}>
              <img src={film.Poster}/>
               <div className="DivInfo2">
                <div className="formtypefilm"><span>Title:</span>{film.Title}</div>
                <div className="DivInfo2Div"><span>Released:</span>{film.Released}</div>
                <div className="DivInfo2Div"><span>Genre:</span>{film.Genre}</div>
                <div className="DivInfo2Div"><span>Country:</span>{film.Country}</div>
                <div className="DivInfo2Div"><span>Director:</span>{film.Director}</div>
                <div className="DivInfo2Div"><span>Writer:</span>{film.Writer}</div>
                <div className="DivInfo2Div"><span>Actors:</span>{film.Actors}</div>
                 <div className="DivInfo2Div"><span>Awards:</span>{film.Awards}</div>
                 </div>
                </div> 
             </div>)
}