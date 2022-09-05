import { Stack } from '@mui/material';
import React from 'react';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack
        direction="row"
        sx={{
            overflow: "auto",
            height: {
                sx: "auto",
                md: "95%"
            },
            flexDirection: {
                md: "column",

            }
        }}
    >
        {
            categories.map(({ name, icon }, i) => (
                <button
                    className='category-btn'
                    style={{
                        background: name.includes(selectedCategory) && "#FC1503",
                        color: "#fff"
                    }}
                    key={i}
                    onClick={() => setSelectedCategory(name)}
                >
                    <span style={{
                        color: name.includes(selectedCategory) ? "white" : "red", marginRight: "15px"
                    }}
                    >{icon}</span>
                    <span style={{
                        opacity: name.includes(selectedCategory) ? '1' : '0.8'
                    }}>{name}</span>
                </button>
            ))
        }
    </Stack>
)

export default Sidebar;