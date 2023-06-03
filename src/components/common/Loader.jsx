import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <span className="animate-pulse inline-flex h-10 w-10 rounded-full bg-white opacity-100"></span>
    </div>
  );
};

export default Loader;
