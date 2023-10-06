import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Resumo from './Pages/Resumo';
import { Vendas } from './Pages/Vendas';
import { DataContextProvider } from './context/DataContext';
import './index.css';

function App() {
  return <BrowserRouter>
  <DataContextProvider>
    <div className='container'>
        <Sidebar />
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<Resumo />}/>
          <Route path='/vendas' element={<Vendas />}/>
        </Routes>
      </main>
    </div>
  </DataContextProvider>
  </BrowserRouter>;
}

export default App;