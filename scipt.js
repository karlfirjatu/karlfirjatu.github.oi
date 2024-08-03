/**
 * untuk link copy
 */


const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) =>{

    action.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("action : " ,action.parentElement);
        navigator.clipboard.writeText( action.parentElement.getAttribute("href"));
       
        /**
         * untuk memunculkan notif
         */

        document.getElementById("toast").innerHTML = `
        <div class="toast-container">
      <p>✅ Link berhasil disalin!</p>
      </div>
        `;

        /**
         * untuk menghapus notif
         */

        setTimeout(()  => {
            document.querySelector("#toast .toast-container")
            .classList.add("toast-gone")
        }, 300)
        setTimeout(()  => {
            document
                .querySelector("#toast .toast-container").remove();

        }, 4000)  
    });

});


/**
 * untuk mengganti hover
 */

document.querySelectorAll(".sosmed i").forEach((sosmed) =>{
    sosmed.addEventListener("mouseenter", () => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill");
    });

   sosmed.addEventListener("mouseleave", () => {
    sosmed.classList.remove("ph-fill");
    sosmed.classList.add("ph");
   })
    
});

/**
 * animasi scroll
 */

document.addEventListener("scroll",(e) => {

    document.querySelector(
        ".bg-text-animation"
    ).style.transform=`translateX(${window.scrollY}px)`
});