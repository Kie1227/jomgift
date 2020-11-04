export const theme = {
    breakpoints: ['40em', '52em', '64em'],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
        body: 'roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
        secondary: '#30c',
        muted: '#f6f6f6',
        primaryText: "#403F3D"
    },
    text: {
        heading: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
        },
        heading1: {
            fontSize: [16, 20, 26],
            marginBottom: ["3%", "5%", "8%"], 
        }
    },
    // images: {
    //     icons: {
    //         width: 
    //         height:
    //         marginRight
    //     }
    //},
    buttons: {
        primaryBrand: {
            color: "white"
        },
    },
 
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
        },
    },
}