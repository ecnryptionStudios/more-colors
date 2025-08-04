/**
 * This will be loaded before starting the simulator.
 * If you wish to add custom javascript, 
 * ** make sure to add this line to pxt.json**
 * 
 *      "disableTargetTemplateFiles": true
 * 
 * otherwise MakeCode will override your changes.
 * 
 * To register a constrol simmessages, use addSimMessageHandler
 */
// Create pixel overlay container
let pixelContainer = document.createElement("div");
pixelContainer.style.position = "absolute";
pixelContainer.style.top = "0";
pixelContainer.style.left = "0";
pixelContainer.style.pointerEvents = "none"; // Allow clicks through
pixelContainer.style.zIndex = "1000";
document.body.appendChild(pixelContainer);

const PIXEL_SIZE = 4; // Size of 1 pixel in screen space

const pixels = {};

function setSimPixel(x, y, color) {
    const key = `${x},${y}`;
    if (!pixels[key]) {
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.width = `${PIXEL_SIZE}px`;
        div.style.height = `${PIXEL_SIZE}px`;
        div.style.left = `${x * PIXEL_SIZE}px`;
        div.style.top = `${y * PIXEL_SIZE}px`;
        pixelContainer.appendChild(div);
        pixels[key] = div;
    }
    pixels[key].style.backgroundColor = color;
}

addSimMessageHandler("hexscreen", (data) => {
    if (data.action === "setPixel") {
        const x = data.x;
        const y = data.y;
        const hex = data.hex;
        setSimPixel(x, y, hex);
    }
});
