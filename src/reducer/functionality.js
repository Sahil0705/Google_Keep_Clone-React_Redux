// let v = JSON.parse(localStorage.getItem("googlekeepclone_redux"));
let v = JSON.parse(localStorage.getItem("notes_redux"));
// console.log(v);
if(v==null)
    v = [
    {
        title:'',
        content:''
    }
]

const initalList = {
    
    list : v,
    toggle: false,
    update:{
        u_id:"",
        u_title:"",
        u_content:""
    },
    latestAdded:""
}
// console.log("H"+initalList.list.title+initalList.list.content);
let updatedList;
const functionality = (state = initalList, action) =>
{
    switch(action.type)
    {
        case "Add_item":
            const {id, title, content, name} = action.payload;
            state.latestAdded = id;
            if(name=='Add')
            {
                // alert(name);
                if(title=='' || content=='')
                    alert("Please enter some title and content to add a note..");
                else
                {
                    updatedList = [
                        ...state.list,
                        {
                            id:id,
                            title:title,
                            content:content
                        }
                    ]
                    // console.log(updatedList);
                    return{
                        ...state,
                        list:[
                            ...state.list,
                            {
                                id:id,
                                title:title,
                                content:content
                            }
                        ]
                    }
                }
            }
            else if(name=='Edit')
            {
                // alert(name);
                // console.log(state.update.u_id+" "+state.update.u_data);
                updatedList = state.list.map((curelem)=>
                {
                    // console.log(curelem.data);
                    if(curelem.id==state.update.u_id)
                    {
                        curelem.title = title;
                        curelem.content = content;
                        // console.log(curelem.data);
                    }
                    return(curelem);
                })
                // console.log(state);
                // console.log(updatedList);
                return({
                    ...state,
                    list:updatedList,
                    toggle: false
                });
            }
            // localStorage.setItem("todolist_redux", JSON.stringify(updatedList));
        case "Delete_item":
            const del_id = action.payload.id;
            updatedList = state.list.filter((curelem)=>
            {
                if(curelem.id!=del_id)
                    return(curelem);
            })
            // console.log(updatedList);
            // localStorage.setItem("todolist_redux", JSON.stringify(updatedList));
            return({
                ...state,
                list:updatedList
            })
        case "Update_item":
            const {id:upd_id, title:upd_title, content:upd_content} = action.payload;                    
            // console.log(upd_id+" "+upd_data);
            state.update.u_id = upd_id;
            state.update.u_title = upd_title;
            state.update.u_content = upd_content;
            return({
                ...state,
                toggle:true
            });
        case "Remove_all_items":
            // localStorage.setItem("todolist_redux", JSON.stringify([]));
            return({
                ...state,
                list:[]
            })
        default : return(state);
    }
}

export default functionality