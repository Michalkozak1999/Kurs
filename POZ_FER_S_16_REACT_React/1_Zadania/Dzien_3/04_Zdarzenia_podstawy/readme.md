# Zdarzenia - podstawy

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_3/04_Zdarzenia_podstawy`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz komponent o nazwie `Buttons` z 3 przyciskami z napisem "Klik!".

- Po kliknięciu na pierwszy przycisk wyświetl w konsoli "Pierwszy przycisk kliknięty".

- Po kliknięciu na drugi przycisk wywołaj dwruktonie funkcję `prompt()`, służącą do pobrania od użytkownika liczby A i B. W konsoli wyświetlcie wynik potęgowania tych dwóch liczb.

- Po kliknięciu na trzeci przycisk wyświetl w konsoli szerokość i wysokość ekranu (z obiektu `window`).


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

Stwórz komponent z przyciskiem o nazwie `ButtonTest`. Po **najechaniu** na przycisk wypisz w konsoli: "Najechano na przycisk!".

Zadanie spróbuj rozwiązać za pomocą komponentu klasowego i funkcyjnego.

---

### Zadanie 2 - `js/task02.js`

Stwórz komponent z elementem `div`.

Zareaguj na zdarzenia: kliknięcia, najechania, opuszczenia kursorem tego elementu - wypisując odpowiednią informację w konsoli.
