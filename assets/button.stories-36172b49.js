import{r as Ae}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";var Ce={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Je=Ae,We=Symbol.for("react.element"),Ye=Symbol.for("react.fragment"),Ge=Object.prototype.hasOwnProperty,He=Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ke={key:!0,ref:!0,__self:!0,__source:!0};function Fe(t,e,o){var r,n={},s=null,l=null;o!==void 0&&(s=""+o),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)Ge.call(e,r)&&!Ke.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:We,type:t,key:s,ref:l,props:n,_owner:He.current}}j.Fragment=Ye;j.jsx=Fe;j.jsxs=Fe;Ce.exports=j;var T=Ce.exports;function Me(t){var e,o,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(o=Me(t[e]))&&(r&&(r+=" "),r+=o);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function N(){for(var t,e,o=0,r="";o<arguments.length;)(t=arguments[o++])&&(e=Me(t))&&(r&&(r+=" "),r+=e);return r}const Qe="_button_1hd8u_2",Xe="_button__icon_1hd8u_186",a={button:Qe,"button--sm":"_button--sm_1hd8u_24","button--md":"_button--md_1hd8u_28","button--lg":"_button--lg_1hd8u_32","button--shadowed":"_button--shadowed_1hd8u_37","button--outline":"_button--outline_1hd8u_42","button--text":"_button--text_1hd8u_53","button--primary":"_button--primary_1hd8u_64","button--secondary":"_button--secondary_1hd8u_100","button--danger":"_button--danger_1hd8u_136","button--disabled":"_button--disabled_1hd8u_174",button__icon:Xe,"button__icon--start":"_button__icon--start_1hd8u_190","button__icon--end":"_button__icon--end_1hd8u_194"};function E({icon:t,className:e}){return T.jsx("span",{"aria-hidden":"true",className:N("material-symbols-outlined",e),children:t})}try{E.displayName="ButtonIcon",E.__docgenInfo={description:"",displayName:"ButtonIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}function Ze({label:t,variant:e,color:o,startIcon:r,endIcon:n,size:s="md",disableShadow:l=!1,...Ue},$e){return T.jsxs("button",{ref:$e,...Ue,className:N(a.button,{[a["button--outline"]]:e==="outline",[a["button--text"]]:e==="text",[a["button--shadowed"]]:!l,[a["button--primary"]]:o==="primary",[a["button--secondary"]]:o==="secondary",[a["button--danger"]]:o==="danger",[a["button--sm"]]:s==="sm",[a["button--md"]]:s==="md",[a["button--lg"]]:s==="lg"}),children:[r&&T.jsx(E,{icon:r,className:N(a.button__icon,a["button__icon--start"])}),t,n&&T.jsx(E,{icon:n,className:N(a.button__icon,a["button__icon--end"])})]})}const P=Ae.forwardRef(Ze);try{P.displayName="Button",P.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"outline"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},disableShadow:{defaultValue:null,description:"",name:"disableShadow",required:!1,type:{name:"boolean"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"string"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"string"}}}}}catch{}const tr={title:"Button",component:P,tags:["autodocs"],argTypes:{label:{description:"Button content"},color:{control:"select",options:["primary","secundary","danger"],description:"Button colors"},size:{control:"select",options:["sm","md","lg"],description:"Button sizes",table:{defaultValue:{summary:"md"}}},variant:{control:"select",options:["outline","text"],description:"Button types"},disableShadow:{description:"Disable shadow",table:{defaultValue:{summary:!1}}},startIcon:{description:"Left icon"},endIcon:{description:"Right icon"}}},c={args:{label:"Button"}},u={args:{label:"Button",variant:"outline"}},i={args:{label:"Button",variant:"text"}},d={args:{label:"Button",disabled:!0}},m={args:{label:"Button",variant:"text",disabled:!0}},p={args:{label:"Button",disableShadow:!0}},b={args:{label:"Button",color:"primary"}},g={args:{label:"Button",color:"secondary"}},_={args:{label:"Button",color:"danger"}},y={args:{label:"Button",color:"primary",variant:"outline"}},f={args:{label:"Button",color:"secondary",variant:"outline"}},B={args:{label:"Button",color:"danger",variant:"outline"}},x={args:{label:"Button",color:"primary",variant:"text"}},S={args:{label:"Button",color:"secondary",variant:"text"}},v={args:{label:"Button",color:"danger",variant:"text"}},h={args:{label:"Button",size:"sm",color:"primary"}},I={args:{label:"Button",size:"md",color:"primary"}},D={args:{label:"Button",size:"lg",color:"primary"}},O={args:{label:"Button",color:"primary",startIcon:"local_grocery_store"}},w={args:{label:"Button",color:"primary",endIcon:"local_grocery_store"}};var R,V,q;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var z,L,k;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'outline'
  }
}`,...(k=(L=u.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var A,C,F;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'text'
  }
}`,...(F=(C=i.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var M,U,$;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    disabled: true
  }
}`,...($=(U=d.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var J,W,Y;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'text',
    disabled: true
  }
}`,...(Y=(W=m.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var G,H,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    disableShadow: true
  }
}`,...(K=(H=p.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,X,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    color: 'primary'
  }
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,te;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    color: 'secondary'
  }
}`,...(te=(re=g.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,oe,ne;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    color: 'danger'
  }
}`,...(ne=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,le,ce;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    color: 'primary',
    variant: 'outline'
  }
}`,...(ce=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,ie,de;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    color: 'secondary',
    variant: 'outline'
  }
}`,...(de=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var me,pe,be;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    color: 'danger',
    variant: 'outline'
  }
}`,...(be=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ge,_e,ye;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    color: 'primary',
    variant: 'text'
  }
}`,...(ye=(_e=x.parameters)==null?void 0:_e.docs)==null?void 0:ye.source}}};var fe,Be,xe;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    color: 'secondary',
    variant: 'text'
  }
}`,...(xe=(Be=S.parameters)==null?void 0:Be.docs)==null?void 0:xe.source}}};var Se,ve,he;v.parameters={...v.parameters,docs:{...(Se=v.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    color: 'danger',
    variant: 'text'
  }
}`,...(he=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var Ie,De,Oe;h.parameters={...h.parameters,docs:{...(Ie=h.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'sm',
    color: 'primary'
  }
}`,...(Oe=(De=h.parameters)==null?void 0:De.docs)==null?void 0:Oe.source}}};var we,Te,Ne;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'md',
    color: 'primary'
  }
}`,...(Ne=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var Ee,je,Pe;D.parameters={...D.parameters,docs:{...(Ee=D.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'lg',
    color: 'primary'
  }
}`,...(Pe=(je=D.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};var Re,Ve,qe;O.parameters={...O.parameters,docs:{...(Re=O.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    color: 'primary',
    startIcon: 'local_grocery_store'
  }
}`,...(qe=(Ve=O.parameters)==null?void 0:Ve.docs)==null?void 0:qe.source}}};var ze,Le,ke;w.parameters={...w.parameters,docs:{...(ze=w.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    color: 'primary',
    endIcon: 'local_grocery_store'
  }
}`,...(ke=(Le=w.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};const ar=["Default","Outline","Text","Disabled","TextDisabled","ShadowDisabled","Primary","Secondary","Danger","PrimaryOutline","SecondaryOutline","DangerOutline","PrimaryText","SecondaryText","DangerText","Small","Medium","Large","StartIcon","EndIcon"];export{_ as Danger,B as DangerOutline,v as DangerText,c as Default,d as Disabled,w as EndIcon,D as Large,I as Medium,u as Outline,b as Primary,y as PrimaryOutline,x as PrimaryText,g as Secondary,f as SecondaryOutline,S as SecondaryText,p as ShadowDisabled,h as Small,O as StartIcon,i as Text,m as TextDisabled,ar as __namedExportsOrder,tr as default};
//# sourceMappingURL=button.stories-36172b49.js.map
