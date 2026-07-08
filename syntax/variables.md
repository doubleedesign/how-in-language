---
order: 1
---
# Variables

## TypeScript

Woah boy. Here we go. JavaScript (and by association, TypeScript) has three ways to declare a variable, one of which is technically not _variable_...
- `var`: Declares a variable that is function-scoped and can be reassigned. Generally not preferred since the introduction of `let`.
- `let`: Declares a variable that is block-scoped and _can_ be reassigned.
- `const`: Declares a variable that is block-scoped (like `let`) and _cannot_ be reassigned, but can be mutated if its value is an object or collection that allows that. Const = constant, yet for some reason everyone still colloquially calls them variables, which isn't confusing at all. /s

No special characters are needed to declare or refer to a variable, but the name must start with a letter, underscore, or dollar sign, and they cannot contain hyphens. Conventions about casing are codebase-dependent.

```typescript
const greeting = "Hello, world!";
```

In TypeScript, you can also explicitly specify the type of the variable (and lint rules may insist that you do):

```typescript
const greeting: string = "Hello, world!";
```

If you're thinking "Well duh, obviously that's a string, and you can't reassign a const", it makes more sense when you're assigning the return value of a function to that variable:

```typescript
const greeting: string = getGreeting(args);
```

See also:
- [Var, Let, and Const – What's the Difference? | FreeCodeCamp](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
- [TypeScript docs: Variable declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

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

In PHP, a variable is denoted by a dollar sign (`$`) before the name, which must start with a letter or underscore but can also contain numbers after that. It cannot contain hyphens. 

```php
$greeting = "Hello, world!"
```

- While you _can_ start a variable name with an underscore, it is generally not recommended as PHP's predefined variables use that syntax, which can make your code misleading, particularly if you're using uppercase for some reason (examples of predefined variables include `$_SERVER` and `$_REQUEST`).
- When declaring class properties (as opposed to variables within functions or methods), you can specify the type; but when just declaring one like the above, you can't.
- Variables declared outside a function have global scope.
- Variables declared within a function is scoped to that function.

PHP also has constants, which are (rightfully, IMO) a separate concept.

```php
define("FOO", "something");
```
```php
const MIN_VALUE = 0.0;  
```

- By convention, they are written in all-uppercase, and they do not use the dollar sign prefix.
- Constants have global scope.

See also:
- [PHP Docs: Variables](https://www.php.net/manual/en/language.variables.basics.php)
- [PHP Docs: Variable scope](https://www.php.net/manual/en/language.variables.scope.php)
- [PHP Docs: Predefined variables](https://www.php.net/manual/en/reserved.variables.php)
- [PHP Docs: Constants](https://www.php.net/manual/en/language.constants.php)


## Python

::: warning 404
Nothing here yet. Please replace me with content for this language!
:::
