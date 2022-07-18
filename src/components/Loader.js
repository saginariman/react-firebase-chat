import React from 'react'
import { Container, Grid } from '@mui/material'

const Loader = () => {
  return (
    <Container>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{height: window.innerHeight - 50}}
        >
            <Grid
                container
                direction="column"
                alignItems="center"
            >
                <div className="lds-hourglass"></div>
            </Grid>
        </Grid>

    </Container>
  )
}

export default Loader