const ErrorInput = ({error}) => {

    if(error === null) return;
    const isAgragateError = error instanceof AggregateError;

    const showError = () =>{
        return <p>{error.message}</p>
    }
    const showErrors = () =>{
        console.log(error.errors);
        return (<>
            <ul>
                {error.errors.map(err => <li key={err.message}>{err.message}</li>)}
            </ul>
        </>)
    }

    return (
        <>
        {isAgragateError
            ? showErrors()
            : showError()
        }
        </>
    )
}

export default ErrorInput