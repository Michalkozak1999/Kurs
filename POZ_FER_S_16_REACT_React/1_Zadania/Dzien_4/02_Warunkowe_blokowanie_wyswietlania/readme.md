# Warunkowe blokowanie wyświetlania

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_4/02_Warunkowe_blokowanie_wyswietlania`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz komponent `SecretStuff`. Przyjmuje on z props `password`, `correctPassword` oraz `secret`.

Jeżeli atrybuty `password` i `correctPassword` były takie same, to wyświetlany jest `div`, a w nim to, co znajduje się w `secret`. W przeciwnym wypadku zablokuj renderowanie.

**PS. To jedynie przykład. NIGDY nie stosuj w ten sposó blokowania ani sprawdzania poufnych informacji. Jak łatwo się domyślić, takie dane NIE są ukryte.**


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

Stwórz komponent `AccountData`. Niech przechowuje w stanie wewnętrznym pod nazwą `data` wartość `false`.

W pliku `js/data/fakeAPI.js` znajduje się obiekt pozwalający udawać zapytanie do zewnętrznego API. Zaimportujcie go do pliku `js/task01.js`:

```js
import FakeAPI from "./data/fakeAPI.js";
```

Jego użycie wygląda następująco:
```js
FakeAPI.then( data => {
  // w zmiennej data mamy dostęp do konkretnych danych
});
```

Wywołanie to potrwa kilka sekund, następnie zostanie wywołana funkcja `callback`, przekazana jako parametr do metody `then()`. Jako argument zostanie do callback przekazana tablica z danymi. Sprawdźcie w konsoli, jak wyglądają te dane żeby wiedzieć, jak je później zrenderować.

Zaraz po zamontowaniu komponentu wywołaj `FakeAPI.then( callback )`. W callbacku daj funkcję, która zmieni stan wewnętrzny data na dane otrzymane z API.

Dopóki w `this.state.data` jest `false`, **zablokuj renderowanie komponentu**.

Jeżeli posiadasz dane, to wygeneruj je w formie tabeli 3 kolumny na 12 wierszy.
