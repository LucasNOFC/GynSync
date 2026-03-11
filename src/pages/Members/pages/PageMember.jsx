import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";
import MemberHead from "../components/MemberHead";
import MemberContacts from "../components/MemberContacts";
import Loading from "../../../components/Loading";
import MemberCardInfo from "../components/MemberCardInfo";
import MemberHandler from "../components/MemberHandler";

const PageMember = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [member, setMember] = useState([]);
  const [totalMemberPayment, setTotalMemberPayment] = useState("");
  const [dateMemberJoin, setDataMemberJoin] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    const fetchMember = async () => {
      const res = await api.get(`/members/${id}`);
      const data = res.data.data;

      setMember(data);
      setLoading(false);

      const createdDate = new Date(data.created_at);

      const formattedDate = createdDate.toLocaleDateString("pt-BR");

      const newDueDay = new Date(createdDate);
      newDueDay.setMonth(createdDate.getMonth() + 1);

      const memberPayment = parseFloat(data.plan.price) * data.payments_count;

      setDueDate(newDueDay);
      setTotalMemberPayment(memberPayment);
      setDataMemberJoin(formattedDate);
    };

    fetchMember();
  }, [id]);

  console.log(member);

  if (loading) return <Loading />;

  return (
    <div className="text-4xl text-white m-auto font-bold">
      <MemberHead member={member} />
      <div className="flex">
        <div className="flex flex-col">
          <MemberContacts
            member={member}
            dueDate={dueDate?.toLocaleDateString("pt-BR")}
          />
          <MemberHandler member={member} />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <MemberCardInfo
              title={"Tipo de plano"}
              memberInfo={member.plan.name}
              desc={`Expira dia ${dueDate?.toLocaleDateString("pt-BR")}`}
            />
            <MemberCardInfo
              title={"Membro desde o dia"}
              memberInfo={dateMemberJoin}
              desc={"Novo membro"}
            />
            <MemberCardInfo
              title={"Membro pagou o total de"}
              memberInfo={`R$ ${totalMemberPayment}`}
              desc={`Total de ${member.payments_count} pagamento(s)`}
            />
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default PageMember;
