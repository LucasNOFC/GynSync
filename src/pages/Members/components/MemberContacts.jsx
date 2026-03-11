import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { DocumentCurrencyRupeeIcon } from "@heroicons/react/24/outline";
import { DocumentIcon } from "@heroicons/react/24/outline";

const MemberContacts = ({ member, dueDate }) => {
  const message = `Olá ${member.name}, estamos passando para lembrar que sua mensalidade da academia vence em ${dueDate}.`;
  const memberPhone = member.phone;
  const onlyNumber = memberPhone.replace(/\D/g, "");

  return (
    <div className="bg-[#262626] p-5 rounded-3xl w-100 mt-5 flex flex-col gap-2 border border-zinc-700">
      <div className="flex gap-2 items-center">
        <DocumentIcon className="w-8" />
        <h1 className="text-[18px] font-semibold">Detalhes de contato</h1>
      </div>
      <div className="flex flex-col gap-3 mt-2 p-3">
        <div className="flex gap-2 items-center">
          <ChatBubbleLeftIcon className="w-8" />
          <div className="flex flex-col">
            <p className="text-[13px] font-semibold text-zinc-400">
              Número de telefone
            </p>
            <p className="text-[14px] font-semibold">{member?.phone}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <DocumentCurrencyRupeeIcon className="w-8" />
          <div className="flex flex-col">
            <p className="text-[13px] font-semibold text-zinc-400">
              Endereço de Email
            </p>
            <p className="text-[14px] font-semibold">{member?.email}</p>
          </div>
        </div>
      </div>
      <div className="bg-green-600 border border-white rounded-2xl  flex items-center justify-center p-5 hover:bg-green-800 cursor-pointer transition-all">
        <a
          className="text-[18px]"
          href={`https://wa.me/${onlyNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Enviar Mensagem ao Whatsapp
        </a>
      </div>
    </div>
  );
};

export default MemberContacts;
