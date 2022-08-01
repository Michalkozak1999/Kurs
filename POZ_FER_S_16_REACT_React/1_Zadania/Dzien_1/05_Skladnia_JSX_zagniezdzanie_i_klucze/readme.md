# Składnia JSX - Zagnieżdżanie i Klucze

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_1/05_Skladnia_JSX_zagniezdzanie_i_klucze`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

W pliku `js/data/people.js` znajduje się tablica z obiektami reprezentującymi osobę. Zaimportuj ją do pliku `js/task0a.js` za pomocą:

```js
import People from "./data/people";
```

Używając metody `map()` stwórz z tablicy elementy `div` zawierające imię i nazwisko danej osoby. Nazwy tych właściwości obiektu znajdziesz w importowanym pliku.

Następnie za pomocą React wyrenderuj w elemencie o id `app` wszystkie wygenerowane elementy `div`.

**Pamiętaj o użyciu odpowiedniego klucza!**


## Zadania do samodzielnego wykonania

### Zadanie 1  - `js/task01.js`

W pliku `js/data/person.js` znajduje się obiekt reprezentujący osobę. Zaimportuj go do pliku `js/task01.js` za pomocą:

```js
import Person from "./data/person";
```

Celem tego zadania jest wyświetlenie na stronie wszystkich informacji zawartych w tym obiekcie. Struktura tego elementu powinna wyglądać następująco:

```HTML
<h1>{ tytuł + imię + nazwisko }</h1>
<span>{ wiek }</span>
```

Bezpośrednim rodzicem elementów `h1` i `span` ma być element o id `app`. Należy tutaj skorzystać z `React.Fragment`.

---

### Zadanie 2 - `js/task02.js`

W pliku `js/data/people.js` znajduje się tablica z obiektami reprezentującymi różne osoby. Zaimportuj ją do pliku `js/task02.js` za pomocą:

```js
import People from "./data/people";
```

Zadaniem jest przeiterowanie po całej tablicy obiektów, tak aby stworzyć tablicę z gotowymi elementami `JSX`. Każdy element tej nowo utworzonej tablicy powinien mieć strukturę zbliżoną do następującej:

```html
<div class="person">
    <img src={ avatar } />
    <div class="info">
        <h1>{ tytuł + imię + nazwisko }</h1>
        <p>{ bio }</p>
    </div>
</div>
```

Powyższy kod jest jedynie poglądowy. Pamiętaj, w jaki sposób powinna być przekazywana nazwa klasy `CSS` w tagach `JSX` oraz o odpowiednich zamknięciach znaczników. Nazwy tych właściwości obiektu znajdziesz w importowanym pliku.

Efektem powinny być elementy podobne do tego:
![](img/task02.png)

Następnie za pomocą React wyrenderuj w elemencie o id `app` element `<>`, w którym będą się wyświetlały wszystkie wygenerowane elementy `div`.

**Pamiętaj o użyciu odpowiedniego klucza!**
