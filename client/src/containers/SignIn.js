import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { useStateLink } from '@hookstate/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import { Footer } from '../components';
import stateLink from '../store';
import { useForm } from '../hooks';
import { SigninStyles as useStyles } from '../styles';


const SignInSide = (props) => {
  const { t } = props;

  const classes = useStyles();
  const store = useStateLink(stateLink);

  // Define your state schema
  const stateSchema = {
    email: { value: '', error: '' },
    password: { value: '', error: '' }
  };

  // const delay = () => new Promise(resolve => setTimeout(resolve, 3000));

  // Create your own validationStateSchema
  // stateSchema property should be the same in validationStateSchema
  // in-order a validation to works in your input.
  const stateValidatorSchema = {
    email: {
      required: true,
      validator: {
        func: value => /\S+@\S+\.\S+/.test(value),
        error: 'formError.email',
      },
    },
    password: {
      required: true,
      validator: {
        func: value => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value),
        error: 'formError.password',
      },
    }
  };

  const onSubmitForm = (state) => {
    store.nested.loader.set(true);
    setTimeout(() => {
      props.history.push('/signup');
    }, 1000);
  }

  const {
    values,
    errors,
    dirty,
    handleOnChange,
    handleOnBlur,
    handleOnSubmit,
    // setFieldError,
    // setFieldValue,
    // setStateSchema,
    disable,
  } = useForm(stateSchema, stateValidatorSchema, onSubmitForm);

  // useEffect(() => {
  //   delay().then(() => {
  //     setStateSchema({
  //       first_name: { value: 'Ellie', error: '' },
  //       last_name: { value: 'Eilish', error: '' },
  //       tags: { value: '', error: '' },
  //     });
  //     // setFieldValue({ name: 'first_name', value: 'Hello' });
  //     // setFieldError({ name: 'first_name', error: 'Vince' });
  //   });
  // }, []);

  const { email, password } = values;

  const passwordError = errors.password && dirty.password;
  const emailError = errors.email && dirty.email;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t('signin.title')}
          </Typography>
          <form className={classes.form} onSubmit={handleOnSubmit} noValidate>
            <TextField
              error={emailError}
              helperText={emailError && t(errors.email)}
              value={email}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={t('signin.email')}
              name="email"
              autoComplete="email"      
            />
            <TextField
              error={passwordError}
              helperText={passwordError && t(errors.password)}
              value={password}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={t('signin.password')}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t('signin.rememberMe')}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={disable}
            >
              {t('signin.title')}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {t('signin.forgotPassword')}
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/signup" variant="body2">
                  {t('signin.signupLink')}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Footer />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default withTranslation()(SignInSide);