import axios from "axios";
import React, { useEffect, useState } from "react";

const Workshop_2 = () => {
  const [name, setName] = useState("eevee");
  const [data, setData] = useState([]);
  const [id, setId]= useState(133)
  const [err, setErr] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  const getData = async () => {
    setIsLoad(true);
    try {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setData(res.data);
      setId(res.data.id)
    } catch (error) {
      console.log(error);
      setData(false);
      setErr(error.message);
    }

    setIsLoad(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const heandleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
      <div className="bg-white text-center rounded-3xl border shadow-lg p-10 max-w-xs">
        <form onSubmit={heandleSubmit}>
          {err ? (
            <div>
              <button
                onClick={(e) => location.reload()}
                className="bg-indigo-600 px-2 mt-5 text-lg rounded text-gray-100"
              >
                ค้นหาใหม่
              </button>
            </div>
          ) : (
            <div>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="p-3 border-solid border-2 border-indigo-600 rounded-md"
                placeholder="ค้นหาชื่อโปเกม่อน"
              />
              <button className="bg-indigo-600 px-2 mt-5 text-lg rounded text-gray-100">
                ค้นหา
              </button>
            </div>
          )}
        </form>

        {err ? (
          <p className="my-5">{err}</p>
        ) : isLoad ? (
          <p>Loading ......</p>
        ) : (
          <div>
            <img
              className="my-5 w-50 h-50 rounded-xl shadow-xl mx-auto"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
              alt=""
            />
            <h1 className="text-lg text-gray-700">{data.name}</h1>
            <h3 className="text-md text-gray-500">weight : {data.weight}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workshop_2;
