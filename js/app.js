const drag = (e) => {
    e.dataTransfer.setData('text', e.target.id);
    e.target.style.opacity = "0.4";
}

const admitDrop = (e) => {
    e.preventDefault();
}

const drop = (e) => {
    e.preventDefault();
    let id_foto = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(id_foto));
}

const dragEnd = (e) => {
    e.target.style.opacity = "1";
}