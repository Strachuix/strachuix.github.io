# KrukMed24

**KrukMed24** to nowoczesna platforma telemedyczna umożliwiająca szybki kontakt z lekarzem, uzyskanie e-recepty, zwolnienia L4, skierowania oraz innych usług medycznych online. Strona dostępna jest w kilku językach i posiada responsywny interfejs.

---

## Funkcje

- Konsultacje online z lekarzami różnych specjalizacji
- Wystawianie e-recept, e-zwolnień, e-skierowań
- Formularz aplikacyjny do pracy
- Wielojęzyczność (PL, EN, UA)
- Responsywny design (działa na komputerach i telefonach)
- Bezpieczne przesyłanie danych

---

## Struktura katalogów

```
medycznecos/
│
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── translations.js
├── php/
│   └── mailer.php
├── index.html
├── carrer.html
├── footer.html
├── README.md
```

---

## Jak uruchomić projekt lokalnie?

### Wymagania

- Zainstalowany [PHP](https://www.php.net/downloads.php) (wersja 7.4 lub nowsza)
- Przeglądarka internetowa

### Uruchomienie serwera PHP

Otwórz terminal w głównym katalogu projektu i wpisz:

```
php -S localhost:8000
```

Domyślnie serwer wystartuje pod adresem: [http://localhost:8000](http://localhost:8000)

### Otwórz stronę w przeglądarce

Przejdź do [http://localhost:8000](http://localhost:8000) i korzystaj z aplikacji.

### Wysyłanie formularzy

Formularze (np. aplikacyjny) wysyłają dane do plików PHP w katalogu `php/`. Upewnij się, że serwer PHP działa, aby obsłużyć te żądania.

---

## Kontakt

Wszelkie pytania i zgłoszenia błędów prosimy kierować na adres e-mail podany na stronie kontaktowej.

---

&copy; 2025 KrukMed24. Wszelkie prawa zastrzeżone.