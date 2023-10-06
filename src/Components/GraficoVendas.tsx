import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { TVenda } from '../context/DataContext'

const dadosGraficos = [
  {
    data: "2023-05-03",
    pago: 300000,
    processando: 3000,
    falha: 2000,
  },
  {
    data: "2023-05-04",
    pago: 340000,
    processando: 5000,
    falha: 6000,
  },
]

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number
}

function transformData(data: TVenda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string ]: VendaDia}, item) => {
    const dia = item.data.split(" ")[0];
    if(!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    } 
      acc[dia][item.status] += item.preco;
      return acc;
  }, {})
  return Object.values(dias);
}

const GraficoVendas = ({data}: {data: TVenda[]}) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart width={400} height={400} data={transformedData}
      margin={{top: 5, left: 10, right: 20, bottom: 5}}>
        <XAxis dataKey="data"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#ff7300" strokeWidth={3} />
        <Line type="monotone" dataKey="processando" stroke="#387908" strokeWidth={3} />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default GraficoVendas