import { useEffect, useState } from "react";
import Anime from "./Anime";
import axios from "axios";

const  API = process.env.REACT_APP_API_URL;

function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    axios.get(`${API}/animes`).then((res) => {
      setAnimes(res.data);
    });
  }, []);

  return (
    <section className="index" id="anime-list">
      {animes.map(({id, name, description}) => {
        return <Anime key={id} name={name} description={description} />;
      })}
    </section>
  );
}

export default Animes;
