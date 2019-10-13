const CHANNEL = "interweb_news";

let canvas = document.getElementById("canvas");

const updateColor = (color) => canvas.style.backgroundColor = rgb(color);
const rgb = ({r, g, b}) => "rgb(" + r + "," + g + "," + b + ")";

const dweetColor =
    (color) => dweetio.dweet_for(CHANNEL, color, (err, dweet) => {
        if (err) console.log(err);
    })

let g_btn = document.getElementById("g_btn");
let r_btn = document.getElementById("r_btn");

let btn_action = () => {
    switch (event.target.id) {
        case "g_btn": dweetColor({r: 0, g: 255, b: 0});
            break;
        case "r_btn": color = dweetColor({r: 255, g: 0, b: 0});
            break;
    }
};
g_btn.onclick = btn_action;
r_btn.onclick = btn_action;

let r_slider = document.getElementById("r_slider");
let g_slider = document.getElementById("g_slider");
let b_slider = document.getElementById("b_slider");

let slider_action = () => {
    dweetColor({r: r_slider.value, g: g_slider.value, b: b_slider.value});
};

r_slider.onchange = slider_action;
g_slider.onchange = slider_action;
b_slider.onchange = slider_action;

dweetio.listen_for(CHANNEL, (dweet) => {
    color = dweet.content;
    updateColor(color);
    r_slider.value = color.r;
    g_slider.value = color.g;
    b_slider.value = color.b;
});