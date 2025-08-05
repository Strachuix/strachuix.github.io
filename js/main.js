// Funkcja do generowania kafelków z tłumaczeniami
function generateTiles(lang) {
  const tileGrid = $("#services");
  tileGrid.empty(); // Wyczyść istniejące kafelki

  services.forEach((service) => {
    const cardHtml = `
            <div class="card">
              <div class="card-content">
                <h2 class="card-title" data-translate="${
                  service.translate.title
                }">
                  ${
                    translations[lang][service.translate.title] || service.title
                  }
                </h2>
                <span class="card-price">
                  <span data-translate="PricePrefix">od</span> ${service.price}
                </span>
                <p class="card-desc" data-translate="${
                  service.translate.description
                }">
                  ${
                    translations[lang][service.translate.description] ||
                    service.description
                  }
                </p>
              </div>
              <a href="/rezerwacje" class="card-button" data-translate="Wypełnij formularz">
                ${
                  translations[lang]["Wypełnij formularz"] ||
                  "Wypełnij formularz"
                }
              </a>
            </div>
          `;
    tileGrid.append(cardHtml);
  });
}

// Wywołaj generowanie kafelków po załadowaniu strony
$(document).ready(function () {
  generateTiles("pl"); // Domyślny język
});

// Obsługa zmiany języka
function changeLanguage(lang) {
  generateTiles(lang); // Przeładuj kafelki z nowym językiem
  translate(lang); // Przeładuj tłumaczenia
  showNotification(lang); // Uruchom powiadomienia w wybranym języku
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
  { name: "Anna K.", 
    action: "otrzymała receptę", 
    time: "2 minuty temu" },
];

function showNotification(lang = "pl") {
  const notification = document.getElementById("notification");

  // Pobierz losowe dane
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

  // Losuj czas do następnego powiadomienia (10–30 sekund)
  const nextNotificationTime =
    Math.floor(Math.random() * (30 - 10 + 1) + 10) * 1000;

  // Wyświetl odliczanie w konsoli
//   let countdown = nextNotificationTime / 1000; // Konwertuj na sekundy
//   const interval = setInterval(() => {
//     console.log(`Do następnego powiadomienia pozostało: ${countdown} sekund`);
//     countdown--;
//     if (countdown <= 0) {
//       clearInterval(interval); // Zatrzymaj odliczanie
//     }
//   }, 1000);

  // Wywołaj ponownie funkcję po losowym czasie
  setTimeout(() => showNotification(lang), nextNotificationTime);
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
  const path = window.location.pathname.replace(/\/$/, ""); // usuń końcowy /
  if (path === "/o-nas") {
    document.getElementById("o-nas")?.scrollIntoView({ behavior: "smooth" });
  }
  if (path === "/uslugi") {
    document.getElementById("uslugi")?.scrollIntoView({ behavior: "smooth" });
  }
  if (path === "/opinie") {
    document.getElementById("opinie")?.scrollIntoView({ behavior: "smooth" });
  }
  if (path === "/faq") {
    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
  }
  if (path === "/kontakt") {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const testimonialsContainer = document.getElementById("testimonials-container");

  // Losuj 3 opinie z testimonialsArray
  const randomTestimonials = testimonialsArray
    .sort(() => 0.5 - Math.random()) // Losowe sortowanie
    .slice(0, 3); // Pobierz pierwsze 3 elementy

  randomTestimonials.forEach((testimonial) => {
    const testimonialCard = `
      <div class="col-md-6 col-lg-4">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <p class="text-muted small">${testimonial.date}</p>
            <h5 class="card-title fw-bold">${testimonial.name}</h5>
            <p class="card-text">${testimonial.opinion}</p>
            <div class="stars">${testimonial.stars}</div>
          </div>
        </div>
      </div>
    `;
    testimonialsContainer.innerHTML += testimonialCard;
  });
});
