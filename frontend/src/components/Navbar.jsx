import React from "react";

const Navbar = () => {
  return (
    <section className="h-20 bg-neutral-700">
      <div className="h-full px-4 mx-auto overflow-hidden sm:px-8 lg:px-12 relative">
        <div className="h-20 flex items-center justify-between">
          <a className="text-5xl flex items-center text-white justify-center cursor-pointer">
            Traya.
          </a>
          <a className="text-2xl tracking-wide text-gray-50 cursor-pointer">
            Exit
          </a>
        </div>
      </div>
    </section>
    // <h1 className="bg-red-500">Hello</h1>
  );
};

export default Navbar;
