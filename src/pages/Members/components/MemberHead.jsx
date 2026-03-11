import React from "react";

const MemberHead = ({ member }) => {
  return (
    <div className="border border-zinc-700 rounded-3xl">
      <div className="flex justify-between bg-[#262626] p-5 rounded-3xl">
        <h1 className="p-2">{member?.name}</h1>
        <div className="flex flex-col items-center p-2 gap-2">
          <p className="text-[15px] text-gray-500 font-semibold">
            Situação na academia
          </p>
          <p
            className={`text-[18px] p-2 border-2 rounded-2xl capitalize ${member?.status === "active" ? "bg-[#a7ff043f] border-[#a7ff043f]" : "bg-[#ff04043f] border-[#ff04043f]"}`}
          >
            {member?.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberHead;
