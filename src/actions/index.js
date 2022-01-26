export const addItems = (data,name) =>
{
    // console.log(data);
    return({
        type:"Add_item",
        payload:{
            id:new Date().getTime().toString(),
            title:data.title,
            content:data.content,
            name:name
        }
    })
}

export const deleteItems = (id) =>
{
    return({
        type:"Delete_item",
        payload:{
        id:id}
    })
}

export const updateItems = (id,data) =>
{
    return({
        type:"Update_item",
        payload:{
            id:id,
            title:data.title,
            content:data.content,
        }
    })
}

export const removeAllItems = () =>
{
    return({
        type:"Remove_all_items"
    })
}