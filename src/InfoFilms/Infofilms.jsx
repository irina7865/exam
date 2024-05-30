
export const Infofilms = ({film}) => {
    return(  <div>   
                 <h2>Film info:</h2>
             <div id="DivInfo">
              <img src={film.Poster}/>
               <div id="DivInfo2">
                <div id="formtypefilm"><span>Title:</span>{film.Title}</div>
                <div class="DivInfo2Div"><span>Released:</span>{film.Released}</div>
                <div class="DivInfo2Div"><span>Genre:</span>{film.Genre}</div>
                <div class="DivInfo2Div"><span>Country:</span>{film.Country}</div>
                <div class="DivInfo2Div"><span>Director:</span>{film.Director}</div>
                <div class="DivInfo2Div"><span>Writer:</span>{film.Writer}</div>
                <div class="DivInfo2Div"><span>Actors:</span>{film.Actors}</div>
                 <div class="DivInfo2Div"><span>Awards:</span>{film.Awards}</div>
                 </div>
                </div> 
             </div>)
}