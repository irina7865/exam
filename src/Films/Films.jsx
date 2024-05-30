import './Films.css'

export const Films = ({ dataS, func }) => {

return dataS && dataS?.map((el) => <div>
<div id="divfilm" key={el.imdbID}>
<img src={el.Poster}/>
<div id="formtypefilm">{el.Type}</div>
  <h4>{el.Title}</h4>
  <div>{el.Year}</div>
  <button id="DetailsBut" onClick={()=> func(el.imdbID)}>Details</button>
</div></div>)}