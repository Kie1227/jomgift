import React from 'react'
import { Box } from "theme-ui"

const ServicesPadding = ({ children, className = "" }) => {
    return (
        <Box
            className={`font-family ${className}`}
            sx={{
                padding: ["1% 4%", "2% 4%", "3% 0%"],
                // mobile, tablet, desktop
                
            }}>
            {children}
        </Box>
    )
}

export default ServicesPadding