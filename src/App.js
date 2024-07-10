
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Accueil from './Pages/Accueil';
import Layout from './components/Layout';
import Apropos from './Pages/Apropos';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import TemoignagesList from './Pages/TemoignagesList';
import TemoignageForm from './Pages/TemoignageForm';


function App() {
  const [content, setContent] = useState(null);
  useEffect(() => { setContent(<Accueil setContent={setContent} />) }, [])
  return (
    <div className="App">
      <Header setContent={setContent} />
      <Layout page={content} />
      <Footer />
    </div>
  );
}

export default App;