    const balance = document.getElementById("balance");
    const noBalance = document.getElementById("noBalance");
    const seeBal = document.getElementById("seeBal");
    const hideBal = document.getElementById("hideBal");

    seeBal.addEventListener("click", () => {
        balance.classList.remove("d-none");
        noBalance.classList.add("d-none");
        seeBal.classList.add("d-none");
        hideBal.classList.remove("d-none");
    });

    hideBal.addEventListener("click", () => {
        balance.classList.add("d-none");
        noBalance.classList.remove("d-none");
        hideBal.classList.add("d-none");
        seeBal.classList.remove("d-none");
    });

        
    $(document).ready(function() {
        $('.tnx-slider').slick({
            vertical: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: false,
        });
    });
    
    window.addEventListener("DOMContentLoaded", () => {
        const spin = document.querySelector(".spin")
        const loads = document.getElementsByClassName("load");
        setTimeout(() => {
            Array.from(loads).forEach(load => {
                spin.classList.add("d-none");
                load.classList.add = "d-none";
                load.classList.remove("load");
            });
        }, 5000);
    });
    
    