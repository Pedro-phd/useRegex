# useRegex
Simple hook for simple projects.

## Goal

the initial objective was to learn about hooks, and in the attempt I developed a simple hook to facilitate the use of **regex**.

## Usage

```
import useRegex from useRegex
```

useRegex

```
useRegex(option,value)
```

1. option: telephone _or_ email
2. value: data to be analyzed

```
useRegex("telephone","11912345678") // true
```
```
useRegex("email","email.email@email.com") // true
```

## Example

```
import useRegex from useRegex

[...]

  {useRegex("email","email.email@email.com") ? <h1>Sucess</h1> : <h1>Error</h1> } // <h1>Sucess</h1>

```


