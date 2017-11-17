import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import FaEye from 'react-icons/lib/fa/eye';

var infoTable = [{
  date: "11/05/16",
  driver: "Roman",
  address: "123 Main St.",
  vehicle: "Ford Focus",
  photos: "Yes",
  status: "NEW",
  icon: " "
},{
  date: "02/05/17",
  driver: "Steven",
  address: "123 Main St.",
  vehicle: "Nissan Maxima",
  photos: "Yes",
  status: "NEW",
  icon: " "
},{
  date: "10/12/16",
  driver: "Cynthia",
  address: "123 Main St.",
  vehicle: "Toyota Corolla",
  photos: "Yes",
  status: "NEW",
  icon: " "
}];

class Claims extends React.Component {

  render() {
    return (
  <BootstrapTable data = {infoTable} striped hover condensed>
    <TableHeaderColumn dataField='date' isKey>Date</TableHeaderColumn>
    <TableHeaderColumn dataField='driver'>Driver</TableHeaderColumn>
    <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
    <TableHeaderColumn dataField='vehicle'>Vehicle</TableHeaderColumn>
    <TableHeaderColumn dataField='photos'>Photos</TableHeaderColumn>
    <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
    <TableHeaderColumn dataField='icon'><FaEye /></TableHeaderColumn>
  </BootstrapTable>
  )
 }
};

export default Claims
