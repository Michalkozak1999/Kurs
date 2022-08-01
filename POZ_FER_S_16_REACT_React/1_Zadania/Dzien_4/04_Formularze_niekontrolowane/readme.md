# Fromularze niekontrolowane

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_4/04_Formularze_niekontrolowane`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz komponent `GivePassword`. Przyjmuje przez props atrybut `pwd`.

Ma renderować element `div`, a w nim elementy `input type="password"` i `button`.

Po kliknięciu na przycisk pobierz wartość z elementu `input`. Jeżeli jest taka sama jak `pwd` z props, to wyświetlaj zamiast `input` i `button` od teraz element `h1` z tekstem "I'm in.".
