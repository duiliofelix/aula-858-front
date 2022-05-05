import React from 'react';
import FloatingCard from './FloatingCard';
import ResultControls from './ResultControls';
import ResultList from './ResultList';

const Home = ({ list }) => {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateRows: '1fr auto', gridTemplateColumns: '100px 2fr 1fr 100px', gap: '10px' }}>
        <ResultControls />
        <ResultList list={list} />
        <div style={{ gridRow: 2, gridColumn: 3 }}>
          <FloatingCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
