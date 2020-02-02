let defaultScreenWidth = 375
let defaultScreenHeight = 667

/*
* Function to set the default width and height as reference
* screen sizes
* width: base width for scaling
* height: base height for scaling
* */
export const setDefaultScreenDimens = (width, height) => {
    if (!width) {
        console.warn('invalid width provided as reference.')
        return
    }
    if (!height) {
        console.warn('invalid height provided as reference.')
        return
    }
    defaultScreenWidth = width
    defaultScreenHeight = height
}

export default {
    defaultScreenWidth,
    defaultScreenHeight,
    setDefaultScreenDimens
}
