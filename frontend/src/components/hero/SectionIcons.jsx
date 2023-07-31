import { Container } from '@mui/material'
import React from 'react'
import './sectionIcon.css';
import { ElectricBolt } from '@mui/icons-material';
import { CreditScoreOutlined } from '@mui/icons-material';
import { WorkspacePremium } from '@mui/icons-material';
import { AccessAlarmOutlined } from '@mui/icons-material';

function SectionIcons() {
    const groupIcons = [
        { text: " Fast Delivery", price: "start from 10 $ ", icon: <ElectricBolt sx={{fontSize: '40px', color: '#fff'}} /> },
        { text: " Money Guarantee", price: "7 Days Back ", icon: <WorkspacePremium sx={{fontSize: '40px', color: '#fff'}} /> },
        { text: " 365 Days", price: "For Free return", icon: <AccessAlarmOutlined sx={{fontSize: '40px', color: '#fff'}} /> },
        { text: " Payment", price: "Seccure System", icon: <CreditScoreOutlined sx={{fontSize: '40px', color: '#fff'}} /> },
    ]
  return (
    <Container sx={{bgcolor: '#000', mt: 2}}>
        <div className='content '>
        {
            groupIcons.map((item) => {
              return(
                <div className='content_item '>

                <div className='content_item_icon'>
                    {item.icon}
                </div>
                <div className='content_item_info'>
                    <h3>{item.text}</h3>
                    <p>{item.price}</p>
                </div>
            </div>
              )
            }
            )
        }
        </div>
    </Container>
  )
}

export default SectionIcons

