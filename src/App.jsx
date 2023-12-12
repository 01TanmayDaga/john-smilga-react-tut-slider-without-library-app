import Slider from "./Components/Slider";
import { longList } from "./data";

const App = () => {
  return (
    <main className="bg-gray-50 w-screen h-screen flex justify-center items-center">
      <Slider list={longList} />
    </main>
  );
};
export default App;
