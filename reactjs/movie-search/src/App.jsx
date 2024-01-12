import { useEffect, useState } from "react";
import axios from "axios";
import Input from "./Input";
import Display from "./Display";

function App() {
  const [movies, setMovie] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(
    () => {
      let api = ""
      if (query != "") {
        // get data using query
        api = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${query}`
      } else {
        // get top 20 data
        api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
      }

      axios.get(api)
        .then(
          (success) => {
            setMovie(success.data.results);
          }
        )
        .catch(
          (error) => {
            console.log(error);
          }
        )
    },
    [query]
  )

  const inputHandler = (data) => {
    setQuery(data);
  }


  return (
    <div className="container">
      <Input inputHandler={inputHandler} />
      <Display movies={movies}/>
    </div>
  );
}

export default App;
