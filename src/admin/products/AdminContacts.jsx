import React from "react";
import userService from '../../services/UserService';
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from "@material-ui/core/styles";
import AdminSingleContact from './AdminSingleContact';
import contactService from "../../services/contactService";
const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const AdminContacts = (props) => {
  
  const [contacts, setContacts] = React.useState([]);
  const classes = useStyles();
  const getData = () => {
    contactService
      .getContacts()
      .then((data) => {
        setContacts(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, []);
  // console.log("Inside Products Component");
  return (
    <div>
      <h1>Contacts</h1>
      <br/>
      {userService.isLoggedIn() && (
        <>
        
        {contacts.length === 0 ? (
        <p>There are no contacts</p>
      ) : (
        <Grid container spacing={3}>
          {contacts.map((contact, index) => (
            <AdminSingleContact key={index} contact={contact} onDelete={getData} />
          ))}
        </Grid>
        
      )}
        </>
      )}
      
    </div>
  );
};

export default AdminContacts;
