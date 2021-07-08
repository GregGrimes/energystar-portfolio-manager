import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Form from './components/form/form';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Form />
    </div>
  );
}

export default App;
