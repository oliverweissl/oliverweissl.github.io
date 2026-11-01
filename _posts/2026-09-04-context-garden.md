---
layout: post
title: "🌱 Context Garden: Trimming the Weeds from Your Agent's Context"
authors: Oliver Weißl
link: https://github.com/oliverweissl/context-garden
button_label: To the repository
venue: "GitHub"
categories:
- project
---
**[Update 11.2026]** Context Garden has reached **v0.2.0** and grown from a loose set of skills into a context management suite for coding agents on multi-repo platforms. The main changes:

- 🍄 **mycelium** (new): gates subagent delegation with bounded briefs, prevents duplicate investigations, and shares finding notes between agents.
- 🏡 **greenhouse** (new): shared memory across the repositories of one platform through per-repo cards.
- 🌿 **trellis** is no longer part of the suite, which now focuses purely on context management.
- **Claude Code plugin**: all skills can be installed in one go, and they ship with hooks (e.g. compost intercepts raw build/test commands, pruner adds a code slice when a traceback is pasted) and helper agents (`scout`, `gardener`, `envoy`).
- **Opt-in by default**: every skill starts `off`. Presets (`solo`, `platform`, `swarm`, `platform-swarm`, `logs`) switch on the right combination for a given setup.
- **ContextGarden desktop app**: an optional Tauri app for macOS, Windows, and Linux that manages accounts, starts gardens from repos or GitHub/GitLab orgs, and installs skills into each agent.
- **Benchmarks**: a first benchmark suite for v0.2.0 is in the repository. Results so far are mixed and based on small samples, so I am treating them as a starting point for refining the skills rather than as a headline number.

Installing the skills as a Claude Code plugin:

```bash
/plugin marketplace add oliverweissl/context-garden
/plugin install context-garden@context-garden
/context-garden:setup
```

Individual skills can still be copied into `~/.claude/skills/` or a project's `.claude/skills/`.

**[Original 04.09.2026]** I started a new open-source project: [Context Garden](https://github.com/oliverweissl/context-garden), a collection of self-contained Agent Skills that cut an agent's context usage. The skills are deterministic, run fully offline, and make no LLM calls inside the tooling itself. They are most useful for extended coding sessions in bigger repositories, where context quickly fills up with repeated exploration and noisy tool output.

At launch, the garden contained five skills:

- 🌰 **seedbank**: promotes repeatedly rediscovered repository facts into a small, always-loaded `AGENTS.md`.
- ✂️ **pruner**: returns exact `file:start-end` ranges worth reading (Python and C/C++) instead of grep-exploring.
- ♻️ **compost**: compacts huge compiler, test, CI, and HPC output into clustered summaries.
- 🌿 **trellis**: a correctness gate for numerical code (convergence order, residuals, conditioning).
- 🌾 **weeder**: shrinks a skill's always-loaded token cost without losing instructions.

Installing a skill is as simple as copying it into your agent's skill directory:

```bash
cp -r skills/{skill} ~/.claude/skills/{skill}   # or project's .claude/skills/
```

The project is still a work in progress. I am still evaluating the benefits and refining the skill engineering, so feedback and contributions are very welcome. For more information, click on the *To the repository* button at the bottom of the page.
