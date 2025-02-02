import 'swiper/swiper.scss';
import 'swiper/modules/pagination.scss';
import './App.scss';

import Header from './components/header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
