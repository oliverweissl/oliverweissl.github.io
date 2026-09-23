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
I started a new open-source project: [Context Garden](https://github.com/oliverweissl/context-garden), a collection of self-contained Agent Skills that cut an agent's context usage. The skills are deterministic, run fully offline, and make no LLM calls inside the tooling itself. They are most useful for extended coding sessions in bigger repositories, where context quickly fills up with repeated exploration and noisy tool output.

The garden currently contains five skills:

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
