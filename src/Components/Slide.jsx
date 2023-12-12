import { FaQuoteRight } from "react-icons/fa6";

function Slide(props) {
  const { id, image, name, title, quote } = props.data;
  console.log(props.data);

  return (
    <article
      key={id}
      className={`h-fit w-full absolute m-auto top-0 bottom-0 px-9`}
      style={{
        transition: "transform 1s ease-in-out",
        transform: `translateX(${props.shiftValue * 100}%)`,
      }}
    >
      <div className="flex justify-center mt-6">
        <img
          src={image}
          className="w-44 h-44 rounded-full border-4 border-purple-200 self-center block"
        />
      </div>

      <h1 className=" text-purple-500 uppercase text-center mt-4">{name}</h1>
      <h1 className="text-black capitalize text-center md:pb-8">{title}</h1>
      <p className="text-gray-700 text-center">{quote}</p>
      <div className="flex justify-center mb-6">
        <FaQuoteRight className="text-6xl text-purple-500 " />
      </div>
    </article>
  );
}

export default Slide;
