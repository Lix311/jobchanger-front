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
            action.payload.event.preventDefault();
            let company = action.payload.event.target['formGroupCompany'].value // you can prob refactor this
            let title = action.payload.event.target['formGroupTitle'].value
            let job = {company,title}
            console.log('reducer adding job', job.company)
            return {...prevState,
                    job: '',
                    appliedJobs: [...prevState.appliedJobs, job]}
        
        
        case 'EDIT_JOB':
            return {...prevState}
        case 'FETCH_JOBS':
            return {...prevState, jobs: action.payload.jobs}
        default:
            return {...prevState}
    }
}