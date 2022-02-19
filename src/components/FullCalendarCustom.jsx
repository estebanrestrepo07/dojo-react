import React, {useEffect, Fragment} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, {Draggable} from '@fullcalendar/interaction';


const FullCalendarCustom = () => {
    useEffect(()=>{
        let draggableItems = document.getElementById('external-events');
        new Draggable(draggableItems, {
            itemSelector: '.fc-event',
            eventData: (eventItem) => {
                let id = eventItem.getAttribute('id');
                let title = eventItem.getAttribute('title');
                let color = `#${eventItem.getAttribute('color')}`
                return {id, title, color}
            }
        })
    }, []);

    return (
        <Fragment>
            <FullCalendar
                headerToolbar={{
                    left:'prev',
                    center: 'center',
                    right: 'next'
                }}
                height={650}
                rerenderDelay={10}
                eventDurationEditable={false}
                editable={true}
                locale="es"
                droppable={true}
                plugins={[dayGridPlugin, interactionPlugin]}
                dragScroll={false}
                dayMaxEventRows={3}
            >

            </FullCalendar>
        </Fragment>
    )
}

export default FullCalendarCustom;