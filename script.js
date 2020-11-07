let bg = ["grey", "#2c3a47", "#2c2c47", "#472c42", "#2c3f47", "#2c473e", "#472c2c"];
let i = 0;

function change() {
    let frm = parent.document.getElementById('frm').contentWindow;
    frm = frm.document.getElementById('text');
    frm.style.backgroundColor = bg[i%bg.length];
    i++;
}