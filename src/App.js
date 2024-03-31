import './App.css';
import Layout from './pages/Layout';
import { AppProvider } from './utils/context';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Layout/>
      </div>
    </AppProvider>
    
  );
}

export default App;
