import React, { useState } from 'react';
import AddWord from './AddWord';
import DropDrowSelection from "./DropDrowSelection";
import ListOfWords from './ListOfWords';

function handleWords(index, addWords, addFunction, deletFunction, TheWordshandle) {
    let item = TheWordshandle.splice(index, 1)[0]
    deletFunction([...TheWordshandle])                  
    return addFunction([...addWords, item])
}
const styles = {
    border: '1px solid ', 
    borderWidth: '7px 5px',
    pending:'1',
    
};

function Home() {
    let [selectWords, setSelectWords] = useState(['Client', 'Users', 'Technology'])
    let [defaultWords, setDefaultWords] = useState(['Development', 'Invoice Ninja'])

    return (  
        <>
            <AddWord words={selectWords} addWord={setSelectWords} />
            <br></br>
            <span style={styles}>Pick word to show below: &nbsp; 
            <DropDrowSelection handleWords={handleWords} TheWordshandle={selectWords} addWords={defaultWords} deletFunction={setSelectWords} addFunction={setDefaultWords} />
            </span><br/>
            <span>List of words: &nbsp; 
            <ListOfWords handleWords={handleWords} TheWordshandle={defaultWords} addWords={selectWords} deletFunction={setDefaultWords} addFunction={setSelectWords} />
            </span>
        </>
    )
}
export default Home
