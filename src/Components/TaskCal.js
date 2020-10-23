import React, { Component } from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

let dates = () => {
    return {
        title:'alex interview',
        start: new Date('October 17, 2020 20:00:00'),
        end: new Date ('October 17, 2020 06:00:00')
    }
}

class TaskCal extends Component {
    state = {  }
    render() { 
        return (  
            <div className='wierdcal'>
            <Calendar
            localizer={localizer}
            events={
                [{
                    title:'alex interview',
                    start: new Date('2020-10-17T21:45'),
                    end: new Date ('2020-10-17T23:45')
                }]}
            startAccessor="start"
            endAccessor="end"
         />
         </div>
        );
    }
}
 
export default TaskCal;