import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Layout
import Layout from './layout';

// Pages
import { HomePage } from './pages';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
