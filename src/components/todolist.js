import React, { useState, useEffect } from "react";
import todo from "../images/todo.png"
import todolight from "../images/todolight.png"
import up_img from "../images/up_arrow.png"
import down_img from "../images/down_arrow.png"
import {addItems, deleteItems, updateItems, removeAllItems } from '../actions/index';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Todo = () => {
  const [inputdata, setInputData] = useState({
    title:"",
    content:""
  });
  let t = localStorage.getItem("googlekeepclone_redux_theme");
  if(t==null)
    t = "dark"
  // console.log(t);
  let [theme, setTheme] = useState(t);
  const dispatch  = useDispatch();
  let list  = useSelector((state)=> state.functionality.list);
  const toggle  = useSelector((state)=> state.functionality.toggle);
  let [scrollId,setscrolId] = useState('');
  let [c, setc] = useState(0);
  
  window.onload = function(){
    keepTheme();
  }
  // console.log("S"+list.length+" "+toggle);
  function keepTheme()
  {
    // alert(theme);
    if(theme=='light')
    {
      document.body.style.backgroundColor='#FFFFFF';
      document.getElementById('IdOfInput').style.backgroundColor='#ff793b';
      // document.getElementById('IdOfInput').focus();
      document.getElementById('cap').style.color='black';
      document.getElementById('faw').classList.replace("fa-sun","fa-moon");
      document.getElementById('faw').title='Dark Theme..?';
      document.getElementById('themebtn').style.color='white';
      document.getElementById('i').src=todolight;
      document.getElementById('head').style.backgroundColor='#ff793b';
      document.getElementById('main_btn').style.color='#e19d00';

      document.getElementById('main_btn').onmouseout = function()
      {
        this.style.backgroundColor='white';
        this.style.color='#e19d00';
      }
      document.getElementById('main_btn').onmouseenter = function()
      {
        this.style.backgroundColor='#e19d00';
        this.style.color='white';
      }
      
      document.getElementById('child_div').style.filter = 'drop-shadow(10px 10px 20px #cccccc)';
    }
    else if(theme=='dark')
    {
      document.body.style.backgroundColor='#060822';
      document.getElementById('IdOfInput').style.backgroundColor='rgb(85, 41, 220)';
      // document.getElementById('IdOfInput').focus();
      document.getElementById('cap').style.color='white';
      document.getElementById('faw').classList.replace("fa-moon","fa-sun");
      document.getElementById('faw').title='Light Theme..?'
      document.getElementById('themebtn').style.color='white';
      document.getElementById('i').src=todo;
      document.getElementById('main_btn').style.color='rgb(85, 41, 220)';

      document.getElementById('main_btn').onmouseout = function()
      {
        this.style.backgroundColor='white';
        this.style.color='rgb(85, 41, 220)';
      }
      document.getElementById('main_btn').onmouseenter = function()
      {
        this.style.backgroundColor='rgb(85, 41, 220)';
        this.style.color='white';
      }
      
      document.getElementById('child_div').style.filter = 'none';
      document.getElementById('head').style.backgroundColor='rgb(85, 41, 220)';
    }
  }

  function changeTheme()
  {
    // alert(theme);
    if(theme=='dark')
    {
        document.body.style.backgroundColor='#FFFFFF';
        document.getElementById('IdOfInput').style.backgroundColor='#ff793b';
        // document.getElementById('IdOfInput').focus();
        document.getElementById('cap').style.color='black';
        document.getElementById('faw').classList.replace("fa-sun","fa-moon");
        document.getElementById('faw').title='Dark Theme..?';
        document.getElementById('themebtn').style.color='white';
        document.getElementById('i').src=todolight;
        document.getElementById('head').style.backgroundColor='#ff793b';
        document.getElementById('main_btn').style.color='#e19d00';

        document.getElementById('main_btn').onmouseout = function()
        {
          this.style.backgroundColor='white';
          this.style.color='#e19d00';
        }
        document.getElementById('main_btn').onmouseenter = function()
        {
          this.style.backgroundColor='#e19d00';
          this.style.color='white';
        }
        
        document.getElementById('child_div').style.filter = 'drop-shadow(10px 10px 20px #cccccc)';
        setTheme('light');
    }
    else if(theme=='light')
    {
        document.body.style.backgroundColor='#060822';
        document.getElementById('IdOfInput').style.backgroundColor='rgb(85, 41, 220)';
        // document.getElementById('IdOfInput').focus();
        document.getElementById('cap').style.color='white';
        document.getElementById('faw').classList.replace("fa-moon","fa-sun");
        document.getElementById('faw').title='Light Theme..?'
        document.getElementById('themebtn').style.color='white';
        document.getElementById('i').src=todo;
        document.getElementById('main_btn').style.color='rgb(85, 41, 220)';

        document.getElementById('main_btn').onmouseout = function()
        {
          this.style.backgroundColor='white';
          this.style.color='rgb(85, 41, 220)';
        }
        document.getElementById('main_btn').onmouseenter = function()
        {
          this.style.backgroundColor='rgb(85, 41, 220)';
          this.style.color='white';
        }
        
        document.getElementById('child_div').style.filter = 'none';
        document.getElementById('head').style.backgroundColor='rgb(85, 41, 220)';
        setTheme('dark');
    }
  }

  useEffect(() => {
    // localStorage.setItem("googlekeepclone_redux", JSON.stringify(list));
    localStorage.setItem("notes_redux", JSON.stringify(list));
    // console.log("H");
    if(c==1)
    {
      window.scrollTo(0,document.body.scrollHeight);
      setc(0);
    }
  }, [list]);

  useEffect(()=>
  {
    // changeTheme();
    localStorage.setItem("googlekeepclone_redux_theme", theme);
  }, [theme]);


  function copy_to_clipboard(title, content) {

    var copyText = `Title : ${title}, Content : ${content}`;
    
    navigator.clipboard.writeText(copyText)
    .then(() => {
      alert("Note copied to Clipboard...");
    })
    .catch(err => {
      console.log('Something went wrong', err);
    });
  }

  return (
    <>
    <div className="heading" id="head">
        <h1><i className="fas fa-sticky-note"></i>&nbsp;&nbsp;Google Keep Clone</h1>
        <button id='themebtn' onClick={changeTheme}><i className="far fa-sun" title='Light Theme..?' id="faw"></i></button>
    </div>  
    
    <div onClick={
      ()=>
      {document.getElementById('t').scrollIntoView()}}><img id='zook' src={up_img} width="40px" height="40px" style={{'position': 'fixed','right':'20px','bottom':'20px', 'opacity': '0.9'}}/></div>
    <div onClick={
      ()=>
      {document.getElementById('b').scrollIntoView()}}><img id='zook' src={down_img} width="40px" height="40px" style={{'position': 'fixed','left':'20px','bottom':'20px', 'opacity': '0.9'}}/></div>

      <div className="main-div" id='t'>
        <div className="child-div" id='child_div'>
         <div>
          <figure style={{display:"inline"}}>
          <img src={todo} alt='todo' id='i'/>
          <div className="theme" style={{display:"inline", height:"300", width:"300"}}>
          
          </div>
            <figcaption ><b id='cap'>Add Your Notes...✌</b>
            </figcaption>
            
          </figure>
         
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Note-title..."
              autoComplete="off"
              className="form-control your-class"
              id='IdOfInput'
              name='title'
              onChange=
              {(event) => 
                {
                  inputdata[event.target.name] = event.target.value;
                  setInputData(inputdata);
                  // console.log(inputdata.title);
                }
              }
            
              
            />
            
            {toggle ? (
              <i className="fa fa-edit" title='Edit Item' id='main_btn' onClick={()=> 
              {
                  document.getElementById("cap").innerHTML = 'Add Your List...✌';
                  // console.log(scrollId);
                  document.getElementById(scrollId).scrollIntoView({block: "center"});
                  
                  dispatch(addItems(inputdata,"Edit"));
                  document.getElementById('IdOfInput').value='';
                  document.getElementById('Id_content').value='';
                  setInputData({title:'',content:''});
              }
            }></i>
            ) : (
              <i className="fa fa-plus" title='Add Note' id='main_btn' onClick={()=> 
              {
                // console.log(inputdata);
                  dispatch(addItems(inputdata,"Add"));
                  document.getElementById('IdOfInput').value='';
                  document.getElementById('Id_content').value='';
                  // console.log("L "+list.length);
                  if(inputdata.title!='' && inputdata.content!='')
                  {
                    c = 1;
                    setc(c);
                    // console.log("C "+c);
                  }
                  setInputData({title:'',content:''});
                  // console.log(inputdata);
                  
              }
            }></i>
            )}
            <br></br>
            <textarea className="form-control" name='content' id='Id_content' placeholder='✏️Add Note-content...'
            onChange=
              {(event) => 
                {
                  inputdata[event.target.name] = event.target.value;
                  setInputData(inputdata);
                  // console.log(inputdata.content);
                }
              }
              ></textarea>
          </div>
        </div>
        <br/><br/>
          <div className="showItems" id='showNotes'>
            {list.map((curElem,index) => {
              
              {/* console.log("C "+c); */}
              
              return (
                <div className="note" id='note' key={curElem.id}>
                  <div className="operation">
                    <span className='status' id={index}>{curElem.title}</span>
                    
                    <i className="fas fa-copy" title='Copy Note' onClick={()=> {
                      copy_to_clipboard(curElem.title,curElem.content);
                      }}></i>
                    <i className="fas fa-edit" title='Edit Note' onClick={()=> 
                        {
                          scrollId = index;
                          setscrolId(scrollId);
                          // console.log(scrollId);
                          document.getElementById("cap").innerHTML = 'Update Your List...✌';
                          document.getElementById("IdOfInput").scrollIntoView({block: "center"});
                          // document.getElementById("IdOfInput").focus();
                          dispatch(updateItems(curElem.id,curElem));
                          document.getElementById('IdOfInput').value=curElem.title;
                          document.getElementById('Id_content').value=curElem.content;
                          setInputData({
                            title:curElem.title,
                            content:curElem.content
                          });
                        }
                      }></i>
                    <i className="fas fa-trash-alt" title='Delete Note' onClick={()=> {
                      dispatch(deleteItems(curElem.id));
                      }}></i>
                  </div>
                  <hr className="dash"/>
                  <textarea placeholder='Enter your note-content..' disabled className="content" value={curElem.content}>{curElem.content}</textarea>
                </div>
              );
            })
            }
            
          </div>

          <div id='b'>
            {list.length!=0 ? 
              
                    <button
                      className="btn_remove"
                      onClick={()=> dispatch(removeAllItems())}
                      >
                      <span style={{fontFamily:'Convergence'}}>Remove All</span>
                    </button>
                  
            : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;