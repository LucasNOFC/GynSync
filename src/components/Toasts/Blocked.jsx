import { LockClosedIcon } from "@heroicons/react/24/solid";

const Blocked = ({ message }) => {
  return (
    <div className="p-5 bg-blue-950 text-[#fbd063] rounded-lg flex items-center">
      <LockClosedIcon className="w-8 h-8 inline-block mr-2" />
      <p>{message}</p>
    </div>
  );
};

export default Blocked;
