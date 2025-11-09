document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const mainQuestion = document.getElementById('mainQuestion');
    const mascot = document.getElementById('mascot');
    const finalMessage = document.getElementById('finalMessage');

    let noClicks = 0; // "Hayır" butonuna kaç kez basıldığını sayar

    // --- Hayır Butonu Etkileşimi ---
    noButton.addEventListener('click', () => {
        noClicks++;
        enlargeYesButton();
        updateNoMessage(noClicks);
    });

    // --- Evet Butonu Etkileşimi ---
    yesButton.addEventListener('click', () => {
        mainQuestion.classList.add('hidden');
        mascot.textContent = '🥰';
        noButton.classList.add('hidden');
        yesButton.classList.add('hidden');
        finalMessage.classList.remove('hidden');
    });

    // --- Fonksiyonlar ---

    function enlargeYesButton() {
        // Eğer 6. tıklamaya kadar geldiysek butonu dev yapalım
        if (noClicks >= 7) {
            yesButton.style.position = 'fixed';
            yesButton.style.top = '0';
            yesButton.style.left = '0';
            yesButton.style.width = '100vw';
            yesButton.style.height = '100vh';
            yesButton.style.fontSize = '10vw';
            yesButton.textContent = "Həəə 💖";
            yesButton.style.zIndex = '999';
            yesButton.style.transition = 'all 0.5s ease';
            return;
        }

        // Normal büyüme aşamaları
        let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        currentSize += 78; // Her tıklamada 78px büyüsün
        yesButton.style.fontSize = `${currentSize}px`;

        // Dinamik metin değişimi
        if (noClicks === 1) {
            noButton.textContent = "Dəqiq əminsən??";
        } else if (noClicks === 2) {
            noButton.textContent = "Axıı çox pis olaramm!";
        } else if (noClicks === 3) {
            noButton.textContent = "Noolaarr!";
        } else if (noClicks === 4) {
            noButton.textContent = "Bir şans daha?";
        } else if (noClicks === 5) {
            noButton.textContent = "Son qərarındıı?";
        }
    }

    function updateNoMessage(clicks) {
        let messages = [
            "Yox demək üçün çox tələsdin axı:)",
            "Səhvliklə basdınn?",
            "Bir daha düşün xahişş!",
            "Əminsənnn?",
            "Yox bunu edə bilməzsən :(",
            "Noolaarr... Bizim üçün ən yaxşısı Həə deməyindi."
        ];

        let index = (clicks - 1) % messages.length;
        mainQuestion.textContent = messages[index];
    }
});
