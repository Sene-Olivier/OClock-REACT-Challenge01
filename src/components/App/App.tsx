import List from './List';
import Header from './Header';
import Footer from './Footer';

import './App.scss';
import '../../styles/styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <List courses={['farine', 'lait', 'oeuf']} />
      <Footer />
    </div>
  );
}
export default App;
