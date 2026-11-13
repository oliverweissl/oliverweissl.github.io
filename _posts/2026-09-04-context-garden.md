---
layout: post
title: "🌱 Context Garden: Shared Context for Coding Agents on Multi-Repo Platforms"
authors: Oliver Weißl
link: https://github.com/oliverweissl/context-garden
button_label: To the repository
venue: "GitHub"
categories:
- project
---
**[Update 11.2026 · v0.6.0]** When a platform spans many repositories and several agents work on it at once, context becomes the bottleneck. Every agent pays to rediscover what the system looks like, and they read the same files in parallel. **Context Garden** gives agents shared knowledge and cuts what each one reads. It is open source, runs offline and makes no LLM calls inside its tools.

**[See the showcase →](https://oliverweissl.github.io/context-garden/)** · **[GitHub →](https://github.com/oliverweissl/context-garden)**

### Why use it

- 🏡 **Repos know their neighbours.** *greenhouse* keeps a short card per repository (what it provides, what depends on it) so an agent does not open five other repos to understand one.
- 🍄 **Agents know what the others found.** *mycelium* keeps subagents cheap: bounded briefs, a hard tool budget per agent, and shared finding notes so nobody repeats an investigation.
- ✂️ **Each agent reads less.** *pruner* returns exact line ranges, *compost* turns huge build and test logs into root errors, and *seedbank* promotes facts that keep getting rediscovered into a small `AGENTS.md`.
- 🌾 *weeder* slims a skill's own token cost.

Everything starts **off**. `/context-garden:setup` asks how you work (solo, platform, swarm) and turns on only what fits.

### The desktop app

An optional app for macOS, Windows and Linux turns a whole platform into one window. Pull GitHub orgs or GitLab groups into a *garden*, pick the skills, and run Claude Code, Codex or a shell side by side on several accounts. Agents on the same repo each get their own git worktree.

New in 0.6.0 is **Master Gardener**: link agent terminals as managers and workers. A manager hands tasks to its workers, reads their output and gets their reports back, and the app only allows messages between linked terminals. 0.6.0 also adds multiple windows, mixed SSH/HTTPS cloning and a better checklist for steps an agent hands back to you.

### Try it

```bash
/plugin marketplace add oliverweissl/context-garden
/plugin install context-garden@context-garden
/context-garden:setup
```

Installers for the app are on the [releases page](https://github.com/oliverweissl/context-garden/releases). Benchmark results so far are mixed and based on small samples, so I treat them as a guide for refining the skills, not as a headline number. Feedback and contributions are very welcome.

*Started 04.09.2026 as five skills (seedbank, pruner, compost, trellis, weeder). It has since grown into the suite above.*
