#!/bin/bash
# Script to list all packages that need OIDC trusted publisher configuration

echo "==========================================================================="
echo "Canvas Kit Packages Needing OIDC Setup"
echo "==========================================================================="
echo ""
echo "For EACH package below, configure a trusted publisher on npm:"
echo ""
echo "Trusted Publisher: publish.yml"
echo "  Provider: GitHub Actions"
echo "  Repository: Workday/canvas-kit"
echo "  Workflow: publish.yml"
echo "  Environment: (leave blank)"
echo ""
echo "==========================================================================="
echo ""

# Find all package.json files in modules/ and extract package names
find modules -name "package.json" -type f -not -path "*/node_modules/*" | while read -r pkg; do
    name=$(node -p "require('./$pkg').name" 2>/dev/null)
    version=$(node -p "require('./$pkg').version" 2>/dev/null)
    if [ -n "$name" ] && [ "$name" != "undefined" ]; then
        echo "📦 $name@$version"
        echo "   https://www.npmjs.com/package/$name/access"
        echo ""
    fi
done

echo "==========================================================================="
echo "Total packages listed above"
echo "Each package needs 1 trusted publisher configured"
echo "==========================================================================="
