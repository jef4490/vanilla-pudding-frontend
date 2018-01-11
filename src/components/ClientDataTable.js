import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2'
import 'fixed-data-table-2/dist/fixed-data-table.css';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';

import {VanillaPuddingApi} from '../components/constants';

const styles = {
  iconHover: {
    '&:hover': {
      fill: green[200],
    },
  },
};

const HomeIcon = props => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

function loadHome(event){
  alert("Load Home");
}
//(string) => {return string}

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

class MyActionCell extends React.Component{
  render(){
    const {rowIndex, field, data, ...props} = this.props;
    var clientId = data[rowIndex]["clientId"];
    return (
      <Cell>
        <IconButton onClick={() => {this.props.deleteClient(clientId)}}>
          <HomeIcon color="primary" className={this.props.classes.iconHover}/>
        </IconButton>
      </Cell>
    )
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
    const { classes } = this.props;
    return (
      <Table
        rowsCount={this.props.clients.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}>
        <Column
          header={<Cell>Actions</Cell>}
          cell={
            <MyActionCell
              data={this.props.clients}
              classes={classes}
              deleteClient={this.props.deleteClient}
            />
          }
          width={200}
        />
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

export default withStyles(styles)(ClientDataTable);
