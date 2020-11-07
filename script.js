let bg1 = ["#2c3a47", "#2c2c47", "#472c42", "#2c3f47", "#2c473e", "#472c2c", "mediumpurple", "grey"];
let bg2 = ["grey", "mediumpurple", "#472c2c", "#2c473e", "#2c3f47", "#472c42", "#2c2c47", "#2c3a47"];
let i = 0;

let frm = parent.document.getElementById('frm');//.contentWindow;
let frame1 = parent.document.getElementById('frame1');//.contentWindow;
//frm.style.backgroundColor = bg1[i%bg1.length];
//frame1.style.backgroundColor = bg2[i%bg2.length];

function change() {
    i++;
    frm.style.backgroundColor = bg1[i%bg1.length];
    frame1.style.backgroundColor = bg2[i%bg2.length];
}

function changeOne() {
    i++;
    frame1.style.backgroundColor = bg2[i%bg2.length];
    if (frame1.style.backgroundColor == frm.style.backgroundColor)
    {
        console.log("HELL");
        let f1 = frm.contentWindow.document.getElementById("second");
        console.log(f1);
        let f2 = frame1.contentWindow.document.getElementById("first");
        console.log(f2);
        f1.style.display = "block";
        f2.style.display = "block";
    }
}