
import Add from './Add'
import './App.css'
import Edit from './Edit'
import View from './View'
import { Route, Routes } from 'react-router-dom'
function App() {
  
  return (
    <>
    
     <div>
         <h1 className='text-center text-primary '>Job hiring Portal</h1>
         <Routes>
         <Route path="/" element={<View />} />
          <Route path="/add" element={<Add />} />
          <Route path="/:id/edit" element={<Edit />} />
         </Routes>
         
      </div>
    
      
     
      
    </>
  )
}

export default App
