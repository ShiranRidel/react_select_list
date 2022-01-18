import React, { useState } from 'react'

function AddWord({words, addWord}){
    let [newWord, setNewWord] = useState('')

    function handleWordAdd(event, addWord, newWord){
        event.preventDefault()                          
        addWord([...words, newWord])
        setNewWord('')}
        
    return (
    <form onSubmit={(event)=>handleWordAdd(event, addWord, newWord)}>
        <label htmlFor='addNewWord' > Add new word to selection:&nbsp; 
            <input type='text' name='addNewWord' value={newWord} placeholder="enter word" onChange={(event)=>setNewWord(event.target.value)} required/>
        </label>
            <button type='submit' value='add new word' >add word</button>
    </form>
)
}
export default AddWord
