
function DropDrowSelection({handleWords, TheWordshandle, addWords, deletFunction, addFunction}){
    console.log("not picked yet: "+TheWordshandle);
    return (
    <select name={'sel'}  value={''} 
               onChange={(event)=>handleWords((event.target.value), addWords, addFunction, deletFunction, TheWordshandle)} >
        <option value={''} >Please select the word</option>
            {TheWordshandle.map((item, index) =><option index={index} key={index} value={index}>{item}</option>)}      
    </select>
)}
export default DropDrowSelection  
