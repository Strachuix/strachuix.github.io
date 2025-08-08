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
    HeroText:
      "Krukmed24 to zespół lekarzy i specjalistów, którzy łączą wiedzę, doświadczenie i nowoczesne rozwiązania. Naszą misją jest zapewnienie Ci kompleksowej, bezpiecznej i skutecznej opieki medycznej — niezależnie od miejsca i czasu.",
    ExploreOffer: "Poznaj Ofertę",
    ContactUs: "Skontaktuj się",
    IntroText:
      "W <strong>Krukmed24</strong> wierzymy, że opieka medyczna powinna być prosta, szybka i dostępna zawsze wtedy, gdy jej potrzebujesz. Dlatego stworzyliśmy miejsce, gdzie bez wychodzenia z domu możesz skonsultować się z lekarzem, uzyskać <strong>skierowanie</strong>, czy <strong>L4</strong> – w kilka minut, bez stresu i bez kolejek.",
    IntroShortText:
      "Krukmed24 to więcej niż platforma – to nowy standard troski o Twoje zdrowie. Bo zdrowie nie powinno czekać.",
    WhyUsStrong: "Dlaczego warto nam zaufać?",
    ModernMedicine: "Nowoczesna medycyna",
    ModernMedicineDesc:
      "Nasz zespół to wykwalifikowani specjaliści z wieloletnim stażem.",
    ExperiencedDoctors: "Zespół doświadczonych lekarzy",
    ExperiencedDoctorsDesc:
      "Konsultacje dostępne już w 15 minut, bez wychodzenia z domu.",
    DataSecurity: "Wszystko online – wygodnie i bezpiecznie",
    DataSecurityDesc:
      "Dbamy o Twoją prywatność, stosując najwyższe standardy ochrony.",
    PatientFocus: "Pacjent w Centrum",
    PatientFocusDesc:
      "Indywidualne podejście i pełne zrozumienie Twoich potrzeb.",
    ServicesHeader: "Nasze usługi",
    ServicesHeaderDesc:
      "Sprawdź, jakie telemedyczne rozwiązania oferujemy – szybko i bezpiecznie.",
    PaymentMethods: "Wygodne formy płatności:",
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
    Price: "Cena:",
    Month: "miesiąc",
    HowToUse: "Jak korzystać z e-konsultacji?",
    HowToUseDescription:
      "Dowiedz się, jak prosto i szybko możesz skorzystać z naszych usług telemedycznych w kilku krokach.",
    HowToUseStep1: "Wypełnij formularz",
    HowToUseStep1Description:
      "Odpowiedz na pytania zawarte w formularzu konsultacji. Zbierzemy niezbędne informacje do Twojej wizyty.",
    HowToUseStep2: "Opłać wizytę",
    HowToUseStep2Description:
      "Wybierz jedną z naszych bezpiecznych i wygodnych form płatności online.",
    HowToUseStep3: "Czekaj na kontakt od lekarza",
    HowToUseStep3Description:
      "Nasz lekarz skontaktuje się z Tobą telefonicznie w umówionym terminie lub krótko po otrzymaniu zamówienia.",
    BookNowCTA: "Umów wizytę teraz",
    TestimonialsHeader: "Opinie pacjentów",
    TestimonialsDescription:
      "Zobacz, co mówią o nas osoby, które skorzystały z naszych usług.",
    Testimonial1:
      "Szybko, sprawnie i bez wychodzenia z domu. Recepta przyszła w kilka minut.",
    Testimonial2:
      "Bardzo profesjonalne podejście lekarzy. Polecam każdemu, kto ceni sobie czas.",
    Testimonial3:
      "Zwolnienie L4 otrzymałem tego samego dnia. Usługa naprawdę godna zaufania.",
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
    ContactHeader: "Kontakt",
    ContactDescription:
      "Masz pytania? Skontaktuj się z nami – jesteśmy dostępni 24/7.",
    Phone: "Telefon:",
    Email: "E-mail:",
    CallNow: "Zadzwoń teraz",
    FooterDescription: "Twój Zaufany Partner w Medycynie.",
    FooterCredits:
      "&copy; 2025. Projekt i realizacja: Jan Jędrusiak, Stanisław Pokropek.",
    PrivacyPolicyLink: "Polityka prywatności",
    TermsLink: "Regulamin",
    DoctorDisclaimer:
      "Uwaga: Lekarz udzielający świadczenia w ramach telemedycyny ma prawo odmówić realizacji usługi (np. wystawienia recepty, zwolnienia lekarskiego, skierowania itp.), jeśli na podstawie przeprowadzonego wywiadu i oceny stanu zdrowia pacjenta uzna, że brak jest medycznych wskazań do jej wykonania. Decyzja lekarza podejmowana jest każdorazowo zgodnie z aktualną wiedzą medyczną i jego niezależną oceną kliniczną. Zakup usługi nie gwarantuje jej realizacji w formie oczekiwanej przez pacjenta. Ostateczna decyzja należy do lekarza i zależy od medycznych wskazań.",

    EPrescription: "E-recepta",
    EPrescriptionDescription:
      "Kontynuacja dotychczasowego leczenia. Przedłużenie ważności recepty. Wystawienie e-recepty poprzez dobieranie przez lekarza właściwego leku.",
    ECertificate: "E-zaświadczenie",
    ECertificateDescription:
      "Zaświadczenie o stanie zdrowia dla pracodawcy, szkoły lub uczelni, w pliku PDF.",
    SickLeave: "Zwolnienie L4",
    SickLeaveDescription:
      "Szybkie zwolnienie po konsultacji z lekarzem online.",
    EReferral: "E-Skierowanie",
    EReferralDescription:
      "Skierowanie na płatne badania diagnostyczne lub obrazowe. Na CITO.",
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
    PricePrefix: "Cena:",
    ServicesHeader2: "Zobacz co mówią osoby które skorzystały z naszych usług",
    FAQHeader: "FAQ (Najczęściej zadawane pytania)",
    FAQDescription:
      "Znajdź odpowiedzi na najczęściej pojawiające się pytania dotyczące naszych usług.",
      TelemedCareHeader: "Stała opieka telemedyczna",
    TelemedCareDescription: "Twój lekarz na stałe - bez wychodzenia z domu.",
  },
  en: {
    MainPage: "Home",
    AboutUs: "About Us",
    Services: "Services",
    PriceList: "Pricing",
    Doctors: "Doctors",
    Opinions: "Testimonials",
    FAQ: "FAQ",
    Career: "Career",
    Contact: "Contact",
    BookVisit: "Book an Appointment",
    HeroTitle: "Your Trusted Partner in Medicine",
    HeroText:
      "Krukmed24 is a team of doctors and specialists who combine knowledge, experience, and modern solutions. Our mission is to provide you with comprehensive, safe, and effective medical care — anytime, anywhere.",
    ExploreOffer: "Explore Offer",
    ContactUs: "Contact Us",
    IntroText:
      "At <strong>Krukmed24</strong>, we believe that medical care should be simple, fast, and always available when you need it. That's why we created a place where you can consult a doctor, get a <strong>referral</strong>, or <strong>sick leave</strong> — in just a few minutes, stress-free and without queues.",
    IntroShortText:
      "Krukmed24 is more than just a platform — it's a new standard of care for your health. Because health shouldn't wait.",
    WhyUsStrong: "Why Trust Us?",
    ModernMedicine: "Modern Medicine",
    ModernMedicineDesc:
      "Our team consists of qualified specialists with years of experience.",
    ExperiencedDoctors: "Experienced Doctors",
    ExperiencedDoctorsDesc:
      "Consultations available within 15 minutes, without leaving home.",
    DataSecurity: "Everything Online – Convenient and Secure",
    DataSecurityDesc:
      "We care about your privacy by applying the highest security standards.",
    PatientFocus: "Patient-Centered Care",
    PatientFocusDesc:
      "Individual approach and full understanding of your needs.",
    ServicesHeader: "Our Services",
    ServicesHeaderDesc: "Discover our fast and secure telemedical solutions.",
    PaymentMethods: "Convenient Payment Methods:",
    RegularContact: "Regular Contact with a Doctor",
    RegularContactDescription:
      "Monthly conversation about your health and treatment progress.",
    RegularPrescriptions: "Prescriptions on Demand",
    RegularPrescriptionsDescription:
      "Prescriptions issued during the conversation – if indicated and without contraindications.",
    IndividualCare: "Individual Care",
    IndividualCareDescription:
      "The doctor knows your medical history and keeps documentation.",
    NoLeavingHome: "No Need to Leave Home",
    NoLeavingHomeDescription: "Phone or video calls – convenient and secure.",
    Price: "Price:",
    Month: "month",
    HowToUse: "How to Use E-Consultations?",
    HowToUseDescription:
      "Learn how simple and fast it is to use our telemedical services in a few steps.",
    HowToUseStep1: "Fill Out the Form",
    HowToUseStep1Description:
      "Answer the questions in the consultation form. We'll gather the necessary information for your visit.",
    HowToUseStep2: "Pay for the Visit",
    HowToUseStep2Description:
      "Choose one of our secure and convenient online payment methods.",
    HowToUseStep3: "Wait for the Doctor's Contact",
    HowToUseStep3Description:
      "Our doctor will contact you by phone at the scheduled time or shortly after receiving the order.",
    BookNowCTA: "Book an Appointment Now",
    TestimonialsHeader: "Patient Testimonials",
    TestimonialsDescription:
      "See what people who used our services are saying.",
    Testimonial1:
      "Fast, efficient, and without leaving home. The prescription arrived in minutes.",
    Testimonial2:
      "Very professional approach by doctors. I recommend it to everyone who values their time.",
    Testimonial3:
      "I received sick leave on the same day. The service is truly trustworthy.",
    HowDoesOnlineConsultationWork: "How Does Online Consultation Work?",
    OnlineConsultationProcess:
      "The consultation is simple – after filling out a short form, the doctor contacts you via chat, phone, or video call. It usually takes a few minutes, and the whole process is quick and convenient.",
    WillIGetPrescriptionAfterConsultation:
      "Will I Get a Prescription After the Consultation?",
    PrescriptionAfterConsultation:
      "Yes, if the doctor deems it necessary, they issue an e-prescription immediately after the consultation. You receive the prescription code via SMS and email – you can redeem it at any pharmacy.",
    HowLongToWaitForDoctor: "How Long Do I Wait for the Doctor?",
    WaitingTimeForDoctor:
      "In most cases, the doctor responds within 10–15 minutes. At night, the time may be slightly longer, but it usually does not exceed 30 minutes.",
    CanIGetSickLeaveOnline: "Can I Get Sick Leave Online?",
    SickLeaveOnline:
      "Yes, if the doctor determines the need for sick leave, the e-ZLA is automatically sent to ZUS and your employer. You don't need to print or deliver anything personally.",
    ContactHeader: "Contact",
    ContactDescription: "Have questions? Contact us — we are available 24/7.",
    Phone: "Phone:",
    Email: "Email:",
    CallNow: "Call Now",
    FooterDescription: "Your Trusted Partner in Medicine.",
    FooterCredits:
      "&copy; 2025. Project and implementation: Jan Jędrusiak, Stanisław Pokropek.",
    PrivacyPolicyLink: "Privacy Policy",
    TermsLink: "Terms and Conditions",
    DoctorDisclaimer:
      "Note: The doctor providing telemedicine services has the right to refuse to perform the service (e.g., issuing a prescription, sick leave, referral, etc.) if, based on the interview and assessment of the patient's health condition, they determine that there are no medical indications for its execution. The doctor's decision is made each time in accordance with current medical knowledge and their independent clinical assessment. Purchasing the service does not guarantee its execution in the form expected by the patient. The final decision belongs to the doctor and depends on medical indications.",

    EPrescription: "E-prescription",
    EPrescriptionDescription:
      "Continuation of previous treatment. Extension of prescription validity. Issuance of an e-prescription by selecting the appropriate medication by the doctor.",
    ECertificate: "E-certificate",
    ECertificateDescription:
      "Health certificate for employer, school, or university, in PDF format.",
    SickLeave: "Sick Leave",
    SickLeaveDescription:
      "Quick leave after an online consultation with a doctor.",
    EReferral: "E-Referral",
    EReferralDescription:
      "Referral for paid diagnostic or imaging tests. Urgent (CITO).",
    Teleconsultation: "Teleconsultation",
    TeleconsultationDescription:
      "Quick conversation with a doctor about your health.",
    InternalConsultation: "Internal Consultation",
    InternalConsultationDescription: "Advice from a primary care physician.",
    ContraceptivePills: "Contraceptive Pills",
    ContraceptivePillsDescription: "E-prescription for contraceptive pills.",
    MorningAfterPill: "Morning After Pill",
    MorningAfterPillDescription:
      "Medication used to prevent unwanted pregnancy after intercourse. Effective up to 120 hours after intercourse.",
    TreatmentContinuation: "Treatment Continuation",
    TreatmentContinuationDescription:
      "Extension of prescription or continuation of therapy.",
    PediatricConsultation: "Pediatric Consultation",
    PediatricConsultationDescription:
      "Help for your child — stress-free and without queues.",
    PricePrefix: "Price:",
    ServicesHeader2: "See what people who used our services are saying",
    FAQHeader: "FAQ (Frequently Asked Questions)",
    FAQDescription:
      "Find answers to the most frequently asked questions about our services.",
    TelemedCareHeader: "Constant Telemed Care",
    TelemedCareDescription: "Your doctor at home - without leaving your house.",
  },
  uk: {
    MainPage: "Головна",
    AboutUs: "Про нас",
    Services: "Послуги",
    PriceList: "Ціни",
    Doctors: "Лікарі",
    Opinions: "Відгуки",
    FAQ: "Питання та відповіді",
    Career: "Кар'єра",
    Contact: "Контакт",
    BookVisit: "Записатися на прийом",
    HeroTitle: "Ваш Надійний Партнер у Медицини",
    HeroText:
      "Krukmed24 — це команда лікарів та спеціалістів, які поєднують знання, досвід та сучасні рішення. Наша місія — забезпечити вам комплексну, безпечну та ефективну медичну допомогу — у будь-який час та в будь-якому місці.",
    ExploreOffer: "Дізнатися більше",
    ContactUs: "Зв'язатися з нами",
    IntroText:
      "У <strong>Krukmed24</strong> ми віримо, що медична допомога повинна бути простою, швидкою та доступною завжди, коли вона потрібна. Тому ми створили місце, де без виходу з дому ви можете проконсультуватися з лікарем, отримати <strong>направлення</strong> або <strong>лікарняний</strong> — за кілька хвилин, без стресу та черг.",
    WhyUsStrong: "Чому нам варто довіряти?",
    ModernMedicine: "Сучасна медицина",
    ModernMedicineDesc:
      "Наша команда складається з кваліфікованих спеціалістів з багаторічним досвідом.",
    ExperiencedDoctors: "Досвідчені лікарі",
    ExperiencedDoctorsDesc:
      "Консультації доступні вже за 15 хвилин, без виходу з дому.",
    DataSecurity: "Все онлайн — зручно та безпечно",
    DataSecurityDesc:
      "Ми дбаємо про вашу конфіденційність, застосовуючи найвищі стандарти захисту.",
    PatientFocus: "Пацієнт у центрі уваги",
    PatientFocusDesc: "Індивідуальний підхід та повне розуміння ваших потреб.",
    ServicesHeader: "Наші послуги",
    ServicesHeaderDesc:
      "Дізнайтеся про наші швидкі та безпечні телемедичні рішення.",
    PaymentMethods: "Зручні способи оплати:",
    RegularContact: "Регулярний контакт з лікарем",
    RegularContactDescription:
      "Щомісячна розмова про ваше здоров'я та хід лікування.",
    RegularPrescriptions: "Рецепти на вимогу",
    RegularPrescriptionsDescription:
      "Рецепти видаються під час розмови — якщо є показання та немає протипоказань.",
    IndividualCare: "Індивідуальний догляд",
    IndividualCareDescription:
      "Лікар знає вашу історію хвороби та веде документацію.",
    NoLeavingHome: "Без виходу з дому",
    NoLeavingHomeDescription:
      "Телефонні або відеодзвінки — зручно та безпечно.",
    Price: "Ціна:",
    Month: "місяць",
    HowToUse: "Як користуватися е-консультаціями?",
    HowToUseDescription:
      "Дізнайтеся, як просто та швидко скористатися нашими телемедичними послугами у кілька кроків.",
    HowToUseStep1: "Заповніть форму",
    HowToUseStep1Description:
      "Відповідайте на запитання у формі консультації. Ми зберемо необхідну інформацію для вашого візиту.",
    HowToUseStep2: "Оплатіть візит",
    HowToUseStep2Description:
      "Виберіть один із наших безпечних та зручних способів оплати онлайн.",
    HowToUseStep3: "Очікуйте на контакт від лікаря",
    HowToUseStep3Description:
      "Наш лікар зв'яжеться з вами телефоном у призначений час або незабаром після отримання замовлення.",
    BookNowCTA: "Записатися на прийом зараз",
    TestimonialsHeader: "Відгуки пацієнтів",
    TestimonialsDescription:
      "Дізнайтеся, що кажуть про нас ті, хто скористався нашими послугами.",
    Testimonial1:
      "Швидко, ефективно та без виходу з дому. Рецепт прийшов за кілька хвилин.",
    Testimonial2:
      "Дуже професійний підхід лікарів. Рекомендую кожному, хто цінує свій час.",
    Testimonial3:
      "Лікарняний я отримав того ж дня. Послуга дійсно заслуговує на довіру.",
    HowDoesOnlineConsultationWork: "Як проходить онлайн-консультація?",
    OnlineConsultationProcess:
      "Консультація проходить просто — після заповнення короткої форми лікар зв'язується з вами через чат, телефон або відеодзвінок. Це зазвичай займає кілька хвилин, а весь процес є швидким та зручним.",
    WillIGetPrescriptionAfterConsultation:
      "Чи отримаю я рецепт після консультації?",
    PrescriptionAfterConsultation:
      "Так, якщо лікар вважатиме це за необхідне, він негайно виписує електронний рецепт після консультації. Ви отримуєте код рецепта через SMS та електронну пошту – ви можете реалізувати його в будь-якій аптеці.",
    HowLongToWaitForDoctor: "Скільки часу чекати лікаря?",
    WaitingTimeForDoctor:
      "У більшості випадків лікар відповідає протягом 10–15 хвилин. У нічний час це може зайняти трохи більше часу, але зазвичай не перевищує 30 хвилин.",
    CanIGetSickLeaveOnline: "Чи можу я отримати лікарняний онлайн?",
    SickLeaveOnline:
      "Так, якщо лікар визначить необхідність у лікарняному, електронний лікарняний автоматично надсилається до ЗУС та вашого роботодавця. Вам не потрібно нічого друкувати або особисто доставляти.",
    ContactHeader: "Контакт",
    ContactDescription: "Є питання? Зв'яжіться з нами — ми доступні 24/7.",
    Phone: "Телефон:",
    Email: "Електронна пошта:",
    CallNow: "Дзвоніть зараз",
    FooterDescription: "Ваш Надійний Партнер у Медицини.",
    FooterCredits:
      "&copy; 2025. Проект та реалізація: Ян Єдрусяк, Станіслав Покропек.",
    PrivacyPolicyLink: "Політика конфіденційності",
    TermsLink: "Умови та положення",
    DoctorDisclaimer:
      "Примітка: Лікар, який надає послуги телемедицини, має право відмовити у виконанні послуги (наприклад, виписування рецепта, лікарняного, направлення тощо), якщо на підставі опитування та оцінки стану здоров'я пацієнта він визначить, що немає медичних показань для її виконання. Рішення лікаря приймається кожного разу відповідно до актуальних медичних знань та його незалежної клінічної оцінки. Купівля послуги не гарантує її виконання у формі, очікуваній пацієнтом. Остаточне рішення приймає лікар і залежить від медичних показань.",

    EPrescription: "Е-рецепт",
    EPrescriptionDescription:
      "Продовження попереднього лікування. Продовження терміну дії рецепта. Виписка е-рецепта шляхом підбору лікарем відповідного препарату.",
    ECertificate: "Е-сертифікат",
    ECertificateDescription:
      "Сертифікат про стан здоров'я для роботодавця, школи або університету у форматі PDF.",
    SickLeave: "Лікарняний",
    SickLeaveDescription:
      "Швидке оформлення лікарняного після онлайн-консультації з лікарем.",
    EReferral: "Е-направлення",
    EReferralDescription:
      "Направлення на платні діагностичні або візуалізаційні дослідження. Терміново (CITO).",
    Teleconsultation: "Телепорада",
    TeleconsultationDescription: "Швидка розмова з лікарем про ваше здоров'я.",
    InternalConsultation: "Консультація терапевта",
    InternalConsultationDescription: "Порада від лікаря первинної ланки.",
    ContraceptivePills: "Протизаплідні таблетки",
    ContraceptivePillsDescription: "Е-рецепт на протизаплідні таблетки.",
    MorningAfterPill: "Антиконцепція 'наступного дня'",
    MorningAfterPillDescription:
      "Препарат, що використовується для запобігання небажаній вагітності після статевого акту. Ефективність до 120 годин після статевого акту.",
    TreatmentContinuation: "Продовження лікування",
    TreatmentContinuationDescription:
      "Продовження рецепта або продовження терапії.",
    PediatricConsultation: "Педіатрична консультація",
    PediatricConsultationDescription:
      "Допомога для вашої дитини — без стресу та черг.",
    PricePrefix: "Ціна:",
    ServicesHeader2: "Дізнайтеся, що кажуть люди, які скористалися нашими послугами",
    FAQHeader: "Питання та відповіді (FAQ)",
    FAQDescription:
      "Знайдіть відповіді на найчастіше задавані питання про наші послуги.",
    TelemedCareHeader: "Постійна телемедична допомога",
    TelemedCareDescription: "Ваш лікар вдома - без виходу з дому.",
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
