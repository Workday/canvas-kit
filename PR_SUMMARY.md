<!-- Thank you for your pull request, please provide a brief summary of what this introduces (mandatory). Please point out any code that may be non-obvious to reviewers by using in-code comments. -->

## Summary

This PR refactors the Radio and Checkbox input components to use the new Canvas Kit v4 tokens and styling API. The changes include migrating from the legacy token system to the new `@workday/canvas-tokens-web` v4 tokens and updating components to use the new stencil-based styling system.

**Key Changes:**
- **Radio Component**: Updated to use new v4 tokens and stencil-based styling API
- **Checkbox Component**: Migrated to v4 tokens with updated styling using stencils
- **Token Dependency**: Updated to `@workday/canvas-tokens-web` v4

Both components now use the stencil-based styling system for better theming support and consistency with the rest of Canvas Kit.

## Release Category
Components

### Release Note
This update migrates Radio and Checkbox input components to use Canvas Kit v4 tokens and the new styling API. Both components now use the stencil-based styling system for better theming support and consistency with the rest of Canvas Kit.

### BREAKING CHANGES

**Token Updates:**
- Components now use `@workday/canvas-tokens-web` v4 tokens
- Some token names and values have changed as part of the v4 migration
- Forward-fit token fallbacks are in place to maintain compatibility during the transition

---

## Checklist

- [ ] MDX documentation adheres to Canvas Kit's [Documentation Guidelines](https://workday.github.io/canvas-kit/?path=/docs/guides-documentation-guidelines--docs)
- [ ] Label `ready for review` has been added to PR

## For the Reviewer

<!-- Provide a bit of context about what this PR does. Add any additional checklist items you'd like the reviewer to check -->

- [ ] PR title is short and descriptive
- [ ] PR summary describes the change (Fixes/Resolves linked correctly)
- [ ] PR Release Notes describes additional information useful to call out in a release message or removed if not applicable
- [ ] Breaking Changes provides useful information to upgrade to this code or removed if not applicable
- [ ] Radio and Checkbox components have been tested with v4 tokens
- [ ] Visual regression tests pass for all component states (default, error, caution, disabled, inverse)
- [ ] Token forward-fit comments (TODO) are appropriate and documented

## Where Should the Reviewer Start?

1. **Token Migration**: Start by reviewing `/modules/react/checkbox/lib/CheckboxInput.tsx` and `/modules/preview-react/radio/lib/StyledRadioButton.tsx` to see how v4 tokens are being used with forward-fit fallbacks
2. **Styling Updates**: Check how the new stencil-based styling is implemented in both components
3. **Radio Component**: Review `/modules/preview-react/radio/lib/RadioGroup.tsx` to understand the compound component structure
4. **Checkbox Component**: Review `/modules/react/checkbox/lib/Checkbox.tsx` to see the component structure

## Areas for Feedback? (optional)

- [x] Code
- [x] Documentation
- [x] Testing
- [ ] Codemods

**Specific Areas:**
- Token forward-fit strategy: Review the TODO comments regarding token fallbacks to ensure they're appropriate
- Radio component API: Verify the compound component pattern is intuitive and well-documented
- Accessibility: Ensure keyboard navigation and ARIA attributes are correctly implemented in both components
- Visual consistency: Confirm that the visual appearance matches design specifications with v4 tokens

## Testing Manually

1. **Radio Component:**
   - Test radio group selection
   - Verify error and caution states
   - Test inverse variant
   - Verify disabled state
   - Test keyboard navigation within radio groups

2. **Checkbox Component:**
   - Test checked/unchecked states
   - Verify indeterminate state
   - Test error and caution states
   - Test inverse variant
   - Verify disabled state

3. **Token Migration:**
   - Verify all components render correctly with v4 tokens
   - Test with custom themes
   - Verify forward-fit token fallbacks work correctly

## Screenshots or GIFs (if applicable)

<!-- Does your change affect the UI? If so, please include a screenshot or short gif. -->
<!-- Visual changes should be captured to show the updated styling with v4 tokens -->

## Thank You Gif (optional)

<!-- Share a fun [gif](https://giphy.com) to say thanks to your reviewer! -->
<!-- ![a smiling Shiba Inu typing on a laptop](https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif) -->
