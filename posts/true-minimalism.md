---
title: "The hidden costs of archlinux"
date: "2020-06-24"
draft: false
---

I've been a longtime user of [archlinux](https://archlinux.org), and dwm, people would make fun of me; "wasting my time" they said. "just use ubuntu" they said

I ignored them, they were haters; they did not understand the devine beauty of a [window manager that uses 2.3mb of ram](https://www.reddit.com/r/unixporn/comments/4tfdzu/ram_usage_of_small_window_managers_a_comparison/), or having [every part of your system separate](https://github.com/baskerville/sxhkd)

And yet, the cost of maintaining such beauty is high, fonts would break, Apps would not play nice with my godlike setup and finally, after spending 2 hours trying to get a java GUI to show something other then white, I decided I had had enough.


![alt-text](/ubuntu-vs-archlinux.png)

So, I switched to ~~ubuntu~~ manjaro

...

I still have some standards

---

"***True freedom is not owning little, it is owning much which can be thrown away***" - Me, Just now

Anyway, switching took me around 3 seconds, I thought I'd take time to get used to new keybinds but guess what!

you can *change* keybinds in xfce4

***amazing right***

For some reason I had the delusion that only with my ultra high iq setup with sxhkd I'd be able to set my own arbitrary hotkeys, but In fact no

I was able to replicate all the important hotkeys I use in around 5 minutes, Setting up the rest of the computer took around 30 minutes.

Overall it would have taken me longer to setup archlinux, despite the substantial work I've put into storing my dotfiles in git, and having setup scripts.

It turns out the only things I need for my dotfiles is a minimal bashrc (these are the only aliases that I'm super used attached to)

```sh
alias p="sudo pacman"
alias yt="youtube-dl --add-metadata -ic" # Download video link
alias yta="yt -x -f bestaudio/best"      # Download only audio
alias v="$EDITOR"

alias g="git"
alias ga="git add"
alias gc="git commit"
alias gp="git push"
alias gs="git status"

set -o vi
```

And a minimal vimrc (though I'm using vscode for most code editing now)
```vim
set sw=2 ts=2
set laststatus=1
syntax on
filetype plugin indent on
set autoindent
set hidden

colo peachpuff

" Save file with <space>w in normal mode
nn <space>w :w<cr>
```

This switch was great, I would draw the analogy of living in your own home vs living in a hotel (assuming they cost the same).

With your own home you need to do all the maintenance, it not only wastes your time, but also stresses you out.

With a hotel all this goes away, and the amount of maintenance is drastically reduced, thus you have more time and feel less stress.

So, while my window manager may use more then 3 megabytes of ram now, I'm saving tons of time and feel better too.

Thanks for reading <3
