
function ListOfWords({handleWords, TheWordshandle, addWords, deletFunction, addFunction}){
    console.log("in list: "+TheWordshandle);
    return(
    <>
        {TheWordshandle.map((item, index)=>{  
            return(
            <ul key={index} style={{textAlign:'start'}}>
                {index+1}. {item}  &nbsp; 
                {<button onClick={()=>handleWords(index, addWords, addFunction, deletFunction, TheWordshandle)} >delete word</button>}
            </ul>
            )})}
    </>
) 
}
export default ListOfWords
