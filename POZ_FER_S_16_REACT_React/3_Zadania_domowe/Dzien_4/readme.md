# Dzień 4 - zadania domowe

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `3_Zadania_domowe/Dzien_4`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

---

### Zadanie 1 - `js/task01.js`

> Do wykonania tego zadania możesz potrzebować przekazywać w evencie pewną własną unikalną informację.
> Wystarczy zrobić to w wyrażeniu JSX bezpośrednio podczas tworzenia elementu.
> Zobacz na przykładzie, jak możesz to zrobić:
> ```js
> <button onClick={e => this.handleClick( e, index );}/>
> ```

Stwórz komponent z 15 przyciskami z napisem "Klik!". Każdy z przycisków musi mieć swój własny `state`. Aby szybko stworzyć tyle przycisków możesz posłużyć się tym kodem:

```js
/**
* Każdy z elementów tablicy będzie miał wartość
* false - czyli nie kliknięty
*/
state: {
  buttons: Array(15).fill(false)
}
```

Po kliknięciu na dowolny przycisk zmienia on (**ten konkretnie wciśnięty przycisk**) swój tekst na "Kliknięty". Możemy zmieniać stan danego przycisku z `false` na `true`.

---

### Zadanie 2 - `js/task02.js`

Stwórz komponent o nazwie `PESELInput`.
Ma on wyświetlać w elemencie `form` elementy `input` oraz drugi `div`.

`input` ma być kontrolowanym elementem formularza. Podczas wpisywania sprawdzaj czy wpisany tekst ma 11 znaków i czy są to same cyfry:

- Jeżeli tak, to w wewnętrznym elemencie `div` wyświetl `input type="submit"` z napisem "Prześlij" (póki co nie ma nic robić);
- Jeżeli nie, to w wewnętrznym elemencie `div` wyświetl informację "Niepoprawny numer PESEL".

---

### Zadanie 3 - `js/task03.js`

Stwórz komponent `AdultStuff` oraz `AdultStuffBox`.

Komponent `AdultStuff` renderuje w elemencie `form` element `input type="number"`, który jest kontrolowanym elementem formularza, a użytkownik podaje w nim swój wiek.

Renderuje również komponent `AdultStuffBox`, przekazując mu przez `props` atrybut `age`, który jest aktualnym wiekiem wpisanym w `input`.

Komponent `AdultStuffBox` wyświetla "Lorem ipsum, treść dla pełnoletnich.". Jeżeli natomiast okaże się, że wartość przekazana w `props` jako `age` jest mniejsza niż 18, to blokuje swoje wyświetlanie.

---

### Zadanie 4 - `js/task04.js`

Stwórz komponent `DynamicLego`, który renderuje w elemencie `form` element `input type="number"`, który jest kontrolowanym elementem formularza, a użytkownik podaje w nim ilość klocków do wyświetlania.

Renderuje również element `ul`. W elemencie `ul` ma się znajdować dokładnie tyle elementów `li`, ile aktualnie podał użytkownik w `input`. **Pamiętaj o wybraniu odpowiedniego klucza.**

Każdy element `li` ma mieć następujący styl:
- Kolor tła: czerwony,
- Wysokość: 50px,
- Szerokość: numer elementu * 50px (przykładowo, pierwszy klocek będzie miał 50px, drugi 100px, trzeci 150px itd).

Wyrenderuj i przetestuj swój komponent. Zauważ, jak zachowują się aktualizacje, kiedy zmieniasz liczbę elementów - czy działa to prawidłowo (nie ma niepotrzebnych aktualizacji)?

---

### Zadanie 5 - `js/task05.js`

Stwórz komponent `Notes`. Ma on renderować w elemencie `form` elementy `textarea`, `button` oraz `span`.

`textarea` ma być kontrolowanym elementem formularza. Ma wyświetlać to, co wpisuje użytkownik. Dodatkowo, treść wpisana przez użytkownika pokazuje się również w elemencie `span`.

Kliknięcie na `button` ma wyczyścić wpisywany tekst.

---

### Zadanie 6 - `js/task06.js`

Stwórz komponent `WhoIsPresent`. Ma on renderować w elemencie `form` elementy `select` oraz listę `ul`.

`ul` ma być na początku pusty.

`select` ma zawierać do wyboru pozycje z tej tablicy:

```JavaScript
['Anna Kowalska', 'Jan Kowalski', 'Maciej von Handerburg', 'Jurand ze Spychowa'];
```

Po wybraniu dowolnego elementu z `select` zostaje on przeniesiony do listy `ul`, tzn. pojawia się jako `li` w `ul`, natomiast przestaje być widoczny w elemencie `select`.

---

### Zadanie 7 - `js/task07.js`

Stwórz komponent `Register`. Komponent ma składać się z formularza `form`, przycisku `Zapisz` i szeregu pól:

Dane osobowe

- Imię i Nazwisko `input[text]` (min. 5 znaków)
- Email `input[email]` (min. 3 znaki i znak `@`)
- Hasło `input[password]` (min. 4 znaki)
- Powtórz hasło `input[password]` (min. 4 znaki, takie samo jak pierwsze hasło)
- Płeć `select`

Dane do wysyłki

- Adres `input[text]` (min. 3 znaki)
- Kod pocztowy `input[text]` (5 znaków (bez myślnika - wtedy same cyfry) lub 6 znaków z myślnikiem jako trzecim znakiem)
- Miasto `input[text]` (min. 2 znaki)

Każde z tych pól należy zwalidować po klknięciu Wyślij zgodnie z regułami, które są podane.

Jeżeli nie ma błędów, należy wyświetlić podsumowanie wszystkich danych pod lub obok formualrza.

Jeżeli pojawiły się błędy, należy je wyświetlić użytkownikowi na ekranie (nie w konsoli) i nie renderować podsumowania.
