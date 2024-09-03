import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import 'bootstrap/dist/css/bootstrap.min.css';



const Index:React.FC= () => {
  

  return (
    <div className='row'>
      <div className='col col-md-6'>
      <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
      </div>
   
   <div className='col col-md-6'>

   <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      width={500}
      height={300}
    />
    
   </div>
   <div className='col col-md-6'>
<PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
   </div>
   <div className='col col-md-6'>
   <PieChart
  colors={['purple', 'blue', 'aqua']} 
  series={[
    {
      data: [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ],
    }
  ]}
  width={400}
  height={200}
/>

   </div>
   </div>
  )
}

export default Index



    
 



   
  




    
  





