import{e,y as i}from"./jsxRuntime.module.e9c232b6.js";import"./preact.module.a145af0c.js";function a(){return e("capri-lagoon",{style:"display:contents",dangerouslySetInnerHTML:{__html:""}})}function c({title:t,children:l}){const[n,d]=i(!1);return e("div",{class:"expandable box","data-expanded":n?"true":"false",children:[e(a,{children:"This is static content inside an island. We call this a lagoon."}),e("button",{onClick:()=>d(!n),children:t}),e("div",{class:"expandable-content",children:[e(a,{children:"This a second lagoon. Below you see the children that were passed to the Expandable island:"}),l]})]})}export{c as default};
