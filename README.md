# GTA 6 Meme — "Waited 13 Years"

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/tuyulsembilandua-beep/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/tuyulsembilandua-beep/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01): Jason and Lucia watch the Vice City sunset after a 13-year wait, while the make.fun ghost rises over the skyline like a second sun. The joke: the sick day was booked in 2013.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The post is the entry

The meme (`meme.png`) is posted on X from a public account with make.fun and the play code in the post's text. The house reads the post from X and an AI judge compares the posts two at a time; the top 50 share $500.

`POST.json` holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`main.ts` copies `POST.json` to `out/POST.json` and prints nothing on success. That is all the program has to do: the house reads the post itself from X.
