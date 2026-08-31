import {App} from '@modelcontextprotocol/ext-apps';

const app = new App({name: 'Canvas Kit Story Viewer', version: '1.0.0'}, {}, {autoResize: false});

function renderStory(html: string) {
  document.getElementById('loading')?.remove();
  const frame = document.createElement('iframe');
  frame.id = 'story-frame';
  frame.style.width = '100%';
  frame.style.height = '100%';
  frame.style.border = 'none';
  document.body.appendChild(frame);

  const win = frame.contentWindow!;
  (win as any).__MCP_APP_PARENT__ = app;

  win.document.open();
  win.document.write(html);
  win.document.close();
}

app.ontoolresult = (params: Record<string, unknown>) => {
  const sc = params.structuredContent as Record<string, unknown> | undefined;
  const meta = params._meta as Record<string, unknown> | undefined;
  const html = (sc?.storyHtml as string) || (meta?.storyHtml as string) || '';
  if (html) {
    renderStory(html);
  }
};

app.connect().catch((err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  console.warn('[Canvas Kit story-viewer] connect failed:', message);
});
