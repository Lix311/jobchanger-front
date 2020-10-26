import React from 'react';
import Tasks from '../Components/Tasks'
import Badges from '../Components/Badges'
import TaskJumbo from '../Components/TaskJumbo'
import TaskCal from '../Components/TaskCal'

const TaskContainer = (props) => {
    return (  
        <div>
           <Badges/>
          
            <TaskCal
                currentJobs={props.currentJobs}
            />
          {/* <div className='taskjumbo'>
            <TaskJumbo/>
           </div> */}
          
        </div>
    );
}
 
export default TaskContainer;