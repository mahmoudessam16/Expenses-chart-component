// Select all elements
let allDays = document.querySelectorAll(".day");
let allProgress = document.querySelectorAll(".progress");

// Extract data from JSON File
fetch("data.json")
.then(res => res.json())
.then(data => {
    console.log(data);
    let days = [];
    let progresses = [];
    for (let i = 0; i < data.length; i++) {
        days[i] = data[i].day;
        progresses[i] = data[i].amount;
    }

    let [amount1, amount2, amount3, amount4, amount5, amount6, amount7] = progresses;
    let [mon, tue, wed, thu, fri, sat, sun] = days;
    let [day1, day2, day3, day4, day5, day6, day7] = allDays;
    let [prog1, prog2, prog3, prog4, prog5, prog6, prog7] = allProgress;
    day1.textContent = mon;
    day2.textContent = tue;
    day3.textContent = wed;
    day4.textContent = thu;
    day5.textContent = fri;
    day6.textContent = sat;
    day7.textContent = sun;

    prog1.style.height = `${amount1}%`;
    prog2.style.height = `${amount2}%`;
    prog3.style.height = `${amount3}%`;
    prog4.style.height = `${amount4}%`;
    prog5.style.height = `${amount5}%`;
    prog6.style.height = `${amount6}%`;
    prog7.style.height = `${amount7}%`;

    allProgress.forEach((progress) => {
        progress.addEventListener('mouseover', function () {
            let span = document.createElement("span");
            let spanContent = data.filter(obj => obj.day === this.nextElementSibling.textContent)[0];
            span.textContent = `$${spanContent.amount}`;
            span.className = 'quantity';
            this.parentElement.insertBefore(span, this.parentElement.children[0]);
        });
        progress.addEventListener("mouseout", function () {
            this.previousSibling.remove();
        });
    });
});

