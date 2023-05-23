import React,{ useEffect, useState } from "react";

import "../App.css";
import axios from "axios";
import ReactLoading from "react-loading";

// Components
import FavPoke from "../components/FavPoke";


const HomePage = () => {

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
  return (
    <div className=" overflow-hidden  grid justify-items-center m-6  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
            <h1 className="text-white text-2xl">{poke?.name}</h1>

            <div class="grid grid-cols-3 gap-3">

            <button className=" mt-6 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded" onClick={addFav}>
              Add to Favourite
            </button>

            <button className="mr-4 mt-10 mt-6 bg-transparent  text-white font-semibold  py-2 px-4 border border-white  rounded " onClick={unNextPoke}>
              ก่อนหน้า
            </button>

            <button className="mr-4 mt-10 mt-6 bg-transparent  text-white font-semibold  py-2 px-4 border border-white  rounded" onClick={nextProke}>ต่อไป ... </button>


            </div>

           
            <br />

           
            

            <img
              className="w-80"
              src={poke?.sprites?.other?.home?.front_default}
              alt=""
            />
            <ul>
              {poke?.abilities?.map((data, index) => (
                <li className="text-white text-xl" key={index}>{data.ability.name}</li>
              ))}
            </ul>

           
          </>
        )}
      </div>

      <div>
        <h1 className="text-white text-2xl">Your Pokemon</h1>
        <br />
        {fav.length > 0 ? (
          <FavPoke fav={fav} />
        ) : (
          <div className="flex h-full justify-center items-center">
            <p className="text-white ">ไม่มีข้อมูล กรุณาเลือก Favourite ก่อน !</p>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default HomePage