import { useState } from 'react'

const Search = () => {
    
  const [searchText, setSearchText] = useState('');
  const [list] = useState(['apple', 'orange', 'kiwi']);

  let searchResult = list.filter((item) => item.toLowerCase().includes(searchText.toLowerCase()));


  return (
    <div>
      <input type="text" placeholder='search text here' onChange={(e) => setSearchText(e.target.value)}/>
      
      <ul>
        {searchResult.map((item) => (<li key={item}>{item}</li>))}
      </ul>
    </div>
  )
  
}

export default Search;
