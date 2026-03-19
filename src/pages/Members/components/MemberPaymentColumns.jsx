import React from "react";

const MemberPaymentColumns = ({ payments }) => {
  const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("pt-BR");
  };

  const formatCurrency = (value) => {
    if (value == null) return "-";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <tbody className="divide-y">
      {payments.map((payment) => (
        <tr className="hover:bg-[#202020] transition-colors" key={payment.id}>
          <td className="px-4 py-3 text-center text-gray-400">
            {formatDate(payment?.paid_at)}
          </td>

          <td className="px-4 py-3 text-center text-gray-400">
            {formatCurrency(payment?.amount)}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default MemberPaymentColumns;
