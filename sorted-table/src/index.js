import React from 'react';
import ReactDOM from 'react-dom';
import SortedTable from './components/sorted-table/'
import './css/index.css';

/* 

  References used:
    https://www.thesitewizard.com/css/make-table-cells-same-size.shtml
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

*/

ReactDOM.render(
  <SortedTable />,
  document.getElementById('root')
);