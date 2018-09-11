newWall();

/**
 * principal function
 */
function moveFunction(event) {
    var touch = event.keyCode;

    var leftObjet = document.querySelector('#objet').style.marginLeft;
    var topObjet = document.querySelector('#objet').style.marginTop;

    if(leftObjet == "") {
        leftObjet = 10;
    }
    if(leftObjet > container.offsetWidth) {
        leftObject = container.offsetWidth - document.querySelector('#objet').style.width;
    }
    if(topObjet == "") {
        topObjet = 10;
    }

    var moveRight = parseInt(leftObjet);
    var moveLeft = parseInt(leftObjet);
    var moveTop = parseInt(topObjet);
    var moveBottom = parseInt(topObjet);

    moveRight = moveRight + 10;
    moveLeft = moveLeft - 10;
    moveTop = moveTop + 10;
    moveBottom = moveBottom - 10;

    if(touch == 37 && moveLeft >= 0) {
        document.querySelector('#objet').style.marginLeft = moveLeft + "px";
        //newWall();
        //console.log('Left : ' + document.querySelector('#objet').style.marginLeft);
    }
    if(touch == 38 && moveBottom >= 0) {
        document.querySelector('#objet').style.marginTop = moveBottom + "px";
        //newWall();
        //console.log('top');
    }
    if(touch == 39 && (parseInt(document.querySelector('#objet').style.marginLeft) + 25) <= container.offsetWidth) {
        document.querySelector('#objet').style.marginLeft = moveRight + "px";
        //newWall();
        //console.log('Right : ' + moveRight);
    }
    if(touch == 40 && (parseInt(document.querySelector('#objet').style.marginTop) + 25) <= container.offsetHeight) {
        document.querySelector('#objet').style.marginTop = moveTop + "px";
        //newWall();
        //console.log('bas');
    }
}

function wallFunction() {
    var wall = document.querySelectorAll('.wall');
}

/**
 * new wall
 */
function newWall() {
    var x = Math.round(Math.random() * 900);
    var y = Math.round(Math.random() * 900);

    if(x < container.offsetWidth && y < container.offsetHeight) {
        var newDiv = document.createElement("div");
        newDiv.classList.add('wall');
        document.querySelector('#container').appendChild(newDiv);
        newDiv.style.left = x + "px";
        newDiv.style.top = y + "px";
    }
    else {
        //console.log('ZUUT!!!');
        x = container.offsetWidth;
        y = container.offsetHeight;

        var newDiv = document.createElement("div");
        newDiv.classList.add('wall');
        document.querySelector('#container').appendChild(newDiv);
        newDiv.style.left = x + "px";
        newDiv.style.top = y + "px";
    }
}