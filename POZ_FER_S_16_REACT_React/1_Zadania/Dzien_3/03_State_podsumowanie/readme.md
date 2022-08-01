# State - podsumowanie

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_3/03_State_podsumowanie`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`
Stwórz komponent `Clock`, który przechowuje w `state` aktualną datę.

Dodaj do swojego komponentu `interval`, który co 1 sekundę aktualizuje datę w state na aktualną. Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia oraz aby zwolnić zasoby.

Stwórz dwa subkomponenty:

1. `ClockTime` - przyjmuje przez props datę (`date`) i wyświetla samą godzinę w elemencie h1 za pomocą `Date.toLocaleTimeString()`.

2. `ClockDate` - przyjmuje przez props datę (`date`) i wyświetla samą datę w elemencie h1 za pomocą `Date.toLocaleDateString()`.

Główny komponent - `Clock` renderuje odpowiednio dwa subkomponenty przekazując im aktualną datę ze swojego state.

Pamiętaj aby zbudować także główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.


## Zadania do samodzielnego wykonania

### Zadanie 01 - `js/task01.js`

Modyfikacja zadania z zegarem - kompozycja: **Przekopiuj wykonane zadanie z wykładowcą do pliku `js/task01.js` i wykonuj je w tamtym miejscu.**


Zmodyfikuj komponenty `ClockTime` i `ClockDate` z zadania z wykładowcą.

Zwiększ podział tych komponentów na następujące:

- `ClockTimeHour` - wyświetla godzinę za pomocą `Date.getHours()`
- `ClockTimeMinute` - wyświetla minuty za pomocą `Date.getMinutes()`
- `ClockTimeSecond` - wyświetla sekundy za pomocą `Date.getSeconds()`
- `ClockDateYear` - wyświetla rok za pomocą `Date.getFullYear()`
- `ClockDateMonth` - wyświetla miesiąc za pomocą `Date.getMonth()` (uwaga, ta metoda zwraca 0 jako styczeń, 1 jako luty itd. Dodaj 1 aby wyświetlić prawidłowo)
- `ClockDateDay` - wyświetla dzień za pomocą `Date.getDate()`

Zmodyfikuj `ClockTime` i `ClockDate` tak aby korzystały z nowych subkomponentów.
