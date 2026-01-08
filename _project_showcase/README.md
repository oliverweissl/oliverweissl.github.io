# Project Showcase System

This directory contains paper showcases with interactive demonstrations and detailed information about research publications.

## Directory Structure

```
project_showcase/
├── _template/              # Template for new showcases
│   ├── index.md.template  # Showcase page template
│   └── images/            # Placeholder for images
├── create_showcase.sh     # Quick-start script
├── mimicry/               # Example: Mimicry project
│   ├── index.md          # Showcase page (Markdown + HTML)
│   └── images/           # Project-specific images
└── hynea/                 # Example: HyNeA project
    ├── index.md          # Showcase page
    └── images/           # Project-specific images
```

## Shared Assets

All showcases use shared CSS from `/public/project_showcase/`:
- `bulma.min.css` - Bulma CSS framework for layout
- `fontawesome.all.min.css` - FontAwesome icons (CSS-only, no JS)
- `project_showcase.css` - Custom showcase styles

**Benefits:**
- Fast page loads (shared assets cached by browser)
- Consistent styling across all showcases
- Easy maintenance (update once, applies everywhere)
- No JavaScript required for icons

## Creating a New Showcase

### Option 1: Using the Script (Recommended)

```bash
cd project_showcase
./create_showcase.sh your-project-name
```

This will:
1. Create `your-project-name/` directory
2. Create `your-project-name/images/` for images
3. Copy the template to `your-project-name/index.md`
4. Replace PROJECT_NAME placeholders

### Option 2: Manual Creation

1. Copy the template directory:
   ```bash
   cp -r _template/ your-project-name/
   ```

2. Rename the template file:
   ```bash
   mv your-project-name/index.md.template your-project-name/index.md
   ```

3. Replace all `PROJECT_NAME` with your project name:
   ```bash
   sed -i 's/PROJECT_NAME/your-project-name/g' your-project-name/index.md
   ```

## Customizing Your Showcase

Edit `your-project-name/index.md` and customize:

### Frontmatter (YAML at the top)

```yaml
---
layout: project_showcase
title: "Your Paper Title"
description: "Brief description for SEO"
keywords: "keyword1, keyword2, keyword3"
favicon: "/project_showcase/your-project/images/favicon.ico"

authors:
  - name: "Author Name"
    url: "https://author-website.com"  # Optional
    affiliation: [1, 2]  # Institution numbers

affiliations:
  - "Institution 1"
  - "Institution 2"

links:
  - type: "paper"
    url: "https://doi.org/..."
    icon: "ai ai-acm"  # See Icon Reference below
    label: "Paper"
  - type: "arxiv"
    url: "https://arxiv.org/abs/..."
    icon: "ai ai-arxiv"
    label: "arXiv"
  - type: "code"
    url: "https://github.com/..."
    icon: "fab fa-github"
    label: "Code"

bibtex: |
  @article{yourkey2025,
    title={Your Title},
    author={Authors},
    journal={Venue},
    year={2025}
  }

og_image: "/project_showcase/your-project/images/teaser.png"
---
```

### Content (HTML sections)

The template provides:
- **Hero section**: Automatically renders authors, affiliations, and links from frontmatter
- **Teaser section**: Add your main teaser image
- **Abstract section**: Replace placeholder text
- **Custom sections**: Add as many as needed

### Adding Images

1. Add images to `your-project-name/images/`
2. Reference them using Jekyll's `relative_url` filter:
   ```html
   <img src="{{ '/project_showcase/your-project/images/figure.png' | relative_url }}" alt="Description"/>
   ```

### Icon Reference

**Academic Icons** (from Academicons):
- `ai ai-acm` - ACM
- `ai ai-ieee` - IEEE
- `ai ai-arxiv` - arXiv
- `ai ai-doi` - DOI
- `ai ai-google-scholar` - Google Scholar
- [Full list](https://jpswalsh.github.io/academicons/)

**FontAwesome Icons**:
- `fab fa-github` - GitHub
- `fab fa-gitlab` - GitLab
- `fas fa-file-pdf` - PDF
- `fas fa-link` - Generic link
- [Full list](https://fontawesome.com/icons)

## Testing Your Showcase

1. Build the site:
   ```bash
   bundle exec jekyll build
   ```

2. Serve locally:
   ```bash
   bundle exec jekyll serve
   ```

3. Visit:
   ```
   http://localhost:4000/project_showcase/your-project-name
   ```

4. Check:
   - All images load correctly
   - All links work
   - Layout is responsive (test on mobile)
   - No console errors

## Linking from Blog Posts

To announce your showcase in a blog post (`_posts/`):

```yaml
---
layout: post
title: Your Paper Title
link: https://oliverweissl.github.io/project_showcase/your-project-name
categories:
  - papers
  - conference
---
```

## Advanced Customization

### Custom CSS

If you need project-specific styling:

1. Create `your-project/custom.css`
2. Add to frontmatter:
   ```yaml
   custom_css: "/project_showcase/your-project/custom.css"
   ```

### Image Grids

Create multi-column layouts:

```html
<div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
  <div>
    <img src="..." alt="..." style="width:100%; height:auto;">
    <h3 class="subtitle has-text-centered fig-caption">Caption 1</h3>
  </div>
  <div>
    <img src="..." alt="..." style="width:100%; height:auto;">
    <h3 class="subtitle has-text-centered fig-caption">Caption 2</h3>
  </div>
  <div>
    <img src="..." alt="..." style="width:100%; height:auto;">
    <h3 class="subtitle has-text-centered fig-caption">Caption 3</h3>
  </div>
</div>
```

### Bulma CSS Classes

The showcase uses [Bulma CSS framework](https://bulma.io/). Useful classes:

- `title is-1` to `title is-6` - Headings
- `subtitle` - Subheadings
- `content` - Content wrapper with default typography
- `has-text-centered` - Center text
- `has-text-justified` - Justify text
- `container` - Responsive container
- `is-max-desktop` - Max width for desktop

## Performance Tips

- **Optimize images**: Use tools like `optipng` or `jpegoptim`
  ```bash
  find images -name "*.png" -exec optipng {} \;
  ```

- **Use appropriate formats**: PNG for diagrams, JPG for photos, SVG for icons

- **Compress large images**: Target < 500KB per image

## Troubleshooting

**Images not loading:**
- Check paths use `relative_url` filter
- Verify images are in the correct directory
- Check case sensitivity in filenames

**Layout broken:**
- Validate YAML frontmatter syntax
- Check for missing closing tags in HTML
- Rebuild site: `bundle exec jekyll build`

**Icons not showing:**
- Verify icon class names (check Academicons/FontAwesome docs)
- CSS-only icons don't require JavaScript

**Build errors:**
- Check Jekyll output for specific errors
- Validate liquid template syntax
- Ensure all required frontmatter fields are present

## Examples

See existing showcases for reference:
- `mimicry/index.md` - Full research paper showcase
- `hynea/index.md` - Template-based showcase

## Support

For Jekyll-specific issues, see: https://jekyllrb.com/docs/
For Bulma CSS, see: https://bulma.io/documentation/
