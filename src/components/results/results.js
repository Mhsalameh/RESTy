import './results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

const Results = function (props) {
  
  if (props.url) {
    return (
        <>
        <h2 id='headers-h'>Headers</h2>
        <JSONPretty id='json-pretty' data={props.headers}></JSONPretty>
        <h2 id='results-h'>Results</h2>
        <JSONPretty id='json-pretty' data={props.url}></JSONPretty>
        </>
    );
  }
};

export default Results;
