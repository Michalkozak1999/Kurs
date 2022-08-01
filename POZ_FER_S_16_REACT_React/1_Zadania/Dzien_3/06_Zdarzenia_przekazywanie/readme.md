# Zdarzenia - przekazywanie

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_3/06_Zdarzenia_przekazywanie`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

Stwórz komponent `ButtonCounter` oraz komponent `ButtonToClick`.

Komponent `ButtonCounter` wyświetla `div`, a w nim `h1` oraz 2 przyciski stworzone za pomocą komponentu `ButtonToClick`. W `h1` ma być na początku wyświetlane 0 - docelowo ma tam się wyświetlać ile razy (łącznie) zostały kliknięte przyciski.

Komponent `ButtonToClick` zawiera  przycisk `button`, po kliknięciu którego jest przesyłana odpowiednia informacja do callbacku, który pobiera z props atrybut pod nazwą `onClick`. **Nie zapomnij sprawdzić czy ten atrybut został odpowiednio przekazany i jest funkcją.**

Na schemacie poniżej zostało zobrazowane, jak mniej więcej powinien wyglądać proces przkazywania funkcji i gdzie ona jest wywoływana. To tylko rysunek poglądowy, pomagający zrozumieć cały proces.

![Schemat dla zadania 0](img/task0a.jpg "Schemat dla zadania 1")


## Zadania do samodzielnego wykonania

### Zadanie 1 - `js/task01.js`

Stwórz komponent `PassParameter` z elementem `a`. Po kliknięciu na przycisk wywołaj metodę `handleClickButton()`, do której jako parametr przekaż dowolny string. Zadaniem metody `handleClickButton()` ma być wypisanie przekazanego tekstu w konsoli.

Dodatkowo zatrzymaj domyślną akcję przycisku. Musisz do metody `handleClickButton()` przekazać dwa parametry:

- dowolny string
- event

Zatrzymanie domyślnej akcji to `event.preventDefault()`.

---

### Zadanie 2 - `js/task02.js`

Stwórz komponent `Shop` oraz komponent `ShopItem`.

`ShopItem` zawiera `div`, a w nim `h1`, którego zawartość jest pobierana z props `title`. W `div` znajduje się też przycisk z napisem "Kup". Po jego kliknięciu przesyła się odpowiednią informację do callbacku, który pobiera ją z props pod nazwą `onBuy`. Nie zapomnij sprawdzić czy ten atrybut został odpowiednio przekazany i czy jest funkcją. Wywołanie callbacku ma się odbyć za argumentem pobieranym z tytułu przekazanego w props (`title`).

Shop ma mieć następującą strukturę:

```html
<div>
  <ShopItem title="skarpetki" />
  <ShopItem title="koszula" />
  <ShopItem title="pończochy" />
  <ul>
    {list}
  </ul>           
</div>        
```
Zamiast `list` ma się pojawić lista elementów `li` z wymienionymi elementami, na których użytkownik kliknął przycisk "Kup".
