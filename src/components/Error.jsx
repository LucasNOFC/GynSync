import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const Error = ({ message }) => {
  return (
    <div className="p-5 bg-blue-950 text-[#f87171] rounded-lg flex items-center">
      <ExclamationTriangleIcon className="w-8 h-8 inline-block mr-2" />
      <p>{message}</p>
    </div>
  );
};

export default Error;
