import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header';
import { Routers } from './Routers';

export function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routers/>
    </BrowserRouter>
  )
}
