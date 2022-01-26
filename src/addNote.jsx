import React from 'react';
import UpdateLSData from './updateLocalStorage';

const addNewNote = (text="") =>
{
    const note = document.createElement('div');
    note.classList.add("note");

    const htmlData = `
    <div class="operation">
        <span class='status'>Unsaved</span>
        <button class="edit" title='Edit & Save'><i class="fas fa-edit"></i></button>
        <button class="delete" title='Delete'><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="gap"></div>
    <div class="main hidden"></div>
    <textarea placeholder='Enter your note..'></textarea>`;

    note.insertAdjacentHTML('afterbegin',htmlData);
    //console.log(note);

    //getting the references

    const editButton = note.querySelector(".edit");
    const delButton = note.querySelector(".delete");
    const mainDiv = note.querySelector(".main");
    const status = note.querySelector(".status");
    const textarea = note.querySelector("textarea");

    textarea.focus();
    textarea.innerHTML = text;
    

    // deleting the node
    delButton.addEventListener("click",()=>
    {
        note.remove();
        UpdateLSData();
    })

    // toggle using edit option

    editButton.addEventListener("click",()=>
    {
        
        const text = textarea.value;
        UpdateLSData();
        //mainDiv.classList.toggle('visible');
        textarea.toggleAttribute("disabled");
        textarea.toggleAttribute("placeholder"); 
        textarea.focus();
        //mainDiv.innerHTML=text;
        //alert(status.innerHTML);
        if(status.innerHTML=='Saved')
        {
            status.innerHTML='Unsaved';
            status.setAttribute("style","color:#e74c3c");
        }
        else
        {
            status.innerHTML='Saved';
            status.setAttribute("style","color:#00aa47");
        }
    })
    //alert(text.length);
    if(text.length!=0)
    {
        status.innerHTML='Saved';
        status.setAttribute("style","color:#00aa47");
        textarea.toggleAttribute("disabled"); 
    }
    textarea.addEventListener("change",()=>
    {
        //UpdateLSData();
    })

    document.body.appendChild(note);
    // it appends a node as the last child of a node
    // alert("Hello");
}

export default addNewNote;
