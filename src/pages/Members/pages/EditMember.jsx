import React, { useEffect, useState } from "react";
import MemberForm from "../components/MemberForm";
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";

const EditMember = () => {
  const [member, setMember] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const isEditMode = Boolean(id);

  useEffect(() => {
    if (!id) return;

    const loadUser = async (id) => {
      setLoading(true);
      try {
        const res = await api.get(`/members/${id}`);
        setMember(res.data.data);
      } catch { 
        setError("Erro ao acessar usuário");
      } finally {
        setLoading(false);
      }
    };

    loadUser(id);
  }, [id]);

  if (loading) {
    return <h1 className="text-4xl text-white font-bold m-auto">Carregando...</h1>
  }

  if (error) {
    return <h1 className="text-4xl text-red-300 font-bold m-auto">{error}</h1>
  }

  return (
    <div className="w-full h-full">
      <MemberForm user = {member} id = {id}/>
    </div>
  );
};

export default EditMember;
