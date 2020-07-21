import React from 'react';

function Stock(props) {
  return (
    <div>
      <p>Symbol: {props.symbol}</p>
      <p>LastRefrehed: {props.lastRefrehed}</p>
      <p>Open price: {props.openPrice}</p>
      <p>Close price: {props.closePrice}</p>
    </div>
  );
}

export default Stock;