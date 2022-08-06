import { Container, Box, Typography, Button } from '@mui/material';
import data from './Assets/Dice.json';
import {useState, useEffect} from 'react'

const App = () => {
  const [rolledDice, setRolledDice] = useState([]);

  const rollDice = () => {
    let diceArray = []
    data.dice.map((die) => {
      const randomDie = die[Math.floor(Math.random()*die.length)]
      diceArray.push(randomDie);
    })
    setRolledDice(diceArray)
  }

  useEffect(() => {
    console.log('Rolled the dice!')
    rollDice()
  },[])


  return (
    <Container>
      <Box>
        <Typography variant="h3" gutterBottom>
          tell me a story about...
        </Typography>
      </Box>
      <Box>
        {rolledDice.map((die, i) => <Typography variant="h5" key={i} >{die}</Typography>)}
      </Box>
      <Box>
        <Button onClick={rollDice}>Roll</Button>
      </Box>
    </Container>
  );
}

export default App;
