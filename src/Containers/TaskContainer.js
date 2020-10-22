import React from 'react';
import Tasks from '../Components/Tasks'
import Badges from '../Components/Badges'
import TaskJumbo from '../Components/TaskJumbo'

const TaskContainer = () => {
    return (  
        <div>
           <Badges/>
           <div className='taskjumbo'>
           <TaskJumbo/>
           </div>
          
        </div>
    );
}
 
export default TaskContainer;