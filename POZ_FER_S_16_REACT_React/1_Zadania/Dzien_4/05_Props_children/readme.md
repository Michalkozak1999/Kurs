# props.children

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_4/05_Props_children`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz komponenty `ParentComponent`, `ChildComponent` oraz `GrandchildComponent`.

- Niech `ParentComponent` renderuje `ChildComponent`, przekazując mu jako dzieci swoje dzieci.

- `ChildComponent` renderuje `GrandchildComponent`, przekazując mu jako dzieci swoje dzieci.

- `GrandchildComponent` po prostu wyświetla swoje dzieci.

Wyrenderuj i przetestuj swój komponent za pomocą takiej konstrukcji:
```js
<ParentComponent>
  <h1>To działa!</h1>
</ParentComponent>
```

Kod ten powinien wyświetlić taką strukturę:
```
-- ParentComponent
    |-- ChildComponent
          |-- GrandchildComponent
                |-- <h1>To działa!</h1>
```


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01js`

Stwórz komponent `ShowMore`. Działa on tak, że wyświetla link `a` z napisem "Pokaż więcej".

Po kliknięciu na element `a`, znika on (przestań go w ogóle renderować), a zamiast niego pojawia się treść. Treścią są dzieci tego komponentu.

Wyrenderuj i przetestuj swój komponent używając takiej konstrukcji:
```js
<ShowMore>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis enim eget iaculis fermentum. Nulla facilisi. Morbi auctor quis leo ut efficitur. Duis a nulla sed nunc vestibulum condimentum ac vitae lorem. Vestibulum at ornare lacus, in euismod diam. Fusce varius, justo convallis varius elementum, quam felis molestie purus, accumsan imperdiet lacus nulla sed nunc. Suspendisse efficitur risus vel ante pharetra cursus.</p>
</ShowMore>
```
