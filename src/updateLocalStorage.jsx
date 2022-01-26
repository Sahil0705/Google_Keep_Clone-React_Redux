import React from "react";
import addNewNote from "./addNote";

const UpdateLSData= () =>
{
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
    console.log(textAreaData);

    textAreaData.forEach((note)=>
    {
        if(note.value.length!=0)
            return notes.push(note.value);
    })
    console.log(notes);

    localStorage.setItem("not",JSON.stringify(notes));

}

// getting data back from localstorage
const notes = JSON.parse(localStorage.getItem("not"));
if(notes)
{
    notes.forEach((note)=>
    {
        addNewNote(note);
    });
}

export default UpdateLSData;

