import React from 'react'
import './footer.css'
import { Button } from '@mui/material'

function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='footer_content'>
            designed and developed by 
            <Button className='span'> MAHMOUD BOGHDADY </Button>
            2023
        </div>
      </div>
    </div>
  )
}

export default Footer
