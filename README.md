# cli calculator

SimpleNexus 3rd party integrations

## Installation

```bash
npm install -g .
```

## How to run
```bash
calc
```

## How it works
input numbers and or operators separated by spaces and it will perform arithmetic. Currently only support addition, subtraction, multiplication, and division. Calculator needs to have at least 2 numbers inputted before it can perform an math operation.

input `clear` to clear calculator

input `q` or `exit` to gracefully exit program

## Examples
```
> 5 
5
> 8
8
> +
13
```

```
> 5 5 5 8 + + -
-13.0
> 13 +
0.0
```

```
> -3
-3.0
> -2
-2.0
> *
6.0
> 5
5.0
> +
11.0
```

```
> 5
5
> 9
9
> 1
1
> -
8
> /
0.625
```