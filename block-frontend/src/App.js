import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Blocks from './components/Blocks.js';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Blocks></Blocks>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
