// import React from "react";
// import { Grid, Button } from "@material-ui/core";
// import userService from '../../services/UserService';

// import { withRouter } from "react-router";
// import contactService from '../../services/contactService';
// const AdminSingleContact = (props) => {
//   const { contact, onDelete, history } = props;
//   console.log(props);
//   return (
    
//     <Grid item xs={4}>
      
//       <h4>
     
        
        
//         {userService.isAdmin() && (
//         <>
//         <div>
        
//         {contact.name}{" "}
//         <p>{contact.message}</p>{""}
//         </div>
        
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={(e) => {
//             contactService
//               .deleteContact(contact._id)
//               .then((data) => {
//                 console.log(data);
//                 onDelete();
//               })
//               .catch((err) => {
//                 console.log(err);
//               });
//           }}
//         >
//           Delete
//         </Button>
       
//        </>
//         )}
//       </h4>
     
//       <hr />
//     </Grid>
//   );
// };

// export default withRouter(AdminSingleContact);
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Grid, Button } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import contactService from '../../services/contactService';
import productService from '../../services/ProductsService';
import userService from '../../services/UserService';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    left:'5%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AdminSingleContact(props) {
  const classes = useStyles();
  const { contact, onDelete, history } = props;

  return (
    <List className={classes.root}>
      {userService.isAdmin() && (
        <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" />
        </ListItemAvatar>
        <ListItemText
          primary={contact.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {contact.subject}
              </Typography>
              {contact.message}
            </React.Fragment>
          }
        />
      </ListItem>
      <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            contactService
              .deleteContact(contact._id)
              .then((data) => {
                console.log(data);
                onDelete();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Delete
        </Button>
        </>
        )}
        
      <Divider variant="inset" component="li" />
     
    </List>
  );
}
