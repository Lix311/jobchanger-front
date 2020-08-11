let initialState = {
    jobs: [{company: 'Google', title: 'Software Developer'}],
    appliedJobs: [{company: 'RF-DUMB', title: 'Technical Bullshitter'}]
}

export const fetchCreator = () => dispatch => {
    console.log('inside of fetch thunk creator')
    fetch('http://localhost:3001/jobs')
    .then(res => res.json())
    .then(jobs => {
        dispatch({type: 'FETCH_JOBS', payload: { jobs }})
    })

}


export const reducer = (prevState=initialState, action) => {
    switch(action.type){
        case 'ADD_JOB':
            return {...prevState}
        case 'EDIT_JOB':
            return {...prevState}
        case 'FETCH_JOBS':
            return {...prevState, jobs: action.payload.jobs}
        default:
            return {...prevState}
    }
}