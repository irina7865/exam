import './Films.css'

export const Films = ({ dataS, func }) => {
return dataS.map((el) => 

<div key={el.imdbID} id='Div11'   >
  <div className="divfilm" > <img className='img1' src={el.Poster}/>
   <div>
    <div className="formtypefilm">{el.Type}</div>
       <h4>{el.Title}</h4>
        <div>{el.Year}</div>
       <button className="DetailsBut"  onClick={()=> func(el.imdbID)}>Details</button>
    </div></div>
  
</div>)}