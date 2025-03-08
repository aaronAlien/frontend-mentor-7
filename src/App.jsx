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
      <div className='flex justify-center items-center my-6 lg:my-auto mx-auto lg:min-h-screen bg-gray-100 px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-4 lg:my-10 gap-4 lg:gap-8 mx-auto lg:max-w-full xl:max-w-[80%] 2xl:max-w-[70%] lg:auto-rows-auto'>
          <div className='rounded-xl lg:col-start-2 lg:col-end-5 lg:row-start-1 lg:row-span-1 lg:space-y-8 lg:h-min lg:flex lg:flex-col lg:mx-auto lg:justify-center items-center'>
            <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:h-min">
              <div className="lg:col-span-2 lg:row-start-1 lg:h-min lg:row-span-1">
                <Center />
              </div>
              <div className="hidden lg:col-span-2 lg:row-start-2 lg:row-span-1 lg:flex lg:items-center lg:h-auto space-x-8">
              <SquareOne />
              <SquareTwo />
            </div>
            <div className="hidden lg:col-start-3 lg:row-start-1 lg:row-end-3 lg:row-span-1 lg:flex ">
              <Right />
            </div>
          </div>
          </div>

          <div className='rounded-xl lg:hidden'>
            <SquareOne />
          </div>
          <div className='rounded-xl lg:hidden'>
            <SquareTwo />
          </div>
          <div className='rounded-xl lg:col-start-4 lg:row-start-1 lg:h-min space-y-4 lg:hidden'>
            <Right />
            <BottomRight />
          </div>


          <div className='rounded-xl lg:col-start-2 lg:row-start-2 lg:hidden'>
            <SquareThree />
          </div>
          <div className='rounded-xl lg:col-start-1 lg:row-span-2 lg:flex lg:flex-col lg:items-start space-y-4 lg:space-y-0 lg:gap-8'>
            <LeftOne />
            <LeftTwo />
          </div>

          <div className='hidden md:flex rounded-xl lg:col-start-2 lg:col-end-5'>
            <div className="lg:grid grid-cols-3 lg:justify-center lg:items-center lg:gap-8 lg:h-min">
              <div className="lg:col-span-1">
                <SquareThree />
              </div>
            <div className="lg:col-span-2">
              <BottomRight />
            </div>
            </div>
          </div>

        </div>
      </div>
        <Footer />

    </>
  );
}

export default App;
