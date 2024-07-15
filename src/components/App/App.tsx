import { useEffect, useState } from 'react'
import './app.scss'

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9a58e4bdbemsha8160c31044b51cp1f6f60jsnce96a54d60ac',
		'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
	}
};
    
    try {
      fetch(url, options)
      .then((response) => {console.log(response)});
    } catch (error) {
      console.error(error);
    }
  },[]);

  return (
    <>
    {data}
    </>
  )
}

export default App
