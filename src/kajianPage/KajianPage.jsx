import { useState } from "react";
import dataKajian from "./dataKajian";
import { colors } from "./colors";

export default function KajianPage() {
  let [zoom, setZoom] = useState(null);
  let [filter, setFilter] = useState("semua");
  let [search, setSearch] = useState("");
  const filteredData = dataKajian.filter((data) => {
    const cocokTema = filter == "semua" ? true : data.tema.includes(filter);

    const cocokSearch =
      data.nama.toLowerCase().includes(search.toLowerCase()) ||
      data.tema.some((items) =>
        items.toLowerCase().includes(search.toLowerCase()),
      );

    return cocokTema && cocokSearch;
  });
  console.log(zoom);
  return (
    <div id="deskripsi" className="flex flex-col justify-center font-inter">
      <div className="top-0 z-50 sticky flex justify-between gap-20 bg-orange-200 px-30 py-10 w-full">
        <input
          type="text"
          className="py-3 pl-5 border border-black rounded-full w-3/4 text-xl"
          placeholder="Masukkan tema yang ingin dicari..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="block bg-white shadow-sm px-10 py-2.5 border border-gray-300 rounded-full focus:outline-none w-1/4 font-bold text-gray-800 transition appearance-none">
          <option value="semua">semua</option>
          <option value="IT">IT</option>
          <option value="math">math</option>
          <option value="sejarah">sejarah</option>
        </select>
      </div>
      <div
        className={`flex m-auto flex-wrap justify-center mt-30 gap-10 ${zoom ? "p-0" : "p-10"}`}>
        {filteredData.length === 0 ? (
          <h1>data tidak ditemukan</h1>
        ) : (
          filteredData.map((data) => (
            <div
              key={data.id}
              className={`${zoom === data.id ? "fixed overflow-y-auto scrollbar-hide z-50 m-auto bg-black/90 top-0 left-0 w-full h-screen" : "static z-0"}`}>
              <div
                className={`relative m-auto transition-all duration-600 overflow-hidden bg-gray-300 card flex flex-col justify-start ${zoom == data.id ? "w-200 h-max rounded-none" : "w-100 h-135 rounded-3xl"}`}>
                <button
                  className={`top-5 cursor-pointer right-5 z-10 absolute bg-red-200 p-5 rounded-full ${zoom == data.id ? "block" : "hidden"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setZoom(null);
                  }}>
                  ❌
                </button>
                <img
                  src={data.imgTampilan}
                  alt=""
                  className={` ${zoom == data.id ? "static" : "rounded-t-2xl"}`}
                />
                <div className="p-5 pb-2">
                  {data.tema.map((temas, keys) => (
                    <span
                      className="px-4 py-1 rounded-full"
                      key={keys}
                      style={{ backgroundColor: colors[temas.toLowerCase()] }}>
                      {temas}
                    </span>
                  ))}
                </div>
                <div className="space-y-3 p-5 pt-0">
                  <h2 className="font-bold text-3xl">{data.nama}</h2>
                  <p
                    className={`${zoom == data.id ? "line-clamp-none" : "line-clamp-3"}`}>
                    {data.desc}
                  </p>
                </div>
                <div
                  className={`flex items-center p-5 ${zoom == data.id ? "justify-start gap-5" : "justify-between"}`}>
                  <a
                    href={data.poster}
                    download={data.nama}
                    className="bg-blue-400 px-3 py-2 rounded-md font-bold text-white">
                    download poster
                  </a>
                  <a
                    href={data.slide}
                    target="_blank"
                    className={`bg-gray-700 px-3 py-2 rounded-md font-bold text-white ${zoom == data.id ? "inline" : "hidden"}`}>
                    download slide
                  </a>
                  <a
                    onClick={() => setZoom(data.id)}
                    className={`bg-orange-400 px-3 py-2 rounded-md font-bold text-white cursor-pointer ${zoom == data.id ? "hidden" : "inline"}`}>
                    pelajari lebih lanjut
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
