import React from 'react'
import { Tab, Tabs, withStyles } from '@material-ui/core'

// const defaultFontColor = '#498eff'
// const defaultFontFamily = 'MicrosoftYaHei'

export const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: "2.5px",
        
        '& > span': {
            maxWidth: 90,
            width: '100%',
            backgroundColor: "#FD9F13",
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        fontFamily: 'Noto Serif KR Bold',
        fontSize: 20,
        minWidth:"140px",
        [theme.breakpoints.between('sm','md')]:{
            fontSize:14,
            minWidth:"80px",
        },
        padding: "15px 0px",
        fontWeight: theme.typography.fontWeightRegular,
        color: "#403F3D",
        opacity: 1,
        transitionDuration: '0.5s',
        
        '&:hover': {
            color: '#403F3D',
        },
        '&.MuiTab-textColorInherit.Mui-selected': {
            
            color: "#FD9F13"
            
        },
    },
}))((props) => <Tab disableRipple {...props} />);