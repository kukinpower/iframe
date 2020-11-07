let bg1 = ["#2c3a47", "#2c2c47", "#472c42", "#2c3f47", "#2c473e", "#472c2c", "mediumpurple", "grey"];
let bg2 = ["grey", "mediumpurple", "#472c2c", "#2c473e", "#2c3f47", "#472c42", "#2c2c47", "#2c3a47"];
let i = 0;

function change() {
    let frm = parent.document.getElementById('frm');//.contentWindow;
    let frame1 = parent.document.getElementById('frame1');//.contentWindow;
    frm.style.backgroundColor = bg1[i%bg1.length];
    frame1.style.backgroundColor = bg2[i%bg2.length];
    i++;
}

function changeOne() {
    let frm = parent.document.getElementById('frm');
    let frame1 = parent.document.getElementById('frame1');//.contentWindow;
    i++;
    frame1.style.backgroundColor = bg2[i%bg2.length];
    if (frame1.style.backgroundColor == frm.style.backgroundColor)
    {
        console.log("HELL");
        let f1 = parent.document.getElementById('frm');
        let f2 = parent.document.getElementById('frame1');
        let f11 = f1.contentWindow.document.getElementById("#1");
        let f22 = f2.contentWindow.document.getElementById("#2");
        f11.style.display = "block";
        f22.style.display = "block";
    }
}