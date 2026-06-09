// ================================
// ФАНАТСКАЯ СТРАНИЦА FORTUNA 812
// ================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Сайт Fortuna 812 загружен!");

    // =========================
    // 1. ПОДСЧЁТ ИЗОБРАЖЕНИЙ
    // =========================

    function updateImageCounter() {
        const images = document.querySelectorAll(".image-card");
        const counter = document.getElementById("image-counter");

        if (counter) {
            counter.textContent = images.length;
        }
    }

    // =========================
    // 2. ЛАЙКИ (ГАЛЕРЕЯ)
    // =========================

    function initLikes() {

        const likeButtons = document.querySelectorAll(".like-btn");
        const totalLikesElement = document.getElementById("total-likes");

        let totalLikes = 0;

        likeButtons.forEach((btn) => {

            btn.addEventListener("click", () => {

                const countSpan = btn.querySelector(".like-count");

                let count = parseInt(countSpan.textContent);

                // если уже лайкнуто
                if (btn.classList.contains("liked")) {
                    btn.classList.remove("liked");
                    count--;
                    totalLikes--;
                } else {
                    btn.classList.add("liked");
                    count++;
                    totalLikes++;
                }

                countSpan.textContent = count;

                if (totalLikesElement) {
                    totalLikesElement.textContent = totalLikes;
                }

                // простая анимация
                btn.style.transform = "scale(1.2)";
                setTimeout(() => {
                    btn.style.transform = "scale(1)";
                }, 200);
            });
        });
    }

    // =========================
    // 3. ФИЛЬТРЫ ГАЛЕРЕИ
    // =========================

    function initFilters() {

        const filterButtons = document.querySelectorAll(".filter-btn");
        const cards = document.querySelectorAll(".image-card");

        filterButtons.forEach((btn) => {

            btn.addEventListener("click", () => {

                // активная кнопка
                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const filter = btn.dataset.filter;

                cards.forEach(card => {

                    const category = card.dataset.category;

                    if (filter === "all" || filter === category) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }

    // =========================
    // 4. ДАТА В ФУТЕРЕ
    // =========================

    function setYear() {
        const year = document.getElementById("current-year");

        if (year) {
            year.textContent = new Date().getFullYear();
        }
    }

    // =========================
    // 5. ИНИЦИАЛИЗАЦИЯ ВСЕГО
    // =========================

    updateImageCounter();
    initLikes();
    initFilters();
    setYear();

});