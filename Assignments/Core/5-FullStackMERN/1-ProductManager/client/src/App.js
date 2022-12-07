import './App.css';
import Main from './views/Main';
import Product from './components/Product'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Form/>  */}
      {/* <List/> */}
      {/* <Product/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/api/getOneProduct/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
