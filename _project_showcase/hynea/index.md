---
layout: project_showcase
permalink: /project_showcase/hynea/
title: "HyperNet-Adaptation for Diffusion-Based Test Case
Generation"
description: "HyNeA provides dataset-free
controllability through hypernetworks, allowing targeted manipulation of the generative process without
relying on architecture-specific conditioning mechanisms or dataset-driven adaptations such as fine-tuning."
keywords: "DL testing, Diffusion Models, Generative AI"
favicon: "/project_showcase/hynea/images/favicon.ico"

# Authors and affiliations
authors:
  - name: "Oliver Weißl"
    url: "https://oliverweissl.github.io"
    affiliation: [1, 2]
  - name: "Vincenzo Riccio"
    url: "https://p1ndsvin.github.io/"
    affiliation: [3]
  - name: "Severin Kacianka"
    url: "https://kacianka.at/"
    affiliation: [2]
  - name: "Andrea Stocco"
    url: "https://tsigalko18.github.io/"
    affiliation: [1, 2]

affiliations:
  - "Technical University of Munich"
  - "fortiss GmbH"
  - "University of Udine"

# Publication links
links:
  - type: "paper"
    url: "https://doi.org/..."
    icon: "ai ai-acm"  # or ai-ieee, ai-doi, etc.
    label: "Paper"
  - type: "arxiv"
    url: "https://arxiv.org/abs/..."
    icon: "ai ai-arxiv"
    label: "arXiv"
  - type: "code"
    url: "https://github.com/oliverweissl/SMOO/tree/archive/hynea/"
    icon: "fab fa-github"
    label: "Code"

# BibTeX citation
bibtex: |
  @article{yourkey2025,
    title={Your Paper Title},
    author={Author 1 and Author 2 and Author 3},
    journal={Conference/Journal Name},
    year={2025}
  }

# SEO and social sharing (optional)
og_image: "/project_showcase/hynea/images/teaser.png"
---

<section class="hero">
  <div class="hero-body">
    <div class="container is-max-desktop">
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <h1 class="title is-1 publication-title">{{ page.title }}</h1>

          <!-- Authors (automatically generated from frontmatter) -->
          <div class="is-size-5 publication-authors">
            {% for author in page.authors %}
            <span class="author-block">
              {% if author.url %}
              <a href="{{ author.url }}" target="_blank">{{ author.name }}</a>
              {% else %}
              {{ author.name }}
              {% endif %}
              <sup>{{ author.affiliation | join: ',' }}</sup>{% unless forloop.last %},{% endunless %}
            </span>
            {% endfor %}
          </div>

          <!-- Affiliations (automatically generated from frontmatter) -->
          <div class="is-size-5 publication-authors">
            {% for affiliation in page.affiliations %}
            <span class="author-block">
              <sup>{{ forloop.index }}</sup>{{ affiliation }}{% unless forloop.last %},{% endunless %}
            </span>
            {% endfor %}
          </div>

          <!-- Links (automatically generated from frontmatter) -->
          <div class="column has-text-centered">
            <div class="publication-links">
              {% for link in page.links %}
              <span class="link-block">
                <a href="{{ link.url }}" class="external-link button is-normal is-rounded is-dark" target="_blank">
                  <span class="icon"><i class="{{ link.icon }}"></i></span>
                  <span>{{ link.label }}</span>
                </a>
              </span>
              {% endfor %}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Teaser Image -->
<section class="hero teaser">
  <div class="container is-max-desktop">
    <div class="hero-body">
      <img src="{{ '/project_showcase/hynea/images/teaser.png' | relative_url }}" alt="Teaser image"/>
      <h2 class="subtitle has-text-centered">
        Caption for your teaser image explaining the main concept or result.
      </h2>
    </div>
  </div>
</section>

<!-- Abstract -->
<section class="section">
  <div class="container is-max-desktop">
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Abstract</h2>
        <div class="content has-text-justified">
          <p>
            The increasing deployment of deep learning systems requires systematic evaluation of their reliability in
            real-world scenarios. Traditional gradient-based adversarial attacks introduce small perturbations that rarely
            correspond to realistic failures and mainly assess robustness rather than functional behavior. Generative
            test generation methods offer an alternative but are often limited to simple datasets or constrained input
            domains. Although diffusion models enable high-fidelity image synthesis, their computational cost and limited
            controllability restrict their applicability to large-scale testing. We present HyNeA, a generative testing
            method that enables direct and efficient control over diffusion-based generation. HyNeA provides dataset-free
            controllability through hypernetworks, allowing targeted manipulation of the generative process without
            relying on architecture-specific conditioning mechanisms or dataset-driven adaptations such as fine-tuning.
            HyNeA employs a distinct training strategy that supports instance-level tuning to identify failure-inducing
            test cases without requiring datasets that explicitly contain examples of similar failures. This approach
            enables the targeted generation of realistic failure cases at substantially lower computational cost than
            search-based methods. Experimental results show that HyNeA improves controllability and test diversity
            compared to existing generative test generators and generalizes to domains where failure-labeled training
            data is unavailable.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Add your custom sections below -->
<!-- Example: Method overview, Results, Comparisons, etc. -->

<section class="section">
  <div class="container is-max-desktop">
    <div class="columns is-centered">
      <div class="column">
        <div class="content">
          <h2 class="title is-3">Section Title</h2>
          <p>
            Your content here. You can add multiple sections as needed.
          </p>

          <!-- Example: Adding images in a grid -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div>
              <img src="{{ '/project_showcase/hynea/images/figure1.png' | relative_url }}" alt="Figure 1" style="width:100%; height:auto;">
              <h3 class="subtitle has-text-centered fig-caption">Figure 1 Caption</h3>
            </div>
            <div>
              <img src="{{ '/project_showcase/hynea/images/figure2.png' | relative_url }}" alt="Figure 2" style="width:100%; height:auto;">
              <h3 class="subtitle has-text-centered fig-caption">Figure 2 Caption</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
