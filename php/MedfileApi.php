<?php

class Medfile
{
    private $apiUrl = 'https://api.medfile.pl/v2/';
    private $apiToken;

    /**
     * Konstruktor klasy Medfile.
     * @param string $token Token autoryzacyjny API Medfile.
     */
    public function __construct($token)
    {
        $this->apiToken = $token;
    }

    /**
     * Logowanie użytkownika do Medfile.
     * @param string $email Adres e-mail użytkownika.
     * @param string $password Hasło użytkownika.
     * @return array Wynik logowania (token lub dane użytkownika).
     */
    public function login($email, $password)
    {
        $url = $this->apiUrl . 'auth/login';
        $postData = [
            'email' => $email,
            'password' => $password
        ];
        return $this->makeRequest($url, $postData, 'POST');
    }

    /**
     * Rejestracja nowego użytkownika w Medfile.
     * @param string $email Adres e-mail użytkownika.
     * @param string $password Hasło użytkownika.
     * @param string $firstName Imię użytkownika.
     * @param string $lastName Nazwisko użytkownika.
     * @return array Wynik rejestracji (dane użytkownika lub błąd).
     */
    public function register($email, $password, $firstName, $lastName)
    {
        $url = $this->apiUrl . 'auth/register';
        $postData = [
            'email' => $email,
            'password' => $password,
            'first_name' => $firstName,
            'last_name' => $lastName
        ];
        return $this->makeRequest($url, $postData, 'POST');
    }

    /**
     * Pobierz wydarzenia kalendarza dla danego miesiąca.
     * @param int $year Rok (np. 2025).
     * @param int $month Miesiąc (1-12).
     * @return array Tablica wydarzeń lub błąd.
     */
    public function getCalendarEvents($year, $month)
    {
        $startDate = sprintf('%04d-%02d-01', $year, $month);
        $endDate = date('Y-m-t', strtotime($startDate));
        $url = $this->apiUrl . "calendar/events?date_from=$startDate&date_to=$endDate";
        return $this->makeRequest($url);
    }

    /**
     * Umawianie wizyty w Medfile.
     * @param int $doctorId ID lekarza, u którego umawiana jest wizyta.
     * @param string $date Data wizyty w formacie YYYY-MM-DD.
     * @param string $time Godzina wizyty w formacie HH:MM.
     * @param int $patientId ID pacjenta, który rezerwuje wizytę.
     * @param int|null $serviceId (opcjonalnie) ID usługi medycznej (np. konsultacja, badanie).
     * @param string $note (opcjonalnie) Notatka do wizyty.
     * @return array Wynik rezerwacji (dane wizyty lub błąd).
     */
    public function bookVisit($doctorId, $date, $time, $patientId, $serviceId = null, $note = '')
    {
        $url = $this->apiUrl . 'calendar/events';
        $postData = [
            'doctor_id' => $doctorId,    // ID lekarza
            'date' => $date,             // Data wizyty (YYYY-MM-DD)
            'time' => $time,             // Godzina wizyty (HH:MM)
            'patient_id' => $patientId,  // ID pacjenta
            'note' => $note              // Notatka do wizyty
        ];
        if ($serviceId) {
            $postData['service_id'] = $serviceId; // ID usługi medycznej
        }
        return $this->makeRequest($url, $postData, 'POST');
    }

    /**
     * Wspólna metoda do wykonywania zapytań do API Medfile.
     * @param string $url Adres endpointu API.
     * @param array|null $data (opcjonalnie) Dane do wysłania (POST).
     * @param string $method (opcjonalnie) Metoda HTTP ('GET' lub 'POST').
     * @return array Wynik zapytania (tablica odpowiedzi).
     */
    private function makeRequest($url, $data = null, $method = 'GET')
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        $headers = [
            "Accept: application/json"
        ];
        if ($this->apiToken) {
            $headers[] = "Authorization: Bearer {$this->apiToken}";
        }

        if ($method === 'POST') {
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
            $headers[] = "Content-Type: application/json";
        }

        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        $result = curl_exec($ch);
        curl_close($ch);
        return json_decode($result, true);
    }
}
?>