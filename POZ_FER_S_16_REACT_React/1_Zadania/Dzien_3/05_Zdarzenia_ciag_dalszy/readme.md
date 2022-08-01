# Zdarzenia - ciąg dalszy

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_3/05_Zdarzenia_ciag_dalszy`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz komponent `Bulb` z elementem `div` z kolorem tła ustawionym na biały, szerokością i wysokością 100px. W elemencie `div` umieść przycisk `button` z napisem "On".

Kliknięcie na przycisk zmienia stan żarówki: jeżeli tło `div` było białe, to zmienia je na żółte, a napis na przycisku na "Off". W przeciwnym wypadku zmienia tło na białe, a napis na "On".

---

### Zadanie 0b - `js/task0b.js`

Stwórz komponent `MobileMenu`.

Komponent ma mieć następującą strukturę (stwórz dokładnie taką strukturę w React pamiętając o klasach CSS):

```html
<section class="mobile">
  <header class="mobile-menu">
    <a href="#" class="open-menu"></a>
    <nav>
      <ul>
        <li><a href="#">O nas</a></li>
        <li><a href="#">Zespół</a></li>
        <li><a href="#">Produkty</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
      <a href="#" class="close-menu">Zamknij menu</a>
    </nav>
  </header>
</section>
```

Na początku powinna być widoczna tylko klasa `.open-menu`. Po kliknięciu na ikonę menu (`.open-menu`), powinien się pojawić element `nav`.

Po kliknięciu na "Schowaj menu" (`.close-menu`) wracamy do stanu początkowego - `nav` znika.

Możesz skorzystać z klasy `.hide`, która jest przygotowana w pliku `CSS`.


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

Stwórz komponent z elementem `div` z kolorem tła ustawionym na zielony, szerokością `500px` i wysokością `200px`.

Po najechaniu na `div` ma się zmieniać jego tło na niebieskie, a wysokość na 400px.

Gdy kursor odjedzie, komponent ma wrócić do pierwotnego **stanu**.

---

### Zadanie 2 - `js/task02.js`

Stwórz komponent `CrazyDiv`. Ma on mieć czerwone tło, wysokość i szerokość `100px` oraz `position` ustawione na `absolute`.

Po każdym najechaniu na `div` ma się zmieniać jego styl `left` i `top` na dwie losowe wartości z przedziału 0 - 1000px.

---

### Zadanie 3 - `js/task03.js`

> Poniższe zadanie pozwoli Ci stworzyć minigrę, w której gracz ma określony czas by jak najszybciej klikać na przycisk. Czas biegnie coraz szybciej i należy kliknąć tyle razy, ile się uda, zanim czasu między kolejnymi kliknięciami będzie go za mało.

Stwórz komponent `SpeedClickGame`. Ma on przyjmować czas do odliczania w ms przez props `time` i przechowywać go w stanie lokalnym.

Komponent składa się z przycisku z napisem "Click me!", elementu `h1` i elementu `h2` w elemencie `div`. W elemencie `h1` wyświetlaj aktualny czas, w `h2` będzie przechowywana liczba punktów (póki co 0).

Uruchom interval wykonywany co 50ms. **Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia a także aby zwolnić zasoby.** W funkcji intervala zmniejszaj aktualny czas o `50ms` i sprawdzaj czy czas się nie skończył. Jeżeli czas się skończył, zablokuj przycisk (`disabled={true}`).

Po kliknięciu na przycisk dodawany jest punkt a czas zostaje zresetowany, ale jest o `50ms` krótszy niż poprzedni.

Np. jeżeli atrybut `time` tego komponentu był ustawiony na **1000** to:
- Brak kliknięć, czas początkowy: 1000ms,
- Pierwsze kliknięcie, czas początkowy: **950ms**,
- Drugie kliknięcie, czas początkowy: **900ms**,
- Trzecie kliknięcie, czas początkowy: **850ms**...

Wyrenderuj komponent dla props `time` ustawionego na 2000.


## Zadanie dodatkowe

### Zadanie 4 - `js/task04.js`

> To zadanie pozwoli Ci stworzyć prostą grę matematyczną.
> Do wykonania zadania będzie Ci potrzebne kilka rzeczy.
> Losowanie dowolnego elementu z tablicy:
> ```JavaScript
> items[Math.floor(Math.random()*items.length)]
> ```
>
> Losowanie losowej liczby całkowitej z przedziału:
> ```JavaScript
> Math.floor(Math.random() * (max - min) + min )
> ```
>
> Funkcja do losowego układania kolejności w tablicy (shuffle):
> ```JavaScript
> function shuffle(a) {
>     for (let i = a.length; i; i--) {
>         let j = Math.floor(Math.random() * i);
>         [a[i - 1], a[j]] = [a[j], a[i - 1]];
>     }
> }
> ```
> Użycie: przekazujesz tablicę, zostanie ona zmodyfikowana - elementy będą w losowych miejscach.


Stwórz komponent `MathQuestionGame`.

Na początku wylosuj jedno z działań: **dodawanie, odejmowanie lub mnożenie**. Wylosuj również **dwie liczby całkowite z przedziału 1-10**. Wykonaj wylosowane działanie matematyczne pomiędzy dwoma wylosowanymi liczbami, przechowaj wynik.

Wygeneruj 4 przyciski, w tym 3 z losowymi liczbami **innymi niż poprawny wynik** (możesz użyć np. pętli while by upewnić się, że nie zostanie wysolowany poprawny wynik) oraz 1 przycisk z poprawną odpowiedzią. Przyciski przechowuj w formie tablicy, którą następnie przetasujesz (zob. wyżej funkcję shuffle) i wyrenderujesz w komponencie.

Gra wyświetlać się ma w takiej strukturze (przykład):
```HTML
<div>
    <h1>2 * 3 =</h1>
    <div>
        <button>3</button>
        <button>6</button>
        <button>8</button>
        <button>7</button>
    </div>
    <h2>00:08</h2>
</div>
```

Gracz ma mieć 10 sekund na udzielenie prawidłowej odpowiedzi. Uruchom timer / interval. **Pamiętaj, aby zrobić to w odpowiedniej metodzie cyklu życia, a także aby zwolnić zasoby.**

Zasady:
- Po kliknięciu na prawidłowy przycisk element `h1` zamieni napis na "Gratulacje!";
- Po kliknięciu na nieprawidłowy przycisk element `h1` zamieni napis na "Błędna odpowiedź :(";
- Jeśli czas minie zanim zostanie kliknięty jakiś przycisk, element `h1` zamieni napis na "Czas minął!". Zabezpiecz też przyciski aby nie można ich było klikać po czasie.
