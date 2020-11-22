---
title: "Haskell in a nutshell"
date: "2020-07-19"
draft: false
---

Hmm, this code is too readable, can it be improved?
```hs
spanP :: (Char -> Bool) -> Parser String
spanP f = Parser $ \input ->
	let (token, rest) = span f input
		in Just (rest, token)
```

I know! I'll use `swap`, to invert the tuple, remove that unnessesary `let`
```hs
spanP :: (Char -> Bool) -> Parser String
spanP f = Parser $ \input ->
	Just $ swap $ span f input
```

Can it be improved some more?
I know! I'll use point free notation to remove that pesky `input` binding
```hs
spanP :: (Char -> Bool) -> Parser String
spanP f = Parser $ Just . swap . span f
```

Unfortunently I can't get rid of that pesky `f` binding since `span` is a higher order function so `.` will fail to compose them ): (I could use [a package](https://hackage.haskell.org/package/composition-prelude) but that would be cheating)

...but!
Type anotations don't matter anyway, the compiler can infer them
```hs
spanP f = Parser $ Just . swap . span f
```

You know, technically I don't need all those spaces between `.` and `$`
```hs
spanP f = Parser$Just .swap.span f
```

Is this what peak haskell tastes like?
