import './App.css';
import 'typeface-sora';
import { IPOListing } from './pages/IPOListing';
import { IpoDetailsPage} from './pages/IpoDetailsPage';
import { ErrorPage } from './pages/Error';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IPOListing/>}/>
          <Route path='details/:ipoId' element={<IpoDetailsPage/>}/>
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
