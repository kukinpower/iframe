let obj, w = 1, h = 1;

function get_name_and_remove_elem(id_name) {
    obj = document.getElementById(id_name);
    console.log(obj.style.width);
    console.log(obj.style.height);
    console.log(obj.style.backgroundColor);
    w = parseInt(obj.style.width, 10);
    h = parseInt(obj.style.height, 10);
    console.log(obj);
    console.log(w);
    console.log(h);
    //setTimeout(shrink, 1000);
    obj.style.backgroundColor = "black";
    //obj.remove();
}

function shrink(){
        console.log(w);
        console.log(h);
        w -= 5;
        h -= 5;
        obj.style.width = w + "px";
        obj.style.height = h + "px";
}

function change_color_and_destroy(color, id_name) {

    let frm = parent.document.getElementById('changeColor');
    frm.style.backgroundColor = color;
    // id_name.fadeOut("slow");
    get_name_and_remove_elem(id_name);
}
//
// function change_green(color) {
//
//     let frm = parent.document.getElementById('frm');
//     frm.style.backgroundColor = color;
//     get_name_and_remove_elem("c_green");
// }
//
// function change_red(color, id_name) {
//
//     let frm = parent.document.getElementById('frm');
//     frm.style.backgroundColor = color;
//     get_name_and_remove_elem(id_name);
// }
//
// function change_blue(color) {
//
//     let frm = parent.document.getElementById('frm');
//     frm.style.backgroundColor = color;
//     get_name_and_remove_elem("c_blue");
// }