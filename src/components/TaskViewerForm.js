import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TaskViewerForm = props => {
  const { classes, name, time } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {name} {time}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

TaskViewerForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TaskViewerForm);
