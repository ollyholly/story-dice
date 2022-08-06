import { Container, Box, Typography, Button, Card } from '@mui/material';
import data from './Assets/Dice.json';
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    blacky: {
      main: '#222222',
      contrastText: '#fff'
    }
  }
});

const App = () => {
  const [rolledDice, setRolledDice] = useState([]);

  const rollDice = () => {
    let diceArray = [];
    data.dice.map((die) => {
      const randomDie = die[Math.floor(Math.random() * die.length)];
      diceArray.push(randomDie);
    });
    setRolledDice(diceArray);
  };

  useEffect(() => {
    console.log('Rolled the dice!');
    rollDice();
  }, []);

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h3" gutterBottom my={5} align="center">
            tell me a story about...
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            alignContent: 'center',
            justifyContent: 'center'
          }}
          mb={5}
        >
          {rolledDice.map((die, i) => (
            <Box m={1} key={i}>
              <Card variant="outlined">
                <Box p={2}>
                  <Typography variant="h3">{die}</Typography>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={rollDice} variant="contained" color="blacky" size="large">
            roll me
          </Button>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default App;
