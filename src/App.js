
import './App.css';
import { BrowserRouter as router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

function App() {

  return (
    <div className="App">
   
     <BrowserRouter>
      <AppRoutes />
     </BrowserRouter>

    </div>
  );
}

export default App;
