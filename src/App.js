import './App.css';
import AllRoutes from './routes/AllRoutes';
import { Header,Footer } from './components';

function App() {
  return (
    <div className="App dark:bg-dark">
      <header>
        <Header/>
        <AllRoutes/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
