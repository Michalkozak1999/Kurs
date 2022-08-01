# Składnia JSX - Wyrażenia

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js`, tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_1/03_Skladnia_JSX_wyrazenia`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Informacje
>Do wykonania tego i kolejnych zadań będzie nam potrzebna funkcja `prompt()`.
>
>Jest to funkcja wbudowana w przeglądarkę, która wyświetli okienko pozwalające użytkownikowi wpisać dowolną wartość. Funkcja przyjmuje opcjonalny parametr, który zostanie wyświetlony w tym oknie. Kiedy użytkownik wprowadzi i zatwierdzi wartość, funkcja go zwróci **zawsze jako string**.



## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Po załadowaniu się strony wyświetl użytkownikowi dwa razy prompt(), zachęcając do podania liczby A i B. Odpowiedzi przechowuj w zmiennych. Nie zapomnij o użyciu parseFloat(str) aby zmienić wartość typu string w zmienną typu number.

Następnie za pomocą React wyrenderuj w elemencie o id app element div, w którym będzie się wyświetlał wynik dodawania liczby A i B. Dodawanie wykonaj bezpośrednio w wyrażeniu w tagu JSX.



## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

Za pomocą `prompt()` przyjmij rok urodzenia użytkownika. Odpowiedź przechowuj w zmiennej. Nie zapomnij o użyciu `parseFloat(str)` aby zmienić wartość typu string w zmienną typu `number`.

Następnie za pomocą metody `new Date().getFullYear()` pobierz aktualny rok.

Za pomocą JSX wyświetl tag `h1`, w którym wypiszesz wiek użytkownika. Odejmowanie wykonaj bezpośrednio w wyrażeniu w tagu JSX.

---

### Zadanie 2 - `js/task02.js`

W pliku `js/data/person.js` znajduje się obiekt reprezentujący osobę. Zaimportuj go do pliku `js/task02.js`, np. za pomocą:

```js
import Person from './data/person';
```

Następnie za pomocą React wyrenderuj w elemencie o id `app` element `ul`, w którym będzie się wyświetlał tytuł, imię, nazwisko oraz wiek tej osoby. Każda z tych wartości niech będzie umieszczona w osobnym elemencie `li` (na koniec powinniśmy mieć 4 elementy `li`). Nazwy tych właściwości obiektu znajdziesz w importowanym pliku.

---

### Zadanie 3 - `js/task03.js`

Stwórz prosty kalkulator, który liczy wynik dodawania, odejmowania, mnożenia lub dzielenia.

Możesz skorzystać z kodu zadania w wykładowcą. Zmodyfikuj je w taki sposób aby wyświetlać jeszcze jeden `prompt()`, który ma pobierać jeden ze znaków: `+`, `-`, `*` lub `/` - odpowiada on operacjom matematycznym, jakie zostaną wykonane na liczbach A i B.

Zadanie wykonaj w taki sposób aby w zależności od operacji był renderowany inny element: dla dodawania element `h1`, dla odejmowania element `h2`, dla mnożenia element `h3`, a dla dzielenia element `h4`. Operacje matematyczne wykonuj bezpośrednio w wyrażeniu w danym tagu JSX.

---

### Zadanie 4  - `js/task04.js`

Skopiuj działający wynik **zadania 3** do pliku `js/task04.js`.

Przerób to zadanie w taki sposób aby powstała funkcja `calc(a, b, operation)`, która za argumenty przyjmuje liczbę A, B i operację do wykonania jako string (jeden ze znaków: `+`, `-`, `*` lub `/`). Funkcja ta ma zwracać gotowy tag JSX ```h1```...```h4```.

Następnie przerób miejsce, w którym korzystasz z ```ReactDOM.render()``` w taki sposób aby renderował element ```div```, a w nim bezpośrednio wynik działania funkcji ```calc()```.

---

### Zadanie 5  - `js/task05.js`

W pliku `js/data/animals.js` znajduje się tablica reprezentująca spis zwierząt. Zaimportuj ją do pliku `js/task05.js` np. za pomocą:

```js
import Animals from './data/animals';
```

Następnie za pomocą React wyrenderuj w elemencie o id `app` element section, w którym będzie się wyświetlała łączna liczba zwierząt oraz zostaną one wypisane. Wszystkie operacje wykonuj bezpośrednio w wyrażeniu w danym tagu JSX.

Przyda Ci się właściwość `length` oraz metoda `join(separator)`.
