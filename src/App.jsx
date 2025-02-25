import "./index.css";
import Center from "./components/Center";
import Right from "./components/Right";
import SquareOne from "./components/Squares/SquareOne";
import SquareTwo from "./components/Squares/SquareTwo";
import BottomRight from "./components/BottomRight";
import SquareThree from "./components/Squares/SquareThree";
import LeftOne from "./components/Left/LeftOne";
import LeftTwo from "./components/Left/LeftTwo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className='flex justify-center items-center my-16 md:my-10 2xl:my-6 mx-auto md:min-h-screen bg-gray-100 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mx-auto md:max-w-[90%] 2xl:max-w-[60%] md:auto-rows-auto'>
          <div className='rounded-xl md:col-start-2 md:col-end-4 md:row-start-1 md:row-span-1 md:space-y-8 md:h-min md:flex md:flex-col md:mx-auto md:justify-center'>
            <Center />
            <div className="hidden md:col-start-2 md:col-end-4 md:row-start-2 md:flex md:flex-row md:mx-auto space-x-8 md:h-min">
            <SquareOne />
            <SquareTwo />
          </div>
          </div>

          <div className='rounded-xl md:hidden'>
            <SquareOne />
          </div>
          <div className='rounded-xl md:hidden'>
            <SquareTwo />
          </div>
          <div className='rounded-xl md:col-start-4 md:row-start-1 md:row-span-1 md:h-auto '>
            <Right />
          </div>

          <div className='rounded-xl md:col-start-3 md:col-span-2 md:flex md:space-x-8 md:row-start-2 md:h-min'>
            <BottomRight />
          </div>

          <div className='rounded-xl md:col-start-2 md:row-start-2 md:h-auto'>
            <SquareThree />
          </div>
          <div className='rounded-xl md:col-start-1 md:row-start-1 md:h-[70%] z-50'>
            <LeftOne />
          </div>
          <div className='rounded-xl md:col-start-1 md:h-auto md:-mt-44'>
            <LeftTwo />
          </div>
        </div>
      </div>
        <Footer />

    </>
  );
}

export default App;
