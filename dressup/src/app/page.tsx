import ClothingCategoriesNavbar from "./components/clothing-categories-navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[url(../../public/room-bg.gif)] bg-cover flex flex-row justify-center items-center">
      <div className="size-8/10 bg-white flex flex-col items-center">
        <h1 className="text-black text-2xl text-2xl md:text-3xl lg:text-4xl">Please Select a category</h1>
        <ClothingCategoriesNavbar />
      </div>
    </div>
  );
}
