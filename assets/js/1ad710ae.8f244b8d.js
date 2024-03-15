"use strict";(self.webpackChunknetworkmanager_docs=self.webpackChunknetworkmanager_docs||[]).push([[59],{1534:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var r=t(4848),i=t(8453);const n={sidebar_position:16},s="Discovery Protocol",c={id:"application/discovery-protocol",title:"Discovery Protocol",description:"In Discovery Protocol you can capture for LLDP (Link Layer Discovery Protocol) and/or CDP (Cisco Discovery Protocol) frames to see to which switch or router your device is connected. The information such as device name, port, VLAN, etc. are displayed in a table.",source:"@site/docs/application/discovery-protocol.md",sourceDirName:"application",slug:"/application/discovery-protocol",permalink:"/NETworkManager/docs/application/discovery-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/application/discovery-protocol.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"docsSidebar",previous:{title:"SNTP Lookup",permalink:"/NETworkManager/docs/application/sntp-lookup"},next:{title:"Wake on LAN",permalink:"/NETworkManager/docs/application/wake-on-lan"}},a={},d=[];function l(o){const e={admonition:"admonition",code:"code",h1:"h1",img:"img",p:"p",strong:"strong",...(0,i.R)(),...o.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"discovery-protocol",children:"Discovery Protocol"}),"\n",(0,r.jsxs)(e.p,{children:["In ",(0,r.jsx)(e.strong,{children:"Discovery Protocol"})," you can capture for LLDP (Link Layer Discovery Protocol) and/or CDP (Cisco Discovery Protocol) frames to see to which switch or router your device is connected. The information such as device name, port, VLAN, etc. are displayed in a table."]}),"\n",(0,r.jsxs)(e.admonition,{type:"info",children:[(0,r.jsxs)(e.p,{children:["The Link Layer Discovery Protocol (LLDP) is a vendor-neutral Layer 2 network protocol used by network devices, especially switches, to advertise their identity, capabilities, and neighbors on an IEEE 802 Local Area Network (LAN). If configured, LLDP messages are sent out periodically as frames with the destination MAC address of ",(0,r.jsx)(e.code,{children:"01:80:c2:00:00:0e"}),". The default time interval is 30 seconds."]}),(0,r.jsxs)(e.p,{children:["The Cisco Discovery Protocol (CDP) is a proprietary Layer 2 protocol used by Cisco Systems to exchange information about network devices. If configured, CDP messages are sent out periodically as frames with the destination MAC address ",(0,r.jsx)(e.code,{children:"01:00:0c:cc:cc"}),". The default time interval is 60 seconds."]})]}),"\n",(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsx)(e.p,{children:'If you are using a hypervisor like Hyper-V with a virtual switch configured as "External network" which is shared with host where NETworkManager is running, you may not receive any packets. This is because the virtual switch does not forward the LLDP or CDP frames to the host. You may temporarily change the virtual switch to "Internal network" or "Private network", if you want to use the Discovery Protocol to see which switch or router your device is connected to. You can also verify this behavior by using Wireshark.'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Discovery Protocol",src:t(9553).A+"",width:"1200",height:"800"})}),"\n",(0,r.jsx)(e.admonition,{type:"note",children:(0,r.jsx)(e.p,{children:"Right-click on the result to copy the information."})})]})}function p(o={}){const{wrapper:e}={...(0,i.R)(),...o.components};return e?(0,r.jsx)(e,{...o,children:(0,r.jsx)(l,{...o})}):l(o)}},9553:(o,e,t)=>{t.d(e,{A:()=>r});const r=t.p+"assets/images/discovery-protocol-cfc3c1f700977cf9905af4ccb44cefcf.png"},8453:(o,e,t)=>{t.d(e,{R:()=>s,x:()=>c});var r=t(6540);const i={},n=r.createContext(i);function s(o){const e=r.useContext(n);return r.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function c(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(i):o.components||i:s(o.components),r.createElement(n.Provider,{value:e},o.children)}}}]);