import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const Warning = ({ message }) => {
  return (
    <div className="p-5 bg-blue-950 text-[#fffd89] rounded-lg flex items-center">
      <ExclamationCircleIcon className="w-8 h-8 inline-block mr-2" />
      <p>{message}</p>
    </div>
  );
};

export default Warning;
