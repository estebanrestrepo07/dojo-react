import {Fragment} from 'react';
import Card from '@mui/material/Card';
import {Box} from '@mui/material';
import CardContentUser from './CardContentUSer';
import React from 'react';

const ListTask = ({tasks}) => {
    return (
        <Fragment>
            <div id='external-events'>
                {
                    tasks.map((singleTask, index)=> (
                        <Card 
                            key={index}
                            className='fc-event'
                            title={singleTask.nombre}
                            id={singleTask.idus}
                            color={singleTask.color}
                            sx={{
                                display:'flex',
                                width:'100%'
                            }}
                            variant='outlined'
                        >
                            <Box sx={{
                                    flexDirection:'column',
                                    width:'90%'
                                }}
                            >
                                <CardContentUser task={singleTask} />
                            </Box>
                            
                            <Box sx={{
                                    flexDirection:'column',
                                    width:'10%',
                                    bgcolor:`#${singleTask.color}`
                                }}
                            >
                                
                            </Box>
                        </Card>
                        )
                    )
                }
            </div>
        </Fragment>
    )

}

export default ListTask;