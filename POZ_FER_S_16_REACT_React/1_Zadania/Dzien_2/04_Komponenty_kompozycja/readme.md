# Komponenty - kompozycja

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_2/04_Komponenty_kompozycja`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`
Stwórz komponent `ShopItem` z odpowiednimi `props`, które wynikają z dalszej części zadania. Ma mieć on następującą strukturę:

```html
<section>
  <header>
    <h1>{title z props}</h1>
    <img src="{image z props}"/>
  </header>
  <article>
    <p>{description z props}</p>
  </article>
  <footer>
    Cena: {price z props} zł
    <button>Kup!</button>
  </footer>
</section>
```

Następnie podziel go na 4 komponenty:

- `ShopItemHeader`
- `ShopItemDescription`
- `ShopItemPricing`
- `ShopItem` - ma podstawową strukturę i korzysta z powyższych.

Wyrenderuj na stronie komponent `ShopItem`, podając w atrybutach do props przykładowe dane:

```js
{
  title: "MacBook Pro",
  image: "https://bit.ly/2EEtduD",
  description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
  price: 9999
}
```

Pamiętaj aby zbudować także główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.

Zadanie wykonaj tylko z **komponentami w wersji zbudowanej z klas ES6**.


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`
Wykorzystaj zadanie zrobione z wykładowcą.

Stwórz komponent o nazwie `ShopList`. Niech przyjmuje on w `props` tablicę obiektów z elementami koszyka.

Obiekty mają być w takiej formie:
```js
{
  title: "nazwa przedmiotu",
  image: "url_do_obrazu_przedmiotu"
}
```

Powinien on wyświetlać w divie o klasie CSS `shoplist` same komponenty `ShopItemHeader` z odpowiednimi danymi. Wykorzystaj `map()`.

Wyrenderuj go na stronie, podając w atrybucie do props następujący atrybut `items`:

```js
[
  {
    title: "Mysz komputerowa",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
  },
  {
    title: "Klawiatura",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
  },
  {
    title: "Laptop programisty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
  }
]
```

Pamiętaj aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.

Zadanie wykonaj tylko z **komponentami w wersji zbudowanej z klas ES6**.

---

### Zadanie 2 - `js/task02.js`

W pliku `js/task02.js` jest stworzony komponent Chat. Podziel go według tego schematu:

 ![Schemat dla zadania 2](img/task02.png "Schemat dla zadania 2")

**Zadanie wykonaj w dwóch wersjach:**
- **Najpierw z komponentem w wersji funkcyjnej,**
- **Oraz z tym samym komponentem w wersji zbudowanej z klasy ES6.**
