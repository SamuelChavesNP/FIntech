import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import { TVenda } from '../context/DataContext';

const Venda = () => {
  const {id} = useParams();
  const {data, loading} = useFetch<TVenda>(`https://data.origamid.dev/vendas${id}`);

  if(data === null) return null
  return (
    <div >
      <div className='box'>ID: {data.id}</div>
      <div className='box'>Nome: {data.nome}</div>
      <div className='box'>Preço: 
      {data.preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</div>
      <div className='box'>Pagamento: {data.pagamento}</div>
      <div className='box'>Status: {data.status}</div>
    </div>
  )
}

export default Venda