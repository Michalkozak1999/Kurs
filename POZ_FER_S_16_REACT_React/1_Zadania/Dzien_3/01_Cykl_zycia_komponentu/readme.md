# Cykl życia komponentu

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_3/01_Cykl_zycia_komponentu`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz komponent `LifeCyclesTester`.

Komponent ma wypisywać w konsoli : "constructor", "komponent zaktualizowany", "komponent został zamontowany", "komponent odmontowywany", "renderowanie", itp., dla odpowiednich typów metod cyklu życia.

Wyrenderuj swój komponent bezpośrednio korzystając z `ReactDOM.render()`.

Spójrz do konsoli. Jakie metody cyklu życia zostały uruchomione, a jakie nie? Dlaczego?
