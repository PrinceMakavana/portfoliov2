# Star Patterns in JavaScript

A collection of common pattern-printing problems using nested `for` loops.

---

## 1. Square Star Pattern

### Output

```text
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
```

### Code

```javascript
function starLoop1() {
  const bound = 5;

  for (let i = 0; i < bound; i++) {
    let horizontalPattern = "";

    for (let j = 0; j < bound; j++) {
      horizontalPattern += j === bound - 1 ? "*" : "* ";
    }

    console.log(horizontalPattern);
  }
}

starLoop1();
```

---

## 2. Increasing Star Pattern

### Output

```text
*
* *
* * *
* * * *
* * * * *
```

### Code

```javascript
function starPattern2() {
  const bound = 5;

  for (let i = 0; i < bound; i++) {
    let horizontalPattern = "";

    for (let j = 0; j <= i; j++) {
      horizontalPattern += j === i ? "*" : "* ";
    }

    console.log(horizontalPattern);
  }
}

starPattern2();
```

---

## 3. Decreasing Star Pattern

### Output

```text
* * * * *
* * * *
* * *
* *
*
```

### Code

```javascript
function starPattern3() {
  const bound = 5;

  for (let i = 0; i < bound; i++) {
    let horizontalPattern = "";

    for (let j = bound; j > i; j--) {
      horizontalPattern += j === i + 1 ? "*" : "* ";
    }

    console.log(horizontalPattern);
  }
}

starPattern3();
```

---

## 4. Right-Aligned Increasing Star Pattern

### Output

```text
        *
      * *
    * * *
  * * * *
* * * * *
```

### Code

```javascript
function starPattern4() {
  const bound = 5;

  for (let i = 0; i < bound; i++) {
    let horizontalPattern = "";

    for (let j = bound; j > 0; j--) {
      horizontalPattern += j <= i + 1 ? "* " : "  ";
    }

    console.log(horizontalPattern);
  }
}

starPattern4();
```

---

## 5. Increasing Number Pattern

### Output

```text
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
```

### Code

```javascript
function starPattern5() {
  const bound = 5;

  for (let i = 0; i < bound; i++) {
    let horizontalPattern = "";
    const value = i + 1;

    for (let j = 0; j <= i; j++) {
      horizontalPattern += j === i ? value : value + " ";
    }

    console.log(horizontalPattern);
  }
}

starPattern5();
```

---

## 6. Decreasing Number Pattern

### Output

```text
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
```

### Code

```javascript
function starPattern6() {
  const bound = 5;

  for (let i = 0; i < bound; i++) {
    let horizontalPattern = "";

    for (let j = 1; j <= bound - i; j++) {
      horizontalPattern += j === bound - i ? j : j + " ";
    }

    console.log(horizontalPattern);
  }
}

starPattern6();
```

---

## 7. Alternating 1 and 0 Pattern

### Output

```text
1
1 0
1 0 1
1 0 1 0
1 0 1 0 1
```

### Code

```javascript
function starPattern7() {
  const bound = 5;

  for (let i = 1; i <= bound; i++) {
    let horizontalPattern = "";

    for (let j = 1; j <= i; j++) {
      const value = j % 2;
      horizontalPattern += j === i ? value : value + " ";
    }

    console.log(horizontalPattern);
  }
}

starPattern7();
```

---

## 8. Alternating 1 and 0 by Row

### Output

```text
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1
```

### Code

```javascript
function starPattern8() {
  const bound = 5;

  for (let i = 1; i <= bound; i++) {
    let horizontalPattern = "";
    const isRowOdd = i % 2;

    for (let j = 1; j <= i; j++) {
      const value = isRowOdd ? j % 2 : (j + 1) % 2;
      horizontalPattern += j === i ? value : value + " ";
    }

    console.log(horizontalPattern);
  }
}

starPattern8();
```

---

## 9. Continuous Number Triangle

### Output

```text
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```

### Code

```javascript
function starPattern9() {
  const bound = 5;
  let value = 0;

  for (let i = 1; i <= bound; i++) {
    let horizontalPattern = "";

    for (let j = 1; j <= i; j++) {
      value++;
      horizontalPattern += j === i ? value : value + " ";
    }

    console.log(horizontalPattern);
  }
}

starPattern9();
```

---

## 10. Palindromic Number Pyramid

### Output

```text
        1
      1 2 1
    1 2 3 2 1
  1 2 3 4 3 2 1
1 2 3 4 5 4 3 2 1
```

### Code

```javascript
function starPattern10() {
  const bound = 5;

  for (let i = 1; i <= bound; i++) {
    let horizontalPattern = "";

    for (let j = 1; j <= 5; j++) {
      if (j === 1) {
        horizontalPattern = " " + i + " ";
      } else {
        if (i - j < 0) {
          horizontalPattern = `   ${horizontalPattern}   `;
        } else {
          horizontalPattern =
            ` ${i - j + 1} ${horizontalPattern} ${i - j + 1} `;
        }
      }
    }

    console.log(horizontalPattern);
  }
}

starPattern10();
```

---

## 11. Palindromic Number Pattern with Alternating Start

### Output

```text
        1
      0 1
    1 2 1
  0 1 2 1
1 2 3 2 1
```

> The original source contains the output for Pattern 11, but does not contain the corresponding implementation code.

---

# Quick Pattern Summary

| Pattern | Type |
|---|---|
| 1 | Square stars |
| 2 | Increasing stars |
| 3 | Decreasing stars |
| 4 | Right-aligned increasing stars |
| 5 | Repeated numbers |
| 6 | Decreasing number sequence |
| 7 | Alternating `1` and `0` |
| 8 | Alternating `1` and `0` by row |
| 9 | Continuous number triangle |
| 10 | Palindromic number pyramid |
| 11 | Palindromic number pattern with alternating start |

---

# Core Logic to Remember

Most pattern problems use **nested loops**:

```javascript
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    // Decide what to print
  }

  console.log();
}
```

### Think in 3 steps

1. **Outer loop → rows**
2. **Inner loop → columns/items in each row**
3. **Condition → what should be printed**

For example:

```text
*
* *
* * *
* * * *
```

The number of items in each row is:

```text
1
2
3
4
```

So the inner loop usually depends on `i`:

```javascript
for (let j = 0; j <= i; j++) {
  // print
}
```
