# Komponenty - props

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_2/02_Komponenty_props`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**



## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz komponent `Hello`. Do `props` przekazuje mu się imię (`name`) oraz nazwisko (`surname`).

Powinien on wyświetlać w elemencie `h1` napis "Hello, name surname" z odpowiednimi danymi. Wyrenderuj go na stronie podając w atrybutach do `props` swoje dane.

Zadanie wykonaj w **dwóch wersjach**:
- Najpierw komponentem w wersji funkcyjnej,
- Oraz tym samym komponentem w wersji zbudowanej z klasy ES6.

---

### Zadanie 0b - `js/task0b.js`
Stwórz komponent o nazwie `AddNumbers`. Do props przekaż mu liczbę A (`numberA`) oraz liczbę B (`numberB`).

Powinien on wyświetlać w elemencie `h1` **sumę tych dwóch liczb**. Wyrenderuj go na stronie podając w atrybutach do props przykładowe liczby.

Zadanie wykonaj w **dwóch wersjach**:

- Najpierw komponentem w wersji funkcyjnej,
- Oraz tym samym komponentem w wersji zbudowanej z klasy ES6.



## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

Stwórz komponent o nazwie `Sum`. Do `props` przekaż mu tablicę liczb (`numbers`).

Powinien on wyświetlać w elemencie `h1` sumę wszystkich podanych liczb. Możesz do tego wykorzystać znany Ci `reduce()`. Wyrenderuj go na stronie podając w atrybucie do `props` przykładową tablicę liczb.

Należy wykonać to zadanie w oparciu o komponent funkcyjny.

---

### Zadanie 2 - `js/task02.js`

Zmodyfikuj komponent `LikeBox` z poprzedniego działu (*Dzien_1/06_Podstawy_komponentow/js/task01.js*). Niech przyjmuje w `props` początkową liczbę polubień (`likes`). Wyrenderuj go na stronie podając w atrybucie do `props` przykładową liczbę polubień.

---

### Zadanie 3 - `js/task03.js`

Zmodyfikuj komponent `Menu` z poprzedniego działu (*Dzien_1/06_Podstawy_komponentow/js/task02.js*). Niech przyjmuje on w props tablicę obiektów z pozycjami menu (`menu`).

Obiekty mają być w takiej formie:
```js
{
  url: "adres_odnośnika",
  text: "tekst linku"
}
```

Używając `map()` stwórz z tych obiektów elementy `li`, które będą w głównym elemencie `ul`.

Wyrenderuj go na stronie podając w atrybucie do props następujący atrybut menu:
```js
[
  {
    url: "/",
    text: "Strona główna"
  },
  {
    url: "/blog",
    text: "Blog"
  },
  {
    url: "/cennik",
    text: "Cennik"
  },
  {
    url: "/kontakt",
    text: "Kontakt"
  }
]
```
