# State

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_3/02_State`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz komponent `HelloWorld`, który przechowuje tekst do wyświetlenia jako stan lokalny. Niech napis będzie domyślnie nastawiony na "Hello, World!".

Komponent ma wyrenderować ten napis w elemencie `h1`.

Dodaj do swojego komponentu timer, który po **5 sekundach** zmieni ten tekst na "Hi, Everyone!". Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia, a także aby zwolnić zasoby.

Dodaj `console.log` do każdej metody cyklu życia.

Zajrzyj do konsoli. Które metody cyklu życia zostały wywołane, dlaczego? Widzisz różnicę w porównaniu z wielokrotnym użyciem `ReactDOM.render()`?

Pamiętaj aby zbudować także główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.

---

### Zadanie 0b - `js/task0b.js`

Stwórz komponent `TextTyper`. Przyjmuje on przez props wartość `text`.

Komponent ma wyrenderować pierwszą literę tego napisu w elemencie `h1`. Pamiętaj aby do przechowywania znaków, które mają być wyświetlone, skorzystać ze `state`.

Dodaj **do swojego komponentu interval**, który sprawi, że co 1 sekundę pojawi się w elemencie `h1` coraz więcej liter (co sekundę 1 = kolejny znak). Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia a także aby zwolnić zasoby.

Efekt po kolei może wyglądać tak dla text ustawionego na "Witaj!":

- 0s.: W
- 1s.: Wi
- 2s.: Wit
- 3s.: Wita
- 4s.: Witaj
- 5s.: Witaj!

Zajrzyj do narzędzi deweloperskich React. Kliknij na swój komponent - zobaczysz jego `props`, aktualne `state` oraz podświetlenia aktualizacji.

Pamiętaj aby zbudować także główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.


## Zadania do samodzielnego wykonania

### Zadanie 01 - `js/task01.js`

Stwórz komponent `Modal`. Przyjmuje on przez props wartość `heading`, np. "Zapisz się do newslettera". Wyświetla on tego propsa w elemencie `h2`.

Komponent ten ma wyrenderować tekst, który znajduje się w props `heading` dopiero po 10 sekundach. W tym celu w odpowienim cyklu życia swtórz `timer`, który wyczeka 10 sekund, a po tym czasie zaktualizuje **stan wewnętrzny komponentu** (np. wartość `this.state.modalOpen`) z `false` na `true`, a tym samym uruchomi ponownie render i wyświetli informację z propsa.

Ma on być wyrenderowany w komponencie `App`:

```js
function App() {
  return (
    <div>
      <h1>Test okna modalnego</h1>
      <Modal heading="Zapisz się do newslettera" />
    </div>
  )
}
```

Jeżeli stan wewnętrzny komponentu `Modal` nastawiony jest na `false`, komponent ten powinien renderować `null`.

---

### Zadanie 02 - `js/task02.js`
Stwórz komponent `StrobeLight`. Przyjmuje on przez props dwie wartości: kolor światła (`color`) oraz częstotliwość mrugania w ms (`frequency`).

Komponent ma wyrenderować pusty element `div` z następującymi stylami:

- Szerokość: `500px`,
- Wysokość: `50px`,
- Kolor tła: `white`.

Dodaj do komponentu `interval`, który sprawi, że co określoną ilość ms (`frequency`) będzie się zmieniać kolor tła naprzemiennie:

Jeżeli wcześniej był kolor biały - na kolor z props,
W przeciwnym wypadku na kolor biały.

Wyrenderuj komponent kilka razy z przykładowymi danymi.

Zajrzyj do narzędzi deweloperskich React. Kliknij na swoje komponenty - zobaczysz ich props, aktualne state oraz podświetlenia aktualizacji.

Pamiętaj aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.
