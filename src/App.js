import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import StripeMain from './Components/StripeMain';

const useStyles = makeStyles(
  {}
)

function App() {

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography
        color="primary"
        align="center"
        variant="h4"
        component="h1">
          Sample Stripe Elemets
        </Typography>
      </Box>
      <StripeMain/>
    </Container>

  );
}

export default App;
