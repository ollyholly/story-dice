import { Container, Box, Typography, Button } from '@mui/material';

function App() {
  return (
    <Container>
      <Box>
        <Typography variant="h2" gutterBottom>
          Hello World
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" gutterBottom>
          Dice go here
        </Typography>
      </Box>
      <Box>
        <Button>Roll</Button>
      </Box>
    </Container>
  );
}

export default App;
