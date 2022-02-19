import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import React from 'react';

const CardContentUser = ({task}) => {
    return (
        <CardContent>
            {`-${task.nombre}`}
            <Grid container>
                <Grid item xs={9}>
                    Oficina: 
                    <br/>
                    Hora:
                </Grid>
                <Grid item xs={3}>
                    {task.oficina}
                    <br/>
                    {task.hora}
                </Grid>
            </Grid>
        </CardContent>
    )
}

export default CardContentUser;