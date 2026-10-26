// ?theme=canvas` URL param for switching off the default Sana Canvas theme, for dev and QA use only.
// This must be set on <html> (not a nested element) since the sana token CSS only defines
// `[data-theme="sana-canvas"]` overrides - there's no `[data-theme="canvas"]` rule to undo it.
var themeParam = new URLSearchParams(window.location.search).get('theme');
document.documentElement.setAttribute(
  'data-theme',
  themeParam === 'canvas' ? 'canvas' : 'sana-canvas'
);
