import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const SuccessMessage = ({ message }) => {
  return (
    <div className="p-5 bg-blue-950 text-[#4ade80] rounded-lg flex items-center">
      <CheckBadgeIcon className="w-8 h-8 inline-block mr-2" />
      <p>{message}</p>
    </div>
  );
};

export default SuccessMessage;
