import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 30,
  },
});

class TaskForm extends Component {
  render() {
    const { classes, handleSubmit, handleChange, data } = this.props;
    return (
      <Grid container alignItems="flex-start" direction="row" justify="center">
        <Grid item xs={12} md={6}>
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3" style={{ textAlign: 'center' }}>
              Task Creater
            </Typography>

            <form>
              <div>
                <TextField
                  required
                  name="name"
                  label="Task Name"
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  value={data.name}
                />
              </div>
              <div>
                <TextField
                  name="description"
                  label="Task Description(Optional)"
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  value={data.description}
                />
              </div>
              <div>
                <TextField
                  name="date"
                  label="Select Date"
                  type="date"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  required
                  onChange={handleChange}
                  value={data.date}
                />
                <TextField
                  id="time"
                  name="time"
                  label="Select Time"
                  type="time"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  variant="outlined"
                  onChange={handleChange}
                  value={data.time}
                />
              </div>
              <Button variant="contained" color="secondary" onClick={handleSubmit}>
                Create Task
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskForm);
