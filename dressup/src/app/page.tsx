import Carousel from "./components/carousel";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[url(../../public/room-bg.gif)] bg-cover flex flex-row justify-center items-center">
      <div className="w-70 sm:w-80 md:w-167 lg:w-200 h-120 sm:h-144 md:h-90 lg:h-120 bg-white flex flex-col items-center">
        <h1 className="text-black text-2xl text-2xl md:text-3xl lg:text-4xl">Please Select a category</h1>
        <Carousel />
      </div>
    </div>
  );
}
