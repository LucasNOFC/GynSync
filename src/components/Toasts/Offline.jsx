import { EyeSlashIcon } from "@heroicons/react/24/solid";

const Offline = ({ message }) => {
  return (
    <div className="p-5 bg-blue-950 text-[#868686] rounded-lg flex items-center">
      <EyeSlashIcon className="w-8 h-8 inline-block mr-2" />
      <p>{message}</p>
    </div>
  );
};

export default Offline;
