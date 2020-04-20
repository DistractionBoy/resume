import React from 'react';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 32,
    height: 32
  }
});

function Service(props){
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <div className="mi-service">
      <span className="mi-service-icon">
        <Icon className={props.content.icon} classes={classes} />
      </span>
      <h5>{props.content.title}</h5>
      <p>{props.content.details}</p>
    </div>
  )
}

export default Service;
