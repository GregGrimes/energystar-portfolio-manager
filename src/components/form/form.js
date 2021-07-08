import React, { useState } from 'react';
import { useQuery } from 'react-query'
import {
  Paper,
  Grid,
  TextField,
  Button
} from '@material-ui/core';

import { useStyles } from '../../App';
import { buildPostParams } from './utils';
import { postAccount } from './form.query';

export default function Form() {
  const classes = useStyles();

  const [ username, setUsername ] = useState("");
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ postData, setPostData ] = useState(null);

  const { data: account, isFetching, refetch: postNewAccount } = useQuery( 'postNewAccountQuery',
    () => postAccount( postData ),
    {
      onSuccess: ( data ) => {
        console.log(data);
      },
      onError: ( error ) => {
        console.log(error);
      },
      enabled: false,
    }
  )

  console.log(account);
  console.log(isFetching);

  const onSubmit = ( ) => {
    let data = buildPostParams( username, firstName, lastName );
    setPostData(data);
    console.log(data);
    setTimeout(postNewAccount, 1000);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <TextField 
              id="username"
              label="Username" 
              value={username}
              onChange={e => {
                setUsername(e.target.value);
              }} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <TextField 
              id="firstName" 
              label="First Name" 
              value={firstName}
              onChange={e => {
                setFirstName(e.target.value);
              }} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <TextField 
              id="lastName" 
              label="Last Name" 
              value={lastName}
              onChange={e => {
                setLastName(e.target.value);
              }} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" onClick={onSubmit}>Submit</Button>
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
}