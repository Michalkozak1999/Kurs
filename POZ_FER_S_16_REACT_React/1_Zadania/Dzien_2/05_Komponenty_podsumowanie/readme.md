# Komponenty - podsumowanie

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_2/05_Komponenty_podsumowanie`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

#### Część 1
W pliku `js/data/products.js` znajduje się tablica z obiektami przykładowych zakupów. Zaimportuj ją do pliku `js/task01.js`.

Stwórz komponent o nazwie `Receipt`. Niech przyjmuje on w props tablicę obiektów z elementami rachunku (`items`).

Obiekty są w takiej formie:
```js
{
  code: kod-produktu,
  single_price: cena-jednostkowa,
  qty: ilosc,
  name: nazwa-towaru
}
```

Wyświetl całość w formie takiej tabelki:

Nazwa | Cena | Ilość | Łączna cena
--- | --- | --- | ---
Masło | 4.00 zł| 1 | 4.00 zł
Chleb | 3.50 zł| 2 | 7.00 zł  
Jabłka | 2.99 zł | 1.5 | 4.49 zł
RAZEM | - | - | 15.49 zł

Pamiętaj o odpowiednich obliczeniach. Na końcu wyświetl całkowitą sumę rachunku. Wyrenderuj swój komponent rachunku z tymi zaimportowanymi danymi (łączna cena produktów z dostarczonej tablicy to w przybliżeniu `33.52`).

Może Ci się przydać metoda [toFixed()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Number/toFixed).

### Część 2
Podziel komponent `Receipt` tak, by składał się z komponentów:

- `ReceiptHeader`
- `ReceiptItems`
- `ReceiptItem`
- `ReceiptFooter`
- `Receipt`

Zastanów się, gdzie wykonywać obliczenia i w jaki sposób przekazać je do subkomponentów.

Pamiętajcie aby zbudować także główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.

Zadanie wykonaj z komponentami w wersji **klasowej**.
