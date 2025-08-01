function translate(lang) {
  // Sprawdź, czy tłumaczenia dla wybranego języka istnieją
  if (!translations[lang]) {
    console.error(`Brak tłumaczeń dla języka: ${lang}`);
    return;
  }

  // Iteruj przez wszystkie elementy z atrybutem data-translate
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key]; // Użyj innerHTML zamiast textContent
    }
  });
}

const translations = {
  pl: {
    MainPage: "Strona Główna",
    Services: "Usługi",
    Contact: "Kontakt",
    AboutUs: "O nas",
    FAQ: "FAQ",
    PriceList: "Cennik",
    Price: "Cena:",
    Doctors: "Lekarze",
    Opinions: "Opinie",
    BookVisit: "Umów wizytę",
    Career: "Kariera",
    PaymentMethods: "Wygodne formy płatności:",
    ConstantTelemedicineCare: "Stała Opieka Telemedyczna",
    OnlineMedConsultations:
      "Konsultacje lekarskie online:<br /><span class='text-highlight'>Zadbamy o Twoje zdrowie</span>",
    HealthCare: "Zadbamy o Twoje zdrowie",
    HeaderHookText:
      "Potrzebujesz <strong>e-recepty</strong>, <strong>L4</strong> lub <strong>skierowania</strong>? Nasze szybkie konsultacje są dostępne już w <strong>15 minut</strong>.",
    BookNow: "Umów się teraz",
    MeetOurTeam: "Poznaj nasz zespół i dowiedz się, dlaczego warto nam zaufać.",
    WhoAreWe:
      "<strong>Kim jesteśmy?</strong><br /> KrukMed24 to miejsce, w którym łączymy doświadczenie lekarzy z wygodą nowoczesnych rozwiązań.",
    WhyUs:
      "<strong>Dlaczego My?</strong><br /> Wiemy, jak cenny jest Twój czas i spokój.",
    ServicesHeader: "Nasze usługi",
    ServicesHeader2:
      "Sprawdź, jakie telemedyczne rozwiązania oferujemy – szybko i bezpiecznie",
    PricePrefix: "od",
    EPrescription: "E-recepta",
    EPrescriptionDescription:
      "Otrzymaj receptę w 15 minut, bez wychodzenia z domu.",
    SickLeave: "Zwolnienie L4",
    SickLeaveDescription:
      "Szybkie zwolnienie po konsultacji z lekarzem online.",
    Referral: "Skierowanie",
    ReferralDescription: "Skierowanie na badania laboratoryjne lub obrazowe.",
    Teleconsultation: "Teleporada",
    TeleconsultationDescription:
      "Szybka rozmowa z lekarzem o Twoim stanie zdrowia.",
    InternalConsultation: "Konsultacja internistyczna",
    InternalConsultationDescription: "Porada od lekarza pierwszego kontaktu.",
    ContraceptivePills: "Tabletki antykoncepcyjne",
    ContraceptivePillsDescription: "E-recepta na tabletki antykoncepcyjne.",
    MorningAfterPill: "Antykoncepcja 'dzień po'",
    MorningAfterPillDescription:
      "Preparat wykorzystywany w celu zapobiegania niechcianej ciąży po odbytym stosunku. Skuteczność do 120h po stosunku.",
    TreatmentContinuation: "Kontynuacja leczenia",
    TreatmentContinuationDescription:
      "Przedłużenie recepty lub kontynuacja terapii.",
    PediatricConsultation: "Konsultacja pediatryczna",
    PediatricConsultationDescription:
      "Pomoc dla Twojego dziecka — bez stresu i kolejek.",
    HowToUse: "Jak korzystać z e-konsultacji?",
    HowToUseDescription:
      "Dowiedz się jak skorzystać z e-konsultacji w praktyce.",
    HowToUseStep1: "1. Wypełnij formularz",
    HowToUseStep1Description:
      "Odpowiedz na pytania zawarte w formularzu konsultacji.",
    HowToUseStep2: "2. Zapłać",
    HowToUseStep2Description:
      "Wybierz jedną z naszych bezpiecznych form płatności i opłać zamówienie.",
    HowToUseStep3: "3. Czekaj na telefon od lekarza",
    HowToUseStep3Description:
      "Krótko po otrzymaniu zamówienia skontaktuje się z Tobą nasz lekarz.",
    TestimonialsHeader: "Opinie pacjentów",
    TestimonialsDescription:
      "Zobacz, co mówią o nas osoby, które skorzystały z naszych usług.",
    Testimonial1:
      "Szybko, sprawnie i bez wychodzenia z domu! E-recepta przyszła w kilka minut.",
    Testimonial2:
      "Bardzo profesjonalne podejście lekarzy. Polecam każdemu, kto ceni sobie czas.",
    Testimonial3:
      "Zwolnienie L4 otrzymałem tego samego dnia. Usługa naprawdę godna zaufania.",
    FAQHeader: "FAQ (Najczęściej zadawane pytania)",
    FAQDescription:
      "Znajdź odpowiedź na najczęściej pojawiające się pytania dotyczące naszych usług.",
    HowDoesOnlineConsultationWork: "Jak wygląda konsultacja online?",
    OnlineConsultationProcess:
      "Konsultacja odbywa się w prosty sposób – po wypełnieniu krótkiego formularza lekarz kontaktuje się z Tobą przez czat, telefon lub wideorozmowę. Najczęściej trwa to kilka minut, a cały proces jest szybki i wygodny.",
    WillIGetPrescriptionAfterConsultation: "Czy otrzymam receptę po rozmowie?",
    PrescriptionAfterConsultation:
      "Tak, jeśli lekarz uzna to za zasadne, wystawia e-receptę zaraz po zakończeniu konsultacji. Kod recepty dostajesz w wiadomości SMS oraz e-mail – możesz go zrealizować w każdej aptece.",
    HowLongToWaitForDoctor: "Jak długo czekam na lekarza?",
    WaitingTimeForDoctor:
      "W większości przypadków lekarz odpowiada w ciągu 10–15 minut. W godzinach nocnych czas może być nieco dłuższy, ale zwykle nie przekracza 30 minut.",
    CanIGetSickLeaveOnline: "Czy mogę otrzymać L4 przez internet?",
    SickLeaveOnline:
      "Tak, jeśli lekarz stwierdzi potrzebę wystawienia zwolnienia, e-ZLA trafia automatycznie do ZUS i Twojego pracodawcy. Nie musisz niczego drukować ani dostarczać osobiście.",
    ContactDescription:
      "Masz pytania? Skontaktuj się z nami – jesteśmy dostępni 24/7.",
    ContactUs:
      "Masz pytania dotyczące konsultacji online? Jesteśmy do Twojej dyspozycji 7 dni w tygodniu.",
    Phone: "Telefon:",
    Email: "E-mail:",
    CallNow: "Zadzwoń teraz",
    FooterDescription:
      "Nowoczesna opieka medyczna online – bez kolejek i stresu.",
    RegularContact: "Regularny kontakt z lekarzem",
    RegularContactDescription:
      "Comiesięczna rozmowa o Twoim zdrowiu i przebiegu leczenia.",
    RegularPrescriptions: "Recepty na bieżąco",
    RegularPrescriptionsDescription:
      "Recepty wystawiane podczas rozmowy – jeśli są wskazania i brak przeciwwskazań.",
    IndividualCare: "Indywidualna opieka",
    IndividualCareDescription:
      "Lekarz zna Twoją historię choroby i prowadzi dokumentację.",
    NoLeavingHome: "Bez wychodzenia z domu",
    NoLeavingHomeDescription:
      "Rozmowy telefoniczne lub wideo – wygodnie i bezpiecznie.",
    Month: "miesiąc",
    OrderCare: "Zamów opiekę",
  },
  en: {
    MainPage: "Home",
    Services: "Services",
    Contact: "Contact",
    AboutUs: "About Us",
    FAQ: "FAQ",
    PriceList: "Pricing",
    Price: "Price:",
    Doctors: "Doctors",
    Opinions: "Testimonials",
    BookVisit: "Book an Appointment",
    Career: "Career",
    PaymentMethods: "Convenient Payment Methods:",
    ConstantTelemedicineCare: "Constant Telemedicine Care",
    OnlineMedConsultations:
      "Online medical consultations:<br /><span class='text-highlight'>We’ll take care of your health</span>",
    HealthCare: "We’ll take care of your health",
    HeaderHookText:
      "Need an <strong>e-prescription</strong>, <strong>sick leave</strong>, or a <strong>referral</strong>? Fast consultations available in just <strong>15 minutes</strong>.",
    BookNow: "Book now",
    MeetOurTeam: "Meet our team and discover why you can trust us.",
    WhoAreWe:
      "<strong>Who are we?</strong><br /> KrukMed24 is where experienced doctors meet the convenience of modern solutions.",
    WhyUs:
      "<strong>Why choose us?</strong><br /> We know how valuable your time and peace of mind are.",
    ServicesHeader: "Our Services",
    ServicesHeader2: "Discover our fast and secure telemedical solutions",
    PricePrefix: "from",
    EPrescription: "E-prescription",
    EPrescriptionDescription:
      "Receive your prescription in 15 minutes without leaving home.",
    SickLeave: "Sick Leave",
    SickLeaveDescription:
      "Quick leave after an online consultation with a doctor.",
    Referral: "Referral",
    ReferralDescription: "Referral for lab or imaging tests.",
    Teleconsultation: "Teleconsultation",
    TeleconsultationDescription: "Quick chat with a doctor about your health.",
    InternalConsultation: "Internal Medicine Consultation",
    InternalConsultationDescription: "Advice from a general practitioner.",
    ContraceptivePills: "Contraceptive Pills",
    ContraceptivePillsDescription: "E-prescription for contraceptive pills.",
    MorningAfterPill: "Morning-after Pill",
    MorningAfterPillDescription:
      "Emergency contraception within 120h of intercourse.",
    TreatmentContinuation: "Treatment Continuation",
    TreatmentContinuationDescription:
      "Renew your prescription or continue therapy.",
    PediatricConsultation: "Pediatric Consultation",
    PediatricConsultationDescription:
      "Help for your child — stress-free and no queues.",
    HowToUse: "How to use e-consultation?",
    HowToUseDescription: "Learn how to use e-consultation in practice.",
    HowToUseStep1: "1. Fill out the form",
    HowToUseStep1Description: "Answer the questions in the consultation form.",
    HowToUseStep2: "2. Make the payment",
    HowToUseStep2Description:
      "Choose one of our secure payment methods and pay for the service.",
    HowToUseStep3: "3. Wait for the doctor’s call",
    HowToUseStep3Description:
      "Shortly after we receive your order, our doctor will contact you.",
    TestimonialsHeader: "Patient Testimonials",
    TestimonialsDescription:
      "See what people who used our services are saying.",
    Testimonial1:
      "Fast, efficient, and no need to leave home! E-prescription arrived within minutes.",
    Testimonial2:
      "Very professional approach from the doctors. Highly recommended for busy individuals.",
    Testimonial3:
      "I received my sick leave on the same day. Truly trustworthy service.",
    FAQHeader: "FAQ (Frequently Asked Questions)",
    FAQDescription:
      "Find answers to the most common questions about our services.",
    HowDoesOnlineConsultationWork: "How does the online consultation work?",
    OnlineConsultationProcess:
      "It's simple — after filling out a short form, the doctor contacts you via chat, phone, or video. It usually takes just a few minutes and is quick and convenient.",
    WillIGetPrescriptionAfterConsultation:
      "Will I receive a prescription after the consultation?",
    PrescriptionAfterConsultation:
      "Yes, if the doctor finds it medically appropriate, an e-prescription is issued right after the consultation. You’ll receive the code via SMS and email — redeemable at any pharmacy.",
    HowLongToWaitForDoctor: "How long do I wait for the doctor?",
    WaitingTimeForDoctor:
      "Typically within 10–15 minutes. At night, the wait may be slightly longer but rarely exceeds 30 minutes.",
    CanIGetSickLeaveOnline: "Can I get a sick leave online?",
    SickLeaveOnline:
      "Yes, if the doctor deems it necessary. The electronic sick leave (e-ZLA) is automatically sent to ZUS and your employer. No printing or manual",
    ContactDescription: "Have questions? Contact us — we are available 24/7.",
    ContactUs: "Contact Us",
    Phone: "Phone:",
    Email: "Email:",
    CallNow: "Call Now",
    FooterDescription: "Modern online medical care – no queues and no stress.",
    RegularContact: "Regular contact with the doctor",
    RegularContactDescription:
      "Monthly discussions about your health and treatment progress.",
    RegularPrescriptions: "Ongoing prescriptions",
    RegularPrescriptionsDescription:
      "Prescriptions issued during the call – if indicated and no contraindications.",
    IndividualCare: "Individual care",
    IndividualCareDescription:
      "The doctor knows your medical history and manages your treatment.",
    NoLeavingHome: "No leaving home",
    NoLeavingHomeDescription: "Phone or video calls – convenient and secure.",
    Month: "month",
    OrderCare: "Order Care",
  },
  uk: {
    MainPage: "Головна",
    Services: "Послуги",
    Contact: "Контакт",
    AboutUs: "Про нас",
    FAQ: "Питання та відповіді",
    PriceList: "Прайс",
    Price: "Ціна:",
    Doctors: "Лікарі",
    Opinions: "Відгуки",
    BookVisit: "Записатися на прийом",
    Career: "Кар'єра",
    PaymentMethods: "Зручні способи оплати:",
    ConstantTelemedicineCare: "Постійна телемедична допомога",
    OnlineMedConsultations:
      "Онлайн-консультації:<br /><span class='text-highlight'>Ми дбаємо про ваше здоровʼя</span>",
    HealthCare: "Ми дбаємо про ваше здоровʼя",
    HeaderHookText:
      "Потрібен <strong>е-рецепт</strong>, <strong>лікарняний</strong> або <strong>напрямок</strong>? Швидкі консультації доступні вже за <strong>15 хвилин</strong>.",
    BookNow: "Записатися зараз",
    MeetOurTeam:
      "Познайомтеся з нашою командою і дізнайтеся, чому нам варто довіряти.",
    WhoAreWe:
      "<strong>Хто ми?</strong><br /> KrukMed24 — це місце, де досвід лікарів поєднується із сучасними зручними рішеннями.",
    WhyUs:
      "<strong>Чому ми?</strong><br /> Ми розуміємо, наскільки цінні ваш час і спокій.",
    ServicesHeader: "Наші послуги",
    ServicesHeader2:
      "Дізнайтесь, які телемедичні рішення ми пропонуємо — швидко та безпечно",
    PricePrefix: "від",
    EPrescription: "Е-рецепт",
    EPrescriptionDescription:
      "Отримайте рецепт за 15 хвилин, не виходячи з дому.",
    SickLeave: "Лікарняний",
    SickLeaveDescription:
      "Швидке оформлення після онлайн-консультації з лікарем.",
    Referral: "Направлення",
    ReferralDescription:
      "Направлення на лабораторні чи інструментальні обстеження.",
    Teleconsultation: "Телепорада",
    TeleconsultationDescription:
      "Швидка розмова з лікарем про ваше самопочуття.",
    InternalConsultation: "Консультація терапевта",
    InternalConsultationDescription: "Порада від лікаря первинного контакту.",
    ContraceptivePills: "Протизаплідні таблетки",
    ContraceptivePillsDescription: "Е-рецепт на протизаплідні засоби.",
    MorningAfterPill: "Антиконцепція «наступного дня»",
    MorningAfterPillDescription:
      "Препарат для запобігання небажаній вагітності після статевого акту. Ефективність до 120 годин.",
    TreatmentContinuation: "Продовження лікування",
    TreatmentContinuationDescription: "Продовження рецепта або терапії.",
    PediatricConsultation: "Консультація педіатра",
    PediatricConsultationDescription:
      "Допомога для вашої дитини — без черг і стресу.",
    HowToUse: "Як скористатися е-консультацією?",
    HowToUseDescription:
      "Дізнайтеся, як працює онлайн-консультація на практиці.",
    HowToUseStep1: "1. Заповніть форму",
    HowToUseStep1Description:
      "Дайте відповіді на питання у формі консультації.",
    HowToUseStep2: "2. Оплатіть",
    HowToUseStep2Description:
      "Виберіть безпечний спосіб оплати та завершіть замовлення.",
    HowToUseStep3: "3. Очікуйте дзвінка від лікаря",
    HowToUseStep3Description:
      "Невдовзі після оформлення заявки з вами звʼяжеться наш лікар.",
    TestimonialsHeader: "Відгуки пацієнтів",
    TestimonialsDescription:
      "Дізнайтеся, що кажуть про нас ті, хто скористався нашими послугами.",
    Testimonial1:
      "Швидко, зручно й без виходу з дому! Е-рецепт надійшов за кілька хвилин.",
    Testimonial2:
      "Дуже професійний підхід лікарів. Рекомендую всім, хто цінує свій час.",
    Testimonial3: "Лікарняний я отримав у той же день. Послуга дійсно надійна.",
    FAQHeader: "Питання та відповіді (FAQ)",
    FAQDescription:
      "Знайдіть відповіді на найпоширеніші питання про наші послуги.",
    HowDoesOnlineConsultationWork: "Як проходить онлайн-консультація?",
    OnlineConsultationProcess:
      "Консультація проходить просто — після заповнення короткої форми лікар зв'язується з вами через чат, телефон або відеодзвінок. Зазвичай це займає кілька хвилин і є дуже зручним.",
    WillIGetPrescriptionAfterConsultation:
      "Чи отримаю я рецепт після консультації?",
    PrescriptionAfterConsultation:
      "Так, якщо лікар вважає це доцільним, він одразу видає е-рецепт після завершення консультації. Ви отримаєте код через SMS і електронну пошту — його можна реалізувати в будь-якій аптеці.",
    HowLongToWaitForDoctor: "Скільки часу чекати лікаря?",
    WaitingTimeForDoctor:
      "У більшості випадків відповідь надходить протягом 10–15 хвилин. У нічний час очікування може бути трохи довшим, але зазвичай не перевищує 30 хвилин.",
    CanIGetSickLeaveOnline: "Чи можу я отримати лікарняний онлайн?",
    SickLeaveOnline:
      "Так, якщо лікар визнає це необхідним. Електронний лікарняний (е-ZLA) автоматично надсилається до ZUS і вашого роботодавця. Друкувати чи передавати особисто нічого не потрібно.",
    ContactDescription: "Є запитання? Звʼяжіться з нами — ми доступні 24/7.",
    ContactUs:
      "Є питання щодо онлайн-консультації? Ми на зв'язку 7 днів на тиждень.",
    Phone: "Телефон:",
    Email: "E-mail:",
    CallNow: "Зателефонувати зараз",
    FooterDescription:
      "Сучасна медична допомога онлайн — без черг і зайвого стресу.",
    RegularContact: "Регулярний контакт з лікарем",
    RegularContactDescription:
      "Щомісячні розмови про ваше здоров'я і перебіг лікування.",
    RegularPrescriptions: "Поточні рецепти",
    RegularPrescriptionsDescription:
      "Рецепти, що видаються під час розмови — якщо є показання і немає протипоказань.",
    IndividualCare: "Індивідуальна опіка",
    IndividualCareDescription:
      "Лікар знає вашу історію хвороби і веде документацію.",
    NoLeavingHome: "Без виходу з дому",
    NoLeavingHomeDescription: "Телефонні або відеодзвінки — зручно і безпечно.",
    Month: "місяць",
    OrderCare: "Замовити опіку",
  },
};

const notifications = {
  pl: {
    male: [
      { name: "Michał Z.", action: "zarezerwował konsultację online" },
      { name: "Tomasz W.", action: "otrzymał skierowanie na badania" },
      { name: "Jan K.", action: "złożył zamówienie na teleporadę" },
      { name: "Piotr S.", action: "otrzymał receptę" },
      { name: "Adam R.", action: "zarezerwował wizytę u lekarza" },
      { name: "Krzysztof L.", action: "otrzymał E-zwolnienie" },
      { name: "Paweł M.", action: "złożył zamówienie na konsultację" },
      { name: "Jakub T.", action: "otrzymał skierowanie na badania" },
      { name: "Mateusz P.", action: "zarezerwował teleporadę" },
      { name: "Maciej K.", action: "otrzymał receptę na leki" },
    ],
    female: [
      { name: "Dominika D.", action: "otrzymała właśnie E-zwolnienie" },
      { name: "Anna K.", action: "otrzymała receptę" },
      { name: "Joanna P.", action: "zarezerwowała wizytę u lekarza" },
      { name: "Katarzyna M.", action: "złożyła zamówienie na teleporadę" },
      { name: "Magdalena Z.", action: "otrzymała skierowanie na badania" },
      { name: "Agnieszka L.", action: "zarezerwowała konsultację online" },
      { name: "Ewa R.", action: "otrzymała receptę na leki" },
      { name: "Paulina T.", action: "zarezerwowała teleporadę" },
      { name: "Sylwia P.", action: "otrzymała E-zwolnienie" },
      { name: "Monika K.", action: "złożyła zamówienie na konsultację" },
    ],
  },
  en: {
    male: [
      { name: "Michael Z.", action: "booked an online consultation" },
      { name: "Thomas W.", action: "received a referral for tests" },
      { name: "John K.", action: "placed an order for teleconsultation" },
      { name: "Peter S.", action: "received a prescription" },
      { name: "Adam R.", action: "booked a doctor's appointment" },
      { name: "Christopher L.", action: "received an E-sick leave" },
      { name: "Paul M.", action: "placed an order for consultation" },
      { name: "Jacob T.", action: "received a referral for tests" },
      { name: "Matthew P.", action: "booked a teleconsultation" },
      { name: "Mark K.", action: "received a prescription for medication" },
    ],
    female: [
      { name: "Dominika D.", action: "has just received an E-sick leave" },
      { name: "Anna K.", action: "received a prescription" },
      { name: "Joanna P.", action: "booked a doctor's appointment" },
      { name: "Catherine M.", action: "placed an order for teleconsultation" },
      { name: "Magdalena Z.", action: "received a referral for tests" },
      { name: "Agnes L.", action: "booked an online consultation" },
      { name: "Eve R.", action: "received a prescription for medication" },
      { name: "Pauline T.", action: "booked a teleconsultation" },
      { name: "Sylvia P.", action: "received an E-sick leave" },
      { name: "Monica K.", action: "placed an order for consultation" },
    ],
  },
  uk: {
    male: [
      { name: "Михайло З.", action: "забронював онлайн-консультацію" },
      { name: "Томас В.", action: "отримав направлення на обстеження" },
      { name: "Іван К.", action: "зробив замовлення на телепораду" },
      { name: "Петро С.", action: "отримав рецепт" },
      { name: "Адам Р.", action: "забронював прийом до лікаря" },
      { name: "Крістофер Л.", action: "отримав електронний лікарняний" },
      { name: "Павло М.", action: "зробив замовлення на консультацію" },
      { name: "Яків Т.", action: "отримав направлення на обстеження" },
      { name: "Матвій П.", action: "забронював телепораду" },
      { name: "Максим К.", action: "отримав рецепт на ліки" },
    ],
    female: [
      { name: "Домініка Д.", action: "щойно отримала електронний лікарняний" },
      { name: "Анна К.", action: "отримала рецепт" },
      { name: "Йоанна П.", action: "забронювала прийом до лікаря" },
      { name: "Катерина М.", action: "зробила замовлення на телепораду" },
      { name: "Магдалена З.", action: "отримала направлення на обстеження" },
      { name: "Агнеса Л.", action: "забронювала онлайн-консультацію" },
      { name: "Єва Р.", action: "отримала рецепт на ліки" },
      { name: "Павліна Т.", action: "забронювала телепораду" },
      { name: "Сильвія П.", action: "отримала електронний лікарняний" },
      { name: "Моніка К.", action: "зробила замовлення на консультацію" },
    ],
  },
};
