// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExampleComponent from './components/ExampleComponent';
import {Home} from './pages/Home';


const App: React.FC = () => {
  useEffect(() => {
    // Llamadas a la API aquí
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <ExampleComponent />
      </div>
    </Router>
  );
};

export default App;
