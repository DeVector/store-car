/**Import rotas */
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

/**Import de estilização */
import './index.css';
import { Home } from './Pages/Home/Home';
import { List } from './Pages/List/List';
import { Describ } from './Pages/Describ/Describ';
import { Save } from './Pages/Save/Save';
import { Categoria } from './Pages/Categoria/Categoria';
import { ListByYear } from './Pages/ListByYear/ListByYear';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carros" element={<List />} />
        <Route path="/carros">
          <Route path=':nameMarca'>
            <Route path=":nameCar">
              <Route path=":id" element={<Describ />} />
            </Route>
          </Route>
        </Route>
        <Route path='/carros/:startYear/:endYear/:initP/:endP/:initK/:endK' element={<ListByYear />} />
        <Route path='/carros/categoria/:carType' element={<Categoria />}/>
        <Route path='/save' element={<Save />} />
        
      </Routes>
    </BrowserRouter>
  )

}

export default App
