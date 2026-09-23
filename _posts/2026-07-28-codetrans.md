---
layout: post
title: "CodeTransBenchmark: Evaluating LLM-based Code Translation and Repair Across Programming Languages"
authors: Vera Kowalczuk, Oliver Weißl, Severin Kacianka, Andrea Stocco
link: https://arxiv.org/abs/2609.20257
categories:
- preprint
---
In this work, we study how well Large Language Models translate code between programming languages and how well they repair their own translation errors. We present CodeTransBenchmark, a framework for evaluating LLM-based translation and repair, and evaluate eight models on three datasets and 12 language pairs.

For more information, click on the *To the paper* button at the bottom of the page.

### Abstract:

> Large Language Models (LLMs) pre-trained on expansive text and code corpora have revealed promising code generation abilities and have attracted increasing attention in code translation. In this work, we investigate the effectiveness of LLMs in code translation and translation error repair. First, we present CodeTransBenchmark, a framework for evaluating LLM-based translation and repair and devise a post-processing strategy to extract code from inconsistent LLM outputs. Then, we discuss an empirical study evaluates eight models on three datasets and 12 language pairs, in which we categorize incorrect translations by errors to identify weaknesses of existing LLMs. Our work shows that while LLMs specifically trained for multi-lingual coding, like Codestral, correctly translate the majority of code, most general-purpose models struggle with the syntactic rules of the target language. The analysis of erroneous translations reveals the substantial impact of the interrelationship between involved programming languages and training data on the effectiveness. We show that a general post-processing approach must tolerate inconsistencies and leverage the predictability of LLM answers. Further, we show that iterative translation repair via automated feedback significantly improves translation accuracy. While our combined findings highlight the potential of LLMs to automate code translation, an effective deployment of LLM-based code translation in practice would require models with larger context windows.
