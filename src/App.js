import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import SignIn from './routes/sign-in/sign-in';



const Shop = () => {
  return <h1>Shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />}/>
          <Route path='sign-in' element={<SignIn />}/>
      </Route>
    </Routes>
     
  );
}

export default App;
