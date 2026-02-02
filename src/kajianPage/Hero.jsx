import children from "../assets/children.png";
import programer from "../assets/codingers.png";

export default function Hero() {
  return (
    <div className="relative flex items-center bg-gray-700 pl-20 w-full h-screen overflow-hidden font-inter text-white">
      <div className="space-y-5 w-1/2">
        <h1 className="font-bold text-7xl">
          Temukan Pelajaranmu <br /> & Pelajarilah
        </h1>
        <p className="mb-10 text-xl">
          website no.1 dengan materi pendidikan paling lengkap, dari mulai
          sejarah hingga ilmu teknologi tersedia di sini
        </p>
        <a
          href="#deskripsi"
          className="bg-orange-200 px-5 py-4 rounded-xl font-bold text-black bloc">
          Temukan Pelajaran
        </a>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img
          src={children}
          alt=""
          className="top-30 -right-10 bottom-0 z-10 absolute"
        />
        <img
          src={programer}
          alt=""
          className="top-70 -right-20 bottom-0 absolute w-170"
        />
      </div>
    </div>
  );
}
