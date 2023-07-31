import React from 'react'
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton, List, ListItem} from "@mui/material"

function Them({theme, setMyMode}) {
  return (
    <List>
    <ListItem>
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => {
         localStorage.setItem("currentMode", theme.palette.mode === "dark" ? "light" : "dark")
          setMyMode(theme.palette.mode === "light" ? "dark" : "light");
        }}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? <Brightness7 sx={{color: 'orange'}} /> : <Brightness4 />}
      </IconButton>
    </ListItem>
  </List>
  )
}

export default Them
