import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainRoutes from '../src/Routes/MainRoutes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            {MainRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.component/>}/>
            ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
