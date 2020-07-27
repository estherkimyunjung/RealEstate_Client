
import React from 'react';
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: 230,
    fontSize: '20px'
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 130,
    },

    inline: {
      display: 'inline',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    width: 150,
    marginTop: 0,
    marginLeft: '30px',
    // marginRight: '30px'
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
  textareaAutosize: {
    marginTop: '10px',
    width: '800px',
    paddingLeft: '10px',
    fontSize: '20px'
  },
  button: {
    margin: theme.spacing(1),
    marginTop: 15,
    backgroundColor: '#ac9e88',
  },
}));

export default function Appointments(props) {

  const classes = useStyles();

  const allAgent = props.appointments.map(a => a.agent.user.firstname)
  console.log("ALL", [...new Set(allAgent)])

  const [agent, setAgent] = React.useState('');
  console.log("AAA", agent)

  const handleChange = (event) => {
    setAgent(event.target.value);
    console.log("EVE", event)
  };

  const appolist = props.appointments.filter(ap => ap.client_id === props.user.id)
  const dateAppo = appolist.map(li => li.date_time)
  const agentAppo = appolist.map(li => li.agent.user.firstname)
  console.log("AgAp", agentAppo)
  return (
    <div>
      <h1 style={{marginBottom: '40px', paddingLeft: '20px'}}>Appointment Informations</h1>
      <form className={classes.container} noValidate>
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue={props.user.firstname + ' ' + props.user.lastname}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Find Agent</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={agent}
            onChange={handleChange}
            label="Agent"
          >
            <MenuItem value="">
              <em>Select Option</em>
            </MenuItem>
            <MenuItem value={agent}>{agent}</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="2020-07-27T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextareaAutosize className={classes.textareaAutosize} aria-label="minimum height" rowsMin={4} placeholder="Message : max character 200" />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon>send</SendIcon>}
        >
          Send
      </Button>
      </form>

      <List className={classes.root} style={{ marginTop: '20px' }}>
        {appolist.map(al =>
          <ListItem alignItems="flex-start" style={{ width: '700px' }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={al.agent.user.avatar} />
            </ListItemAvatar>
            <ListItemText fontSize='50px'
              primary={'Agent : ' + al.agent.user.firstname + ' ' + al.agent.user.lastname}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {moment(al.date_time).format("dddd, MMMM D, YYYY")}
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        )}
        <Divider variant="inset" component="li" style={{ width: '500px' }} />
      </List>
    </div>
  );
}

