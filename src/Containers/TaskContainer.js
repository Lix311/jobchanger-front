import React from 'react';
import Tasks from '../Components/Tasks'
import Badges from '../Components/Badges'
import TaskJumbo from '../Components/TaskJumbo'
import TaskCal from '../Components/TaskCal'

const TaskContainer = () => {
    return (  
        <div>
           <Badges/>
          
            <TaskCal/>
          {/* <div className='taskjumbo'>
            <TaskJumbo/>
           </div> */}
          
        </div>
    );
}
 
export default TaskContainer;