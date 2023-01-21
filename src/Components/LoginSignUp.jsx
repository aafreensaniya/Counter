import React,{useState} from 'react'
import { Card,Button,Grid,CardContent, TextField } from '@mui/material'

const LoginSignUp = () => {
  
  return (
    <div>
      <Grid container spacing={2} align="center">
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <Card className="crd">
            <h1> Login</h1>
            <Grid conatiner spacing={3} align="center" sx={{ margin: 3 }}>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="enter email"
                  sx={{ marginTop: 2 }}
                />
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <TextField
                  sx={{ marginTop: 5 }}
                  variant="outlined"
                  fullWidth
                  label="enter password"
                />
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Button 
                  className="lgbtn"
                  variant="contained"
                  color="secondary"
                  fullWidth
                  style={{
                    backgroundColor: "deeppink",
                    height: 57,
                    marginTop: 20,
                  }}
                >
                  Login
                </Button>
                <h4>
                  Dont have an account ?
                  <span className="lgbt">
                    <a href="#">SignUp</a>
                  </span>
                </h4>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="crd">
            <h1>SignUp</h1>
            <Grid conatiner spacing={3} align="center" sx={{ margin: 2 }}>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <TextField
                
                  variant="outlined"
                  fullWidth
                  label="enter name"
                  sx={{ marginTop: 2 }}
                />
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <TextField
                
                
                  variant="outlined"
                  fullWidth
                  label="enter email"
                  sx={{ marginTop: 2 }}
                />
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <TextField
            
                  sx={{ marginTop: 2 }}
                  variant="outlined"
                  fullWidth
                  label="  enter password"
                />
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <TextField
                  
                  sx={{ marginTop: 2 }}
                  variant="outlined"
                  fullWidth
                  label="confirm password"
                />
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Button
                
                  className="lgbtn"
                  variant="contained"
                  fullWidth
                  style={{
                    backgroundColor: "deeppink",
                    height: 57,
                    marginTop: 20,
                  }}
                >
                  SignUp
                </Button>
                <h4>
                  Already have an account ?
                  <span className="lgbt">
                    <a href="#">Login</a>
                  </span>
                </h4>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          h11
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginSignUp