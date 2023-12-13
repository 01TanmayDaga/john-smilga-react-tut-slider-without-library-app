import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa6";

function Slider(props) {
  const listLength = props.list.length;
  console.log(listLength);
  const [counter, setCounter] = useState(0);

  const forwardClick = () => {
    counter == -(listLength - 1) ? setCounter(0) : setCounter(counter - 1);
  };
  const backwardClick = () => {
    if (counter == 0) setCounter(-(listLength - 1));
    else setCounter(counter + 1);
  };
  useEffect(() => {
    setInterval(() => {
      forwardClick;
    }, 200);
  }, []);

  return (
    <section className="w-4/6 h-fit max-md:w-5/6 grid grid-cols-[auto_1fr_auto]">
      <IoIosArrowBack
        className="text-white bg-gray-600  text-4xl p-1 m-2 rounded-md hover:bg-purple-500 transition-all self-center overflow-hidden"
        onClick={backwardClick}
      />

      <div className="w-full relative overflow-hidden h-96">
        {props.list.map((ele, index) => {
          const { id, image, name, title, quote } = ele;

          return (
            <article
              key={id}
              className={`h-fit w-full absolute m-auto top-0 bottom-0 px-9 transform transition duration-1000`}
              style={{
                transform: `translateX(${(index + counter) * 100}%)`,
              }}
            >
              <div className="flex justify-center mt-6">
                <img
                  src={image}
                  className="w-44 h-44 rounded-full border-4 border-purple-200 self-center block"
                />
              </div>

              <h1 className=" text-purple-500 uppercase text-center mt-4">
                {name}
              </h1>
              <h1 className="text-black capitalize text-center md:pb-8">
                {title}
              </h1>
              <p className="text-gray-700 text-center">{quote}</p>
              <div className="flex justify-center mb-6">
                <FaQuoteRight className="text-6xl text-purple-500 " />
              </div>
            </article>
          );
        })}
      </div>

      <IoIosArrowForward
        className="text-white text-4xl bg-gray-600 p-1 m-2 rounded-md hover:bg-purple-500 transition-all self-center"
        onClick={forwardClick}
      />
    </section>
  );
}

export default Slider;
