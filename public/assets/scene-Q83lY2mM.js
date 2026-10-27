import{cL as ln,d1 as ec,b5 as fn,ci as dn,v as Ie,bz as tc,d3 as ut,d9 as tt,cW as Et,d6 as ur,aM as It,a9 as Ko,cY as hr,cZ as Zt,w as ht,aC as An,ag as un,W as kt,B as Ft,a8 as oi,cV as ie,d8 as nc,aw as pr,cc as ic,cy as ac,a as ui,bd as rc,y as oc,be as sc,z as cc,bf as lc,bg as fc,bh as dc,bi as uc,X as hc,Y as pc,cw as mc,cv as gc,cx as _c,bc as vc,c$ as Sc,aV as Yo,u as $i,cb as Gn,aD as Ki,aB as Rt,a_ as Mi,a$ as qo,aZ as gn,b7 as xc,ab as Mc,ad as Ka,Z as Ec,av as Ya,at as Tc,f as bc,b1 as wc,aQ as Ac,aR as Rc,cl as Jt,cU as Ze,o as qt,n as jt,aO as Le,bk as Ai,bl as Cc,b3 as vn,cT as Ei,c4 as si,U as ji,a6 as Rn,S as ci,E as yc,cP as Hn,a5 as on,c6 as Pc,bj as qa,cj as ct,a1 as Lc,bm as Cn,j as Dc,c_ as ca,bB as _n,T as ei,cN as Pi,bw as Ic,R as Za,da as Uc,b4 as $n,aL as Ke,bn as Ri,bC as Zo,c5 as $o,c9 as jo,cS as Qi,cQ as Qo,cR as Jo,b8 as Nc,ac as Oc,ae as Fc,_ as Bc,au as Gc,g as Hc,b2 as kc,L as Vc,J as mr,K as zc,b6 as Yi,M as Wc,aX as gr,cz as _r,c as li,cK as Xc,I as na,cA as vr,bb as Kc,m as Vt,d0 as Ia,bo as Dt,d5 as es,H as ts,D as Yc,a2 as ns,cO as qc,cM as Zc,p as $c,cn as jc,am as is,e as Qc,bY as Jc,c8 as el,c3 as la,bV as fa,bW as da,bX as ua,c2 as Sr,c1 as xr,bU as Mr,bT as Er,b$ as Tr,c0 as br,bS as wr,bv as Ar,ce as Rr,bA as Ua,ch as Cr,bJ as yr,bK as Pr,bL as Lr,bM as Dr,bN as Ir,bO as Ur,bP as Nr,bQ as Or,bE as Fr,bF as Br,bG as Gr,bD as Hr,bH as kr,bI as Vr,bR as zr,bZ as Wr,b_ as Xr,by as Kr,cg as Yr,bx as Na,cf as qr,Q as as,d4 as Zr,aG as rs,aa as $r,d7 as Nt,as as tl,N as os,b0 as ss,d as cs,A as $a,s as ls,ca as fs,aF as ds,$ as ha,a0 as pa,cJ as nl,cI as il,aE as en,F as Li,G as fi,aP as wt,d2 as al,b as rl,aW as ol,aY as sl,P as cl,cB as Di,cd as ll,aU as fl,aN as dl,cG as ul,cE as Oa,cF as us,aH as hl,aI as Ci,a4 as hs,aS as hn,cs as pl,bp as jn,V as Ii,al as Ti,bt as kn,ak as jr,ba as ps,cC as ms,aj as ml,an as gl,br as gs,aJ as ma,ay as _s,aT as Ot,bs as _l,cp as vl,aA as vs,ax as Sl,az as xl,bq as Fa,af as nt,aK as Ss,co as Ml,h as El,k as Tl,aq as bl,ar as xs,ao as wl,cX as Qr,b9 as Jr,bu as eo,ap as Al,l as ja,cq as Rl,cm as Cl,a3 as yl,cD as Qa,C as Ja,O as Fn,t as Pl,ck as Ms,ah as Es,a7 as Ll,cr as Ba,ct as Dl,cu as Il,x as ga,cH as Ul,r as Nl,c7 as Ol,ai as Fl,i as Bl,q as Gl}from"./three.core-j74Z1QIW.js";import{A as Ts,Q as bs,K as qi,g as er,v as _a,f as Wn,D as Hl,c as to,u as va,x as kl,Z as Vl,U as zl,r as Ga,l as Oi,R as Pn,q as no,a as Wl,b as Fi,m as Bi,j as On,h as Xl,i as Kl,k as io,p as En,B as Gi,e as hi,M as ao,F as ro,S as Ln,n as Hi,P as Yl,G as oo,N as ql}from"./layout-BvNlWp5B.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ws(){let n=null,t=!1,e=null,i=null;function a(r,o){i=n.requestAnimationFrame(a),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(a),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Zl(n){const t=new WeakMap;function e(s,c){const l=s.array,m=s.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,m),s.onUploadCallback();let _;if(l instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)_=n.HALF_FLOAT;else if(l instanceof Uint16Array)s.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)_=n.SHORT;else if(l instanceof Uint32Array)_=n.UNSIGNED_INT;else if(l instanceof Int32Array)_=n.INT;else if(l instanceof Int8Array)_=n.BYTE;else if(l instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:_,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:u}}function i(s,c,l){const m=c.array,u=c.updateRanges;if(n.bindBuffer(l,s),u.length===0)n.bufferSubData(l,0,m);else{u.sort((_,x)=>_.start-x.start);let f=0;for(let _=1;_<u.length;_++){const x=u[f],R=u[_];R.start<=x.start+x.count+1?x.count=Math.max(x.count,R.start+R.count-x.start):(++f,u[f]=R)}u.length=f+1;for(let _=0,x=u.length;_<x;_++){const R=u[_];n.bufferSubData(l,R.start*m.BYTES_PER_ELEMENT,m,R.start,R.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(s){return s.isInterleavedBufferAttribute&&(s=s.data),t.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=t.get(s);c&&(n.deleteBuffer(c.buffer),t.delete(s))}function o(s,c){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const m=t.get(s);(!m||m.version<s.version)&&t.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const l=t.get(s);if(l===void 0)t.set(s,e(s,c));else if(l.version<s.version){if(l.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,s,c),l.version=s.version}}return{get:a,remove:r,update:o}}var $l=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ql=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ff=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,df=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ef=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$f=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ed=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,id=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ed=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Td=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ad=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Od=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,au=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ru=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ou=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,du=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_u=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Su=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Au=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ru=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:$l,alphahash_pars_fragment:jl,alphamap_fragment:Ql,alphamap_pars_fragment:Jl,alphatest_fragment:ef,alphatest_pars_fragment:tf,aomap_fragment:nf,aomap_pars_fragment:af,batching_pars_vertex:rf,batching_vertex:of,begin_vertex:sf,beginnormal_vertex:cf,bsdfs:lf,iridescence_fragment:ff,bumpmap_pars_fragment:df,clipping_planes_fragment:uf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:pf,clipping_planes_vertex:mf,color_fragment:gf,color_pars_fragment:_f,color_pars_vertex:vf,color_vertex:Sf,common:xf,cube_uv_reflection_fragment:Mf,defaultnormal_vertex:Ef,displacementmap_pars_vertex:Tf,displacementmap_vertex:bf,emissivemap_fragment:wf,emissivemap_pars_fragment:Af,colorspace_fragment:Rf,colorspace_pars_fragment:Cf,envmap_fragment:yf,envmap_common_pars_fragment:Pf,envmap_pars_fragment:Lf,envmap_pars_vertex:Df,envmap_physical_pars_fragment:zf,envmap_vertex:If,fog_vertex:Uf,fog_pars_vertex:Nf,fog_fragment:Of,fog_pars_fragment:Ff,gradientmap_pars_fragment:Bf,lightmap_pars_fragment:Gf,lights_lambert_fragment:Hf,lights_lambert_pars_fragment:kf,lights_pars_begin:Vf,lights_toon_fragment:Wf,lights_toon_pars_fragment:Xf,lights_phong_fragment:Kf,lights_phong_pars_fragment:Yf,lights_physical_fragment:qf,lights_physical_pars_fragment:Zf,lights_fragment_begin:$f,lights_fragment_maps:jf,lights_fragment_end:Qf,lightprobes_pars_fragment:Jf,logdepthbuf_fragment:ed,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:ad,map_pars_fragment:rd,map_particle_fragment:od,map_particle_pars_fragment:sd,metalnessmap_fragment:cd,metalnessmap_pars_fragment:ld,morphinstance_vertex:fd,morphcolor_vertex:dd,morphnormal_vertex:ud,morphtarget_pars_vertex:hd,morphtarget_vertex:pd,normal_fragment_begin:md,normal_fragment_maps:gd,normal_pars_fragment:_d,normal_pars_vertex:vd,normal_vertex:Sd,normalmap_pars_fragment:xd,clearcoat_normal_fragment_begin:Md,clearcoat_normal_fragment_maps:Ed,clearcoat_pars_fragment:Td,iridescence_pars_fragment:bd,opaque_fragment:wd,packing:Ad,premultiplied_alpha_fragment:Rd,project_vertex:Cd,dithering_fragment:yd,dithering_pars_fragment:Pd,roughnessmap_fragment:Ld,roughnessmap_pars_fragment:Dd,shadowmap_pars_fragment:Id,shadowmap_pars_vertex:Ud,shadowmap_vertex:Nd,shadowmask_pars_fragment:Od,skinbase_vertex:Fd,skinning_pars_vertex:Bd,skinning_vertex:Gd,skinnormal_vertex:Hd,specularmap_fragment:kd,specularmap_pars_fragment:Vd,tonemapping_fragment:zd,tonemapping_pars_fragment:Wd,transmission_fragment:Xd,transmission_pars_fragment:Kd,uv_pars_fragment:Yd,uv_pars_vertex:qd,uv_vertex:Zd,worldpos_vertex:$d,background_vert:jd,background_frag:Qd,backgroundCube_vert:Jd,backgroundCube_frag:eu,cube_vert:tu,cube_frag:nu,depth_vert:iu,depth_frag:au,distance_vert:ru,distance_frag:ou,equirect_vert:su,equirect_frag:cu,linedashed_vert:lu,linedashed_frag:fu,meshbasic_vert:du,meshbasic_frag:uu,meshlambert_vert:hu,meshlambert_frag:pu,meshmatcap_vert:mu,meshmatcap_frag:gu,meshnormal_vert:_u,meshnormal_frag:vu,meshphong_vert:Su,meshphong_frag:xu,meshphysical_vert:Mu,meshphysical_frag:Eu,meshtoon_vert:Tu,meshtoon_frag:bu,points_vert:wu,points_frag:Au,shadow_vert:Ru,shadow_frag:Cu,sprite_vert:yu,sprite_frag:Pu},de={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},cn={basic:{uniforms:Nt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Nt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Nt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Nt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Nt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Nt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Nt([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Nt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Nt([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Nt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Nt([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Nt([de.common,de.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Nt([de.lights,de.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};cn.physical={uniforms:Nt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ki={r:0,b:0,g:0},Lu=new It,As=new Ke;As.set(-1,0,0,0,1,0,0,0,1);function Du(n,t,e,i,a,r){const o=new Ie(0);let s=a===!0?0:1,c,l,m=null,u=0,f=null;function _(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){const S=w.backgroundBlurriness>0;C=t.get(C,S)}return C}function x(w){let C=!1;const S=_(w);S===null?p(o,s):S&&S.isColor&&(p(S,1),C=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function R(w,C){const S=_(C);S&&(S.isCubeTexture||S.mapping===na)?(l===void 0&&(l=new Le(new Vt(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Ia(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Lu.makeRotationFromEuler(C.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(As),l.material.toneMapped=ht.getTransfer(S.colorSpace)!==ct,(m!==S||u!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,m=S,u=S.version,f=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Le(new Dt(2,2),new Jt({name:"BackgroundMaterial",uniforms:Ia(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=ht.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(m!==S||u!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,m=S,u=S.version,f=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,C){w.getRGB(ki,es(n)),e.buffers.color.setClear(ki.r,ki.g,ki.b,C,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,C=1){o.set(w),s=C,p(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(w){s=w,p(o,s)},render:x,addToRenderList:R,dispose:d}}function Iu(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=f(null);let r=a,o=!1;function s(A,O,V,U,z){let $=!1;const Y=u(A,U,V,O);r!==Y&&(r=Y,l(r.object)),$=_(A,U,V,z),$&&x(A,U,V,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(A,O,V,U),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return n.createVertexArray()}function l(A){return n.bindVertexArray(A)}function m(A){return n.deleteVertexArray(A)}function u(A,O,V,U){const z=U.wireframe===!0;let $=i[O.id];$===void 0&&($={},i[O.id]=$);const Y=A.isInstancedMesh===!0?A.id:0;let J=$[Y];J===void 0&&(J={},$[Y]=J);let j=J[V.id];j===void 0&&(j={},J[V.id]=j);let ee=j[z];return ee===void 0&&(ee=f(c()),j[z]=ee),ee}function f(A){const O=[],V=[],U=[];for(let z=0;z<e;z++)O[z]=0,V[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:U,object:A,attributes:{},index:null}}function _(A,O,V,U){const z=r.attributes,$=O.attributes;let Y=0;const J=V.getAttributes();for(const j in J)if(J[j].location>=0){const te=z[j];let Pe=$[j];if(Pe===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(Pe=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(Pe=A.instanceColor)),te===void 0||te.attribute!==Pe||Pe&&te.data!==Pe.data)return!0;Y++}return r.attributesNum!==Y||r.index!==U}function x(A,O,V,U){const z={},$=O.attributes;let Y=0;const J=V.getAttributes();for(const j in J)if(J[j].location>=0){let te=$[j];te===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(te=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(te=A.instanceColor));const Pe={};Pe.attribute=te,te&&te.data&&(Pe.data=te.data),z[j]=Pe,Y++}r.attributes=z,r.attributesNum=Y,r.index=U}function R(){const A=r.newAttributes;for(let O=0,V=A.length;O<V;O++)A[O]=0}function p(A){d(A,0)}function d(A,O){const V=r.newAttributes,U=r.enabledAttributes,z=r.attributeDivisors;V[A]=1,U[A]===0&&(n.enableVertexAttribArray(A),U[A]=1),z[A]!==O&&(n.vertexAttribDivisor(A,O),z[A]=O)}function w(){const A=r.newAttributes,O=r.enabledAttributes;for(let V=0,U=O.length;V<U;V++)O[V]!==A[V]&&(n.disableVertexAttribArray(V),O[V]=0)}function C(A,O,V,U,z,$,Y){Y===!0?n.vertexAttribIPointer(A,O,V,z,$):n.vertexAttribPointer(A,O,V,U,z,$)}function S(A,O,V,U){R();const z=U.attributes,$=V.getAttributes(),Y=O.defaultAttributeValues;for(const J in $){const j=$[J];if(j.location>=0){let ee=z[J];if(ee===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(ee=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(ee=A.instanceColor)),ee!==void 0){const te=ee.normalized,Pe=ee.itemSize,ne=t.get(ee);if(ne===void 0)continue;const we=ne.buffer,xe=ne.type,me=ne.bytesPerElement,F=xe===n.INT||xe===n.UNSIGNED_INT||ee.gpuType===is;if(ee.isInterleavedBufferAttribute){const K=ee.data,Se=K.stride,Ue=ee.offset;if(K.isInstancedInterleavedBuffer){for(let ge=0;ge<j.locationSize;ge++)d(j.location+ge,K.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ge=0;ge<j.locationSize;ge++)p(j.location+ge);n.bindBuffer(n.ARRAY_BUFFER,we);for(let ge=0;ge<j.locationSize;ge++)C(j.location+ge,Pe/j.locationSize,xe,te,Se*me,(Ue+Pe/j.locationSize*ge)*me,F)}else{if(ee.isInstancedBufferAttribute){for(let K=0;K<j.locationSize;K++)d(j.location+K,ee.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let K=0;K<j.locationSize;K++)p(j.location+K);n.bindBuffer(n.ARRAY_BUFFER,we);for(let K=0;K<j.locationSize;K++)C(j.location+K,Pe/j.locationSize,xe,te,Pe*me,Pe/j.locationSize*K*me,F)}}else if(Y!==void 0){const te=Y[J];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(j.location,te);break;case 3:n.vertexAttrib3fv(j.location,te);break;case 4:n.vertexAttrib4fv(j.location,te);break;default:n.vertexAttrib1fv(j.location,te)}}}}w()}function M(){b();for(const A in i){const O=i[A];for(const V in O){const U=O[V];for(const z in U){const $=U[z];for(const Y in $)m($[Y].object),delete $[Y];delete U[z]}}delete i[A]}}function E(A){if(i[A.id]===void 0)return;const O=i[A.id];for(const V in O){const U=O[V];for(const z in U){const $=U[z];for(const Y in $)m($[Y].object),delete $[Y];delete U[z]}}delete i[A.id]}function y(A){for(const O in i){const V=i[O];for(const U in V){const z=V[U];if(z[A.id]===void 0)continue;const $=z[A.id];for(const Y in $)m($[Y].object),delete $[Y];delete z[A.id]}}}function g(A){for(const O in i){const V=i[O],U=A.isInstancedMesh===!0?A.id:0,z=V[U];if(z!==void 0){for(const $ in z){const Y=z[$];for(const J in Y)m(Y[J].object),delete Y[J];delete z[$]}delete V[U],Object.keys(V).length===0&&delete i[O]}}}function b(){D(),o=!0,r!==a&&(r=a,l(r.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:s,reset:b,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:g,releaseStatesOfProgram:y,initAttributes:R,enableAttribute:p,disableUnusedAttributes:w}}function Uu(n,t,e){let i;function a(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,m){m!==0&&(n.drawArraysInstanced(i,c,l,m),e.update(l,i,m))}function s(c,l,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,m);let f=0;for(let _=0;_<m;_++)f+=l[_];e.update(f,i,1)}this.setMode=a,this.render=r,this.renderInstances=o,this.renderMultiDraw=s}function Nu(n,t,e,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");a=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(y){return!(y!==_n&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(y){const g=y===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==ln&&y!==Rn&&!g&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const m=c(l);m!==l&&(tt("WebGLRenderer:",l,"not supported, using",m,"instead."),l=m);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:_,maxVertexTextures:x,maxTextureSize:R,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:S,maxSamples:M,samples:E}}function Ou(n){const t=this;let e=null,i=0,a=!1,r=!1;const o=new Ri,s=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const _=u.length!==0||f||i!==0||a;return a=f,i=u.length,_},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=m(u,f,0)},this.setState=function(u,f,_){const x=u.clippingPlanes,R=u.clipIntersection,p=u.clipShadows,d=n.get(u);if(!a||x===null||x.length===0||r&&!p)r?m(null):l();else{const w=r?0:i,C=w*4;let S=d.clippingState||null;c.value=S,S=m(x,f,C,_);for(let M=0;M!==C;++M)S[M]=e[M];d.clippingState=S,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(u,f,_,x){const R=u!==null?u.length:0;let p=null;if(R!==0){if(p=c.value,x!==!0||p===null){const d=_+R*4,w=f.matrixWorldInverse;s.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let C=0,S=_;C!==R;++C,S+=4)o.copy(u[C]).applyMatrix4(w,s),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,p}}const ti=4,Fu=6,Bu=20,Gu=256,pi=new qa,so=new Ie;let Sa=null,xa=0,Ma=0,Ea=!1;const Hu=new ie,Dn=new ie;class co{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,a=100,r={}){const{size:o=256,position:s=Hu}=r;Sa=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,a,c,s),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,xa,Ma),this._renderer.xr.enabled=Ea,t.scissorTest=!1,Xn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:un,format:_n,colorSpace:en,depthBuffer:!1},a=lo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lo(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ku(r)),this._blurMaterial=zu(r,t,e),this._ggxMaterial=Vu(r,t,e)}return a}_compileMaterial(t){const e=new Le(new qt,t);this._renderer.compile(e,pi)}_sceneToCubeUV(t,e,i,a,r){const c=new Cn(90,1,e,i),l=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,_=u.toneMapping;u.getClearColor(so),u.toneMapping=fn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(a),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Le(new Vt,new wt({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,p=R.material;let d=!1;const w=t.background;w?w.isColor&&(p.color.copy(w),t.background=null,d=!0):(p.color.copy(so),d=!0);for(let C=0;C<6;C++){const S=C%3;S===0?(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+m[C],r.y,r.z)):S===1?(c.up.set(0,0,l[C]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+m[C],r.z)):(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+m[C]));const M=this._cubeSize;Xn(a,S*M,C>2?M:0,M,M),u.setRenderTarget(a),d&&u.render(R,c),u.render(t,c)}u.toneMapping=_,u.autoClear=f,t.background=w}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===Li||t.mapping===fi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fo());const r=a?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const s=r.uniforms;s.envMap.value=t;const c=this._cubeSize;Xn(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,pi)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const a=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,s=this._lodMeshes[i];s.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),m=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-m*m),f=l*1.25,_=u*f,{_lodMax:x}=this,R=this._sizeLods[i],p=3*R*(i>x-ti?i-x+ti:0),d=4*(this._cubeSize-R);c.envMap.value=t.texture,c.roughness.value=_,c.mipInt.value=x-e,Xn(r,p,d,3*R,2*R),a.setRenderTarget(r),a.render(s,pi),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-i,Xn(t,p,d,3*R,2*R),a.setRenderTarget(t),a.render(s,pi)}_blur(t,e,i,a){const r=this._pingPongRenderTarget,o=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,a,r){const o=this._renderer,s=this._blurMaterial,c=this._lodMeshes[a];c.material=s;const l=s.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const m=this._sizeLods[a],u=3*m*(a>this._lodMax-ti?a-this._lodMax+ti:0),f=4*(this._cubeSize-m);Xn(e,u,f,3*m,2*m),o.setRenderTarget(e),o.render(c,pi)}}function ku(n){const t=[],e=[];let i=n;const a=n-ti+1+Fu;for(let r=0;r<a;r++){const o=Math.pow(2,i);t.push(o);const s=1/(o-2),c=-s,l=1+s,m=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,_=3,x=new Float32Array(_*f*u),R=new Float32Array(_*f*u);for(let d=0;d<u;d++){const w=d%3*2/3-1,C=d>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];x.set(S,_*f*d);for(let M=0;M<f;M++){const E=m[M*2]*2-1,y=m[M*2+1]*2-1;d===0?Dn.set(1,y,E):d===1?Dn.set(-E,1,-y):d===2?Dn.set(-E,y,1):d===3?Dn.set(-1,y,-E):d===4?Dn.set(-E,-1,y):Dn.set(E,y,-1),Dn.toArray(R,(d*f+M)*_)}}const p=new qt;p.setAttribute("position",new jt(x,_)),p.setAttribute("outputDirection",new jt(R,_)),e.push(new Le(p,null)),i>ti&&i--}return{lodMeshes:e,sizeLods:t}}function lo(n,t,e){const i=new Zt(n,t,e);return i.texture.mapping=na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xn(n,t,e,i,a){n.viewport.set(t,e,i,a),n.scissor.set(t,e,i,a)}function Vu(n,t,e){return new Jt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ia(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function zu(n,t,e){return new Jt({name:"SphericalGaussianBlur",defines:{SAMPLES:Bu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ia(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function fo(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function uo(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function ia(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Rs extends Zt{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new ts(a),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Vt(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:Ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:vn});r.uniforms.tEquirect.value=e;const o=new Le(a,r),s=e.minFilter;return e.minFilter===An&&(e.minFilter=Rt),new Yc(1,10,this).update(t,o),e.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,a=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,a);t.setRenderTarget(r)}}function Wu(n){let t=new WeakMap,e=new WeakMap,i=null;function a(f,_=!1){return f==null?null:_?o(f):r(f)}function r(f){if(f&&f.isTexture){const _=f.mapping;if(_===ha||_===pa)if(t.has(f)){const x=t.get(f).texture;return s(x,f.mapping)}else{const x=f.image;if(x&&x.height>0){const R=new Rs(x.height);return R.fromEquirectangularTexture(n,f),t.set(f,R),f.addEventListener("dispose",l),s(R.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const _=f.mapping,x=_===ha||_===pa,R=_===Li||_===fi;if(x||R){let p=e.get(f);const d=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new co(n)),p=x?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{const w=f.image;return x&&w&&w.height>0||R&&w&&c(w)?(i===null&&(i=new co(n)),p=x?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",m),p.texture):null}}}return f}function s(f,_){return _===ha?f.mapping=Li:_===pa&&(f.mapping=fi),f}function c(f){let _=0;const x=6;for(let R=0;R<x;R++)f[R]!==void 0&&_++;return _===x}function l(f){const _=f.target;_.removeEventListener("dispose",l);const x=t.get(_);x!==void 0&&(t.delete(_),x.dispose())}function m(f){const _=f.target;_.removeEventListener("dispose",m);const x=e.get(_);x!==void 0&&(e.delete(_),x.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:u}}function Xu(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const a=n.getExtension(i);return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const a=e(i);return a===null&&Uc("WebGLRenderer: "+i+" extension not supported."),a}}}function Ku(n,t,e,i){const a={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete a[f.id];const _=r.get(f);_&&(t.remove(_),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function s(u,f){return a[f.id]===!0||(f.addEventListener("dispose",o),a[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER)}function l(u){const f=[],_=u.index,x=u.attributes.position;let R=0;if(x===void 0)return;if(_!==null){const w=_.array;R=_.version;for(let C=0,S=w.length;C<S;C+=3){const M=w[C+0],E=w[C+1],y=w[C+2];f.push(M,E,E,y,y,M)}}else{const w=x.array;R=x.version;for(let C=0,S=w.length/3-1;C<S;C+=3){const M=C+0,E=C+1,y=C+2;f.push(M,E,E,y,y,M)}}const p=new(x.count>=65535?nl:il)(f,1);p.version=R;const d=r.get(u);d&&t.remove(d),r.set(u,p)}function m(u){const f=r.get(u);if(f){const _=u.index;_!==null&&f.version<_.version&&l(u)}else l(u);return r.get(u)}return{get:s,update:c,getWireframeAttribute:m}}function Yu(n,t,e){let i;function a(u){i=u}let r,o;function s(u){r=u.type,o=u.bytesPerElement}function c(u,f){n.drawElements(i,f,r,u*o),e.update(f,i,1)}function l(u,f,_){_!==0&&(n.drawElementsInstanced(i,f,r,u*o,_),e.update(f,i,_))}function m(u,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,_);let R=0;for(let p=0;p<_;p++)R+=f[p];e.update(R,i,1)}this.setMode=a,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=m}function qu(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,s){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=s*(r/3);break;case n.LINES:e.lines+=s*(r/2);break;case n.LINE_STRIP:e.lines+=s*(r-1);break;case n.LINE_LOOP:e.lines+=s*r;break;case n.POINTS:e.points+=s*r;break;default:ut("WebGLInfo: Unknown draw mode:",o);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function Zu(n,t,e){const i=new WeakMap,a=new Et;function r(o,s,c){const l=o.morphTargetInfluences,m=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,u=m!==void 0?m.length:0;let f=i.get(s);if(f===void 0||f.count!==u){let b=function(){y.dispose(),i.delete(s),s.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const _=s.morphAttributes.position!==void 0,x=s.morphAttributes.normal!==void 0,R=s.morphAttributes.color!==void 0,p=s.morphAttributes.position||[],d=s.morphAttributes.normal||[],w=s.morphAttributes.color||[];let C=0;_===!0&&(C=1),x===!0&&(C=2),R===!0&&(C=3);let S=s.attributes.position.count*C,M=1;S>t.maxTextureSize&&(M=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const E=new Float32Array(S*M*4*u),y=new as(E,S,M,u);y.type=Rn,y.needsUpdate=!0;const g=C*4;for(let D=0;D<u;D++){const A=p[D],O=d[D],V=w[D],U=S*M*4*D;for(let z=0;z<A.count;z++){const $=z*g;_===!0&&(a.fromBufferAttribute(A,z),E[U+$+0]=a.x,E[U+$+1]=a.y,E[U+$+2]=a.z,E[U+$+3]=0),x===!0&&(a.fromBufferAttribute(O,z),E[U+$+4]=a.x,E[U+$+5]=a.y,E[U+$+6]=a.z,E[U+$+7]=0),R===!0&&(a.fromBufferAttribute(V,z),E[U+$+8]=a.x,E[U+$+9]=a.y,E[U+$+10]=a.z,E[U+$+11]=V.itemSize===4?a.w:1)}}f={count:u,texture:y,size:new Ze(S,M)},i.set(s,f),s.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let R=0;R<l.length;R++)_+=l[R];const x=s.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function $u(n,t,e,i,a){let r=new WeakMap;function o(l){const m=a.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==m&&(t.update(f),r.set(f,m)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==m&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,m))),l.isSkinnedMesh){const _=l.skeleton;r.get(_)!==m&&(_.update(),r.set(_,m))}return f}function s(){r=new WeakMap}function c(l){const m=l.target;m.removeEventListener("dispose",c),i.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:o,dispose:s}}const ju={[ds]:"LINEAR_TONE_MAPPING",[fs]:"REINHARD_TONE_MAPPING",[ls]:"CINEON_TONE_MAPPING",[$a]:"ACES_FILMIC_TONE_MAPPING",[cs]:"AGX_TONE_MAPPING",[ss]:"NEUTRAL_TONE_MAPPING",[os]:"CUSTOM_TONE_MAPPING"};function Qu(n,t,e,i,a,r){const o=new Zt(t,e,{type:n,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let s=null,c=null;const l=new qt;l.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new on([0,2,0,0,2,0],2));const m=new Pc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Le(l,m),f=new qa(-1,1,1,-1,0,1);let _=null,x=null,R=!1,p,d=null,w=[],C=!1;this.setSize=function(S,M){o.setSize(S,M),s!==null&&s.setSize(S,M),c!==null&&c.setSize(S,M);for(let E=0;E<w.length;E++){const y=w[E];y.setSize&&y.setSize(S,M)}},this.setEffects=function(S){w=S,C=w.length>0&&w[0].isRenderPass===!0;const M=o.width,E=o.height;w.length>0&&s===null&&(s=new Zt(M,E,{type:un,depthBuffer:!1,stencilBuffer:!1}),c=new Zt(M,E,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let y=0;y<w.length;y++){const g=w[y];g.setSize&&g.setSize(M,E)}},this.begin=function(S,M){if(R||S.toneMapping===fn&&w.length===0)return!1;if(d=M,M!==null){const E=M.width,y=M.height;(o.width!==E||o.height!==y)&&this.setSize(E,y)}return C===!1&&S.setRenderTarget(o),p=S.toneMapping,S.toneMapping=fn,!0},this.hasRenderPass=function(){return C},this.end=function(S,M){S.toneMapping=p,R=!0;let E=o,y=s;for(let g=0;g<w.length;g++){const b=w[g];b.enabled!==!1&&(b.render(S,y,E,M),b.needsSwap!==!1&&(E=y,y=y===s?c:s))}if(_!==S.outputColorSpace||x!==S.toneMapping){_=S.outputColorSpace,x=S.toneMapping,m.defines={},ht.getTransfer(_)===ct&&(m.defines.SRGB_TRANSFER="");const g=ju[x];g&&(m.defines[g]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(d),S.render(u,f),d=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),m.dispose()}}const Cs=new Di,Ha=new ji(1,1),ys=new as,Ps=new cl,Ls=new ts,ho=[],po=[],mo=new Float32Array(16),go=new Float32Array(9),_o=new Float32Array(4);function di(n,t,e){const i=n[0];if(i<=0||i>0)return n;const a=t*e;let r=ho[a];if(r===void 0&&(r=new Float32Array(a),ho[a]=r),t!==0){i.toArray(r,0);for(let o=1,s=0;o!==t;++o)s+=e,n[o].toArray(r,s)}return r}function Tt(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function bt(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function aa(n,t){let e=po[t];e===void 0&&(e=new Int32Array(t),po[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ju(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function eh(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Tt(e,t))return;n.uniform2fv(this.addr,t),bt(e,t)}}function th(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Tt(e,t))return;n.uniform3fv(this.addr,t),bt(e,t)}}function nh(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Tt(e,t))return;n.uniform4fv(this.addr,t),bt(e,t)}}function ih(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Tt(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),bt(e,t)}else{if(Tt(e,i))return;_o.set(i),n.uniformMatrix2fv(this.addr,!1,_o),bt(e,i)}}function ah(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Tt(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),bt(e,t)}else{if(Tt(e,i))return;go.set(i),n.uniformMatrix3fv(this.addr,!1,go),bt(e,i)}}function rh(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Tt(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),bt(e,t)}else{if(Tt(e,i))return;mo.set(i),n.uniformMatrix4fv(this.addr,!1,mo),bt(e,i)}}function oh(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function sh(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Tt(e,t))return;n.uniform2iv(this.addr,t),bt(e,t)}}function ch(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Tt(e,t))return;n.uniform3iv(this.addr,t),bt(e,t)}}function lh(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Tt(e,t))return;n.uniform4iv(this.addr,t),bt(e,t)}}function fh(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function dh(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Tt(e,t))return;n.uniform2uiv(this.addr,t),bt(e,t)}}function uh(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Tt(e,t))return;n.uniform3uiv(this.addr,t),bt(e,t)}}function hh(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Tt(e,t))return;n.uniform4uiv(this.addr,t),bt(e,t)}}function ph(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(Ha.compareFunction=e.isReversedDepthBuffer()?Ka:Ya,r=Ha):r=Cs,e.setTexture2D(t||r,a)}function mh(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||Ps,a)}function gh(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||Ls,a)}function _h(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||ys,a)}function vh(n){switch(n){case 5126:return Ju;case 35664:return eh;case 35665:return th;case 35666:return nh;case 35674:return ih;case 35675:return ah;case 35676:return rh;case 5124:case 35670:return oh;case 35667:case 35671:return sh;case 35668:case 35672:return ch;case 35669:case 35673:return lh;case 5125:return fh;case 36294:return dh;case 36295:return uh;case 36296:return hh;case 35678:case 36198:case 36298:case 36306:case 35682:return ph;case 35679:case 36299:case 36307:return mh;case 35680:case 36300:case 36308:case 36293:return gh;case 36289:case 36303:case 36311:case 36292:return _h}}function Sh(n,t){n.uniform1fv(this.addr,t)}function xh(n,t){const e=di(t,this.size,2);n.uniform2fv(this.addr,e)}function Mh(n,t){const e=di(t,this.size,3);n.uniform3fv(this.addr,e)}function Eh(n,t){const e=di(t,this.size,4);n.uniform4fv(this.addr,e)}function Th(n,t){const e=di(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function bh(n,t){const e=di(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function wh(n,t){const e=di(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ah(n,t){n.uniform1iv(this.addr,t)}function Rh(n,t){n.uniform2iv(this.addr,t)}function Ch(n,t){n.uniform3iv(this.addr,t)}function yh(n,t){n.uniform4iv(this.addr,t)}function Ph(n,t){n.uniform1uiv(this.addr,t)}function Lh(n,t){n.uniform2uiv(this.addr,t)}function Dh(n,t){n.uniform3uiv(this.addr,t)}function Ih(n,t){n.uniform4uiv(this.addr,t)}function Uh(n,t,e){const i=this.cache,a=t.length,r=aa(e,a);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ha:o=Cs;for(let s=0;s!==a;++s)e.setTexture2D(t[s]||o,r[s])}function Nh(n,t,e){const i=this.cache,a=t.length,r=aa(e,a);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==a;++o)e.setTexture3D(t[o]||Ps,r[o])}function Oh(n,t,e){const i=this.cache,a=t.length,r=aa(e,a);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==a;++o)e.setTextureCube(t[o]||Ls,r[o])}function Fh(n,t,e){const i=this.cache,a=t.length,r=aa(e,a);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==a;++o)e.setTexture2DArray(t[o]||ys,r[o])}function Bh(n){switch(n){case 5126:return Sh;case 35664:return xh;case 35665:return Mh;case 35666:return Eh;case 35674:return Th;case 35675:return bh;case 35676:return wh;case 5124:case 35670:return Ah;case 35667:case 35671:return Rh;case 35668:case 35672:return Ch;case 35669:case 35673:return yh;case 5125:return Ph;case 36294:return Lh;case 36295:return Dh;case 36296:return Ih;case 35678:case 36198:case 36298:case 36306:case 35682:return Uh;case 35679:case 36299:case 36307:return Nh;case 35680:case 36300:case 36308:case 36293:return Oh;case 36289:case 36303:case 36311:case 36292:return Fh}}class Gh{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=vh(e.type)}}class Hh{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bh(e.type)}}class kh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let r=0,o=a.length;r!==o;++r){const s=a[r];s.setValue(t,e[s.id],i)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function vo(n,t){n.seq.push(t),n.map[t.id]=t}function Vh(n,t,e){const i=n.name,a=i.length;for(Ta.lastIndex=0;;){const r=Ta.exec(i),o=Ta.lastIndex;let s=r[1];const c=r[2]==="]",l=r[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===a){vo(e,l===void 0?new Gh(s,n,t):new Hh(s,n,t));break}else{let u=e.map[s];u===void 0&&(u=new kh(s),vo(e,u)),e=u}}}class Zi{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const s=t.getActiveUniform(e,o),c=t.getUniformLocation(e,s.name);Vh(s,c,this)}const a=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(o):r.push(o);a.length>0&&(this.seq=a.concat(r))}setValue(t,e,i,a){const r=this.map[e];r!==void 0&&r.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let r=0,o=e.length;r!==o;++r){const s=e[r],c=i[s.id];c.needsUpdate!==!1&&s.setValue(t,c.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,r=t.length;a!==r;++a){const o=t[a];o.id in e&&i.push(o)}return i}}function So(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const zh=37297;let Wh=0;function Xh(n,t){const e=n.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=a;o<r;o++){const s=o+1;i.push(`${s===t?">":" "} ${s}: ${e[o]}`)}return i.join(`
`)}const xo=new Ke;function Kh(n){ht._getMatrix(xo,ht.workingColorSpace,n);const t=`mat3( ${xo.elements.map(e=>e.toFixed(4))} )`;switch(ht.getTransfer(n)){case rs:return[t,"LinearTransferOETF"];case ct:return[t,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Mo(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Xh(n.getShaderSource(t),s)}else return r}function Yh(n,t){const e=Kh(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const qh={[ds]:"Linear",[fs]:"Reinhard",[ls]:"Cineon",[$a]:"ACESFilmic",[cs]:"AgX",[ss]:"Neutral",[os]:"Custom"};function Zh(n,t){const e=qh[t];return e===void 0?(tt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vi=new ie;function $h(){ht.getLuminanceCoefficients(Vi);const n=Vi.x.toFixed(4),t=Vi.y.toFixed(4),e=Vi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jh(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bi).join(`
`)}function Qh(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Jh(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(t,a),o=r.name;let s=1;r.type===n.FLOAT_MAT2&&(s=2),r.type===n.FLOAT_MAT3&&(s=3),r.type===n.FLOAT_MAT4&&(s=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:s}}return e}function bi(n){return n!==""}function Eo(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function To(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function ka(n){return n.replace(ep,np)}const tp=new Map;function np(n,t){let e=Ve[t];if(e===void 0){const i=tp.get(t);if(i!==void 0)e=Ve[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ka(e)}const ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bo(n){return n.replace(ip,ap)}function ap(n,t,e,i){let a="";for(let r=parseInt(t);r<parseInt(e);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function wo(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const rp={[Ai]:"SHADOWMAP_TYPE_PCF",[Ei]:"SHADOWMAP_TYPE_VSM"};function op(n){return rp[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sp={[Li]:"ENVMAP_TYPE_CUBE",[fi]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE_UV"};function cp(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":sp[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const lp={[fi]:"ENVMAP_MODE_REFRACTION"};function fp(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":lp[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dp={[sl]:"ENVMAP_BLENDING_MULTIPLY",[ol]:"ENVMAP_BLENDING_MIX",[rl]:"ENVMAP_BLENDING_ADD"};function up(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":dp[n.combine]||"ENVMAP_BLENDING_NONE"}function hp(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function pp(n,t,e,i){const a=n.getContext(),r=e.defines;let o=e.vertexShader,s=e.fragmentShader;const c=op(e),l=cp(e),m=fp(e),u=up(e),f=hp(e),_=jh(e),x=Qh(r),R=a.createProgram();let p,d,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(bi).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(bi).join(`
`),d.length>0&&(d+=`
`)):(p=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bi).join(`
`),d=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+m:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?Ve.tonemapping_pars_fragment:"",e.toneMapping!==fn?Zh("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Yh("linearToOutputTexel",e.outputColorSpace),$h(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bi).join(`
`)),o=ka(o),o=Eo(o,e),o=To(o,e),s=ka(s),s=Eo(s,e),s=To(s,e),o=bo(o),s=bo(s),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===$r?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$r?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const C=w+p+o,S=w+d+s,M=So(a,a.VERTEX_SHADER,C),E=So(a,a.FRAGMENT_SHADER,S);a.attachShader(R,M),a.attachShader(R,E),e.index0AttributeName!==void 0?a.bindAttribLocation(R,0,e.index0AttributeName):e.hasPositionAttribute===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function y(A){if(n.debug.checkShaderErrors){const O=a.getProgramInfoLog(R)||"",V=a.getShaderInfoLog(M)||"",U=a.getShaderInfoLog(E)||"",z=O.trim(),$=V.trim(),Y=U.trim();let J=!0,j=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,R,M,E);else{const ee=Mo(a,M,"vertex"),te=Mo(a,E,"fragment");ut("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+ee+`
`+te)}else z!==""?tt("WebGLProgram: Program Info Log:",z):($===""||Y==="")&&(j=!1);j&&(A.diagnostics={runnable:J,programLog:z,vertexShader:{log:$,prefix:p},fragmentShader:{log:Y,prefix:d}})}a.deleteShader(M),a.deleteShader(E),g=new Zi(a,R),b=Jh(a,R)}let g;this.getUniforms=function(){return g===void 0&&y(this),g};let b;this.getAttributes=function(){return b===void 0&&y(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(R,zh)),D},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wh++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=M,this.fragmentShader=E,this}let mp=0;class gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const a=this._getShaderCacheForMaterial(t);return a.has(e)===!1&&(a.add(e),e.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new _p(t),e.set(t,i)),i}}class _p{constructor(t){this.id=mp++,this.code=t,this.usedTimes=0}}function vp(n){return n===si||n===Ua||n===Na}function Sp(n,t,e,i,a,r){const o=new tl,s=new gp,c=new Set,l=[],m=new Map,u=i.logarithmicDepthBuffer;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return c.add(g),g===0?"uv":`uv${g}`}function R(g,b,D,A,O,V){const U=A.fog,z=O.geometry,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?A.environment:null,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,J=t.get(g.envMap||$,Y),j=J&&J.mapping===na?J.image.height:null,ee=_[g.type];g.precision!==null&&(f=i.getMaxPrecision(g.precision),f!==g.precision&&tt("WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));const te=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Pe=te!==void 0?te.length:0;let ne=0;z.morphAttributes.position!==void 0&&(ne=1),z.morphAttributes.normal!==void 0&&(ne=2),z.morphAttributes.color!==void 0&&(ne=3);let we,xe,me,F;if(ee){const ot=cn[ee];we=ot.vertexShader,xe=ot.fragmentShader}else{we=g.vertexShader,xe=g.fragmentShader;const ot=s.getVertexShaderStage(g),je=s.getFragmentShaderStage(g);s.update(g,ot,je),me=ot.id,F=je.id}const K=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Ue=O.isInstancedMesh===!0,ge=O.isBatchedMesh===!0,Ge=!!g.map,lt=!!g.matcap,Ne=!!J,Xe=!!g.aoMap,$e=!!g.lightMap,He=!!g.bumpMap&&g.wireframe===!1,at=!!g.normalMap,ft=!!g.displacementMap,Ye=!!g.emissiveMap,De=!!g.metalnessMap,Fe=!!g.roughnessMap,P=g.anisotropy>0,pt=g.clearcoat>0,Oe=g.dispersion>0,T=g.retroreflectivity>0,h=g.iridescence>0,N=g.sheen>0,H=g.transmission>0,W=P&&!!g.anisotropyMap,ae=pt&&!!g.clearcoatMap,re=pt&&!!g.clearcoatNormalMap,X=pt&&!!g.clearcoatRoughnessMap,Z=h&&!!g.iridescenceMap,oe=h&&!!g.iridescenceThicknessMap,Ae=N&&!!g.sheenColorMap,fe=N&&!!g.sheenRoughnessMap,se=!!g.specularMap,Re=!!g.specularColorMap,ye=!!g.specularIntensityMap,Be=H&&!!g.transmissionMap,I=H&&!!g.thicknessMap,ce=!!g.gradientMap,q=!!g.alphaMap,le=g.alphaTest>0,pe=!!g.alphaHash,Q=!!g.extensions;let Ce=fn;g.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ce=n.toneMapping);const Te={shaderID:ee,shaderType:g.type,shaderName:g.name,vertexShader:we,fragmentShader:xe,defines:g.defines,customVertexShaderID:me,customFragmentShaderID:F,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,batching:ge,batchingColor:ge&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ge,matcap:lt,envMap:Ne,envMapMode:Ne&&J.mapping,envMapCubeUVHeight:j,aoMap:Xe,lightMap:$e,bumpMap:He,normalMap:at,displacementMap:ft,emissiveMap:Ye,normalMapObjectSpace:at&&g.normalMapType===Kc,normalMapTangentSpace:at&&g.normalMapType===vr,packedNormalMap:at&&g.normalMapType===vr&&vp(g.normalMap.format),metalnessMap:De,roughnessMap:Fe,anisotropy:P,anisotropyMap:W,clearcoat:pt,clearcoatMap:ae,clearcoatNormalMap:re,clearcoatRoughnessMap:X,dispersion:Oe,retroreflection:T,iridescence:h,iridescenceMap:Z,iridescenceThicknessMap:oe,sheen:N,sheenColorMap:Ae,sheenRoughnessMap:fe,specularMap:se,specularColorMap:Re,specularIntensityMap:ye,transmission:H,transmissionMap:Be,thicknessMap:I,gradientMap:ce,opaque:g.transparent===!1&&g.blending===Yi&&g.alphaToCoverage===!1,alphaMap:q,alphaTest:le,alphaHash:pe,combine:g.combine,mapUv:Ge&&x(g.map.channel),aoMapUv:Xe&&x(g.aoMap.channel),lightMapUv:$e&&x(g.lightMap.channel),bumpMapUv:He&&x(g.bumpMap.channel),normalMapUv:at&&x(g.normalMap.channel),displacementMapUv:ft&&x(g.displacementMap.channel),emissiveMapUv:Ye&&x(g.emissiveMap.channel),metalnessMapUv:De&&x(g.metalnessMap.channel),roughnessMapUv:Fe&&x(g.roughnessMap.channel),anisotropyMapUv:W&&x(g.anisotropyMap.channel),clearcoatMapUv:ae&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:fe&&x(g.sheenRoughnessMap.channel),specularMapUv:se&&x(g.specularMap.channel),specularColorMapUv:Re&&x(g.specularColorMap.channel),specularIntensityMapUv:ye&&x(g.specularIntensityMap.channel),transmissionMapUv:Be&&x(g.transmissionMap.channel),thicknessMapUv:I&&x(g.thicknessMap.channel),alphaMapUv:q&&x(g.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(at||P),vertexNormals:!!z.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Ge||q),fog:!!U,useFog:g.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||z.attributes.normal===void 0&&at===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:ne,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Ge&&g.map.isVideoTexture===!0&&ht.getTransfer(g.map.colorSpace)===ct,decodeVideoTextureEmissive:Ye&&g.emissiveMap.isVideoTexture===!0&&ht.getTransfer(g.emissiveMap.colorSpace)===ct,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===kt,flipSided:g.side===Ft,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Q&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Q&&g.extensions.multiDraw===!0||ge)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function p(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const D in g.defines)b.push(D),b.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(d(b,g),w(b,g),b.push(n.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function d(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function w(g,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function C(g){const b=_[g.type];let D;if(b){const A=cn[b];D=Xc.clone(A.uniforms)}else D=g.uniforms;return D}function S(g,b){let D=m.get(b);return D!==void 0?++D.usedTimes:(D=new pp(n,b,g,a),l.push(D),m.set(b,D)),D}function M(g){if(--g.usedTimes===0){const b=l.indexOf(g);l[b]=l[l.length-1],l.pop(),m.delete(g.cacheKey),g.destroy()}}function E(g){s.remove(g)}function y(){s.dispose()}return{getParameters:R,getProgramCacheKey:p,getUniforms:C,acquireProgram:S,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:y}}function xp(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let s=n.get(o);return s===void 0&&(s={},n.set(o,s)),s}function i(o){n.delete(o)}function a(o,s,c){n.get(o)[s]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:a,dispose:r}}function Mp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Ao(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ro(){const n=[];let t=0;const e=[],i=[],a=[];function r(){t=0,e.length=0,i.length=0,a.length=0}function o(f){let _=0;return f.isInstancedMesh&&(_+=2),f.isSkinnedMesh&&(_+=1),_}function s(f,_,x,R,p,d){let w=n[t];return w===void 0?(w={id:f.id,object:f,geometry:_,material:x,materialVariant:o(f),groupOrder:R,renderOrder:f.renderOrder,z:p,group:d},n[t]=w):(w.id=f.id,w.object=f,w.geometry=_,w.material=x,w.materialVariant=o(f),w.groupOrder=R,w.renderOrder=f.renderOrder,w.z=p,w.group=d),t++,w}function c(f,_,x,R,p,d,w){w.reversedDepth===!0&&(p=-p);const C=s(f,_,x,R,p,d);x.transmission>0?i.push(C):x.transparent===!0?a.push(C):e.push(C)}function l(f,_,x,R,p,d){const w=s(f,_,x,R,p,d);x.transmission>0?i.unshift(w):x.transparent===!0?a.unshift(w):e.unshift(w)}function m(f,_){e.length>1&&e.sort(f||Mp),i.length>1&&i.sort(_||Ao),a.length>1&&a.sort(_||Ao)}function u(){for(let f=t,_=n.length;f<_;f++){const x=n[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:a,init:r,push:c,unshift:l,finish:u,sort:m}}function Ep(){let n=new WeakMap;function t(i,a){const r=n.get(i);let o;return r===void 0?(o=new Ro,n.set(i,[o])):a>=r.length?(o=new Ro,r.push(o)):o=r[a],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Tp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new ie,color:new Ie};break;case"SpotLight":e={position:new ie,direction:new ie,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ie,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ie,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":e={color:new Ie,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return n[t.id]=e,e}}}function bp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let wp=0;function Ap(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Rp(n){const t=new Tp,e=bp(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new ie);const a=new ie,r=new It,o=new It;function s(l){let m=0,u=0,f=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let _=0,x=0,R=0,p=0,d=0,w=0,C=0,S=0,M=0,E=0,y=0,g=0,b=0,D=0;l.sort(Ap);for(let O=0,V=l.length;O<V;O++){const U=l[O],z=U.color,$=U.intensity,Y=U.distance;let J=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===si?J=U.shadow.map.texture:J=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)m+=z.r*$,u+=z.g*$,f+=z.b*$;else if(U.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(U.sh.coefficients[j],$);D++}else if(U.isSunLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ee=U.shadow,te=e.get(U);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[x]=te,i.sunShadowMap[x]=J;const Pe=ee.getViewportCount();for(let ne=0;ne<Pe;ne++)i.sunShadowMatrix[R+ne]=ee.getMatrix(ne),i.sunShadowCascade[R+ne]=ee._cascadeData[ne];R+=Pe,x++}i.sun[_]=j,_++}else if(U.isDirectionalLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ee=U.shadow,te=e.get(U);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.directionalShadow[p]=te,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=U.shadow.matrix,M++}i.directional[p]=j,p++}else if(U.isSpotLight){const j=t.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(z).multiplyScalar($),j.distance=Y,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,i.spot[w]=j;const ee=U.shadow;if(U.map&&(i.spotLightMap[g]=U.map,g++,ee.updateMatrices(U),U.castShadow&&b++),i.spotLightMatrix[w]=ee.matrix,U.castShadow){const te=e.get(U);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.spotShadow[w]=te,i.spotShadowMap[w]=J,y++}w++}else if(U.isRectAreaLight){const j=t.get(U);j.color.copy(z).multiplyScalar($),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),i.rectArea[C]=j,C++}else if(U.isPointLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),j.distance=U.distance,j.decay=U.decay,U.castShadow){const ee=U.shadow,te=e.get(U);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,te.shadowCameraNear=ee.camera.near,te.shadowCameraFar=ee.camera.far,i.pointShadow[d]=te,i.pointShadowMap[d]=J,i.pointShadowMatrix[d]=U.shadow.matrix,E++}i.point[d]=j,d++}else if(U.isHemisphereLight){const j=t.get(U);j.skyColor.copy(U.color).multiplyScalar($),j.groundColor.copy(U.groundColor).multiplyScalar($),i.hemi[S]=j,S++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=u,i.ambient[2]=f;const A=i.hash;(A.sunLength!==_||A.directionalLength!==p||A.pointLength!==d||A.spotLength!==w||A.rectAreaLength!==C||A.hemiLength!==S||A.numSunShadows!==x||A.numDirectionalShadows!==M||A.numPointShadows!==E||A.numSpotShadows!==y||A.numSpotMaps!==g||A.numLightProbes!==D)&&(i.sun.length=_,i.directional.length=p,i.spot.length=w,i.rectArea.length=C,i.point.length=d,i.hemi.length=S,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=R,i.sunShadowCascade.length=R,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+g-b,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=D,A.sunLength=_,A.directionalLength=p,A.pointLength=d,A.spotLength=w,A.rectAreaLength=C,A.hemiLength=S,A.numSunShadows=x,A.numDirectionalShadows=M,A.numPointShadows=E,A.numSpotShadows=y,A.numSpotMaps=g,A.numLightProbes=D,i.version=wp++)}function c(l,m){let u=0,f=0,_=0,x=0,R=0,p=0;const d=m.matrixWorldInverse;for(let w=0,C=l.length;w<C;w++){const S=l[w];if(S.isSunLight){const M=i.sun[u];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(d),u++}else if(S.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(d),f++}else if(S.isSpotLight){const M=i.spot[x];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(d),x++}else if(S.isRectAreaLight){const M=i.rectArea[R];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(d),o.identity(),r.copy(S.matrixWorld),r.premultiply(d),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),R++}else if(S.isPointLight){const M=i.point[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(d),_++}else if(S.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(d),p++}}}return{setup:s,setupView:c,state:i}}function Co(n){const t=new Rp(n),e=[],i=[],a=[];function r(f){u.camera=f,e.length=0,i.length=0,a.length=0}function o(f){e.push(f)}function s(f){i.push(f)}function c(f){a.push(f)}function l(){t.setup(e)}function m(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:m,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Cp(n){let t=new WeakMap;function e(a,r=0){const o=t.get(a);let s;return o===void 0?(s=new Co(n),t.set(a,[s])):r>=o.length?(s=new Co(n),o.push(s)):s=o[r],s}function i(){t=new WeakMap}return{get:e,dispose:i}}const yp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lp=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],Dp=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],yo=new It,mi=new ie,ba=new ie;function Ip(n,t,e){let i=new Ko;const a=new Ze,r=new Ze,o=new Et,s=new Ac,c=new Rc,l={},m=e.maxTextureSize,u={[oi]:Ft,[Ft]:oi,[kt]:kt},f=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:yp,fragmentShader:Pp}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const x=new qt;x.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Le(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ai;let d=this.type;this.render=function(E,y,g){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Cc&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ai);const b=n.getRenderTarget(),D=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),O=n.state;O.setBlending(vn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=d!==this.type;V&&y.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(z=>z.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,z=E.length;U<z;U++){const $=E[U],Y=$.shadow;if(Y===void 0){tt("WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;a.copy(Y.mapSize);const J=Y.getFrameExtents();a.multiply(J),r.copy(Y.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(r.x=Math.floor(m/J.x),a.x=r.x*J.x,Y.mapSize.x=r.x),a.y>m&&(r.y=Math.floor(m/J.y),a.y=r.y*J.y,Y.mapSize.y=r.y));const j=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=j,Y.map===null||V===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ei){if($.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Zt(a.x,a.y,{format:si,type:un,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),Y.map.texture.name=$.name+".shadowMap",Y.map.depthTexture=new ji(a.x,a.y,Rn),Y.map.depthTexture.name=$.name+".shadowMapDepth",Y.map.depthTexture.format=ci,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=gn,Y.map.depthTexture.magFilter=gn}else $.isPointLight?(Y.map=new Rs(a.x),Y.map.depthTexture=new yc(a.x,Hn)):(Y.map=new Zt(a.x,a.y),Y.map.depthTexture=new ji(a.x,a.y,Hn)),Y.map.depthTexture.name=$.name+".shadowMap",Y.map.depthTexture.format=ci,this.type===Ai?(Y.map.depthTexture.compareFunction=j?Ka:Ya,Y.map.depthTexture.minFilter=Rt,Y.map.depthTexture.magFilter=Rt):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=gn,Y.map.depthTexture.magFilter=gn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==a.x||Y.map.height!==a.y)&&Y.map.setSize(a.x,a.y);const ee=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();$.isPointLight!==!0&&Y.updateMatrices($,g);for(let te=0;te<ee;te++){const Pe=Y.getCamera(te);if($.isPointLight){const ne=Y.camera,we=Y.matrix,xe=$.distance||ne.far;xe!==ne.far&&(ne.far=xe,ne.updateProjectionMatrix()),mi.setFromMatrixPosition($.matrixWorld),ne.position.copy(mi),ba.copy(ne.position),ba.add(Lp[te]),ne.up.copy(Dp[te]),ne.lookAt(ba),ne.updateMatrixWorld(),we.makeTranslation(-mi.x,-mi.y,-mi.z),yo.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(yo,ne.coordinateSystem,ne.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,te),n.clear();else{te===0&&(n.setRenderTarget(Y.map),n.clear());const ne=Y.getViewport(te);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),O.viewport(o)}i=Y.getFrustum(te),S(y,g,Pe,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Ei&&w(Y,g),Y.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(b,D,A)};function w(E,y){const g=t.update(R);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,_.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),E.mapPass===null?E.mapPass=new Zt(a.x,a.y,{format:si,type:un}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(y,null,g,f,R,null),_.uniforms.shadow_pass.value=E.mapPass.texture,_.uniforms.resolution.value.set(E.map.width,E.map.height),_.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(y,null,g,_,R,null)}function C(E,y,g,b){let D=null;const A=g.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)D=A;else if(D=g.isPointLight===!0?c:s,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const O=D.uuid,V=y.uuid;let U=l[O];U===void 0&&(U={},l[O]=U);let z=U[V];z===void 0&&(z=D.clone(),U[V]=z,y.addEventListener("dispose",M)),D=z}if(D.visible=y.visible,D.wireframe=y.wireframe,b===Ei?D.side=y.shadowSide!==null?y.shadowSide:y.side:D.side=y.shadowSide!==null?y.shadowSide:u[y.side],D.alphaMap=y.alphaMap,D.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,D.map=y.map,D.clipShadows=y.clipShadows,D.clippingPlanes=y.clippingPlanes,D.clipIntersection=y.clipIntersection,D.displacementMap=y.displacementMap,D.displacementScale=y.displacementScale,D.displacementBias=y.displacementBias,D.wireframeLinewidth=y.wireframeLinewidth,D.linewidth=y.linewidth,g.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const O=n.properties.get(D);O.light=g}return D}function S(E,y,g,b,D){if(E.visible===!1)return;if(E.layers.test(y.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Ei)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,E.matrixWorld);const V=t.update(E),U=E.material;if(Array.isArray(U)){const z=V.groups;for(let $=0,Y=z.length;$<Y;$++){const J=z[$],j=U[J.materialIndex];if(j&&j.visible){const ee=C(E,j,b,D);E.onBeforeShadow(n,E,y,g,V,ee,J),n.renderBufferDirect(g,null,V,ee,E,J),E.onAfterShadow(n,E,y,g,V,ee,J)}}}else if(U.visible){const z=C(E,U,b,D);E.onBeforeShadow(n,E,y,g,V,z,null),n.renderBufferDirect(g,null,V,z,E,null),E.onAfterShadow(n,E,y,g,V,z,null)}}const O=E.children;for(let V=0,U=O.length;V<U;V++)S(O[V],y,g,b,D)}function M(E){E.target.removeEventListener("dispose",M);for(const g in l){const b=l[g],D=E.target.uuid;D in b&&(b[D].dispose(),delete b[D])}}}function Up(n,t){function e(){let I=!1;const ce=new Et;let q=null;const le=new Et(0,0,0,0);return{setMask:function(pe){q!==pe&&!I&&(n.colorMask(pe,pe,pe,pe),q=pe)},setLocked:function(pe){I=pe},setClear:function(pe,Q,Ce,Te,ot){ot===!0&&(pe*=Te,Q*=Te,Ce*=Te),ce.set(pe,Q,Ce,Te),le.equals(ce)===!1&&(n.clearColor(pe,Q,Ce,Te),le.copy(ce))},reset:function(){I=!1,q=null,le.set(-1,0,0,0)}}}function i(){let I=!1,ce=!1,q=null,le=null,pe=null;return{setReversed:function(Q){if(ce!==Q){const Ce=t.get("EXT_clip_control");Q?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ce=Q;const Te=pe;pe=null,this.setClear(Te)}},getReversed:function(){return ce},setTest:function(Q){Q?K(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(Q){q!==Q&&!I&&(n.depthMask(Q),q=Q)},setFunc:function(Q){if(ce&&(Q=ll[Q]),le!==Q){switch(Q){case kc:n.depthFunc(n.NEVER);break;case Hc:n.depthFunc(n.ALWAYS);break;case Gc:n.depthFunc(n.LESS);break;case pr:n.depthFunc(n.LEQUAL);break;case Bc:n.depthFunc(n.EQUAL);break;case Fc:n.depthFunc(n.GEQUAL);break;case Oc:n.depthFunc(n.GREATER);break;case Nc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Q}},setLocked:function(Q){I=Q},setClear:function(Q){pe!==Q&&(pe=Q,ce&&(Q=1-Q),n.clearDepth(Q))},reset:function(){I=!1,q=null,le=null,pe=null,ce=!1}}}function a(){let I=!1,ce=null,q=null,le=null,pe=null,Q=null,Ce=null,Te=null,ot=null;return{setTest:function(je){I||(je?K(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(je){ce!==je&&!I&&(n.stencilMask(je),ce=je)},setFunc:function(je,$t,tn){(q!==je||le!==$t||pe!==tn)&&(n.stencilFunc(je,$t,tn),q=je,le=$t,pe=tn)},setOp:function(je,$t,tn){(Q!==je||Ce!==$t||Te!==tn)&&(n.stencilOp(je,$t,tn),Q=je,Ce=$t,Te=tn)},setLocked:function(je){I=je},setClear:function(je){ot!==je&&(n.clearStencil(je),ot=je)},reset:function(){I=!1,ce=null,q=null,le=null,pe=null,Q=null,Ce=null,Te=null,ot=null}}}const r=new e,o=new i,s=new a,c=new WeakMap,l=new WeakMap;let m={},u={},f={},_=new WeakMap,x=[],R=null,p=!1,d=null,w=null,C=null,S=null,M=null,E=null,y=null,g=new Ie(0,0,0),b=0,D=!1,A=null,O=null,V=null,U=null,z=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=J>=2);let ee=null,te={};const Pe=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),we=new Et().fromArray(Pe),xe=new Et().fromArray(ne);function me(I,ce,q,le){const pe=new Uint8Array(4),Q=n.createTexture();n.bindTexture(I,Q),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<q;Ce++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(ce+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return Q}const F={};F[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),F[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),F[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),K(n.DEPTH_TEST),o.setFunc(pr),He(!1),at(mr),K(n.CULL_FACE),Xe(vn);function K(I){m[I]!==!0&&(n.enable(I),m[I]=!0)}function Se(I){m[I]!==!1&&(n.disable(I),m[I]=!1)}function Ue(I,ce){return f[I]!==ce?(n.bindFramebuffer(I,ce),f[I]=ce,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ce),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function ge(I,ce){let q=x,le=!1;if(I){q=_.get(ce),q===void 0&&(q=[],_.set(ce,q));const pe=I.textures;if(q.length!==pe.length||q[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,Ce=pe.length;Q<Ce;Q++)q[Q]=n.COLOR_ATTACHMENT0+Q;q.length=pe.length,le=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,le=!0);le&&n.drawBuffers(q)}function Ge(I){return R!==I?(n.useProgram(I),R=I,!0):!1}const lt={[ui]:n.FUNC_ADD,[ac]:n.FUNC_SUBTRACT,[ic]:n.FUNC_REVERSE_SUBTRACT};lt[fl]=n.MIN,lt[dl]=n.MAX;const Ne={[Sc]:n.ZERO,[vc]:n.ONE,[_c]:n.SRC_COLOR,[gc]:n.SRC_ALPHA,[mc]:n.SRC_ALPHA_SATURATE,[pc]:n.DST_COLOR,[hc]:n.DST_ALPHA,[uc]:n.ONE_MINUS_SRC_COLOR,[dc]:n.ONE_MINUS_SRC_ALPHA,[fc]:n.ONE_MINUS_DST_COLOR,[lc]:n.ONE_MINUS_DST_ALPHA,[cc]:n.CONSTANT_COLOR,[sc]:n.ONE_MINUS_CONSTANT_COLOR,[oc]:n.CONSTANT_ALPHA,[rc]:n.ONE_MINUS_CONSTANT_ALPHA};function Xe(I,ce,q,le,pe,Q,Ce,Te,ot,je){if(I===vn){p===!0&&(Se(n.BLEND),p=!1);return}if(p===!1&&(K(n.BLEND),p=!0),I!==Wc){if(I!==d||je!==D){if((w!==ui||M!==ui)&&(n.blendEquation(n.FUNC_ADD),w=ui,M=ui),je)switch(I){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case li:n.blendFunc(n.ONE,n.ONE);break;case _r:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gr:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ut("WebGLState: Invalid blending: ",I);break}else switch(I){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case li:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _r:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gr:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",I);break}C=null,S=null,E=null,y=null,g.set(0,0,0),b=0,d=I,D=je}return}pe=pe||ce,Q=Q||q,Ce=Ce||le,(ce!==w||pe!==M)&&(n.blendEquationSeparate(lt[ce],lt[pe]),w=ce,M=pe),(q!==C||le!==S||Q!==E||Ce!==y)&&(n.blendFuncSeparate(Ne[q],Ne[le],Ne[Q],Ne[Ce]),C=q,S=le,E=Q,y=Ce),(Te.equals(g)===!1||ot!==b)&&(n.blendColor(Te.r,Te.g,Te.b,ot),g.copy(Te),b=ot),d=I,D=!1}function $e(I,ce){I.side===kt?Se(n.CULL_FACE):K(n.CULL_FACE);let q=I.side===Ft;ce&&(q=!q),He(q),I.blending===Yi&&I.transparent===!1?Xe(vn):Xe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const le=I.stencilWrite;s.setTest(le),le&&(s.setMask(I.stencilWriteMask),s.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),s.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ye(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(I){A!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),A=I)}function at(I){I!==Vc?(K(n.CULL_FACE),I!==O&&(I===mr?n.cullFace(n.BACK):I===zc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),O=I}function ft(I){I!==V&&(Y&&n.lineWidth(I),V=I)}function Ye(I,ce,q){I?(K(n.POLYGON_OFFSET_FILL),(U!==ce||z!==q)&&(U=ce,z=q,o.getReversed()&&(ce=-ce),n.polygonOffset(ce,q))):Se(n.POLYGON_OFFSET_FILL)}function De(I){I?K(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Fe(I){I===void 0&&(I=n.TEXTURE0+$-1),ee!==I&&(n.activeTexture(I),ee=I)}function P(I,ce,q){q===void 0&&(ee===null?q=n.TEXTURE0+$-1:q=ee);let le=te[q];le===void 0&&(le={type:void 0,texture:void 0},te[q]=le),(le.type!==I||le.texture!==ce)&&(ee!==q&&(n.activeTexture(q),ee=q),n.bindTexture(I,ce||F[I]),le.type=I,le.texture=ce)}function pt(){const I=te[ee];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Oe(){try{n.compressedTexImage2D(...arguments)}catch(I){ut("WebGLState:",I)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(I){ut("WebGLState:",I)}}function h(){try{n.texSubImage2D(...arguments)}catch(I){ut("WebGLState:",I)}}function N(){try{n.texSubImage3D(...arguments)}catch(I){ut("WebGLState:",I)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(I){ut("WebGLState:",I)}}function W(){try{n.compressedTexSubImage3D(...arguments)}catch(I){ut("WebGLState:",I)}}function ae(){try{n.texStorage2D(...arguments)}catch(I){ut("WebGLState:",I)}}function re(){try{n.texStorage3D(...arguments)}catch(I){ut("WebGLState:",I)}}function X(){try{n.texImage2D(...arguments)}catch(I){ut("WebGLState:",I)}}function Z(){try{n.texImage3D(...arguments)}catch(I){ut("WebGLState:",I)}}function oe(I){return u[I]!==void 0?u[I]:n.getParameter(I)}function Ae(I,ce){u[I]!==ce&&(n.pixelStorei(I,ce),u[I]=ce)}function fe(I){we.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),we.copy(I))}function se(I){xe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),xe.copy(I))}function Re(I,ce){let q=l.get(ce);q===void 0&&(q=new WeakMap,l.set(ce,q));let le=q.get(I);le===void 0&&(le=n.getUniformBlockIndex(ce,I.name),q.set(I,le))}function ye(I,ce){const le=l.get(ce).get(I);c.get(ce)!==le&&(n.uniformBlockBinding(ce,le,I.__bindingPointIndex),c.set(ce,le))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},u={},ee=null,te={},f={},_=new WeakMap,x=[],R=null,p=!1,d=null,w=null,C=null,S=null,M=null,E=null,y=null,g=new Ie(0,0,0),b=0,D=!1,A=null,O=null,V=null,U=null,z=null,we.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:K,disable:Se,bindFramebuffer:Ue,drawBuffers:ge,useProgram:Ge,setBlending:Xe,setMaterial:$e,setFlipSided:He,setCullFace:at,setLineWidth:ft,setPolygonOffset:Ye,setScissorTest:De,activeTexture:Fe,bindTexture:P,unbindTexture:pt,compressedTexImage2D:Oe,compressedTexImage3D:T,texImage2D:X,texImage3D:Z,pixelStorei:Ae,getParameter:oe,updateUBOMapping:Re,uniformBlockBinding:ye,texStorage2D:ae,texStorage3D:re,texSubImage2D:h,texSubImage3D:N,compressedTexSubImage2D:H,compressedTexSubImage3D:W,scissor:fe,viewport:se,reset:Be}}function Np(n,t,e,i,a,r,o){const s=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,m=new WeakMap,u=new Set;let f;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(T,h){return x?new OffscreenCanvas(T,h):al("canvas")}function p(T,h,N){let H=1;const W=Oe(T);if((W.width>N||W.height>N)&&(H=N/Math.max(W.width,W.height)),H<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ae=Math.floor(H*W.width),re=Math.floor(H*W.height);f===void 0&&(f=R(ae,re));const X=h?R(ae,re):f;return X.width=ae,X.height=re,X.getContext("2d").drawImage(T,0,0,ae,re),tt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ae+"x"+re+")."),X}else return"data"in T&&tt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),T;return T}function d(T){return T.generateMipmaps}function w(T){n.generateMipmap(T)}function C(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(T,h,N,H,W,ae=!1){if(T!==null){if(n[T]!==void 0)return n[T];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let re;H&&(re=t.get("EXT_texture_norm16"),re||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=h;if(h===n.RED&&(N===n.FLOAT&&(X=n.R32F),N===n.HALF_FLOAT&&(X=n.R16F),N===n.UNSIGNED_BYTE&&(X=n.R8),N===n.UNSIGNED_SHORT&&re&&(X=re.R16_EXT),N===n.SHORT&&re&&(X=re.R16_SNORM_EXT)),h===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.R8UI),N===n.UNSIGNED_SHORT&&(X=n.R16UI),N===n.UNSIGNED_INT&&(X=n.R32UI),N===n.BYTE&&(X=n.R8I),N===n.SHORT&&(X=n.R16I),N===n.INT&&(X=n.R32I)),h===n.RG&&(N===n.FLOAT&&(X=n.RG32F),N===n.HALF_FLOAT&&(X=n.RG16F),N===n.UNSIGNED_BYTE&&(X=n.RG8),N===n.UNSIGNED_SHORT&&re&&(X=re.RG16_EXT),N===n.SHORT&&re&&(X=re.RG16_SNORM_EXT)),h===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RG8UI),N===n.UNSIGNED_SHORT&&(X=n.RG16UI),N===n.UNSIGNED_INT&&(X=n.RG32UI),N===n.BYTE&&(X=n.RG8I),N===n.SHORT&&(X=n.RG16I),N===n.INT&&(X=n.RG32I)),h===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGB8UI),N===n.UNSIGNED_SHORT&&(X=n.RGB16UI),N===n.UNSIGNED_INT&&(X=n.RGB32UI),N===n.BYTE&&(X=n.RGB8I),N===n.SHORT&&(X=n.RGB16I),N===n.INT&&(X=n.RGB32I)),h===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),N===n.UNSIGNED_INT&&(X=n.RGBA32UI),N===n.BYTE&&(X=n.RGBA8I),N===n.SHORT&&(X=n.RGBA16I),N===n.INT&&(X=n.RGBA32I)),h===n.RGB&&(N===n.UNSIGNED_SHORT&&re&&(X=re.RGB16_EXT),N===n.SHORT&&re&&(X=re.RGB16_SNORM_EXT),N===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),h===n.RGBA){const Z=ae?rs:ht.getTransfer(W);N===n.FLOAT&&(X=n.RGBA32F),N===n.HALF_FLOAT&&(X=n.RGBA16F),N===n.UNSIGNED_BYTE&&(X=Z===ct?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT&&re&&(X=re.RGBA16_EXT),N===n.SHORT&&re&&(X=re.RGBA16_SNORM_EXT),N===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function M(T,h){let N;return T?h===null||h===Hn||h===Pi?N=n.DEPTH24_STENCIL8:h===Rn?N=n.DEPTH32F_STENCIL8:h===Qi&&(N=n.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):h===null||h===Hn||h===Pi?N=n.DEPTH_COMPONENT24:h===Rn?N=n.DEPTH_COMPONENT32F:h===Qi&&(N=n.DEPTH_COMPONENT16),N}function E(T,h){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==gn&&T.minFilter!==Rt?Math.log2(Math.max(h.width,h.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?h.mipmaps.length:1}function y(T){const h=T.target;h.removeEventListener("dispose",y),b(h),h.isVideoTexture&&m.delete(h),h.isHTMLTexture&&u.delete(h)}function g(T){const h=T.target;h.removeEventListener("dispose",g),A(h)}function b(T){const h=i.get(T);if(h.__webglInit===void 0)return;const N=T.source,H=_.get(N);if(H){const W=H[h.__cacheKey];W.usedTimes--,W.usedTimes===0&&D(T),Object.keys(H).length===0&&_.delete(N)}i.remove(T)}function D(T){const h=i.get(T);n.deleteTexture(h.__webglTexture);const N=T.source,H=_.get(N);delete H[h.__cacheKey],o.memory.textures--}function A(T){const h=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(h.__webglFramebuffer[H]))for(let W=0;W<h.__webglFramebuffer[H].length;W++)n.deleteFramebuffer(h.__webglFramebuffer[H][W]);else n.deleteFramebuffer(h.__webglFramebuffer[H]);h.__webglDepthbuffer&&n.deleteRenderbuffer(h.__webglDepthbuffer[H])}else{if(Array.isArray(h.__webglFramebuffer))for(let H=0;H<h.__webglFramebuffer.length;H++)n.deleteFramebuffer(h.__webglFramebuffer[H]);else n.deleteFramebuffer(h.__webglFramebuffer);if(h.__webglDepthbuffer&&n.deleteRenderbuffer(h.__webglDepthbuffer),h.__webglMultisampledFramebuffer&&n.deleteFramebuffer(h.__webglMultisampledFramebuffer),h.__webglColorRenderbuffer)for(let H=0;H<h.__webglColorRenderbuffer.length;H++)h.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(h.__webglColorRenderbuffer[H]);h.__webglDepthRenderbuffer&&n.deleteRenderbuffer(h.__webglDepthRenderbuffer)}const N=T.textures;for(let H=0,W=N.length;H<W;H++){const ae=i.get(N[H]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(N[H])}i.remove(T)}let O=0;function V(){O=0}function U(){return O}function z(T){O=T}function $(){const T=O;return T>=a.maxTextures&&tt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+a.maxTextures),O+=1,T}function Y(T){const h=[];return h.push(T.wrapS),h.push(T.wrapT),h.push(T.wrapR||0),h.push(T.magFilter),h.push(T.minFilter),h.push(T.anisotropy),h.push(T.internalFormat),h.push(T.format),h.push(T.type),h.push(T.generateMipmaps),h.push(T.premultiplyAlpha),h.push(T.flipY),h.push(T.unpackAlignment),h.push(T.colorSpace),h.join()}function J(T,h){const N=i.get(T);if(T.isVideoTexture&&P(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){const H=T.image;if(H===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(N,T,h);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+h)}function j(T,h){const N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Se(N,T,h);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+h)}function ee(T,h){const N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Se(N,T,h);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+h)}function te(T,h){const N=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){Ue(N,T,h);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+h)}const Pe={[Gn]:n.REPEAT,[$i]:n.CLAMP_TO_EDGE,[Yo]:n.MIRRORED_REPEAT},ne={[gn]:n.NEAREST,[qo]:n.NEAREST_MIPMAP_NEAREST,[Mi]:n.NEAREST_MIPMAP_LINEAR,[Rt]:n.LINEAR,[Ki]:n.LINEAR_MIPMAP_NEAREST,[An]:n.LINEAR_MIPMAP_LINEAR},we={[wc]:n.NEVER,[bc]:n.ALWAYS,[Tc]:n.LESS,[Ya]:n.LEQUAL,[Ec]:n.EQUAL,[Ka]:n.GEQUAL,[Mc]:n.GREATER,[xc]:n.NOTEQUAL};function xe(T,h){if(h.type===Rn&&t.has("OES_texture_float_linear")===!1&&(h.magFilter===Rt||h.magFilter===Ki||h.magFilter===Mi||h.magFilter===An||h.minFilter===Rt||h.minFilter===Ki||h.minFilter===Mi||h.minFilter===An)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Pe[h.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Pe[h.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Pe[h.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ne[h.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ne[h.minFilter]),h.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,we[h.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(h.magFilter===gn||h.minFilter!==Mi&&h.minFilter!==An||h.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(h.anisotropy>1||i.get(h).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(h.anisotropy,a.getMaxAnisotropy())),i.get(h).__currentAnisotropy=h.anisotropy}}}function me(T,h){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,h.addEventListener("dispose",y));const H=h.source;let W=_.get(H);W===void 0&&(W={},_.set(H,W));const ae=Y(h);if(ae!==T.__cacheKey){W[ae]===void 0&&(W[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),W[ae].usedTimes++;const re=W[T.__cacheKey];re!==void 0&&(W[T.__cacheKey].usedTimes--,re.usedTimes===0&&D(h)),T.__cacheKey=ae,T.__webglTexture=W[ae].texture}return N}function F(T,h,N){return Math.floor(Math.floor(T/N)/h)}function K(T,h,N,H){const ae=T.updateRanges;if(ae.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,h.width,h.height,N,H,h.data);else{ae.sort((Ae,fe)=>Ae.start-fe.start);let re=0;for(let Ae=1;Ae<ae.length;Ae++){const fe=ae[re],se=ae[Ae],Re=fe.start+fe.count,ye=F(se.start,h.width,4),Be=F(fe.start,h.width,4);se.start<=Re+1&&ye===Be&&F(se.start+se.count-1,h.width,4)===ye?fe.count=Math.max(fe.count,se.start+se.count-fe.start):(++re,ae[re]=se)}ae.length=re+1;const X=e.getParameter(n.UNPACK_ROW_LENGTH),Z=e.getParameter(n.UNPACK_SKIP_PIXELS),oe=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,h.width);for(let Ae=0,fe=ae.length;Ae<fe;Ae++){const se=ae[Ae],Re=Math.floor(se.start/4),ye=Math.ceil(se.count/4),Be=Re%h.width,I=Math.floor(Re/h.width),ce=ye,q=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),e.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Be,I,ce,q,N,H,h.data)}T.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,X),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(n.UNPACK_SKIP_ROWS,oe)}}function Se(T,h,N){let H=n.TEXTURE_2D;(h.isDataArrayTexture||h.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),h.isData3DTexture&&(H=n.TEXTURE_3D);const W=me(T,h),ae=h.source;e.bindTexture(H,T.__webglTexture,n.TEXTURE0+N);const re=i.get(ae);if(ae.version!==re.__version||W===!0){if(e.activeTexture(n.TEXTURE0+N),(typeof ImageBitmap<"u"&&h.image instanceof ImageBitmap)===!1){const q=ht.getPrimaries(ht.workingColorSpace),le=h.colorSpace===$n?null:ht.getPrimaries(h.colorSpace),pe=h.colorSpace===$n||q===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,h.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}e.pixelStorei(n.UNPACK_ALIGNMENT,h.unpackAlignment);let Z=p(h.image,!1,a.maxTextureSize);Z=pt(h,Z);const oe=r.convert(h.format,h.colorSpace),Ae=r.convert(h.type);let fe=S(h.internalFormat,oe,Ae,h.normalized,h.colorSpace,h.isVideoTexture);xe(H,h);let se;const Re=h.mipmaps,ye=h.isVideoTexture!==!0,Be=re.__version===void 0||W===!0,I=ae.dataReady,ce=E(h,Z);if(h.isDepthTexture)fe=M(h.format===ei,h.type),Be&&(ye?e.texStorage2D(n.TEXTURE_2D,1,fe,Z.width,Z.height):e.texImage2D(n.TEXTURE_2D,0,fe,Z.width,Z.height,0,oe,Ae,null));else if(h.isDataTexture)if(Re.length>0){ye&&Be&&e.texStorage2D(n.TEXTURE_2D,ce,fe,Re[0].width,Re[0].height);for(let q=0,le=Re.length;q<le;q++)se=Re[q],ye?I&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,se.width,se.height,oe,Ae,se.data):e.texImage2D(n.TEXTURE_2D,q,fe,se.width,se.height,0,oe,Ae,se.data);h.generateMipmaps=!1}else ye?(Be&&e.texStorage2D(n.TEXTURE_2D,ce,fe,Z.width,Z.height),I&&K(h,Z,oe,Ae)):e.texImage2D(n.TEXTURE_2D,0,fe,Z.width,Z.height,0,oe,Ae,Z.data);else if(h.isCompressedTexture)if(h.isCompressedArrayTexture){ye&&Be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ce,fe,Re[0].width,Re[0].height,Z.depth);for(let q=0,le=Re.length;q<le;q++)if(se=Re[q],h.format!==_n)if(oe!==null)if(ye){if(I)if(h.layerUpdates.size>0){const pe=Zr(se.width,se.height,h.format,h.type);for(const Q of h.layerUpdates){const Ce=se.data.subarray(Q*pe/se.data.BYTES_PER_ELEMENT,(Q+1)*pe/se.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,Q,se.width,se.height,1,oe,Ce)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,se.width,se.height,Z.depth,oe,se.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,fe,se.width,se.height,Z.depth,0,se.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,se.width,se.height,Z.depth,oe,Ae,se.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,fe,se.width,se.height,Z.depth,0,oe,Ae,se.data);h.layerUpdates.size>0&&h.clearLayerUpdates()}else{ye&&Be&&e.texStorage2D(n.TEXTURE_2D,ce,fe,Re[0].width,Re[0].height);for(let q=0,le=Re.length;q<le;q++)se=Re[q],h.format!==_n?oe!==null?ye?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,se.width,se.height,oe,se.data):e.compressedTexImage2D(n.TEXTURE_2D,q,fe,se.width,se.height,0,se.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?I&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,se.width,se.height,oe,Ae,se.data):e.texImage2D(n.TEXTURE_2D,q,fe,se.width,se.height,0,oe,Ae,se.data)}else if(h.isDataArrayTexture)if(ye){if(Be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ce,fe,Z.width,Z.height,Z.depth),I)if(h.layerUpdates.size>0){const q=Zr(Z.width,Z.height,h.format,h.type);for(const le of h.layerUpdates){const pe=Z.data.subarray(le*q/Z.data.BYTES_PER_ELEMENT,(le+1)*q/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,Z.width,Z.height,1,oe,Ae,pe)}h.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,oe,Ae,Z.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,Z.width,Z.height,Z.depth,0,oe,Ae,Z.data);else if(h.isData3DTexture)ye?(Be&&e.texStorage3D(n.TEXTURE_3D,ce,fe,Z.width,Z.height,Z.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,oe,Ae,Z.data)):e.texImage3D(n.TEXTURE_3D,0,fe,Z.width,Z.height,Z.depth,0,oe,Ae,Z.data);else if(h.isFramebufferTexture){if(Be)if(ye)e.texStorage2D(n.TEXTURE_2D,ce,fe,Z.width,Z.height);else{let q=Z.width,le=Z.height;for(let pe=0;pe<ce;pe++)e.texImage2D(n.TEXTURE_2D,pe,fe,q,le,0,oe,Ae,null),q>>=1,le>>=1}}else if(h.isHTMLTexture){if("texElementImage2D"in n){const q=n.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),Z.parentNode!==q){q.appendChild(Z),u.add(h),q.onpaint=le=>{const pe=le.changedElements;for(const Q of u)pe.includes(Q.image)&&(Q.needsUpdate=!0)},q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{const pe=n.RGBA,Q=n.RGBA,Ce=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,pe,Q,Ce,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Re.length>0){if(ye&&Be){const q=Oe(Re[0]);e.texStorage2D(n.TEXTURE_2D,ce,fe,q.width,q.height)}for(let q=0,le=Re.length;q<le;q++)se=Re[q],ye?I&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,oe,Ae,se):e.texImage2D(n.TEXTURE_2D,q,fe,oe,Ae,se);h.generateMipmaps=!1}else if(ye){if(Be){const q=Oe(Z);e.texStorage2D(n.TEXTURE_2D,ce,fe,q.width,q.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,Ae,Z)}else e.texImage2D(n.TEXTURE_2D,0,fe,oe,Ae,Z);d(h)&&w(H),re.__version=ae.version,h.onUpdate&&h.onUpdate(h)}T.__version=h.version}function Ue(T,h,N){if(h.image.length!==6)return;const H=me(T,h),W=h.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+N);const ae=i.get(W);if(W.version!==ae.__version||H===!0){e.activeTexture(n.TEXTURE0+N);const re=ht.getPrimaries(ht.workingColorSpace),X=h.colorSpace===$n?null:ht.getPrimaries(h.colorSpace),Z=h.colorSpace===$n||re===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,h.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,h.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const oe=h.isCompressedTexture||h.image[0].isCompressedTexture,Ae=h.image[0]&&h.image[0].isDataTexture,fe=[];for(let Q=0;Q<6;Q++)!oe&&!Ae?fe[Q]=p(h.image[Q],!0,a.maxCubemapSize):fe[Q]=Ae?h.image[Q].image:h.image[Q],fe[Q]=pt(h,fe[Q]);const se=fe[0],Re=r.convert(h.format,h.colorSpace),ye=r.convert(h.type),Be=S(h.internalFormat,Re,ye,h.normalized,h.colorSpace),I=h.isVideoTexture!==!0,ce=ae.__version===void 0||H===!0,q=W.dataReady;let le=E(h,se);xe(n.TEXTURE_CUBE_MAP,h);let pe;if(oe){I&&ce&&e.texStorage2D(n.TEXTURE_CUBE_MAP,le,Be,se.width,se.height);for(let Q=0;Q<6;Q++){pe=fe[Q].mipmaps;for(let Ce=0;Ce<pe.length;Ce++){const Te=pe[Ce];h.format!==_n?Re!==null?I?q&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce,0,0,Te.width,Te.height,Re,Te.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce,Be,Te.width,Te.height,0,Te.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce,0,0,Te.width,Te.height,Re,ye,Te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce,Be,Te.width,Te.height,0,Re,ye,Te.data)}}}else{if(pe=h.mipmaps,I&&ce){pe.length>0&&le++;const Q=Oe(fe[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,le,Be,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Ae){I?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,fe[Q].width,fe[Q].height,Re,ye,fe[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Be,fe[Q].width,fe[Q].height,0,Re,ye,fe[Q].data);for(let Ce=0;Ce<pe.length;Ce++){const ot=pe[Ce].image[Q].image;I?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce+1,0,0,ot.width,ot.height,Re,ye,ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce+1,Be,ot.width,ot.height,0,Re,ye,ot.data)}}else{I?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Re,ye,fe[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Be,Re,ye,fe[Q]);for(let Ce=0;Ce<pe.length;Ce++){const Te=pe[Ce];I?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce+1,0,0,Re,ye,Te.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce+1,Be,Re,ye,Te.image[Q])}}}d(h)&&w(n.TEXTURE_CUBE_MAP),ae.__version=W.version,h.onUpdate&&h.onUpdate(h)}T.__version=h.version}function ge(T,h,N,H,W,ae){const re=r.convert(N.format,N.colorSpace),X=r.convert(N.type),Z=S(N.internalFormat,re,X,N.normalized,N.colorSpace),oe=i.get(h),Ae=i.get(N);if(Ae.__renderTarget=h,!oe.__hasExternalTextures){const fe=Math.max(1,h.width>>ae),se=Math.max(1,h.height>>ae);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?e.texImage3D(W,ae,Z,fe,se,h.depth,0,re,X,null):e.texImage2D(W,ae,Z,fe,se,0,re,X,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Fe(h)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,W,Ae.__webglTexture,0,De(h)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,W,Ae.__webglTexture,ae),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(T,h,N){if(n.bindRenderbuffer(n.RENDERBUFFER,T),h.depthBuffer){const H=h.depthTexture,W=H&&H.isDepthTexture?H.type:null,ae=M(h.stencilBuffer,W),re=h.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Fe(h)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De(h),ae,h.width,h.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,De(h),ae,h.width,h.height):n.renderbufferStorage(n.RENDERBUFFER,ae,h.width,h.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,T)}else{const H=h.textures;for(let W=0;W<H.length;W++){const ae=H[W],re=r.convert(ae.format,ae.colorSpace),X=r.convert(ae.type),Z=S(ae.internalFormat,re,X,ae.normalized,ae.colorSpace);Fe(h)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De(h),Z,h.width,h.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,De(h),Z,h.width,h.height):n.renderbufferStorage(n.RENDERBUFFER,Z,h.width,h.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function lt(T,h,N){const H=h.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(h.depthTexture&&h.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=i.get(h.depthTexture);if(W.__renderTarget=h,(!W.__webglTexture||h.depthTexture.image.width!==h.width||h.depthTexture.image.height!==h.height)&&(h.depthTexture.image.width=h.width,h.depthTexture.image.height=h.height,h.depthTexture.needsUpdate=!0),H){if(W.__webglInit===void 0&&(W.__webglInit=!0,h.depthTexture.addEventListener("dispose",y)),W.__webglTexture===void 0){W.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),xe(n.TEXTURE_CUBE_MAP,h.depthTexture);const oe=r.convert(h.depthTexture.format),Ae=r.convert(h.depthTexture.type);let fe;h.depthTexture.format===ci?fe=n.DEPTH_COMPONENT24:h.depthTexture.format===ei&&(fe=n.DEPTH24_STENCIL8);for(let se=0;se<6;se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,fe,h.width,h.height,0,oe,Ae,null)}}else J(h.depthTexture,0);const ae=W.__webglTexture,re=De(h),X=H?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,Z=h.depthTexture.format===ei?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(h.depthTexture.format===ci)Fe(h)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,X,ae,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,Z,X,ae,0);else if(h.depthTexture.format===ei)Fe(h)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,X,ae,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,Z,X,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(T){const h=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(h.__boundDepthTexture!==T.depthTexture){const H=T.depthTexture;if(h.__depthDisposeCallback&&h.__depthDisposeCallback(),H){const W=()=>{delete h.__boundDepthTexture,delete h.__depthDisposeCallback,H.removeEventListener("dispose",W)};H.addEventListener("dispose",W),h.__depthDisposeCallback=W}h.__boundDepthTexture=H}if(T.depthTexture&&!h.__autoAllocateDepthBuffer)if(N)for(let H=0;H<6;H++)lt(h.__webglFramebuffer[H],T,H);else{const H=T.texture.mipmaps;H&&H.length>0?lt(h.__webglFramebuffer[0],T,0):lt(h.__webglFramebuffer,T,0)}else if(N){h.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(n.FRAMEBUFFER,h.__webglFramebuffer[H]),h.__webglDepthbuffer[H]===void 0)h.__webglDepthbuffer[H]=n.createRenderbuffer(),Ge(h.__webglDepthbuffer[H],T,!1);else{const W=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=h.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,ae)}}else{const H=T.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(n.FRAMEBUFFER,h.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,h.__webglFramebuffer),h.__webglDepthbuffer===void 0)h.__webglDepthbuffer=n.createRenderbuffer(),Ge(h.__webglDepthbuffer,T,!1);else{const W=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=h.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,ae)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(T,h,N){const H=i.get(T);h!==void 0&&ge(H.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Ne(T)}function $e(T){const h=T.texture,N=i.get(T),H=i.get(h);T.addEventListener("dispose",g);const W=T.textures,ae=T.isWebGLCubeRenderTarget===!0,re=W.length>1;if(re||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=h.version,o.memory.textures++),ae){N.__webglFramebuffer=[];for(let X=0;X<6;X++)if(h.mipmaps&&h.mipmaps.length>0){N.__webglFramebuffer[X]=[];for(let Z=0;Z<h.mipmaps.length;Z++)N.__webglFramebuffer[X][Z]=n.createFramebuffer()}else N.__webglFramebuffer[X]=n.createFramebuffer()}else{if(h.mipmaps&&h.mipmaps.length>0){N.__webglFramebuffer=[];for(let X=0;X<h.mipmaps.length;X++)N.__webglFramebuffer[X]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(re)for(let X=0,Z=W.length;X<Z;X++){const oe=i.get(W[X]);oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Fe(T)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let X=0;X<W.length;X++){const Z=W[X];N.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[X]);const oe=r.convert(Z.format,Z.colorSpace),Ae=r.convert(Z.type),fe=S(Z.internalFormat,oe,Ae,Z.normalized,Z.colorSpace,T.isXRRenderTarget===!0),se=De(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,se,fe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,N.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(N.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),xe(n.TEXTURE_CUBE_MAP,h);for(let X=0;X<6;X++)if(h.mipmaps&&h.mipmaps.length>0)for(let Z=0;Z<h.mipmaps.length;Z++)ge(N.__webglFramebuffer[X][Z],T,h,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Z);else ge(N.__webglFramebuffer[X],T,h,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);d(h)&&w(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(re){for(let X=0,Z=W.length;X<Z;X++){const oe=W[X],Ae=i.get(oe);let fe=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(fe,Ae.__webglTexture),xe(fe,oe),ge(N.__webglFramebuffer,T,oe,n.COLOR_ATTACHMENT0+X,fe,0),d(oe)&&w(fe)}e.unbindTexture()}else{let X=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(X=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(X,H.__webglTexture),xe(X,h),h.mipmaps&&h.mipmaps.length>0)for(let Z=0;Z<h.mipmaps.length;Z++)ge(N.__webglFramebuffer[Z],T,h,n.COLOR_ATTACHMENT0,X,Z);else ge(N.__webglFramebuffer,T,h,n.COLOR_ATTACHMENT0,X,0);d(h)&&w(X),e.unbindTexture()}T.depthBuffer&&Ne(T)}function He(T){const h=T.textures;for(let N=0,H=h.length;N<H;N++){const W=h[N];if(d(W)){const ae=C(T),re=i.get(W).__webglTexture;e.bindTexture(ae,re),w(ae),e.unbindTexture()}}}const at=[],ft=[];function Ye(T){if(T.samples>0){if(Fe(T)===!1){const h=T.textures,N=T.width,H=T.height;let W=n.COLOR_BUFFER_BIT;const ae=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(T),X=h.length>1;if(X)for(let oe=0;oe<h.length;oe++)e.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const Z=T.texture.mipmaps;Z&&Z.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let oe=0;oe<h.length;oe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[oe]);const Ae=i.get(h[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,N,H,0,0,N,H,W,n.NEAREST),c===!0&&(at.length=0,ft.length=0,at.push(n.COLOR_ATTACHMENT0+oe),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(at.push(ae),ft.push(ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ft)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let oe=0;oe<h.length;oe++){e.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,re.__webglColorRenderbuffer[oe]);const Ae=i.get(h[oe]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Ae,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){const h=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[h])}}}function De(T){return Math.min(a.maxSamples,T.samples)}function Fe(T){const h=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&h.__useRenderToTexture!==!1}function P(T){const h=o.render.frame;m.get(T)!==h&&(m.set(T,h),T.update())}function pt(T,h){const N=T.colorSpace,H=T.format,W=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==en&&N!==$n&&(ht.getTransfer(N)===ct?(H!==_n||W!==ln)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",N)),h}function Oe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=V,this.getTextureUnits=U,this.setTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=j,this.setTexture3D=ee,this.setTextureCube=te,this.rebindTextures=Xe,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Op(n,t){function e(i,a=$n){let r;const o=ht.getTransfer(a);if(i===ln)return n.UNSIGNED_BYTE;if(i===Qo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$c)return n.BYTE;if(i===jc)return n.SHORT;if(i===Qi)return n.UNSIGNED_SHORT;if(i===is)return n.INT;if(i===Hn)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===un)return n.HALF_FLOAT;if(i===Qc)return n.ALPHA;if(i===Jc)return n.RGB;if(i===_n)return n.RGBA;if(i===ci)return n.DEPTH_COMPONENT;if(i===ei)return n.DEPTH_STENCIL;if(i===el)return n.RED;if(i===jo)return n.RED_INTEGER;if(i===si)return n.RG;if(i===$o)return n.RG_INTEGER;if(i===Zo)return n.RGBA_INTEGER;if(i===la||i===fa||i===da||i===ua)if(o===ct)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sr||i===xr||i===Mr||i===Er)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Er)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tr||i===br||i===wr||i===Ar||i===Rr||i===Ua||i===Cr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Tr||i===br)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wr)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ar)return r.COMPRESSED_R11_EAC;if(i===Rr)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ua)return r.COMPRESSED_RG11_EAC;if(i===Cr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yr||i===Pr||i===Lr||i===Dr||i===Ir||i===Ur||i===Nr||i===Or||i===Fr||i===Br||i===Gr||i===Hr||i===kr||i===Vr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yr)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pr)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lr)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dr)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ir)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ur)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nr)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Or)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fr)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Br)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gr)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hr)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kr)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vr)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zr||i===Wr||i===Xr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===zr)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kr||i===Yr||i===Na||i===qr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Fp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new ns(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Jt({vertexShader:Fp,fragmentShader:Bp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Le(new Dt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hp extends Lc{constructor(t,e){super();const i=this;let a=null,r=1,o=null,s="local-floor",c=1,l=null,m=null,u=null,f=null,_=null,x=null;const R=typeof XRWebGLBinding<"u",p=new Gp,d={},w=e.getContextAttributes();let C=null,S=null;const M=[],E=[],y=new Ze;let g=null,b=null;const D=new Cn;D.viewport=new Et;const A=new Cn;A.viewport=new Et;const O=[D,A],V=new Dc;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=M[F];return K===void 0&&(K=new ca,M[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=M[F];return K===void 0&&(K=new ca,M[F]=K),K.getGripSpace()},this.getHand=function(F){let K=M[F];return K===void 0&&(K=new ca,M[F]=K),K.getHandSpace()};function $(F){const K=E.indexOf(F.inputSource);if(K===-1)return;const Se=M[K];Se!==void 0&&(Se.update(F.inputSource,F.frame,l||o),Se.dispatchEvent({type:F.type,data:F.inputSource}))}function Y(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",J);for(let F=0;F<M.length;F++){const K=E[F];K!==null&&(E[F]=null,M[F].disconnect(K))}U=null,z=null,p.reset();for(const F in d)delete d[F];if(t.setRenderTarget(C),_=null,f=null,u=null,a=null,S=null,me.stop(),i.isPresenting=!1,t.setPixelRatio(g),t.setSize(y.width,y.height,!1),b!==null){const F=b.camera;F.fov=b.fov,F.zoom=b.zoom,F.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){s=F,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return u===null&&R&&(u=new XRWebGLBinding(a,e)),u},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(F){if(a=F,a!==null){if(C=t.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",J),w.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(y),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ue=null,ge=null;w.depth&&(ge=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Se=w.stencil?ei:ci,Ue=w.stencil?Pi:Hn);const Ge={colorFormat:e.RGBA8,depthFormat:ge,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ge),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Zt(f.textureWidth,f.textureHeight,{format:_n,type:ln,depthTexture:new ji(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(a,e,Se),a.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),S=new Zt(_.framebufferWidth,_.framebufferHeight,{format:_n,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await a.requestReferenceSpace(s),me.setContext(a),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function J(F){for(let K=0;K<F.removed.length;K++){const Se=F.removed[K],Ue=E.indexOf(Se);Ue>=0&&(E[Ue]=null,M[Ue].disconnect(Se))}for(let K=0;K<F.added.length;K++){const Se=F.added[K];let Ue=E.indexOf(Se);if(Ue===-1){for(let Ge=0;Ge<M.length;Ge++)if(Ge>=E.length){E.push(Se),Ue=Ge;break}else if(E[Ge]===null){E[Ge]=Se,Ue=Ge;break}if(Ue===-1)break}const ge=M[Ue];ge&&ge.connect(Se)}}const j=new ie,ee=new ie;function te(F,K,Se){j.setFromMatrixPosition(K.matrixWorld),ee.setFromMatrixPosition(Se.matrixWorld);const Ue=j.distanceTo(ee),ge=K.projectionMatrix.elements,Ge=Se.projectionMatrix.elements,lt=ge[14]/(ge[10]-1),Ne=ge[14]/(ge[10]+1),Xe=(ge[9]+1)/ge[5],$e=(ge[9]-1)/ge[5],He=(ge[8]-1)/ge[0],at=(Ge[8]+1)/Ge[0],ft=lt*He,Ye=lt*at,De=Ue/(-He+at),Fe=De*-He;if(K.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Fe),F.translateZ(De),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),ge[10]===-1)F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const P=lt+De,pt=Ne+De,Oe=ft-Fe,T=Ye+(Ue-Fe),h=Xe*Ne/pt*P,N=$e*Ne/pt*P;F.projectionMatrix.makePerspective(Oe,T,h,N,P,pt),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function Pe(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(a===null)return;let K=F.near,Se=F.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(Se=p.depthFar)),V.near=A.near=D.near=K,V.far=A.far=D.far=Se,(U!==V.near||z!==V.far)&&(a.updateRenderState({depthNear:V.near,depthFar:V.far}),U=V.near,z=V.far),V.layers.mask=F.layers.mask|6,D.layers.mask=V.layers.mask&-5,A.layers.mask=V.layers.mask&-3;const Ue=F.parent,ge=V.cameras;Pe(V,Ue);for(let Ge=0;Ge<ge.length;Ge++)Pe(ge[Ge],Ue);ge.length===2?te(V,D,A):V.projectionMatrix.copy(D.projectionMatrix),b===null&&F.isPerspectiveCamera&&(b={camera:F,fov:F.fov,zoom:F.zoom}),ne(F,V,Ue)};function ne(F,K,Se){Se===null?F.matrix.copy(K.matrixWorld):(F.matrix.copy(Se.matrixWorld),F.matrix.invert(),F.matrix.multiply(K.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Ic*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&_===null))return c},this.setFoveation=function(F){c=F,f!==null&&(f.fixedFoveation=F),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=F)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(F){return d[F]};let we=null;function xe(F,K){if(m=K.getViewerPose(l||o),x=K,m!==null){const Se=m.views;_!==null&&(t.setRenderTargetFramebuffer(S,_.framebuffer),t.setRenderTarget(S));let Ue=!1;Se.length!==V.cameras.length&&(V.cameras.length=0,Ue=!0);for(let Ne=0;Ne<Se.length;Ne++){const Xe=Se[Ne];let $e=null;if(_!==null)$e=_.getViewport(Xe);else{const at=u.getViewSubImage(f,Xe);$e=at.viewport,Ne===0&&(t.setRenderTargetTextures(S,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(S))}let He=O[Ne];He===void 0&&(He=new Cn,He.layers.enable(Ne),He.viewport=new Et,O[Ne]=He),He.matrix.fromArray(Xe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Xe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set($e.x,$e.y,$e.width,$e.height),Ne===0&&(V.matrix.copy(He.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ue===!0&&V.cameras.push(He)}const ge=a.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){u=i.getBinding();const Ne=u.getDepthInformation(Se[0]);Ne&&Ne.isValid&&Ne.texture&&p.init(Ne,a.renderState)}if(ge&&ge.includes("camera-access")&&R){t.state.unbindTexture(),u=i.getBinding();for(let Ne=0;Ne<Se.length;Ne++){const Xe=Se[Ne].camera;if(Xe){let $e=d[Xe];$e||($e=new ns,d[Xe]=$e);const He=u.getCameraImage(Xe);$e.sourceTexture=He}}}}for(let Se=0;Se<M.length;Se++){const Ue=E[Se],ge=M[Se];Ue!==null&&ge!==void 0&&ge.update(Ue,K,l||o)}we&&we(F,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const me=new ws;me.setAnimationLoop(xe),this.setAnimationLoop=function(F){we=F},this.dispose=function(){}}}const kp=new It,Ds=new Ke;Ds.set(-1,0,0,0,1,0,0,0,1);function Vp(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,es(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function a(p,d,w,C,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),m(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&_(p,d,S)):d.isMeshMatcapMaterial?(r(p,d),x(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),R(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&s(p,d)):d.isPointsMaterial?c(p,d,w,C):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ft&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ft&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const w=t.get(d),C=w.envMap,S=w.envMapRotation;C&&(p.envMap.value=C,p.envMapRotation.value.setFromMatrix4(kp.makeRotationFromEuler(S)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ds),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function s(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,w,C){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=C*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function m(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function _(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ft&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function R(p,d){const w=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function zp(n,t,e,i){let a={},r={},o=[];const s=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){const E=M.program;i.uniformBlockBinding(S,E)}function l(S,M){let E=a[S.id];E===void 0&&(p(S),E=m(S),a[S.id]=E,S.addEventListener("dispose",w));const y=M.program;i.updateUBOMapping(S,y);const g=t.render.frame;r[S.id]!==g&&(f(S),r[S.id]=g)}function m(S){const M=u();S.__bindingPointIndex=M;const E=n.createBuffer(),y=S.__size,g=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,y,g),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function u(){for(let S=0;S<s;S++)if(o.indexOf(S)===-1)return o.push(S),S;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=a[S.id],E=S.uniforms,y=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let g=0,b=E.length;g<b;g++){const D=E[g];if(Array.isArray(D))for(let A=0,O=D.length;A<O;A++)_(D[A],g,A,y);else _(D,g,0,y)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(S,M,E,y){if(R(S,M,E,y)===!0){const g=S.__offset,b=S.value;if(Array.isArray(b)){let D=0;for(let A=0;A<b.length;A++){const O=b[A],V=d(O);x(O,S.__data,D),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(D+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(b,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,g,S.__data)}}function x(S,M,E){typeof S=="number"||typeof S=="boolean"?M[0]=S:S.isMatrix3?(M[0]=S.elements[0],M[1]=S.elements[1],M[2]=S.elements[2],M[3]=0,M[4]=S.elements[3],M[5]=S.elements[4],M[6]=S.elements[5],M[7]=0,M[8]=S.elements[6],M[9]=S.elements[7],M[10]=S.elements[8],M[11]=0):ArrayBuffer.isView(S)?M.set(new S.constructor(S.buffer,S.byteOffset,M.length)):S.toArray(M,E)}function R(S,M,E,y){const g=S.value,b=M+"_"+E;if(y[b]===void 0)return typeof g=="number"||typeof g=="boolean"?y[b]=g:ArrayBuffer.isView(g)?y[b]=g.slice():y[b]=g.clone(),!0;{const D=y[b];if(typeof g=="number"||typeof g=="boolean"){if(D!==g)return y[b]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(D.equals(g)===!1)return D.copy(g),!0}}return!1}function p(S){const M=S.uniforms;let E=0;const y=16;for(let b=0,D=M.length;b<D;b++){const A=Array.isArray(M[b])?M[b]:[M[b]];for(let O=0,V=A.length;O<V;O++){const U=A[O],z=Array.isArray(U.value)?U.value:[U.value];for(let $=0,Y=z.length;$<Y;$++){const J=z[$],j=d(J),ee=E%y,te=ee%j.boundary,Pe=ee+te;E+=te,Pe!==0&&y-Pe<j.storage&&(E+=y-Pe),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=j.storage}}}const g=E%y;return g>0&&(E+=y-g),S.__size=E,S.__cache={},this}function d(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",S),M}function w(S){const M=S.target;M.removeEventListener("dispose",w);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(a[M.id]),delete a[M.id],delete r[M.id]}function C(){for(const S in a)n.deleteBuffer(a[S]);o=[],a={},r={}}return{bind:c,update:l,dispose:C}}const Wp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let an=null;function Xp(){return an===null&&(an=new Za(Wp,16,16,si,un),an.name="DFG_LUT",an.minFilter=Rt,an.magFilter=Rt,an.wrapS=$i,an.wrapT=$i,an.generateMipmaps=!1,an.needsUpdate=!0),an}class Kp{constructor(t={}){const{canvas:e=ec(),context:i=null,depth:a=!0,stencil:r=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:_=ln}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const R=_,p=new Set([Zo,$o,jo]),d=new Set([ln,Hn,Qi,Pi,Qo,Jo]),w=new Uint32Array(4),C=new Int32Array(4),S=new ie;let M=null,E=null;const y=[],g=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let A=!1,O=null,V=null,U=null,z=null;this._outputColorSpace=dn;let $=0,Y=0,J=null,j=-1,ee=null;const te=new Et,Pe=new Et;let ne=null;const we=new Ie(0);let xe=0,me=e.width,F=e.height,K=1,Se=null,Ue=null;const ge=new Et(0,0,me,F),Ge=new Et(0,0,me,F);let lt=!1;const Ne=new Ko;let Xe=!1,$e=!1;const He=new It,at=new ie,ft=new Et,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Fe(){return J===null?K:1}let P=i;function pt(v,L){return e.getContext(v,L)}let Oe,T,h,N,H,W,ae,re,X,Z,oe,Ae,fe,se,Re,ye,Be,I,ce,q,le,pe,Q;try{const v={alpha:!0,depth:a,stencil:r,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:m,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tc}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",je,!1),e.addEventListener("webglcontextcreationerror",$t,!1),P===null){const L="webgl2";if(P=pt(L,v),P===null)throw pt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(v){throw e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",je,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),ut("WebGLRenderer: "+v.message),v}function Ce(){Oe=new Xu(P),Oe.init(),le=new Op(P,Oe),T=new Nu(P,Oe,t,le),h=new Up(P,Oe),T.reversedDepthBuffer&&f&&h.buffers.depth.setReversed(!0),V=P.createFramebuffer(),U=P.createFramebuffer(),z=P.createFramebuffer(),N=new qu(P),H=new xp,W=new Np(P,Oe,h,H,T,le,N),ae=new Wu(D),re=new Zl(P),pe=new Iu(P,re),X=new Ku(P,re,N,pe),Z=new $u(P,X,re,pe,N),I=new Zu(P,T,W),Re=new Ou(H),oe=new Sp(D,ae,Oe,T,pe,Re),Ae=new Vp(D,H),fe=new Ep,se=new Cp(Oe),Be=new Du(D,ae,h,Z,x,c),ye=new Ip(D,Z,T),Q=new zp(P,N,T,h),ce=new Uu(P,Oe,N),q=new Yu(P,Oe,N),N.programs=oe.programs,D.capabilities=T,D.extensions=Oe,D.properties=H,D.renderLists=fe,D.shadowMap=ye,D.state=h,D.info=N}R!==ln&&(b=new Qu(R,e.width,e.height,s,a,r));const Te=new Hp(D,P);this.xr=Te,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const v=Oe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Oe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(v){v!==void 0&&(K=v,this.setSize(me,F,!1))},this.getSize=function(v){return v.set(me,F)},this.setSize=function(v,L,k=!0){if(Te.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}me=v,F=L,e.width=Math.floor(v*K),e.height=Math.floor(L*K),k===!0&&(e.style.width=v+"px",e.style.height=L+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(me*K,F*K).floor()},this.setDrawingBufferSize=function(v,L,k){me=v,F=L,K=k,e.width=Math.floor(v*k),e.height=Math.floor(L*k),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(R===ln){ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(te)},this.getViewport=function(v){return v.copy(ge)},this.setViewport=function(v,L,k,B){v.isVector4?ge.set(v.x,v.y,v.z,v.w):ge.set(v,L,k,B),h.viewport(te.copy(ge).multiplyScalar(K).round())},this.getScissor=function(v){return v.copy(Ge)},this.setScissor=function(v,L,k,B){v.isVector4?Ge.set(v.x,v.y,v.z,v.w):Ge.set(v,L,k,B),h.scissor(Pe.copy(Ge).multiplyScalar(K).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(v){h.setScissorTest(lt=v)},this.setOpaqueSort=function(v){Se=v},this.setTransparentSort=function(v){Ue=v},this.getClearColor=function(v){return v.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,k=!0){let B=0;if(v){let G=!1;if(J!==null){const he=J.texture.format;G=p.has(he)}if(G){const he=J.texture.type,ve=d.has(he),ue=Be.getClearColor(),Me=Be.getClearAlpha(),be=ue.r,ke=ue.g,We=ue.b;ve?(w[0]=be,w[1]=ke,w[2]=We,w[3]=Me,P.clearBufferuiv(P.COLOR,0,w)):(C[0]=be,C[1]=ke,C[2]=We,C[3]=Me,P.clearBufferiv(P.COLOR,0,C))}else B|=P.COLOR_BUFFER_BIT}L&&(B|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),O=v},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",je,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),Be.dispose(),fe.dispose(),se.dispose(),H.dispose(),ae.dispose(),Z.dispose(),pe.dispose(),Q.dispose(),oe.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",ir),Te.removeEventListener("sessionend",ar),yn.stop()};function ot(v){v.preventDefault(),ur("WebGLRenderer: Context Lost."),A=!0}function je(){ur("WebGLRenderer: Context Restored."),A=!1;const v=N.autoReset,L=ye.enabled,k=ye.autoUpdate,B=ye.needsUpdate,G=ye.type;Ce(),N.autoReset=v,ye.enabled=L,ye.autoUpdate=k,ye.needsUpdate=B,ye.type=G}function $t(v){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function tn(v){const L=v.target;L.removeEventListener("dispose",tn),Ys(L)}function Ys(v){qs(v),H.remove(v)}function qs(v){const L=H.get(v).programs;L!==void 0&&(L.forEach(function(k){oe.releaseProgram(k)}),v.isShaderMaterial&&oe.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,k,B,G,he){L===null&&(L=Ye);const ve=G.isMesh&&G.matrixWorld.determinantAffine()<0,ue=js(v,L,k,B,G);h.setMaterial(B,ve);let Me=k.index,be=1;if(B.wireframe===!0){if(Me=X.getWireframeAttribute(k),Me===void 0)return;be=2}const ke=k.drawRange,We=k.attributes.position;let Ee=ke.start*be,Qe=(ke.start+ke.count)*be;he!==null&&(Ee=Math.max(Ee,he.start*be),Qe=Math.min(Qe,(he.start+he.count)*be)),Me!==null?(Ee=Math.max(Ee,0),Qe=Math.min(Qe,Me.count)):We!=null&&(Ee=Math.max(Ee,0),Qe=Math.min(Qe,We.count));const St=Qe-Ee;if(St<0||St===1/0)return;pe.setup(G,B,ue,k,Me);let dt,rt=ce;if(Me!==null&&(dt=re.get(Me),rt=q,rt.setIndex(dt)),G.isMesh)B.wireframe===!0?(h.setLineWidth(B.wireframeLinewidth*Fe()),rt.setMode(P.LINES)):rt.setMode(P.TRIANGLES);else if(G.isLine){let Ct=B.linewidth;Ct===void 0&&(Ct=1),h.setLineWidth(Ct*Fe()),G.isLineSegments?rt.setMode(P.LINES):G.isLineLoop?rt.setMode(P.LINE_LOOP):rt.setMode(P.LINE_STRIP)}else G.isPoints?rt.setMode(P.POINTS):G.isSprite&&rt.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(Oe.get("WEBGL_multi_draw"))rt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ct=G._multiDrawStarts,_e=G._multiDrawCounts,Ut=G._multiDrawCount,qe=Me?re.get(Me).bytesPerElement:1,Wt=H.get(B).currentProgram.getUniforms();for(let nn=0;nn<Ut;nn++)Wt.setValue(P,"_gl_DrawID",nn),rt.render(Ct[nn]/qe,_e[nn])}else if(G.isInstancedMesh)rt.renderInstances(Ee,St,G.count);else if(k.isInstancedBufferGeometry){const Ct=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,_e=Math.min(k.instanceCount,Ct);rt.renderInstances(Ee,St,_e)}else rt.render(Ee,St)};function nr(v,L,k,B){O!==null&&v.isNodeMaterial&&O.setObject(B,v),Xe===!0&&Re.setState(v,k,!1),v.transparent===!0&&v.side===kt&&v.forceSinglePass===!1?(v.side=Ft,v.needsUpdate=!0,Ni(v,L,B),v.side=oi,v.needsUpdate=!0,Ni(v,L,B),v.side=kt):Ni(v,L,B)}this.compile=function(v,L,k=null){k===null&&(k=v),O!==null&&O.renderStart(v,L,k),E=se.get(k),E.init(L),g.push(E),k.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),v!==k&&v.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),$e=this.localClippingEnabled,Xe=Re.init(this.clippingPlanes,$e),Xe===!0&&Re.setGlobalState(this.clippingPlanes,L),O!==null&&ye.render(E.state.shadowsArray,k,L);const B=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const he=G.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){const ue=he[ve];nr(ue,k,L,G),B.add(ue)}else nr(he,k,L,G),B.add(he)}),E=g.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(v,L,k=null){const B=this.compile(v,L,k);return new Promise(G=>{function he(){if(B.forEach(function(ve){const Me=H.get(ve).currentProgram;(Me===void 0||Me.isReady())&&B.delete(ve)}),B.size===0){G(v);return}setTimeout(he,10)}Oe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let oa=null;function Zs(v){oa&&oa(v)}function ir(){yn.stop()}function ar(){yn.start()}const yn=new ws;yn.setAnimationLoop(Zs),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(v){oa=v,Te.setAnimationLoop(v),v===null?yn.stop():yn.start()},Te.addEventListener("sessionstart",ir),Te.addEventListener("sessionend",ar),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;O!==null&&O.renderStart(v,L);const k=Te.enabled===!0&&Te.isPresenting===!0,B=b!==null&&(J===null||k)&&b.begin(D,J);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(L),L=Te.getCamera()),v.isScene===!0&&v.onBeforeRender(D,v,L,J),E=se.get(v,g.length),E.init(L),E.state.textureUnits=W.getTextureUnits(),g.push(E),He.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ne.setFromProjectionMatrix(He,hr,L.reversedDepth),$e=this.localClippingEnabled,Xe=Re.init(this.clippingPlanes,$e),M=fe.get(v,y.length),M.init(),y.push(M),Te.enabled===!0&&Te.isPresenting===!0){const ve=D.xr.getDepthSensingMesh();ve!==null&&sa(ve,L,-1/0,D.sortObjects)}sa(v,L,0,D.sortObjects),M.finish(),O!==null&&O.updateLights(E.state.lightsArray),D.sortObjects===!0&&M.sort(Se,Ue),De=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,De&&Be.addToRenderList(M,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Re.beginShadows();const G=E.state.shadowsArray;if(ye.render(G,v,L),Xe===!0&&Re.endShadows(),(B&&b.hasRenderPass())===!1){const ve=M.opaque,ue=M.transmissive;if(E.setupLights(),L.isArrayCamera){const Me=L.cameras;if(ue.length>0)for(let be=0,ke=Me.length;be<ke;be++){const We=Me[be];or(ve,ue,v,We)}De&&Be.render(v);for(let be=0,ke=Me.length;be<ke;be++){const We=Me[be];rr(M,v,We,We.viewport)}}else ue.length>0&&or(ve,ue,v,L),De&&Be.render(v),rr(M,v,L)}J!==null&&Y===0&&(W.updateMultisampleRenderTarget(J),W.updateRenderTargetMipmap(J)),B&&b.end(D),v.isScene===!0&&v.onAfterRender(D,v,L),pe.resetDefaultState(),j=-1,ee=null,g.pop(),g.length>0?(E=g[g.length-1],W.setTextureUnits(E.state.textureUnits),Xe===!0&&Re.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,y.pop(),y.length>0?M=y[y.length-1]:M=null,O!==null&&O.renderEnd()};function sa(v,L,k,B){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLightProbeGrid)E.pushLightProbeGrid(v);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Ne)){B&&ft.setFromMatrixPosition(v.matrixWorld).applyMatrix4(He);const ve=Z.update(v),ue=v.material;ue.visible&&M.push(v,ve,ue,k,ft.z,null,L)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Ne))){const ve=Z.update(v),ue=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ft.copy(v.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),ft.copy(ve.boundingSphere.center)),ft.applyMatrix4(v.matrixWorld).applyMatrix4(He)),Array.isArray(ue)){const Me=ve.groups;for(let be=0,ke=Me.length;be<ke;be++){const We=Me[be],Ee=ue[We.materialIndex];Ee&&Ee.visible&&M.push(v,ve,Ee,k,ft.z,We,L)}}else ue.visible&&M.push(v,ve,ue,k,ft.z,null,L)}}const he=v.children;for(let ve=0,ue=he.length;ve<ue;ve++)sa(he[ve],L,k,B)}function rr(v,L,k,B){const{opaque:G,transmissive:he,transparent:ve}=v;E.setupLightsView(k),Xe===!0&&Re.setGlobalState(D.clippingPlanes,k),B&&h.viewport(te.copy(B)),G.length>0&&Ui(G,L,k),he.length>0&&Ui(he,L,k),ve.length>0&&Ui(ve,L,k),h.buffers.depth.setTest(!0),h.buffers.depth.setMask(!0),h.buffers.color.setMask(!0),h.setPolygonOffset(!1)}function or(v,L,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){const Ee=Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new Zt(1,1,{generateMipmaps:!0,type:Ee?un:ln,minFilter:An,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const he=E.state.transmissionRenderTarget[B.id],ve=B.viewport||te;he.setSize(ve.z*D.transmissionResolutionScale,ve.w*D.transmissionResolutionScale);const ue=D.getRenderTarget(),Me=D.getActiveCubeFace(),be=D.getActiveMipmapLevel();D.setRenderTarget(he),D.getClearColor(we),xe=D.getClearAlpha(),xe<1&&D.setClearColor(16777215,.5),D.clear(),De&&Be.render(k);const ke=D.toneMapping;D.toneMapping=fn;const We=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),Xe===!0&&Re.setGlobalState(D.clippingPlanes,B),Ui(v,k,B),W.updateMultisampleRenderTarget(he),W.updateRenderTargetMipmap(he),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Qe=0,St=L.length;Qe<St;Qe++){const dt=L[Qe],{object:rt,geometry:Ct,material:_e,group:Ut}=dt;if(_e.side===kt&&rt.layers.test(B.layers)){const qe=_e.side;_e.side=Ft,_e.needsUpdate=!0,sr(rt,k,B,Ct,_e,Ut),_e.side=qe,_e.needsUpdate=!0,Ee=!0}}Ee===!0&&(W.updateMultisampleRenderTarget(he),W.updateRenderTargetMipmap(he))}D.setRenderTarget(ue,Me,be),D.setClearColor(we,xe),We!==void 0&&(B.viewport=We),D.toneMapping=ke}function Ui(v,L,k){const B=L.isScene===!0?L.overrideMaterial:null;for(let G=0,he=v.length;G<he;G++){const ve=v[G],{object:ue,geometry:Me,group:be}=ve;let ke=ve.material;ke.allowOverride===!0&&B!==null&&(ke=B),ue.layers.test(k.layers)&&sr(ue,L,k,Me,ke,be)}}function sr(v,L,k,B,G,he){O!==null&&G.isNodeMaterial&&O.setObject(v,G),v.onBeforeRender(D,L,k,B,G,he),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(D,L,k,B,v,he),G.transparent===!0&&G.side===kt&&G.forceSinglePass===!1?(G.side=Ft,G.needsUpdate=!0,D.renderBufferDirect(k,L,B,G,v,he),G.side=oi,G.needsUpdate=!0,D.renderBufferDirect(k,L,B,G,v,he),G.side=kt):D.renderBufferDirect(k,L,B,G,v,he),v.onAfterRender(D,L,k,B,G,he)}function Ni(v,L,k){L.isScene!==!0&&(L=Ye);const B=H.get(v),G=E.state.lights,he=E.state.shadowsArray,ve=G.state.version,ue=oe.getParameters(v,G.state,he,L,k,E.state.lightProbeGridArray),Me=oe.getProgramCacheKey(ue);let be=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;const ke=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=ae.get(v.envMap||B.environment,ke),B.envMapRotation=B.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,be===void 0&&(v.addEventListener("dispose",tn),be=new Map,B.programs=be);let We=be.get(Me);if(We!==void 0){if(B.currentProgram===We&&B.lightsStateVersion===ve)return lr(v,ue),We}else ue.uniforms=oe.getUniforms(v),O!==null&&v.isNodeMaterial&&O.build(v,k,ue),v.onBeforeCompile(ue,D),We=oe.acquireProgram(ue,Me),be.set(Me,We),B.uniforms=ue.uniforms;const Ee=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ee.clippingPlanes=Re.uniform),lr(v,ue),B.needsLights=Js(v),B.lightsStateVersion=ve,B.needsLights&&(Ee.ambientLightColor.value=G.state.ambient,Ee.lightProbe.value=G.state.probe,Ee.sunLights.value=G.state.sun,Ee.sunLightShadows.value=G.state.sunShadow,Ee.directionalLights.value=G.state.directional,Ee.directionalLightShadows.value=G.state.directionalShadow,Ee.spotLights.value=G.state.spot,Ee.spotLightShadows.value=G.state.spotShadow,Ee.rectAreaLights.value=G.state.rectArea,Ee.ltc_1.value=G.state.rectAreaLTC1,Ee.ltc_2.value=G.state.rectAreaLTC2,Ee.pointLights.value=G.state.point,Ee.pointLightShadows.value=G.state.pointShadow,Ee.hemisphereLights.value=G.state.hemi,Ee.sunShadowMatrix.value=G.state.sunShadowMatrix,Ee.sunShadowCascade.value=G.state.sunShadowCascade,Ee.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ee.spotLightMatrix.value=G.state.spotLightMatrix,Ee.spotLightMap.value=G.state.spotLightMap,Ee.pointShadowMatrix.value=G.state.pointShadowMatrix),B.lightProbeGrid=E.state.lightProbeGridArray.length>0,B.currentProgram=We,B.uniformsList=null,We}function cr(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=Zi.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function lr(v,L){const k=H.get(v);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function $s(v,L){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(L.matrixWorld);for(let k=0,B=v.length;k<B;k++){const G=v[k];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function js(v,L,k,B,G){L.isScene!==!0&&(L=Ye),W.resetTextureUnits();const he=L.fog,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,ue=J===null?D.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ht.workingColorSpace,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,be=ae.get(B.envMap||ve,Me),ke=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,We=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ee=!!k.morphAttributes.position,Qe=!!k.morphAttributes.normal,St=!!k.morphAttributes.color;let dt=fn;B.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(dt=D.toneMapping);const rt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ct=rt!==void 0?rt.length:0,_e=H.get(B),Ut=E.state.lights;if(Xe===!0&&($e===!0||v!==ee)){const st=v===ee&&B.id===j;Re.setState(B,v,st)}let qe=!1;B.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Ut.state.version||_e.outputColorSpace!==ue||G.isBatchedMesh&&_e.batching===!1||!G.isBatchedMesh&&_e.batching===!0||G.isBatchedMesh&&_e.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&_e.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&_e.instancing===!1||!G.isInstancedMesh&&_e.instancing===!0||G.isSkinnedMesh&&_e.skinning===!1||!G.isSkinnedMesh&&_e.skinning===!0||G.isInstancedMesh&&_e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_e.instancingMorph===!1&&G.morphTexture!==null||_e.envMap!==be||B.fog===!0&&_e.fog!==he||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Re.numPlanes||_e.numIntersection!==Re.numIntersection)||_e.vertexAlphas!==ke||_e.vertexTangents!==We||_e.morphTargets!==Ee||_e.morphNormals!==Qe||_e.morphColors!==St||_e.toneMapping!==dt||_e.morphTargetsCount!==Ct||!!_e.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,_e.__version=B.version);let Wt=_e.currentProgram;qe===!0&&(Wt=Ni(B,L,G),O&&B.isNodeMaterial&&O.onUpdateProgram(B,Wt,_e));let nn=!1,Sn=!1,Vn=!1;const it=Wt.getUniforms(),_t=_e.uniforms;if(h.useProgram(Wt.program)&&(nn=!0,Sn=!0,Vn=!0),B.id!==j&&(j=B.id,Sn=!0),_e.needsLights){const st=$s(E.state.lightProbeGridArray,G);_e.lightProbeGrid!==st&&(_e.lightProbeGrid=st,Sn=!0)}if(nn||ee!==v){h.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),it.setValue(P,"projectionMatrix",v.projectionMatrix),it.setValue(P,"viewMatrix",v.matrixWorldInverse);const Mn=it.map.cameraPosition;Mn!==void 0&&Mn.setValue(P,at.setFromMatrixPosition(v.matrixWorld)),T.logarithmicDepthBuffer&&it.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&it.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),ee!==v&&(ee=v,Sn=!0,Vn=!0)}if(_e.needsLights&&(Ut.state.sunShadowMap.length>0&&it.setValue(P,"sunShadowMap",Ut.state.sunShadowMap,W),Ut.state.directionalShadowMap.length>0&&it.setValue(P,"directionalShadowMap",Ut.state.directionalShadowMap,W),Ut.state.spotShadowMap.length>0&&it.setValue(P,"spotShadowMap",Ut.state.spotShadowMap,W),Ut.state.pointShadowMap.length>0&&it.setValue(P,"pointShadowMap",Ut.state.pointShadowMap,W)),G.isSkinnedMesh){it.setOptional(P,G,"bindMatrix"),it.setOptional(P,G,"bindMatrixInverse");const st=G.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),it.setValue(P,"boneTexture",st.boneTexture,W))}G.isBatchedMesh&&(it.setOptional(P,G,"batchingTexture"),it.setValue(P,"batchingTexture",G._matricesTexture,W),it.setOptional(P,G,"batchingIdTexture"),it.setValue(P,"batchingIdTexture",G._indirectTexture,W),it.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&it.setValue(P,"batchingColorTexture",G._colorsTexture,W));const xn=k.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&I.update(G,k,Wt),(Sn||_e.receiveShadow!==G.receiveShadow)&&(_e.receiveShadow=G.receiveShadow,it.setValue(P,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(_t.envMapIntensity.value=L.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=Xp()),Sn){if(it.setValue(P,"toneMappingExposure",D.toneMappingExposure),_e.needsLights&&Qs(_t,Vn),he&&B.fog===!0&&Ae.refreshFogUniforms(_t,he),Ae.refreshMaterialUniforms(_t,B,K,F,E.state.transmissionRenderTarget[v.id]),_e.needsLights&&_e.lightProbeGrid){const st=_e.lightProbeGrid;_t.probesSH.value=st.texture,_t.probesMin.value.copy(st.boundingBox.min),_t.probesMax.value.copy(st.boundingBox.max),_t.probesResolution.value.copy(st.resolution)}Zi.upload(P,cr(_e),_t,W)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Zi.upload(P,cr(_e),_t,W),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&it.setValue(P,"center",G.center),it.setValue(P,"modelViewMatrix",G.modelViewMatrix),it.setValue(P,"normalMatrix",G.normalMatrix),it.setValue(P,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){const st=B.uniformsGroups;for(let Mn=0,zn=st.length;Mn<zn;Mn++){const dr=st[Mn];Q.update(dr,Wt),Q.bind(dr,Wt)}}return Wt}function Qs(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Js(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(v,L,k){const B=H.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),H.get(v.texture).__webglTexture=L,H.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:k,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const k=H.get(v);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,k=0){J=v,$=L,Y=k;let B=null,G=!1,he=!1;if(v){const ue=H.get(v);if(ue.__useDefaultFramebuffer!==void 0){h.bindFramebuffer(P.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(v.viewport),Pe.copy(v.scissor),ne=v.scissorTest,h.viewport(te),h.scissor(Pe),h.setScissorTest(ne),j=-1;return}else if(ue.__webglFramebuffer===void 0)W.setupRenderTarget(v);else if(ue.__hasExternalTextures)W.rebindTextures(v,H.get(v.texture).__webglTexture,H.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const ke=v.depthTexture;if(ue.__boundDepthTexture!==ke){if(ke!==null&&H.has(ke)&&(v.width!==ke.image.width||v.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(v)}}const Me=v.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(he=!0);const be=H.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(be[L])?B=be[L][k]:B=be[L],G=!0):v.samples>0&&W.useMultisampledRTT(v)===!1?B=H.get(v).__webglMultisampledFramebuffer:Array.isArray(be)?B=be[k]:B=be,te.copy(v.viewport),Pe.copy(v.scissor),ne=v.scissorTest}else te.copy(ge).multiplyScalar(K).floor(),Pe.copy(Ge).multiplyScalar(K).floor(),ne=lt;if(k!==0&&(B=V),h.bindFramebuffer(P.FRAMEBUFFER,B)&&h.drawBuffers(v,B),h.viewport(te),h.scissor(Pe),h.setScissorTest(ne),G){const ue=H.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,ue.__webglTexture,k)}else if(he){const ue=L;for(let Me=0;Me<v.textures.length;Me++){const be=H.get(v.textures[Me]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Me,be.__webglTexture,k,ue)}}else if(v!==null&&k!==0){const ue=H.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ue.__webglTexture,k)}j=-1};function fr(v){const L=H.get(v);return(L.__readFormat!==v.format||L.__readType!==v.type)&&(L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=T.textureFormatReadable(v.format),L.__typeReadable=T.textureTypeReadable(v.type)),L}this.readRenderTargetPixels=function(v,L,k,B,G,he,ve,ue=0){if(!(v&&v.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){h.bindFramebuffer(P.FRAMEBUFFER,Me);try{const be=v.textures[ue],ke=be.format,We=be.type;v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ue);const Ee=fr(be);if(Ee.__formatReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-B&&k>=0&&k<=v.height-G&&P.readPixels(L,k,B,G,le.convert(ke),le.convert(We),he)}finally{const be=J!==null?H.get(J).__webglFramebuffer:null;h.bindFramebuffer(P.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(v,L,k,B,G,he,ve,ue=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(L>=0&&L<=v.width-B&&k>=0&&k<=v.height-G){h.bindFramebuffer(P.FRAMEBUFFER,Me);const be=v.textures[ue],ke=be.format,We=be.type;v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ue);const Ee=fr(be);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.bufferData(P.PIXEL_PACK_BUFFER,he.byteLength,P.STREAM_READ),P.readPixels(L,k,B,G,le.convert(ke),le.convert(We),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);const St=J!==null?H.get(J).__webglFramebuffer:null;h.bindFramebuffer(P.FRAMEBUFFER,St);const dt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await nc(P,dt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,he),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Qe),P.deleteSync(dt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,k=0){const B=Math.pow(2,-k),G=Math.floor(v.image.width*B),he=Math.floor(v.image.height*B),ve=L!==null?L.x:0,ue=L!==null?L.y:0;W.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,ve,ue,G,he),h.unbindTexture()},this.copyTextureToTexture=function(v,L,k=null,B=null,G=0,he=0){let ve,ue,Me,be,ke,We,Ee,Qe,St;const dt=v.isCompressedTexture?v.mipmaps[he]:v.image;if(k!==null)ve=k.max.x-k.min.x,ue=k.max.y-k.min.y,Me=k.isBox3?k.max.z-k.min.z:1,be=k.min.x,ke=k.min.y,We=k.isBox3?k.min.z:0;else{const _t=Math.pow(2,-G);ve=Math.floor(dt.width*_t),ue=Math.floor(dt.height*_t),v.isDataArrayTexture?Me=dt.depth:v.isData3DTexture?Me=Math.floor(dt.depth*_t):Me=1,be=0,ke=0,We=0}B!==null?(Ee=B.x,Qe=B.y,St=B.z):(Ee=0,Qe=0,St=0);const rt=le.convert(L.format),Ct=le.convert(L.type);let _e;L.isData3DTexture?(W.setTexture3D(L,0),_e=P.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(W.setTexture2DArray(L,0),_e=P.TEXTURE_2D_ARRAY):(W.setTexture2D(L,0),_e=P.TEXTURE_2D),h.activeTexture(P.TEXTURE0),h.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),h.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),h.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const Ut=h.getParameter(P.UNPACK_ROW_LENGTH),qe=h.getParameter(P.UNPACK_IMAGE_HEIGHT),Wt=h.getParameter(P.UNPACK_SKIP_PIXELS),nn=h.getParameter(P.UNPACK_SKIP_ROWS),Sn=h.getParameter(P.UNPACK_SKIP_IMAGES);h.pixelStorei(P.UNPACK_ROW_LENGTH,dt.width),h.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt.height),h.pixelStorei(P.UNPACK_SKIP_PIXELS,be),h.pixelStorei(P.UNPACK_SKIP_ROWS,ke),h.pixelStorei(P.UNPACK_SKIP_IMAGES,We);const Vn=v.isDataArrayTexture||v.isData3DTexture,it=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const _t=H.get(v),xn=H.get(L),st=H.get(_t.__renderTarget),Mn=H.get(xn.__renderTarget);h.bindFramebuffer(P.READ_FRAMEBUFFER,st.__webglFramebuffer),h.bindFramebuffer(P.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let zn=0;zn<Me;zn++)Vn&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(v).__webglTexture,G,We+zn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(L).__webglTexture,he,St+zn)),P.blitFramebuffer(be,ke,ve,ue,Ee,Qe,ve,ue,P.DEPTH_BUFFER_BIT,P.NEAREST);h.bindFramebuffer(P.READ_FRAMEBUFFER,null),h.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||H.has(v)){const _t=H.get(v),xn=H.get(L);h.bindFramebuffer(P.READ_FRAMEBUFFER,U),h.bindFramebuffer(P.DRAW_FRAMEBUFFER,z);for(let st=0;st<Me;st++)Vn?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.__webglTexture,G,We+st):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_t.__webglTexture,G),it?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xn.__webglTexture,he,St+st):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xn.__webglTexture,he),G!==0?P.blitFramebuffer(be,ke,ve,ue,Ee,Qe,ve,ue,P.COLOR_BUFFER_BIT,P.NEAREST):it?P.copyTexSubImage3D(_e,he,Ee,Qe,St+st,be,ke,ve,ue):P.copyTexSubImage2D(_e,he,Ee,Qe,be,ke,ve,ue);h.bindFramebuffer(P.READ_FRAMEBUFFER,null),h.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else it?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(_e,he,Ee,Qe,St,ve,ue,Me,rt,Ct,dt.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(_e,he,Ee,Qe,St,ve,ue,Me,rt,dt.data):P.texSubImage3D(_e,he,Ee,Qe,St,ve,ue,Me,rt,Ct,dt):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,he,Ee,Qe,ve,ue,rt,Ct,dt.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,he,Ee,Qe,dt.width,dt.height,rt,dt.data):P.texSubImage2D(P.TEXTURE_2D,he,Ee,Qe,ve,ue,rt,Ct,dt);h.pixelStorei(P.UNPACK_ROW_LENGTH,Ut),h.pixelStorei(P.UNPACK_IMAGE_HEIGHT,qe),h.pixelStorei(P.UNPACK_SKIP_PIXELS,Wt),h.pixelStorei(P.UNPACK_SKIP_ROWS,nn),h.pixelStorei(P.UNPACK_SKIP_IMAGES,Sn),he===0&&L.generateMipmaps&&P.generateMipmap(_e),h.unbindTexture()},this.initRenderTarget=function(v){H.get(v).__webglFramebuffer===void 0&&W.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?W.setTextureCube(v,0):v.isData3DTexture?W.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?W.setTexture2DArray(v,0):W.setTexture2D(v,0),h.unbindTexture()},this.resetState=function(){$=0,Y=0,J=null,h.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=ht._getUnpackColorSpace()}}function Is(n){const t=new Map,e=new Map,i=n.clone();return Us(n,i,function(a,r){t.set(r,a),e.set(a,r)}),i.traverse(function(a){if(!a.isSkinnedMesh)return;const r=a,o=t.get(a),s=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=s.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Us(n,t,e){e(n,t);for(let i=0;i<n.children.length;i++)Us(n.children[i],t.children[i],e)}function Po(n,t){if(t===ul)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(t===Oa||t===us){let e=n.getIndex();if(e===null){const r=[],o=n.getAttribute("position");if(o!==void 0){for(let s=0;s<o.count;s++)r.push(s);n.setIndex(r),e=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=e.count-2,a=[];if(t===Oa)for(let r=1;r<=i;r++)a.push(e.getX(0)),a.push(e.getX(r)),a.push(e.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(a.push(e.getX(r)),a.push(e.getX(r+1)),a.push(e.getX(r+2))):(a.push(e.getX(r+2)),a.push(e.getX(r+1)),a.push(e.getX(r)));return a.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(a),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),n}class Yp extends hl{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Qp(e)}),this.register(function(e){return new Jp(e)}),this.register(function(e){return new cm(e)}),this.register(function(e){return new lm(e)}),this.register(function(e){return new fm(e)}),this.register(function(e){return new tm(e)}),this.register(function(e){return new nm(e)}),this.register(function(e){return new im(e)}),this.register(function(e){return new am(e)}),this.register(function(e){return new jp(e)}),this.register(function(e){return new rm(e)}),this.register(function(e){return new em(e)}),this.register(function(e){return new sm(e)}),this.register(function(e){return new om(e)}),this.register(function(e){return new Zp(e)}),this.register(function(e){return new Lo(e,ze.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Lo(e,ze.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new dm(e)})}load(t,e,i,a){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Ci.extractUrlBase(t);o=Ci.resolveURL(l,this.path)}else o=Ci.extractUrlBase(t);this.manager.itemStart(t);const s=function(l){a?a(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new hs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(m){e(m),r.manager.itemEnd(t)},s)}catch(m){s(m)}},i,s)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,a){let r;const o={},s={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Ns){try{o[ze.KHR_BINARY_GLTF]=new um(t)}catch(u){a&&a(u);return}r=JSON.parse(o[ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){a&&a(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new wm(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const u=this.pluginCallbacks[m](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),s[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let m=0;m<r.extensionsUsed.length;++m){const u=r.extensionsUsed[m],f=r.extensionsRequired||[];switch(u){case ze.KHR_MATERIALS_UNLIT:o[u]=new $p;break;case ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new hm(r,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:o[u]=new pm;break;case ze.KHR_MESH_QUANTIZATION:o[u]=new mm;break;default:f.indexOf(u)>=0&&s[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(s),l.parse(i,a)}parseAsync(t,e){const i=this;return new Promise(function(a,r){i.parse(t,e,a,r)})}}function qp(){let n={};return{get:function(t){return n[t]},add:function(t,e){n[t]=e},remove:function(t){delete n[t]},removeAll:function(){n={}}}}function vt(n,t,e){const i=n.json.materials[t];return i.extensions&&i.extensions[e]?i.extensions[e]:null}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Zp{constructor(t){this.parser=t,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let i=0,a=e.length;i<a;i++){const r=e[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,i="light:"+t;let a=e.cache.get(i);if(a)return a;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const m=new Ie(16777215);c.color!==void 0&&m.setRGB(c.color[0],c.color[1],c.color[2],en);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ii(m),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new jn(m),l.distance=u;break;case"spot":l=new pl(m),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),sn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),a=Promise.resolve(l),e.cache.add(i,a),a}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,i=this.parser,r=i.json.nodes[t],s=(r.extensions&&r.extensions[this.name]||{}).light;return s===void 0?null:this._loadLight(s).then(function(c){return i._getNodeRef(e.cache,s,c)})}}class $p{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return wt}extendParams(t,e,i){const a=[];t.color=new Ie(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],en),t.opacity=o[3]}r.baseColorTexture!==void 0&&a.push(i.assignTexture(t,"map",r.baseColorTexture,dn))}return Promise.all(a)}}class jp{constructor(t){this.parser=t,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=vt(this.parser,t,this.name);return i===null||i.emissiveStrength!==void 0&&(e.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class Qp{constructor(t){this.parser=t,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return vt(this.parser,t,this.name)!==null?hn:null}extendMaterialParams(t,e){const i=vt(this.parser,t,this.name);if(i===null)return Promise.resolve();const a=[];if(i.clearcoatFactor!==void 0&&(e.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&a.push(this.parser.assignTexture(e,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(a.push(this.parser.assignTexture(e,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const r=i.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Ze(r,r)}return Promise.all(a)}}class Jp{constructor(t){this.parser=t,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(t){return vt(this.parser,t,this.name)!==null?hn:null}extendMaterialParams(t,e){const i=vt(this.parser,t,this.name);return i===null||(e.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class em{constructor(t){this.parser=t,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return vt(this.parser,t,this.name)!==null?hn:null}extendMaterialParams(t,e){const i=vt(this.parser,t,this.name);if(i===null)return Promise.resolve();const a=[];return i.iridescenceFactor!==void 0&&(e.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&a.push(this.parser.assignTexture(e,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(e.iridescenceIOR=i.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&a.push(this.parser.assignTexture(e,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(a)}}class tm{constructor(t){this.parser=t,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(t){return vt(this.parser,t,this.name)!==null?hn:null}extendMaterialParams(t,e){const i=vt(this.parser,t,this.name);if(i===null)return Promise.resolve();const a=[];if(e.sheenColor=new Ie(0,0,0),e.sheenRoughness=0,e.sheen=1,i.sheenColorFactor!==void 0){const r=i.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],en)}return i.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&a.push(this.parser.assignTexture(e,"sheenColorMap",i.sheenColorTexture,dn)),i.sheenRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(e,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(a)}}class nm{constructor(t){this.parser=t,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return vt(this.parser,t,this.name)!==null?hn:null}extendMaterialParams(t,e){const i=vt(this.parser,t,this.name);if(i===null)return Promise.resolve();const a=[];return i.transmissionFactor!==void 0&&(e.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&a.push(this.parser.assignTexture(e,"transmissionMap",i.transmissionTexture)),Promise.all(a)}}class im{constructor(t){this.parser=t,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(t){return vt(this.parser,t,this.name)!==null?hn:null}extendMaterialParams(t,e){const i=vt(this.parser,t,this.name);if(i===null)return Promise.resolve();const a=[];e.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&a.push(this.parser.assignTexture(e,"thicknessMap",i.thicknessTexture)),e.attenuationDistance=i.attenuationDistance||1/0;const r=i.attenuationColor||[1,1,1];return e.attenuationColor=new Ie().setRGB(r[0],r[1],r[2],en),Promise.all(a)}}class am{constructor(t){this.parser=t,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(t){return vt(this.parser,t,this.name)!==null?hn:null}extendMaterialParams(t,e){const i=vt(this.parser,t,this.name);return i===null||(e.ior=i.ior!==void 0?i.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}}class rm{constructor(t){this.parser=t,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(t){return vt(this.parser,t,this.name)!==null?hn:null}extendMaterialParams(t,e){const i=vt(this.parser,t,this.name);if(i===null)return Promise.resolve();const a=[];e.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&a.push(this.parser.assignTexture(e,"specularIntensityMap",i.specularTexture));const r=i.specularColorFactor||[1,1,1];return e.specularColor=new Ie().setRGB(r[0],r[1],r[2],en),i.specularColorTexture!==void 0&&a.push(this.parser.assignTexture(e,"specularColorMap",i.specularColorTexture,dn)),Promise.all(a)}}class om{constructor(t){this.parser=t,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(t){return vt(this.parser,t,this.name)!==null?hn:null}extendMaterialParams(t,e){const i=vt(this.parser,t,this.name);if(i===null)return Promise.resolve();const a=[];return e.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&a.push(this.parser.assignTexture(e,"bumpMap",i.bumpTexture)),Promise.all(a)}}class sm{constructor(t){this.parser=t,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return vt(this.parser,t,this.name)!==null?hn:null}extendMaterialParams(t,e){const i=vt(this.parser,t,this.name);if(i===null)return Promise.resolve();const a=[];return i.anisotropyStrength!==void 0&&(e.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(e.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&a.push(this.parser.assignTexture(e,"anisotropyMap",i.anisotropyTexture)),Promise.all(a)}}class cm{constructor(t){this.parser=t,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,i=e.json,a=i.textures[t];if(!a.extensions||!a.extensions[this.name])return null;const r=a.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class lm{constructor(t){this.parser=t,this.name=ze.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,i=this.parser,a=i.json,r=a.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],s=a.images[o.source];let c=i.textureLoader;if(s.uri){const l=i.options.manager.getHandler(s.uri);l!==null&&(c=l)}return i.loadTextureImage(t,o.source,c)}}class fm{constructor(t){this.parser=t,this.name=ze.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,i=this.parser,a=i.json,r=a.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],s=a.images[o.source];let c=i.textureLoader;if(s.uri){const l=i.options.manager.getHandler(s.uri);l!==null&&(c=l)}return i.loadTextureImage(t,o.source,c)}}class Lo{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){const e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const a=i.extensions[this.name],r=this.parser.getDependency("buffer",a.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(s){const c=a.byteOffset||0,l=a.byteLength||0,m=a.count,u=a.byteStride,f=new Uint8Array(s,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(m,u,f,a.mode,a.filter).then(function(_){return _.buffer}):o.ready.then(function(){const _=new ArrayBuffer(m*u);return o.decodeGltfBuffer(new Uint8Array(_),m,u,f,a.mode,a.filter),_})})}else return null}}class dm{constructor(t){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const a=e.meshes[i.mesh];for(const l of a.primitives)if(l.mode!==Kt.TRIANGLES&&l.mode!==Kt.TRIANGLE_STRIP&&l.mode!==Kt.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,s=[],c={};for(const l in o)s.push(this.parser.getDependency("accessor",o[l]).then(m=>(c[l]=m,c[l])));return s.length<1?null:(s.push(this.parser.createNodeMesh(t)),Promise.all(s).then(l=>{const m=l.pop(),u=m.isGroup?m.children:[m],f=l[0].count,_=[];for(const x of u){const R=new It,p=new ie,d=new kn,w=new ie(1,1,1),C=new Ti(x.geometry,x.material,f);for(let M=0;M<f;M++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,M),c.SCALE&&w.fromBufferAttribute(c.SCALE,M),C.setMatrixAt(M,R.compose(p,d,w));let S=null;for(const M in c)if(M==="_COLOR_0"){const E=c[M];C.instanceColor=new jr(E.array,E.itemSize,E.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(S===null){const y=C.geometry;S=new qt,S.name=y.name;for(const g in y.attributes)S.setAttribute(g,y.attributes[g]);for(const g in y.morphAttributes)S.morphAttributes[g]=y.morphAttributes[g];y.index!==null&&S.setIndex(y.index),S.morphTargetsRelative=y.morphTargetsRelative;for(const g of y.groups)S.addGroup(g.start,g.count,g.materialIndex);y.boundingBox!==null&&(S.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(S.boundingSphere=y.boundingSphere.clone()),S.drawRange.start=y.drawRange.start,S.drawRange.count=y.drawRange.count,S.userData=Object.assign({},y.userData),C.geometry=S}const E=c[M];S.setAttribute(M,new jr(E.array,E.itemSize,E.normalized))}ps.prototype.copy.call(C,x),this.parser.assignFinalMaterial(C),_.push(C)}return m.isGroup?(m.clear(),m.add(..._),m):_[0]}))}}const Ns="glTF",gi=12,Do={JSON:1313821514,BIN:5130562};class um{constructor(t){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,gi),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Ns)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const a=this.header.length-gi,r=new DataView(t,gi);let o=0;for(;o<a;){const s=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Do.JSON){const l=new Uint8Array(t,gi+o,s);this.content=i.decode(l)}else if(c===Do.BIN){const l=gi+o;this.body=t.slice(l,l+s)}o+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class hm{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const i=this.json,a=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,s={},c={},l={};for(const m in o){const u=Va[m]||m.toLowerCase();s[u]=o[m]}for(const m in t.attributes){const u=Va[m]||m.toLowerCase();if(o[m]!==void 0){const f=i.accessors[t.attributes[m]],_=ii[f.componentType];l[u]=_.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(m){return new Promise(function(u,f){a.decodeDracoFile(m,function(_){for(const x in _.attributes){const R=_.attributes[x],p=c[x];p!==void 0&&(R.normalized=p)}u(_)},s,l,en,f)})})}}class pm{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){const i=Math.cos(t.rotation),a=Math.sin(t.rotation);t.matrix.set(t.repeat.x*i,t.repeat.y*a,t.offset.x,-t.repeat.x*a,t.repeat.y*i,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}}class mm{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class Os extends Al{constructor(t,e,i,a){super(t,e,i,a)}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,a=this.valueSize,r=t*a*3+a;for(let o=0;o!==a;o++)e[o]=i[r+o];return e}interpolate_(t,e,i,a){const r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=s*2,l=s*3,m=a-e,u=(i-e)/m,f=u*u,_=f*u,x=t*l,R=x-l,p=-2*_+3*f,d=_-f,w=1-p,C=d-f+u;for(let S=0;S!==s;S++){const M=o[R+S+s],E=o[R+S+c]*m,y=o[x+S+s],g=o[x+S]*m;r[S]=w*M+C*E+p*y+d*g}return r}}const gm=new kn;class _m extends Os{interpolate_(t,e,i,a){const r=super.interpolate_(t,e,i,a);return gm.fromArray(r).normalize().toArray(r),r}}const Kt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ii={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Io={9728:gn,9729:Rt,9984:qo,9985:Ki,9986:Mi,9987:An},Uo={33071:$i,33648:Yo,10497:Gn},wa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Va={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Tn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vm={CUBICSPLINE:void 0,LINEAR:xs,STEP:bl},Aa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sm(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),n.DefaultMaterial}function In(n,t,e){for(const i in e.extensions)n[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function sn(n,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(n.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function xm(n,t,e){let i=!1,a=!1,r=!1;for(let l=0,m=t.length;l<m;l++){const u=t[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(a=!0),u.COLOR_0!==void 0&&(r=!0),i&&a&&r)break}if(!i&&!a&&!r)return Promise.resolve(n);const o=[],s=[],c=[];for(let l=0,m=t.length;l<m;l++){const u=t[l];if(i){const f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):n.attributes.position;o.push(f)}if(a){const f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):n.attributes.normal;s.push(f)}if(r){const f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(l){const m=l[0],u=l[1],f=l[2];return i&&(n.morphAttributes.position=m),a&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function Mm(n,t){if(n.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)n.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(n.morphTargetInfluences.length===e.length){n.morphTargetDictionary={};for(let i=0,a=e.length;i<a;i++)n.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Em(n){let t;const e=n.extensions&&n.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Ra(e.attributes):t=n.indices+":"+Ra(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,a=n.targets.length;i<a;i++)t+=":"+Ra(n.targets[i]);return t}function Ra(n){let t="";const e=Object.keys(n).sort();for(let i=0,a=e.length;i<a;i++)t+=e[i]+":"+n[e[i]]+";";return t}function za(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Tm(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const bm=new It;class wm{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new qp,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,a=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const s=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(s)===!0;const c=s.match(/Version\/(\d+)/);a=i&&c?parseInt(c[1],10):-1,r=s.indexOf("Firefox")>-1,o=r?s.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&a<17||r&&o<98?this.textureLoader=new ms(this.options.manager):this.textureLoader=new ml(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const i=this,a=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const s={scene:o[0][a.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:a.asset,parser:i,userData:{}};return In(r,s,a),sn(s,a),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(s)})).then(function(){for(const c of s.scenes)c.updateMatrixWorld();t(s)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let a=0,r=e.length;a<r;a++){const o=e[a].joints;for(let s=0,c=o.length;s<c;s++)t[o[s]].isBone=!0}for(let a=0,r=t.length;a<r;a++){const o=t[a];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;const a=i.clone(),r=(o,s)=>{const c=this.associations.get(o);c!=null&&this.associations.set(s,c);for(const[l,m]of o.children.entries())r(m,s.children[l])};return r(i,a),a.name+="_instance_"+t.uses[e]++,a}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){const a=t(e[i]);if(a)return a}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const i=[];for(let a=0;a<e.length;a++){const r=t(e[a]);r&&i.push(r)}return i}getDependency(t,e){const i=t+":"+e;let a=this.cache.get(i);if(!a){switch(t){case"scene":a=this.loadScene(e);break;case"node":a=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":a=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":a=this.loadAccessor(e);break;case"bufferView":a=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":a=this.loadBuffer(e);break;case"material":a=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":a=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":a=this.loadSkin(e);break;case"animation":a=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":a=this.loadCamera(e);break;default:if(a=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!a)throw new Error("Unknown type: "+t);break}this.cache.add(i,a)}return a}getDependencies(t){let e=this.cache.get(t);if(!e){const i=this,a=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(a.map(function(r,o){return i.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const a=this.options;return new Promise(function(r,o){i.load(Ci.resolveURL(e.uri,a.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){const a=e.byteLength||0,r=e.byteOffset||0;return i.slice(r,r+a)})}loadAccessor(t){const e=this,i=this.json,a=this.json.accessors[t];if(a.bufferView===void 0&&a.sparse===void 0){const o=wa[a.type],s=ii[a.componentType],c=a.normalized===!0,l=new s(a.count*o);return Promise.resolve(new jt(l,o,c))}const r=[];return a.bufferView!==void 0?r.push(this.getDependency("bufferView",a.bufferView)):r.push(null),a.sparse!==void 0&&(r.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(r).then(function(o){const s=o[0],c=wa[a.type],l=ii[a.componentType],m=l.BYTES_PER_ELEMENT,u=m*c,f=a.byteOffset||0,_=a.bufferView!==void 0?i.bufferViews[a.bufferView].byteStride:void 0,x=a.normalized===!0;let R,p;if(_&&_!==u){const d=Math.floor(f/_),w="InterleavedBuffer:"+a.bufferView+":"+a.componentType+":"+d+":"+a.count;let C=e.cache.get(w);C||(R=new l(s,d*_,a.count*_/m),C=new gl(R,_/m),e.cache.add(w,C)),p=new wl(C,c,f%_/m,x)}else s===null?R=new l(a.count*c):R=new l(s,f,a.count*c),p=new jt(R,c,x);if(a.sparse!==void 0){const d=wa.SCALAR,w=ii[a.sparse.indices.componentType],C=a.sparse.indices.byteOffset||0,S=a.sparse.values.byteOffset||0,M=new w(o[1],C,a.sparse.count*d),E=new l(o[2],S,a.sparse.count*c);s!==null&&(p=new jt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let y=0,g=M.length;y<g;y++){const b=M[y];if(p.setX(b,E[y*c]),c>=2&&p.setY(b,E[y*c+1]),c>=3&&p.setZ(b,E[y*c+2]),c>=4&&p.setW(b,E[y*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=x}return p})}loadTexture(t){const e=this.json,i=this.options,r=e.textures[t].source,o=e.images[r];let s=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(s=c)}return this.loadTextureImage(t,r,s)}loadTextureImage(t,e,i){const a=this,r=this.json,o=r.textures[t],s=r.images[e],c=(s.uri||s.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,i).then(function(m){m.flipY=!1,m.name=o.name||s.name||"",m.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(m.name=s.uri);const f=(r.samplers||{})[o.sampler]||{};return m.magFilter=Io[f.magFilter]||Rt,m.minFilter=Io[f.minFilter]||An,m.wrapS=Uo[f.wrapS]||Gn,m.wrapT=Uo[f.wrapT]||Gn,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==gn&&m.minFilter!==Rt,a.associations.set(m,{textures:t}),m}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const i=this,a=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=a.images[t],s=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=s.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const m=Promise.resolve(c).then(function(u){return new Promise(function(f,_){let x=f;e.isImageBitmapLoader===!0&&(x=function(R){const p=new Di(R);p.needsUpdate=!0,f(p)}),e.load(Ci.resolveURL(u,r.path),x,void 0,_)})}).then(function(u){return l===!0&&s.revokeObjectURL(c),sn(u,o),u.userData.mimeType=o.mimeType||Tm(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=m,m}assignTexture(t,e,i,a){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[ze.KHR_TEXTURE_TRANSFORM]){const s=i.extensions!==void 0?i.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(s){const c=r.associations.get(o);o=r.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,s),r.associations.set(o,c)}}return a!==void 0&&(o.colorSpace=a),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let i=t.material;const a=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const s="PointsMaterial:"+i.uuid;let c=this.cache.get(s);c||(c=new gs,ma.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(s,c)),i=c}else if(t.isLine){const s="LineBasicMaterial:"+i.uuid;let c=this.cache.get(s);c||(c=new _s,ma.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(s,c)),i=c}if(a||r||o){let s="ClonedMaterial:"+i.uuid+":";a&&(s+="derivative-tangents:"),r&&(s+="vertex-colors:"),o&&(s+="flat-shading:");let c=this.cache.get(s);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),a&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(s,c),this.associations.set(c,this.associations.get(i))),i=c}t.material=i}getMaterialType(){return Ot}loadMaterial(t){const e=this,i=this.json,a=this.extensions,r=i.materials[t];let o;const s={},c=r.extensions||{},l=[];if(c[ze.KHR_MATERIALS_UNLIT]){const u=a[ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(s,r,e))}else{const u=r.pbrMetallicRoughness||{};if(s.color=new Ie(1,1,1),s.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;s.color.setRGB(f[0],f[1],f[2],en),s.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(s,"map",u.baseColorTexture,dn)),s.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,s.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(s,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(s,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,s)})))}r.doubleSided===!0&&(s.side=kt);const m=r.alphaMode||Aa.OPAQUE;if(m===Aa.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,m===Aa.MASK&&(s.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==wt&&(l.push(e.assignTexture(s,"normalMap",r.normalTexture)),s.normalScale=new Ze(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;s.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==wt&&(l.push(e.assignTexture(s,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==wt){const u=r.emissiveFactor;s.emissive=new Ie().setRGB(u[0],u[1],u[2],en)}return r.emissiveTexture!==void 0&&o!==wt&&l.push(e.assignTexture(s,"emissiveMap",r.emissiveTexture,dn)),Promise.all(l).then(function(){const u=new o(s);return r.name&&(u.name=r.name),sn(u,r),e.associations.set(u,{materials:t}),r.extensions&&In(a,u,r),u})}createUniqueName(t){const e=_l.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,i=this.extensions,a=this.primitiveCache;function r(s){return i[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,e).then(function(c){return No(c,s,e)})}const o=[];for(let s=0,c=t.length;s<c;s++){const l=t[s],m=Em(l),u=a[m];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=No(new qt,l,e),l.mode===Kt.TRIANGLE_STRIP?f=f.then(_=>Po(_,us)):l.mode===Kt.TRIANGLE_FAN&&(f=f.then(_=>Po(_,Oa))),a[m]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,i=this.json,a=this.extensions,r=i.meshes[t],o=r.primitives,s=[];for(let c=0,l=o.length;c<l;c++){const m=o[c].material===void 0?Sm(this.cache):this.getDependency("material",o[c].material);s.push(m)}return s.push(e.loadGeometries(o)),Promise.all(s).then(async function(c){const l=c.slice(0,c.length-1),m=c[c.length-1],u=[];for(let _=0,x=m.length;_<x;_++){const R=m[_],p=o[_];let d;const w=l[_];if(p.mode===Kt.TRIANGLES||p.mode===Kt.TRIANGLE_STRIP||p.mode===Kt.TRIANGLE_FAN||p.mode===void 0){const C=r.isSkinnedMesh===!0,S=R.hasAttribute("skinIndex")&&R.hasAttribute("skinWeight");C&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),d=C&&S?new vl(R,w):new Le(R,w),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(p.mode===Kt.LINES)d=new vs(R,w);else if(p.mode===Kt.LINE_STRIP)d=new Sl(R,w);else if(p.mode===Kt.LINE_LOOP)d=new xl(R,w);else if(p.mode===Kt.POINTS)d=new Fa(R,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(d.geometry.morphAttributes).length>0&&Mm(d,r),d.name=e.createUniqueName(r.name||"mesh_"+t),sn(d,r),p.extensions&&In(a,d,p),e.assignFinalMaterial(d),u.push(d)}for(let _=0,x=u.length;_<x;_++)e.associations.set(u[_],{meshes:t,primitives:_});if(u.length===1)return r.extensions&&In(a,u[0],r),u[0];const f=new nt;r.extensions&&In(a,f,r),e.associations.set(f,{meshes:t});for(let _=0,x=u.length;_<x;_++)f.add(u[_]);return f})}loadCamera(t){let e;const i=this.json.cameras[t],a=i[i.type];if(!a){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new Cn(Ss.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):i.type==="orthographic"&&(e=new qa(-a.xmag,a.xmag,a.ymag,-a.ymag,a.znear,a.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),sn(e,i),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],i=[];for(let a=0,r=e.joints.length;a<r;a++)i.push(this._loadNodeShallow(e.joints[a]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(a){const r=a.pop(),o=a,s=[],c=[];for(let l=0,m=o.length;l<m;l++){const u=o[l];if(u){s.push(u);const f=new It;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Ml(s,c)})}loadAnimation(t){const e=this.json,i=this,a=e.animations[t],r=a.name?a.name:"animation_"+t,o=[],s=[],c=[],l=[],m=[];for(let u=0,f=a.channels.length;u<f;u++){const _=a.channels[u],x=a.samplers[_.sampler],R=_.target,p=R.node,d=a.parameters!==void 0?a.parameters[x.input]:x.input,w=a.parameters!==void 0?a.parameters[x.output]:x.output;R.node!==void 0&&(o.push(this.getDependency("node",p)),s.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",w)),l.push(x),m.push(R))}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l),Promise.all(m)]).then(function(u){const f=u[0],_=u[1],x=u[2],R=u[3],p=u[4],d=[];for(let C=0,S=f.length;C<S;C++){const M=f[C],E=_[C],y=x[C],g=R[C],b=p[C];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const D=i._createAnimationTracks(M,E,y,g,b);if(D)for(let A=0;A<D.length;A++)d.push(D[A])}const w=new El(r,void 0,d);return sn(w,a),w})}createNodeMesh(t){const e=this.json,i=this,a=e.nodes[t];return a.mesh===void 0?null:i.getDependency("mesh",a.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,a.mesh,r);return a.weights!==void 0&&o.traverse(function(s){if(s.isMesh)for(let c=0,l=a.weights.length;c<l;c++)s.morphTargetInfluences[c]=a.weights[c]}),o})}loadNode(t){const e=this.json,i=this,a=e.nodes[t],r=i._loadNodeShallow(t),o=[],s=a.children||[];for(let l=0,m=s.length;l<m;l++)o.push(i.getDependency("node",s[l]));const c=a.skin===void 0?Promise.resolve(null):i.getDependency("skin",a.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const m=l[0],u=l[1],f=l[2];f!==null&&m.traverse(function(_){_.isSkinnedMesh&&_.bind(f,bm)});for(let _=0,x=u.length;_<x;_++)m.add(u[_]);if(m.userData.pivot!==void 0&&u.length>0){const _=m.userData.pivot,x=u[0];m.pivot=new ie().fromArray(_),m.position.x-=_[0],m.position.y-=_[1],m.position.z-=_[2],x.position.set(0,0,0),delete m.userData.pivot}return m})}_loadNodeShallow(t){const e=this.json,i=this.extensions,a=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?a.createUniqueName(r.name):"",s=[],c=a._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&s.push(c),r.camera!==void 0&&s.push(a.getDependency("camera",r.camera).then(function(l){return a._getNodeRef(a.cameraCache,r.camera,l)})),a._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){s.push(l)}),this.nodeCache[t]=Promise.all(s).then(function(l){let m;if(r.isBone===!0?m=new Tl:l.length>1?m=new nt:l.length===1?m=l[0]:m=new ps,m!==l[0])for(let u=0,f=l.length;u<f;u++)m.add(l[u]);if(r.name&&(m.userData.name=r.name,m.name=o),sn(m,r),r.extensions&&In(i,m,r),r.matrix!==void 0){const u=new It;u.fromArray(r.matrix),m.applyMatrix4(u)}else r.translation!==void 0&&m.position.fromArray(r.translation),r.rotation!==void 0&&m.quaternion.fromArray(r.rotation),r.scale!==void 0&&m.scale.fromArray(r.scale);if(!a.associations.has(m))a.associations.set(m,{});else if(r.mesh!==void 0&&a.meshCache.refs[r.mesh]>1){const u=a.associations.get(m);a.associations.set(m,{...u})}return a.associations.get(m).nodes=t,m}),this.nodeCache[t]}loadScene(t){const e=this.extensions,i=this.json.scenes[t],a=this,r=new nt;i.name&&(r.name=a.createUniqueName(i.name)),sn(r,i),i.extensions&&In(e,r,i);const o=i.nodes||[],s=[];for(let c=0,l=o.length;c<l;c++)s.push(a.getDependency("node",o[c]));return Promise.all(s).then(function(c){for(let m=0,u=c.length;m<u;m++){const f=c[m];f.parent!==null?r.add(Is(f)):r.add(f)}const l=m=>{const u=new Map;for(const[f,_]of a.associations)(f instanceof ma||f instanceof Di)&&u.set(f,_);return m.traverse(f=>{const _=a.associations.get(f);_!=null&&u.set(f,_)}),u};return a.associations=l(r),r})}_createAnimationTracks(t,e,i,a,r){const o=[],s=t.name?t.name:t.uuid,c=[];function l(_){_.morphTargetInfluences&&c.push(_.name?_.name:_.uuid)}Tn[r.path]===Tn.weights?(l(t),t.isGroup&&t.children.forEach(l)):c.push(s);let m;switch(Tn[r.path]){case Tn.weights:m=Jr;break;case Tn.rotation:m=eo;break;case Tn.translation:case Tn.scale:m=Qr;break;default:switch(i.itemSize){case 1:m=Jr;break;case 2:case 3:default:m=Qr;break}break}const u=a.interpolation!==void 0?vm[a.interpolation]:xs,f=this._getArrayFromAccessor(i);for(let _=0,x=c.length;_<x;_++){const R=new m(c[_]+"."+Tn[r.path],e.array,f,u);a.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(R),o.push(R)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const i=za(e.constructor),a=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)a[r]=e[r]*i;e=a}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){const a=this instanceof eo?_m:Os;return new a(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Am(n,t,e){const i=t.attributes,a=new ja;if(i.POSITION!==void 0){const s=e.json.accessors[i.POSITION],c=s.min,l=s.max;if(c!==void 0&&l!==void 0){if(a.set(new ie(c[0],c[1],c[2]),new ie(l[0],l[1],l[2])),s.normalized){const m=za(ii[s.componentType]);a.min.multiplyScalar(m),a.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const s=new ie,c=new ie;for(let l=0,m=r.length;l<m;l++){const u=r[l];if(u.POSITION!==void 0){const f=e.json.accessors[u.POSITION],_=f.min,x=f.max;if(_!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(_[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(_[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(_[2]),Math.abs(x[2]))),f.normalized){const R=za(ii[f.componentType]);c.multiplyScalar(R)}s.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(s)}n.boundingBox=a;const o=new Rl;a.getCenter(o.center),o.radius=a.min.distanceTo(a.max)/2,n.boundingSphere=o}function No(n,t,e){const i=t.attributes,a=[];function r(o,s){return e.getDependency("accessor",o).then(function(c){n.setAttribute(s,c)})}for(const o in i){const s=Va[o]||o.toLowerCase();s in n.attributes||a.push(r(i[o],s))}if(t.indices!==void 0&&!n.index){const o=e.getDependency("accessor",t.indices).then(function(s){n.setIndex(s)});a.push(o)}return ht.workingColorSpace!==en&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),sn(n,t),Am(n,t,e),Promise.all(a).then(function(){return t.targets!==void 0?xm(n,t.targets,e):n})}class Rm extends qt{constructor(t=50,e=10,i=!0,a=!0,r=!0,o=!0,s=!0){const c=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,3,16,17,18,7,19,20,21,11,22,23,24,15,25,26,27,18,28,29,30,21,31,32,33,24,34,35,36,27,37,38,39,30,40,41,0,33,42,43,4,36,44,45,8,39,46,47,12,12,13,14,15,48,49,50,51,52,53,54,55,56,57,58,59,15,25,26,27,51,60,61,62,55,63,64,65,59,66,67,68,27,37,38,39,62,69,70,71,65,72,73,74,68,75,76,77,39,46,47,12,71,78,79,48,74,80,81,52,77,82,83,56,56,57,58,59,84,85,86,87,88,89,90,91,92,93,94,95,59,66,67,68,87,96,97,98,91,99,100,101,95,102,103,104,68,75,76,77,98,105,106,107,101,108,109,110,104,111,112,113,77,82,83,56,107,114,115,84,110,116,117,88,113,118,119,92,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,123,136,137,120,127,138,139,124,131,140,141,128,135,142,143,132,132,133,134,135,144,145,146,147,148,149,150,151,68,152,153,154,135,142,143,132,147,155,156,144,151,157,158,148,154,159,160,68,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,164,177,178,161,168,179,180,165,172,181,182,169,176,183,184,173,173,174,175,176,185,186,187,188,189,190,191,192,193,194,195,196,176,183,184,173,188,197,198,185,192,199,200,189,196,201,202,193,203,203,203,203,204,205,206,207,208,208,208,208,209,210,211,212,203,203,203,203,207,213,214,215,208,208,208,208,212,216,217,218,203,203,203,203,215,219,220,221,208,208,208,208,218,222,223,224,203,203,203,203,221,225,226,204,208,208,208,208,224,227,228,209,209,210,211,212,229,230,231,232,233,234,235,236,237,238,239,240,212,216,217,218,232,241,242,243,236,244,245,246,240,247,248,249,218,222,223,224,243,250,251,252,246,253,254,255,249,256,257,258,224,227,228,209,252,259,260,229,255,261,262,233,258,263,264,237,265,265,265,265,266,267,268,269,270,271,272,273,92,119,118,113,265,265,265,265,269,274,275,276,273,277,278,279,113,112,111,104,265,265,265,265,276,280,281,282,279,283,284,285,104,103,102,95,265,265,265,265,282,286,287,266,285,288,289,270,95,94,93,92],l=[1.4,0,2.4,1.4,-.784,2.4,.784,-1.4,2.4,0,-1.4,2.4,1.3375,0,2.53125,1.3375,-.749,2.53125,.749,-1.3375,2.53125,0,-1.3375,2.53125,1.4375,0,2.53125,1.4375,-.805,2.53125,.805,-1.4375,2.53125,0,-1.4375,2.53125,1.5,0,2.4,1.5,-.84,2.4,.84,-1.5,2.4,0,-1.5,2.4,-.784,-1.4,2.4,-1.4,-.784,2.4,-1.4,0,2.4,-.749,-1.3375,2.53125,-1.3375,-.749,2.53125,-1.3375,0,2.53125,-.805,-1.4375,2.53125,-1.4375,-.805,2.53125,-1.4375,0,2.53125,-.84,-1.5,2.4,-1.5,-.84,2.4,-1.5,0,2.4,-1.4,.784,2.4,-.784,1.4,2.4,0,1.4,2.4,-1.3375,.749,2.53125,-.749,1.3375,2.53125,0,1.3375,2.53125,-1.4375,.805,2.53125,-.805,1.4375,2.53125,0,1.4375,2.53125,-1.5,.84,2.4,-.84,1.5,2.4,0,1.5,2.4,.784,1.4,2.4,1.4,.784,2.4,.749,1.3375,2.53125,1.3375,.749,2.53125,.805,1.4375,2.53125,1.4375,.805,2.53125,.84,1.5,2.4,1.5,.84,2.4,1.75,0,1.875,1.75,-.98,1.875,.98,-1.75,1.875,0,-1.75,1.875,2,0,1.35,2,-1.12,1.35,1.12,-2,1.35,0,-2,1.35,2,0,.9,2,-1.12,.9,1.12,-2,.9,0,-2,.9,-.98,-1.75,1.875,-1.75,-.98,1.875,-1.75,0,1.875,-1.12,-2,1.35,-2,-1.12,1.35,-2,0,1.35,-1.12,-2,.9,-2,-1.12,.9,-2,0,.9,-1.75,.98,1.875,-.98,1.75,1.875,0,1.75,1.875,-2,1.12,1.35,-1.12,2,1.35,0,2,1.35,-2,1.12,.9,-1.12,2,.9,0,2,.9,.98,1.75,1.875,1.75,.98,1.875,1.12,2,1.35,2,1.12,1.35,1.12,2,.9,2,1.12,.9,2,0,.45,2,-1.12,.45,1.12,-2,.45,0,-2,.45,1.5,0,.225,1.5,-.84,.225,.84,-1.5,.225,0,-1.5,.225,1.5,0,.15,1.5,-.84,.15,.84,-1.5,.15,0,-1.5,.15,-1.12,-2,.45,-2,-1.12,.45,-2,0,.45,-.84,-1.5,.225,-1.5,-.84,.225,-1.5,0,.225,-.84,-1.5,.15,-1.5,-.84,.15,-1.5,0,.15,-2,1.12,.45,-1.12,2,.45,0,2,.45,-1.5,.84,.225,-.84,1.5,.225,0,1.5,.225,-1.5,.84,.15,-.84,1.5,.15,0,1.5,.15,1.12,2,.45,2,1.12,.45,.84,1.5,.225,1.5,.84,.225,.84,1.5,.15,1.5,.84,.15,-1.6,0,2.025,-1.6,-.3,2.025,-1.5,-.3,2.25,-1.5,0,2.25,-2.3,0,2.025,-2.3,-.3,2.025,-2.5,-.3,2.25,-2.5,0,2.25,-2.7,0,2.025,-2.7,-.3,2.025,-3,-.3,2.25,-3,0,2.25,-2.7,0,1.8,-2.7,-.3,1.8,-3,-.3,1.8,-3,0,1.8,-1.5,.3,2.25,-1.6,.3,2.025,-2.5,.3,2.25,-2.3,.3,2.025,-3,.3,2.25,-2.7,.3,2.025,-3,.3,1.8,-2.7,.3,1.8,-2.7,0,1.575,-2.7,-.3,1.575,-3,-.3,1.35,-3,0,1.35,-2.5,0,1.125,-2.5,-.3,1.125,-2.65,-.3,.9375,-2.65,0,.9375,-2,-.3,.9,-1.9,-.3,.6,-1.9,0,.6,-3,.3,1.35,-2.7,.3,1.575,-2.65,.3,.9375,-2.5,.3,1.125,-1.9,.3,.6,-2,.3,.9,1.7,0,1.425,1.7,-.66,1.425,1.7,-.66,.6,1.7,0,.6,2.6,0,1.425,2.6,-.66,1.425,3.1,-.66,.825,3.1,0,.825,2.3,0,2.1,2.3,-.25,2.1,2.4,-.25,2.025,2.4,0,2.025,2.7,0,2.4,2.7,-.25,2.4,3.3,-.25,2.4,3.3,0,2.4,1.7,.66,.6,1.7,.66,1.425,3.1,.66,.825,2.6,.66,1.425,2.4,.25,2.025,2.3,.25,2.1,3.3,.25,2.4,2.7,.25,2.4,2.8,0,2.475,2.8,-.25,2.475,3.525,-.25,2.49375,3.525,0,2.49375,2.9,0,2.475,2.9,-.15,2.475,3.45,-.15,2.5125,3.45,0,2.5125,2.8,0,2.4,2.8,-.15,2.4,3.2,-.15,2.4,3.2,0,2.4,3.525,.25,2.49375,2.8,.25,2.475,3.45,.15,2.5125,2.9,.15,2.475,3.2,.15,2.4,2.8,.15,2.4,0,0,3.15,.8,0,3.15,.8,-.45,3.15,.45,-.8,3.15,0,-.8,3.15,0,0,2.85,.2,0,2.7,.2,-.112,2.7,.112,-.2,2.7,0,-.2,2.7,-.45,-.8,3.15,-.8,-.45,3.15,-.8,0,3.15,-.112,-.2,2.7,-.2,-.112,2.7,-.2,0,2.7,-.8,.45,3.15,-.45,.8,3.15,0,.8,3.15,-.2,.112,2.7,-.112,.2,2.7,0,.2,2.7,.45,.8,3.15,.8,.45,3.15,.112,.2,2.7,.2,.112,2.7,.4,0,2.55,.4,-.224,2.55,.224,-.4,2.55,0,-.4,2.55,1.3,0,2.55,1.3,-.728,2.55,.728,-1.3,2.55,0,-1.3,2.55,1.3,0,2.4,1.3,-.728,2.4,.728,-1.3,2.4,0,-1.3,2.4,-.224,-.4,2.55,-.4,-.224,2.55,-.4,0,2.55,-.728,-1.3,2.55,-1.3,-.728,2.55,-1.3,0,2.55,-.728,-1.3,2.4,-1.3,-.728,2.4,-1.3,0,2.4,-.4,.224,2.55,-.224,.4,2.55,0,.4,2.55,-1.3,.728,2.55,-.728,1.3,2.55,0,1.3,2.55,-1.3,.728,2.4,-.728,1.3,2.4,0,1.3,2.4,.224,.4,2.55,.4,.224,2.55,.728,1.3,2.55,1.3,.728,2.55,.728,1.3,2.4,1.3,.728,2.4,0,0,0,1.425,0,0,1.425,.798,0,.798,1.425,0,0,1.425,0,1.5,0,.075,1.5,.84,.075,.84,1.5,.075,0,1.5,.075,-.798,1.425,0,-1.425,.798,0,-1.425,0,0,-.84,1.5,.075,-1.5,.84,.075,-1.5,0,.075,-1.425,-.798,0,-.798,-1.425,0,0,-1.425,0,-1.5,-.84,.075,-.84,-1.5,.075,0,-1.5,.075,.798,-1.425,0,1.425,-.798,0,.84,-1.5,.075,1.5,-.84,.075];super(),e=Math.max(2,Math.floor(e));const m=1.3,f=3.15*(s?1:m)/2,_=t/f;let x=i?(8*e-4)*e:0;x+=a?(16*e-4)*e:0,x+=r?40*e*e:0;const R=new Uint32Array(x*3);let p=i?4:0;p+=a?8:0,p+=r?20:0,p*=(e+1)*(e+1);const d=new Float32Array(p*3),w=new Float32Array(p*3),C=new Float32Array(p*2),S=new It;S.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);const M=[],E=[],y=[],g=[],b=[],D=[],A=[],O=[],V=[],U=new ie;let z,$,Y,J,j=0,ee=0;const te=new ie,Pe=new It,ne=new It,we=new Et,xe=new Et,me=new Et,F=new Et,K=new ie,Se=new ie,Ue=S.clone();Ue.transpose();const ge=(Ye,De,Fe)=>!(d[Ye*3]===d[De*3]&&d[Ye*3+1]===d[De*3+1]&&d[Ye*3+2]===d[De*3+2]||d[Ye*3]===d[Fe*3]&&d[Ye*3+1]===d[Fe*3+1]&&d[Ye*3+2]===d[Fe*3+2]||d[De*3]===d[Fe*3]&&d[De*3+1]===d[Fe*3+1]&&d[De*3+2]===d[Fe*3+2]);for(let Ye=0;Ye<3;Ye++)D[Ye]=new It;const Ge=r?0:20,lt=i?32:28,Ne=e+1;let Xe=0,$e=0,He=0,at=0,ft=0;for(let Ye=Ge;Ye<lt;Ye++)if(a||Ye<20||Ye>=28){for(let De=0;De<3;De++){for(let Fe=0;Fe<4;Fe++)for(let P=0;P<4;P++)M[P*4+Fe]=l[c[Ye*16+Fe*4+P]*3+De],o&&Ye>=20&&Ye<28&&De!==2&&(M[P*4+Fe]*=1.077),!s&&De===2&&(M[P*4+Fe]*=m);Pe.set(M[0],M[1],M[2],M[3],M[4],M[5],M[6],M[7],M[8],M[9],M[10],M[11],M[12],M[13],M[14],M[15]),ne.multiplyMatrices(Pe,S),D[De].multiplyMatrices(Ue,ne)}for(let De=0;De<=e;De++){const Fe=De/e;for(let P=0;P<=e;P++){const pt=P/e;for(J=4,$=Y=1;J--;)E[J]=$,y[J]=Y,$*=Fe,Y*=pt,J===3?(g[J]=b[J]=0,j=ee=1):(g[J]=j*(3-J),b[J]=ee*(3-J),j*=Fe,ee*=pt);we.fromArray(E),xe.fromArray(y),me.fromArray(g),F.fromArray(b);for(let Oe=0;Oe<3;Oe++)z=we.clone(),z.applyMatrix4(D[Oe]),A[Oe]=z.dot(xe),z=me.clone(),z.applyMatrix4(D[Oe]),O[Oe]=z.dot(xe),z=we.clone(),z.applyMatrix4(D[Oe]),V[Oe]=z.dot(F);K.fromArray(O),Se.fromArray(V),U.crossVectors(Se,K),U.normalize(),A[0]===0&&A[1]===0?te.set(0,A[2]>f?1:-1,0):te.set(U.x,U.z,-U.y),d[$e++]=_*A[0],d[$e++]=_*(A[2]-f),d[$e++]=-_*A[1],w[He++]=te.x,w[He++]=te.y,w[He++]=te.z,C[at++]=1-pt,C[at++]=1-Fe}}for(let De=0;De<e;De++)for(let Fe=0;Fe<e;Fe++){const P=Xe*Ne*Ne+De*Ne+Fe,pt=P+1,Oe=pt+Ne,T=P+Ne;ge(P,pt,Oe)&&(R[ft++]=P,R[ft++]=pt,R[ft++]=Oe),ge(P,Oe,T)&&(R[ft++]=P,R[ft++]=Oe,R[ft++]=T)}Xe++}this.setIndex(new jt(R,1)),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(w,3)),this.setAttribute("uv",new jt(C,2)),this.computeBoundingSphere()}}const Fs="/office/",Je={floor:"#4a3b33",floorEdge:"#151c30",wall:"#2b3b60",wallTop:"#3d5080",trim:"#1b2540",door:"#4b3a30",frame:"#c9c0b0",windowFrame:"#756b5e",rug:"#2a3a63",rugEdge:"#202d50",wood:"#b98a5e",metal:"#4f5a72",metalDark:"#2f374a",paper:"#f3eee2",cork:"#a8835b",seat:"#c2566a",lamp:"#ffd9a0"},Cm={receipts_dept:{url:"people/man-suit.glb",clips:"people/man-suit.glb",wear:["TieTexture"]},fine_print:{url:"people/woman-casual.glb",clips:"people/woman-dress.glb",wear:["Shirt"]},docket_watch:{url:"people/man-sweater.glb",clips:"people/man-suit.glb",wear:["Shirt"]},public_record:{url:"people/woman-dress.glb",clips:"people/woman-dress.glb",wear:["Dress"]},front_row:{url:"people/woman-jacket.glb",clips:"people/woman-dress.glb",wear:["Jacket"]}},At=(n,t)=>({url:`furniture/${n}.glb`,scale:qi,colors:t}),Bs={desk:At("desk",{wood:Je.wood,metal:Je.metal}),chair:At("chairDesk",{metalMedium:Je.metalDark}),laptop:At("laptop"),cabinet:At("kitchenCabinet",{wood:"#8a6a52",woodDark:"#6e5242",metal:"#9aa3b5"}),coffeeMachine:At("kitchenCoffeeMachine"),fridge:At("kitchenFridgeSmall"),coatRack:At("coatRackStanding",{wood:"#7a5a44"}),bookcase:At("bookcaseOpen",{wood:"#8a6a52"}),books:At("books"),bin:At("trashcan",{metal:"#6c7790",metalDark:"#3a4357"}),sideTable:At("sideTable",{wood:"#8a6a52"}),lounge:At("loungeChair",{carpet:Je.seat,wood:"#8a6a52"}),floorLamp:At("lampRoundFloor",{metal:"#3a4357"}),pottedPlant:At("pottedPlant"),smallPlant:At("plantSmall2"),rug:At("rugRectangle",{carpet:Je.rug,carpetDarker:Je.rugEdge}),coffeeTable:At("tableCoffee",{wood:"#8a6a52"}),deskLamp:{url:"extra/light-desk.glb",height:.5},printer:{url:"extra/printer.glb",height:.36},plantLeafy:{url:"extra/houseplant-leafy.glb",height:1.25},plantSnake:{url:"extra/houseplant-snake.glb",height:1.05},plantCactus:{url:"extra/houseplant-cactus.glb",height:.55},boxes:{url:"extra/cardboard-boxes.glb",height:.95}},Gs=new Yp,Wa=new Map;function tr(n){const t=JSON.stringify(n);let e=Wa.get(t);return e||(e=Gs.loadAsync(Fs+n.url).then(i=>{const a=i.scene;a.rotation.y=n.front??0,a.updateMatrixWorld(!0);const r=new ja().setFromObject(a),o=r.getSize(new ie),s=n.height?n.height/Math.max(o.y,1e-6):n.scale??1,c=r.getCenter(new ie);a.position.set(-c.x,-r.min.y,-c.z);const l=new nt;return l.add(a),l.scale.setScalar(s),a.traverse(m=>{const u=m;if(!u.isMesh)return;u.castShadow=n.shadow!==!1,u.receiveShadow=!0;const f=(Array.isArray(u.material)?u.material:[u.material]).map(_=>{const x=_;if(!x.isMeshStandardMaterial)return _;const R=n.colors?.[x.name];return R&&x.color.set(R),x.metalness=Math.min(x.metalness,.1),x.roughness=Math.max(x.roughness,.75),x});u.material=Array.isArray(u.material)?f:f[0]}),l}).catch(i=>(console.warn(`office: couldn't load ${n.url}`,i),new nt)),Wa.set(t,e)),e}function ym(n){const t={desk:["desk","chair","laptop","deskLamp"],coffee:["cabinet","coffeeMachine","fridge"],tray:["sideTable"],bin:["bin"],seat:["lounge","floorLamp"],board:[],bookcase:["bookcase","books"],printer:["sideTable","printer"],coatRack:["coatRack"],boxes:["boxes"],coffeeTable:["coffeeTable"],plantLeafy:["plantLeafy"],plantSnake:["plantSnake"],plantCactus:["plantCactus"],pottedPlant:["pottedPlant"],smallPlant:["smallPlant"]};return[...new Set(n.items.flatMap(e=>t[e.kind]??[]))]}async function Pm(n){await Promise.all(ym(n).map(t=>tr(Bs[t])))}async function Oo(n){const t={url:n.url,scale:n.scale,front:n.front,colors:n.colors},e=(await tr(t)).clone(!0);if(new ja().setFromObject(e).isEmpty())throw Wa.delete(JSON.stringify(t)),new Error(`Could not load ${n.label.toLowerCase()}. Delete it and add it again to retry.`);return e}async function xt(n,t={}){const e=(await tr(Bs[n])).clone(!0);return t.colors&&e.traverse(i=>{const a=i;if(!a.isMesh)return;const r=a.material,o=r?.name?t.colors[r.name]:void 0;o&&(a.material=r.clone(),a.material.color.set(o))}),e}function Lm(){const n=new Map,t=a=>{let r=n.get(a);return r||(r=Gs.loadAsync(Fs+a),n.set(a,r)),r},e=new Ie("#7c8494"),i=Object.entries(Cm);return Promise.all(i.map(([,a])=>Promise.all([t(a.url),t(a.clips)]))).then(a=>({clips:Object.fromEntries(i.map(([r],o)=>[r,a[o][1].animations])),models:Object.fromEntries(i.map(([r,o],s)=>{const c=a[s][0].scene;return c.traverse(l=>{const m=l;if(m.isMesh)for(const u of Array.isArray(m.material)?m.material:[m.material])u.metalness=0,u.roughness=.85,o.wear.includes(u.name)&&u.color.set(Ts[r]).lerp(e,.22)}),[r,c]}))}))}const Fo=new Map;function Mt(n,t={}){const e=n+JSON.stringify(t);let i=Fo.get(e);return i||(i=new Ot({color:n,roughness:.85,metalness:0,...t}),Fo.set(e,i)),i}function zt(n,t,e=!0){const i=new Le(n,t);return i.castShadow=e,i.receiveShadow=!0,i}function gt(n,t,e,i,a=!0){return zt(new Vt(n,t,e),typeof i=="string"?Mt(i):i,a)}const Ca=new Map;function Bo(n,t=.7){const e=new nt,i=mn(768,960,()=>{}),a=mn(768,960,()=>{});i.userData.glowTexture=a,e.userData.clockTexture=i,e.position.y=n,e.scale.set(t/.7,t/.7,1);const r=.684,o=.844,s=.045,c=new Cl;c.moveTo(-r/2+s,-o/2),c.lineTo(r/2-s,-o/2),c.quadraticCurveTo(r/2,-o/2,r/2,-o/2+s),c.lineTo(r/2,o/2-s),c.quadraticCurveTo(r/2,o/2,r/2-s,o/2),c.lineTo(-r/2+s,o/2),c.quadraticCurveTo(-r/2,o/2,-r/2,o/2-s),c.lineTo(-r/2,-o/2+s),c.quadraticCurveTo(-r/2,-o/2,-r/2+s,-o/2);const l=zt(new yl(c,{depth:.024,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:3,steps:1}),Mt("#333b43",{metalness:.6,roughness:.34}));l.position.set(0,0,-.012),e.add(l);const m=new Ot({map:i,emissiveMap:a,emissive:"#ffffff",emissiveIntensity:.65,roughness:.65,metalness:.12}),u=zt(new Dt(.66,.82),m,!1);u.position.set(0,0,.0205),e.add(u);const f=zt(new Qa(.281,.006,8,96),Mt("#68717a",{metalness:.75,roughness:.3}),!1);return f.position.set(0,.115,.022),e.add(f),Hs(i,Date.now(),er),e}function Hs(n,t,e){const i=`${Math.floor(t/1e3)}:${e}`;if(n.userData.key===i)return;n.userData.key=i;const a=n.image.getContext("2d"),r=n.userData.glowTexture,o=r.image.getContext("2d"),s=bs(t,e),c=e.split("/").at(-1).replace(/_/g," ");for(const u of[a,o])u.save(),u.scale(1.5,1.5),u.fillStyle="#000000",u.fillRect(0,0,512,640);const l=a.createLinearGradient(0,0,512,640);l.addColorStop(0,"#232c34"),l.addColorStop(1,"#10161c"),a.fillStyle=l,a.fillRect(0,0,512,640);const m=a.createRadialGradient(206,150,10,256,230,214);m.addColorStop(0,"#263239"),m.addColorStop(1,"#10191e"),a.fillStyle=m,a.beginPath(),a.arc(256,230,214,0,Math.PI*2),a.fill(),a.strokeStyle="#070c10",a.lineWidth=8,a.stroke();for(const u of[a,o]){u.save(),u.translate(256,230),u.strokeStyle="#93b5a9";for(let _=0;_<60;_++){const x=_/60*Math.PI*2,R=_%5===0,p=R?182:195;u.lineWidth=R?5:1.6,u.beginPath(),u.moveTo(Math.sin(x)*p,-Math.cos(x)*p),u.lineTo(Math.sin(x)*203,-Math.cos(x)*203),u.stroke()}u.textAlign="center",u.textBaseline="middle",u.fillStyle="#bbd6ca",u.font="500 31px sans-serif";for(const _ of[12,3,6,9]){const x=_/12*Math.PI*2;u.fillText(String(_),Math.sin(x)*157,-Math.cos(x)*157)}const f=(_,x,R,p)=>{u.strokeStyle=p,u.lineWidth=R,u.lineCap="round",u.beginPath(),u.moveTo(-Math.sin(_)*18,Math.cos(_)*18),u.lineTo(Math.sin(_)*x,-Math.cos(_)*x),u.stroke()};u===a&&(u.save(),u.translate(3,5),f((s.hour%12+s.minute/60)/12*Math.PI*2,111,17,"#03080c"),f((s.minute+s.second/60)/60*Math.PI*2,161,11,"#03080c"),u.restore()),f((s.hour%12+s.minute/60)/12*Math.PI*2,111,12,"#d5e7dc"),f((s.minute+s.second/60)/60*Math.PI*2,161,7,"#d5e7dc"),f(s.second/60*Math.PI*2,177,2,"#d9a46d"),u.fillStyle="#d0b18a",u.beginPath(),u.arc(0,0,7,0,Math.PI*2),u.fill(),u.restore()}a.fillStyle="#090f13",a.beginPath(),a.roundRect(65,467,382,145,14),a.fill(),a.strokeStyle="#38484c",a.lineWidth=2,a.stroke();for(const u of[a,o])u.textAlign="center",u.textBaseline="alphabetic",u.fillStyle="#c0e9d3",u.font="500 70px monospace",u===o&&(u.shadowColor="#89d5b3",u.shadowBlur=6),u.fillText(s.text,256,529),u.shadowBlur=0,u.fillStyle="#b5d4c3",u.font="500 42px sans-serif",c!==s.zone&&u.fillText(c,256,578,344),u.fillStyle="#718f83",u.font="20px sans-serif",u.fillText(s.zone,256,c===s.zone?586:604,344),u.restore();n.needsUpdate=r.needsUpdate=!0}async function Go(n){const t=n.art,e=`${t.url}:${t.resolution}`;let i=Ca.get(e);i||(i=new ms().loadAsync(t.url).then(c=>{const l=c.image,m=Math.min(1,t.resolution/Math.max(l.width,l.height)),u=document.createElement("canvas");u.width=Math.max(1,Math.round(l.width*m)),u.height=Math.max(1,Math.round(l.height*m)),u.getContext("2d").drawImage(l,0,0,u.width,u.height),c.dispose();const f=new Ja(u);return f.colorSpace=dn,f.anisotropy=4,f}).catch(c=>{throw Ca.delete(e),c}),Ca.set(e,i));const a=await i,r=new nt,o=gt(n.foot[0],t.height,.04,{oak:"#5c4532",black:"#22252b",light:"#b6aa95"}[t.frame]);o.position.y=n.y,r.add(o);const s=new Le(new Dt(n.foot[0]*.94,t.height*.94),new wt({map:a,toneMapped:!1}));return s.position.set(0,n.y,.021),r.add(s),r}function Dm(){const n=new nt,t=gt(.34,.012,.24,"#2f5d46");t.position.y=.006,n.add(t);for(const e of[-1,1]){const i=gt(.155,.016,.22,Je.paper);i.position.set(e*.082,.016,0),i.rotation.z=e*-.04,n.add(i);for(let a=0;a<6;a++){const r=gt(.12,.001,.003,"#9bb3a4",!1);r.position.set(e*.082,.0255+(e>0?.003:-.003),-.08+a*.03),n.add(r)}}return n}function Ji(n="#f1ece3",t="#e8742c"){const e=new nt,i=zt(new Fn(.045,.04,.1,10),Mt(n));if(i.position.y=.05,e.add(i),t){const o=zt(new Fn(.0455,.0445,.022,10),Mt(t),!1);o.position.y=.075,e.add(o)}const a=zt(new Pl(.038,10),Mt("#3b2416"),!1);a.rotation.x=-Math.PI/2,a.position.y=.092,e.add(a);const r=zt(new Qa(.025,.007,5,10,Math.PI),Mt(n),!1);return r.position.set(.045,.05,0),r.rotation.z=-Math.PI/2,e.add(r),e}function Im(n){const t=new nt,e=gt(.07,.3,.24,n);e.position.y=.15,t.add(e);const i=gt(.072,.09,.12,Je.paper,!1);i.position.set(0,.2,0),t.add(i);const a=zt(new Qa(.02,.005,5,10),Mt("#c9ced8",{metalness:.4,roughness:.4}),!1);return a.position.set(0,.07,.122),t.add(a),t}function Um(){const n=new nt,t=zt(new Rm(.06,4),Mt("#e9eef5"));t.position.y=.06,n.add(t);const e=Ji("#e9eef5","#4a74c9");return e.scale.setScalar(.7),e.position.set(.14,0,.06),n.add(e),n}function Nm(n){const t=new nt,e=a=>{const r=new nt,o=zt(new Fn(.033,.033,a?.07:.125,10),Mt(n));o.position.y=a?.035:.0625,r.add(o);const s=zt(new Fn(.0335,.0335,.03,10),Mt("#1b1f2a"),!1);s.position.y=a?.04:.07,r.add(s);const c=zt(new Fn(.03,.033,.008,10),Mt("#c7ccd6",{metalness:.5,roughness:.4}),!1);return c.position.y=a?.074:.129,r.add(c),a&&(r.rotation.z=Math.PI/2.3,r.scale.set(1,1,.7)),r};t.add(e(!1));const i=e(!0);return i.position.set(.12,0,.05),t.add(i),t}function ks(){return gt(.17,.004,.11,"#f4ead2",!1)}function Vs(){return gt(.21,.004,.29,Je.paper,!1)}function mn(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t;const a=i.getContext("2d");e(a);const r=new Ja(i);return r.colorSpace=dn,r.anisotropy=4,r}function Om(n,t){const e=n.image;t(e.getContext("2d")),n.needsUpdate=!0}function Fm(n,t,e=1.22,i=.27){const a=mn(512,Math.round(512*i/e),r=>{const{width:o,height:s}=r.canvas;r.fillStyle="#f4efe4",r.fillRect(0,0,o,s),r.fillStyle=t,r.fillRect(0,0,Math.round(s*.2),s),r.fillStyle="#1d2333",r.textAlign="center",r.textBaseline="middle",r.letterSpacing=`${Math.round(s*.05)}px`;const c=o-s*.2-s*.5;let l=s*.5;r.font=`800 ${Math.round(l)}px Inter, system-ui, sans-serif`;const m=r.measureText(n.toUpperCase()).width;m>c&&(l*=c/m,r.font=`800 ${Math.round(l)}px Inter, system-ui, sans-serif`),r.fillText(n.toUpperCase(),o/2+s*.1,s/2+s*.03)});return new Le(new Dt(e,i),new Ot({map:a,roughness:.8}))}function Ho(n,t=.5,e=.14,i={}){const a=mn(512,Math.round(512*e/t),o=>{const{width:s,height:c}=o.canvas;o.fillStyle=i.bg??"#141b2e",o.fillRect(0,0,s,c),o.fillStyle=i.fg??"#e9e4d8",o.font=`600 ${Math.round(c*.5)}px Inter, system-ui, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(n,s/2,c/2+c*.03)});return new Le(new Dt(t,e),new Ot({map:a,roughness:.9}))}const et=1280,yt=343,Un=227,Pt=67,Bm=143,Kn=11.5,Bt=15.5,ya=15.24,yi=Math.PI/180,pn=(n,t)=>new Ze(Math.sin(n*yi)*t,-Math.cos(n*yi)*t),Qt=pn(-14,430),Gm=(()=>{let n=600,t=6e3;for(let e=0;e<50;e++){const i=(n+t)/2;pn(16,i).distanceTo(Qt)<et?n=i:t=i}return pn(16,n)})(),Ht=Gm.clone().sub(Qt).normalize(),Bn=new Ze(-Ht.y,Ht.x),zs=(n,t)=>(n-Qt.x)*Ht.x+(t-Qt.y)*Ht.y,Ws=(n,t)=>(n-Qt.x)*Bn.x+(t-Qt.y)*Bn.y,Xt=(n,t)=>new Ze(Qt.x+n*Ht.x+t*Bn.x,Qt.y+n*Ht.y+t*Bn.y),ai=(n,t,e)=>{const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function ea(n,t,e,i){const a=ai(60,260,Math.abs(t)),o=(-15-.55*Math.max(0,t-40)+12*Math.sin(t/90)-.25*Math.max(0,-t-200)-n)/(330-180*a);if(o<=0)return Math.max(-25,o*220);const s=o<1?o**.6:1+(o-1)*.45,c=(7*Math.sin(e/41)*Math.sin(i/57)+4*Math.sin(e/17+i/23))*Math.min(1,o*3),l=120*Math.exp(-((Math.hypot(e,i)/170)**2));return(28+18*a)*s+(c+l)*Math.min(1,o*3)}function bn(n,t,e,i){const a=et+25+30*Math.sin(t/160)+.5*Math.max(0,t-300),r=2250+120*Math.sin(n/400),o=Math.min((n-a)/250,(r-t)/250);if(o<=0)return Math.max(-25,o*200);const s=150*Math.exp(-(((n-et-3300)/900)**2)-((t+1700)/1e3)**2)+18*Math.sin(e/230)*Math.sin(i/310);return 62*Math.min(1,o**.5)+s*Math.min(1,o)}const Pa=ea(zs(0,0),Ws(0,0),0,0)+6;function ra(n,t,e,i=!0){const a=document.createElement("canvas");a.width=n,a.height=t,e(a.getContext("2d"));const r=new Ja(a);return i&&(r.colorSpace=dn),r}const Hm=()=>ra(64,64,n=>{const t=n.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=t,n.fillRect(0,0,64,64)}),km=()=>ra(128,64,n=>{n.fillStyle="#6e1f17",n.fillRect(0,0,128,64),n.strokeStyle="#c23a2b",n.lineWidth=7,n.strokeRect(0,4,128,56),n.beginPath(),n.moveTo(0,4),n.lineTo(128,60),n.moveTo(128,4),n.lineTo(0,60),n.moveTo(64,4),n.lineTo(64,60),n.stroke()}),Vm=()=>ra(64,128,n=>{n.fillStyle="#000",n.fillRect(0,0,64,128);let t=3;const e=()=>(t=t*16807%2147483647)/2147483647;for(let i=4;i<124;i+=6)for(let a=4;a<60;a+=6)e()<.5||(n.fillStyle=e()<.8?"#ffd9a0":"#cfe2ff",n.fillRect(a,i,3,3))}),zm=()=>{const t=new Uint8Array(65536),e=(a,r)=>Math.sin(a/128*Math.PI*2*3+Math.sin(r/128*Math.PI*2*2)*1.5)+.6*Math.sin(r/128*Math.PI*2*5+a/128*Math.PI*2*2)+.3*Math.sin((a+r)/128*Math.PI*2*7);for(let a=0;a<128;a++)for(let r=0;r<128;r++){const o=e(r+1,a)-e(r-1,a),s=e(r,a+1)-e(r,a-1),c=new ie(-o,-s,2).normalize(),l=(a*128+r)*4;t[l]=(c.x*.5+.5)*255,t[l+1]=(c.y*.5+.5)*255,t[l+2]=(c.z*.5+.5)*255,t[l+3]=255}const i=new Za(t,128,128);return i.wrapS=i.wrapT=Gn,i.needsUpdate=!0,i},Yt={s0:-1700,s1:et+2600,t0:-6e3,t1:2600},Wm=()=>{const e=new Uint8Array(524288);for(let a=1;a<511;a++)for(let r=1;r<255;r++){const o=Yt.s0+(r+.5)/256*(Yt.s1-Yt.s0),s=Yt.t0+(a+.5)/512*(Yt.t1-Yt.t0),c=Xt(o,s),l=o>-1600&&s>-2600&&s<1600,m=Math.max(l?ea(o,s,c.x,c.y):-25,bn(o,s,c.x,c.y)),u=(a*256+r)*4;e[u]=m<1.5?255*ai(-7,-.5,m):0,e[u+1]=255*ai(-24,-4,m),e[u+3]=255}const i=new Za(e,256,512);return i.magFilter=i.minFilter=Rt,i.needsUpdate=!0,i},Lt=(n,t={})=>new Ot({color:n,roughness:.85,flatShading:!0,...t});function Gt(n,t,e,i,a,r,o){const s=new Le(new Vt(n,t,e),i);return s.position.set(a,r,o),s}function ko(n,t,e,i,a,r,o){const s=Math.ceil((t-n)/a),c=Math.ceil((i-e)/a),l=new Dt(1,1,s,c),m=l.attributes.position;for(let p=0;p<m.count;p++){const d=n+(m.getX(p)+.5)*(t-n),w=e+(m.getY(p)+.5)*(i-e),C=Xt(d,w);m.setXYZ(p,C.x,r(d,w,C.x,C.y),C.y)}const u=l.toNonIndexed();l.dispose(),u.computeVertexNormals();const f=u.attributes.position,_=u.attributes.normal,x=new Float32Array(f.count*3);for(let p=0;p<f.count;p+=3){const d=(f.getX(p)+f.getX(p+1)+f.getX(p+2))/3,w=(f.getY(p)+f.getY(p+1)+f.getY(p+2))/3,C=(f.getZ(p)+f.getZ(p+1)+f.getZ(p+2))/3,S=Math.abs(_.getY(p)),M=.5+.5*Math.sin(d/23+Math.sin(C/31)*2)*Math.sin(C/19+d/47),E=o(w,1-S,zs(d,C),Ws(d,C),M);for(let y=0;y<3;y++)x.set([E.r,E.g,E.b],(p+y)*3)}u.setAttribute("color",new jt(x,3));const R=f.array;for(let p=0;p<f.count;p+=3)for(let d=0;d<3;d++){const w=R[(p+1)*3+d];R[(p+1)*3+d]=R[(p+2)*3+d],R[(p+2)*3+d]=w}return u.computeVertexNormals(),new Le(u,new Ot({vertexColors:!0,flatShading:!0,roughness:1}))}const mt=n=>new Ie(n),Vo=["#d9dde0","#c3ccd3","#e8e4dc","#a9b6c0","#cfd3d1"],zo=["#f2efe8","#ece3cf","#efe2b8","#c9d6e0","#e9cfc6","#d8d6cf","#f5f2ea"],Xm=mt("#ff6a30"),Km=mt("#1b6cd2"),Ym=mt("#7cb9ec"),qm=mt("#0f8aa3"),Yn=new Ie,qn=new Ie,rn=new Ie,zi=new ie,_i=new It,La=new kn,Wi=new ie;class ta{constructor(t){this.scene=new Ms,this.camera=new Cn,this.sunLight=new Ii("#ffffff",3),this.moonLight=new Ii("#9fb2e6",0),this.hemi=new Es("#bcd4f0","#5a4a3a",1),this.seaTime={value:0},this.seaSky={value:new Ie},this.lightsUp=[],this.paint=[],this.bridge=new nt,this.cars=[],this.lights=[],this.boat=new nt,this.screen=new Ze,this.corner=new ie,this.css=new Ze,this.glass=t,this.target=new Zt(512,Math.round(512*t.h/t.w),{samples:4,type:un,depthBuffer:!0}),this.texture=this.target.texture,this.camera.position.set(0,Pa,0),this.camera.rotation.set(-.035,0,0,"YXZ"),this.scene.fog=new Ll("#c9d6e2",2500,26e3),this.scene.add(this.sunLight,this.moonLight,this.hemi),this.sky=new Jt({side:Ft,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ie},horizon:{value:new Ie},sunDir:{value:new ie(0,1,0)},sunColor:{value:new Ie},glow:{value:0}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunColor; uniform float glow; varying vec3 vDir;
        void main() {
          vec3 d = normalize(vDir);
          vec3 c = mix(horizon, top, pow(clamp(d.y, 0.0, 1.0), 0.5));
          float s = max(dot(d, sunDir), 0.0);
          c += sunColor * (pow(s, 6.0) * 0.45 * glow + pow(s, 900.0) * 1.5 * step(0.0, sunDir.y));
          gl_FragColor = vec4(c, 1.0);
        }`});const e=new Le(new Ba(3e4,32,16),this.sky);e.position.copy(this.camera.position),e.renderOrder=-2,this.scene.add(e);let i=9;const a=()=>(i=i*16807%2147483647)/2147483647,r=[],o=[],s=[];for(let _=0;_<1500;_++){const x=_<1100,R=(x?-80+a()*160:a()*360)*yi,p=(x?.5+a()*26:6+a()*80)*yi;r.push(Math.cos(p)*Math.sin(R)*28e3,Pa+Math.sin(p)*28e3,-Math.cos(p)*Math.cos(R)*28e3);const d=a();o.push(d<.04?3.6:d<.2?2.4:1.3+a()*.7),s.push(a())}const c=new qt;c.setAttribute("position",new on(r,3)),c.setAttribute("size",new on(o,1)),c.setAttribute("phase",new on(s,1)),this.stars=new Jt({transparent:!0,depthWrite:!1,fog:!1,blending:li,uniforms:{time:{value:0},scale:{value:1},opacity:{value:0}},vertexShader:`attribute float size; attribute float phase; uniform float time; uniform float scale; varying float vGlow;
        void main() {
          float speed = 0.35 + fract(phase * 13.7) * 1.2;
          vGlow = 0.3 + 0.7 * (0.5 + 0.5 * sin(time * speed + phase * 6.2832));
          vGlow *= smoothstep(-0.01, 0.07, normalize(position - cameraPosition).y); // dimmer right on the horizon
          gl_PointSize = size * scale;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`uniform float opacity; varying float vGlow;
        void main() {
          float a = smoothstep(0.5, 0.0, length(gl_PointCoord - 0.5));
          gl_FragColor = vec4(vec3(0.95, 0.97, 1.0) * a * vGlow * opacity, 1.0);
        }`});const l=new Fa(c,this.stars);l.renderOrder=-1,l.frustumCulled=!1,this.scene.add(l),this.moon=new Dl(new Il({map:ra(128,128,_=>{const x=_.createRadialGradient(64,64,0,64,64,64);x.addColorStop(0,"rgba(255,250,235,1)"),x.addColorStop(.18,"rgba(255,250,235,1)"),x.addColorStop(.22,"rgba(255,240,210,0.35)"),x.addColorStop(1,"rgba(255,240,210,0)"),_.fillStyle=x,_.fillRect(0,0,128,128)}),transparent:!0,opacity:0,fog:!1,depthWrite:!1}));const m=pn(-38,27e3);this.moon.position.set(m.x,Pa+27e3*Math.tan(24*yi),m.y),this.moon.scale.setScalar(2600),this.scene.add(this.moon),this.ripples=zm(),this.ripples.repeat.set(900,900),this.water=new Ot({color:"#3b6b8a",roughness:.22,metalness:0,normalMap:this.ripples,normalScale:new Ze(.24,.24),emissive:"#000000"});const u=new Le(new Dt(9e4,9e4),this.water),f=Wm();this.water.onBeforeCompile=_=>{Object.assign(_.uniforms,{seaTime:this.seaTime,seaSky:this.seaSky,shoreMap:{value:f},shoreO:{value:Qt},shoreB:{value:Ht},shoreT:{value:Bn},shoreBox:{value:new Et(Yt.s0,Yt.t0,1/(Yt.s1-Yt.s0),1/(Yt.t1-Yt.t0))}}),_.vertexShader=`varying vec2 vSea;
`+_.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
  vSea = (modelMatrix * vec4(transformed, 1.0)).xz;`),_.fragmentShader=`uniform float seaTime; uniform vec3 seaSky; uniform sampler2D shoreMap; uniform vec2 shoreO, shoreB, shoreT; uniform vec4 shoreBox; varying vec2 vSea;
`+_.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
          float wind = texture2D(normalMap, vNormalMapUv * 0.031 + vec2(0.0021, 0.0013) * seaTime).x + texture2D(normalMap, vNormalMapUv * 0.017 - vec2(0.0012, 0.0019) * seaTime).y;
          diffuseColor.rgb *= 1.0 + 0.4 * (wind - 1.0);
          vec2 st = vec2(dot(vSea - shoreO, shoreB), dot(vSea - shoreO, shoreT));
          vec4 shore = texture2D(shoreMap, (st - shoreBox.xy) * shoreBox.zw);
          diffuseColor.rgb *= mix(vec3(1.0), vec3(1.3, 1.5, 1.3), shore.g);
          float surge = 0.5 + 0.5 * sin(seaTime * 0.9 - shore.r * 9.0 + wind * 3.0);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.88, 0.92, 0.94), shore.r * smoothstep(0.3, 0.8, shore.r * 0.7 + surge * 0.5));`).replace("vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;",`vec2 crossUv = mat2(0.8, -0.6, 0.6, 0.8) * vNormalMapUv * 0.55 + vec2(-0.017, 0.011) * seaTime;
          vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz + texture2D( normalMap, crossUv ).xyz - 1.0;`).replace("#include <opaque_fragment>",`float fres = 0.7 * pow(1.0 - saturate(dot(normalize(mix(nonPerturbedNormal, normal, 0.35)), normalize(vViewPosition))), 5.0);
          outgoingLight = outgoingLight * (1.0 - 0.6 * fres) + seaSky * fres;
          #include <opaque_fragment>`)},u.rotation.x=-Math.PI/2,this.scene.add(u),this.buildLand(a),this.buildBridge(),this.buildTraffic(a),this.buildBoat()}buildLand(t){const e=[mt("#b59b5d"),mt("#a68d52"),mt("#c2a866")],i=mt("#5b6b3d"),a=mt("#7a6c5d"),r=mt("#5f5448"),o=mt("#cdbb93"),s=ko(-1600,80,-2600,1600,20,ea,(ne,we,xe,me,F)=>ne<2.5?ne<-1?r:o:we>.55?F>.5?a:r:F>.72?i:e[Math.floor(F*2.99)]);this.scene.add(s);const c=[mt("#3d5a3a"),mt("#43613e"),mt("#385536")],l=[mt("#8e9184"),mt("#878c7c"),mt("#9b9a8c")],m=mt("#5d7048"),u=ko(et-80,et+6200,-7200,2600,60,bn,(ne,we,xe,me,F)=>ne<2.5?ne<-1?r:o:we>.6?a:xe<et+1500&&me>-1100&&me<700?c[Math.floor(F*2.99)]:F>.86?m:l[Math.floor(F*2.99)]);this.scene.add(u),this.windows=Lt("#ffffff",{emissive:"#ffffff",emissiveMap:Vm(),emissiveIntensity:0,flatShading:!1});const f=[],_=et+3800,x=-4050;for(let ne=0;ne<170;ne++){const we=Math.sqrt(t())*650,xe=t()*Math.PI*2,me=_+Math.cos(xe)*we,F=x+Math.sin(xe)*we,K=Xt(me,F);f.push([K.x,K.y,bn(me,F,K.x,K.y),22+t()*26,40+230*Math.exp(-((we/330)**2))*(.4+.6*t())])}const R=f.length;for(let ne=0;ne<3200;ne++){const we=et+300+t()*5600,xe=-6800+t()*8800;if(we<et+1500&&xe>-1100&&xe<700)continue;const me=Xt(we,xe),F=bn(we,xe,me.x,me.y);F<3||f.push([me.x,me.y,F,50+t()*40,9+t()*7])}this.homes=this.windows.clone();const p=new Vt(1,1,1),d=new Ti(p,this.windows,R),w=new Ti(p,this.homes,f.length-R),C=Math.atan2(-Ht.y,Ht.x);f.forEach(([ne,we,xe,me,F],K)=>{_i.compose(zi.set(ne,xe+F/2-2,we),La.setFromAxisAngle(Wi.set(0,1,0),C),new ie(me,F,me*(.7+.6*(K*37%10)/10))),K<R?(d.setMatrixAt(K,_i),d.setColorAt(K,rn.set(Vo[K%Vo.length]))):(w.setMatrixAt(K-R,_i),w.setColorAt(K-R,rn.set(zo[K*7%zo.length])))}),this.scene.add(d,w);const S=Xt(_-350,x+150),M=new Le(new ga(30,260,4,1),this.windows);M.position.set(S.x,bn(_-350,x+150,S.x,S.y)+128,S.y),M.rotation.y=C+Math.PI/4;const E=Xt(_+250,x-200),y=new Le(new Fn(20,27,326,10,1),this.windows);y.position.set(E.x,bn(_+250,x-200,E.x,E.y)+161,E.y);const g=new Le(new Ba(20,10,5,0,Math.PI*2,0,Math.PI/2),this.windows);g.position.y=163,y.add(g),this.scene.add(M,y);const b=et+5800,D=-900,A=Xt(b,D),O=bn(b,D,A.x,A.y),V=Lt("#c8402f",{flatShading:!1}),U=Lt("#e8e6e0",{flatShading:!1});for(let ne=0;ne<3;ne++){const we=ne/3*Math.PI*2,xe=new ie(Math.cos(we)*45,0,Math.sin(we)*45);for(let me=0;me<6;me++){const F=me/6*298,K=(me+1)/6*298,Se=1-me/6*.8,Ue=1-(me+1)/6*.8,ge=xe.clone().multiplyScalar(Se).setY(F),Ge=xe.clone().multiplyScalar(Ue).setY(K),lt=new Le(new Fn(2.5,3,ge.distanceTo(Ge),4,1),me%2?U:V);lt.position.copy(ge).lerp(Ge,.5).add(zi.set(A.x,O,A.y)),lt.quaternion.setFromUnitVectors(Wi.set(0,1,0),Ge.clone().sub(ge).normalize()),this.scene.add(lt)}}const z=[];for(let ne=0;ne<1400;ne++){const we=et+200+t()*5800,xe=-6800+t()*8800;if(we<et+1500&&xe>-1100&&xe<700&&t()<.8)continue;const me=Xt(we,xe),F=bn(we,xe,me.x,me.y);F>2&&z.push(me.x,F+4,me.y)}for(let ne=0;ne<120;ne++){const we=-1500+t()*1300,xe=-2500+t()*1500,me=Xt(we,xe),F=ea(we,xe,me.x,me.y);F>2&&z.push(me.x,F+3,me.y)}this.lights.push(this.points(z,"#ffcf8a",10));const $=[],Y=ne=>{const we=ai(-110,-95,ne)*ai(42,25,ne),xe=17e3+2500*Math.sin(ne*.07),me=(330+120*Math.sin(ne*.21)+60*Math.sin(ne*.53+1))*we,F=pn(ne,xe);return[F.x,me,F.y]};for(let ne=-110;ne<40;ne+=2.5){const we=Y(ne),xe=Y(ne+2.5),me=pn(ne,17e3+2500*Math.sin(ne*.07)),F=pn(ne+2.5,17e3+2500*Math.sin((ne+2.5)*.07));$.push(me.x,-20,me.y,we[0],we[1],we[2],F.x,-20,F.y,F.x,-20,F.y,we[0],we[1],we[2],xe[0],xe[1],xe[2])}const J=new qt;J.setAttribute("position",new on($,3)),J.computeVertexNormals(),this.scene.add(new Le(J,Lt("#6f7f6a",{side:kt})));const j=pn(-50,5600),ee=pn(-31,5300),te=new Le(new ga(1100,240,9,1),Lt("#5f6e45"));te.position.set(j.x,110,j.y),te.scale.set(1,1,.7);const Pe=new Le(new ga(170,40,7,1),Lt("#8a8174"));Pe.position.set(ee.x,18,ee.y),this.scene.add(te,Pe,Gt(60,22,30,Lt("#d8d2c4"),ee.x,44,ee.y))}buildBridge(){const t=this.bridge;t.position.set(Qt.x,0,Qt.y),t.rotation.y=Math.atan2(-Ht.y,Ht.x),this.scene.add(t),this.orange=Lt("#d9442e",{roughness:.7,emissive:"#ff6a30",emissiveIntensity:0});const e=Lt("#a8321f",{roughness:.8,emissive:"#ff6a30",emissiveIntensity:0}),i=Lt("#b8b0a2"),a=Lt("#3b3b40",{roughness:.95}),r=[],o=[],s=(g,b,D,A,O,V,U,z=0)=>g.push(new It().compose(zi.set(b,D,A),La.setFromAxisAngle(Wi.set(1,0,0),z),new ie(O,V,U))),c=[10,62,108,150,190,Un],l=g=>{let b=0;for(;b<c.length-2&&c[b+1]<=g;)b++;return 10-3.5*(b/(c.length-2))};for(const g of[0,et]){t.add(Gt(34,14,74,i,g,3,0));for(const D of[-Bt,Bt]){for(let A=0;A<c.length-1;A++){const O=A/(c.length-2),V=c[A],U=c[A+1],z=16-6*O,$=10-3.5*O,Y=(V+U)/2;t.add(Gt(z,U-V,$,this.orange,g,Y,D));for(const J of[-1,1])for(const j of[-1,1])s(r,g+j*z/6,Y,D+J*$/2,.9,U-V-3,.5),s(r,g+J*z/2,Y,D+j*$/5,.5,U-V-3,.9)}t.add(Gt(12,6,8,e,g,Un+2,D))}for(const D of[Pt+40,147,188,Un-6]){t.add(Gt(8,10,2*Bt-6,this.orange,g,D,0));const A=Bt-l(D-6)/2;s(r,g,D,0,8.5,.8,2*A-1);for(const O of[-1,1])s(o,g,D-5,O*A,7,5,5,Math.PI/4)}t.add(Gt(8,6,2*Bt-4,e,g,Pt-9,0));const b=Math.hypot(2*Bt,Pt-22);for(const D of[-1,1]){const A=Gt(4,b,3,e,g,(Pt-12+10)/2+2,0);A.rotation.x=D*Math.atan2(2*Bt,Pt-22),t.add(A)}}const m=-yt,u=et+yt,f=u-m,_=(m+u)/2;t.add(Gt(f,1.6,2*Kn,a,_,Pt-.8,0));const x=km();x.wrapS=Gn,x.repeat.set(f/ya,1),x.anisotropy=8;const R=new Ot({map:x,roughness:.8,side:kt,emissive:"#ff6a30",emissiveIntensity:0});for(const g of[-Kn,Kn]){const b=new Le(new Dt(f,7.6),R);b.position.set(_,Pt-1.6-3.8,g),t.add(b),t.add(Gt(f,1.3,.5,this.orange,_,Pt+.65,g*.98))}t.add(Gt(f,.6,2*Kn,e,_,Pt-9.2,0));for(const[g,b]of[[r,e],[o,this.orange]]){const D=new Ti(new Vt(1,1,1),b,g.length);g.forEach((A,O)=>D.setMatrixAt(O,A)),t.add(D)}for(const g of[m-14,u+14])t.add(Gt(36,Pt+13,50,i,g,(Pt+3)/2,0));const p=g=>{if(g>=0&&g<=et)return Un-Bm*(1-((g-et/2)/(et/2))**2);const b=g<0?-g/yt:(g-et)/yt;return Un+(Pt+4-Un)*b-22*b*(1-b)},d=Lt("#cc3d2c",{roughness:.6,emissive:"#ff6a30",emissiveIntensity:0});this.lightsUp.push(d,e,R),this.paint.push([this.orange,mt("#c0362c"),mt("#d9442e")],[e,mt("#8e271e"),mt("#a8321f")],[d,mt("#b8332a"),mt("#cc3d2c")]);for(const g of[-Bt,Bt])for(const[b,D]of[[-yt,0],[0,et],[et,et+yt]]){const A=[];for(let O=0;O<=48;O++){const V=b+(D-b)*O/48;A.push(new ie(V,p(V)+1.5,g))}t.add(new Le(new Ul(new Nl(A),96,.8,5),d))}const w=[],C=[];for(let g=-yt+ya;g<et+yt-4;g+=ya)if(!(Math.abs(g)<8||Math.abs(g-et)<8))for(const b of[-Bt,Bt]){w.push(g,p(g),b,g,Pt+1,b);const D=Math.max(.12,Math.min(1,1.2-Xt(g,b).length()/1400));C.push(1,1,1,D,1,1,1,D)}const S=new qt;S.setAttribute("position",new on(w,3)),S.setAttribute("color",new on(C,4)),this.hangers=new _s({color:"#c8402f",vertexColors:!0,transparent:!0,depthWrite:!1}),t.add(new vs(S,this.hangers));const M=[];for(let g=-yt+20;g<et+yt-10;g+=50)for(const b of[-Kn+.5,Kn-.5])M.push(g,Pt+9,b);this.lights.push(this.points(M,"#ffb45a",6.5,t));const E=[];for(const g of[0,et])for(const b of[-Bt,Bt])E.push(g,Un+7,b);const y=this.points(E,"#ff3b30",10,t);this.beacons=y.points.material,this.lights.push(y)}buildTraffic(t){const e=[-8.6,-5.5,-2.4,2.4,5.5,8.6];for(let s=0;s<46;s++){const c=e[s%6],l=t()<.12;this.cars.push({lane:c,dir:c<0?1:-1,x:-yt-300+t()*(et+2*yt+600),speed:19+t()*7,len:l?11+t()*5:4.4+t()*.8,tall:l?3.4:1.5+t()*.3})}const i=["#d9d9dc","#2b2e35","#8a8f99","#b0302a","#25446e","#f2f2f0","#4d5a3a","#c9a24a"];this.carMesh=new Ti(new Vt(1,1,1),Lt("#ffffff",{roughness:.5,flatShading:!1}),this.cars.length),this.cars.forEach((s,c)=>this.carMesh.setColorAt(c,rn.set(i[c%i.length]))),this.carMesh.frustumCulled=!1,this.bridge.add(this.carMesh);const a=new Array(this.cars.length*3).fill(0),r=this.points(a,"#fff1c8",3.2,this.bridge),o=this.points(a,"#ff3a2a",2.6,this.bridge);this.heads=r.points,this.tails=o.points,this.lights.push(r,o)}buildBoat(){const t=Gt(11,1.6,3.4,Lt("#f1ede4"),0,.8,0),e=Gt(.3,14,.3,Lt("#d0ccc4"),.8,8.5,0),i=new qt;i.setAttribute("position",new on([1,2.2,0,1,15,0,5.5,2.2,0,.6,2.2,0,.6,13,0,-4.2,2.2,0],3)),i.computeVertexNormals();const a=new Le(i,Lt("#fbfaf6",{side:kt}));this.boat.add(t,e,a);const r=this.points([.8,16,0,-5,2,0,5,2,0],"#ffe6b0",3);this.boat.add(r.points),this.boatLights=r.points.material,this.lights.push(r),this.scene.add(this.boat)}points(t,e,i,a=this.scene){const r=new qt;r.setAttribute("position",new on(t,3));const o=new gs({color:e,size:i,map:ta.glow,transparent:!0,opacity:0,blending:li,depthWrite:!1,fog:!1}),s=new Fa(r,o);return s.frustumCulled=!1,a.add(s),{points:s,size:i}}static{this._glow=null}get pane(){return this.glass}static get glow(){return ta._glow??=Hm()}update(t,e,i,a){const r=a.night,o=Math.max(0,Math.min(1,(r-.25)/.5)),s=1-r,c=Math.max(0,Math.min(1,(i-6.6)/(18.4-6.6))),l=Math.sin(c*Math.PI)*.72-.06*r,m=c*Math.PI,u=new ie(-Bn.x*Math.cos(m)+Ht.x*Math.sin(m),0,-Bn.y*Math.cos(m)+Ht.y*Math.sin(m)).normalize();u.multiplyScalar(Math.cos(l)).setY(Math.sin(l));const f=Math.max(0,Math.min(1,(i-8)/1.5,(17-i)/1.2))*s;Yn.copy(a.top).lerp(Km,.85*f),qn.copy(a.horizon).lerp(Ym,.8*f),this.sky.uniforms.top.value.copy(Yn),this.sky.uniforms.horizon.value.copy(qn),this.sky.uniforms.sunDir.value.copy(u),this.sky.uniforms.sunColor.value.copy(a.sun),this.sky.uniforms.glow.value=Math.max(.15,1-Math.abs(l)*2.2)*(1-o);const _=this.scene.fog;_.color.copy(qn).lerp(Yn,.2),_.near=2500+3500*f,_.far=26e3+12e3*f,this.sunLight.position.copy(u).multiplyScalar(5e3).add(this.camera.position),this.sunLight.color.copy(a.sun),this.sunLight.intensity=a.sunI/12*3.2*s,this.moonLight.position.copy(this.moon.position),this.moonLight.intensity=.32*o,this.hemi.color.copy(Yn).lerp(rn.set("#ffffff"),.35*s),this.hemi.intensity=.16+1.1*s+.3*f,this.stars.uniforms.opacity.value=o,this.stars.uniforms.time.value=t,this.moon.material.opacity=o,this.water.roughness=.22+.3*r,this.water.color.set("#3a6b8b").lerp(qm,f).lerp(rn.set("#14284a"),r).lerp(qn,.12*s*(1-f)),this.water.emissive.copy(qn).lerp(Yn,.5).multiplyScalar(.03+.2*r),this.seaSky.value.copy(qn).lerp(Yn,.45).multiplyScalar(.85),this.seaTime.value=t,this.ripples.offset.set(t*.012,t*.007),rn.set("#a3271a").lerp(Xm,f),this.orange.emissive.copy(rn),this.orange.emissiveIntensity=.3*o+.14*f;for(const M of this.lightsUp)M.emissive.copy(rn),M.emissiveIntensity=.2*o+.14*f;for(const[M,E,y]of this.paint)M.color.copy(E).lerp(y,f);this.hangers.color.set("#b8382c").lerp(rn.set("#c8402f"),f).multiplyScalar(.35+.65*s).lerp(rn.set("#7a2318"),.6*o),this.windows.emissiveIntensity=1.3*o,this.homes.emissiveIntensity=.3*o;for(const M of this.lights)M.points.material.opacity=o;this.beacons.opacity=o*(.45+.55*(.5-.5*Math.cos(t/2.4*Math.PI*2))),this.boatLights.opacity=o;const x=et+2*yt+600,R=-yt-300,p=this.heads.geometry.attributes.position,d=this.tails.geometry.attributes.position;this.cars.forEach((M,E)=>{M.x=R+((M.x+M.dir*M.speed*e-R)%x+x)%x;const y=M.x>-yt+6&&M.x<et+yt-6;_i.compose(zi.set(M.x,Pt+M.tall/2+.1,M.lane),La.identity(),Wi.set(y?M.len:0,y?M.tall:0,y?1.9:0)),this.carMesh.setMatrixAt(E,_i);const g=y?Pt+.9:-500;p.setXYZ(E,M.x+M.dir*M.len/2,g,M.lane),d.setXYZ(E,M.x-M.dir*M.len/2,g,M.lane)}),this.carMesh.instanceMatrix.needsUpdate=!0,p.needsUpdate=!0,d.needsUpdate=!0;const w=(t/260%1+1)%1,C=Xt(300,1900),S=Xt(300,-900);this.boat.position.set(C.x+(S.x-C.x)*w,0,C.y+(S.y-C.y)*w),this.boat.rotation.set(0,Math.atan2(-(S.y-C.y),S.x-C.x),Math.sin(t*.9)*.05)}render(t,e){const i=this.glass;e.updateMatrixWorld(),t.getDrawingBufferSize(this.screen);let a=1/0,r=-1/0,o=!1;for(const[S,M]of[[-1,-1],[1,-1],[1,1],[-1,1]])this.corner.set(i.cx+S*i.w/2,i.cy+M*i.h/2,i.z).project(e),this.corner.z<1&&(o=!0),a=Math.min(a,this.corner.x),r=Math.max(r,this.corner.x);if(!o)return;const s=Math.min(2048,Math.max(256,Math.round((r-a)/2*this.screen.x/64)*64));Math.abs(s-this.target.width)/this.target.width>.15&&this.target.setSize(s,Math.round(s*i.h/i.w));const c=Math.max(.5,e.position.z-i.z),l=4.2+1.2*ai(8,40,c),m=2,u=Math.atan2(e.position.x-i.cx,c),f=Math.atan2(e.position.y-i.cy,c),_=(S,M,E)=>Math.max(M,Math.min(E,S)),x=_(l*Math.tan(_(u,-1.2,1.2)*.75),-(i.w/2-l*.325),i.w/2-l*.364),R=_(l*Math.tan(f*.3),-.3,i.h/2-l*.185),p=m/l;this.camera.projectionMatrix.makePerspective((-i.w/2-x)*p,(i.w/2-x)*p,(i.h/2-R)*p,(-i.h/2-R)*p,m,4e4),this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert(),this.camera.updateMatrixWorld();const d=t.getSize(this.css),w=this.camera.projectionMatrix.elements[5]*this.target.height/(t.getPixelRatio()*d.y);for(const S of this.lights)S.points.material.size=S.size*w;this.stars.uniforms.scale.value=this.target.height/650;const C=t.getRenderTarget();t.setRenderTarget(this.target),t.render(this.scene,this.camera),t.setRenderTarget(C)}dispose(){this.scene.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const i=e.material?Array.isArray(e.material)?e.material:[e.material]:[];for(const a of i){for(const r of Object.values(a))r instanceof Di&&r.dispose();a.dispose()}}),this.target.dispose()}}const vi=.25,Da=1.2,Zm=new Ri(new ie(0,1,0),-.9),Si=["back","front","left","right"],xi=.32,$m=new wt({colorWrite:!1,depthWrite:!1});function jm(n,t=er){const e=bs(n,t);return e.hour+e.minute/60}const Xi=[[0,"#0a1230","#1a2550","#8095ff",1.6,1],[5.6,"#0d1636","#26305e","#8a9cff",1.6,1],[6.7,"#334a86","#f0956a","#ff9f73",5,.55],[7.8,"#6ea0dc","#f6caa0","#ffd5a6",11,.1],[9.5,"#8dbbee","#dde9f6","#fff3e2",12,0],[15.8,"#8dbbee","#e3ecf6","#fff1dc",11.5,0],[17.2,"#6c8fd4","#f5b37c","#ffc68e",11,.1],[18.1,"#3b417c","#e8735e","#ff9170",5,.45],[19,"#16204a","#3a3768","#8a9cff",1.8,.9],[24,"#0a1230","#1a2550","#8095ff",1.6,1]],Qn=new Ie,Xs=new Ie,Qm=55;function Jm(n){let t=0;for(;t<Xi.length-2&&Xi[t+1][0]<=n;)t++;const e=Xi[t],i=Xi[t+1],a=Math.max(0,Math.min(1,(n-e[0])/(i[0]-e[0]||1))),r=(o,s)=>Qn.set(o).lerp(Xs.set(s),a).clone();return{top:r(e[1],i[1]),horizon:r(e[2],i[2]),sun:r(e[3],i[3]),sunI:e[4]+(i[4]-e[4])*a,night:e[5]+(i[5]-e[5])*a}}const wn={sitY:.08,sitFwd:.2,keyZ:.47,ik:1,life:1};function e0(n){return n.pose==="walk"?n.prop==="mug"?"mug":n.prop?"carry":"none":n.pose==="sit"?n.doing==="read"||n.doing==="letter"?"read":n.doing==="type"||n.doing==="file"?"type":n.doing==="note"?"write":"rest":n.prop==="mug"?"mug":n.prop?"carry":n.doing==="talk"||n.doing==="reply"?"talk":"none"}const Wo=n=>Math.atan2(Math.sin(n),Math.cos(n)),Nn=new ie,Zn=new ie,ni=new ie,Jn=new ie,t0=new ie,wi=new ie,Xa=new kn,ri=new kn;function Xo(n,t,e,i){Xa.setFromUnitVectors(wi.copy(e).sub(t).normalize(),t0.copy(i).sub(t).normalize()),n.parent.getWorldQuaternion(ri),n.quaternion.premultiply(ri.clone().invert().multiply(Xa).multiply(ri)),n.updateMatrixWorld(!0)}function n0(n,t,e){n.upper.getWorldPosition(Nn),n.lower.getWorldPosition(Zn),n.hand.getWorldPosition(ni);const i=Nn.distanceTo(Zn),a=Zn.distanceTo(ni),r=Ss.clamp(Nn.distanceTo(t),Math.abs(i-a)+.001,i+a-.001);Jn.copy(t).sub(Nn).normalize();const o=(i*i-a*a+r*r)/(2*r),s=Math.sqrt(Math.max(0,i*i-o*o)),c=e.clone().addScaledVector(Jn,-e.dot(Jn)).normalize(),l=Nn.clone().addScaledVector(Jn,o).addScaledVector(c,s);Xo(n.upper,Nn,Zn,l),n.lower.getWorldPosition(Zn),n.hand.getWorldPosition(ni),Xo(n.lower,Zn,ni,Nn.clone().addScaledVector(Jn,r))}class i0{constructor(t,e,i){this.who=t,this.root=new nt,this.actions=new Map,this.bodyKey="",this.bones=new Map,this.base=[],this.arms=[],this.pos=new Ze,this.yaw=0,this.y=0,this.pose="away",this.seed=Ga.indexOf(t)*1.7,this.model=Is(e),this.model.traverse(s=>{const c=s;c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0,c.frustumCulled=!1),s.isBone&&(this.bones.set(s.name,s),this.base.push([s,s.quaternion.clone()]))}),this.mixer=new Bl(this.model);for(const s of i)this.actions.set(s.name,this.mixer.clipAction(s));for(const s of["L","R"]){const c=this.bones.get(`UpperArm${s}`),l=this.bones.get(`LowerArm${s}`),m=this.bones.get(`Palm${s}`);c&&l&&m&&this.arms.push({upper:c,lower:l,hand:m,side:0,w:0,target:new ie,rest:[new kn,new kn]})}const a=Vs();a.scale.setScalar(.85);const r=ks(),o=Ji();o.scale.setScalar(.9),this.props={paper:a,mug:o,letter:r},this.root.add(this.model,a,r,o),this.hit=new Le(new Gl(.3,1.1,2,8),new wt({colorWrite:!1,depthWrite:!1})),this.hit.position.y=.9,this.hit.userData.pick={kind:"person",who:t},this.root.add(this.hit),this.root.visible=!1}play(t){if(t===this.bodyKey)return;const e=this.actions.get(t);e&&(e.reset().play(),this.body&&e.crossFadeFrom(this.body,.35,!1),this.body=e,this.bodyKey=t)}headHeight(){const t=this.bones.get("Head");return t?t.getWorldPosition(wi).y+.28:this.root.position.y+1.8}handTarget(t,e,i,a){const r=On-this.root.position.y,o=wn.keyZ-wn.sitFwd,s=this.seed;switch(t){case"type":return!!a.set(-.08+e*.1,r+.035+Math.max(0,Math.sin(i*13+s+e*1.7))*.014,o);case"rest":return!!a.set(-.06+e*.17,r+.03,o-.12);case"write":return!!(e<0?a.set(-.06+Math.sin(i*5+s)*.03,r+.03+Math.max(0,Math.sin(i*9))*.01,o-.06+Math.cos(i*5+s)*.02):a.set(.16,r+.03,o-.14));case"read":return!!a.set(e*.11,r+.2,o-.14);case"carry":return!!a.set(e*.1,1.02,.27);case"mug":return e<0?!!a.set(-.17,1,.24):!1;case"talk":return e<0?!!a.set(-.26,1.08+Math.sin(i*2.3+s)*.05,.3+Math.cos(i*1.6+s)*.05):!1;default:return!1}}update(t,e,i,a,r){if(!t||!t.visible){this.root.visible=!1,this.pose="away";return}const o=!this.root.visible;this.root.visible=!0,this.pose=t.pose;const s=t.pose==="sit",c=s?wn.sitFwd:0,l=t.x+Math.sin(t.yaw)*c,m=t.z+Math.cos(t.yaw)*c,u=s?wn.sitY:0,f=r||o,_=f?1:1-Math.exp(-e*(t.pose==="walk"?30:9));f&&(this.yaw=t.yaw),this.pos.x+=(l-this.pos.x)*_,this.pos.y+=(m-this.pos.y)*_,this.y+=(u-this.y)*(f?1:1-Math.exp(-e*7)),this.yaw+=Wo(t.yaw-this.yaw)*(f?1:1-Math.exp(-e*(t.pose==="walk"?12:6))),this.root.position.set(this.pos.x,this.y,this.pos.y),this.root.rotation.y=this.yaw,this.play(t.pose==="walk"?"walk":s?"sit":"idle"),this.body&&(this.body.timeScale=t.pose==="walk"?Math.min(4,Math.max(1,a)):1);for(const[A,O]of this.base)A.quaternion.copy(O);this.mixer.update(f?0:e);for(const[A,O]of this.base)O.copy(A.quaternion);this.root.updateMatrixWorld(!0);const x=this.bones.get("Neck")||this.bones.get("Head"),R=this.bones.get("Torso"),p=(A,O,V)=>{A?.parent&&(A.parent.getWorldQuaternion(ri),A.quaternion.premultiply(ri.clone().invert().multiply(Xa.setFromAxisAngle(O,V)).multiply(ri)))},d=new ie(0,1,0),w=new ie(Math.cos(this.yaw),0,-Math.sin(this.yaw));wn.life&&s&&(p(R,w,Math.sin(i*1.3+this.seed)*.015),R?.updateMatrixWorld(!0)),wn.life&&(t.look?p(x,d,Math.max(-1,Math.min(1,Wo(Math.atan2(t.look.x-this.pos.x,t.look.z-this.pos.y)-this.yaw)))):s?(p(x,w,.12+Math.sin(i*.7+this.seed)*.04),p(x,d,Math.sin(i*.23+this.seed*3)*.12)):(t.doing==="talk"||t.doing==="reply")&&p(x,w,Math.sin(i*2.4+this.seed)*.05)),this.root.updateMatrixWorld(!0);const C=e0(t),S=f?1:1-Math.exp(-e*8),M=f?1:1-Math.exp(-e*12);for(const A of this.arms){A.side||(A.side=Math.sign(this.root.worldToLocal(A.upper.getWorldPosition(wi)).x)||1);const O=this.handTarget(C,A.side,i,ni);if(A.w+=((O?1:0)-A.w)*S,O&&A.target.lerp(ni,A.w<.02?1:M),A.w<.01||!wn.ik)continue;A.rest[0].copy(A.upper.quaternion),A.rest[1].copy(A.lower.quaternion);const V=new ie(A.side*.7,-1,-.35).applyQuaternion(this.root.quaternion);n0(A,this.root.localToWorld(A.target.clone()),V),A.upper.quaternion.copy(A.rest[0].slerp(A.upper.quaternion,A.w)),A.lower.quaternion.copy(A.rest[1].slerp(A.lower.quaternion,A.w)),A.upper.updateMatrixWorld(!0)}const{paper:E,letter:y,mug:g}=this.props;E.visible=t.prop==="paper",y.visible=t.prop==="letter",g.visible=t.prop==="mug";const b=this.arms.map(A=>this.root.worldToLocal(A.hand.getWorldPosition(new ie)));if((E.visible||y.visible)&&b.length===2){const A=E.visible?E:y;A.position.copy(b[0]).add(b[1]).multiplyScalar(.5).add(wi.set(0,.03,.04)),A.rotation.set(-1.05,0,0)}const D=this.arms.find(A=>A.side<0);g.visible&&D&&g.position.copy(this.root.worldToLocal(D.hand.getWorldPosition(wi))).add(Jn.set(0,-.04,.04))}}class Ks{constructor(t){this.canvas=t,this.onPick=()=>{},this.onHover=()=>{},this.frameSource=()=>({world:null,speed:1,seat:!1,lights:!1}),this.afterFrame=()=>{},this.onView=()=>{},this.wheelZooms=!1,this.scene=new Ms,this.camera=new Cn(30,1,.5,140),this.cam={az:.66,el:.6,home:new ie(-.1,.9,-.1),target:new ie(-.1,.9,-.1),nudge:new Ze,nudgeNow:new Ze,dragAz:0,dragEl:0,azNow:0,elNow:0,zoom:1,zoomNow:1,pan:new Ze,panNow:new Ze},this.walls={},this.wallsSet=!1,this.goal=new Cn(30,1,.5,140),this.viewKey="",this.reduced=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,this.running=!1,this.last=0,this.t=0,this.rigs=new Map,this.picks=[],this.raycaster=new Ol,this.sun=new Ii("#ffffff",2),this.fill=new Ii("#bcd0ff",.5),this.hemi=new Es("#8ea8d8","#3a2f2a",1),this.ceiling=[],this.windowGlow=[0,1].map(()=>new jn("#dfe9ff",0,15,2)),this.lamps=new Map,this.seatLamp={light:new jn("#ffcf8f",0,4.5,2),bulbs:[],glow:null,on:0},this.door={pivot:new nt,angle:0,glass:new wt({color:"#2a3048",toneMapped:!1}),strip:new wt({color:"#ffd27a",toneMapped:!1}),inside:new wt({color:"#06080f",toneMapped:!1}),spill:null,shadow:null,light:new jn("#ffc979",0,3.5,2),shadowX:0,glow:0},this.boardKept=-1,this.trayStack=new nt,this.binBalls=new nt,this.envelopes=new Map,this.lit=0,this.snapNext=!0,this.disposed=!1,this.abort=new AbortController,this.down=null,this.touches=new Map,this.pinch=null,this.hoverAt=0,this.plan=_a(Wn),this.layout=Hl,this.editing=!1,this.editor=null,this.itemRoots=new Map,this.sources=new Map,this.wallRoots=new Map,this.wallShadows=new nt,this.doorWallKey="",this.modelErrors=new Map,this.builders=new Map,this.assemblyQueue=Promise.resolve(),this.assemblyLoads=new Map,this.assemblyCapture=null,this.placementRoot=null,this.placementKind="",this.placementToken=0,this.placementMaterials=[],this.placementBox=null,this.placementError="",this.fit={key:"",dist:30},this.frame=e=>{if(!this.running||this.disposed)return;const i=this.last?Math.min(100,e-this.last):16;this.last=e;const a=i/1e3;this.t+=a;const r=this.frameSource(i);this.apply(r,a),this.placeCamera(a),this.walls.back.fix.visible&&this.outside.render(this.renderer,this.camera),this.renderer.render(this.scene,this.camera),this.editor?.frame(),this.afterFrame()},this.renderer=new Kp({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ai,this.renderer.toneMapping=$a,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=dn,this.scene.background=new Ie("#0e1322"),this.listen()}static async create(t,e=Wn){const i=new Ks(t);return i.plan=_a(e),await i.build(),i}showPlacement(t,e=!0,i=!1){if(!t){this.clearPlacement();return}const a=t.kind+JSON.stringify([t.art,t.wall?t.y:0,t.foot]);if(!this.placementRoot||this.placementKind!==a){this.clearPlacement(),this.placementKind=a;const r=++this.placementToken,o=new nt;o.name="placement-preview",o.userData.loading=!0,this.placementRoot=o,this.scene.add(o);const s=to.get(t.kind),c=s?.height??.7,l=new Ot({color:"#86efac",transparent:!0,opacity:.5,depthWrite:!1});this.placementMaterials.push({material:l,color:l.color.clone()}),this.placementBox=new Vt(t.foot[0],c,t.foot[1]);const m=new Le(this.placementBox,l);m.position.y=t.wall?t.y:c/2,o.add(m);const u=Wn.items.find(_=>_.kind===t.kind);(t.kind==="wallClock"?Promise.resolve(Bo(t.y,t.foot[0])):t.art?Go(t):s?Oo(s):u?this.assemblySource(u).then(_=>{const x=_.clone(!0);return x.position.set(0,0,0),x.rotation.set(0,0,0),x.visible=!0,x}):Promise.reject(new Error("Unknown furniture."))).then(_=>{if(!(this.disposed||r!==this.placementToken)){o.clear(),this.placementBox?.dispose(),this.placementBox=null;for(const{material:x}of this.placementMaterials)x.dispose();this.placementMaterials=[],_.traverse(x=>{x.isLight&&(x.visible=!1);const R=x;if(!R.isMesh)return;R.castShadow=!1;const p=(Array.isArray(R.material)?R.material:[R.material]).map(d=>{const w=d.clone();return w.transparent=!0,w.opacity=.5,w.depthWrite=!1,this.placementMaterials.push({material:w,color:w.color?.clone()??new Ie("#ffffff")}),w});R.material=Array.isArray(R.material)?p:p[0]}),o.add(_),o.userData.loading=!1,this.tintPlacement(o.userData.valid,o.userData.overlap)}}).catch(_=>{r===this.placementToken&&(o.userData.loading=!1,this.placementError=_ instanceof Error?_.message:"Could not load furniture.")})}this.placementRoot.position.set(t.x,t.parent?t.y:0,t.z),this.placementRoot.rotation.y=t.yaw,this.placementRoot.userData.valid=e,this.placementRoot.userData.overlap=i,this.tintPlacement(e,i)}tintPlacement(t,e){const i=new Ie(t?e?"#fbbf24":"#86efac":"#f87171");for(const{material:a,color:r}of this.placementMaterials)a.color&&a.color.copy(r).lerp(i,.4)}clearPlacement(){++this.placementToken,this.placementRoot?.removeFromParent(),this.placementRoot=null,this.placementKind="",this.placementError="",this.placementBox?.dispose(),this.placementBox=null;for(const{material:t}of this.placementMaterials)t.dispose();this.placementMaterials=[]}furnish(t,e=this.scene){e.add(t),this.assemblyCapture?.add(t)}async pieceGroup(t,e,i=!1){this.builders.set(t,e);const a=Wn.items.find(f=>f.id===t);if(!i&&!this.plan.items.some(f=>f.kind===a.kind))return;const r=[this.scene,...Object.values(this.walls).map(f=>f.fix)],o=new Set(r.flatMap(f=>f.children)),s=i&&!a.kind.startsWith("rug")&&!a.wall?new Set:null;this.assemblyCapture=s;try{await e()}finally{this.assemblyCapture=null}const c=a.wall?this.walls[a.wall].fix:this.scene,l=r.map(f=>[f,f.children.filter(_=>!o.has(_)&&(!s||s.has(_)))]),m=new nt;m.name=t,m.userData.planKind=a.kind;const u=[];for(const[f,_]of l){if(!_.length&&f!==c)continue;const x=f===c?m:new nt;x.position.set(a.x,0,a.z),f.add(x),x.updateMatrixWorld(!0);for(const R of _)x.attach(R);x!==m&&u.push(x)}(!i||!this.itemRoots.has(t))&&this.itemRoots.set(t,m),this.sources.set(t,m),this.wallRoots.set(t,u)}assemblySource(t){const e=this.sources.get(t.id);if(e)return Promise.resolve(e);let i=this.assemblyLoads.get(t.id);return i||(i=this.assemblyQueue.then(async()=>{if(this.disposed)throw new Error("Office closed.");await this.pieceGroup(t.id,this.builders.get(t.id),!0);const a=this.sources.get(t.id);a.visible=this.itemRoots.get(t.id)===a&&this.plan.items.some(r=>r.id===t.id);for(const r of this.wallRoots.get(t.id)||[])r.visible=this.plan.items.some(o=>o.id===t.id);return a}),this.assemblyQueue=i.catch(()=>{}),this.assemblyLoads.set(t.id,i)),i}loadItem(t){const e=new nt;e.name=t.id,e.userData.planKind=t.kind;const i=to.get(t.kind),a=i?.height??.6,r=new Le(new Vt(t.foot[0],a,t.foot[1]),new Ot({color:"#93c5fd",transparent:!0,opacity:.45}));r.position.y=t.wall?t.y:a/2,e.add(r),e.userData.loading=!0,(t.wall?this.walls[t.wall].fix:this.scene).add(e),this.itemRoots.set(t.id,e);const o=Wn.items.find(c=>c.kind===t.kind);return(t.kind==="wallClock"?Promise.resolve(Bo(t.y,t.foot[0])):t.art?Go(t):i?Oo(i):o?this.assemblySource(o).then(c=>{const l=o.role&&t.id===o.id?c:c.clone(!0);return l.position.set(0,0,0),l.rotation.set(0,0,0),l.visible=!0,l}):Promise.reject(new Error("Unknown furniture."))).then(c=>{this.disposed||this.itemRoots.get(t.id)!==e||(e.remove(r),e.add(c),e.userData.loading=!1,c.userData.clockTexture&&(e.userData.clockTexture=c.userData.clockTexture,e.userData.clockBody=c),r.geometry.dispose(),r.material.dispose(),this.setPlan(this.plan))}).catch(c=>{this.disposed||this.itemRoots.get(t.id)!==e||(r.material.color.set("#f87171"),e.userData.loading=!1,this.modelErrors.set(t.id,c instanceof Error?c.message:"Could not load this furniture."))}),e}setPlan(t){this.plan=_a(t),this.layout=va(t),this.rebuildWalls();for(const[e,i]of this.itemRoots){i.visible=t.items.some(a=>a.id===e);for(const a of this.wallRoots.get(e)||[])a.visible=i.visible}for(const e of t.items){let i=this.itemRoots.get(e.id);const a=e.art?JSON.stringify([e.art,e.y,e.foot]):"";if(i&&(i.userData.planKind!==e.kind||e.art&&i.userData.artKey!==a)&&(e.art&&i.traverse(r=>{if(r instanceof Le){r.geometry.dispose();for(const o of Array.isArray(r.material)?r.material:[r.material])(o instanceof wt||i.userData.loading)&&o.dispose()}}),i.removeFromParent(),this.itemRoots.delete(e.id),this.modelErrors.delete(e.id),i=void 0),i||(i=this.loadItem(e),i.userData.artKey=a),i.visible=!0,e.role==="clock"&&i.userData.clockBody){const r=i.userData.clockBody;r.position.y=e.y,r.scale.set(e.foot[0]/.7,e.foot[0]/.7,1)}e.wall&&i.parent!==this.walls[e.wall].fix&&this.walls[e.wall].fix.add(i),i.position.set(e.x,e.parent?e.y:0,e.z),i.rotation.y=e.yaw;for(const r of this.wallRoots.get(e.id)||[])r.visible=!0,r.position.copy(i.position),r.rotation.copy(i.rotation)}this.layout=va(t),this.scene.updateMatrixWorld(!0),this.snap()}floorAt(t,e,i=0){const a=this.canvas.getBoundingClientRect();this.raycaster.setFromCamera(new Ze((t-a.left)/a.width*2-1,-(e-a.top)/a.height*2+1),this.camera);const r=this.raycaster.ray.intersectPlane(new Ri(new ie(0,1,0),-i),new ie);return r?{x:r.x,z:r.z}:null}placementAt(t,e,i){const a=this.floorAt(t,e);if(kl(i)){const r=[];for(const o of this.plan.items){if(o.id===i.id)continue;const s=Vl(o);if(!s)continue;const c=this.raycaster.ray.intersectPlane(new Ri(new ie(0,1,0),-s.height),new ie);c&&zl(o,c.x,c.z)&&r.push({x:c.x,z:c.z,parent:o.id,distance:c.distanceTo(this.camera.position)})}if(r.length)return r.sort((o,s)=>o.distance-s.distance)[0]}return a?{...a,parent:null}:null}wallAt(t,e){this.floorAt(t,e);const{minX:i,maxX:a,minZ:r,maxZ:o,wallH:s}=Pn,c=[];for(const l of Si){if(!this.walls[l].fix.visible)continue;const m=l==="back"?new ie(0,0,1):l==="front"?new ie(0,0,-1):l==="left"?new ie(1,0,0):new ie(-1,0,0),u=l==="back"?new ie(0,0,r+.02):l==="front"?new ie(0,0,o-.02):l==="left"?new ie(i+.02,0,0):new ie(a-.02,0,0),f=this.raycaster.ray.intersectPlane(new Ri().setFromNormalAndCoplanarPoint(m,u),new ie);f&&f.y>=0&&f.y<=s&&f.x>=i-.01&&f.x<=a+.01&&f.z>=r-.01&&f.z<=o+.01&&c.push({x:f.x,z:f.z,wall:l,distance:f.distanceTo(this.camera.position)})}return c.sort((l,m)=>l.distance-m.distance)[0]??null}itemAt(t,e){this.floorAt(t,e);const i=this.raycaster.intersectObjects([...this.itemRoots.values()],!0);for(const a of i){let r=a.object,o=null,s=!0;for(;r;)r.visible||(s=!1),this.itemRoots.get(r.name)===r&&(o=r.name),r=r.parent;if(s&&o)return o}return null}project(t,e,i){const a=new ie(t,e,i).project(this.camera),r=this.canvas.getBoundingClientRect();return{x:(a.x+1)/2*r.width,y:(1-a.y)/2*r.height}}get surface(){return this.canvas}get objects(){return this.scene}async build(){const[t]=await Promise.all([Lm(),Pm(this.plan)]);this.layout=va(this.plan),this.buildShell(),await this.buildDesks(),await this.buildCheckerDoor(),await this.buildCoffee(),await this.buildBackWall(),await this.buildSeat(),await this.buildDecor(),this.buildLights();for(const e of Ga){const i=new i0(e,t.models[e],t.clips[e]);this.rigs.set(e,i),this.scene.add(i.root),this.picks.push(i.hit)}this.scene.traverse(e=>{e.userData.pick&&!this.picks.includes(e)&&this.picks.push(e)})}add(t,e,i,a,r=0,o){return t.position.set(e,i,a),t.rotation.y=r,o&&t.traverse(s=>{s.userData.pick=o}),this.scene.add(t),this.assemblyCapture?.add(t),t}buildShell(){const{minX:t,maxX:e,minZ:i,maxZ:a,wallH:r}=Pn,o=mn(1024,1024,_=>{_.fillStyle=Je.floor,_.fillRect(0,0,1024,1024);let x=7;const R=()=>(x=x*16807%2147483647)/2147483647;for(let p=0;p<16;p++){let d=-R()*300;for(;d<1024;){const w=260+R()*260,C=.9+R()*.18;_.fillStyle=`rgba(${Math.round(74*C)},${Math.round(59*C)},${Math.round(51*C)},1)`,_.fillRect(d+2,p*64+2,w-4,60),d+=w}}});o.wrapS=o.wrapT=Gn,o.repeat.set((e-t+.6)/4,(a-i+.6)/4);const s=new Le(new Vt(e-t+.6,.3,a-i+.6),[Mt(Je.floorEdge),Mt(Je.floorEdge),new Ot({map:o,roughness:.9}),Mt(Je.floorEdge),Mt(Je.floorEdge),Mt(Je.floorEdge)]);s.position.set((t+e)/2,-.15,(i+a)/2),s.receiveShadow=!0,this.scene.add(s);const c=new Le(new Vt(e-t+2,.1,a-i+2),new wt({colorWrite:!1,depthWrite:!1}));c.position.set((t+e)/2,r+.08,(i+a)/2),c.castShadow=!0,this.scene.add(c);const l=.16,m=Oi;for(const _ of Si){const x={up:new nt,fix:new nt,stub:new nt,h:1,cut:!1};x.stub.visible=!1,this.scene.add(x.up,x.fix,x.stub),this.walls[_]=x}this.scene.add(this.wallShadows),this.rebuildWalls();const u=gt(.02,2.15,1,"#06080f",!1);u.position.set(t-l+.01,1.075,m.z),this.walls.left.fix.add(u);for(const _ of[-.5,.5]){const x=gt(.2,2.2,.06,Je.frame);x.position.set(t+.02,1.1,m.z+_),this.walls.left.fix.add(x)}const f=gt(.2,.08,1.06,Je.frame);f.position.set(t+.02,2.19,m.z),this.walls.left.fix.add(f)}rebuildWalls(){const t=this.layout.DOOR,e=no,i=Oi,a=JSON.stringify(t);if(a===this.doorWallKey)return;this.doorWallKey=a;const r=new Set;for(const f of[this.wallShadows,...Si.flatMap(_=>[this.walls[_].up,this.walls[_].stub])])f.traverse(_=>{_ instanceof Le&&r.add(_.geometry)}),f.clear();for(const f of r)f.dispose();const{minX:o,maxX:s,minZ:c,maxZ:l,wallH:m}=Pn,u=.16;for(const f of Si){const _=f==="back"||f==="front",x=_?o-u:c-u,R=_?s+u:l,p=(C,S,M,E,y=u,g=-u/2,b=Je.wall,D)=>{if(S-C<1e-6||E-M<1e-6)return;const A=_?(C+S)/2:f==="left"?o+g:s-g,O=_?f==="back"?c+g:l-g:(C+S)/2,V=_?S-C:y,U=_?y:S-C;if(!D)this.wallBox(f,A-V/2,A+V/2,M,E,O-U/2,O+U/2);else{const z=gt(V,E-M,U,b,!1);z.position.set(A,(M+E)/2,O),D.add(z)}},d=[];if(f==="back"&&d.push({a:e.x0,b:e.x1,bottom:e.sill,top:e.top}),f==="left"&&d.push({a:i.z-.5,b:i.z+.5,bottom:0,top:2.15}),f===t.wall){const C=_?t.x:t.z;d.push({a:C-t.w/2,b:C+t.w/2,bottom:0,top:t.h})}const w=[x,...d.flatMap(C=>[C.a,C.b]),R].sort((C,S)=>C-S);for(let C=0;C<w.length-1;C++){const S=w[C],M=w[C+1],E=(S+M)/2,y=d.find(g=>E>g.a&&E<g.b);y?(p(S,M,0,y.bottom),p(S,M,y.top,m)):p(S,M,0,m),(!y||y.bottom>0)&&(p(S,M,0,.12,.03,.015,Je.trim,this.walls[f].up),p(S,M,0,xi,u-.006,-u/2,Je.wall,this.walls[f].stub),p(S,M,xi,xi+.03,u,-u/2,Je.wallTop,this.walls[f].stub))}p(x,R,m,m+.04,u+.02,-u/2,Je.wallTop,this.walls[f].up)}}wallBox(t,e,i,a,r,o,s){const c=gt(i-e,r-a,s-o,Je.wall,!1);c.position.set((e+i)/2,(a+r)/2,(o+s)/2),c.receiveShadow=!0,this.walls[t].up.add(c);const l=new Le(c.geometry,$m);l.position.copy(c.position),l.castShadow=!0,this.wallShadows.add(l)}async buildBackWall(){const{minZ:t}=Pn,e=no,i=this.walls.back.fix,a=Je.windowFrame,r=.065,o=.14,s=t+.008-o/2,c=(A,O,V,U)=>{const z=gt(A,O,o,a);z.position.set(V,U,s),i.add(z)},l=.04,m=gt(e.x1-e.x0+.2,l,.28,a);m.position.set((e.x0+e.x1)/2,e.sill+l/2,t+.06),i.add(m),c(e.x1-e.x0+r,r,(e.x0+e.x1)/2,e.top);const u=.035,f=e.sill+l;c(e.x1-e.x0-r,u,(e.x0+e.x1)/2,f+u/2);const _=e.top-r/2-f,x=f+_/2;c(r,_,e.x0,x),c(r,_,e.x1,x);const R=.042,p=.08,d=t-.05,w=(A,O,V,U)=>{const z=gt(A,O,p,a);z.position.set(V,U,d),i.add(z)},C=f+u,S=e.top-r/2,M=S-C,E=(C+S)/2,y=Array.from({length:e.panes-1},(A,O)=>e.x0+(e.x1-e.x0)*(O+1)/e.panes);for(const A of y)w(R,M,A,E);const g=e.x0+r/2,b=e.x1-r/2;this.outside=new ta({cx:(g+b)/2,cy:E,z:t-.1,w:b-g,h:M});const D=new Le(new Dt(b-g,M),new wt({map:this.outside.texture,toneMapped:!1}));D.position.set((g+b)/2,E,t-.1),i.add(D),await this.pieceGroup("board",()=>{this.board=mn(640,440,()=>{});const A=Wl,O=gt(A.w+.08,A.h+.08,.04,"#5a4434");O.position.set(A.x,A.y,t+.02),i.add(O);const V=new Le(new Dt(A.w,A.h),new Ot({map:this.board,roughness:.95}));V.position.set(A.x,A.y,t+.045),V.userData.pick={kind:"board"},i.add(V),this.drawBoard(0)}),await this.pieceGroup("bookcase",async()=>{const A=await xt("bookcase");this.add(A,Fi.x,0,Fi.z+.02,0);for(const[O,V]of[[.42,-.12],[.85,.1],[1.27,-.05]])this.add(await xt("books"),Fi.x+V,O,Fi.z+.02,0)}),await this.pieceGroup("printer",async()=>{const A=await xt("sideTable");this.add(A,Bi.x,0,Bi.z+.05,0),this.add(await xt("printer"),Bi.x-.12,On*.98,Bi.z+.05,0)})}drawBoard(t){!this.board||t===this.boardKept||(this.boardKept=t,Om(this.board,e=>{const{width:i,height:a}=e.canvas;e.fillStyle=Je.cork,e.fillRect(0,0,i,a);const r=[[40,300,"#f4e7a1",-.06],[470,50,"#cfe3f5",.05],[500,290,"#f6c9c4",-.03]];for(const[o,s,c,l]of r)e.save(),e.translate(o,s),e.rotate(l),e.fillStyle=c,e.fillRect(0,0,120,100),e.restore();e.save(),e.translate(150,60),e.rotate(-.015),e.fillStyle="#f7f3ea",e.fillRect(0,0,300,300),e.fillStyle="#c0392b",e.beginPath(),e.arc(150,14,9,0,Math.PI*2),e.fill(),e.fillStyle="#2b2b2b",e.textAlign="center",e.font="600 34px Inter, system-ui, sans-serif",e.fillText("kept today",150,78),e.font="700 150px Inter, system-ui, sans-serif",e.fillText(String(t),150,232),e.restore()}))}async buildDesks(){for(const e of Ga)await this.pieceGroup(Wn.items.find(i=>i.who===e).id,async()=>{const i=Xl[e],a={kind:"person",who:e},r=Ts[e];this.add(await xt("desk"),i.x,0,i.z,Math.PI,a);const o=Fm(ql[e],r);o.position.set(i.x,On*.62,i.z+Kl/2+.012),o.userData.pick=a,this.scene.add(o);const s=this.add(await xt("chair",{colors:{carpet:r}}),i.x,0,i.z-.66,0,a);s.name="desk-chair",s.scale.y*=.85;const c=On,l=gt(.62,.008,.36,r,!1);l.position.set(i.x-.08,c+.004,i.z-.06),this.scene.add(l),this.add(await xt("laptop"),i.x-.08,c+.008,i.z-.04,Math.PI);const m=await xt("deskLamp");this.add(m,i.x+.5,c,i.z+.12,-2.4);const u=[];m.traverse(R=>{const p=R;if(p.isMesh&&p.material.name==="White"){const d=p.material.clone();d.emissive.set(Je.lamp),d.emissiveIntensity=0,p.material=d,u.push(d)}});const f=new jn("#ffc98a",0,3.2,2);f.position.set(i.x+.35,c+.42,i.z+.05),this.scene.add(f),this.lamps.set(e,{light:f,bulbs:u});const _=e==="receipts_dept"?Dm():e==="fine_print"?Ji():e==="docket_watch"?Im(r):e==="public_record"?Um():Nm(r);this.add(_,i.x-.52,c,i.z+.02,e==="docket_watch"?.3:.2);const x=new nt;this.add(x,i.x+.2,c,i.z+.16,.15),this.envelopes.set(e,x)});const t=async(e,i,a,r)=>{const o=await xt("rug");o.scale.set(a/(1.57*qi)*o.scale.x,o.scale.y,r/(.92*qi)*o.scale.z),o.traverse(s=>{s.castShadow=!1}),this.add(o,e,.002,i,0)};await this.pieceGroup("rug-back",()=>t(1.6,-2.45,9.4,3.1)),await this.pieceGroup("rug-front",()=>t(1.3,1.25,6.6,3))}async buildCheckerDoor(){const t=io,e=0,i=.16,a=new nt;a.name="checker-door",a.userData.planKind="checkerDoor",this.itemRoots.set(a.name,a),this.scene.add(a);const r=Je.frame,o=.004,s=t.h+.03-.07/2;for(const S of[-1,1]){const M=gt(.07+o,s,i+.04,r);M.name=S<0?"checker-door-jamb-left":"checker-door-jamb-right",M.position.set(0+S*(t.w+.07-o)/2,s/2,e-i/2),a.add(M)}const c=gt(t.w+.14,.07,i+.04,r);c.name="checker-door-header",c.position.set(0,t.h+.03,e-i/2),a.add(c);const l=new Le(new Dt(t.w+.3,t.h+.2),this.door.inside);l.position.set(0,t.h/2,e-i-.3),a.add(l);const m=this.door.pivot;m.position.set(-.95/2,0,e-.04);const u=gt(t.w-.02,t.h-.04,.05,Je.door);u.position.set(t.w/2,t.h/2+.02,0),m.add(u);const f=new Le(new Dt(.46,.62),this.door.glass);f.position.set(t.w/2,1.5,.027),m.add(f);const _=mn(128,160,S=>{const M=S.createRadialGradient(64,52,6,64,52,34);M.addColorStop(0,"rgba(0,0,0,1)"),M.addColorStop(1,"rgba(0,0,0,0)"),S.fillStyle=M,S.fillRect(0,0,128,160);const E=S.createRadialGradient(64,170,10,64,170,80);E.addColorStop(0,"rgba(0,0,0,1)"),E.addColorStop(1,"rgba(0,0,0,0)"),S.fillStyle=E,S.fillRect(0,0,128,160)}),x=new Le(new Dt(.34,.42),new wt({map:_,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));x.position.set(t.w/2,1.47,.029),m.add(x),this.door.shadow=x;const R=new Le(new Ba(.035,8,6),Mt("#d8c48a",{metalness:.6,roughness:.35}));R.position.set(t.w-.12,1.02,.05),m.add(R);const p=new Le(new Vt(t.w-.06,.012,.02),this.door.strip);p.position.set(0,.006,e+.005),a.add(p),m.traverse(S=>{S.userData.pick={kind:"door"}}),a.add(m);const d=mn(128,128,S=>{const M=S.createLinearGradient(0,0,0,128);M.addColorStop(0,"rgba(255,210,130,0.9)"),M.addColorStop(1,"rgba(255,210,130,0)"),S.fillStyle=M,S.fillRect(0,0,128,128)}),w=new Le(new Dt(t.w+.3,1.4),new wt({map:d,transparent:!0,opacity:0,blending:li,depthWrite:!1,toneMapped:!1}));w.rotation.x=-Math.PI/2,w.position.set(0,.004,e+.7),a.add(w),this.door.spill=w,this.door.light.position.set(0,.35,e+.35),a.add(this.door.light);const C=Ho("the editor",.5,.12);C.position.set(t.w/2+.42,1.62,e+.004),C.userData.pick={kind:"door"},a.add(C),await this.pieceGroup("tray",async()=>{this.add(await xt("sideTable"),En.x,0,En.z,0,{kind:"tray"});const S=gt(.46,.035,.34,"#2b3348");S.position.set(En.x,On+.02,En.z),S.userData.pick={kind:"tray"},this.furnish(S),this.trayStack.position.set(En.x,On+.04,En.z),this.furnish(this.trayStack);const M=Ho("published",.4,.1);M.position.set(En.x,On+.09,En.z+.175),M.userData.pick={kind:"tray"},this.furnish(M)}),await this.pieceGroup("bin",async()=>{this.add(await xt("bin"),Gi.x,0,Gi.z,0),this.binBalls.position.set(Gi.x,0,Gi.z),this.furnish(this.binBalls)})}async buildCoffee(){await this.pieceGroup("coffee",async()=>{const t=.45*qi;for(const e of[hi.z0+.42,hi.z0+1.24])this.add(await xt("cabinet"),hi.x,0,e,Math.PI/2);this.add(await xt("coffeeMachine"),ao.x,t,ao.z,Math.PI/2),this.add(await xt("fridge"),ro.x,0,ro.z,Math.PI/2);for(const[e,i]of[[.55,"#f1ece3"],[.75,"#4a74c9"],[1.1,"#e8742c"]]){const a=Ji(i,null);this.add(a,hi.x+.05,t,hi.z0+e,.4)}}),await this.pieceGroup("coat-rack",async()=>{this.add(await xt("coatRack"),Oi.x+.45,0,Oi.z+.85,0)})}async buildSeat(){await this.pieceGroup("seat",async()=>{const t={kind:"seat"};this.add(await xt("lounge"),Ln.x,0,Ln.z,Ln.yaw+Math.PI,t);const e=await xt("floorLamp");this.add(e,Hi.x,0,Hi.z,0,t),e.traverse(r=>{const o=r;if(o.isMesh&&o.material.name==="lamp"){const s=o.material.clone();s.emissive.set(Je.lamp),s.emissiveIntensity=0,o.material=s,this.seatLamp.bulbs.push(s)}}),this.seatLamp.light.position.set(Hi.x-.2,1.55,Hi.z+.2),this.furnish(this.seatLamp.light);const i=mn(128,128,r=>{const o=r.createRadialGradient(64,64,4,64,64,64);o.addColorStop(0,"rgba(255,205,140,0.55)"),o.addColorStop(1,"rgba(255,205,140,0)"),r.fillStyle=o,r.fillRect(0,0,128,128)}),a=new Le(new Dt(2.6,2.6),new wt({map:i,transparent:!0,opacity:0,blending:li,depthWrite:!1,toneMapped:!1}));a.rotation.x=-Math.PI/2,a.position.set(Ln.x+.3,.006,Ln.z-.1),this.furnish(a),this.seatLamp.glow=a}),await this.pieceGroup("guest-table",async()=>{this.add(await xt("coffeeTable"),Ln.x-1.1,0,Ln.z-.55,.3,{kind:"seat"})})}async buildDecor(){const t=[["plantLeafy",0],["plantSnake",.4],["pottedPlant",0],["plantCactus",0],["smallPlant",0]];for(const[e,i]of Yl.entries())await this.pieceGroup(`plant-${e}`,async()=>{const[a,r]=t[e%t.length];this.add(await xt(a),i.x,0,i.z,r)});await this.pieceGroup("boxes",async()=>{this.add(await xt("boxes"),7.1,0,3.6,-Math.PI/2)})}buildLights(){this.scene.add(this.hemi),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);const t=this.sun.shadow.camera;t.left=-12,t.right=12,t.top=12,t.bottom=-12,t.near=1,t.far=60,this.sun.shadow.radius=4,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.sun.target.position.set(2.2,0,-1.5),this.scene.add(this.sun,this.sun.target),this.fill.position.set(14,18,16),this.scene.add(this.fill,...this.windowGlow);for(const[e,i]of[[-4.5,.5],[1.4,-2.2],[1.6,1.8],[5.5,-.2]]){const a=new jn("#ffecd2",0,13,2);a.position.set(e,3.1,i),this.scene.add(a),this.ceiling.push(a)}}apply(t,e){const i=t.world,a=t.clockTime??i?.T??Date.now(),r=this.plan.timeZone??er,o=this.plan.items.find(w=>w.role==="clock"),s=o?this.itemRoots.get(o.id)?.userData.clockTexture:void 0;s&&Hs(s,a,r);const c=jm(a,r),l=Jm(c);this.outside.update(this.t,e,c,l),this.lit+=((t.lights?1:0)-this.lit)*Math.min(1,e*3);const m=1-l.night,u=.42+.35*m;this.sun.position.set(2.6+Math.cos(c/24*Math.PI*2)*2.5,Math.sin(u)*22,-6-Math.cos(u)*22),this.sun.color.copy(l.sun),this.sun.intensity=l.sunI,this.renderer.toneMappingExposure=1.2+.3*m+.1*this.lit,this.hemi.intensity=.7+1.5*m+1.6*this.lit-.7*m*this.lit,this.hemi.color.set("#8ea8d8").lerp(l.top,.3).lerp(Qn.set("#fff3e4"),.75*this.lit),this.hemi.groundColor.set("#3a2f2a").lerp(Xs.set("#7d6a5c"),.6*this.lit),this.fill.intensity=.25+.12*m+.7*this.lit+.4*m*(1-this.lit);for(const w of this.ceiling)w.intensity=30*this.lit;const f=this.outside.pane;this.windowGlow.forEach((w,C)=>{w.position.set(f.cx+(C-.5)*f.w*.5,f.cy+.2,f.z+1.3),w.color.copy(l.horizon).lerp(l.top,.4).lerp(Qn.set("#ffffff"),.45),w.intensity=Qm*m*m});const _=new Map((i?.people||[]).map(w=>[w.who,w]));for(const[w,C]of this.rigs){C.update(_.get(w),e,this.t,t.speed,this.snapNext);const S=this.lamps.get(w),M=_.get(w)?.visible&&i?.open?1:0;S.light.intensity+=(M*3.2-S.light.intensity)*Math.min(1,e*3);for(const E of S.bulbs)E.emissiveIntensity=S.light.intensity/1.6}this.snapNext=!1;const x=this.door,R=i?.door.angle??0;x.angle+=(R-x.angle)*Math.min(1,e*5),x.pivot.rotation.y=-x.angle;const p=i?.door.light?1:0;if(x.glow+=(p-x.glow)*Math.min(1,e*2),x.glass.color.set("#2a3048").lerp(Qn.set("#ffd79c"),x.glow),x.strip.color.set("#20263a").lerp(Qn.set("#ffd27a"),x.glow),x.inside.color.set("#06080f").lerp(Qn.set("#ffc982"),x.glow*.8),x.spill&&(x.spill.material.opacity=x.glow*(.22+x.angle*1.4)),x.light.intensity=x.glow*(.5+x.angle*9),x.shadow){const w=i?.door.shadow||"none",C=w==="near"?.72:w==="reading"?.4:x.glow*.12,S=x.shadow.material;S.opacity+=(C*x.glow-S.opacity)*Math.min(1,e*3),x.shadowX=w==="reading"?Math.sin(this.t*.35)*.06:0,x.shadow.position.x=io.w/2+x.shadowX,x.shadow.scale.setScalar(w==="near"?1.18:1)}const d=t.seat&&this.layout.has("seat")?1:0;this.seatLamp.on+=(d-this.seatLamp.on)*Math.min(1,e*1.2),this.seatLamp.light.intensity=this.seatLamp.on*4;for(const w of this.seatLamp.bulbs)w.emissiveIntensity=this.seatLamp.on*2.2;if(this.seatLamp.glow&&(this.seatLamp.glow.material.opacity=this.seatLamp.on*.6),i){this.drawBoard(i.kept),this.stack(this.trayStack,this.layout.has("tray")?Math.min(i.tray,40):0,()=>Vs(),(w,C)=>{w.position.set(Math.sin(C*2.3)*.015,C*.0055,Math.cos(C*1.7)*.012),w.rotation.y=Math.sin(C*1.3)*.08,w.scale.set(1,1,1)}),this.stack(this.binBalls,this.layout.has("bin")?Math.min(i.bin,16):0,()=>{const w=new Le(new Fl(.055,0),Mt(Je.paper));return w.castShadow=!0,w},(w,C)=>{const S=C*2.4,M=C<5?.06:.1;w.position.set(Math.cos(S)*M,.78+Math.floor(C/5)*.07,Math.sin(S)*M),w.rotation.set(C,C*2,0)});for(const[w,C]of this.envelopes)this.stack(C,Math.min(i.envelopes[w]||0,6),()=>ks(),(S,M)=>{S.position.set(0,M*.005+.002,0),S.rotation.y=Math.sin(M*2)*.2})}}stack(t,e,i,a){if(t.children.length!==e){for(;t.children.length>e;)t.remove(t.children[t.children.length-1]);for(;t.children.length<e;){const r=i();a(r,t.children.length),t.add(r)}}}fitDistance(t,e){const i=`${this.camera.aspect.toFixed(3)}:${t.toFixed(2)}:${e.toFixed(2)}`;if(i===this.fit.key)return this.fit.dist;const a=this.camera.clone();a.updateProjectionMatrix();const r=new ie,{minX:o,maxX:s,minZ:c,maxZ:l,wallH:m}=Pn,u=o-.2,f=s+.2,_=c-.2,x=l+.2,R=Math.sin(t),p=Math.cos(t),d=.05,w=[[u,0,_],[f,0,_],[f,0,x],[u,0,x]];p>-d&&w.push([u,m,_],[f,m,_]),p<d&&w.push([u,m,x],[f,m,x]),R>-d&&w.push([u,m,_],[u,m,x]),R<d&&w.push([f,m,_],[f,m,x]);let C=4,S=120;for(let M=0;M<22;M++){const E=(C+S)/2;this.aim(a,t,e,E,this.cam.home),a.updateMatrixWorld(!0),w.every(([g,b,D])=>(r.set(g,b,D).project(a),Math.abs(r.x)<=.97&&Math.abs(r.y)<=.93&&r.z<1))?S=E:C=E}return this.fit={key:i,dist:S},S}aim(t,e,i,a,r){t.position.set(r.x+Math.sin(e)*Math.cos(i)*a,r.y+Math.sin(i)*a,r.z+Math.cos(e)*Math.cos(i)*a),t.lookAt(r)}base(t=!1){const e=this.cam,i=this.camera.aspect<1?.28*Math.min(1,(1-this.camera.aspect)/.45):0;return{az:e.az+(t?e.azNow:e.dragAz),el:Math.max(.25,Math.min(1.15,e.el+i+(t?e.elNow:e.dragEl)))}}placeCamera(t){const e=this.cam;e.nudgeNow.lerp(e.nudge,Math.min(1,t*2.5));const i=1-Math.exp(-t*12);e.zoomNow+=(e.zoom-e.zoomNow)*i,e.panNow.lerp(e.pan,i),e.azNow+=(e.dragAz-e.azNow)*i,e.elNow+=(e.dragEl-e.elNow)*i,e.target.set(e.home.x+e.panNow.x,e.home.y,e.home.z+e.panNow.y);const a=1-.8*Math.min(1,Math.max(0,(1-e.zoomNow)/(1-vi))),r=this.reduced||this.editing?0:a,{az:o,el:s}=this.base(!0),c=o+e.nudgeNow.x*.07*(this.editing?0:a)+r*Math.sin(this.t*.075)*.05,l=Math.max(.25,Math.min(1.15,s+e.nudgeNow.y*.035*(this.editing?0:a)+r*Math.sin(this.t*.11)*.015));this.aim(this.camera,c,l,this.fitDistance(o,s)*1.02*e.zoomNow,e.target),this.cutWalls(t)}cutWalls(t){if(!this.walls.back)return;const e=this.camera.position,{minX:i,maxX:a,minZ:r,maxZ:o,wallH:s}=Pn,c={back:r-e.z,front:e.z-o,left:i-e.x,right:e.x-a};for(const l of Si){const m=this.walls[l],u=c[l];u>.4?m.cut=!0:u<-.4&&(m.cut=!1);const f=m.cut?0:1;m.h=this.wallsSet?m.h+(f-m.h)*Math.min(1,t*9):f,m.up.scale.y=xi/s+(1-xi/s)*m.h,m.up.visible=m.h>.02,m.fix.visible=m.h>.98,m.stub.visible=m.h<.995}this.wallsSet=!0}deskAt(t,e){const i=this.cam,a=this.goal;a.aspect=this.camera.aspect,a.updateProjectionMatrix();const{az:r,el:o}=this.base();this.aim(a,r,o,this.fitDistance(r,o)*1.02*i.zoom,new ie(i.home.x+i.pan.x,i.home.y,i.home.z+i.pan.y)),a.updateMatrixWorld(!0);const s=this.canvas.getBoundingClientRect();this.raycaster.setFromCamera(new Ze((t-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1),a);const c=this.raycaster.ray.intersectPlane(Zm,new ie);return c?new Ze(c.x,c.z):null}zoomAt(t,e,i){const a=this.cam,r=Math.max(vi,Math.min(Da,a.zoom*t));if(r===a.zoom)return;const o=this.deskAt(e,i);a.zoom=r;const s=this.deskAt(e,i);o&&s&&a.pan.add(o.sub(s)),this.keepPan(),this.viewChanged()}keepPan(){const t=this.cam,{minX:e,maxX:i,minZ:a,maxZ:r}=Pn,o=Math.min(1,Math.max(0,(1-t.zoom)/(1-vi)*2));t.pan.x=Math.max((e+1-t.home.x)*o,Math.min((i-1-t.home.x)*o,t.pan.x)),t.pan.y=Math.max((a+1-t.home.z)*o,Math.min((r-1-t.home.z)*o,t.pan.y))}get zoomedIn(){return this.cam.zoom<.97}viewChanged(){const t=this.cam;this.canvas.style.touchAction=this.editing||this.zoomedIn?"none":"pan-y";const e={moved:Math.abs(t.zoom-1)>.03||t.pan.lengthSq()>.01||Math.abs(t.dragAz)>.01||Math.abs(t.dragEl)>.01,zoomIn:t.zoom>vi+.001,zoomOut:t.zoom<Da-.001},i=`${e.moved}${e.zoomIn}${e.zoomOut}`;i!==this.viewKey&&(this.viewKey=i,this.onView(e))}start(){this.running||this.disposed||(this.running=!0,this.last=0,this.renderer.setAnimationLoop(this.frame))}stop(){this.running=!1,this.renderer.setAnimationLoop(null)}get isRunning(){return this.running}get debug(){return{scene:this.scene,sun:this.sun,fill:this.fill,hemi:this.hemi,ceiling:this.ceiling,renderer:this.renderer,camera:this.camera,tune:wn}}snap(){this.snapNext=!0}zoomBy(t){const e=this.canvas.getBoundingClientRect();this.zoomAt(t,e.left+e.width/2,e.top+e.height/2)}resetView(){const t=this.cam;t.azNow=Math.atan2(Math.sin(t.azNow),Math.cos(t.azNow)),t.dragAz=0,t.dragEl=0,t.zoom=1,t.pan.set(0,0),this.viewChanged()}resize(t,e){t<2||e<2||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.running||(this.placeCamera(0),this.walls.back.fix.visible&&this.outside.render(this.renderer,this.camera),this.renderer.render(this.scene,this.camera)))}screenOf(t){["seat","tray","board"].includes(t)&&!this.layout.has(t)&&(t="door");const e=new ie;if(t==="door"){const a=oo(this.layout.DOOR,0,.1);e.set(a.x,2.45,a.z)}else if(t==="seat")e.set(this.layout.SEAT.x,1.55,this.layout.SEAT.z);else if(t==="tray")e.set(this.plan.items.find(a=>a.role==="tray").x,1.25,this.plan.items.find(a=>a.role==="tray").z);else if(t==="board"){const a=this.plan.items.find(o=>o.role==="board"),r=oo(a,0,.08);e.set(r.x,a.y+.62,r.z)}else{const a=this.rigs.get(t);if(!a||!a.root.visible)return{x:0,y:0,on:!1};e.set(a.root.position.x,a.headHeight(),a.root.position.z)}e.project(this.camera);const i=this.canvas.getBoundingClientRect();return{x:(e.x+1)/2*i.width,y:(1-e.y)/2*i.height,on:e.z<1&&Math.abs(e.x)<1.05&&Math.abs(e.y)<1.15}}pickAt(t,e){const i=this.itemAt(t,e);if(this.plan.items.some(s=>s.id===i&&s.role==="clock"))return{kind:"clock"};const a=this.canvas.getBoundingClientRect(),r=new Ze((t-a.left)/a.width*2-1,-((e-a.top)/a.height)*2+1);this.raycaster.setFromCamera(r,this.camera);const o=this.raycaster.intersectObjects(this.picks,!0);for(const s of o){let c=s.object.parent;for(;c&&c.visible;)c=c.parent;if(c)continue;let l=s.object;for(;l&&!l.userData.pick;)l=l.parent;if(l)return l.userData.pick}return null}listen(){const t=this.canvas,e={signal:this.abort.signal};t.addEventListener("pointerdown",o=>{if(o.pointerType==="touch"){if(this.touches.set(o.pointerId,{x:o.clientX,y:o.clientY}),this.touches.size===2){this.editor?.cancelDrag(),this.down=null,this.startPinch();return}if(this.touches.size>2)return}if(this.editor?.pointerDown(o))return;const s=this.zoomedIn&&o.button===0&&!o.shiftKey&&!o.altKey;this.down={x:o.clientX,y:o.clientY,t:performance.now(),moved:!1,az:this.cam.dragAz,el:this.cam.dragEl,button:o.button,pan:s,grab:s?this.deskAt(o.clientX,o.clientY):null}},e),t.addEventListener("pointermove",o=>{const s=t.getBoundingClientRect();if(this.cam.nudge.set((o.clientX-s.left)/s.width*2-1,(o.clientY-s.top)/s.height*2-1),this.touches.has(o.pointerId)&&this.touches.set(o.pointerId,{x:o.clientX,y:o.clientY}),this.pinch){this.movePinch();return}if(this.editor?.pointerMove(o))return;if(this.down){const l=o.clientX-this.down.x,m=o.clientY-this.down.y;if(!this.down.moved&&Math.hypot(l,m)>5){this.down.moved=!0;try{t.setPointerCapture(o.pointerId)}catch{}}if(this.down.moved&&this.down.pan){const u=this.deskAt(o.clientX,o.clientY);this.down.grab&&u&&(this.cam.pan.add(this.down.grab.clone().sub(u)),this.keepPan()),this.viewChanged()}else this.down.moved&&(this.cam.dragAz=this.down.az-l*.004,this.cam.dragEl=Math.max(-.3,Math.min(.45,this.down.el+m*.003)),this.viewChanged());return}const c=performance.now();if(c-this.hoverAt>90){this.hoverAt=c;const l=this.pickAt(o.clientX,o.clientY);t.style.cursor=l?"pointer":"grab",this.onHover(l)}},e);const i=o=>{this.touches.delete(o.pointerId),this.pinch&&this.touches.size<2&&(this.pinch=null,this.down=null)},a=o=>{if(i(o),this.editor?.pointerUp(o))return;const s=this.down;if(this.down=null,!!s&&!s.moved&&s.button===0&&performance.now()-s.t<600){const c=this.pickAt(o.clientX,o.clientY);c&&this.onPick(c)}};t.addEventListener("pointerup",a,e),t.addEventListener("pointercancel",o=>{i(o),this.editor?.cancelDrag(),this.down=null},e),t.addEventListener("pointerleave",()=>{this.cam.nudge.set(0,0)},e),t.addEventListener("dblclick",()=>{!this.editor?.placement&&!this.editor?.sampling&&this.resetView()},e),t.addEventListener("contextmenu",o=>o.preventDefault(),e);const r=o=>{o.touches.length>1&&o.cancelable&&o.preventDefault()};t.addEventListener("touchstart",r,{...e,passive:!1}),t.addEventListener("touchmove",r,{...e,passive:!1}),t.addEventListener("wheel",o=>{if(!this.wheelZooms&&!o.ctrlKey&&!o.metaKey)return;o.preventDefault();const s=o.deltaMode===1?o.deltaY*16:o.deltaMode===2?o.deltaY*400:o.deltaY;this.zoomAt(Math.exp(s*(o.ctrlKey?.008:.0015)),o.clientX,o.clientY)},{...e,passive:!1})}pinchSpan(){const[t,e]=[...this.touches.values()];return{d:Math.max(1,Math.hypot(t.x-e.x,t.y-e.y)),a:Math.atan2(e.y-t.y,e.x-t.x),x:(t.x+e.x)/2,y:(t.y+e.y)/2}}startPinch(){const t=this.pinchSpan();this.pinch={d0:t.d,a0:t.a,zoom0:this.cam.zoom,az0:this.cam.dragAz,grab:this.deskAt(t.x,t.y)}}movePinch(){const t=this.pinch,e=this.cam,i=this.pinchSpan();e.zoom=Math.max(vi,Math.min(Da,t.zoom0*(t.d0/i.d)));const a=Math.atan2(Math.sin(i.a-t.a0),Math.cos(i.a-t.a0));e.dragAz=t.az0+Math.sign(a)*Math.max(0,Math.abs(a)-.12);const r=this.deskAt(i.x,i.y);t.grab&&r&&e.pan.add(t.grab.clone().sub(r)),this.keepPan(),this.viewChanged()}dispose(){this.disposed=!0,this.stop(),this.editor?.dispose(),this.abort.abort(),this.scene.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const i=e.material?Array.isArray(e.material)?e.material:[e.material]:[];for(const a of i){for(const r of Object.values(a))r instanceof Di&&r.dispose();a.dispose()}}),this.outside.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss()}}export{Ks as OfficeScene,wn as TUNE,jm as sfHour};
