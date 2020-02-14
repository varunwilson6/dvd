import React from 'react'
import { CardElement } from 'react-stripe-elements';
import Typography from '@material-ui/core/Typography';


class CardSection extends React.Component {
    render() {
        return (
            <>
            <Typography p={4} component="div" variant="h6" gutterBottom>
            Card Details
          </Typography>
          <CardElement style={{ base: { fontSize: '32px' } }} />
        </>
        );
    }
}

export default CardSection;