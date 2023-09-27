import logo from './images/logoOxente.png';
import Banner from './images/bannerSite.png';
import './App.css';

function App() {
  return (
    <div>
      <div className="Header">
        <img src={logo} className="Logo" alt="Logo" />
          <div className='opHeader'>
           <h5 className='contato'>Contato</h5>
           <h5 className='plano'>Planos</h5>
         </div>
      </div>
      <img className='Banner' src={Banner} alt='Banner'/>
    </div>
  );
}

export default App;