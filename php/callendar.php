<?php
require_once 'MedfileApi.php';

// Ustaw swój token API Medfile
$token = 'TWOJ_TOKEN_API'; // <-- tutaj wstaw swój token

// Odbierz parametry z zapytania JS (GET)
$year = isset($_GET['year']) ? intval($_GET['year']) : date('Y');
$month = isset($_GET['month']) ? intval($_GET['month']) : date('n');

// Pobierz wydarzenia z Medfile
$apiResponse = $medfile->getCalendarEvents($year, $month);

// Przerób dane na format oczekiwany przez callendar.js
// Oczekiwany format: tablica dni miesiąca, każdy: ['day'=>int, 'isSunday'=>bool, 'events'=>[ ['title'=>string, ...], ... ]]
$daysInMonth = date('t', strtotime(sprintf('%04d-%02d-01', $year, $month)));
$days = [];
for ($d = 1; $d <= $daysInMonth; $d++) {
    $dateStr = sprintf('%04d-%02d-%02d', $year, $month, $d);
    $dateObj = new DateTime($dateStr);
    $isSunday = $dateObj->format('w') == 0;
    $days[$d] = [
        'day' => $d,
        'isSunday' => $isSunday,
        'events' => []
    ];
}

// Przypisz wydarzenia do odpowiednich dni
if (isset($apiResponse['data']) && is_array($apiResponse['data'])) {
    foreach ($apiResponse['data'] as $event) {
        if (!empty($event['date'])) {
            $eventDate = DateTime::createFromFormat('Y-m-d', $event['date']);
            if ($eventDate && intval($eventDate->format('Y')) == $year && intval($eventDate->format('n')) == $month) {
                $dayNum = intval($eventDate->format('j'));
                $days[$dayNum]['events'][] = [
                    'title' => $event['title'] ?? 'Wydarzenie'
                ];
            }
        }
    }
}

// Zwróć dane jako tablicę indeksowaną (nie asocjacyjną)
header('Content-Type: application/json');
echo json_encode(array_values($days));
?>