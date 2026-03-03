import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "../../components/Card/Card";
import { api } from "../../services/api";
import {
  UsersIcon,
  ExclamationCircleIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

const Index = () => {
  const [error, setError] = useState([]);
  const [data, setData] = useState([]);
  const [membersInfo, setMembersInfo] = useState([]);

  useEffect(() => {
    const getMembers = async () => {
      try {
        const res = await api.get("/dashboard");
        setMembersInfo(res.data);
        setData(res.data.daily_revenue);
      } catch (error) {
        setError("Falha ao buscar usuários", error);
      }
    };

    getMembers();
  }, []);

  console.log(membersInfo);

  return (
    <div className="text-white w-full h-screen flex justify-center items-center">
      <div className="m-5 w-full p-5 h-full flex flex-col gap-3">
        <h1 className="text-white text-4xl font-bold">Dashboard Visão Geral</h1>
        <p className="text-gray-200 font-semibold">
          Monitore a performace de sua empresa e o ciclo de vida dos clientes
          ativos
        </p>
        <div className="mt-5 flex gap-5">
          <Card
            number={membersInfo?.active_members}
            title={"Membros Ativos"}
            Icon={UsersIcon}
            ColorStandard={"green"}
          />
          <Card
            number={membersInfo?.overdue_members}
            title={"Membros Inadimplentes"}
            Icon={ExclamationCircleIcon}
            ColorStandard={"red"}
          />
          <Card
            number={membersInfo?.members_due_today}
            title={"Vencendos Hoje"}
            Icon={CalendarDaysIcon}
            ColorStandard={"purple"}
          />
          <Card
            number={`R$ ${membersInfo?.monthly_revenue}`}
            title={"Lucro Bruto Mensal"}
            Icon={CalendarDaysIcon}
            ColorStandard={"orange"}
          />
        </div>
        <div className="w-full h-120 p-5 bg-[#1A1A1A] rounded-2xl mt-2">
          <div className="flex flex-col items-start justify-start ml-8 pt-2">
            <h1 className="text-gray-200 text-4xl font-bold">
              Relação de pagamentos
            </h1>
            <p className="text-zinc-500 mb-2 font-semibold">
              Pagamentos recebidos em cada dia do mês
            </p>
          </div>
          <ResponsiveContainer width="98%" height="75%">
            <LineChart data={data}>
              <CartesianGrid stroke="#333" strokeDasharray="3 3" />
              <XAxis
                dataKey="day"
                label={{
                  value: "Dias do mês atual",
                  position: "insideBottom",
                  offset: -5,
                  fill: "#ccc",
                }}
                stroke="#ccc"
              />
              <YAxis
                stroke="#ccc"
                label={{
                  value: "Valores recebidos",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#ccc",
                }}
              />
              <Tooltip
                contentStyle={{ backgroundColor: "#222", borderRadius: "6px" }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#3472b1" }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#1E90FF"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Index;
