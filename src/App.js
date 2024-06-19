
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Accueil from './Pages/Accueil';
import Layout from './components/Layout';

function App() {
  const [content, setContent] = useState(<Accueil />);
  return (
    <div className="App">
      <Header setContent={setContent} />
      <Layout page={content} />
      <Footer />
  
    </div>
  );
}

export default App;
