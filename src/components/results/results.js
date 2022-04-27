import './results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

const Results = function (props) {
  console.log(props.loading)
  if (props.url) {
    if(!props.loading){
    return (
        <>
        <h2 id='headers-h'>Headers</h2>
        <JSONPretty id='json-pretty' data={props.headers}></JSONPretty>
        <h2 id='results-h'>Results</h2>
        <JSONPretty id='json-pretty' data={props.url}></JSONPretty>
        </>
    );
    }
    else{
      return(
      <p>loading....</p>
      )
    }
  }
};

export default Results;
