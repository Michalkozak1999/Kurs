# Dzień 3 - zadania domowe

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `3_Zadania_domowe/Dzien_3`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

---

### Zadanie 1 - `js/task01.js`

Za pomocą React wyrenderuj w elemencie o id ```app``` element ```div``` z tłem ustawionym na zielone.

Uruchom za pomocą ```setTimeout()``` po 5 sekundach funkcję, która zaktualizuje kolor na czerwony.

---

### Zadanie 2 - `js/task02.js`

W pliku `js/task0a.js` znajduje się komponent `UpperCaseText` służący do zmiany liter na wielkie.

Jest on napisany w sposób funkcyjny. Przepisz go oraz komponent `App_example_1` na działające klasy ES6.

---

### Zadanie 3 - `js/task03.js`

Stwórz komponent `AnotherColor`, który przechowuje kolor do wyświetlenia jako **stan lokalny**. Niech kolor będzie domyślnie nastawiony na "yellow".

Komponent ma wyrenderować ten element `div` z tłem ustawionym na to ze stanu lokalnego.

Dodaj do swojego komponentu timer, który po 5 sekundach zmieni ten kolor na "blue". **Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby.**

---

### Zadanie 4 - `js/task04.js`

Stwórz komponent o nazwie `TrafiicLights`. Przechowuje on w stanie lokalnym numer światła do wyświetlenia od 1 do 4. Domyślnie jest to 1. Do `props` przyjmuje wartości:
 - `redTime` (długość, z jaką ma się wyświetlać pierwsze światło - czerwone - w sekundach);
 - `yellowTime` (długość, z jaką ma się wyświetlać drugie i czwarte światło - czerwone/żółte oraz samo żółte - w sekundach);
 - `greenTime` (długość, z jaką ma się wyświetlać trzecie światło - zielone - w sekundach).

Komponent powinien wyświetlać w elemencie `div` trzy kolejne `div`-y z wysokością i szerokością ustawioną na 100px i `border-radius` ustawionym na 50%. W zależności od tego, które światło powinno świecić, każdy z trzech wewnętrznych elementów `div` ma tło albo czarne (wyłączone) albo o odpowiednim kolorze (włączone, poniżej kolory).

Światła powinny działać w następujący sposób i w takiej kolejności:

 ![Zadanie 3 światła](img/task04.jpg "Zadanie 3 światła")

 Dodaj odpowiednie timery / interval do swojego komponentu, który po liczbie sekund określonej w props zmieni odpowiednie światło zgodnie z kolejnością. **Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby.**

---

### Zadanie 5 - `js/task05.js`

Stwórz dwa komponenty.

Pierwszy z nich `PropsToState` ma przyjmować w `props` wartość `text` i przechowywać ją w stanie lokalnym.

Drugi komponent `ShowInfo` przyjmuje po prostu w `props` wartość `info` i renderuje ją w elemencie `h1`.

`PropsToState` renderuje w swoim środku komponent `ShowInfo`, przekazując mu ze stanu lokalnego wartość `text`.

Dodaj do swojego komponentu `PropsToState` odpowiedni interval, który co 1 sekundę dodaje do stanu lokalnego `text` jedną kropkę ".". **Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby.**
