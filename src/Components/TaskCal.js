import React, { Component } from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)
class TaskCal extends Component {
    state = {  
        events: []
    }

    setDates = () => {
        this.props.currentJobs.map(job => {
            let newtime = job.job_date + job.job_time.replace('2000-01-01','')
            this.state.events.push({
                start: new Date(`${newtime}`), // this needs to be '2020-10-17T21:45' is currently 
                end: new Date(`${newtime}`), // this needs to be '2020-10-17T23:45'
                title: `${job.company}`

            })
            
        })
    }

    render() { 
        this.setDates()
        return (  
            <div className='wierdcal'>
            <Calendar
            localizer={localizer}
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
         />
         </div>
        );
    }
}
 
export default TaskCal;