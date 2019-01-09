import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import customData from './data.json';

/* 

  References used:
    https://www.thesitewizard.com/css/make-table-cells-same-size.shtml
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

*/

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: customData,
      sortSettings: {
        order: '>',
      }
    }
  }

  sortHandler(column){
    const order = this.state.sortSettings.order === '>' ? '<' : '>';
    const sortedData = this.state.data.sort((a, b) => { 
      // DOBs are treated different because they don't need the toUpperCase() function, probably it would work the same though
      if (column === 'birthday'){
        
        // Explanation: If compareFunction(a, b) is less than 0, sort a to an index lower than b (i.e. a comes first).
        if (a.birthday < b.birthday){
          return -1;
        }

        // Same logic here: If compareFunction(a, b) is greater than 0, sort b to an index lower than a (i.e. b comes first).
        if (a.birthday > b.birthday){
          return 1;
        }

        // If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, 
        // but sorted with respect to all different elements. Dangerous, not all browsers guarantee this behaviour.
        return 0;
      }

      else {
        var auxA;
        var auxB;

        // Sets up the auxs correctly
        if (column === 'name'){
          auxA = a.name.toUpperCase();
          auxB = b.name.toUpperCase();
        }

        if (column === 'address'){
          auxA = a.address.toUpperCase();
          auxB = b.address.toUpperCase();
        }

        if (column === 'city'){
          auxA = a.city.toUpperCase();
          auxB = b.city.toUpperCase();
        }

        if (column === 'region'){
          auxA = a.region.toUpperCase();
          auxB = b.region.toUpperCase();
        }

        if (column === 'country'){
          auxA = a.country.toUpperCase();
          auxB = b.country.toUpperCase();
        }

        // ==========================================================================================
        
        if (auxA < auxB){
          return -1;
        }


        if (auxA > auxB){
          return 1;
        }

        return 0;
      }
    });

    // So we can sort the columns both ways
    if (order === '>'){
      sortedData.reverse();
    }

    this.setState({
      data: sortedData,
      sortSettings: {
        order: order,
      }
    });
  }

  render(){
    return(
      <table>
        <thead>
          <tr>
            <th class='sorted-th' onClick={() => {this.sortHandler('name')}}>
              Name
            </th>
            <th class='sorted-th' onClick={() => {this.sortHandler('address')}}>
              Address
            </th>
            <th class='sorted-th' onClick={() => {this.sortHandler('city')}}>
              City
            </th>
            <th class='sorted-th' onClick={() => {this.sortHandler('region')}}>
              Region
            </th>
            <th class='sorted-th' onClick={() => {this.sortHandler('country')}}>
              Country
            </th>
            <th class='sorted-th' onClick={() => {this.sortHandler('birthday')}}>
              Birthday
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((data) => {
              return (
                <tr class='sorted-tr' key={data.name}>
                  <td class='sorted-td'>{data.name}</td>
                  <td class='sorted-td'>{data.address}</td>
                  <td class='sorted-td'>{data.city}</td>
                  <td class='sorted-td'>{data.region}</td>
                  <td class='sorted-td'>{data.country}</td>
                  <td class='sorted-td'>{data.birthday}</td>
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