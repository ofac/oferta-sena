var openmodal = document.querySelectorAll(".modal-open")
for (var i = 0; i < openmodal.length; i++) {
    openmodal[i].addEventListener("click", function (event) {
        event.preventDefault()
        toggleModal(this.dataset.num)
    });
}

const overlay = document.querySelectorAll(".modal-overlay")
for (var i = 0; i < overlay.length; i++) {
    overlay[i].addEventListener("click", function (event) {
        event.preventDefault()
        toggleModal(this.dataset.overlay)
    });
}

var closemodalt = document.querySelectorAll(".modal-closet");
for (var i = 0; i < closemodalt.length; i++) {
    closemodalt[i].addEventListener("click", function (event) {
        event.preventDefault()
        toggleModal(this.dataset.closet)
    });
}


var closemodal = document.querySelectorAll(".modal-close");
for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener("click", function (event) {
        event.preventDefault()
        toggleModal(this.dataset.close)
    });
}

function toggleModal(num = 0) {
    const body  = document.querySelector("body");
    const modal = document.querySelectorAll(".modal");

    modal[num].classList.toggle("opacity-0");
    modal[num].classList.toggle("pointer-events-none");
    body.classList.toggle("modal-active");
}