import {useState } from 'react';
import {Grid, Button} from '@mui/material';
import ListTask from './../components/ListTask'
import {data} from './../data/data';
import FullCalendarCustom from './../components/FullCalendarCustom';
const CalentarPage = () => {
    const [tasks] = useState(data);

    return (
        <Grid container spacing={3}>
            <Grid item lg={3} sm={3} md={3} xs={3}>
                <ListTask tasks={tasks} />
            </Grid>

            <Grid item lg={9} sm={9} md={9} xs={9}>
                <FullCalendarCustom />
                <Button sx={{mt:2}} varian='outlined'>Guardar</Button>
            </Grid>
        </Grid>
    );
}

export default CalentarPage;