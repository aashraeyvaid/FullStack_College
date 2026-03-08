import './App.css';

import PersonContainer from './PersonContainer';
import ProductContainer from './ProductContainer';
import LibraryContainer from './LibraryContainer';

function App() {
  return (
    <div className="App">
      <h1>Full Stack Experiments</h1>

      <h2>Person Experiment</h2>
      <PersonContainer />

      <h2>Product Experiment</h2>
      <ProductContainer />

      <h2>Library Experiment</h2>
      <LibraryContainer />
    </div>
  );
}

export default App;

