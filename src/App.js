import './App.css';
import BaseScreen from './Screens/baseScreen';
import FavorisScreen from './Screens/favorisScreen';
import HomeScreen from './Screens/homeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailScreen from './Screens/detailScreen';

function App() {
  return (
   <>
   <BrowserRouter>
        <Routes> 
        <Route path="/" element={<BaseScreen />}>
              <Route index element={<HomeScreen />} /> 
              <Route path="/favoris" element={<FavorisScreen />} />
              <Route path="/detail" element ={<DetailScreen/>}/>
           
        </Route>
      </Routes> 
   </BrowserRouter>
   </>
  );
}

export default App;
