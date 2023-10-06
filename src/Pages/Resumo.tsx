import React from 'react'
import { useData } from '../context/DataContext';
import GraficoVendas from '../Components/GraficoVendas';

const Resumo = () => {
  const {data} = useData();
  console.log(data);
  if (data === null) return null;
  return (
    <section>
      <div className='resumo flex'>

        <div className='box'>
          <h2>Vendas</h2>
          <span>{data.reduce((acc, item) => acc + item.preco, 0).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</span>
        </div>

        <div className='box'>
          <h2>Recebido</h2>
          <span>{data.filter((i) => i.status === "pago").reduce((acc, item) => acc + item.preco, 0).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</span>
        </div>

        <div className='box'>
          <h2>Vendas</h2>
          <span>{data.filter((i) => i.status === "processando").reduce((acc, item) => acc + item.preco, 0).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</span>
        </div>

      </div>

      <div className='box'><GraficoVendas data={data}/></div>
    </section>
  )
}

export default Resumo