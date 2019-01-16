import React from 'react'

export default function sortedTable(props) {
    return(
    <table>
      <thead>
        <tr>
          <th class='sorted-th' onClick={() => {props.sortHandler('name')}}>
            Name
          </th>
          <th class='sorted-th' onClick={() => {props.sortHandler('address')}}>
            Address
          </th>
          <th class='sorted-th' onClick={() => {props.sortHandler('city')}}>
            City
          </th>
          <th class='sorted-th' onClick={() => {props.sortHandler('region')}}>
            Region
          </th>
          <th class='sorted-th' onClick={() => {props.sortHandler('country')}}>
            Country
          </th>
          <th class='sorted-th' onClick={() => {props.sortHandler('birthday')}}>
            Birthday
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((data) => {
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