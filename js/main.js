let currentLanguage = "pl"; // Domyślny język

// Funkcja do generowania kafelków z tłumaczeniami
function generateTiles(lang) {
  const tileGrid = $("#services");
  tileGrid.empty(); // Wyczyść istniejące kafelki

  services.forEach((service) => {
    const cardHtml = `
      <div class="col">
        <div class="card shadow-sm p-4 h-100 d-flex flex-column" id="${
          service.translate.title
        }">
          <div class="d-flex align-items-center mb-3">
            ${service.icon}
            <h5 class="ms-3 mb-0" data-translate="${service.translate.title}">
              ${translations[lang][service.translate.title] || service.title}
            </h5>
          </div>
          <p class="text-muted flex-grow-1" data-translate="${
            service.translate.description
          }">
            ${
              translations[lang][service.translate.description] ||
              service.description
            }
          </p>
          <hr />
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="mb-0">
              <span data-translate="PricePrefix">Cena:</span> ${
                service.price
              } zł
            </h5>
            <a href="/rezerwacje" class="btn btn-primary" data-translate="Wybieram">
              ${translations[lang]["Wybieram"] || "Wybieram"}
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
  changeLanguage(currentLanguage); // Domyślny język
});

let notificationTimeout; // Globalna zmienna do przechowywania identyfikatora timeout
let countdownInterval; // Globalna zmienna do przechowywania identyfikatora interwału

// Obsługa zmiany języka
function changeLanguage(lang) {

  if(currentLanguage === lang) {
    return; // Jeśli język jest już ustawiony, nie rób nic
  }
  currentLanguage = lang; // Ustaw nowy język

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

    // Przeładuj tłumaczenia
  translate(lang);
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

const messages = [
  {
    name: "Dominika D.",
    action: "otrzymała właśnie E-zwolnienie",
    time: "8 minut temu",
  },
  {
    name: "Marcin P.",
    action: "otrzymał właśnie E-recepte",
    time: "minute temu",
  },
  {
    name: "Marek B.",
    action: "otrzymał właśnie E-skierowanie",
    time: "11 minut temu",
  },
  {
    name: "Dagmara C.",
    action: "zarezerwowała właśnie konsultacje internistyczną",
    time: "2 minuty temu",
  },
  {
    name: "Michał Z.",
    action: "zarezerwował konsultację online",
    time: "5 minut temu",
  },
  { name: "Anna K.", action: "otrzymała receptę", time: "2 minuty temu" },
];

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
  notificationTimeout = setTimeout(() => showNotification(lang), nextNotificationTime);
}

// Uruchom powiadomienia po załadowaniu strony
document.addEventListener("DOMContentLoaded", () => {
  const currentLang = "pl"; // Domyślny język (możesz zmienić na dynamiczny)
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
