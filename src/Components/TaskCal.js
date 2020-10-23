import React, { Component } from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

let dates = () => {
    return {
        title:'alex interview',
        start: new Date('October 17, 2020 03:24:00'),
        end: new Date ('October 18, 2020 03:24:00')
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
                    start: new Date('October 17, 2020 03:24:00'),
                    end: new Date ('October 18, 2020 03:24:00')
                }]}
            startAccessor="start"
            endAccessor="end"
         />
         </div>
        );
    }
}
 
export default TaskCal;