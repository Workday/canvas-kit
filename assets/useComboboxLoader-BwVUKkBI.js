import{e as a}from"./index-IfJi-UCQ.js";import{u as d}from"./useListLoader-DR-o4XEV.js";const l=()=>{const e=a.useRef(-1);return a.useEffect(()=>()=>{clearTimeout(e.current)},[]),(o,t)=>{clearTimeout(e.current),e.current=setTimeout(o,t)}},m=(e,o)=>{const t=l(),s=d({shouldLoad(r,n){return(e.shouldLoad?e.shouldLoad(r,n):!0)&&n.visibility!=="hidden"},...o.mergeConfig(e,{onFilterChange(r){const n=r.currentTarget.value;t(()=>s.loader.updateFilter(n),150)}})},o);return s},i=[{name:"useComboboxLoader",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/combobox/lib/hooks/useComboboxLoader.ts",description:`Creates a \`Combobox\` data loader and a model. The \`Combobox\` loader extends the
{@link useListLoader } and connects a {@link ComboboxInput Combobox.Input} to the filter of the
data loader. A simple loader using
[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) could look like the
following:

\`\`\`ts
const {model, loader} = useComboboxLoader(
  {
    total: 0,
    pageSize: 20,
    async load({pageNumber, pageSize, filter}) {
      // \`filter\` will be a \`string\`
      return fetch(\`/myUrl?filter=\${filter}\`)
        .then(response => response.json())
        .then(response => {
          return {total: response.total, items: response.items};
        });
    },
  },
  useComboboxModel
);
\`\`\``,declarations:[{name:"useComboboxLoader",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/combobox/lib/hooks/useComboboxLoader.ts"}],tags:{},type:{kind:"symbol",name:"useListLoader",value:"<T, M extends ((...args: any[]) => any) & Omit<(<TT_Special_Generic>(config?: (Partial<{ initialSelectedIds: SelectedIds; initialUnselectedIds: string[]; selection: SelectionManager; initialCursorId: string | string[]; ... 11 more ...; UNSTABLE_parentModel: { ...; } | undefined; }> & { ...; } & { ...; }) | undefined..."}}];window.__updateDocs?window.__updateDocs?.(i):window.__docs=(window.__docs||[]).concat(i);export{m as u};
