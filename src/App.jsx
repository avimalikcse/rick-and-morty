import './App.css';
import HomePage from './components/pages/HomePage';
import SiteHeader from './components/shared/SiteHeader';

function App() {
    return (< div className="App" >
        <SiteHeader/>
        <HomePage  />
    </div>
    );
}

export default App;