import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

function Statics() {
    return (<Grid
        sx={{
            background: 'linear-gradient(#FFF 0%, #e5f8ff 100%)',
            height: '200px', // example height
            alignContent: 'center',
        }}
    >
        <Container  >
            <Grid container spacing={3} justifyContent={"space-between"} alignItems="center">
                {[...Array(5)].map((_, index) => (
                    <Grid item xs={6} md={2.4} key={index}>
                        <Typography component="h6" fontSize={'19px'} lineHeight={2} fontWeight={600}>Furniture Assemblies:</Typography>
                        <Typography component="h6" fontSize={'25px'} fontWeight={600} className='text-blue-600' lineHeight={1}>3.4 million+</Typography>
                    </Grid>
                ))}
            </Grid>
        </Container >
    </Grid >
    );
}

export default Statics;
