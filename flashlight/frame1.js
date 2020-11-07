let light = document.querySelector('.light')


document.addEventListener('mousemove', function(e){
    {
        let x = e.pageX/window.innerWidth*100;
        let y = e.pageY/window.innerHeight*100;
        light.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent 100px, rgba(0,0,0,0.95) 120px)`;
        let frm = parent.document.getElementById('frm').contentWindow;
        let dx = Math.abs(20 - x) / 10 / 2;
        let dy = Math.abs(20 - y) / 10 / 2;
        let ret = dx + dy;
        if (ret > 1)
            ret = 1;
        frm.document.body.style.background = `rgba(0,0,0,${ret})`;
    }
});