import { useEffect, useState } from "react";
import Display from "./Display";
import Search from "./Search";
import axios from "axios";

function App() {
  const API_KEY = `21805bff7224936fa25d6cec016a0a4b`;
  const [weather, setWeather] = useState([]);
  const [history, setHistory] = useState([]);
  const [loader, setLoader] = useState(false);


  const clearAll = () => {
    setHistory([]);
    localStorage.removeItem("history");
  }

  const removeHistory = (index) => {
    if (history.length == 1) {
      clearAll();
    } else {
      const newHistory = history.filter(
        (h, i) => {
          if (i == index) return false;
          else return true;
        }
      )
      setHistory(newHistory);
    }

  }

  const searchWeather = (city) => {
    setLoader(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    axios.get(url)
      .then(
        (success) => {
          setWeather(success.data);
          let flag = false; // nhi hai history mein
          for (var i = 0; i < history.length; i++) {
            if (history[i].city == city) {
              flag = true;
              break;
            }
          }
          if (flag == false) {
            setHistory([
              ...history,
              {
                city,
                timestamp: new Date().getTime()
              }
            ])
          }
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      ).finally(
        () => {
          setLoader(false);
        }
      )
  }

  useEffect(
    () => {
      if (history.length != 0) {
        localStorage.setItem("history", JSON.stringify(history));
      }
    },
    [history]
  )

  useEffect(
    () => {
      const lsHistory = localStorage.getItem("history");
      if (lsHistory != undefined) {
        // json string to Array of objects
        // JSON.parse();
        setHistory(JSON.parse(lsHistory));
      }
    },
    []
  )

  return (
    <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 ">
      <Search searchWeather={searchWeather} />
      <Display removeHistory={removeHistory} clearAll={clearAll} loader={loader} searchWeather={searchWeather} data={weather} history={history} />
    </div>
  );
}

export default App;
