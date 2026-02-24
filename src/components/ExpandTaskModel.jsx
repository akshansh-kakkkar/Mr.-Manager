import React, { useContext } from "react";
import { taskContext } from "../Context/CreateContext";

const ExpandTaskModel = () => {
  const { viewMore, setViewMore } = useContext(taskContext);
  if (!viewMore) return null;
  return (
    <>
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.45)] flex items-center justify-center z-10">
        <div className="bg-blue-50 rounded-xl flex-col w-full max-w-md p-6 items-left flex justify-left mx-4">
          <div className="flex  gap-2 text-left justify-start m-4">
            <h2 className="font-bold text-2xl roboto text-gray-800">
              Title :{" "}
            </h2>
            <h2 className="font-semibold text-2xl roboto text-gray-800">
              {viewMore.title}
            </h2>
          </div>
          <div className="flex items-left gap-2 text-left flex-col justify-start mx-4">
            <h2 className="font-bold text-xl roboto text-gray-800">
              Description :{" "}
            </h2>
            <h2 className="font- text-sm text-gray-500">
              {viewMore.description}
            </h2>
          </div>
          <div className="flex items-left gap-2 text-left my-2 flex-col justify-start mx-4">
            <h2 className="font-bold text-xl roboto text-gray-800">
              Priority :{" "}
            </h2>
            <h2 className="font- text-xl bg-white items-center rounded-xl text-center p-2 text-gray-800 ">
              {viewMore.priority}
            </h2>
          </div>
          <div
            onClick={() => setViewMore(null)}
            className="bg-red-500  px-5 roboto hover:bg-white cursor-pointer hover:text-red-500 hover:border-2 hover:border-red-500 hover:scale-[95%] transition-all duration-300 hover:-translate-y-1 text-2xl py-2 m-3 rounded-2xl text-white"
          >
            <button>close</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpandTaskModel;
