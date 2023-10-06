import React from 'react'
import DateRange from './DateRange'
import { useLocation } from 'react-router-dom'
import Meses from './Meses'

const Header = () => {
  const [title, setTitle] = React.useState('Resumo');
  const location = useLocation();

  React.useEffect(() => {
    if(location.pathname === '/') {
      setTitle('Resumo');
      document.title = "Fintech | Resumo"
    } 
    else if(location.pathname === '/vendas') {
      setTitle('Vendas');
      document.title = "Fintech | Vendas"
    }
  }, [location])

  return (
    <header>
      <div className='daterange'>
        <DateRange />
        <h1 className='box'>{title}</h1>
      </div>
        <Meses />
    </header>
  )
}

export default Header