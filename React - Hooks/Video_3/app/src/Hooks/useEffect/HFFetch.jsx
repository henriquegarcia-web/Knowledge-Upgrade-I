import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HFFetch = () => {

  const [data, setData] = useState({ hits: [] })
  const [search, setSearch] = useState('linux')

  useEffect(() => {
    async function fetchData() {
      const result = await axios(`https://hn.algolia.com/api/v1/search?query=${search}`)
      console.log(result.data)
      setData(result.data)
    }
    fetchData()
  }, [search])
  

  return (
    <div>
      <input 
        type="text" 
        placeholder='Faça uma pesquisa' 
        onChange={(e) => setSearch(e.target.value)} 
      />

      <br/>
      <br/>

      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HFFetch