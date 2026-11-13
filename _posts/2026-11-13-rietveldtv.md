---
layout: post
title: "📺 RietveldTV: A Quiet, Ad-Free Home Screen for Android TV"
authors: Oliver Weißl
link: https://github.com/oliverweissl/RietveldTV
button_label: To the repository
venue: "GitHub"
teaser: /images/teasers/rietveldtv.jpg
categories:
- project
---
I started another open-source project: [RietveldTV](https://github.com/oliverweissl/RietveldTV), a minimal home screen for Android TV and Google TV. My TV's stock launcher is mostly recommendations and ads, and I wanted the opposite: a black room, one spotlight, and only the apps I actually use. The look borrows from Gerrit Rietveld's *Red and Blue Chair* and De Stijl, which means flat planes, hard edges, and red, blue, and yellow used sparingly.

What it does today:

- 🔦 **A spotlight instead of a grid.** The focused app is lit from above and sits in a pool of light, the neighbors sink into the dark. The light is computed per pixel, so the beam has no banding or ragged edges.
- 🔲 **Logo-only icons.** No background plates: modern apps ship their logo as a separate transparent layer, and for flat logo-on-colour icons such as Netflix the backdrop is keyed out.
- 🟥 **Optional Rietveld logos.** A switch replaces the company logos with abstract Mondrian-style tiles in the three accent colors, each with a hint of the original (Netflix becomes two red bars joined by a yellow slash).
- 🕐 **Widgets you add on the TV.** Home → **+ Widgets** opens an editor you drive with the remote: clocks in other time zones, and weather with a short forecast for a city you type in. Each widget can sit in one of five places on the screen.
- 🔒 **Private by default.** No ads, no recommendations, no accounts, no analytics. The only network access is the weather widget, which sends just the city name or coordinates you configure to [Open-Meteo](https://open-meteo.com).
- 🧩 **One JSON file.** Apps and widgets live in a `config.json`, and the editor writes it for you.

It is plain Android Views and Canvas with no dependencies, set in IBM Plex. Installing needs no root: you enable debugging on the TV and push the APK over Wi-Fi with `adb`.

```bash
git clone https://github.com/oliverweissl/RietveldTV.git && cd RietveldTV
scripts/install.sh <tv-ip> RietveldTV.apk   # APK from the Releases page, or build with ./gradlew assembleDebug
```

Everything is reversible, and `scripts/restore.sh` brings the stock launcher back. The repository also has a step-by-step install guide, an interactive browser demo of the launcher (`docs/demo.html`), and a guide to customizing the look with Claude Code.

I built it together with Claude Code in a tight loop: describe a change, build, install on the TV, take a screenshot, and look at it. A small hook in the repo refreshes the README screenshot from the TV after every install, so the documentation cannot drift from the design. That loop is also how the project is meant to be customized by others.

A few honest caveats. I have only tested it on a single TV (an Android 14 Google TV from Xiaomi), so other brands may need small tweaks, in particular to make the launcher the default Home screen. Some TVs rank their own launcher or setup wizard higher, and the README documents the workaround. The Rietveld logos are my own abstractions, not the companies' logos, and the project is not affiliated with Google, Xiaomi, Apple, Netflix, Spotify, or YouTube. Feedback and contributions, especially reports from other TVs, are very welcome. For more information, click on the *To the repository* button at the bottom of the page.
