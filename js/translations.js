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
    AboutUs: "O nas",
    Services: "Usługi",
    PriceList: "Cennik",
    Doctors: "Lekarze",
    Opinions: "Opinie",
    FAQ: "FAQ",
    Career: "Kariera",
    Contact: "Kontakt",
    BookVisit: "Umów wizytę",
    HeroTitle: "Twój Zaufany Partner w Medycynie",
    HeroText:"Krukmed24 to zespół lekarzy i specjalistów, którzy łączą wiedzę, doświadczenie i nowoczesne rozwiązania. Naszą misją jest zapewnienie Ci kompleksowej, bezpiecznej i skutecznej opieki medycznej — niezależnie od miejsca i czasu.",
    ExploreOffer: "Poznaj Ofertę",
    ContactUs: "Skontaktuj się",
    IntroText: " W <strong>Krukmed24</strong> wierzymy, że opieka medyczna powinna być prosta, szybka i dostępna zawsze wtedy, gdy jej potrzebujesz. Dlatego stworzyliśmy miejsce, gdzie bez wychodzenia z domu możesz skonsultować się z lekarzem, uzyskać <strong>skierowanie</strong>, czy <strong>L4</strong> – w kilka minut, bez stresu i bez kolejek.",
    WhyUsStrong: "Dlaczego warto nam zaufać?",
    ModernMedicine: "Nowoczesna medycyna",
    ModernMedicineDesc: "Nasz zespół to wykwalifikowani specjaliści z wieloletnimstażem.",
    ExperiencedDoctors: "Zespół doświadczonych lekarzy",
    ExperiencedDoctorsDesc: "Konsultacje dostępne już w 15 minut, bez wychodzenia zdomu.",
    DataSecurity: "Wszystko online – wygodnie i bezpiecznie",
    DataSecurityDesc: "Dbamy o Twoją prywatność, stosując najwyższe standardy ochrony.",
    PatientFocus: "Pacjent w Centrum",
    PatientFocusDesc: "Indywidualne podejście i pełne zrozumienie Twoich potrzeb.",
    IntroText2: "Krukmed24 to więcej niż platforma – to nowy standard troski o Twoje zdrowie. Bo zdrowie nie powinno czekac",
    ServicesHeader: "Nasze Usługi",
    ServicesHeaderDesc: "Sprawdź, jakie telemedyczne rozwiązania oferujemy – szybko i bezpiecznie.",
  },
  en: {
    
  },
  uk: {
    
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
