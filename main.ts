namespace hexscreen {
    const CHANNEL = "hexscreen"

    function sendJSON(json: any) {
        const msg = JSON.stringify(json)
        const buf = Buffer.fromUTF8(msg)
        control.simmessages.send(CHANNEL, buf)
    }

    /**
     * Sets a simulated pixel at (x, y) to the given hex color.
     */
    //% block
    export function setPixel(x: number, y: number, hexColor: string) {
        sendJSON({
            action: "setPixel",
            x,
            y,
            hex: hexColor
        })
    }
}
