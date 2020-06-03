---
title: "How many possible chess games are there?"
date: "2020-06-02"
---

Most possible chess games are totally random.
For example, say in every chess position on average there are 3 good moves, on average there are around 23 possible moves!

We can come up with an estimate by writing a program
to compute the average number of legal moves, and the average game length when playing randomly.

So lets do it! I'm going to be using the [python-chess](https://pypi.org/project/python-chess) library,
while writing this in a language like rust would be far more efficent, we really only need to run this once, so python will be good enough.

First we'll need `chess` and `random`
```py
import chess
import random
```

And a function that returns the length of a random game, and the average move count.
```py
def play_random_game() -> (int, int):
    b = chess.Board()
    total_legal_moves = 0
    while not b.is_game_over():
        legal_moves = list(b.legal_moves)
        total_legal_moves += len(legal_moves)
        b.push(random.choice(legal_moves))

    game_length = len(b.move_stack)
    return game_length, total_legal_moves / game_length
```

Then we can play a few thousand random games (this takes forever, python is slow!)
```py
avg_length = 0
avg_legal  = 0
n_games = 10000
for i in range(n_games):
  length, moves = play_random_game()
  avg_length += length
  avg_legal += moves
  print(f'[{i}] length: {length} moves: {moves}')

avg_length /= n_games
avg_legal /= n_games

print(f'avg_length: {avg_length} avg_legal: {avg_legal}')
```

For me this gives `avg_length: 355.9369 avg_legal: 23.09636004565067`
thus, there are approximately `23 ^ 355` possible chess games.

In future I might rewrite this in rust and average a larger amount of games, but for now this should be a decent estimate.
