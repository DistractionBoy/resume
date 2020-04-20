import React from 'react';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontSize: 21,
    height: 24,
  }
});

function Smalltitle(props){
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <div className="mi-smalltitle">
      <span className="mi-smalltitle-icon">
        <Icon className={props.icon} classes={classes} />
      </span>
      <h4>{props.title}</h4>
    </div>
  )
}

export default Smalltitle;
