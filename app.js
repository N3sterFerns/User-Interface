tripOptions()

function tripOptions() {

    let tripOptions = document.querySelectorAll(".trip-option")
    let packageContainer = document.querySelector(".select-package-container")
    let pickOffConatiner = document.querySelector(".pick-off-container")

    tripOptions.forEach(option => {
        option.addEventListener("change", () => {
            if (option.value === "road-way") {
                pickOffConatiner.classList.add("hidden")
                packageContainer.classList.remove("hidden")

            } else {
                pickOffConatiner.classList.remove("hidden")
                packageContainer.classList.add("hidden")
            }

        })
    });
}




