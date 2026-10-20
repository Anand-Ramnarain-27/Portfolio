import{j as e,r as t}from"./react-wt90cwsy.js";import{C as v,a as p,u as M,P,b as y,O as w}from"./three-XLXX52vl.js";import{i as s}from"./index-2j4avLJi.js";import{C as b,u as R}from"./Loader-sTQziM86.js";import{u as C}from"./usePrefersReducedMotion-cLo4EeyV.js";const S=220,A=`
  varying float vViewDist;
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewDist = -mvPosition.z;
    gl_Position = projectionMatrix * mvPosition;
  }
`,F=`
  varying float vViewDist;
  uniform float uNear;
  uniform float uFar;
  void main() {
    float d = clamp((vViewDist - uNear) / (uFar - uNear), 0.0, 1.0);
    float g = 1.0 - d;
    gl_FragColor = vec4(vec3(g), 1.0);
  }
`,L=({mode:r,autoRotate:c})=>{const o=t.useRef(),i=t.useRef(),l=t.useRef(),u=t.useRef(),a=t.useMemo(()=>s.find(m=>m.id===r)||s[0],[r]),g=t.useMemo(()=>new p(a.accent),[a]),f=t.useMemo(()=>new p(a.accent2),[a]),x=t.useMemo(()=>new p(a.particle),[a]),d=R(S,{radius:[2.1,3.7],speed:[.08,.23],height:2.4,bobAmount:.08,bobSpeed:.6}),j=t.useMemo(()=>({uNear:{value:3.55},uFar:{value:6.85}}),[]);return M((m,h)=>{const n=1-Math.pow(.001,h);l.current&&l.current.color.lerp(g,n),u.current&&u.current.color.lerp(f,n),o.current&&(o.current.rotation.y-=.07*h,o.current.material.color.lerp(f,n)),i.current&&(i.current.material.color.lerp(x,n),d.update(i.current,m.clock.elapsedTime))}),e.jsxs(e.Fragment,{children:[e.jsx("ambientLight",{intensity:1.4,color:"#30343c"}),e.jsx("pointLight",{ref:l,position:[3,2.5,3],intensity:26,distance:20,decay:2,color:s[0].accent}),e.jsx("pointLight",{ref:u,position:[-3,-1.5,-2.5],intensity:14,distance:20,decay:2,color:s[0].accent2}),e.jsxs("mesh",{children:[e.jsx("icosahedronGeometry",{args:[1.3,1]}),r==="albedo"&&e.jsx("meshStandardMaterial",{color:"#2b3038",roughness:.35,metalness:.75,emissive:"#341a0c",emissiveIntensity:.6}),r==="normal"&&e.jsx("meshNormalMaterial",{flatShading:!0}),r==="depth"&&e.jsx("shaderMaterial",{uniforms:j,vertexShader:A,fragmentShader:F}),r==="wire"&&e.jsx("meshBasicMaterial",{color:a.accent,wireframe:!0})]}),r!=="wire"&&e.jsxs("mesh",{ref:o,children:[e.jsx("icosahedronGeometry",{args:[1.62,0]}),e.jsx("meshBasicMaterial",{color:s[0].accent2,wireframe:!0,transparent:!0,opacity:.28})]}),e.jsx(P,{ref:i,positions:d.positions,stride:3,frustumCulled:!1,children:e.jsx(y,{transparent:!0,color:s[0].particle,size:.028,sizeAttenuation:!0,depthWrite:!1,opacity:.85})}),e.jsx("gridHelper",{args:[14,28,2764341,1711394],position:[0,-1.9,0]}),e.jsx(w,{enablePan:!1,enableZoom:!1,autoRotate:c,autoRotateSpeed:.7,minPolarAngle:Math.PI/2-.7,maxPolarAngle:Math.PI/2+.7})]})},O=({mode:r})=>{const c=!C();return e.jsx(v,{frameloop:"always",dpr:[1,2],camera:{position:[0,.4,5.2],fov:42,near:.1,far:100},gl:{antialias:!0,alpha:!0},children:e.jsx(t.Suspense,{fallback:e.jsx(b,{}),children:e.jsx(L,{mode:r,autoRotate:c})})})};export{O as default};
