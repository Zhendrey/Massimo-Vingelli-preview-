//!ACTIVATING A SPOILER!
export function spoiler(spoilerButtons, invisibleContentElements){
    spoilerButtons.forEach((spoilerButton, index) => {
        const originalValue = spoilerButton.textContent;
        console.log(originalValue);
        spoilerButton.addEventListener("click", function(event){
            invisibleContentElements[index].classList.toggle("active");
            spoilerButton.classList.toggle("active");
            // if(spoilerButton.classList.contains("minus")){
            //     spoilerButton.textContent = '-';
            // }else{
            //     spoilerButton.textContent = '';
            // }
        })
    });
}

// export function spoiler(buttonParent, buttonsClass, invisiblePartClass,  invisibleContentElement) {
//     buttonParent.addEventListener("click", function(event){
//         const targetElem = event.target;
//         if(targetElem){
//             const originalValue = event.target.textContent;
//             const hiddenPart = event.target.closest(invisiblePartClass);
//             invisibleContentElement.classList.toggtle("active");
//             targetElem.classList.toggle("minus");
//             if(targetElem.classList.contains("minus")){
//                 targetElem.textContent = '-';
//             }else{
//                 targetElem.textContent = originalValue;
//             }
//         }
//     })
// }

export function createScrollLines(parent, quantity) {
    for(let i = 0; i <= quantity; i++){
        const scrollLine = document.createElement("span");
        scrollLine.classList.add("scroll__line");
        parent.appendChild(scrollLine);
    }
}