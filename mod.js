// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,n=Object.prototype,t=n.toString,u=n.__defineGetter__,a=n.__defineSetter__,c=n.__lookupGetter__,o=n.__lookupSetter__;var i=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var f,s,l,y;if("object"!=typeof e||null===e||"[object Array]"===t.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof i||null===i||"[object Array]"===t.call(i))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+i+"`.");if((s="value"in i)&&(c.call(e,r)||o.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=i.value,e.__proto__=f):e[r]=i.value),l="get"in i,y="set"in i,s&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(e,r,i.get),y&&a&&a.call(e,r,i.set),e};function f(e,r,n){i(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var l=Object.prototype.toString;var y=Object.prototype.hasOwnProperty;var v="function"==typeof Symbol?Symbol.toStringTag:"";var p=s&&"symbol"==typeof Symbol.toStringTag?function(e){var r,n,t,u,a;if(null==e)return l.call(e);n=e[v],a=v,r=null!=(u=e)&&y.call(u,a);try{e[v]=void 0}catch(r){return l.call(e)}return t=l.call(e),r?e[v]=n:delete e[v],t}:function(e){return l.call(e)},b="function"==typeof Uint32Array;var w="function"==typeof Uint32Array?Uint32Array:null;var A,_="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var e,r,n;if("function"!=typeof w)return!1;try{r=new w(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(b&&n instanceof Uint32Array||"[object Uint32Array]"===p(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?_:function(){throw new Error("not implemented")};var m=A,N="function"==typeof Float64Array;var d="function"==typeof Float64Array?Float64Array:null;var h,U="function"==typeof Float64Array?Float64Array:void 0;h=function(){var e,r,n;if("function"!=typeof d)return!1;try{r=new d([1,3.14,-3.14,NaN]),n=r,e=(N&&n instanceof Float64Array||"[object Float64Array]"===p(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?U:function(){throw new Error("not implemented")};var j=h,g="function"==typeof Uint8Array;var I="function"==typeof Uint8Array?Uint8Array:null;var O,S="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var e,r,n;if("function"!=typeof I)return!1;try{r=new I(r=[1,3.14,-3.14,256,257]),n=r,e=(g&&n instanceof Uint8Array||"[object Uint8Array]"===p(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?S:function(){throw new Error("not implemented")};var E=O,F="function"==typeof Uint16Array;var H="function"==typeof Uint16Array?Uint16Array:null;var T,G="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var e,r,n;if("function"!=typeof H)return!1;try{r=new H(r=[1,3.14,-3.14,65536,65537]),n=r,e=(F&&n instanceof Uint16Array||"[object Uint16Array]"===p(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?G:function(){throw new Error("not implemented")};var P,L={uint16:T,uint8:E};(P=new L.uint16(1))[0]=4660;var V=52===new L.uint8(P.buffer)[0],W=!0===V?1:0,x=new j(1),M=new m(x.buffer);function k(e){return x[0]=e,M[W]}var Y=!0===V?1:0,C=new j(1),q=new m(C.buffer);function z(e,r){return C[0]=e,q[Y]=r>>>0,C[0]}function B(e){return e!=e}var D=Number.NEGATIVE_INFINITY;var J=.6931471803691238,K=1.9082149292705877e-10;function Q(e){var r,n,t,u,a,c,o,i,f,s,l,y;return 0===e?D:B(e)||e<0?NaN:(a=0,(n=k(e))<1048576&&(a-=54,n=k(e*=0x40000000000000)),n>=2146435072?e+e:(a+=(n>>20)-1023|0,a+=(i=(n&=1048575)+614244&1048576|0)>>20|0,o=(e=z(e,n|1072693248^i))-1,(1048575&2+n)<3?0===o?0===a?0:a*J+a*K:(c=o*o*(.5-.3333333333333333*o),0===a?o-c:a*J-(c-a*K-o)):(i=n-398458|0,f=440401-n|0,u=(l=(y=(s=o/(2+o))*s)*y)*function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)}(l),t=y*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))}(l),c=t+u,(i|=f)>0?(r=.5*o*o,0===a?o-(r-s*(r+c)):a*J-(r-(s*(r+c)+a*K)-o)):0===a?o-s*(o-c):a*J-(s*(o-c)-a*K-o))))}var R=Number.POSITIVE_INFINITY;var X=.6931471803691238,Z=1.9082149292705877e-10;function $(e){var r,n,t,u,a,c,o,i,f,s;if(e<-1||B(e))return NaN;if(-1===e)return D;if(e===R)return e;if(0===e)return e;if(s=1,(t=e<0?-e:e)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?e:e-e*e*.5;e>-.2928932188134525&&(s=0,u=e,n=1)}return 0!==s&&(t<9007199254740992?(a=(s=((n=k(f=1+e))>>20)-1023)>0?1-(f-e):e-(f-1),a/=f):(s=((n=k(f=e))>>20)-1023,a=0),(n&=1048575)<434334?f=z(f,1072693248|n):(s+=1,f=z(f,1071644672|n),n=1048576-n>>2),u=f-1),r=.5*u*u,0===n?0===u?s*X+(a+=s*Z):s*X-((i=r*(1-.6666666666666666*u))-(s*Z+a)-u):(i=(o=(c=u/(2+u))*c)*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+.14798198605116586*e)))))}(o),0===s?u-(r-c*(r+i)):s*X-(r-(c*(r+i)+(s*Z+a))-u))}function ee(e){return e*e}var re=Math.floor,ne=Math.ceil;function te(e){return e<0?ne(e):re(e)}var ue,ae;function ce(e){return e===R||e===D}!0===V?(ue=1,ae=0):(ue=0,ae=1);var oe,ie,fe={HIGH:ue,LOW:ae},se=new j(1),le=new m(se.buffer),ye=fe.HIGH,ve=fe.LOW;function pe(e,r){return se[0]=r,e[0]=le[ye],e[1]=le[ve],e}function be(e,r){return 1===arguments.length?pe([0,0],e):pe(e,r)}!0===V?(oe=1,ie=0):(oe=0,ie=1);var we={HIGH:oe,LOW:ie},Ae=new j(1),_e=new m(Ae.buffer),me=we.HIGH,Ne=we.LOW;function de(e,r){return _e[me]=e,_e[Ne]=r,Ae[0]}var he=[0,0];function Ue(e,r){return B(r)||ce(r)?(e[0]=r,e[1]=0,e):0!==r&&function(e){return Math.abs(e)}(r)<22250738585072014e-324?(e[0]=4503599627370496*r,e[1]=-52,e):(e[0]=r,e[1]=0,e)}var je=[0,0],ge=[0,0];function Ie(e,r){var n,t,u,a,c;return 0===r||0===e||B(e)||ce(e)?e:(function(e,r){1===arguments.length?Ue([0,0],e):Ue(e,r)}(je,e),r+=je[1],r+=function(e){var r=k(e);return(r=(2146435072&r)>>>20)-1023|0}(e=je[0]),r<-1074?(u=e,be(he,0),a=he[0],a&=2147483647,c=k(u),de(a|=c&=2147483648,he[1])):r>1023?e<0?D:R:(r<=-1023?(r+=52,t=2220446049250313e-31):t=1,be(ge,e),n=ge[0],n&=2148532223,t*de(n|=r+1023<<20,ge[1])))}function Oe(e){var r;return B(e)||e===R?e:e===D?0:e>709.782712893384?R:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<3.725290298461914e-9?1+e:function(e,r,n){var t,u,a,c;return Ie(1-(r-(t=e-r)*(a=t-(u=t*t)*(0===(c=u)?.16666666666666602:.16666666666666602+c*(c*(6613756321437934e-20+c*(4.1381367970572385e-8*c-16533902205465252e-22))-.0027777777777015593)))/(2-a)-e),n)}(e-.6931471803691238*(r=te(e<0?1.4426950408889634*e-.5:1.4426950408889634*e+.5)),1.9082149292705877e-10*r,r)}var Se=!0===V?0:1,Ee=new j(1),Fe=new m(Ee.buffer);var He=.8450629115104675;function Te(e){var r,n,t,u,a,c,o,i;if(B(e))return NaN;if(e===R)return 0;if(e===D)return 2;if(0===e)return 1;if(e<0?(r=!0,n=-e):(r=!1,n=e),n<.84375)return n<13877787807814457e-33?1-e:(u=.12837916709551256+(t=e*e)*function(e){return 0===e?-.3250421072470015:e*(e*(-23763016656650163e-21*e-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),a=1+t*function(e){return 0===e?.39791722395915535:.39791722395915535+e*(.0650222499887673+e*(.005081306281875766+e*(.00013249473800432164+-3960228278775368e-21*e)))}(t),c=u/a,e<.25?1-(e+e*c):(u=e*c,.5-(u+=e-.5)));if(n<1.25)return o=(a=n-1)*function(e){return 0===e?.41485611868374833:.41485611868374833+e*(e*(.31834661990116175+e*(e*(.035478304325618236+-.002166375594868791*e)-.11089469428239668))-.3722078760357013)}(a)-.0023621185607526594,i=1+a*function(e){return 0===e?.10642088040084423:.10642088040084423+e*(.540397917702171+e*(.07182865441419627+e*(.12617121980876164+e*(.01363708391202905+.011984499846799107*e))))}(a),r?1+He+o/i:1-He-o/i;if(n<28){if(a=1/(n*n),n<2.857142857142857)u=a*function(e){return 0===e?-.6938585727071818:e*(e*(e*(e*(e*(-9.814329344169145*e-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(a)-.009864944034847148,a=1+a*function(e){return 0===e?19.651271667439257:19.651271667439257+e*(137.65775414351904+e*(434.56587747522923+e*(645.3872717332679+e*(429.00814002756783+e*(108.63500554177944+e*(6.570249770319282+-.0604244152148581*e))))))}(a);else{if(e<-6)return 2;u=a*function(e){return 0===e?-.799283237680523:e*(e*(e*(e*(-483.5191916086514*e-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(a)-.0098649429247001,a=1+a*function(e){return 0===e?30.33806074348246:30.33806074348246+e*(325.7925129965739+e*(1536.729586084437+e*(3199.8582195085955+e*(2553.0504064331644+e*(474.52854120695537+-22.44095244658582*e)))))}(a)}return t=function(e,r){return Ee[0]=e,Fe[Se]=r>>>0,Ee[0]}(n,0),u=Oe(-t*t-.5625)*Oe((t-n)*(t+n)+u/a),r?2-u/n:u/n}return r?2:0}function Ge(e){var r;switch(re(e)){case 0:return.0007087803245410644+(.000712340910470263+(35779077297597742e-22+(1.7403143962587938e-8+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*(r=2*e-1))*r)*r)*r)*r)*r;case 1:return.0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(1.80718412721492e-8+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*(r=2*e-3))*r)*r)*r)*r)*r;case 2:return.0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(1.8771627021793087e-8+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*(r=2*e-5))*r)*r)*r)*r)*r;case 3:return.005115498386003198+(.0007572284073479166+(390964257267357e-20+(1.950416870430047e-8+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*(r=2*e-7))*r)*r)*r)*r)*r;case 4:return.006645751317267305+(.0007731040605444745+(4028951058939944e-21+(2.0271233238288382e-8+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*(r=2*e-9))*r)*r)*r)*r)*r;case 5:return.008208238997024121+(.0007894662961188171+(4152970155262265e-21+(2.1074693344544657e-8+(1.0278874108587318e-10+(4796520139061334e-28+21285907413333335e-31*(r=2*e-11))*r)*r)*r)*r)*r;case 6:return.009803953727535219+(.0008063344010834284+(4281924132973699e-21+(2.1916534346907168e-8+(1.0771535136565471e-10+(5059597262369282e-28+22573462684444446e-31*(r=2*e-13))*r)*r)*r)*r)*r;case 7:return.011433927298290302+(.0008237285838319657+(4416049531176544e-21+(2.2798861426211987e-8+(1.129129174587924e-10+(5338618936581688e-28+23944209546666666e-31*(r=2*e-15))*r)*r)*r)*r)*r;case 8:return.013099232878814654+(.0008416700246790696+(4555595898845751e-21+(2.3723907357214174e-8+(1.1839789326602696e-10+(5634616306755024e-28+25403679644444446e-31*(r=2*e-17))*r)*r)*r)*r)*r;case 9:return.014800987015587536+(.0008601809294634594+(4700826584881687e-21+(2.4694040760197315e-8+(1.2418779768752298e-10+(5948689037032026e-28+2695776456888889e-30*(r=2*e-19))*r)*r)*r)*r)*r;case 10:return.01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2.571177490088171e-8+(1.3030128534230821e-10+(6282009758687478e-28+28612737351111112e-31*(r=2*e-21))*r)*r)*r)*r)*r;case 11:return.018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2.677977707421807e-8+(1.3675822186304616e-10+(6635828774535271e-28+30375273884444443e-31*(r=2*e-23))*r)*r)*r)*r)*r;case 12:return.020136801964214277+(.0009193690873767368+(51734830914104276e-22+(2.7900878609710433e-8+(1.435797640280904e-10+(7011479031104373e-28+32252476e-22*(r=2*e-25))*r)*r)*r)*r)*r;case 13:return.021996459598282742+(.0009404024815536678+(5344391150804117e-21+(2.9078085538049375e-8+(1.507884450032973e-10+(741038136474992e-27+3425189232e-24*(r=2*e-27))*r)*r)*r)*r)*r;case 14:return.02389887718722632+(.0009621338683590018+(55225386998049015e-22+(3.0314589961047687e-8+(1.5840826497296334e-10+(7834050047241445e-28+36381553564444445e-31*(r=2*e-29))*r)*r)*r)*r)*r;case 15:return.025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3.161378216916483e-8+(1.664647874552963e-10+(828409859287854e-27+3864997576888889e-30*(r=2*e-31))*r)*r)*r)*r)*r;case 16:return.027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3.297926355324652e-8+(1.7498524159268457e-10+(8762245912484253e-28+4106620648888889e-30*(r=2*e-33))*r)*r)*r)*r)*r;case 17:return.029877251304899308+(.001031820424505735+(6104182969716206e-21+(3.441486035954272e-8+(1.839986307293409e-10+(9270322736636504e-28+43639844053333335e-31*(r=2*e-35))*r)*r)*r)*r)*r;case 18:return.03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3.592463833952192e-8+(1.9353584758781173e-10+(9810278385988926e-28+46381060817777776e-31*(r=2*e-37))*r)*r)*r)*r)*r;case 19:return.03410445055258834+(.0010823541191350532+(6535435615955393e-21+(3.7512918348533524e-8+(2.0362979635817883e-10+(10384187833037281e-28+4930062526222222e-30*(r=2*e-39))*r)*r)*r)*r)*r;case 20:return.036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3.918429294991359e-8+(2.1431552202133775e-10+(10994259106646732e-28+5240994910222222e-30*(r=2*e-41))*r)*r)*r)*r)*r;case 21:return.03854088803884051+(.001136491713417542+(7005823064124631e-21+(4.0943644083718584e-8+(2.2563034723692883e-10+(11642841011361993e-28+5572109287111111e-30*(r=2*e-43))*r)*r)*r)*r)*r;case 22:return.04084222595478596+(.0011650136437945675+(72569945502343e-19+(4.279616186185504e-8+(2.3761401711005023e-10+(12332431172381557e-28+5924680236444444e-30*(r=2*e-45))*r)*r)*r)*r)*r;case 23:return.04320162743154022+(.0011945628793917271+(751957435328492e-20+(4.474736455396099e-8+(2.503088521647295e-10+(13065684400300477e-28+6300053285333334e-30*(r=2*e-47))*r)*r)*r)*r)*r;case 24:return.04562119351381047+(.001225186260806753+(7794172005555192e-21+(4.680311983095446e-8+(2.6375990983978426e-10+(1384542137097712e-27+66996477404444446e-31*(r=2*e-49))*r)*r)*r)*r)*r;case 25:return.048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4.896966733568202e-8+(2.7801515481905746e-10+(14674637611609885e-28+7124958935111111e-30*(r=2*e-51))*r)*r)*r)*r)*r;case 26:return.05064970967698334+(.0012898555233099055+(838204284145688e-20+(5.125364265255184e-8+(2.9312563849675507e-10+(15556512782814827e-28+7577560782222223e-30*(r=2*e-53))*r)*r)*r)*r)*r;case 27:return.053263363664388864+(.0013240082443256975+(8696726001500767e-21+(5.36621027503968e-8+(3.09145687866348e-10+(16494420240828494e-28+8059107964444444e-30*(r=2*e-55))*r)*r)*r)*r)*r;case 28:return.05594660135350001+(.001359449119740819+(9026252023301638e-21+(5.6202552975056696e-8+(3.261331041050314e-10+(17491936862246368e-28+8571338168888888e-30*(r=2*e-57))*r)*r)*r)*r)*r;case 29:return.058702059496154084+(.0013962391363223647+(9371436548731279e-21+(5.8882975670265285e-8+(3.4414937110591756e-10+(1855285310975186e-27+911607367111111e-29*(r=2*e-59))*r)*r)*r)*r)*r;case 30:return.061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6.171186050734718e-8+(3.63259874182953e-10+(19681183310134517e-28+969522384e-23*(r=2*e-61))*r)*r)*r)*r)*r;case 31:return.06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6.469823660593325e-8+(3.8353412915303665e-10+(2088117611438512e-27+1031078448e-23*(r=2*e-63))*r)*r)*r)*r)*r;case 32:return.06743004563313039+(.001515365541891654+(10509857606888329e-21+(6.785170652936334e-8+(4.050460219481114e-10+(22157325110542536e-28+10964842115555555e-30*(r=2*e-65))*r)*r)*r)*r)*r;case 33:return.07050336551333886+(.001558232333649571+(1092686886686523e-20+(7.118248223961351e-8+(4.2787405890153386e-10+(2351437952227442e-27+11659571751111111e-30*(r=2*e-67))*r)*r)*r)*r)*r;case 34:return.0736641140379446+(.001602807881243882+(11364423678778208e-21+(7.470142309742318e-8+(4.521016277747649e-10+(2495735500408857e-27+12397238257777777e-30*(r=2*e-69))*r)*r)*r)*r)*r;case 35:return.07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7.842007599378154e-8+(4.778172695691648e-10+(26491544403815725e-28+13180196462222222e-30*(r=2*e-71))*r)*r)*r)*r)*r;case 36:return.08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8.235071769897904e-8+(5.051149610985711e-10+(281225284976269e-26+14010889635555555e-30*(r=2*e-73))*r)*r)*r)*r)*r;case 37:return.08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8.650639951503644e-8+(5.340944082386946e-10+(29856186620887555e-28+1489185159111111e-29*(r=2*e-75))*r)*r)*r)*r)*r;case 38:return.08725408428446171+(.0017999608886001962+(13344443080089493e-21+(9.0900994316429e-8+(5.648613497261646e-10+(3169870708003396e-27+15825697795555556e-30*(r=2*e-77))*r)*r)*r)*r)*r;case 39:return.09090812018217274+(.00185444780506577+(1390366314342612e-20+(9.554924606254991e-8+(5.975278712524205e-10+(336565973660991e-26+16815130613333334e-30*(r=2*e-79))*r)*r)*r)*r)*r;case 40:return.09467340450807549+(.0019112284419887304+(14491572616545005e-21+(1.0046682186333614e-7+(6.3221272959791e-10+(3573669397558913e-27+1786293159111111e-29*(r=2*e-81))*r)*r)*r)*r)*r;case 41:return.09855464164800445+(.0019704208544725622+(15109836875625445e-21+(1.0567036667675984e-7+(6.690416864001935e-10+(3794617185082434e-27+1897195904e-23*(r=2*e-83))*r)*r)*r)*r)*r;case 42:return.1025567788947009+(.0020321499629472857+(1576022424296218e-20+(1.1117756071353507e-7+(7.081478511009766e-10+(4029255327663256e-27+20145143075555556e-30*(r=2*e-85))*r)*r)*r)*r)*r;case 43:return.10668502059865094+(.002096547977614873+(16444612377624982e-21+(1.1700717962026153e-7+(7.496720325093842e-10+(42783716186085925e-28+2138547936e-23*(r=2*e-87))*r)*r)*r)*r)*r;case 44:return.11094484319386444+(.002163754849190817+(17164995035719656e-21+(1.2317915750735938e-7+(7.937630983149963e-10+(4542790176310636e-27+22696025653333333e-30*(r=2*e-89))*r)*r)*r)*r)*r;case 45:return.11534201115268805+(.002233918747454642+(17923489217504226e-21+(1.2971465288245997e-7+(8.405783418038907e-10+(48233721206418025e-28+24079890062222222e-30*(r=2*e-91))*r)*r)*r)*r)*r;case 46:return.11988259392684095+(.002307196569191869+(18722342718958937e-21+(1.3663611754337958e-7+(8.902838548849328e-10+(5121016156922585e-27+2554022711111111e-29*(r=2*e-93))*r)*r)*r)*r)*r;case 47:return.12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1.439673684773947e-7+(9.430549064645925e-10+(5436659058313422e-27+2708022592e-23*(r=2*e-95))*r)*r)*r)*r)*r;case 48:return.12941991566142438+(.002463768471950886+(2045082112747588e-20+(1.5173366280523906e-7+(9.990763250638903e-10+(5771276031135163e-27+28703099555555555e-30*(r=2*e-97))*r)*r)*r)*r)*r;case 49:return.13443048593088697+(.0025474249981080823+(21385669591362916e-21+(1.5996177579900442e-7+(1.0585428844575133e-9+(6125880953678788e-27+3041208014222222e-29*(r=2*e-99))*r)*r)*r)*r)*r;case 50:return.13961217543434562+(.0026349215871051762+(22371342712572568e-21+(1.6868008199296823e-7+(1.1216596910444997e-9+(6501526475309089e-27+3221039450666667e-29*(r=2*e-101))*r)*r)*r)*r)*r;case 51:return.144972871576738+(.002726467538398244+(2341087096105095e-20+(1.7791863939526378e-7+(1.1886425714330958e-9+(68993039665054284e-28+34101266222222225e-30*(r=2*e-103))*r)*r)*r)*r)*r;case 52:return.15052089272774619+(.0028222846410136237+(24507470422713398e-21+(1.8770927679626137e-7+(1.259718458758337e-9+(7320343304922983e-27+36087889048888887e-30*(r=2*e-105))*r)*r)*r)*r)*r;case 53:return.1562650139577461+(.0029226079376196627+(2566455369376845e-20+(1.9808568415654462e-7+(1.3351257759815557e-9+(7765812489104676e-27+3817342003555556e-29*(r=2*e-107))*r)*r)*r)*r)*r;case 54:return.16221449434620738+(.0030276865332726477+(26885741326534563e-21+(2.0908350604346383e-7+(1.415114814424073e-9+(8236917066597432e-27+4036095745777778e-29*(r=2*e-109))*r)*r)*r)*r)*r;case 55:return.1683791059541213+(.0031377844510793083+(28174873844911173e-21+(2.2074043807045782e-7+(1.499948105599609e-9+(8734899366193081e-27+4265352897777778e-29*(r=2*e-111))*r)*r)*r)*r)*r;case 56:return.1747691645565937+(.0032531815370903066+(29536024347344365e-21+(2.3309632627767074e-7+(1.5899007843582445e-9+(9261037523542736e-27+45054073102222224e-30*(r=2*e-113))*r)*r)*r)*r)*r;case 57:return.18139556223643702+(.0033741744168097+(309735117147095e-19+(2.461932693759229e-7+(1.6852609412267751e-9+(981664429428549e-26+4756541809777778e-29*(r=2*e-115))*r)*r)*r)*r)*r;case 58:return.18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2.600757237588632e-7+(1.7863299617388377e-9+(10403065638343878e-27+5019026583111111e-29*(r=2*e-117))*r)*r)*r)*r)*r;case 59:return.19540403413693969+(.0036342240767211326+(34096085096200906e-21+(2.7479061117017636e-7+(1.8934228504790033e-9+(11021679075323599e-27+5293117173333333e-29*(r=2*e-119))*r)*r)*r)*r)*r;case 60:return.20281109560651886+(.00377396738593236+(3579116545759241e-20+(2.9038742889416174e-7+(2.0068685374849e-9+(11673891799578381e-27+55790523093333335e-30*(r=2*e-121))*r)*r)*r)*r)*r;case 61:return.21050455062669335+(.003920681861392565+(37582602289680105e-21+(3.0691836231886877e-7+(2.1270101645763676e-9+(12361138551062899e-27+5877052016e-23*(r=2*e-123))*r)*r)*r)*r)*r;case 62:return.21849873453703333+(.004074764355468959+(3947616382098671e-20+(3.244383997013992e-7+(2.254205349151868e-9+(13084879235290859e-27+6187315326222222e-29*(r=2*e-125))*r)*r)*r)*r)*r;case 63:return.2268087999004323+(.004236635464862852+(41477956909656896e-21+(3.430054489450281e-7+(2.3888264229264067e-9+(13846596292818514e-27+6510018375111112e-29*(r=2*e-127))*r)*r)*r)*r)*r;case 64:return.23545076536988704+(.004406740920636517+(435944449162247e-19+(3.6268045617760415e-7+(2.53126064308532e-9+(14647791812837902e-27+6845312263111111e-29*(r=2*e-129))*r)*r)*r)*r)*r;case 65:return.24444156740777434+(.004585553051160578+(45832466292683086e-21+(3.835275259003303e-7+(2.6819103733055602e-9+(15489984390884758e-27+7193320636444444e-29*(r=2*e-131))*r)*r)*r)*r)*r;case 66:return.25379911500634267+(.004773572320865003+(48199253896534185e-21+(4.0561404245564733e-7+(2.8411932320871164e-9+(1637470573645832e-26+7554137982222222e-29*(r=2*e-133))*r)*r)*r)*r)*r;case 67:return.26354234756393613+(.0049713289477083785+(5070245503693037e-20+(4.2901079254268185e-7+(3.009542205890048e-9+(1730349702534734e-26+7927827336888888e-29*(r=2*e-135))*r)*r)*r)*r)*r;case 68:return.27369129607732345+(.005179384602305264+(533501522583266e-19+(4.537920884886502e-7+(3.187405724581438e-9+(1827790501024511e-26+8314418236444444e-29*(r=2*e-137))*r)*r)*r)*r)*r;case 69:return.28426714781640317+(.005398334191669514+(5615088486525581e-20+(4.800358919649474e-7+(3.3752476967570798e-9+(19299477888083468e-27+8713904913777777e-29*(r=2*e-139))*r)*r)*r)*r)*r;case 70:return.2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5.078239378174484e-7+(3.5735475025851714e-9+(2036976093701707e-26+9126244261333333e-29*(r=2*e-141))*r)*r)*r)*r)*r;case 71:return.3067905052252884+(.00587147230327454+(6224803160219768e-20+(5.372418576620094e-7+(3.782799941896024e-9+(2149029193044454e-26+9551353918222223e-29*(r=2*e-143))*r)*r)*r)*r)*r;case 72:return.3187868011117332+(.00612703411923391+(6556401225970764e-20+(5.683793028783774e-7+(4.003515135339238e-9+(22662596341239295e-27+9989110976e-23*(r=2*e-145))*r)*r)*r)*r)*r;case 73:return.33130773722152623+(.006396240664679808+(690722095929424e-19+(6.013300666188594e-7+(4.236218376588347e-9+(23888182347073697e-27+10439349811555555e-29*(r=2*e-147))*r)*r)*r)*r)*r;case 74:return.34438138658041334+(.0066798829540414+(7278379551860356e-20+(6.36192204432288e-7+(4.481449933651445e-9+(25168535651285476e-27+10901861383111111e-29*(r=2*e-149))*r)*r)*r)*r)*r;case 75:return.35803744972380175+(.006978797883488269+(7671054337145482e-20+(6.730681530891739e-7+(4.739764797584523e-9+(2650511414114305e-26+11376390933333332e-29*(r=2*e-151))*r)*r)*r)*r)*r;case 76:return.37230734890119727+(.007293870689646138+(8086485454267072e-20+(7.120648471806269e-7+(5.0117323769745884e-9+(27899342394100073e-27+11862637614222222e-29*(r=2*e-153))*r)*r)*r)*r)*r;case 77:return.3872243273055545+(.00762603751625498+(8525978581000461e-20+(7.532938330517133e-7+(5.297936136838812e-9+(2935260605416409e-26+12360253370666666e-29*(r=2*e-155))*r)*r)*r)*r)*r;case 78:return.4028235535461694+(.007976288091502973+(8990907734243825e-20+(7.968713796195619e-7+(5.5989731807360405e-9+(30866246101464866e-27+12868841946666668e-29*(r=2*e-157))*r)*r)*r)*r)*r;case 79:return.4191422315891379+(.008345668518695046+(9482718135925016e-20+(8.429185856178314e-7+(5.915453775108349e-9+(3244155303434747e-26+1338795794311111e-28*(r=2*e-159))*r)*r)*r)*r)*r;case 80:return.43621971639463786+(.00873528418282895+(.000100029291420668+(8.915614828021988e-7+(6.24800081507886e-9+(3407976098345888e-26+13917107176888888e-29*(r=2*e-161))*r)*r)*r)*r)*r;case 81:return.4540976354853433+(.009146302775554824+(.00010553137232446167+(9.429311346463863e-7+(6.597249231221996e-9+(35782041795476564e-27+14455745872e-23*(r=2*e-163))*r)*r)*r)*r)*r;case 82:return.4728200166851233+(.009579957440886046+(.00011135019058000067+(9.971637300550903e-7+(6.963845336995697e-9+(37549499088161346e-27+1500328071288889e-28*(r=2*e-165))*r)*r)*r)*r)*r;case 83:return.4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7.348446116824222e-9+(3938316232643575e-26+15559069118222223e-29*(r=2*e-167))*r)*r)*r)*r)*r;case 84:return.5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(7.75171845505687e-9+(41283980931872625e-27+1612241968e-22*(r=2*e-169))*r)*r)*r)*r)*r;case 85:return.5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8.174338306304482e-9+(43252818449517084e-27+1669259264e-22*(r=2*e-171))*r)*r)*r)*r)*r;case 86:return.557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8.616989807896932e-9+(4529044681153965e-26+17268801084444443e-29*(r=2*e-173))*r)*r)*r)*r)*r;case 87:return.5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9.080364335510602e-9+(4739754071312462e-26+1785021160888889e-28*(r=2*e-175))*r)*r)*r)*r)*r;case 88:return.6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9.565159503230623e-9+(4957467212766904e-26+18435945564444444e-29*(r=2*e-177))*r)*r)*r)*r)*r;case 89:return.6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(1.0072078109604152e-8+(5182230499568071e-26+19025081422222223e-29*(r=2*e-179))*r)*r)*r)*r)*r;case 90:return.6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1.060182703153528e-8+(5414079010583752e-26+19616655146666667e-29*(r=2*e-181))*r)*r)*r)*r)*r;case 91:return.6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(1.1155116068018043e-8+(5653036019492569e-26+20209663662222222e-29*(r=2*e-183))*r)*r)*r)*r)*r;case 92:return.7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(1.1732656736113608e-8+(5899112528756384e-26+20803065333333334e-29*(r=2*e-185))*r)*r)*r)*r)*r;case 93:return.7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(1.2335161021630225e-8+(6152306831216908e-26+21395783431111112e-29*(r=2*e-187))*r)*r)*r)*r)*r;case 94:return.7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(1.2963340087354342e-8+(6412604099806635e-26+21986708942222223e-29*(r=2*e-189))*r)*r)*r)*r)*r;case 95:return.8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1.361790294183995e-8+(6679976008397248e-26+2257470126222222e-28*(r=2*e-191))*r)*r)*r)*r)*r;case 96:return.8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(1.4299555071870523e-8+(6954380386469418e-26+23158593688888887e-29*(r=2*e-193))*r)*r)*r)*r)*r;case 97:return.8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1.500899704211653e-8+(7235760907504394e-26+23737194737777777e-29*(r=2*e-195))*r)*r)*r)*r)*r;case 98:return.9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(1.5746923065472183e-8+(7524046814172015e-26+24309291271111114e-29*(r=2*e-197))*r)*r)*r)*r)*r;case 99:return.9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1.651401954782282e-8+(7819152682936823e-26+24873652355555557e-29*(r=2*e-199))*r)*r)*r)*r)*r;default:return 1}}function Pe(e){var r;return e>=0?e>50?e>5e7?.5641895835477563/e:.5641895835477563*((r=e*e)*(r+4.5)+2)/(e*(r*(r+5)+3.75)):Ge(400/(4+e)):e<-26.7?R:(r=e*e,e<-6.1?2*Oe(r):2*Oe(r)-Ge(400/(4-e)))}function Le(e,r,n){var t;return B(e)||B(r)||B(n)||n<0?NaN:0===n?e<r?D:0:(t=(e-r)/n)<-1?Q(Pe(.7071067811865475*-t)/2)-ee(t)/2:$(-Te(.7071067811865475*t)/2)}function Ve(e){return function(){return e}}function We(e){return B(e)?Ve(NaN):function(r){if(B(r))return NaN;return r<e?D:0}}f((function(e,r){return B(e)||B(r)?NaN:e<r?D:0}),"factory",We);function xe(e,r){return B(e)||B(r)||r<0?Ve(NaN):0===r?We(e):function(n){var t=(n-e)/r;if(t<-1)return Q(Pe(.7071067811865475*-t)/2)-ee(t)/2;return $(-Te(.7071067811865475*t)/2)}}f(Le,"factory",xe);export{Le as default,xe as factory};
//# sourceMappingURL=mod.js.map
