import './App.css';
import { ThemeProvider, Typography, Button, Card, CardContent, Divider, Grid} from '@mui/material';
import theme from './components/theme.js'
import { SkillsBox, BackExperienceBox, PictureBox } from './components/layoutComponents';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid container>
          <Grid xs={12}>
            <Card size="xl" color="info" sx={{ width: '100%', marginBottom: 5, alignSelf: "center" }}>
            <CardContent>
                <Typography variant='h1'>Brendan Downs</Typography >
                <Divider variant='inset' sx={{ marginBottom: 2 }} />
                <Button variant="outlined" color="secondary" >Get in Touch</Button>
                <Button variant="outlined" color="primary">Portfolio</Button>
            </CardContent>
            </Card>
            </Grid>
          <Grid xs={1}/>
          <Grid item spacing={3}>
            <SkillsBox />
          </Grid>
          <Grid xs={4} >
            <PictureBox/>
          </Grid>
          <Grid xs={6} />
          <Grid item spacing={3}>
            <BackExperienceBox />
          </Grid>
          <Grid xs={2}/>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
