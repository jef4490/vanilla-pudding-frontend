import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2'
import 'fixed-data-table-2/dist/fixed-data-table.css';

import {VanillaPuddingApi} from '../components/constants';

class MyTextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

class MyLinkCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    const link = data[rowIndex][field];
    return (
      <Cell {...props}>
        <a href={link}>{link}</a>
      </Cell>
    );
  }
}

class ClientDataTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    return (
      <Table
        rowsCount={this.props.clients.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}>
        <Column
          header={<Cell>Name</Cell>}
          cell={
            <MyTextCell
              data={this.props.clients}
              field="name"
            />
          }
          width={200}
        />
        <Column
          header={<Cell>Email</Cell>}
          cell={
            <MyLinkCell
              data={this.props.clients}
              field="emailAddress"
            />
          }
          width={200}
        />
        <Column
          header={<Cell>Notes</Cell>}
          cell={
            <MyTextCell
              data={this.props.clients}
              field="notes"
            />
          }
          width={200}
        />
        <Column
          header={<Cell>Phone Number</Cell>}
          cell={
            <MyTextCell
              data={this.props.clients}
              field="phoneNumber"
            />
          }
          width={200}
        />
      </Table>
    );
  }
}

export default ClientDataTable;
