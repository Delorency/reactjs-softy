import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navigation from './components/UI/Navigation';

import './styles/App.css';



function App() {
  return (
    <BrowserRouter>
      <Navigation>
        <h1>Text</h1>
        <h1>Text2</h1>
      </Navigation>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;