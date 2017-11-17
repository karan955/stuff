import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import FaEye from 'react-icons/lib/fa/eye';

var reportTable = [{
  date: "11/05/16",
  driver: "Roman",
  notification: "Speed exceeded 70MPH",
  type: "Speed",
  status: "NEW",
  icon: "true"
},{
  date: "08/15/17",
  driver: "Peter",
  notification: "Was involved in accident",
  type: "Claim",
  status: "NEW",
  icon: "true"
},{
  date: "02/25/16",
  driver: "Jessica",
  notification: "Insurance expires in 15 days",
  type: "Document",
  status: "NEW",
  icon: "true"
}];

class Notifications extends React.Component {
  render() {
    return (
  <BootstrapTable data={reportTable}>
    <TableHeaderColumn dataField='date' isKey>Date</TableHeaderColumn>
    <TableHeaderColumn dataField='driver'>Driver</TableHeaderColumn>
    <TableHeaderColumn dataField='notification'>Notification</TableHeaderColumn>
    <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
    <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
    <TableHeaderColumn dataField='icon'><FaEye /></TableHeaderColumn>
  </BootstrapTable>
  )
 }
};

export default Notifications
