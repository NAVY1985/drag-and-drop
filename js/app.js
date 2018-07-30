const drag = (e) => {
    e.dataTransfer.setData('text', e.target.id);
    e.target.style.opacity = "0.4";
}

const admitDrop = (e) => {
    e.preventDefault();
}

const drop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(data));
}

const dragEnd = (e) => {
    e.target.style.opacity = "1";
}



/*document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
    event.target.style.opacity = "0.4";
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
});

document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.addEventListener("dragend", function(event) {
    event.target.style.opacity = "1";
});*/