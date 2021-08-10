import { makeStyles } from '@material-ui/core/styles';
import {Paper,TextField, Button} from '@material-ui/core';
import AppBar from './appbar';
import { lightBlue } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
 
  paper: {
    height:500,
    width:400,
    margin: '0 auto',
    textAlign:"center",
    
  },
  input:{
    width:'95%',
    marginBottom: 15,
  }  
}));

function App() {

const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar/>
      <Paper elevation={3} className={classes.paper}>
          <h1>Login</h1>
        <form noValidat autoComplete="off">
            <TextField  label="Enter Name" variant="outlined" className={classes.input}/>
            <br />
            <TextField  label="Enter Password" variant="outlined" className={classes.input}/>
        </form>
        <Button variant="contained"        color="primary" className={classes. input}>
              login
        </Button>
      </Paper>  
    </div>  
  );
}

export default App;
