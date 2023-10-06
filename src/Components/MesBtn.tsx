import React from 'react'
import { useData } from '../context/DataContext';

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
  marginTop: "20px",
  marginBottom: "50px"
}

function nomeMes(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat("pt-Br", {month: 'long'}).format(date);
}

function formatDate(date: Date)  {
  const dd = String(date.getDate()).padStart(2, "0");
  const  mm = String(date.getMonth()).padStart(2, "0");
  const yyy = date.getFullYear();
  return `${yyy}-${mm}-${dd}`;
}

const MesBtn = ({n}: {n: number}) => {

  const {setInicio, setFinal} = useData();

  function setMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }

  return (
    <div><button style={style} onClick={() => setMes(n)}>{nomeMes(n)}</button></div>
  )
}

export default MesBtn