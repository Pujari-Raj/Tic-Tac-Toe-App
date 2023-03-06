import './App.css';
import PlayersForm from './Components/PlayersForm';
import Gamepage from './Components/Gamepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (

  <div className='App'>
    <PlayersForm  />
  </div>  
//   <BrowserRouter>
//   <div className="App">
//     <Routes>
//       <Route path="/" element={<PlayersForm />} />
//       <Route path="/Gamepage" element={<Gamepage />} />
//     </Routes>
//   </div>
// </BrowserRouter>
  );
}

export default App;
