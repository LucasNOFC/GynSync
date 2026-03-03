import React from "react";
import Card from "../../components/Card/Card";

const Index = () => {
  return (
    <div className="text-white w-full h-screen flex justify-center items-center">
      <div className="m-5 w-full p-5 h-full">
        <h1 className="text-white text-4xl font-bold">Dashboard Visão Geral</h1>
        <p className="text-gray-200 font-semibold">Monitore a performace de sua empresa e o ciclo de vida dos clientes ativos</p>
        <div className="mt-5 flex gap-5">
          <Card/>
          <Card/>
          <Card/>
        </div>

      </div>
    </div>
  );
};

export default Index;
