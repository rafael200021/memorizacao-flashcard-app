import React from "react";

export default function HomeContainer({ children }: { children: any }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="lg:flex bg-blue-500 w-2/6 rounded hidden"
        style={{ height: "600px" }}
      ></div>
      <div
        className="border p-12 w-5/6 lg:w-2/6 flex flex-col justify-center items-center"
        style={{ height: "600px" }}
      >
        {children}
      </div>
    </div>
  );
}
