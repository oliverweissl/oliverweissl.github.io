---
title: About
author: oliverweissl
layout: page
timeline:
  - kind: work
    start: "2026-09"
    end: now
    title: Senior Data Scientist
    org: NorCom
    org_url: https://www.norcom.de/
    place: Munich
    desc: Scaling RAG solutions from thousands to millions of files.
  - kind: edu
    start: "2024-09"
    end: now
    title: PhD in Generative Testing of DL Systems
    org: Technical University of Munich
    org_url: https://www.tum.de/
    logo: /images/logos/tum.svg
  - kind: work
    start: "2024-09"
    end: "2026-06"
    title: Researcher
    org: fortiss GmbH
    org_url: https://www.fortiss.org/
    place: Munich
    desc: Applied AI research in industry and public-sector projects; supervised Bachelor's and Master's projects on deep learning system testing.
  - kind: edu
    start: "2023-09"
    end: "2024-07"
    title: "MSc Information Studies: Data Science"
    org: University of Amsterdam
    org_url: https://www.uva.nl/en
    logo: /images/logos/uva.svg
    desc: 'Thesis: <a href="/papers/conference/thesis/2024/09/06/equivdec/">Machine Learning Decoder for Topological Codes in 3 Dimensions</a>'
  - kind: work
    start: "2023-09"
    end: "2024-04"
    title: Research Assistant
    org: CI Group, VU Amsterdam
    org_url: https://cs.vu.nl/ci/
    desc: 'My responsibilities were the development of <a href="https://github.com/ci-group/revolve2">Revolve2</a>, a simulator geared towards evolutionary computing in the domain of robotics, and assisting in scientific projects.'
  - kind: edu
    start: "2022-10"
    end: "2023-02"
    title: Erasmus Semester in Computer Science
    org: University of Innsbruck
    org_url: https://www.uibk.ac.at/en/
    logo: /images/logos/uibk.svg
  - kind: work
    start: "2022-04"
    end: "2024-07"
    fork: true
    title: Teaching Assistant
    org: VU Amsterdam
    org_url: https://vu.nl/en
    details_summary: Courses I have been teaching and assisting in
    details:
      - name: Project Collective Intelligence
        url: https://studiegids.vu.nl/en/Bachelor/2023-2024/artificial-intelligence/XB_0026#/
      - name: Human-Computer Interaction
        url: https://studiegids.vu.nl/en/Bachelor/2023-2024/artificial-intelligence/XB_0013#/
      - name: Knowledge & Data
        url: https://studiegids.vu.nl/en/Bachelor/2023-2024/artificial-intelligence/X_400083#/
      - name: Machine Learning
        url: https://studiegids.vu.nl/en/Bachelor/2023-2024/artificial-intelligence/X_400154#/
      - name: Computational Intelligence
        url: https://studiegids.vu.nl/en/Bachelor/2023-2024/artificial-intelligence/XB_0025#/
  - kind: edu
    start: "2020-09"
    end: "2023-07"
    title: BSc Artificial Intelligence
    org: Vrije Universiteit Amsterdam
    org_url: https://vu.nl/en
    place: Honors Programme
    logo: /images/logos/vu.png
    logo_raster: true
    desc: 'Thesis: <a href="/papers/conference/thesis/2023/12/05/morphnov/">Morphological-Novelty in Modular Robot Evolution</a>'
---

<img alt="" src="/images/portrait.jpeg" width="175" height="175" class="portrait-float" />

Hello, I'm Oliver Weißl, a Senior Data Scientist at [NorCom](https://www.norcom.de/) and a PhD candidate at the Technical University of Munich (TUM). Previously, I was a researcher at fortiss GmbH. My academic journey began with a Bachelor's degree in Artificial Intelligence from Vrije Universiteit (VU) Amsterdam, followed by a Master's in Information Studies at the University of Amsterdam (UvA).

My research focuses on testing of Deep Learning Systems, by exploiting knowledge encoded in latent spaces. Testing plays a critical role across various domains to ensure that a system functions as intended. However, the complexity of DL models makes effective testing both more challenging and more essential.

Currently, I am exploring how latent representations in generative models can be used to test deep neural networks more effectively.
Other research interests include classical and population-based optimization, evolutionary computing, robotics, machine learning, and quantum computing.

<div class="now-box">
  <span class="now-label">now</span>
  <ul>
    <li><strong>Senior Data Scientist</strong> @ <a href="https://www.norcom.de/">NorCom</a>, scaling RAG solutions from thousands to millions of files.</li>
    <li><strong>PhD Candidate</strong> @ <a href="https://www.tum.de/">TUM</a>, generative testing of deep learning systems.</li>
  </ul>
  <div class="now-actions">
    <a class="action-button action-button-primary" href="/files/Oliver_Weissl_CV.pdf" target="_blank"><i class="fa-regular fa-file-lines" aria-hidden="true"></i> Download CV</a>
    <a class="action-button" href="https://www.linkedin.com/in/oliver-weissl" target="_blank"><i class="fa-brands fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
    <a class="action-button" href="mailto:o.weissl@tum.de"><i class="fa-regular fa-envelope" aria-hidden="true"></i> Email</a>
  </div>
</div>

## Timeline

<p class="tl-legend"><span class="tl-legend-work">work</span><span class="tl-legend-edu">education</span><span class="tl-legend-line">role running</span><span class="tl-legend-gap">gap</span></p>

{% comment %}
  Timeline entries come from `timeline` in the front matter, newest start first.
  For every row and both lanes we work out whether a role on that lane is
  running just above and just below the row's dot:
    above = some role that started at this row or lower is still running after it
    below = some role that started lower is still running at this row
  A role that stops between two rows ends with a cap at the top of the lower row.
{% endcomment %}
{% assign now_idx = site.time | date: "%Y" | plus: 0 | times: 12 %}
{% assign now_m = site.time | date: "%m" | plus: 0 %}
{% assign now_idx = now_idx | plus: now_m %}
{% assign rows = "" %}
{% for item in page.timeline %}
  {% assign sp = item.start | split: "-" %}
  {% assign s_idx = sp[0] | plus: 0 | times: 12 %}
  {% assign sp_m = sp[1] | plus: 0 %}
  {% assign s_idx = s_idx | plus: sp_m %}
  {% if item.end == "now" %}
    {% assign e_idx = now_idx | plus: 1000 %}
  {% else %}
    {% assign ep = item.end | split: "-" %}
    {% assign e_idx = ep[0] | plus: 0 | times: 12 %}
    {% assign ep_m = ep[1] | plus: 0 %}
    {% assign e_idx = e_idx | plus: ep_m %}
  {% endif %}
  {% capture rows %}{{ rows }}{{ s_idx }}|{{ e_idx }}|{{ item.kind }};{% endcapture %}
{% endfor %}
{% assign rows = rows | split: ";" %}
{% assign lanes = "work,edu" | split: "," %}
<ol class="timeline">
{% for item in page.timeline %}
  {% assign k = forloop.index0 %}
  {% assign t_k = rows[k] | split: "|" | first | plus: 0 %}
  {% assign k_prev = k | minus: 1 %}
  {% if k > 0 %}{% assign t_prev = rows[k_prev] | split: "|" | first | plus: 0 %}{% endif %}
  {% assign sp = item.start | split: "-" %}
  {% if item.end == "now" %}
    {% assign end_label = "now" %}
  {% else %}
    {% assign ep = item.end | split: "-" %}
    {% assign end_label = ep[1] | append: "." | append: ep[0] %}
  {% endif %}
  <li class="tl-item tl-{{ item.kind }}{% if item.end == 'now' %} tl-current{% endif %}">
    {% for lane in lanes %}
      {% assign above = false %}{% assign below = false %}{% assign below_prev = false %}{% assign has_lower = false %}{% assign has_here = false %}{% assign running_now = false %}
      {% for row in rows %}
        {% assign j = forloop.index0 %}
        {% assign r = row | split: "|" %}
        {% if r[2] != lane %}{% continue %}{% endif %}
        {% assign rs = r[0] | plus: 0 %}{% assign re = r[1] | plus: 0 %}
        {% if j >= k %}{% assign has_here = true %}{% if re > t_k %}{% assign above = true %}{% endif %}{% endif %}
        {% if j > k %}{% assign has_lower = true %}{% if re >= t_k %}{% assign below = true %}{% endif %}{% endif %}
        {% if k > 0 and j > k_prev and re >= t_prev %}{% assign below_prev = true %}{% endif %}
        {% if j >= k and re > now_idx %}{% assign running_now = true %}{% endif %}
      {% endfor %}
      {% assign cap = false %}
      {% if above %}
        {% if k == 0 %}{% unless running_now %}{% assign cap = true %}{% endunless %}{% elsif below_prev == false %}{% assign cap = true %}{% endif %}
      {% endif %}
      {% assign lk = lane | slice: 0 %}
      <span class="tl-seg tl-seg-top tl-seg-{{ lk }} {% if above %}on{% elsif has_here %}idle{% endif %}{% if cap %} cap{% endif %}"></span>
      <span class="tl-seg tl-seg-bottom tl-seg-{{ lk }} {% if below %}on{% elsif has_lower %}idle{% endif %}"></span>
    {% endfor %}
    <span class="tl-dot"></span>
    {% if item.fork %}<span class="tl-fork" aria-hidden="true"></span>{% endif %}
    <div class="tl-body">
      {% if item.logo %}<img class="tl-logo{% if item.logo_raster %} tl-logo-raster{% endif %}" src="{{ item.logo }}" alt="{{ item.org }} logo">{% endif %}
      <span class="tl-date">{{ sp[1] }}.{{ sp[0] }} – {{ end_label }}</span>
      <h3 class="tl-title">{{ item.title }}</h3>
      <p class="tl-org"><a href="{{ item.org_url }}">{{ item.org }}</a>{% if item.place %}, {{ item.place }}{% endif %}</p>
      {% if item.desc %}<p class="tl-desc">{{ item.desc }}</p>{% endif %}
      {% if item.details %}
      <details class="tl-details">
        <summary>{{ item.details_summary }}</summary>
        <ul>
          {% for d in item.details %}<li><a href="{{ d.url }}">{{ d.name | escape }}</a></li>{% endfor %}
        </ul>
      </details>
      {% endif %}
    </div>
  </li>
{% endfor %}
</ol>

## Get in contact

If you have any questions or comments don't hesitate to [send me an email](mailto:o.weissl@tum.de).
