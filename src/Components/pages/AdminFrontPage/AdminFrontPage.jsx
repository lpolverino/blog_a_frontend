import { useState } from "react"
import Sidebar from "./Sidebar"
import UsersDisplayer from "./UsersDisplayer";
import PostsDisplayer from "./PostsDisplayer";
import ErrorInput from "../../Shered/ErrorInput/ErrorInput";

const AdminFrontPage = () => {
  // this show be fetch
  const [sidebarElements, setSidebarElements] = useState([
    {id:0, name:"users"},
    {id:1, name:"posts"},
  ]);
  const [selectedElement, setSelectedElement] = useState(0);
  
  const renderElements = () =>{
    if(sidebarElements[selectedElement].name ==="users"){
      return <><UsersDisplayer></UsersDisplayer></>
    }
    if(sidebarElements[selectedElement].name ==="posts"){
      return <><PostsDisplayer></PostsDisplayer></>
    }
    return <><ErrorInput error={{message:"Element not implemented"}}></ErrorInput></>
  }
  
  return (
    <div>
      <Sidebar elements={sidebarElements} changeSelectedHandler = {selected=>{setSelectedElement(selected)}} ></Sidebar>
      <h2>AdminFrontPage</h2>
      {renderElements()}
    </div>
  )
}

export default AdminFrontPage