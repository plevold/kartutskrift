function drawImage(img, x, y) {
    var ctx = document.getElementById('canvas').getContext('2d');
        ctx.drawImage(img,x,y);
    
}



function test() {
    $('#container').children().each(
                             function(){
                                    img = this.children[0];
                             drawImage(img, parseInt(this.style.left), parseInt(this.style.top)); //this syntax is definatly wrong, but u get the idea.
                             });
    var canvas = document.getElementById("canvas");
    var img    = canvas.toDataURL("image/png");
    window.location = canvas.toDataURL("image/png");
    
}