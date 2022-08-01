# Składnia JSX - Atrybuty

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_1/04_Skladnia_JSX_atrybuty`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**



## Zadania rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Przechowaj adres zdjęcia w zmiennej dodając poniższy kod:

 ```js
const imageUrl = "https://images.pexels.com/photos/1061588/pexels-photo-1061588.jpeg";
```

Następnie za pomocą React wyrenderuj w elemencie o id `app` element `img`, którego atrybut `src` ustawisz w JSX na wartość zmiennej `imageUrl`.

Pamiętaj o zamknięciu tagu `img`.

---

### Zadanie 0b - `js/task0b.js`

W pliku `js/task0b.js` znajduje się funkcja `genNumber()`, która generuje pseudolosowe liczby z zakresu 1-10. Za jej pomocą wygeneruj liczbę A i liczbę B.

Następnie za pomocą funkcji `prompt()` zapytaj użytkownika, jaki jest wynik dodawania tych dwóch liczb. **Wyświetl w komunikacie prompt-a obie liczy żeby użytkownik miał szansę je zobaczyć.**

Za pomocą React wyrenderuj w elemencie o id `app` element `div`. Jeżeli odpowiedź użytkownika była poprawna, w nowo utworzonym elemencie `div` wyświetl informację `Odpowiedź poprawna` i ustaw styl tła na **zielony**. Jeżeli odpowiedź była niepoprawna, to element `div` ma zawierać informację `Odpowiedź błędna` oraz ma mieć styl tła **czerwony**.


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

W pliku wymienionym powyżej znajdują się trzy zmienne (`redDiv`, `greenDiv`, `blueDiv`) zawierające strukturę JSX pustych elementów `div`.

Ustaw wszystkim trzem div-om wysokość na ```100px```, a każdemu z nich ustaw kolor tła odpowiadający jego nazwie. **Pamiętaj o użyciu odpowiedniej nazwy stylu**.

Spróbuj wykonać to zadanie z pomocniczą zmienną (po jednej dla każdego z div-ów), a następnie skrótowym zapisem bezpośrednio w każdym tagu JSX.

---

### Zadanie 2 - `js/task02.js`

Za pomocą `prompt()` zapytaj użytkownika o kolor ramki i przechowaj odpowiedź w zmiennej.

Sprawdź czy odpowiedź to `red`, `green` lub `blue` (możesz wykorzystać metodę `indexOf()`). Jeżeli odpowiedź nie zgadza się z naszym warunkiem, to wyrenderuj w elemencie o id `app` element `div` z napisem "Nieprawidłowy kolor".

Jeżeli podany kolor był poprawny, to za pomocą React wyrenderuj w elemencie o id `app` element `div`, ze stylami ustawionymi na:

- Szerokość: `100px`
- Wysokość: `100px`
- Grubość ramki: `5px`
- Styl ramki: `solid`
- Kolor ramki: **ten podany przez użytkownika**
