import './form.css'
import {useRef} from  "react";
const Form = function (props){
    const resultRef= useRef();
    function updateResults(e,fn){
        e.preventDefault();
        const result= resultRef.current.value;
        props.onSubmit(result);
        console.log(result)
        }
return(
    <form id='form'>
        <input ref={resultRef} type='text' id='url-input'/>
        <button  id='submit' type='submit' onClick={updateResults}>go!</button>
    </form>
)
}

export default Form;