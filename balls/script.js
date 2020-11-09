let obj, w = 1, h = 1, circle, interval_id;

function get_name_and_remove_elem(id_name) {

    circle.style.height = circle.clientHeight + "px";
    circle.style.width = circle.clientWidth + "px";
    h = circle.clientHeight;
    w = circle.clientWidth;
    if (h > 0 && w > 0)
        interval_id = setInterval(shrink, 10);
    //obj.style.backgroundColor = "black";
   // obj.remove();
}

function shrink(){
    if (h > 0 && w > 0) {
        console.log(circle.style.height, circle.style.width);
        w -= 1;
        h -= 1;
        console.log(h, w);
        circle.style.height = h + "px";
        circle.style.width = w + "px";
    }
    else{
        clearInterval(interval_id);
    }

}

function change_color_and_destroy(color, id_name) {
    let frm = parent.document.getElementById('frm');
    frm.style.backgroundColor = color;
    let first = parent.document.getElementById('first');
    circle = first.contentWindow.document.getElementById(id_name);
    get_name_and_remove_elem(id_name);
}
