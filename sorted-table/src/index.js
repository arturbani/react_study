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

    this.sortHandler = this.sortHandler.bind(this);
  }

  sortHandler(column){
    const order = this.state.sortSettings.order === '>' ? '<' : '>';
    const sortedData = this.state.data.sort((a, b) => { 
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

      else if (column === 'name'){
        const auxA = a.name.toUpperCase();
        const auxB = b.name.toUpperCase();

        if (auxA < auxB){
          return -1;
        }


        if (auxA > auxB){
          return 1;
        }

        return 0;
      }

      else if (column === 'address'){
        const auxA = a.address.toUpperCase();
        const auxB = b.address.toUpperCase();

        if (auxA < auxB){
          return -1;
        }


        if (auxA > auxB){
          return 1;
        }

        return 0;
      }

      else if (column === 'city'){
        const auxA = a.city.toUpperCase();
        const auxB = b.city.toUpperCase();

        if (auxA < auxB){
          return -1;
        }


        if (auxA > auxB){
          return 1;
        }

        return 0;
      }

      else if (column === 'region'){
        const auxA = a.region.toUpperCase();
        const auxB = b.region.toUpperCase();

        if (auxA < auxB){
          return -1;
        }


        if (auxA > auxB){
          return 1;
        }

        return 0;
      }

      else if (column === 'country'){
        const auxA = a.country.toUpperCase();
        const auxB = b.country.toUpperCase();

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
            <th onClick={() => {this.sortHandler('name')}}>
              Name
            </th>
            <th onClick={() => {this.sortHandler('address')}}>
              Address
            </th>
            <th onClick={() => {this.sortHandler('city')}}>
              City
            </th>
            <th onClick={() => {this.sortHandler('region')}}>
              Region
            </th>
            <th onClick={() => {this.sortHandler('country')}}>
              Country
            </th>
            <th onClick={() => {this.sortHandler('birthday')}}>
              Birthday
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((data) => {
              return (
                <tr key={data.name}>
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