import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import customData from './data.json';

/* 

  References used:
    https://www.thesitewizard.com/css/make-table-cells-same-size.shtml
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map

*/

class Table extends React.Component {
  state = {
    data: customData,
    sortDirection: 'down', 
    activeColumn: null, 
  }

  // sortColumn(column){
  //   if (column === 'name')
  //   if (column === 'address')
  //   if (column === 'city')
  //   if (column === 'region')
  //   if (column === 'country')
  //   if (column === 'birthday')


  // }

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
          {this.state.data.map((data) => {
              return (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.address}</td>
                  <td>{data.city}</td>
                  <td>{data.region}</td>
                  <td>{data.country}</td>
                  <td>{data.birthday}</td>
                </tr>
              );
          })}
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