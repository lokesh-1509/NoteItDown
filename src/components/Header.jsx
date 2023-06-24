import React from "react";
import NotesIcon from '@material-ui/icons/Notes';
import CreateIcon from '@material-ui/icons/Create';

function Header(){
   return(
     <header>
        <h1 className="header" ><NotesIcon/>NoteItDown<CreateIcon/></h1>
     </header>
   )
};

export default Header;
