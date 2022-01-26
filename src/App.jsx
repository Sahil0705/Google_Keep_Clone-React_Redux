import '../src/index.css'

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


function App() {
  return (
    <>
      <div className="heading">
        <h1><i className="fas fa-sticky-note"></i>&nbsp;&nbsp;Google Keep Clone</h1>
    </div>  
    
    <div className="btn-div">
        <button className="learn_more" id="add" onClick={addNewNote}>
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="button-text">Add note</span>
        </button>
    </div>
    <br/><br/><br/><br/><br/>
    </>
  );
}

export default App;
