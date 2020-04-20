import React, {useState, useEffect} from "react";
import axios from 'axios';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  icons: {
    marginTop: -5,
    fontSize: '16px',
    [theme.breakpoints.up('md')]: {
      marginTop: -7,
      marginLeft: 0,
      fontSize: '21px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: -5,
      fontSize: '23px',
    }
  }
}));

function Socialicons(props){
  const classes = useStyles();
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    axios.get('/api/information')
      .then(response =>{
        setSocialLinks(response.data.socialLinks);
      })
  }, [])

  return (
    <ul className={props.bordered ? 'mi-socialicons mi-socialicons-bordered' : 'mi-socialicons'}>
      {!socialLinks.facebook ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.facebook}>
          <FacebookIcon className={classes.icons} />
        </a>
      </li>}
      {!socialLinks.twitter ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.twitter}>
          <TwitterIcon className={classes.icons} />
        </a>
      </li>}
      {!socialLinks.pinterest ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.pinterest}>
          <PinterestIcon className={classes.icons} />
        </a>
      </li>}
      {!socialLinks.linkedin ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.linkedin}>
          <LinkedInIcon className={classes.icons} />
        </a>
      </li>}
      {!socialLinks.github ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.github}>
          <GitHubIcon className={classes.icons} />
        </a>
      </li>}
    </ul>
  );
}

export default Socialicons;
