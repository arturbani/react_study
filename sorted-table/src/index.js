import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import customData from './data.json';

class Table extends React.Component {
  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Address
            </th>
            <th>
              City
            </th>
            <th>
              Region
            </th>
            <th>
              Country
            </th>
            <th>
              Birthday
            </th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    );
  }

}

// ========================================

ReactDOM.render(
  <Table />,
  document.getElementById('root')
);