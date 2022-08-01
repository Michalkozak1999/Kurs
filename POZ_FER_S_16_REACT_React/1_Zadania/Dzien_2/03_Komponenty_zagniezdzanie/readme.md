# Komponenty - przekształcanie

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_2/03_Komponenty_zagniezdzanie`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`
Stwórz komponent `CurrencyConverter`, który przyjmuje przez `props`:

- sygnaturę waluty bazowej `from`
- sygnaturę waluty kwotowanej `to`
- kwotę `value`
- przelicznik `rate`

Komponent ma zwracać taką przykładową strukturę HTML:

```html
<div>
  <strong>200.00</strong> EUR => <strong>224.55</strong> USD
</div>
```

dla wywołania:

```js
<CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
```

Stwórz również komponent `App`, który będzie renderował **trzy komponenty** `CurrencyConverter`, przekazując różne wartości w `props`.


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`
W pliku `js/task01.js` znajduje się komponent `Header` wyświetlający nagłówek strony internetowej.

Jest on napisany w sposób klasowy. Przepisz go oraz komponent `App` na działające **funkcje**.

---

### Zadanie 2 - `js/task02.js`
Stwórz komponent `AddNumbers` służący do dodawania dwóch liczb. Ma on przyjmować w `props`: `numberA`, `numberB` i renderować element `h1` z sumą tych dwóch liczb.

Stwórz również komponent `App`, który będzie renderował komponent `AddNumber` przekazując przykładowe wartości w `props`.

Napisz oba te komponenty najpierw jako **funckję**, a następnie jako **klasy**.
