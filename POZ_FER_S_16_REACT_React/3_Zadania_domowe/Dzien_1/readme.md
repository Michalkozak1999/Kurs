# Dzień 1 - zadania domowe

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `3_Zadania_domowe/Dzien_1`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

---

### Zadanie 1 - `js/task01.js`

Po załadowaniu się strony wyświetl użytkownikowi dwa razy `prompt(text)`, zachęcając do podania imienia i wieku. Odpowiedź przechowuj w zmiennej.

Następnie za pomocą React wyrenderuj w elemencie o id `app` element `div`, w którym będzie się wyświetlało "`{imię}` ma `{wiek}` lat" z odpowiednimi danymi.

---

### Zadanie 2 - `js/task02.js`

Stwórz tablicę reprezentującą 5 przykładowych kolorów i przechowaj ją w zmiennej.

Następnie za pomocą React wyrenderuj w elemencie o id `app` element `div`, w którym będą się wyświetlały wszystkie kolory w jendej linii, np.

```html
<div>Niebieski, Zielony, Żółty</div>
```

Wszystkie operacje wykonuj bezpośrednio w wyrażeniu w danym tagu JSX. Przyda Ci się metoda `join(separator)`.

---

### Zadanie 3 - `js/task03.js`

W kodzie stwórz zmienną z dowolym rozmiarem (poprawny rozmiar CSS), np.:

```JavaScript
const size = "500px";
```

Następnie za pomocą React wyrenderuj w elemencie o id `app` element `div` z następującym stylem:

- Szerokość: ta ze zmiennej size,
- Wysokość: ta ze zmiennej size,
- Kolor: niebieski.

Wszystkie operacje wykonuj bezpośrednio w wyrażeniu w danym tagu JSX. Każdorazowa zmiana tej zmiennej powinna zmienić wielkość `div`-a.
