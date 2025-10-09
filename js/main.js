// Funkcja do generowania kafelków z tłumaczeniami
function generateTiles(lang) {
  const tileGrid = $("#services");
  tileGrid.empty(); // Wyczyść istniejące kafelki

  services.forEach((service) => {
    const cardHtml = `
      <div class="col">
        <div class="card shadow-sm p-4 h-100 d-flex flex-column">
          <div class="d-flex align-items-center mb-3">
            ${service.icon}
            <h5 class="ms-3 mb-0">
              ${service.titles[lang]}
            </h5>
          </div>
          <p class="text-muted flex-grow-1">
            ${service.descriptions[lang]}
          </p>
          <hr />
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="mb-0">
              <span>${translations[lang].PricePrefix || 'Cena:'}</span> ${service.price}
            </h5>
            <a href="/rezerwacje" class="btn btn-primary">
              ${translations[lang].Choose || "Wybieram"}
            </a>
          </div>
        </div>
      </div>
    `;
    $("#services").append(cardHtml);
  });
}

// Wywołaj generowanie kafelków po załadowaniu strony
$(document).ready(function () {
  console.log(localStorage.getItem("language"));
  if (localStorage.getItem("language")) {
    changeLanguage(localStorage.getItem("language"));
  }else{
    changeLanguage("pl");
  }
});

let notificationTimeout; // Globalna zmienna do przechowywania identyfikatora timeout
let countdownInterval; // Globalna zmienna do przechowywania identyfikatora interwału

// Obsługa zmiany języka
function changeLanguage(lang) {
  console.log("changeLanguage("+lang+")");
  localStorage.setItem("language", lang);

  const pathname = window.location.pathname;
  const indexPages = ['/', '/o-nas', '/o-nas/', '/uslugi', '/uslugi/', '/opinie', '/opinie/', '/faq', '/faq/', '/kontakt', '/kontakt/'];

  // Przeładuj tłumaczenia
  translate(lang);

  if (
    pathname.endsWith("index.html") ||
    indexPages.includes(pathname)
  ) {
    // Zatrzymaj wywoływanie funkcji showNotification
    if (notificationTimeout) {
      clearTimeout(notificationTimeout);
    }

    // Przeładuj kafelki z nowym językiem
    generateTiles(lang);

    // Uruchom powiadomienia w wybranym języku
    showNotification(lang);

    // Generuj opinie w wybranym języku
    generateTestimonials(lang);
  }
}

function getRandomNotification(lang = "pl") {
  const isFemale = Math.random() < 0.5; // Losuj płeć (50% szans na każdą)
  const messages = isFemale
    ? notifications[lang].female
    : notifications[lang].male; // Wybierz odpowiedni zestaw
  const randomName = messages[Math.floor(Math.random() * messages.length)].name; // Losuj imię
  const randomAction =
    messages[Math.floor(Math.random() * messages.length)].action; // Losuj akcję
  const randomTime = Math.floor(Math.random() * 15) + 1; // Losowy czas (1–15 minut temu)

  return {
    name: randomName,
    action: randomAction,
    time: `${randomTime} minut temu`,
  };
}

function showNotification(lang = "pl") {
  const notification = document.getElementById("notification");

  // Wyczyść poprzedni timeout i interwał, jeśli istnieją
  if (notificationTimeout) {
    clearTimeout(notificationTimeout);
  }
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  // Wygeneruj losowe dane powiadomienia
  const randomMessage = getRandomNotification(lang);
  notification.innerHTML = `
    <div class="notification-icon">
      <i class="fas fa-calendar-check"></i>
    </div>
    <div class="notification-content">
      <p><strong>${randomMessage.name}</strong> ${randomMessage.action}</p>
      <span class="time">${randomMessage.time}</span>
    </div>
  `;

  // Wyświetl powiadomienie
  notification.classList.remove("hidden");

  // Ukryj powiadomienie po 5 sekundach
  setTimeout(() => {
    notification.classList.add("hidden");
  }, 8000);

  // Oblicz czas do następnego powiadomienia (10–30 sekund)
  const nextNotificationTime =
    Math.floor(Math.random() * (30 - 10 + 1) + 10) * 1000;

  // Rozpocznij odliczanie w konsoli
  let secondsLeft = nextNotificationTime / 1000;
  countdownInterval = setInterval(() => {
    console.log(
      `Kolejne powiadomienie w języku "${lang}" za ${secondsLeft} sekund.`
    );
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);

  // Ustaw timeout dla następnego powiadomienia
  notificationTimeout = setTimeout(
    () => showNotification(lang),
    nextNotificationTime
  );
}

// Uruchom powiadomienia po załadowaniu strony
document.addEventListener("DOMContentLoaded", () => {
  const currentLang = localStorage.getItem("language") || "pl";
  setTimeout(
    () => showNotification(currentLang),
    Math.floor(Math.random() * (30 - 10 + 1) + 10) * 1000
  );
});

document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname.replace(/\/$/, "");
  const sections = {
    "/o-nas": "o-nas",
    "/uslugi": "uslugi",
    "/opinie": "opinie",
    "/faq": "faq",
    "/kontakt": "kontakt",
  };
  const targetId = sections[path];
  if (targetId) {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
    });
  }
});

function generateTestimonials(lang) {
  const testimonialsContainer = document.getElementById(
    "testimonials-container"
  );

  testimonialsContainer.innerHTML = ""; // Wyczyść istniejące opinie

  // Losuj 3 opinie z testimonialsArray
  const randomTestimonials = testimonialsArray
    .sort(() => 0.5 - Math.random()) // Losowe sortowanie
    .slice(0, 3); // Pobierz pierwsze 3 elementy

  randomTestimonials.forEach((testimonial) => {
    const testimonialCard = `
      <div class="testimonial-card">
          <p class="testimonial-text" data-translate="Testimonial1">
            ${testimonial.opinions[lang]}
          </p>
          <div class="testimonial-info">
            <div class="testimonial-name">${testimonial.name}</div>
            <div class="testimonial-stars">${testimonial.stars}</div>
          </div>
        </div>
    `;
    testimonialsContainer.innerHTML += testimonialCard;
  });
}

