document.addEventListener("DOMContentLoaded", function () {
    const x = document.getElementsByClassName("custom-select");
    const l = x.length;

    for (let i = 0; i < l; i++) {
        const selElmnt = x[i].getElementsByTagName("select")[0];
        const ll = selElmnt.length;

        const a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);

        const b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");

        for (let j = 1; j < ll; j++) {
            const c = document.createElement("DIV");
            const optionText = selElmnt.options[j].innerHTML;
            const optionValues = selElmnt.options[j].value.split(" ");

            c.innerHTML = optionText;

            c.addEventListener("click", function (e) {
                const selectedLink = getRandomLink(optionValues);
                window.location.href = selectedLink;
            });

            b.appendChild(c);
        }

        x[i].appendChild(b);

        a.addEventListener("click", function (e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function getRandomLink(links) {
        const randomIndex = Math.floor(Math.random() * links.length);
        return links[randomIndex];
    }

    function closeAllSelect(elmnt) {
        const allSelectItems = document.getElementsByClassName("select-items");
        const allSelected = document.getElementsByClassName("select-selected");
        const xl = allSelectItems.length;
        const yl = allSelected.length;
        const arrNo = [];

        for (let i = 0; i < yl; i++) {
            if (elmnt == allSelected[i]) {
                arrNo.push(i);
            } else {
                allSelected[i].classList.remove("select-arrow-active");
            }
        }

        for (let i = 0; i < xl; i++) {
            if (arrNo.indexOf(i) === -1) {
                allSelectItems[i].classList.add("select-hide");
            }
        }
    }

    document.addEventListener("click", closeAllSelect);
});
