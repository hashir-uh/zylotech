import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TaskViewer from './containers/TaskViewer';
import TaskForm from './components/TaskForm';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 30,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        description: '',
        date: '',
        time: '',
      },
      list: [],
    };
  }
  componentDidMount() {
    this.hydratedStateWithLocalStorage();
  }
  hydratedStateWithLocalStorage() {
    if (localStorage.hasOwnProperty('list')) {
      let value = localStorage.getItem('list');

      try {
        value = JSON.parse(value);
        this.setState({ list: value });
      } catch (e) {
        console.log('Something went wrong');
      }
    }
  }
  handleSubmit = e => {
    e.preventDefault();

    // creata a new task
    const data = {
      ...this.state.data,
      id: 1 + Math.random(),
    };

    // copy current list of tasks
    const list = [...this.state.list];

    // add the new task to the list
    list.push(data);

    // update state with new list, reset the data for new task input
    this.setState({
      list,
      data: {
        name: '',
        description: '',
        date: '',
        time: '',
      },
    });

    // update localStorage
    localStorage.setItem('list', JSON.stringify(list));
    localStorage.setItem('name', '');
    localStorage.setItem('description', '');
    localStorage.setItem('date', '');
    localStorage.setItem('time', '');
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

    // update localStorage
    localStorage.setItem([e.target.name], e.target.value);
  };
  render() {
    const { classes } = this.props;
    const { list, data } = this.state;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={8} md={8}>
            <TaskForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} data={data} />
          </Grid>
          <Grid item xs={4} md={4}>
            <TaskViewer data={list} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
