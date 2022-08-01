# Fromularze kontrolowane

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_4/03_Formularze_kontrolowane`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz komponent `Hello`.

Ma wyświetlać element `form`, a w nim `input type="text"` oraz `h1`. W `h1` ma się wyświetlać "Hello, `{name}`". `{name}` ma być na żywo tym, co wpisał użytkownik, a **domyślnie ma to być "Ty"**.

Pamiętaj żeby `input` był komponentem **kontrolowanym**!

---

### Zadanie 0b - `js/task0b.js`

Zaimportuj do pliku `js/task0b.js` plik `data/fakeAPI.js`:

```js
import FakeAPI from "./data/fakeAPI";
```

W obiekcie tym znajduje się metoda `login`. Gdy przesyłamy do niej obiekt o następującej strukturze:

```js
{
  username: jakiś login
  password: jakieś hasło
}
```

zwraca informacje o tym czy taki użytkownik istnieje wraz z jego danymi. W przypadku błędych danych logowania, zwraca informację o błędzie. Poprawny login i hasło to: `coderslab`, `qwerty`.

Sposób skorzystania z metody `login`:

```js
FakeAPI.login({
  username: tutaj_podaj_login,
  password: tutaj_podaj_haslo
}).then(user => {
  // pod zmienną user mamy dostęp do informacji o zalogowanym użytkowniku
}).catch(err => {
  // pod zmienną err mamy dostęp do informacji o błędzie
})
```

Celem zadania jest stworzenie komponentu `Form`, który będzie składał się z formularza. Ma on zawierać dwa pola: **Login** i **Hasło**, a także przycisk **Zaloguj!**.

W trakcie wysyłania formualrza należy zwalidować pola. Oto warunki:

- Login musi być dłuższy niż 2 znaki
- Hasło musi być dłuższe niż 4 znaki

Jeżeli któryś z warunków nie jest spełniony, należy wyświetlić użytkownikowi na ekranie informaję o tym, gdzie popełnił błąd. Z kolei gdy walidacja została przeprowadzona prawdiłowo, uruchamiamy metodę `login` z obiektu `FakeAPI` i czekamy na odpowiedź czy podane dane logowania są prawdiłowe.

Jeżeli tak, to należy przestać renderować formualarz i wyświetlić powitanie użytkownika (skorzystaj z danych, które dostajesz w metodzie `login`).

Jeżeli nie uda się zalogować ze względu na źle podany login i hasło, to wyświetlamy użytkownikowi taką informację na ekranie.


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

Stwórz komponent `TextField`.

Ma renderować element `div`, a w nim elementy `p` i `select` oraz `span`.

Podczas wybierania opcji z elementu `select` ma się ona na żywo pokazywać w `p`, a w elemencie `span` liczba znaków wybranego elementu.

---

### Zadanie 2 - `js/task02.js`

Stwórz komponent `AddTwoNumbers`.

Ma renderować `form`, a w nim dwa `input type="text"` oraz `h1`. W `h1` ma się na żywo wyświetlać wynik dodawania dwóch liczb. Pobieraj je z elementów `input` pamiętając o konwersji na typ `Number`.

Jeżeli któraś dana z elementów `input` po konwersji da NaN (użyj `isNaN()`), to wypisz w `h1` "Podaj dwie liczby.".

---

### Zadanie 3 - `js/task03.js`

Stwórz komponent `InteractiveDiv`.

Ma renderować `div`, a w nim `input type="`**`number`**`"` oraz wewnętrzny `div`. Ten wewnętrzny `div` ma mieć następujące style:
- Wysokość: `100px`,
- Szerokość: z elementu `input` `+'px'`,
- Kolor tła: czerwony.

Przy zmianie wartości inputa powinna się zmieniać automatycznie szerokość wewnętrznego elementu `div`. Pamiętaj o konwersji na typ `Number`.

---

### Zadanie 4 - `js/task04.js`

Stwórz komponent `SelectOrType`. Przez props ma przyjmować tablicę `items`.

Ma renderować `form`, a w nim `select`. Stwórz elementy `option` w `select`:
- Takie, jakie zostały przekazane w props w `items`,
- Oraz dodatkową ostatnią pozycję "Inne".

Jeżeli użytkownik wybierze ostatnią pozycję - wyświetl pod elementem `select` elementy `input type="text"` oraz `button` (w praktyce one będą tam cały czas, tylko domyślnie ukryte).

Po wpisaniu dowolnej treści i zatwierdzeniu przyciskiem, zmień ostatnią pozycję "Inne" na to, co wpisał użytkownik, zaznacz tę pozycję i zamknij menu.

Po ponownym wybraniu jakiejś innej pozycji i powrocie do ostatniej - cały czas powinno działać wyświetlanie i zmiana.

Wyrenderuj `SelectOrType` z props `items` ustawionym na `["BMW", "Jaguar", "Porshe"]`.

---

### Zadanie 5 - `js/task05.js`

To zadanie pozwoli Ci stworzyć własną listę rzeczy do zrobienia.

Stwórz komponent `ToDoList`. Przechowuje on w swoim state listę rzeczy do zrobienia jako tablicę obiektów w takiej formie:
```js
{
  id: 1,
  name: "Rzecz do zrobienia",
  done: false
}
```

Oto przykładowa struktura komponentu (przykład, HTML):
```HTML
<div class="toDoList">
  <form class="header">
    <h2>Twoja lista zadań</h2>
    <input type="text" placeholder="np. Zrobić zakupy" />
    <button class="btn-add">Dodaj</button>
  </form>

  <ul>
    <li>Kupić mleko</li>
    <li class="done">Zrobić prezentację</li>
  </ul>
</div>
```

Po wpisaniu do elementu `input` dowolnego tekstu i kliknięciu na przycisk "Dodaj", powinna się zaktualizować wewnętrzna tablica z rzeczami do zrobienia. Wstaw wtedy nowy obiekt na jej końcu, ustawiając `done` na `false`. W praktyce wymaga to pobrania tablicy ze state, **stworzenia jej kopii**, dodania obiektu i zaktualizowania state z całą nową tablicą. Po dodaniu wyczyść `input` (po prostu ręcznie ustawiając stan powiązany z `input` na pusty string).

Po kliknięciu na dowolny element `li` z listy, należy przeszukać tablicę i znaleźć tam element odpowiadający konkretnemu **id**, a następnie zmienić mu `done` na odwrotny. Jeżeli element był oznaczony jako zakończony, to ma nie być zakończony, a jeżeli był niezakończony, to ma być zakończony.

Podczas renderowania nadawaj klasę CSS `done` elementom `li`, które są oznaczone jako zakończone. Pamiętaj o odpowiednich kluczach dla elementów listy.


## Zadanie dodatkowe

### Zadanie 6 - `js/task06.js`

To zadanie pozwoli Ci stworzyć kolejną minigrę matematyczną.

Stwórz komponent `MathAnswersGame`.

Na początku wylosuj **dwie liczby całkowite z przedziału 1-10**. Wykonaj dodawanie pomiędzy dwoma wylosowanymi liczbami, zachowaj wynik.

Wyświetl dodawane liczby oraz `input type="number"`.

Gra ma się wyświetlać w takiej strukturze (przykład):
```HTML
<div>
    <h1>2 + 3 =</h1>
    <div>
        <input type="number">
    </div>
    <h2>00:02</h2>
    <h3>Punkty: 2</h3>
</div>
```

Gracz ma mieć 3 sekundy na udzielenie prawidłowej odpowiedzi. Uruchom timer. **Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia a także aby zwolnić zasoby.**

Po upłynięciu czasu sprawdź czy wynik podany przez gracza jest prawidłowy. Zasady:
- Jeżeli wynik jest prawidłowy, to dodajesz punkt graczowi, generujesz nowe liczby i uruchamiasz ponownie timer (zauważ, że najlepiej zrobić do tego osobną metodę pomoczniczą, żebyś nie powtarzać kodu);
- Jeżeli wynik jest nieprawidłowy (lub gracz nie zdążył wpisać wyniku), to zablokuj `input` i wyświetl w `h1` napis "Koniec gry".
