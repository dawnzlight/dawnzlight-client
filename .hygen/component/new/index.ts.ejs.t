---
to: <%= abs_path %>/index.ts
---

export * from './<%= component_name %>'
<% if (have_type) { -%>
export * from './type'
<% } -%>