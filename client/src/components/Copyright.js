import React from 'react';
import { withTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: 'inline-block',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textStyle: {
    display: 'inline-block',
    lineHeight: '4.5rem'
  }
}));

function Copyright(props) {
  const classes = useStyles();
  const [language, setLanguage] = React.useState(props.i18n.language);

  const handleChange = event => {
    props.i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
  };

  return (
    <div align='center'>
      <Typography variant="body2" color="textSecondary" className={classes.textStyle}>
        {'Copyright © '}
        Mahbub
      {' '}
        {new Date().getFullYear()}
      </Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          native
          value={language}
          onChange={(e) => handleChange(e)}
          inputProps={{
            name: 'language',
            id: 'languageSelector',
          }}
        >
          <option value='en'>English</option>
          <option value='jp'>Japanese</option>
        </Select>
      </FormControl>
    </div>

  );
}

export default withTranslation()(Copyright);

