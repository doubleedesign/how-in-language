# Arrays

## TypeScript

::: warning 404
Nothing here yet. Please replace me with content for this language!
:::

## Ruby

::: warning 404
Nothing here yet. Please replace me with content for this language!
:::

## Java

::: warning 404
Nothing here yet. Please replace me with content for this language!
:::

## Kotlin

::: warning 404
Nothing here yet. Please replace me with content for this language!
:::

## C#

::: warning 404
Nothing here yet. Please replace me with content for this language!
:::

## PHP

Arrays wear a lot of hats in PHP, basically providing a singular data structure where other languages have arrays, lists, and dictionaries.

- Standard arrays in PHP do not have a fixed length.
- There are **indexed arrays**, which are just collections of items with a numeric index (automatic unless you specify).
- There are **associative arrays**, which are key-value pairs.
- There are **multidimensional arrays**, which are arrays of arrays; you can mix and match indexed and associative arrays in them.
- Arrays are **mutable** - you can go ahead and replace items by assigning a new value, or looping through with a function like `array_walk` that takes the array by reference.
- There are many built-in functions for comparing, filtering, and manipulating arrays that largely do what it says on the tin (e.g., `array_intersect`, `array_diff`, `array_unique`, `array_merge`, `array_filter`). Once you get over the inconsistencies in argument order that are a _thing_ in PHP (e.g., `array_map` takes the callback first, `array_filter` the array first), you may grow to love them.
- Some array functions take the array by value and return a new one, others take the array by reference and modify it in place.
- If you want a fixed length array, you can use [SplFixedArray](https://www.php.net/manual/en/class.splfixedarray.php), noting this class only supports indexed arrays, not associative.

There are multiple syntaxes for creating and modifying arrays.

Creating an indexed array:
```php
$myArray = ['Bart', 'Lisa'];
```
```php
$myArray = array('Bart', 'Lisa');
```

Adding to an indexed array:
```php
array_push($myArray, 'Maggie'];
```
```php
$myArray[] = 'Maggie';
```

Creating an associative array:
```php
$myArray = [
	'student' => 'Lisa Simpson',
	'school' => 'Springfield Elementary'
];
```
```php
$myArray = array(
	'student' => 'Lisa Simpson',
	'school' => 'Springfield Elementary'
);
```

Adding to an associative array:
```php
$myArray['teacher'] = 'Ms Hoover';
```

See also:
- [Quick ref: Looping](../quick-ref/looping.md)
- [Official docs](https://www.php.net/manual/en/language.types.array.php)
- [SPL data structures](https://www.php.net/manual/en/spl.datastructures.php)

## Python

::: warning 404
Nothing here yet. Please replace me with content for this language!
:::
