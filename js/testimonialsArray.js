const testimonialsArray = [
  {
    name: "Anna K.",
    opinions: {
      pl: "Szybko, sprawnie i bez wychodzenia z domu! E-recepta przyszła w kilka minut.",
      ua: "Швидко, ефективно і без виходу з дому! Е-рецепт прийшов за кілька хвилин.",
      en: "Fast, efficient, and without leaving home! The e-prescription arrived in a few minutes.",
    },
    date: "2025-07-01",
    stars: "★★★★★",
  },
  {
    name: "Michał Z.",
    opinions: {
      pl: "Bardzo profesjonalne podejście lekarzy. Polecam każdemu, kto ceni sobie czas.",
      ua: "Дуже професійний підхід лікарів. Рекомендую кожному, хто цінує свій час.",
      en: "Very professional approach by doctors. I recommend it to everyone who values their time.",
    },
    date: "2025-06-28",
    stars: "★★★★☆",
  },
  {
    name: "Joanna P.",
    opinions: {
      pl: "Zwolnienie L4 otrzymałam tego samego dnia. Usługa naprawdę godna zaufania.",
      ua: "Лікарняний я отримала того ж дня. Послуга дійсно заслуговує на довіру.",
      en: "I received my sick leave on the same day. The service is truly trustworthy.",
    },
    date: "2025-06-25",
    stars: "★★★★★",
  },
  {
    name: "Tomasz W.",
    opinions: {
      pl: "Lekarz był bardzo uprzejmy i pomocny. Wszystko przebiegło szybko i bezproblemowo.",
      ua: "Лікар був дуже ввічливим і допоміжним. Все пройшло швидко і без проблем.",
      en: "The doctor was very polite and helpful. Everything went quickly and smoothly.",
    },
    date: "2025-06-22",
    stars: "★★★★☆",
  },
  {
    name: "Magdalena Z.",
    opinions: {
      pl: "E-recepta została wystawiona w ciągu kilku minut. Polecam tę usługę!",
      ua: "Е-рецепт був виданий за кілька хвилин. Рекомендую цю послугу!",
      en: "The e-prescription was issued within minutes. I recommend this service!",
    },
    date: "2025-06-20",
    stars: "★★★★★",
  },
  {
    name: "Piotr S.",
    opinions: {
      pl: "Konsultacja była szybka i konkretna. Lekarz odpowiedział na wszystkie moje pytania.",
      ua: "Консультація була швидкою і конкретною. Лікар відповів на всі мої запитання.",
      en: "The consultation was quick and specific. The doctor answered all my questions.",
    },
    date: "2025-06-18",
    stars: "★★★★☆",
  },
  {
    name: "Katarzyna M.",
    opinions: {
      pl: "Bardzo wygodna forma konsultacji. Nie musiałam wychodzić z domu.",
      ua: "Дуже зручна форма консультації. Мені не довелося виходити з дому.",
      en: "A very convenient form of consultation. I didn't have to leave home.",
    },
    date: "2025-06-15",
    stars: "★★★★★",
  },
  {
    name: "Adam R.",
    opinions: {
      pl: "Usługa działa bardzo sprawnie. Polecam każdemu, kto potrzebuje szybkiej pomocy.",
      ua: "Послуга працює дуже ефективно. Рекомендую кожному, хто потребує швидкої допомоги.",
      en: "The service works very efficiently. I recommend it to anyone who needs quick help.",
    },
    date: "2025-06-12",
    stars: "★★★★☆",
  },
  {
    name: "Paulina T.",
    opinions: {
      pl: "Lekarz był bardzo profesjonalny. E-recepta została wystawiona błyskawicznie.",
      ua: "Лікар був дуже професійним. Е-рецепт був виданий миттєво.",
      en: "The doctor was very professional. The e-prescription was issued instantly.",
    },
    date: "2025-06-10",
    stars: "★★★★★",
  },
  {
    name: "Grzegorz J.",
    opinions: {
      pl: "Konsultacja online to świetne rozwiązanie. Wszystko przebiegło sprawnie.",
      ua: "Онлайн-консультація — це чудове рішення. Все пройшло гладко.",
      en: "Online consultation is a great solution. Everything went smoothly.",
    },
    date: "2025-06-08",
    stars: "★★★★☆",
  },
  {
    name: "Ewa R.",
    opinions: {
      pl: "Bardzo szybka obsługa. Lekarz był pomocny i uprzejmy.",
      ua: "Дуже швидке обслуговування. Лікар був ввічливим і допоміжним.",
      en: "Very fast service. The doctor was polite and helpful.",
    },
    date: "2025-06-05",
    stars: "★★★★★",
  },
  {
    name: "Sebastian C.",
    opinions: {
      pl: "Polecam tę usługę każdemu, kto potrzebuje szybkiej konsultacji lekarskiej.",
      ua: "Рекомендую цю послугу кожному, хто потребує швидкої консультації лікаря.",
      en: "I recommend this service to anyone who needs a quick medical consultation.",
    },
    date: "2025-06-03",
    stars: "★★★★☆",
  },
  {
    name: "Natalia J.",
    opinions: {
      pl: "E-recepta została wystawiona w ciągu kilku minut. Bardzo wygodne rozwiązanie.",
      ua: "Е-рецепт був виданий за кілька хвилин. Дуже зручне рішення.",
      en: "The e-prescription was issued within minutes. A very convenient solution.",
    },
    date: "2025-06-01",
    stars: "★★★★★",
  },
  {
    name: "Łukasz W.",
    opinions: {
      pl: "Lekarz był bardzo kompetentny. Konsultacja przebiegła szybko i sprawnie.",
      ua: "Лікар був дуже компетентним. Консультація пройшла швидко і гладко.",
      en: "The doctor was very competent. The consultation went quickly and smoothly.",
    },
    date: "2025-05-30",
    stars: "★★★★☆",
  },
  {
    name: "Monika K.",
    opinions: {
      pl: "Bardzo polecam tę usługę. Lekarz był uprzejmy i pomocny.",
      ua: "Дуже рекомендую цю послугу. Лікар був ввічливим і допоміжним.",
      en: "I highly recommend this service. The doctor was polite and helpful.",
    },
    date: "2025-05-28",
    stars: "★★★★★",
  },
  {
    name: "Jakub T.",
    opinions: {
      pl: "Konsultacja była szybka i konkretna. Polecam każdemu, kto ceni sobie czas.",
      ua: "Консультація була швидкою і конкретною. Рекомендую кожному, хто цінує свій час.",
      en: "The consultation was quick and specific. I recommend it to everyone who values their time.",
    },
    date: "2025-05-25",
    stars: "★★★★☆",
  },
  {
    name: "Sylwia P.",
    opinions: {
      pl: "E-recepta została wystawiona błyskawicznie. Bardzo wygodne rozwiązanie.",
      ua: "Е-рецепт був виданий миттєво. Дуже зручне рішення.",
      en: "The e-prescription was issued instantly. A very convenient solution.",
    },
    date: "2025-05-22",
    stars: "★★★★★",
  },
  {
    name: "Mateusz P.",
    opinions: {
      pl: "Lekarz był bardzo kompetentny. Konsultacja przebiegła sprawnie.",
      ua: "Лікар був дуже компетентним. Консультація пройшла гладко.",
      en: "The doctor was very competent. The consultation went smoothly.",
    },
    date: "2025-05-20",
    stars: "★★★★☆",
  },
  {
    name: "Zuzanna B.",
    opinions: {
      pl: "Bardzo szybka obsługa. Lekarz odpowiedział na wszystkie moje pytania.",
      ua: "Дуже швидке обслуговування. Лікар відповів на всі мої запитання.",
      en: "Very fast service. The doctor answered all my questions.",
    },
    date: "2025-05-18",
    stars: "★★★★★",
  },
];
