import Header from './app-components/header/Header';
import './App.css';
import AppRoutes from './routes-config/app-routes'

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRoutes />
    </div>
  );
}

export default App;
