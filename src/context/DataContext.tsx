import React from 'react'
import useFetch from '../Hooks/useFetch';

type TDataContext = {
  loading: boolean,
  error: string | null,
  data: TVenda[] | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
}

export type TVenda = { 
  id: string,
  nome: string,
  preco: number, 
  status: "pago" | "processando" | "falha",
  pagamento: "boleto"| "pix" | "cartao",
  data: string,
  parcelas: number | null;
}

const DataContext = React.createContext<TDataContext | null>(null);

export const useData = () => { 
  const context = React.useContext(DataContext);
  if(!context) throw new Error ('useData precisa estar em DataContext Provider');
  return context;
}

function getData(n: number)  {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const  mm = String(date.getMonth()).padStart(2, "0");
  const yyy = date.getFullYear();
  return `${yyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({children}: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(getData(30));
  const [final, setFinal] = React.useState(getData(0));
  const {data, loading, error} = useFetch<TVenda[]>(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`, )

  return <DataContext.Provider value={{data, loading, error, inicio, final, setInicio, setFinal }}>{children}</DataContext.Provider>
}

export default DataContext