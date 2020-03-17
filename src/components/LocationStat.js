import React from 'react'
import {Table,Button} from 'react-bootstrap';

const LocationStat = ({ locStatsList }) => (
  <div>
    <Table striped bordered hover variant="light"  size="sm">
      <thead class='thead-dark'>
    <th >Country</th>
    <th >Confirmed Cases</th>
    <th >Recovered Cases</th>
    <th >Deaths</th>
    </thead>
    <tbody>{locStatsList.map(loc => {
    return <tr key={loc.id} class='table-light'>
      <td >{loc.country}</td>
      <td >{loc.confirmedCases}</td>
      <td >{loc.recoveredCases}</td>
      <td >{loc.deaths}
      </td>
    </tr>
  })}</tbody>
</Table>
  </div>
)

export default LocationStat