# Random User

## Opis aplikacji

Aplikacja "Random User" to prosta aplikacja webowa służąca do wyświetlania danych losowego użytkownika. Wykorzystuje nowoczesne technologie front-endowe, takie jak HTML, CSS oraz JavaScript, aby zapewnić dynamiczny i responsywny interfejs.

### Funkcje
- Wyświetlanie losowego użytkownika, w tym jego:
  - Zdjęcia profilowego.
  - Imienia i nazwiska.
  - Adresu e-mail.
- Responsywny design dostosowujący się do różnych rozmiarów ekranu.

### Struktura plików
- **index.html**: Główny plik HTML odpowiedzialny za strukturę dokumentu. Zawiera kontener `#root` dla dynamicznej zawartości aplikacji.
- **style.css**: Arkusz stylów odpowiadający za wygląd aplikacji, w tym kolorystykę, układ elementów oraz responsywność.
- **app.js**: Skrypt JavaScript odpowiedzialny za logikę aplikacji, w tym pobieranie danych użytkownika oraz ich dynamiczne wyświetlanie w interfejsie.

### Technologie
- **HTML**: Definicja struktury aplikacji.
- **CSS**: Personalizacja wyglądu aplikacji z użyciem zmiennych CSS i responsywnego projektowania.
- **JavaScript**: Logika aplikacji, w tym obsługa dynamicznych danych oraz integracja z zewnętrznymi API (np. do pobierania losowych użytkowników).

### Działanie
1. Po otwarciu strony, aplikacja ładuje dane losowego użytkownika.
2. Dane są wyświetlane w centralnym obszarze aplikacji (zdjęcie, imię, nazwisko, e-mail).
3. Interfejs dostosowuje się automatycznie do wielkości ekranu urządzenia użytkownika.

### Stylizacja
Stylizacja opiera się na ciemnej kolorystyce (dark mode) z akcentami w kolorach miętowych, co nadaje aplikacji nowoczesny wygląd. Elementy takie jak przyciski mają animowane efekty aktywacji, a układ dopasowuje się do mniejszych ekranów dzięki zastosowaniu media queries.

### Przykładowe funkcje CSS
- **Zmienna CSS**: `--clr-primary-300` definiuje kolor tekstu o zmniejszonej przejrzystości.
- **Media Queries**: Stylizacja dla ekranów o szerokości poniżej 400px, np. zmiana układu kontenera `main` na kolumnowy.

### Jak uruchomić
1. Pobierz pliki aplikacji.
2. Otwórz plik `index.html` w przeglądarce.
3. Aplikacja automatycznie załaduje dane losowego użytkownika.

### Wymagania
- Przeglądarka obsługująca ES6 (np. Google Chrome, Firefox, Edge).
- Połączenie z internetem, jeśli aplikacja korzysta z zewnętrznych API.
