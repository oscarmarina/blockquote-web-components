/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let N=0;const f=function(t){let a=t.__mixinApplications;a||(a=new WeakMap,t.__mixinApplications=a);let d=N++;function s(o){let i=o.__mixinSet;if(i&&i[d])return o;let c=a,n=c.get(o);if(!n){n=t(o),c.set(o,n);let l=Object.create(n.__mixinSet||i||null);l[d]=!0,n.__mixinSet=l}return n}return s},h=t=>!/[^\t\n\r ]/.test(t.textContent),C=t=>t.nodeType===8||t.nodeType===3&&h(t),m=f(t=>class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.shadowRoot.addEventListener("slotchange",this._onSlotChange.bind(this))}_onSlotChange(d){const{target:s}=d,o=s.name||s.getAttribute("name")||"",i=[...s.assignedNodes(),...s.childNodes],c=s.assignedNodes({flatten:!0}),n=[];i.length&&i.forEach(e=>{C(e)||n.push({flatten:e.assignedSlot===null,assignedNodes:e.nodeType===3?e.textContent.trim():e,assignedSlot:e.assignedSlot})});const l=n.filter(e=>e.flatten===!1),g=n.filter(e=>e.flatten===!0),r={assignedNodesByNode:l,assignedNodes:l.map(e=>e.assignedNodes)},p={assignedNodesByNode:g,assignedNodes:g.map(e=>e.assignedNodes)},u=new CustomEvent("slotchanges",{bubbles:!0,detail:{slotName:o,assignedNodesContent:r,flattenedNodesContent:p,originalEvent:{event:d,assignedNodes:c}}});this.shadowRoot.dispatchEvent(u)}});export{m as B};
