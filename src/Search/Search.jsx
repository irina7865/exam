import './Search.css'


export const Search = ( {searchfunc} ) => {

return( 
<div>
    <h2 id="SearchH2">Search:</h2>
       <form id="Search" onSubmit={searchfunc} >
         <div id="Titleh">Title:
          <input className="Title" name="filmtitle" type="text" />
         </div>
    <div>Type:
      <select className="Type" name="typefilm">
        <option>Movie</option>
        <option>Series</option>
        <option>Episode</option>
      </select>
    </div>
  <button id="TypeSubmit" type="submit" >Search</button>
</form>
</div>
)
}

