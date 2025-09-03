
  // Проверка возраста - показывается при каждом обновлении
  document.addEventListener('DOMContentLoaded', function() {
    const ageVerification = document.getElementById('age-verification');
    const ageYes = document.getElementById('age-yes');
    const ageNo = document.getElementById('age-no');

    // Показываем проверку при каждом обновлении страницы
    ageVerification.style.display = 'flex';

    ageYes.addEventListener('click', function() {
      ageVerification.style.display = 'none';
    });

    ageNo.addEventListener('click', function() {
      window.location.href = 'https://ya.ru';
    });
  });

  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });
