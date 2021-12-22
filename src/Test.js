import React from 'react';
import { Grid, makeStyles, Paper, Typography, Avatar, Button, Card, AppBar, Tab, Tabs } from '@material-ui/core';

const useStyles = makeStyles({
    green: {
        backgroundColor: "green",
        margin: 10
    },
    red: {
        backgroundColor: "red"
    },
    blue: {
        backgroundColor: "blue"
    },
    paper: {
        backgroundColor: "lightblue",
        margin: "auto",
        maxWidth: 1024
    },
    editButton: {
        color: "white",
        backgroundColor: "#304269",
        '&:hover': {
            backgroundColor: "#F26101"
        }
    },
});

/*
            <Grid container direction="column" alignItems="center" style={{ marginTop: 50 }}>
                <div className={classes.carViewGrid}>
                    <Card>
                        <div className={classes.carViewCard}>
                            <Grid item md={1}>
                                <Avatar className={classes.avatar}>{carData.brand.substring(0, 1)}</Avatar>
                            </Grid>
                            <Grid container justify="center">
                                <Grid item>
                                    <Typography variant="body1">{t('car_brand')}:</Typography>
                                    <Typography variant="body1">{t('car_model')}:</Typography>
                                    <Typography variant="body1">{t('car_yearmodel')}:</Typography>
                                    <Typography variant="body1">{t('car_powertype')}:</Typography>
                                    <Typography variant="body1">{t('car_enginesize')}:</Typography>
                                    <Typography variant="body1">{t('car_license')}:</Typography>
                                </Grid>
                                <Grid item style={{ marginLeft: 10 }}>
                                    <Typography variant="body1">{carData.brand}</Typography>
                                    <Typography variant="body1">{carData.model}</Typography>
                                    <Typography variant="body1">{carData.yearModel}</Typography>
                                    <Typography variant="body1">{carData.powerType}</Typography>
                                    <Typography variant="body1">{carData.engineSize}</Typography>
                                    <Typography variant="body1">{carData.licenseNumber}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item md={1} style={{ marginRight: 20 }}>
                                <Button className={classes.editButton}>
                                    {t('button_edit')}
                                </Button>
                            </Grid>
                        </div>
                    </Card>
                </div>
                <div className={classes.carViewGrid}>
                    <Card>

                        <AppBar position="static" color="default">
                            <Tabs value={tabIndex} onChange={handleTabIndex}
                                className={classes.tabView}
                                classes={{ indicator: classes.indicatorColor }}
                            >
                                <Tab label={t('button_service_history')} className={tabIndex === 0 ? classes.tabActive : null} />
                                <Tab label={t('button_add_service')} className={tabIndex === 1 ? classes.tabActive : null} />
                                <Tab label={t('button_notes')} className={tabIndex === 2 ? classes.tabActive : null} />
                            </Tabs>
                        </AppBar>

                        <CarTabs />
                    </Card>
                </div>
            </Grid>
*/

/*
                <Grid container justify="center">
                    <div className={classes.loginGrid}>
                        <TextField
                            onKeyDown={pressKey}
                            id="email"
                            label={t('email')}
                            variant="outlined"
                            margin="normal"
                            inputRef={emailInput}
                        />
                        <TextField
                            onKeyDown={pressKey}
                            id="password"
                            label={t('password')}
                            type="password"
                            variant="outlined"
                            margin="normal"
                            inputRef={passwordInput}
                        />
                        <Typography className={classes.infoText} variant="body1">
                            {loginText}
                        </Typography>
                        <Button
                            className={classes.defaultButton}
                            onClick={handleLogin}
                            variant="contained"
                            style={{ marginTop: 50 }}>
                            {t('login')}
                        </Button>
                        <Link className={classes.defaultLink} href="/forgotpassword" >{t('forgot_password')}</Link>
                        <Link className={classes.defaultLink} href="/register" >{t('register_here')}</Link>
                    </div>
                </Grid>
*/

/*
      <Grid container direction="column" alignItems="center">
        <div className={classes.formGrid}>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Grid container item xs={12} direction="row">
              <Typography variant="h5">
                {t('car_addcar')}
              </Typography>
            </Grid>
            <Grid container item xs={12} direction="row">
              <TextField
                name="brand"
                style={{ margin: 8 }}
                placeholder={t('car_brand')}
                inputRef={register({
                  required: t('car_brand') + " " + t('error_required'),
                  minLength: { value: 2, message: t('car_brand') + " " + t('error_shorter') + " 2 " + t('error_characters') }
                })}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                name="model"
                style={{ margin: 8 }}
                placeholder={t('car_model')}
                inputRef={register({
                  required: t('car_model') + " " + t('error_required'),
                  minLength: { value: 2, message: t('car_model') + " " + t('error_shorter') + " 2 " + t('error_characters') }
                })}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                name="yearModel"
                style={{ margin: 8 }}
                placeholder={t('car_yearmodel')}
                inputRef={register({
                  required: t('car_yearmodel') + " " + t('error_required'),
                  minLength: { value: 4, message: t('car_yearmodel') + " " + t('error_shorter') + " 4 " + t('error_characters') },
                  maxLength: { value: 4, message: t('car_yearmodel') + " " + t('error_longer') + " 4 " + t('error_characters') },
                  min: { value: "1900", message: t('car_yearmodel') + " " + t('error_number') + " 1900 - 2100 " },
                  max: { value: "2100", message: t('car_yearmodel') + " " + t('error_number') + " 1900 - 2100 " },
                  pattern: {
                    value: /[0-9]/,
                    message: t('car_yearmodel') + t('error_inputs') + " 0-9"
                  }
                })}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid container item xs={12} direction="row">

              <TextField
                name="powerType"
                style={{ margin: 8 }}
                placeholder={t('car_powertype')}
                inputRef={register({
                  required: t('car_powertype') + " " + t('error_required'),
                  minLength: { value: 2, message: t('car_powertype') + " " + t('error_shorter') + " 2 " + t('error_characters') }
                })}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                name="engineSize"
                style={{ margin: 8 }}
                placeholder={t('car_enginesize')}
                inputRef={register({
                  required: t('car_enginesize') + " " + t('error_required'),
                  minLength: { value: 2, message: t('car_enginesize') + " " + t('error_shorter') + " 2 " + t('error_characters') }
                })}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                name="licenseNumber"
                style={{ margin: 8 }}
                placeholder={t('car_license')}
                inputRef={register({
                  required: t('car_license') + " " + t('error_required'),
                  minLength: { value: 2, message: t('car_license') + " " + t('error_shorter') + " 2 " + t('error_characters') }
                })}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item >
              <Typography className={classes.infoText} variant="body1">
                {errorText}
              </Typography>
            </Grid>
            <Grid item >
              <Button
                className={classes.defaultButton}
                style={{ marginTop: 25 }}
                type="submit">
                {t('button_submit')}
              </Button>
            </Grid>
          </form>
        </div>
      </Grid>
*/

const App = () => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.paper} style={{ marginTop: 50 }}>
                <Grid container >
                    <Grid container xs={4} direction="column" alignItems="flex-end" style={{ paddingTop: 25 }} >
                        <Avatar>F</Avatar>
                    </Grid>
                    <Grid container xs={4} justify="center" alignItems="center" style={{ paddingTop: 25 }} >
                        <Grid item>
                            <Typography variant="body1">TestName:</Typography>
                            <Typography variant="body1">TestName:</Typography>
                            <Typography variant="body1">TestName:</Typography>
                            <Typography variant="body1">TestName:</Typography>
                            <Typography variant="body1">TestName:</Typography>
                            <Typography variant="body1">TestName:</Typography>
                            <Typography variant="body1">TestName:</Typography>
                            <Typography variant="body1">TestName:</Typography>
                            <Typography variant="body1">TestName:</Typography>
                            <Typography variant="body1">TestName:</Typography>
                            <Typography variant="body1">TestName:</Typography>
                            <Typography variant="body1">TestName:</Typography>
                        </Grid>
                        <Grid item style={{ marginLeft: 10 }}>
                            <Typography variant="body1">TestName</Typography>
                            <Typography variant="body1">TestName</Typography>
                            <Typography variant="body1">TestName</Typography>
                            <Typography variant="body1">TestName</Typography>
                            <Typography variant="body1">TestName</Typography>
                            <Typography variant="body1">TestName</Typography>
                            <Typography variant="body1">TestName</Typography>
                            <Typography variant="body1">TestName</Typography>
                            <Typography variant="body1">TestName</Typography>
                            <Typography variant="body1">TestName</Typography>
                            <Typography variant="body1">TestName</Typography>
                            <Typography variant="body1">TestName</Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={4} direction="column" alignItems="flex-end" style={{ paddingTop: 25, paddingRight: 10 }} >
                        <Button className={classes.editButton}>
                            test
                        </Button>
                    </Grid>
                </Grid>
            </Card>

            <Card className={classes.paper}>

                <AppBar position="static" color="default">
                    <Tabs centered
                    >
                        <Tab label={"panel1"} />
                        <Tab label={"panel2"} />
                        <Tab label={"panel3"} />
                    </Tabs>
                </AppBar>

                <Typography variant="body1">content---</Typography>
            </Card>

        </div >

    )
};

export default (App);