#!/bin/bash
# Quick showcase creation script

if [ $# -ne 1 ]; then
    echo "Usage: ./create_showcase.sh PROJECT_NAME"
    echo "Example: ./create_showcase.sh hynea"
    exit 1
fi

PROJECT_NAME=$1
PROJECT_DIR="$PROJECT_NAME"

# Check if project already exists
if [ -d "$PROJECT_DIR" ]; then
    echo "Error: Project directory '$PROJECT_DIR' already exists!"
    exit 1
fi

# Create directory structure
echo "Creating project structure..."
mkdir -p "$PROJECT_DIR/images"

# Copy template
echo "Creating index.md from template..."
cp _template/index.md.template "$PROJECT_DIR/index.md"

# Replace placeholder
echo "Replacing PROJECT_NAME placeholders..."
sed -i "s/PROJECT_NAME/$PROJECT_NAME/g" "$PROJECT_DIR/index.md"

echo ""
echo "✓ Created showcase structure at $PROJECT_DIR"
echo "✓ Created $PROJECT_DIR/index.md"
echo "✓ Created $PROJECT_DIR/images/"
echo ""
echo "Next steps:"
echo "  1. Edit $PROJECT_DIR/index.md with your paper details"
echo "  2. Add images to $PROJECT_DIR/images/"
echo "  3. Run 'bundle exec jekyll serve' to preview"
echo "  4. Visit http://localhost:4000/project_showcase/$PROJECT_NAME"
echo "  5. Commit and push when ready"
echo ""
echo "Template sections to customize:"
echo "  - Frontmatter: title, description, keywords, authors, affiliations, links, bibtex"
echo "  - Hero section: Already configured with dynamic rendering"
echo "  - Teaser section: Add your teaser image"
echo "  - Abstract section: Replace placeholder text"
echo "  - Custom sections: Add as many as needed"
