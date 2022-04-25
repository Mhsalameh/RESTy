import './results.css'
const Results = function (props){
    console.log(props.mockResults);
return(
    <div id='results'>
        
        <p>{props.mockResults}</p>
    </div>
)
}

export default Results;