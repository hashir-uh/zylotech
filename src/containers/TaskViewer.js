import React, { Component } from 'react';

import TaskViewerForm from '../components/TaskViewerForm';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class TaskViewer extends Component {
  state = {
    isUpcoming: false,
  };
  handleUpcomingTasks = e => {
    e.preventDefault();
  };

  handleAllTasks = e => {
    e.preventDefault();
  };
  render() {
    const { data } = this.props;
    const { isUpcoming } = this.state;
    let tasks = '';
    if (isUpcoming) {
      tasks = data
        .sort((a, b) => parseInt(a.time) - parseInt(b.time))
        .slice(0, 3)
        .map((item, index) => {
          return <TaskViewerForm name={item.name} time={item.time} key={item.id} />;
        });
    } else {
      tasks = data.map((item, index) => {
        return <TaskViewerForm name={item.name} time={item.time} key={item.id} />;
      });
    }

    return (
      <Grid item xs={12} md={8}>
        <div>
          <Button variant="contained" color="secondary" onClick={() => this.setState({ isUpcoming: true })}>
            Upcoming
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: '35px' }}
            color="primary"
            onClick={() => this.setState({ isUpcoming: false })}
          >
            All
          </Button>
        </div>
        <br />
        {tasks}
      </Grid>
    );
  }
}

export default TaskViewer;
