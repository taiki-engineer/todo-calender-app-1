let current = new Date();
let selectedDate = "";

function renderCalender() {
    const year = current.getFullYear();
    const month = current.getMonth();

    const today = new Date();

    document.getElementById("title").textContent =
     `${year}年  ${month +1}月`;

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const dates = document.getElementById("dates");
    dates.innerHTML = "";

    for (let i = 0; i < firstDay; i++) {
        dates.innerHTML += "<div></div>";
    };

    for (let i = 1; i <= lastDate; i++) {
        const dateObj = new Date(year, month, i);

        const y = dateObj.getFullYear();
        const m = dateObj.getMonth() + 1;
        const d = dateObj.getDate();
        
        const dateStr = `${y}-${m}-${d}`

        const div = document.createElement("div");
        div.textContent = d;

        if (
            y === today.getFullYear()&&
            m === today.getMonth() + 1 &&
            d === today.getDate()
        ) {
            div.classList.add("today");
        };

        
        div.addEventListener("click", () => {
            selectedDate = dateStr;

            const format = dateObj.toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "short"
            });

            document.getElementById("selectedDate").textContent = format;

            renderCalender();
            renderTasks();

        });

        

        dates.appendChild(div);
    }

    


};

renderCalender();