import { Link } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/24/outline";

const PlansColumns = ({ plans }) => {
  return (
    <tbody className="divide-y">
      {plans.data.map((plan) => (
        <tr key={plan.id} className="hover:bg-[#202020] transition-colors">
          <td className="px-4 py-3 text-gray-400">{plan.name}</td>

          <td className="px-4 py-3 text-center text-gray-400">{plan.price}</td>

          <td className="px-4 py-3 text-center text-gray-400">
            {plan.duration_days}
          </td>
          <td className="px-4 py-3 text-center text-gray-400">
            {plan.description}
          </td>
          <td className="px-4 py-3 flex justify-center gap-2">
            <Link to={`/plans/edit/${plan.id}`}>
              <PencilIcon className="w-6 text-gray-400 hover:text-gray-600" />
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default PlansColumns;
