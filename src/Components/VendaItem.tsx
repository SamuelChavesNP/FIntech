import React from 'react'
import { TVenda } from '../context/DataContext'
import { NavLink } from 'react-router-dom'

const VendaItem = ({venda}: {venda: TVenda}) => {
  return (
    <div className='venda box'>
      <NavLink to={`/vendas/${venda.id}`} style={{fontFamily: "monospace"}}> {venda.id} </NavLink>
      <div>{venda.nome}</div>
      <div>{venda.preco.toLocaleString
      ("pt-br", {style: 'currency', currency: 'BRL', })}</div>
    </div>
  )
}

export default VendaItem