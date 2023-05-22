import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import ReactLoading from "react-loading";

// Components
import FavPoke from "./components/FavPoke";

function App() {
  const [poke, setPoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState("");
  const [number, setnumber] = useState(1);
  const [fav, setFav] = useState([]);

  const nextProke = () => {
    setnumber((data) => data + 1);
  };

  const unNextPoke = () => {
    setnumber((data) => data - 1);
  };

  const addFav = () => {
    setFav((data) => [...data, poke]);
  };

  console.log(fav);

  useEffect(() => {
    let abortController = new AbortController();
    const loadPoke = async () => {
      try {
        setLoading(true);
        let res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${number}`,
          {
            signal: abortController.signal,
          }
        );
        setPoke(res.data);
        setError("");
      } catch (error) {
        setError("ERRORRRRR !!!", error);
      } finally {
        setLoading(false);
      }
    };

    loadPoke();
    return () => abortController.abort();
  }, [number]);

  // console.log(poke);

  return (
    <div className="max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          {loading ? (
            <div>
              <ReactLoading
                type="spin"
                color="white"
                height={"20%"}
                width={"20%"}
              />
              <p>กรุณารอข้อมูลจากSERVE แปบนุง</p>
            </div>
          ) : (
            <>
              <h1>{poke?.name}</h1>
              <button className="mt-10" onClick={addFav}>Add to Favourite</button>
              <br></br>

              <img className="" src={poke?.sprites?.other?.home?.front_default} alt="" />
              <ul>
                {poke?.abilities?.map((data, index) => (
                  <li key={index}>{data.ability.name}</li>
                ))}
              </ul>

              <button className="mr-4 mt-10" onClick={unNextPoke}>ก่อนหน้า</button>
              <button onClick={nextProke}>ต่อไป ... </button>
            </>
          )}
        </div>

        <div>
          <h1>Your Pokemon</h1>
          <br />
          {fav.length > 0 ? (
            <FavPoke fav={fav} />
          ) : (
            <div className="flex h-full justify-center items-center">
              <p>ไม่มีข้อมูล กรุณาเลือก Favourite ก่อน !</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
