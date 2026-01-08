---
layout: project_showcase
title: "Targeted Deep Learning System Boundary Testing"
description: "Mimicry is a technique for targeted deep learning-system boundary testing."
keywords: "Mimicry, DL-Testing, Boundary Testing, Deep Learning"
favicon: "/project_showcase/mimicry/images/boundary_manifold_6-5-1.ico"

# Authors and affiliations
authors:
  - name: "Oliver Weißl"
    url: "https://oliverweissl.github.io"
    affiliation: [1, 2]
  - name: "Amr Abdellatif"
    url: "//:0"
    affiliation: [1]
  - name: "Xingcheng Chen"
    url: "https://www.linkedin.com/in/xingcheng-chen-aab980263/"
    affiliation: [1, 2]
  - name: "Giorgi Merabishvili"
    url: "https://giorgix121.github.io/"
    affiliation: [3]
  - name: "Vincenzo Riccio"
    url: "https://p1ndsvin.github.io/"
    affiliation: [4]
  - name: "Severin Kacianka"
    url: "https://kacianka.at/"
    affiliation: [2]
  - name: "Andrea Stocco"
    url: "https://tsigalko18.github.io/"
    affiliation: [1, 2]

affiliations:
  - "Technical University of Munich"
  - "fortiss GmbH"
  - "North Carolina State University"
  - "University of Udine"

# Publication links
links:
  - type: "paper"
    url: "https://dl.acm.org/doi/10.1145/3771557"
    icon: "ai ai-acm"
    label: "Paper"
  - type: "arxiv"
    url: "https://arxiv.org/abs/2408.06258"
    icon: "ai ai-arxiv"
    label: "arXiv Preprint"
  - type: "code"
    url: "https://github.com/ast-fortiss-tum/SMOO/tree/archive/mimicry"
    icon: "fab fa-github"
    label: "Code"

# BibTeX citation
bibtex: |
  @article{weissl2024targeted,
    title={Targeted Deep Learning System Boundary Testing},
    author={Wei{\ss}l, Oliver and Abdellatif, Amr and Chen, Xingcheng and Merabishvili, Giorgi and Riccio, Vincenzo and Kacianka, Severin and Stocco, Andrea},
    journal={arXiv preprint arXiv:2408.06258},
    year={2024}
  }

# SEO and social
og_image: "/project_showcase/mimicry/images/sg_example.png"
---

<section class="hero">
  <div class="hero-body">
    <div class="container is-max-desktop">
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <h1 class="title is-1 publication-title">{{ page.title }}</h1>

          <!-- Authors -->
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

          <!-- Affiliations -->
          <div class="is-size-5 publication-authors">
            {% for affiliation in page.affiliations %}
            <span class="author-block">
              <sup>{{ forloop.index }}</sup>{{ affiliation }}{% unless forloop.last %},{% endunless %}
            </span>
            {% endfor %}
          </div>

          <!-- Links -->
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

<section class="hero teaser">
  <div class="container is-max-desktop">
    <div class="hero-body">
      <img height="auto" src="{{ '/project_showcase/mimicry/images/sg_example.png' | relative_url }}" alt="Mimicry example"/>
      <h2 class="subtitle has-text-centered">
        <span class="dnerf">Mimicry</span> mixes features of a blue car with those of a white truck, producing different outputs depending on the latent layers used.
      </h2>
    </div>
  </div>
</section>

<section class="section">
  <div class="container is-max-desktop">
    <!-- Abstract. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Abstract</h2>
        <div class="content has-text-justified">
          Evaluating the behavioral boundaries of deep learning (DL) systems is crucial for understanding their reliability
            across diverse, unseen inputs. Existing solutions fall short as they rely on untargeted, random perturbations
            with limited controlled input variations. In this work, we introduce Mimicry, a novel black-box test generator
            for fine-grained, targeted exploration of DL system boundaries. Mimicry performs boundary testing by
            leveraging the probabilistic nature of DL outputs to identify promising directions for exploration. By using
            style-based GANs to disentangle inputs into content and style components, Mimicry generates boundary test
            inputs by mimicking features from both source and target classes. We evaluated Mimicry's effectiveness in
            generating boundary inputs for five DL image classification systems, comparing it to two baselines from the
            literature. Our results show that Mimicry consistently identifies inputs up to 25× closer to the true decision
            boundary, outperforming the baselines with statistical significance. Moreover, it generates semantically
            meaningful boundary test cases that reveal new functional misbehaviors, while the baselines mostly produce
            corrupted or invalid inputs. Thanks to its enhanced control over latent space manipulations, Mimicry remains
            effective as dataset complexity grows, resulting in a up to 36% higher validity rate and competitive diversity,
            as supported by a comprehensive human assessment.
        </div>
      </div>
    </div>
    <!--/ Abstract. -->
  </div>
</section>


<section class="section">
  <div class="container is-max-desktop">

    <div class="columns is-centered">
      <div class="column">
        <div class="content">
          <h2 class="title is-3">Boundary Testing Approaches</h2>
          <p>
            Most boundary-testing methodologies focus on the untargeted case, where the goal is simply to find any test case that crosses the decision boundary—regardless of its location.
In contrast, <span class="dnerf">Mimicry</span> can operate not only in untargeted, but also in a targeted fashion, directing tests toward specific classes.
This targeted capability is particularly valuable when only a limited subset of class pairs yield meaningful semantic boundaries.
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
              <div>
          <img src="{{ '/project_showcase/mimicry/images/UBT.png' | relative_url }}" alt="Untargeted boundary testing." style="width:100%; height:auto;">
              <h3 class="subtitle has-text-centered teaser fig-caption">Untargeted Boundary Testing</h3>
                  </div>
              <div>
          <img src="{{ '/project_showcase/mimicry/images/TBT.png' | relative_url }}" alt="Targeted boundary testing." style="width:100%; height:auto;">
              <h3 class="subtitle has-text-centered teaser fig-caption">Targeted Boundary Testing</h3>
                  </div>
        </div>
        </div>
      </div>
    </div>
    <div class="columns is-centered">

      <!-- Visual Effects. -->
      <div class="column">
        <div class="content">
          <h2 class="title is-3">Comparing <span class="dnerf">Mimicry</span> with Baselines</h2>
          <p>
            We compare <span class="dnerf">Mimicry</span> against two established baselines.
DeepJanus is a model-based approach that generates candidate pairs near decision boundaries, while Sinvad is a Generative AI method that uses VAEs to produce test cases.
In our experiments, <span class="dnerf">Mimicry</span> not only produced test cases closer to the decision boundary, but also generated images that were generally more semantically meaningful.

DeepJanus is constrained by its model-based nature, which can force outputs to be out-of-distribution in certain datasets.
Sinvad, on the other hand, quickly loses realism, as its manipulation strategy tends to blur the final outputs.
<span class="dnerf">Mimicry</span> avoids both limitations: it is not restricted by domain models, and instead of simply blurring test cases, it introduces structural changes that preserve realism while probing the boundary.
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
              <div>
          <img src="{{ '/project_showcase/mimicry/images/SMOO_SVHN_example-1.png' | relative_url }}" alt="SVHN example for Mimicry." style="width:100%; height:auto;">
              <h3 class="subtitle has-text-centered fig-caption"><span class="dnerf">Mimicry</span> - SVHN</h3>
                  </div>
              <div>
          <img src="{{ '/project_showcase/mimicry/images/Sinvad_SVHN_example-1.png' | relative_url }}" alt="SVHN example for Sinvad." style="width:100%; height:auto;">
              <h3 class="subtitle has-text-centered fig-caption">Sinvad - SVHN</h3>
                  </div>
              <div>
              <img src="{{ '/project_showcase/mimicry/images/DeepJanus_SVHN_example-1.png' | relative_url }}" alt="SVHN example for DeepJanus." style="width:100%; height:auto;">
              <h3 class="subtitle has-text-centered fig-caption">DeepJanus - SVHN</h3>
                  </div>
        </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
              <div>
          <img src="{{ '/project_showcase/mimicry/images/SMOO_Imagenet_example-1.png' | relative_url }}" alt="ImageNet example for Mimicry." style="width:100%; height:auto;">
              <h3 class="subtitle has-text-centered fig-caption"><span class="dnerf">Mimicry</span> - ImageNet</h3>
                  </div>
              <div>
          <img src="{{ '/project_showcase/mimicry/images/Sinvad_Imagenet_example-1.png' | relative_url }}" alt="ImageNet example for Sinvad." style="width:100%; height:auto;">
              <h3 class="subtitle has-text-centered fig-caption">Sinvad - ImageNet</h3>
                  </div>
        </div>
        </div>
      </div>
    </div>


      <div class="columns is-centered">

      <!-- Visual Effects. -->
      <div class="column">
        <div class="content">
          <h2 class="title is-3">Executive Summary</h2>
          <p>We present <span class="dnerf">Mimicry</span>, a targeted boundary-testing method for deep learning classifiers that locates decision boundary inputs through latent feature mixing and SUT feedback.
              By leveraging disentangled latent space representations, <span class="dnerf">Mimicry</span> delivers high-control, high-fidelity test cases that remain in-distribution, outperforming DeepJanus and Sinvad across all benchmarks—especially in complex datasets.
              Its targeted exploration enables meaningful class-to-class boundary testing, improving functional coverage while avoiding unrealistic or overly blurred outputs.
              For future work <span class="dnerf">Mimicry</span>'s realism and boundary precision make it particularly promising for safety-critical domains such as autonomous driving and medical imaging, where valid, semantically rich test cases are essential.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
