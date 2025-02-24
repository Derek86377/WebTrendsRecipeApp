let e,t,n,r,i;var s,o,a,l,h,u,c,f,d,p,g,m,y,v,w,E,b,T,_,C,I,S,A,x,N,D,k,O,R,L,M,P,U,F,V,B,j,$,q,z,K,H,G,Q,W,Y,X,J=globalThis;(s=v||(v={})).STRING="string",s.NUMBER="number",s.INTEGER="integer",s.BOOLEAN="boolean",s.ARRAY="array",s.OBJECT="object",(o=w||(w={})).LANGUAGE_UNSPECIFIED="language_unspecified",o.PYTHON="python",(a=E||(E={})).OUTCOME_UNSPECIFIED="outcome_unspecified",a.OUTCOME_OK="outcome_ok",a.OUTCOME_FAILED="outcome_failed",a.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=["user","model","function","system"];(l=b||(b={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",l.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",l.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",l.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",l.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(h=T||(T={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",h.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",h.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",h.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",h.BLOCK_NONE="BLOCK_NONE",(u=_||(_={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",u.NEGLIGIBLE="NEGLIGIBLE",u.LOW="LOW",u.MEDIUM="MEDIUM",u.HIGH="HIGH",(c=C||(C={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",c.SAFETY="SAFETY",c.OTHER="OTHER",(f=I||(I={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",f.STOP="STOP",f.MAX_TOKENS="MAX_TOKENS",f.SAFETY="SAFETY",f.RECITATION="RECITATION",f.LANGUAGE="LANGUAGE",f.BLOCKLIST="BLOCKLIST",f.PROHIBITED_CONTENT="PROHIBITED_CONTENT",f.SPII="SPII",f.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",f.OTHER="OTHER",(d=S||(S={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",d.RETRIEVAL_QUERY="RETRIEVAL_QUERY",d.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",d.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",d.CLASSIFICATION="CLASSIFICATION",d.CLUSTERING="CLUSTERING",(p=A||(A={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",p.AUTO="AUTO",p.ANY="ANY",p.NONE="NONE",(g=x||(x={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",g.MODE_DYNAMIC="MODE_DYNAMIC";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class et extends ee{constructor(e,t){super(e),this.response=t}}class en extends ee{constructor(e,t,n,r){super(e),this.status=t,this.statusText=n,this.errorDetails=r}}class er extends ee{}(m=N||(N={})).GENERATE_CONTENT="generateContent",m.STREAM_GENERATE_CONTENT="streamGenerateContent",m.COUNT_TOKENS="countTokens",m.EMBED_CONTENT="embedContent",m.BATCH_EMBED_CONTENTS="batchEmbedContents";class ei{constructor(e,t,n,r,i){this.model=e,this.task=t,this.apiKey=n,this.stream=r,this.requestOptions=i}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",r=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",i=`${r}/${n}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}async function es(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.22.0"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let r=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(e){throw new er(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${e.message}`)}for(let[e,t]of r.entries()){if("x-goog-api-key"===e)throw new er(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new er(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function eo(e,t,n,r,i,s){let o=new ei(e,t,n,r,s);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.signal)!==void 0||(null==e?void 0:e.timeout)>=0){let n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}(s)),{method:"POST",headers:await es(o),body:i})}}async function ea(e,t,n,r,i,s={},o=fetch){let{url:a,fetchOptions:l}=await eo(e,t,n,r,i,s);return el(a,l,o)}async function el(e,t,n=fetch){let r;try{r=await n(e,t)}catch(t){!function(e,t){let n=e;throw e instanceof en||e instanceof er||((n=new ee(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n}(t,e)}return r.ok||await eh(r,e),r}async function eh(e,t){let n,r="";try{let t=await e.json();r=t.error.message,t.error.details&&(r+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new en(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${r}`,e.status,e.statusText,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),ed(e.candidates[0]))throw new et(`${ep(e)}`,e);return function(e){var t,n,r,i;let s=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(i=null===(r=e.candidates)||void 0===r?void 0:r[0].content)||void 0===i?void 0:i.parts)t.text&&s.push(t.text),t.executableCode&&s.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&s.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return s.length>0?s.join(""):""}(e)}if(e.promptFeedback)throw new et(`Text not available. ${ep(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),ed(e.candidates[0]))throw new et(`${ep(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),ec(e)[0]}if(e.promptFeedback)throw new et(`Function call not available. ${ep(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),ed(e.candidates[0]))throw new et(`${ep(e)}`,e);return ec(e)}if(e.promptFeedback)throw new et(`Function call not available. ${ep(e)}`,e)},e}function ec(e){var t,n,r,i;let s=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(i=null===(r=e.candidates)||void 0===r?void 0:r[0].content)||void 0===i?void 0:i.parts)t.functionCall&&s.push(t.functionCall);return s.length>0?s:void 0}const ef=[I.RECITATION,I.SAFETY,I.LANGUAGE];function ed(e){return!!e.finishReason&&ef.includes(e.finishReason)}function ep(e){var t,n,r;let i="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)i+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(i+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(i+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(r=e.candidates)||void 0===r?void 0:r[0]){let t=e.candidates[0];ed(t)&&(i+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(i+=`: ${t.finishMessage}`))}return i}function eg(e){return this instanceof eg?(this.v=e,this):new eg(e)}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function ey(e){let t=[],n=e.getReader();for(;;){let{done:e,value:r}=await n.read();if(e)return eu(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates){let e=0;for(let r of t.candidates)if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:e}),n.candidates[e].citationMetadata=r.citationMetadata,n.candidates[e].groundingMetadata=r.groundingMetadata,n.candidates[e].finishReason=r.finishReason,n.candidates[e].finishMessage=r.finishMessage,n.candidates[e].safetyRatings=r.safetyRatings,r.content&&r.content.parts){n.candidates[e].content||(n.candidates[e].content={role:r.content.role||"user",parts:[]});let t={};for(let i of r.content.parts)i.text&&(t.text=i.text),i.functionCall&&(t.functionCall=i.functionCall),i.executableCode&&(t.executableCode=i.executableCode),i.codeExecutionResult&&(t.codeExecutionResult=i.codeExecutionResult),0===Object.keys(t).length&&(t.text=""),n.candidates[e].content.parts.push(t)}e++}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(r)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(e,t,n,r){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function r(){return t.read().then(({value:t,done:i})=>{let s;if(i){if(n.trim()){e.error(new ee("Failed to parse stream"));return}e.close();return}let o=(n+=t).match(em);for(;o;){try{s=JSON.parse(o[1])}catch(t){e.error(new ee(`Error parsing JSON response: "${o[1]}"`));return}e.enqueue(s),o=(n=n.substring(o[0].length)).match(em)}return r()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(e,t||[]),s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(e){i[e]&&(r[e]=function(t){return new Promise(function(n,r){s.push([e,t,n,r])>1||a(e,t)})})}function a(e,t){try{var n;(n=i[e](t)).value instanceof eg?Promise.resolve(n.value.v).then(l,h):u(s[0][2],n)}catch(e){u(s[0][3],e)}}function l(e){a("next",e)}function h(e){a("throw",e)}function u(e,t){e(t),s.shift(),s.length&&a(s[0][0],s[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield eg(t.read());if(n)break;yield yield eg(eu(e))}})}(t),response:ey(n)}}(await ea(t,N.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),r))}async function ew(e,t,n,r){let i=await ea(t,N.GENERATE_CONTENT,e,!1,JSON.stringify(n),r);return{response:eu(await i.json())}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function eb(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},r=!1,i=!1;for(let s of e)"functionResponse"in s?(n.parts.push(s),i=!0):(t.parts.push(s),r=!0);if(r&&i)throw new ee("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!i)throw new ee("No content is provided for sending chat message.");return r?t:n}(t)}function eT(e){let t;return t=e.contents?e:{contents:[eb(e)]},e.systemInstruction&&(t.systemInstruction=eE(e.systemInstruction)),t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],eC={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},eI="SILENT_ERROR";class eS{constructor(e,t,n,r={}){this.model=t,this.params=n,this._requestOptions=r,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:r}=n;if(!t&&"user"!==e)throw new ee(`First content should be with role 'user', got ${e}`);if(!Z.includes(e))throw new ee(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(Z)}`);if(!Array.isArray(r))throw new ee("Content should have 'parts' property with an array of Parts");if(0===r.length)throw new ee("Each Content should have at least one part");let i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of r)for(let t of e_)t in e&&(i[t]+=1);let s=eC[e];for(let t of e_)if(!s.includes(t)&&i[t]>0)throw new ee(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,r,i,s,o,a;let l;await this._sendPromise;let h=eb(e),u={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(r=this.params)||void 0===r?void 0:r.generationConfig,tools:null===(i=this.params)||void 0===i?void 0:i.tools,toolConfig:null===(s=this.params)||void 0===s?void 0:s.toolConfig,systemInstruction:null===(o=this.params)||void 0===o?void 0:o.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,h]},c=Object.assign(Object.assign({},this._requestOptions),t);return this._sendPromise=this._sendPromise.then(()=>ew(this._apiKey,this.model,u,c)).then(e=>{var t,n;if(e.response.candidates&&e.response.candidates.length>0&&(null===(t=e.response.candidates[0])||void 0===t?void 0:t.content)!==void 0){this._history.push(h);let t=Object.assign({parts:[],role:"model"},null===(n=e.response.candidates)||void 0===n?void 0:n[0].content);this._history.push(t)}else{let t=ep(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}l=e}),await this._sendPromise,l}async sendMessageStream(e,t={}){var n,r,i,s,o,a;await this._sendPromise;let l=eb(e),h={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(r=this.params)||void 0===r?void 0:r.generationConfig,tools:null===(i=this.params)||void 0===i?void 0:i.tools,toolConfig:null===(s=this.params)||void 0===s?void 0:s.toolConfig,systemInstruction:null===(o=this.params)||void 0===o?void 0:o.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,l]},u=Object.assign(Object.assign({},this._requestOptions),t),c=ev(this._apiKey,this.model,h,u);return this._sendPromise=this._sendPromise.then(()=>c).catch(e=>{throw Error(eI)}).then(e=>e.response).then(e=>{var t;if(e.candidates&&e.candidates.length>0&&(null===(t=e.candidates[0])||void 0===t?void 0:t.content)!==void 0){this._history.push(l);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=ep(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==eI&&console.error(e)}),c}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(e,t,n,r){return(await ea(t,N.COUNT_TOKENS,e,!1,JSON.stringify(n),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(e,t,n,r){return(await ea(t,N.EMBED_CONTENT,e,!1,JSON.stringify(n),r)).json()}async function eN(e,t,n,r){let i=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await ea(t,N.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:i}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=eE(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;let r=eT(e),i=Object.assign(Object.assign({},this._requestOptions),t);return ew(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},r),i)}async generateContentStream(e,t={}){var n;let r=eT(e),i=Object.assign(Object.assign({},this._requestOptions),t);return ev(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},r),i)}startChat(e){var t;return new eS(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let n=function(e,t){var n;let r={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},i=null!=e.generateContentRequest;if(e.contents){if(i)throw new er("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=e.contents}else if(i)r=Object.assign(Object.assign({},r),e.generateContentRequest);else{let t=eb(e);r.contents=[t]}return{generateContentRequest:r}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),r=Object.assign(Object.assign({},this._requestOptions),t);return eA(this.apiKey,this.model,n,r)}async embedContent(e,t={}){let n="string"==typeof e||Array.isArray(e)?{content:eb(e)}:e,r=Object.assign(Object.assign({},this._requestOptions),t);return ex(this.apiKey,this.model,n,r)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return eN(this.apiKey,this.model,e,n)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new ee("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new eD(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new er("Cached content must contain a `name` field.");if(!e.model)throw new er("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n&&(t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue;throw new er(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let r=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new eD(this.apiKey,r,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eO={},eR=eO={};function eL(){throw Error("setTimeout has not been defined")}function eM(){throw Error("clearTimeout has not been defined")}function eP(e){if(D===setTimeout)return setTimeout(e,0);if((D===eL||!D)&&setTimeout)return D=setTimeout,setTimeout(e,0);try{return D(e,0)}catch(t){try{return D.call(null,e,0)}catch(t){return D.call(this,e,0)}}}!function(){try{D="function"==typeof setTimeout?setTimeout:eL}catch(e){D=eL}try{k="function"==typeof clearTimeout?clearTimeout:eM}catch(e){k=eM}}();var eU=[],eF=!1,eV=-1;function eB(){eF&&O&&(eF=!1,O.length?eU=O.concat(eU):eV=-1,eU.length&&ej())}function ej(){if(!eF){var e=eP(eB);eF=!0;for(var t=eU.length;t;){for(O=eU,eU=[];++eV<t;)O&&O[eV].run();eV=-1,t=eU.length}O=null,eF=!1,function(e){if(k===clearTimeout)return clearTimeout(e);if((k===eM||!k)&&clearTimeout)return k=clearTimeout,clearTimeout(e);try{k(e)}catch(t){try{return k.call(null,e)}catch(t){return k.call(this,e)}}}(e)}}function e$(e,t){this.fun=e,this.array=t}function eq(){}eR.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];eU.push(new e$(e,t)),1!==eU.length||eF||eP(ej)},e$.prototype.run=function(){this.fun.apply(null,this.array)},eR.title="browser",eR.browser=!0,eR.env={},eR.argv=[],eR.version="",eR.versions={},eR.on=eq,eR.addListener=eq,eR.once=eq,eR.off=eq,eR.removeListener=eq,eR.removeAllListeners=eq,eR.emit=eq,eR.prependListener=eq,eR.prependOnceListener=eq,eR.listeners=function(e){return[]},eR.binding=function(e){throw Error("process.binding is not supported")},eR.cwd=function(){return"/"},eR.chdir=function(e){throw Error("process.chdir is not supported")},eR.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ez=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},eK=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[n++],o=((7&i)<<18|(63&s)<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{let s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},eH={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=i>>2,u=(3&i)<<4|o>>4,c=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(c=64)),r.push(n[h],n[u],n[c],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ez(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):eK(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,a=++t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new eG;let l=i<<2|s>>4;if(r.push(l),64!==o){let e=s<<4&240|o>>2;if(r.push(e),64!==a){let e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class eG extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eQ=function(e){let t=ez(e);return eH.encodeByteArray(t,!0)},eW=function(e){return eQ(e).replace(/\./g,"")},eY=function(e){try{return eH.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},eX=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==J)return J;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,eJ=()=>{if(void 0===eO||void 0===eO.env)return;let e=void 0;if(e)return JSON.parse(e)},eZ=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&eY(e[1]);return t&&JSON.parse(t)},e0=()=>{try{return eX()||eJ()||eZ()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},e1=e=>{var t,n;return null===(n=null===(t=e0())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},e2=e=>{let t=e1(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},e6=()=>{var e;return null===(e=e0())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}class e5 extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,e5.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,e8.prototype.create)}}class e8{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){var n,r;let i=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?(n=o,r=i,n.replace(e4,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`})):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new e5(s,l,i)}}const e4=/\{\$([^}]+)}/g;function e7(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],s=t[i];if(e9(n)&&e9(s)){if(!e7(n,s))return!1}else if(n!==s)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function e9(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){return e&&e._delegate?e._delegate:e}class tt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new e3;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:tn})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){var n;let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e)===tn?void 0:n,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new tr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=[];(y=R||(R={}))[y.DEBUG=0]="DEBUG",y[y.VERBOSE=1]="VERBOSE",y[y.INFO=2]="INFO",y[y.WARN=3]="WARN",y[y.ERROR=4]="ERROR",y[y.SILENT=5]="SILENT";const to={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},ta=R.INFO,tl={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},th=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=tl[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class tu{constructor(e){this.name=e,this._logLevel=ta,this._logHandler=th,this._userLogHandler=null,ts.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?to[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const tc=(e,t)=>t.some(t=>e instanceof t),tf=new WeakMap,td=new WeakMap,tp=new WeakMap,tg=new WeakMap,tm=new WeakMap;let ty={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return td.get(e);if("objectStoreNames"===t)return e.objectStoreNames||tp.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tv(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function tv(n){if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(tv(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&tf.set(t,e)}).catch(()=>{}),tm.set(t,e),t}(n);if(tg.has(n))return tg.get(n);let r=function(n){if("function"==typeof n)return n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(tw(this),e),tv(tf.get(this))}:function(...e){return tv(n.apply(tw(this),e))}:function(e,...t){let r=n.call(tw(this),e,...t);return tp.set(r,e.sort?e.sort():[e]),tv(r)};return(n instanceof IDBTransaction&&function(e){if(td.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});td.set(e,t)}(n),tc(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,ty):n}(n);return r!==n&&(tg.set(n,r),tm.set(r,n)),r}const tw=e=>tm.get(e),tE=["get","getKey","getAll","getAllKeys","count"],tb=["put","add","delete","clear"],tT=new Map;function t_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(tT.get(t))return tT.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=tb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tE.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return tT.set(t,s),s}ty={...i=ty,get:(e,t,n)=>t_(e,t)||i.get(e,t,n),has:(e,t)=>!!t_(e,t)||i.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const tI="@firebase/app",tS="0.11.1",tA=new tu("@firebase/app"),tx="[DEFAULT]",tN={[tI]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},tD=new Map,tk=new Map,tO=new Map;function tR(e,t){try{e.container.addComponent(t)}catch(n){tA.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function tL(e){let t=e.name;if(tO.has(t))return tA.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(tO.set(t,e),tD.values()))tR(n,e);for(let t of tk.values())tR(t,e);return!0}const tM=new e8("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tM.create("app-deleted",{appName:this._name})}}function tU(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let r=Object.assign({name:tx,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw tM.create("bad-app-name",{appName:String(i)});if(n||(n=e6()),!n)throw tM.create("no-options");let s=tD.get(i);if(s){if(e7(n,s.options)&&e7(r,s.config))return s;throw tM.create("duplicate-app",{appName:i})}let o=new ti(i);for(let e of tO.values())o.addComponent(e);let a=new tP(n,r,o);return tD.set(i,a),a}function tF(e,t,n){var r;let i=null!==(r=tN[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tA.warn(e.join(" "));return}tL(new tt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const tV="firebase-heartbeat-store";let tB=null;function tj(){return tB||(tB=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=tv(o);return r&&o.addEventListener("upgradeneeded",e=>{r(tv(o.result),e.oldVersion,e.newVersion,tv(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(tV)}catch(e){console.warn(e)}}}).catch(e=>{throw tM.create("idb-open",{originalErrorMessage:e.message})})),tB}async function t$(e){try{let t=(await tj()).transaction(tV),n=await t.objectStore(tV).get(tz(e));return await t.done,n}catch(e){if(e instanceof e5)tA.warn(e.message);else{let t=tM.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});tA.warn(t.message)}}}async function tq(e,t){try{let n=(await tj()).transaction(tV,"readwrite"),r=n.objectStore(tV);await r.put(t,tz(e)),await n.done}catch(e){if(e instanceof e5)tA.warn(e.message);else{let t=tM.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});tA.warn(t.message)}}}function tz(e){return`${e.name}!${e.options.appId}`}class tK{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tG(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tH();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){let e=function(e){if(0===e.length)return -1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){tA.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=tH(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),tQ(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tQ(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=eW(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return tA.warn(e),""}}}function tH(){return new Date().toISOString().substring(0,10)}class tG{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await t$(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return tq(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return tq(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function tQ(e){return eW(JSON.stringify({version:2,heartbeats:e})).length}tL(new tt("platform-logger",e=>new tC(e),"PRIVATE")),tL(new tt("heartbeat",e=>new tK(e),"PRIVATE")),tF(tI,tS,""),tF(tI,tS,"esm2017"),tF("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tF("firebase","11.3.1","app");var tW="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==J?J:"undefined"!=typeof self?self:{},tY={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+0xd76aa478&0xffffffff;o=s+(i^(t=n+(o<<7&0xffffffff|o>>>25))&(n^i))+r[1]+0xe8c7b756&0xffffffff,o=i+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+r[2]+0x242070db&0xffffffff,o=n+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+r[3]+0xc1bdceee&0xffffffff,o=t+(s^(n=i+(o<<22&0xffffffff|o>>>10))&(i^s))+r[4]+0xf57c0faf&0xffffffff,o=s+(i^(t=n+(o<<7&0xffffffff|o>>>25))&(n^i))+r[5]+0x4787c62a&0xffffffff,o=i+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+r[6]+0xa8304613&0xffffffff,o=n+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+r[7]+0xfd469501&0xffffffff,o=t+(s^(n=i+(o<<22&0xffffffff|o>>>10))&(i^s))+r[8]+0x698098d8&0xffffffff,o=s+(i^(t=n+(o<<7&0xffffffff|o>>>25))&(n^i))+r[9]+0x8b44f7af&0xffffffff,o=i+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+r[10]+0xffff5bb1&0xffffffff,o=n+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+r[11]+0x895cd7be&0xffffffff,o=t+(s^(n=i+(o<<22&0xffffffff|o>>>10))&(i^s))+r[12]+0x6b901122&0xffffffff,o=s+(i^(t=n+(o<<7&0xffffffff|o>>>25))&(n^i))+r[13]+0xfd987193&0xffffffff,o=i+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+r[14]+0xa679438e&0xffffffff,o=n+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+r[15]+0x49b40821&0xffffffff,n=i+(o<<22&0xffffffff|o>>>10),o=t+(i^s&(n^i))+r[1]+0xf61e2562&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^i&(t^n))+r[6]+0xc040b340&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^n&(s^t))+r[11]+0x265e5a51&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(i^s))+r[0]+0xe9b6c7aa&0xffffffff,n=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(n^i))+r[5]+0xd62f105d&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^i&(t^n))+r[10]+0x2441453&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^n&(s^t))+r[15]+0xd8a1e681&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(i^s))+r[4]+0xe7d3fbc8&0xffffffff,n=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(n^i))+r[9]+0x21e1cde6&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^i&(t^n))+r[14]+0xc33707d6&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^n&(s^t))+r[3]+0xf4d50d87&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(i^s))+r[8]+0x455a14ed&0xffffffff,n=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(n^i))+r[13]+0xa9e3e905&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^i&(t^n))+r[2]+0xfcefa3f8&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^n&(s^t))+r[7]+0x676f02d9&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(i^s))+r[12]+0x8d2a4c8a&0xffffffff,o=t+((n=i+(o<<20&0xffffffff|o>>>12))^i^s)+r[5]+0xfffa3942&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^i)+r[8]+0x8771f681&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+r[11]+0x6d9d6122&0xffffffff,o=n+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+r[14]+0xfde5380c&0xffffffff,o=t+((n=i+(o<<23&0xffffffff|o>>>9))^i^s)+r[1]+0xa4beea44&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^i)+r[4]+0x4bdecfa9&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+r[7]+0xf6bb4b60&0xffffffff,o=n+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+r[10]+0xbebfbc70&0xffffffff,o=t+((n=i+(o<<23&0xffffffff|o>>>9))^i^s)+r[13]+0x289b7ec6&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^i)+r[0]+0xeaa127fa&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+r[3]+0xd4ef3085&0xffffffff,o=n+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+r[6]+0x4881d05&0xffffffff,o=t+((n=i+(o<<23&0xffffffff|o>>>9))^i^s)+r[9]+0xd9d4d039&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^i)+r[12]+0xe6db99e5&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+r[15]+0x1fa27cf8&0xffffffff,o=n+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+r[2]+0xc4ac5665&0xffffffff,n=i+(o<<23&0xffffffff|o>>>9),o=t+(i^(n|~s))+r[0]+0xf4292244&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~i))+r[7]+0x432aff97&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~n))+r[14]+0xab9423a7&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(i|~t))+r[5]+0xfc93a039&0xffffffff,n=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(n|~s))+r[12]+0x655b59c3&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~i))+r[3]+0x8f0ccc92&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~n))+r[10]+0xffeff47d&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(i|~t))+r[1]+0x85845dd1&0xffffffff,n=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(n|~s))+r[8]+0x6fa87e4f&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~i))+r[15]+0xfe2ce6e0&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~n))+r[6]+0xa3014314&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(i|~t))+r[13]+0x4e0811a1&0xffffffff,n=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(n|~s))+r[4]+0xf7537e82&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~i))+r[11]+0xbd3af235&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~n))+r[2]+0x2ad7d2bb&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(i|~t))+r[9]+0xeb86d391&0xffffffff,e.g[0]=e.g[0]+t&0xffffffff,e.g[1]=e.g[1]+(i+(o<<21&0xffffffff|o>>>11))&0xffffffff,e.g[2]=e.g[2]+i&0xffffffff,e.g[3]=e.g[3]+s&0xffffffff}function n(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.o=this.h=0},e.prototype.u=function(e,n){void 0===n&&(n=e.length);for(var r=n-this.blockSize,i=this.B,s=this.h,o=0;o<n;){if(0==s)for(;o<=r;)t(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<n;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){t(this,i),s=0;break}}else for(;o<n;)if(i[s++]=e[o++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=n},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var r,i={};function s(e){var t;return -128<=e&&128>e?(t=function(e){return new n([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=t(e)):new n([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return f(o(-e));for(var t=[],r=1,i=0;e>=r;i++)t[i]=e/r|0,r*=0x100000000;return new n(t,0)}var a=s(0),l=s(1),h=s(0x1000000);function u(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function c(e){return -1==e.h}function f(e){for(var t=e.g.length,r=[],i=0;i<t;i++)r[i]=~e.g[i];return new n(r,~e.h).add(l)}function d(e,t){return e.add(f(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function g(e,t){this.g=e,this.h=t}function m(e,t){if(u(t))throw Error("division by zero");if(u(e))return new g(a,a);if(c(e))return t=m(f(e),t),new g(f(t.g),f(t.h));if(c(t))return t=m(e,f(t)),new g(f(t.g),t.h);if(30<e.g.length){if(c(e)||c(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!u(r);){var h=s.add(r);0>=h.l(e)&&(i=i.add(n),s=h),r=v(r,1),n=v(n,1)}return t=d(e,i.j(t)),new g(i,t)}for(i=a;0<=e.l(t);){for(r=48>=(r=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,r-48),h=(s=o(n)).j(t);c(h)||0<h.l(e);)n-=r,h=(s=o(n)).j(t);u(s)&&(s=l),i=i.add(s),e=d(e,h)}return new g(i,e)}function y(e){for(var t=e.g.length+1,r=[],i=0;i<t;i++)r[i]=e.i(i)<<1|e.i(i-1)>>>31;return new n(r,e.h)}function v(e,t){var r=t>>5;t%=32;for(var i=e.g.length-r,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+r)>>>t|e.i(o+r+1)<<32-t:e.i(o+r);return new n(s,e.h)}(r=n.prototype).m=function(){if(c(this))return-f(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:0x100000000+r)*t,t*=0x100000000}return e},r.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(c(this))return"-"+f(this).toString(e);for(var t=o(Math.pow(e,6)),n=this,r="";;){var i=m(n,t).g,s=((0<(n=d(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(u(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.l=function(e){return c(e=d(this,e))?-1:+!u(e)},r.abs=function(){return c(this)?f(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,r[s]=a<<16|o}return new n(r,-0x80000000&r[r.length-1]?-1:0)},r.j=function(e){if(u(this)||u(e))return a;if(c(this))return c(e)?f(this).j(f(e)):f(f(this).j(e));if(c(e))return f(this.j(f(e)));if(0>this.l(h)&&0>e.l(h))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,r=[],i=0;i<2*t;i++)r[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,d=65535&this.i(i),g=e.i(s)>>>16,m=65535&e.i(s);r[2*i+2*s]+=d*m,p(r,2*i+2*s),r[2*i+2*s+1]+=l*m,p(r,2*i+2*s+1),r[2*i+2*s+1]+=d*g,p(r,2*i+2*s+1),r[2*i+2*s+2]+=l*g,p(r,2*i+2*s+2)}for(i=0;i<t;i++)r[i]=r[2*i+1]<<16|r[2*i];for(i=t;i<2*t;i++)r[i]=0;return new n(r,0)},r.A=function(e){return m(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)&e.i(i);return new n(r,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)|e.i(i);return new n(r,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)^e.i(i);return new n(r,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,M=tY.Md5=e,n.prototype.add=n.prototype.add,n.prototype.multiply=n.prototype.j,n.prototype.modulo=n.prototype.A,n.prototype.compare=n.prototype.l,n.prototype.toNumber=n.prototype.m,n.prototype.toString=n.prototype.toString,n.prototype.getBits=n.prototype.i,n.fromNumber=o,n.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return f(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),i=a,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),h=parseInt(t.substring(s,s+l),n);8>l?(l=o(Math.pow(n,l)),i=i.j(l).add(o(h))):i=(i=i.j(r)).add(o(h))}return i},L=tY.Integer=n}).apply(void 0!==tW?tW:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var tX="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==J?J:"undefined"!=typeof self?self:{},tJ={};(function(){var e,t,n,r="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e},i=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof tX&&tX];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var n=i;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in n))break e;n=n[o]}(t=t(s=n[e=e[e.length-1]]))!=s&&null!=t&&r(n,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,n,r,i;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),n=0,r=!1,(i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return i},i}});var s=s||{},o=this||self;function a(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e,t,n){return e.call.apply(e.bind,arguments)}function u(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function c(e,t,n){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:u).apply(null,arguments)}function f(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function d(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function p(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function g(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(a(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function m(e){return/^[\s\xa0]*$/.test(e)}function y(){var e=o.navigator;return e&&(e=e.userAgent)?e:""}function v(e){return v[" "](e),e}v[" "]=function(){};var w=-1!=y().indexOf("Gecko")&&(-1==y().toLowerCase().indexOf("webkit")||-1!=y().indexOf("Edge"))&&-1==y().indexOf("Trident")&&-1==y().indexOf("MSIE")&&-1==y().indexOf("Edge");function E(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function b(e){let t={};for(let n in e)t[n]=e[n];return t}let T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<T.length;t++)n=T[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}var C=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new I,e=>e.reset());class I{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let S,A=!1,x=new class{constructor(){this.h=this.g=null}add(e,t){let n=C.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},N=()=>{let e=o.Promise.resolve(void 0);S=()=>{e.then(D)}};var D=()=>{let e;for(var t;e=null,x.g&&(e=x.g,x.g=x.g.next,x.g||(x.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){o.setTimeout(()=>{throw e},0)}(e)}C.j(t),100>C.h&&(C.h++,t.next=C.g,C.g=t)}A=!1};function k(){this.s=this.s,this.C=this.C}function O(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}k.prototype.s=!1,k.prototype.ma=function(){this.s||(this.s=!0,this.N())},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},O.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};o.addEventListener("test",e,t),o.removeEventListener("test",e,t)}catch(e){}return e}();function L(e,t){if(O.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(w){e:{try{v(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:M[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&L.aa.h.call(this)}}d(L,O);var M={2:"touch",3:"pen",4:"mouse"};L.prototype.h=function(){L.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),K=0;function H(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++K,this.da=this.fa=!1}function G(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Q(e){this.src=e,this.g={},this.h=0}function W(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(G(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Y(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&!!n==s.capture&&s.ha==r)return i}return -1}Q.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Y(e,t,r,i);return -1<o?(t=e[o],n||(t.fa=!1)):((t=new H(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var X="closure_lm_"+(1e6*Math.random()|0),J={};function Z(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=er(e);if(a||(e[X]=a=new Q(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function e(t){return en.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)R||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(et(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ee(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[z])W(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(et(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=er(t))?(W(n,e),0==n.h&&(n.src=null,t[X]=null)):G(e)}}}function et(e){return e in J?J[e]:J[e]="on"+e}function en(e,t){if(e.da)e=!0;else{t=new L(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&ee(e),e=n.call(r,t)}return e}function er(e){return(e=e[X])instanceof Q?e:null}var ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function es(e){return"function"==typeof e?e:(e[ei]||(e[ei]=function(t){return e.handleEvent(t)}),e[ei])}function eo(){k.call(this),this.i=new Q(this),this.M=this,this.F=null}function ea(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new O(t,e);else if(t instanceof O)t.target=t.target||e;else{var i=t;_(t=new O(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=el(o,r,!0,t)&&i}if(i=el(o=t.g=e,r,!0,t)&&i,i=el(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=el(o=t.g=n[s],r,!1,t)&&i}function el(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.fa&&W(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}function eh(e,t,n){if("function"==typeof e)n&&(e=c(e,n));else if(e&&"function"==typeof e.handleEvent)e=c(e.handleEvent,e);else throw Error("Invalid listener argument");return 0x7fffffff<Number(t)?-1:o.setTimeout(e,t||0)}d(eo,k),eo.prototype[z]=!0,eo.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);else(i=l(i)?!!i.capture:!!i,r=es(r),t&&t[z])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=Y(o=t.g[n],r,i,s))&&(G(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete t.g[n],t.h--))):t&&(t=er(t))&&(n=t.g[n.toString()],t=-1,n&&(t=Y(n,r,i,s)),(r=-1<t?n[t]:null)&&ee(r))}(this,e,t,n,r)},eo.prototype.N=function(){if(eo.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)G(n[r]);delete t.g[e],t.h--}}this.F=null},eo.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},eo.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class eu extends k{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eh(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ec(e){k.call(this),this.h=e,this.g={}}d(ec,k);var ef=[];function ed(e){E(e.g,function(e,t){this.g.hasOwnProperty(t)&&ee(e)},e),e.g={}}ec.prototype.N=function(){ec.aa.N.call(this),ed(this)},ec.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ep=o.JSON.stringify,eg=o.JSON.parse,em=class{stringify(e){return o.JSON.stringify(e,void 0)}parse(e){return o.JSON.parse(e,void 0)}};function ey(){}function ev(e){return e.h||(e.h=e.i())}function ew(){}ey.prototype.h=null;var eE={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eb(){O.call(this,"d")}function eT(){O.call(this,"c")}d(eb,O),d(eT,O);var e_={},eC=null;function eI(){return eC=eC||new eo}function eS(e){O.call(this,e_.La,e)}function eA(e){let t=eI();ea(t,new eS(t))}function ex(e,t){O.call(this,e_.STAT_EVENT,e),this.stat=t}function eN(e){let t=eI();ea(t,new ex(t,e))}function eD(e,t){O.call(this,e_.Ma,e),this.size=t}function ek(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){e()},t)}function eO(){this.g=!0}function eR(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return ep(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}e_.La="serverreachability",d(eS,O),e_.STAT_EVENT="statevent",d(ex,O),e_.Ma="timingevent",d(eD,O),eO.prototype.xa=function(){this.g=!1},eO.prototype.info=function(){};var eL={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eM={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eP(){}function eU(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new ec(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eF}function eF(){this.i=null,this.g="",this.h=!1}d(eP,ey),eP.prototype.g=function(){return new XMLHttpRequest},eP.prototype.i=function(){return{}},t=new eP;var eV={},eB={};function ej(e,t,n){e.L=1,e.v=tn(e4(t)),e.m=n,e.P=!0,e$(e,null)}function e$(e,t){e.F=Date.now(),ez(e),e.A=e4(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),tg(n.i,"t",r),e.C=0,n=e.j.J,e.h=new eF,e.g=t6(e.j,n?t:null,!e.m),0<e.O&&(e.M=new eu(c(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ef[0]=i.toString()),i=ef);for(var s=0;s<i.length;s++){var o=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=es(r),t&&t[z]?t.L(n,r,l(i)?!!i.capture:!!i,s):Z(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=es(r),t&&t[z]?t.K(n,r,l(i)?!!i.capture:!!i,s):Z(t,n,r,!1,i,s)}(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?b(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),eA(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");o=2<=c.length&&"type"==c[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function eq(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function ez(e){e.S=Date.now()+e.I,eK(e,e.I)}function eK(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ek(c(e.ba,e),t)}function eH(e){e.B&&(o.clearTimeout(e.B),e.B=null)}function eG(e){0==e.j.G||e.J||tY(e.j,e)}function eQ(e){eH(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ed(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eW(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||e0(n.h,e))){if(!e.K&&e0(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)tW(n),tV(n);else break e}tH(n),eN(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=ek(c(n.Za,n),6e3));if(1>=eZ(n.h)&&n.ca){try{n.ca()}catch(e){}n.ca=void 0}}else t0(n,11)}else if((e.K||n.g==e)&&tW(n),!m(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(n.T=a[0],a=a[1],2==n.G){if("c"==a[0]){n.K=a[1],n.ia=a[2];let t=a[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));let i=a[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e1(s,s.h),s.h=null))}if(r.D){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,tt(r.I,r.D,e))}}if(n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),(r=n).qa=t2(r,r.J?r.ia:null,r.W),e.K){e2(r.h,e);var o=r.L;o&&(e.I=o),e.B&&(eH(e),ez(e)),r.g=e}else tK(r);0<n.i.length&&tj(n)}else"stop"!=a[0]&&"close"!=a[0]||t0(n,7)}else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?t0(n,7):tF(n):"noop"!=a[0]&&n.l&&n.l.ta(a),n.v=0)}}eA(4)}catch(e){}}eU.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tL(e)?t.j():this.Y(e)},eU.prototype.Y=function(e){try{if(e==this.g)e:{let f=tL(this.g);var t=this.g.Ba();let d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||tM(this.g)))){this.J||4!=f||7==t||(8==t||0>=d?eA(3):eA(2)),eH(this);var n=this.g.Z();this.X=n;t:if(eq(this)){var r=tM(this.g);e="";var i=r.length,s=4==tL(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eQ(this),eG(this);var a="";break t}this.h.i=new o.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(s&&t==i-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,h=this.g;if((l=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(l)){var u=l;break t}}u=null}if(n=u)eR(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eW(this,n);else{this.o=!1,this.s=3,eN(12),eQ(this),eG(this);break e}}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;)if((e=function(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?eB:isNaN(n=Number(t.substring(n,r)))?eV:(r+=1)+n>t.length?eB:(t=t.slice(r,r+n),e.C=r+n,t)}(this,a))==eB){4==f&&(this.s=4,eN(14),n=!1),eR(this.i,this.l,null,"[Incomplete Response]");break}else if(e==eV){this.s=4,eN(15),eR(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}else eR(this.i,this.l,e,null),eW(this,e);if(eq(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=a.length||this.h.h||(this.s=1,eN(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var c=this.j;c.g==this&&c.ba&&!c.M&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),tG(c),c.M=!0,eN(11))}}else eR(this.i,this.l,a,"[Invalid Chunked Response]"),eQ(this),eG(this)}else eR(this.i,this.l,a,null),eW(this,a);4==f&&eQ(this),this.o&&!this.J&&(4==f?tY(this.j,this):(this.o=!1,ez(this)))}else(function(e){let t={};e=(e.g&&2<=tL(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(m(e[r]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[r]);let i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,eN(12)):(this.s=0,eN(13)),eQ(this),eG(this)}}}catch(e){}finally{}},eU.prototype.cancel=function(){this.J=!0,eQ(this)},eU.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(eA(),eN(17)),eQ(this),this.s=2,eG(this)):eK(this,this.S-e)};var eY=class{constructor(e,t){this.g=e,this.map=t}};function eX(e){this.l=e||10,e=o.PerformanceNavigationTiming?0<(e=o.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eJ(e){return!!e.h||!!e.g&&e.g.size>=e.j}function eZ(e){return e.h?1:e.g?e.g.size:0}function e0(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e1(e,t){e.g?e.g.add(t):e.h=t}function e2(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e6(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return p(e.i)}function e3(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(a(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(a(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(a(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}eX.prototype.cancel=function(){if(this.i=e6(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e5=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e8(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof e8){this.h=e.h,e7(this,e.j),this.o=e.o,this.g=e.g,e9(this,e.s),this.l=e.l;var t=e.i,n=new tc;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),te(this,n),this.m=e.m}else e&&(t=String(e).match(e5))?(this.h=!1,e7(this,t[1]||"",!0),this.o=tr(t[2]||""),this.g=tr(t[3]||"",!0),e9(this,t[4]),this.l=tr(t[5]||"",!0),te(this,t[6]||"",!0),this.m=tr(t[7]||"")):(this.h=!1,this.i=new tc(null,this.h))}function e4(e){return new e8(e)}function e7(e,t,n){e.j=n?tr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function e9(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function te(e,t,n){var r,i;t instanceof tc?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tf(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(td(this,t),tg(this,n,e))},r)),r.j=i):(n||(t=ti(t,th)),e.i=new tc(t,e.h))}function tt(e,t,n){e.i.set(t,n)}function tn(e){return tt(e,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),e}function tr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ti(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ts),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ts(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}e8.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ti(t,to,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ti(t,to,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ti(n,"/"==n.charAt(0)?tl:ta,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",ti(n,tu)),e.join("")};var to=/[#\/\?@]/g,ta=/[#\?:]/g,tl=/[#\?]/g,th=/[#\?@]/g,tu=/#/g;function tc(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tf(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function td(e,t){tf(e),t=tm(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tp(e,t){return tf(e),t=tm(e,t),e.g.has(t)}function tg(e,t,n){td(e,t),0<n.length&&(e.i=null,e.g.set(tm(e,t),p(n)),e.h+=n.length)}function tm(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ty(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(e){}}function tv(){this.g=new em}function tw(e){this.l=e.Ub||null,this.j=e.eb||!1}function tE(e,t){eo.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tb(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tT(e){e.readyState=4,e.l=null,e.j=null,e.v=null,t_(e)}function t_(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tC(e){let t="";return E(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function tI(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tC(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):tt(e,t,n))}function tS(e){eo.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(n=tc.prototype).add=function(e,t){tf(this),this.i=null,e=tm(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},n.forEach=function(e,t){tf(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},n.na=function(){tf(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},n.V=function(e){tf(this);let t=[];if("string"==typeof e)tp(this,e)&&(t=t.concat(this.g.get(tm(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},n.set=function(e,t){return tf(this),this.i=null,tp(this,e=tm(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},n.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},d(tw,ey),tw.prototype.g=function(){return new tE(this.l,this.j)},tw.prototype.i=(e={},function(){return e}),d(tE,eo),(n=tE.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,t_(this)},n.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||o).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tT(this)),this.readyState=0},n.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,t_(this)),this.g&&(this.readyState=3,t_(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==o.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tb(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},n.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tT(this):t_(this),3==this.readyState&&tb(this)}},n.Ra=function(e){this.g&&(this.response=this.responseText=e,tT(this))},n.Qa=function(e){this.g&&(this.response=e,tT(this))},n.ga=function(){this.g&&tT(this)},n.setRequestHeader=function(e,t){this.u.append(e,t)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tE.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),d(tS,eo);var tA=/^https?$/i,tx=["POST","PUT"];function tN(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tD(e),tO(e)}function tD(e){e.A||(e.A=!0,ea(e,"complete"),ea(e,"error"))}function tk(e){if(e.h&&void 0!==s&&(!e.v[1]||4!=tL(e)||2!=e.Z())){if(e.u&&4==tL(e))eh(e.Ea,0,e);else if(ea(e,"readystatechange"),4==tL(e)){e.h=!1;try{let s=e.Z();switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break;default:r=!1}if(!(t=r)){if(n=0===s){var i=String(e.D).match(e5)[1]||null;!i&&o.self&&o.self.location&&(i=o.self.location.protocol.slice(0,-1)),n=!tA.test(i?i.toLowerCase():"")}t=n}if(t)ea(e,"complete"),ea(e,"success");else{e.m=6;try{var a=2<tL(e)?e.g.statusText:""}catch(e){a=""}e.l=a+" ["+e.Z()+"]",tD(e)}}finally{tO(e)}}}}function tO(e,t){if(e.g){tR(e);let n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||ea(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function tR(e){e.I&&(o.clearTimeout(e.I),e.I=null)}function tL(e){return e.g?e.g.readyState:0}function tM(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tP(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function tU(e){this.Aa=0,this.i=[],this.j=new eO,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tP("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tP("baseRetryDelayMs",5e3,e),this.cb=tP("retryDelaySeedMs",1e4,e),this.Wa=tP("forwardChannelMaxRetries",2,e),this.wa=tP("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new eX(e&&e.concurrentRequestLimit),this.Da=new tv,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tF(e){if(tB(e),3==e.G){var t=e.U++,n=e4(e.I);if(tt(n,"SID",e.K),tt(n,"RID",t),tt(n,"TYPE","terminate"),tq(e,n),(t=new eU(e,e.j,t)).L=2,t.v=tn(e4(n)),n=!1,o.navigator&&o.navigator.sendBeacon)try{n=o.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&o.Image&&((new Image).src=t.v,n=!0),n||(t.g=t6(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ez(t)}t1(e)}function tV(e){e.g&&(tG(e),e.g.cancel(),e.g=null)}function tB(e){tV(e),e.u&&(o.clearTimeout(e.u),e.u=null),tW(e),e.h.cancel(),e.s&&("number"==typeof e.s&&o.clearTimeout(e.s),e.s=null)}function tj(e){if(!eJ(e.h)&&!e.s){e.s=!0;var t=e.Ga;S||N(),A||(S(),A=!0),x.add(t,e),e.B=0}}function t$(e,t){var n;n=t?t.l:e.U++;let r=e4(e.I);tt(r,"SID",e.K),tt(r,"RID",n),tt(r,"AID",e.T),tq(e,r),e.m&&e.o&&tI(r,e.m,e.o),n=new eU(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tz(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e1(e.h,n),ej(n,r,t)}function tq(e,t){e.H&&E(e.H,function(e,n){tt(t,n,e)}),e.l&&e3({},function(e,n){tt(t,n,e)})}function tz(e,t,n){n=Math.min(e.i.length,n);var r=e.l?c(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g,a=i[o].map;if(0>(n-=t))t=Math.max(0,i[o].g-100),s=!1;else try{!function(e,t,n){let r=n||"";try{e3(e,function(e,n){let i=e;l(e)&&(i=ep(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tK(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;S||N(),A||(S(),A=!0),x.add(t,e),e.v=0}}function tH(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=ek(c(e.Fa,e),tZ(e,e.v)),e.v++,!0)}function tG(e){null!=e.A&&(o.clearTimeout(e.A),e.A=null)}function tQ(e){e.g=new eU(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=e4(e.qa);tt(t,"RID","rpc"),tt(t,"SID",e.K),tt(t,"AID",e.T),tt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&tt(t,"TO",e.ja),tt(t,"TYPE","xmlhttp"),tq(e,t),e.m&&e.o&&tI(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=tn(e4(t)),n.m=null,n.P=!0,e$(n,e)}function tW(e){null!=e.C&&(o.clearTimeout(e.C),e.C=null)}function tY(e,t){var n=null;if(e.g==t){tW(e),tG(e),e.g=null;var r=2}else{if(!e0(e.h,t))return;n=t.D,e2(e.h,t),r=1}if(0!=e.G){if(t.o){if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i,s=e.B;ea(r=eI(),new eD(r,n)),tj(e)}else tK(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==r&&(i=t,!(eZ(e.h)>=e.h.j-+!!e.s)&&(e.s?(e.i=i.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=ek(c(e.Ga,e,i),tZ(e,e.B)),e.B++,!0)))||2==r&&tH(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),s){case 1:t0(e,5);break;case 4:t0(e,10);break;case 3:t0(e,6);break;default:t0(e,2)}}}function tZ(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function t0(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.fb,e),r=e.Xa;let t=!r;r=new e8(r||"//www.google.com/images/cleardot.gif"),o.location&&"http"==o.location.protocol||e7(r,"https"),tn(r),t?function(e,t){let n=new eO;if(o.Image){let r=new Image;r.onload=f(ty,n,"TestLoadImage: loaded",!0,t,r),r.onerror=f(ty,n,"TestLoadImage: error",!1,t,r),r.onabort=f(ty,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=f(ty,n,"TestLoadImage: timeout",!1,t,r),o.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){let n=new eO,r=new AbortController,i=setTimeout(()=>{r.abort(),ty(n,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:r.signal}).then(e=>{clearTimeout(i),e.ok?ty(n,"TestPingServer: ok",!0,t):ty(n,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),ty(n,"TestPingServer: error",!1,t)})}(r.toString(),n)}else eN(2);e.G=0,e.l&&e.l.sa(t),t1(e),tB(e)}function t1(e){if(e.G=0,e.ka=[],e.l){let t=e6(e.h);(0!=t.length||0!=e.i.length)&&(g(e.ka,t),g(e.ka,e.i),e.h.i.length=0,p(e.i),e.i.length=0),e.l.ra()}}function t2(e,t,n){var r=n instanceof e8?e4(n):new e8(n);if(""!=r.g)t&&(r.g=t+"."+r.g),e9(r,r.s);else{var i=o.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new e8(null);r&&e7(s,r),t&&(s.g=t),i&&e9(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.ya,n&&t&&tt(r,n,t),tt(r,"VER",e.la),tq(e,r),r}function t6(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tS(e.Ca&&!e.pa?new tw({eb:n}):e.pa)).Ha(e.J),t}function t3(){}function t5(){}function t8(e,t){eo.call(this),this.g=new tU(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!m(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!m(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new t9(this)}function t4(e){eb.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t7(){eT.call(this),this.status=1}function t9(e){this.g=e}(n=tS.prototype).Ha=function(e){this.J=e},n.ea=function(e,n,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);n=n?n.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?ev(this.o):ev(t),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(n,String(e),!0),this.B=!1}catch(e){tN(this,e);return}if(e=r||"",r=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)r.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())r.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[t,a]of(i=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),s=o.FormData&&e instanceof o.FormData,!(0<=Array.prototype.indexOf.call(tx,n,void 0))||i||s||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(t,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tR(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tN(this,e)}},n.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,ea(this,"complete"),ea(this,"abort"),tO(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tO(this,!0)),tS.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tk(this):this.bb())},n.bb=function(){tk(this)},n.isActive=function(){return!!this.g},n.Z=function(){try{return 2<tL(this)?this.g.status:-1}catch(e){return -1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),eg(t)}},n.Ba=function(){return this.m},n.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(n=tU.prototype).la=8,n.G=1,n.connect=function(e,t,n,r){eN(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=t2(this,null,this.W),tj(this)},n.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new eU(this,this.j,e),s=this.o;if(this.S&&(s?_(s=b(s),this.S):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.map&&"string"==typeof(r=r.map.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=tz(this,i,t),tt(n=e4(this.I),"RID",e),tt(n,"CVER",22),this.D&&tt(n,"X-HTTP-Session-Id",this.D),tq(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(tC(s)))+"&"+t:this.m&&tI(n,this.m,s)),e1(this.h,i),this.Ua&&tt(n,"TYPE","init"),this.P?(tt(n,"$req",t),tt(n,"SID","null"),i.T=!0,ej(i,n,null)):ej(i,n,t),this.G=2}}else 3==this.G&&(e?t$(this,e):0==this.i.length||eJ(this.h)||t$(this))}},n.Fa=function(){if(this.u=null,tQ(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=ek(c(this.ab,this),e)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eN(10),tV(this),tQ(this))},n.Za=function(){null!=this.C&&(this.C=null,tV(this),tH(this),eN(19))},n.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eN(2)):(this.j.info("Failed to ping google.com"),eN(1))},n.isActive=function(){return!!this.l&&this.l.isActive(this)},(n=t3.prototype).ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){},t5.prototype.g=function(e,t){return new t8(e,t)},d(t8,eo),t8.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t8.prototype.close=function(){tF(this.g)},t8.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ep(e),e=n);t.i.push(new eY(t.Ya++,e)),3==t.G&&tj(t)},t8.prototype.N=function(){this.g.l=null,delete this.j,tF(this.g),delete this.g,t8.aa.N.call(this)},d(t4,eb),d(t7,eT),d(t9,t3),t9.prototype.ua=function(){ea(this.g,"a")},t9.prototype.ta=function(e){ea(this.g,new t4(e))},t9.prototype.sa=function(e){ea(this.g,new t7)},t9.prototype.ra=function(){ea(this.g,"b")},t5.prototype.createWebChannel=t5.prototype.g,t8.prototype.send=t8.prototype.o,t8.prototype.open=t8.prototype.m,t8.prototype.close=t8.prototype.close,q=tJ.createWebChannelTransport=function(){return new t5},$=tJ.getStatEventTarget=function(){return eI()},j=tJ.Event=e_,B=tJ.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eL.NO_ERROR=0,eL.TIMEOUT=8,eL.HTTP_ERROR=6,V=tJ.ErrorCode=eL,eM.COMPLETE="complete",F=tJ.EventType=eM,ew.EventType=eE,eE.OPEN="a",eE.CLOSE="b",eE.ERROR="c",eE.MESSAGE="d",eo.prototype.listen=eo.prototype.K,U=tJ.WebChannel=ew,tJ.FetchXmlHttpFactory=tw,tS.prototype.listenOnce=tS.prototype.L,tS.prototype.getLastError=tS.prototype.Ka,tS.prototype.getLastErrorCode=tS.prototype.Ba,tS.prototype.getStatus=tS.prototype.Z,tS.prototype.getResponseJson=tS.prototype.Oa,tS.prototype.getResponseText=tS.prototype.oa,tS.prototype.send=tS.prototype.ea,tS.prototype.setWithCredentials=tS.prototype.Ha,P=tJ.XhrIo=tS}).apply(void 0!==tX?tX:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),z=function(e){var t,n,r=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");-1===n&&(n=t);var r=n===t?0:4-n%4;return[n,r]}(e),i=r[0],s=r[1],o=new t1((i+s)*3/4-s),a=0,l=s>0?i-4:i;for(n=0;n<l;n+=4)t=t0[e.charCodeAt(n)]<<18|t0[e.charCodeAt(n+1)]<<12|t0[e.charCodeAt(n+2)]<<6|t0[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;return 2===s&&(t=t0[e.charCodeAt(n)]<<2|t0[e.charCodeAt(n+1)]>>4,o[a++]=255&t),1===s&&(t=t0[e.charCodeAt(n)]<<10|t0[e.charCodeAt(n+1)]<<4|t0[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t),o},K=function(e){for(var t,n=e.length,r=n%3,i=[],s=0,o=n-r;s<o;s+=16383)i.push(function(e,t,n){for(var r,i=[],s=t;s<n;s+=3)r=(e[s]<<16&0xff0000)+(e[s+1]<<8&65280)+(255&e[s+2]),i.push(tZ[r>>18&63]+tZ[r>>12&63]+tZ[r>>6&63]+tZ[63&r]);return i.join("")}(e,s,s+16383>o?o:s+16383));return 1===r?i.push(tZ[(t=e[n-1])>>2]+tZ[t<<4&63]+"=="):2===r&&i.push(tZ[(t=(e[n-2]<<8)+e[n-1])>>10]+tZ[t>>4&63]+tZ[t<<2&63]+"="),i.join("")};for(var tZ=[],t0=[],t1="undefined"!=typeof Uint8Array?Uint8Array:Array,t2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t6=0,t3=t2.length;t6<t3;++t6)tZ[t6]=t2[t6],t0[t2.charCodeAt(t6)]=t6;t0["-".charCodeAt(0)]=62,t0["_".charCodeAt(0)]=63,H=function(e,t,n,r,i){var s,o,a=8*i-r-1,l=(1<<a)-1,h=l>>1,u=-7,c=n?i-1:0,f=n?-1:1,d=e[t+c];for(c+=f,s=d&(1<<-u)-1,d>>=-u,u+=a;u>0;s=256*s+e[t+c],c+=f,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=r;u>0;o=256*o+e[t+c],c+=f,u-=8);if(0===s)s=1-h;else{if(s===l)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,r),s-=h}return(d?-1:1)*o*Math.pow(2,s-r)},G=function(e,t,n,r,i,s){var o,a,l,h=8*s-i-1,u=(1<<h)-1,c=u>>1,f=5960464477539062e-23*(23===i),d=r?0:s-1,p=r?1:-1,g=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(a=+!!isNaN(t),o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+c>=1?t+=f/l:t+=f*Math.pow(2,1-c),t*l>=2&&(o++,l/=2),o+c>=u?(a=0,o=u):o+c>=1?(a=(t*l-1)*Math.pow(2,i),o+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;e[n+d]=255&a,d+=p,a/=256,i-=8);for(o=o<<i|a,h+=i;h>0;e[n+d]=255&o,d+=p,o/=256,h-=8);e[n+d-p]|=128*g};var t5="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function t8(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,t4.prototype),t}function t4(e,t,n){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return ne(e)}return t7(e,t,n)}function t7(e,t,n){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!t4.isEncoding(t))throw TypeError("Unknown encoding: "+t);var n=0|ni(e,t),r=t8(n),i=r.write(e,t);return i!==n&&(r=r.slice(0,i)),r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(nw(e,Uint8Array)){var t=new Uint8Array(e);return nn(t.buffer,t.byteOffset,t.byteLength)}return nt(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(nw(e,ArrayBuffer)||e&&nw(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(nw(e,SharedArrayBuffer)||e&&nw(e.buffer,SharedArrayBuffer)))return nn(e,t,n);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return t4.from(r,t,n);var i=function(e){if(t4.isBuffer(e)){var t=0|nr(e.length),n=t8(t);return 0===n.length||e.copy(n,0,0,t),n}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?t8(0):nt(e):"Buffer"===e.type&&Array.isArray(e.data)?nt(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return t4.from(e[Symbol.toPrimitive]("string"),t,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function t9(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function ne(e){return t9(e),t8(e<0?0:0|nr(e))}function nt(e){for(var t=e.length<0?0:0|nr(e.length),n=t8(t),r=0;r<t;r+=1)n[r]=255&e[r];return n}function nn(e,t,n){var r;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),t4.prototype),r}function nr(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function ni(e,t){if(t4.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||nw(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return nm(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return ny(e).length;default:if(i)return r?-1:nm(e).length;t=(""+t).toLowerCase(),i=!0}}function ns(e,t,n){var r,i,s,o=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||(n>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",s=t;s<n;++s)i+=nE[e[s]];return i}(this,t,n);case"utf8":case"utf-8":return nh(this,t,n);case"ascii":return function(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}(this,t,n);case"latin1":case"binary":return function(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}(this,t,n);case"base64":return r=this,i=t,s=n,0===i&&s===r.length?K(r):K(r.slice(i,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,n){for(var r=e.slice(t,n),i="",s=0;s<r.length-1;s+=2)i+=String.fromCharCode(r[s]+256*r[s+1]);return i}(this,t,n);default:if(o)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}function no(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function na(e,t,n,r,i){var s;if(0===e.length)return -1;if("string"==typeof n?(r=n,n=0):n>0x7fffffff?n=0x7fffffff:n<-0x80000000&&(n=-0x80000000),(s=n*=1)!=s&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return -1;n=e.length-1}else if(n<0){if(!i)return -1;n=0}if("string"==typeof t&&(t=t4.from(t,r)),t4.isBuffer(t))return 0===t.length?-1:nl(e,t,n,r,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):nl(e,[t],n,r,i);throw TypeError("val must be string, number or Buffer")}function nl(e,t,n,r,i){var s,o=1,a=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,n/=2}function h(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){var u=-1;for(s=n;s<a;s++)if(h(e,s)===h(t,-1===u?0:s-u)){if(-1===u&&(u=s),s-u+1===l)return u*o}else -1!==u&&(s-=s-u),u=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){for(var c=!0,f=0;f<l;f++)if(h(e,s+f)!==h(t,f)){c=!1;break}if(c)return s}return -1}function nh(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var s,o,a,l,h=e[i],u=null,c=h>239?4:h>223?3:h>191?2:1;if(i+c<=n)switch(c){case 1:h<128&&(u=h);break;case 2:(192&(s=e[i+1]))==128&&(l=(31&h)<<6|63&s)>127&&(u=l);break;case 3:s=e[i+1],o=e[i+2],(192&s)==128&&(192&o)==128&&(l=(15&h)<<12|(63&s)<<6|63&o)>2047&&(l<55296||l>57343)&&(u=l);break;case 4:s=e[i+1],o=e[i+2],a=e[i+3],(192&s)==128&&(192&o)==128&&(192&a)==128&&(l=(15&h)<<18|(63&s)<<12|(63&o)<<6|63&a)>65535&&l<1114112&&(u=l)}null===u?(u=65533,c=1):u>65535&&(u-=65536,r.push(u>>>10&1023|55296),u=56320|1023&u),r.push(u),i+=c}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}function nu(e,t,n){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>n)throw RangeError("Trying to access beyond buffer length")}function nc(e,t,n,r,i,s){if(!t4.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(n+r>e.length)throw RangeError("Index out of range")}function nf(e,t,n,r,i,s){if(n+r>e.length||n<0)throw RangeError("Index out of range")}function nd(e,t,n,r,i){return t*=1,n>>>=0,i||nf(e,t,n,4,34028234663852886e22,-34028234663852886e22),G(e,t,n,r,23,4),n+4}function np(e,t,n,r,i){return t*=1,n>>>=0,i||nf(e,t,n,8,17976931348623157e292,-17976931348623157e292),G(e,t,n,r,52,8),n+8}t4.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),t4.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(t4.prototype,"parent",{enumerable:!0,get:function(){if(t4.isBuffer(this))return this.buffer}}),Object.defineProperty(t4.prototype,"offset",{enumerable:!0,get:function(){if(t4.isBuffer(this))return this.byteOffset}}),t4.poolSize=8192,t4.from=function(e,t,n){return t7(e,t,n)},Object.setPrototypeOf(t4.prototype,Uint8Array.prototype),Object.setPrototypeOf(t4,Uint8Array),t4.alloc=function(e,t,n){return(t9(e),e<=0)?t8(e):void 0!==t?"string"==typeof n?t8(e).fill(t,n):t8(e).fill(t):t8(e)},t4.allocUnsafe=function(e){return ne(e)},t4.allocUnsafeSlow=function(e){return ne(e)},t4.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==t4.prototype},t4.compare=function(e,t){if(nw(e,Uint8Array)&&(e=t4.from(e,e.offset,e.byteLength)),nw(t,Uint8Array)&&(t=t4.from(t,t.offset,t.byteLength)),!t4.isBuffer(e)||!t4.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var n=e.length,r=t.length,i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:+(r<n)},t4.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},t4.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return t4.alloc(0);if(void 0===t)for(n=0,t=0;n<e.length;++n)t+=e[n].length;var n,r=t4.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var s=e[n];if(nw(s,Uint8Array))i+s.length>r.length?t4.from(s).copy(r,i):Uint8Array.prototype.set.call(r,s,i);else if(t4.isBuffer(s))s.copy(r,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=s.length}return r},t4.byteLength=ni,t4.prototype._isBuffer=!0,t4.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)no(this,t,t+1);return this},t4.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)no(this,t,t+3),no(this,t+1,t+2);return this},t4.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)no(this,t,t+7),no(this,t+1,t+6),no(this,t+2,t+5),no(this,t+3,t+4);return this},t4.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?nh(this,0,e):ns.apply(this,arguments)},t4.prototype.toLocaleString=t4.prototype.toString,t4.prototype.equals=function(e){if(!t4.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===t4.compare(this,e)},t4.prototype.inspect=function(){var e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},t5&&(t4.prototype[t5]=t4.prototype.inspect),t4.prototype.compare=function(e,t,n,r,i){if(nw(e,Uint8Array)&&(e=t4.from(e,e.offset,e.byteLength)),!t4.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return -1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,i>>>=0,this===e)return 0;for(var s=i-r,o=n-t,a=Math.min(s,o),l=this.slice(r,i),h=e.slice(t,n),u=0;u<a;++u)if(l[u]!==h[u]){s=l[u],o=h[u];break}return s<o?-1:+(o<s)},t4.prototype.includes=function(e,t,n){return -1!==this.indexOf(e,t,n)},t4.prototype.indexOf=function(e,t,n){return na(this,e,t,n,!0)},t4.prototype.lastIndexOf=function(e,t,n){return na(this,e,t,n,!1)},t4.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i,s,o,a,l,h,u,c,f=this.length-t;if((void 0===n||n>f)&&(n=f),e.length>0&&(n<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var d=!1;;)switch(r){case"hex":return function(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var s=t.length;r>s/2&&(r=s/2);for(var o=0;o<r;++o){var a,l=parseInt(t.substr(2*o,2),16);if((a=l)!=a)break;e[n+o]=l}return o}(this,e,t,n);case"utf8":case"utf-8":return i=t,s=n,nv(nm(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return o=t,a=n,nv(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(e),this,o,a);case"base64":return l=t,h=n,nv(ny(e),this,l,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,c=n,nv(function(e,t){for(var n,r,i=[],s=0;s<e.length&&!((t-=2)<0);++s)r=(n=e.charCodeAt(s))>>8,i.push(n%256),i.push(r);return i}(e,this.length-u),this,u,c);default:if(d)throw TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),d=!0}},t4.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},t4.prototype.slice=function(e,t){var n=this.length;e=~~e,t=void 0===t?n:~~t,e<0?(e+=n)<0&&(e=0):e>n&&(e=n),t<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var r=this.subarray(e,t);return Object.setPrototypeOf(r,t4.prototype),r},t4.prototype.readUintLE=t4.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||nu(e,t,this.length);for(var r=this[e],i=1,s=0;++s<t&&(i*=256);)r+=this[e+s]*i;return r},t4.prototype.readUintBE=t4.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||nu(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},t4.prototype.readUint8=t4.prototype.readUInt8=function(e,t){return e>>>=0,t||nu(e,1,this.length),this[e]},t4.prototype.readUint16LE=t4.prototype.readUInt16LE=function(e,t){return e>>>=0,t||nu(e,2,this.length),this[e]|this[e+1]<<8},t4.prototype.readUint16BE=t4.prototype.readUInt16BE=function(e,t){return e>>>=0,t||nu(e,2,this.length),this[e]<<8|this[e+1]},t4.prototype.readUint32LE=t4.prototype.readUInt32LE=function(e,t){return e>>>=0,t||nu(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},t4.prototype.readUint32BE=t4.prototype.readUInt32BE=function(e,t){return e>>>=0,t||nu(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},t4.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||nu(e,t,this.length);for(var r=this[e],i=1,s=0;++s<t&&(i*=256);)r+=this[e+s]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},t4.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||nu(e,t,this.length);for(var r=t,i=1,s=this[e+--r];r>0&&(i*=256);)s+=this[e+--r]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},t4.prototype.readInt8=function(e,t){return(e>>>=0,t||nu(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},t4.prototype.readInt16LE=function(e,t){e>>>=0,t||nu(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?0xffff0000|n:n},t4.prototype.readInt16BE=function(e,t){e>>>=0,t||nu(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?0xffff0000|n:n},t4.prototype.readInt32LE=function(e,t){return e>>>=0,t||nu(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},t4.prototype.readInt32BE=function(e,t){return e>>>=0,t||nu(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},t4.prototype.readFloatLE=function(e,t){return e>>>=0,t||nu(e,4,this.length),H(this,e,!0,23,4)},t4.prototype.readFloatBE=function(e,t){return e>>>=0,t||nu(e,4,this.length),H(this,e,!1,23,4)},t4.prototype.readDoubleLE=function(e,t){return e>>>=0,t||nu(e,8,this.length),H(this,e,!0,52,8)},t4.prototype.readDoubleBE=function(e,t){return e>>>=0,t||nu(e,8,this.length),H(this,e,!1,52,8)},t4.prototype.writeUintLE=t4.prototype.writeUIntLE=function(e,t,n,r){if(e*=1,t>>>=0,n>>>=0,!r){var i=Math.pow(2,8*n)-1;nc(this,e,t,n,i,0)}var s=1,o=0;for(this[t]=255&e;++o<n&&(s*=256);)this[t+o]=e/s&255;return t+n},t4.prototype.writeUintBE=t4.prototype.writeUIntBE=function(e,t,n,r){if(e*=1,t>>>=0,n>>>=0,!r){var i=Math.pow(2,8*n)-1;nc(this,e,t,n,i,0)}var s=n-1,o=1;for(this[t+s]=255&e;--s>=0&&(o*=256);)this[t+s]=e/o&255;return t+n},t4.prototype.writeUint8=t4.prototype.writeUInt8=function(e,t,n){return e*=1,t>>>=0,n||nc(this,e,t,1,255,0),this[t]=255&e,t+1},t4.prototype.writeUint16LE=t4.prototype.writeUInt16LE=function(e,t,n){return e*=1,t>>>=0,n||nc(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},t4.prototype.writeUint16BE=t4.prototype.writeUInt16BE=function(e,t,n){return e*=1,t>>>=0,n||nc(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},t4.prototype.writeUint32LE=t4.prototype.writeUInt32LE=function(e,t,n){return e*=1,t>>>=0,n||nc(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},t4.prototype.writeUint32BE=t4.prototype.writeUInt32BE=function(e,t,n){return e*=1,t>>>=0,n||nc(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},t4.prototype.writeIntLE=function(e,t,n,r){if(e*=1,t>>>=0,!r){var i=Math.pow(2,8*n-1);nc(this,e,t,n,i-1,-i)}var s=0,o=1,a=0;for(this[t]=255&e;++s<n&&(o*=256);)e<0&&0===a&&0!==this[t+s-1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+n},t4.prototype.writeIntBE=function(e,t,n,r){if(e*=1,t>>>=0,!r){var i=Math.pow(2,8*n-1);nc(this,e,t,n,i-1,-i)}var s=n-1,o=1,a=0;for(this[t+s]=255&e;--s>=0&&(o*=256);)e<0&&0===a&&0!==this[t+s+1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+n},t4.prototype.writeInt8=function(e,t,n){return e*=1,t>>>=0,n||nc(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},t4.prototype.writeInt16LE=function(e,t,n){return e*=1,t>>>=0,n||nc(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},t4.prototype.writeInt16BE=function(e,t,n){return e*=1,t>>>=0,n||nc(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},t4.prototype.writeInt32LE=function(e,t,n){return e*=1,t>>>=0,n||nc(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},t4.prototype.writeInt32BE=function(e,t,n){return e*=1,t>>>=0,n||nc(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},t4.prototype.writeFloatLE=function(e,t,n){return nd(this,e,t,!0,n)},t4.prototype.writeFloatBE=function(e,t,n){return nd(this,e,t,!1,n)},t4.prototype.writeDoubleLE=function(e,t,n){return np(this,e,t,!0,n)},t4.prototype.writeDoubleBE=function(e,t,n){return np(this,e,t,!1,n)},t4.prototype.copy=function(e,t,n,r){if(!t4.isBuffer(e))throw TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(r<0)throw RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},t4.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw TypeError("encoding must be a string");if("string"==typeof r&&!t4.isEncoding(r))throw TypeError("Unknown encoding: "+r);if(1===e.length){var i,s=e.charCodeAt(0);("utf8"===r&&s<128||"latin1"===r)&&(e=s)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw RangeError("Out of range index");if(n<=t)return this;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{var o=t4.isBuffer(e)?e:t4.from(e,r),a=o.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=o[i%a]}return this};var ng=/[^+/0-9A-Za-z-_]/g;function nm(e,t){t=t||1/0;for(var n,r=e.length,i=null,s=[],o=0;o<r;++o){if((n=e.charCodeAt(o))>55295&&n<57344){if(!i){if(n>56319||o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return s}function ny(e){return z(function(e){if((e=(e=e.split("=")[0]).trim().replace(ng,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function nv(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length)&&!(i>=e.length);++i)t[i+n]=e[i];return i}function nw(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var nE=function(){for(var e="0123456789abcdef",t=Array(256),n=0;n<16;++n)for(var r=16*n,i=0;i<16;++i)t[r+i]=e[n]+e[i];return t}();const nb="@firebase/firestore",nT="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}n_.UNAUTHENTICATED=new n_(null),n_.GOOGLE_CREDENTIALS=new n_("google-credentials-uid"),n_.FIRST_PARTY=new n_("first-party-uid"),n_.MOCK_USER=new n_("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nC="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=new tu("@firebase/firestore");function nS(){return nI.logLevel}function nA(e,...t){if(nI.logLevel<=R.DEBUG){let n=t.map(nD);nI.debug(`Firestore (${nC}): ${e}`,...n)}}function nx(e,...t){if(nI.logLevel<=R.ERROR){let n=t.map(nD);nI.error(`Firestore (${nC}): ${e}`,...n)}}function nN(e,...t){if(nI.logLevel<=R.WARN){let n=t.map(nD);nI.warn(`Firestore (${nC}): ${e}`,...n)}}function nD(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(e="Unexpected state"){let t=`FIRESTORE (${nC}) INTERNAL ASSERTION FAILED: `+e;throw nx(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nR extends e5{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(n_.UNAUTHENTICATED))}shutdown(){}}class nU{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class nF{constructor(e){this.t=e,this.currentUser=n_.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){void 0===this.o||nk();let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new nL;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nL,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{nA("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(nA("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nL)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(nA("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||nk(),new nM(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||nk(),new n_(e)}}class nV{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=n_.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class nB{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new nV(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(n_.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nj{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n${constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,null!=e&&void 0!==e.settings&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){void 0===this.o||nk();let n=e=>{null!=e.error&&nA("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,nA("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{nA("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):nA("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new nj(this.V));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||nk(),this.R=e.token,new nj(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nq{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function nz(e,t){return e<t?-1:+(e>t)}function nK(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}class nH{static now(){return nH.fromMillis(Date.now())}static fromDate(e){return nH.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*1e6);return new nH(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new nR(nO.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-0xe7791f700||e>=0x3afff44180)throw new nR(nO.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?nz(this.nanoseconds,e.nanoseconds):nz(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nG{static fromTimestamp(e){return new nG(e)}static min(){return new nG(new nH(0,0))}static max(){return new nG(new nH(0x3afff4417f,0x3b9ac9ff))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nQ="__name__";class nW{constructor(e,t,n){void 0===t?t=0:t>e.length&&nk(),void 0===n?n=e.length-t:n>e.length-t&&nk(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===nW.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof nW?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=nW.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Math.sign(e.length-t.length)}static compareSegments(e,t){let n=nW.isNumericId(e),r=nW.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?nW.extractNumericId(e).compare(nW.extractNumericId(t)):e<t?-1:+(e>t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return L.fromString(e.substring(4,e.length-2))}}class nY extends nW{construct(e,t,n){return new nY(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new nR(nO.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new nY(t)}static emptyPath(){return new nY([])}}const nX=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nJ extends nW{construct(e,t,n){return new nJ(e,t,n)}static isValidIdentifier(e){return nX.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nJ.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===nQ}static keyField(){return new nJ([nQ])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new nR(nO.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new nR(nO.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new nR(nO.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new nR(nO.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nJ(t)}static emptyPath(){return new nJ([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{constructor(e){this.path=e}static fromPath(e){return new nZ(nY.fromString(e))}static fromName(e){return new nZ(nY.fromString(e).popFirst(5))}static empty(){return new nZ(nY.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===nY.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return nY.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new nZ(new nY(e.slice()))}}class n0{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new n0(nG.min(),nZ.empty(),-1)}static max(){return new n0(nG.max(),nZ.empty(),-1)}}class n1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(e){if(e.code!==nO.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;nA("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&nk(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n6((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n6?t:n6.resolve(t)}catch(e){return n6.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n6.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n6.reject(t)}static resolve(e){return new n6((t,n)=>{t(e)})}static reject(e){return new n6((t,n)=>{n(e)})}static waitFor(e){return new n6((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=n6.resolve(!1);for(let n of e)t=t.next(e=>e?n6.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new n6((n,r)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new n6((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function n3(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}n5.ae=-1;function n8(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n4(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function n7(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function n9(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.comparator=e,this.root=t||rn.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rn.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rt(this.root,e,this.comparator,!1)}getReverseIterator(){return new rt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rt(this.root,e,this.comparator,!0)}}class rt{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rn{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:rn.RED,this.left=null!=r?r:rn.EMPTY,this.right=null!=i?i:rn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new rn(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return rn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return rn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,rn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,rn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw nk();let e=this.left.check();if(e!==this.right.check())throw nk();return e+ +!this.isRed()}}rn.EMPTY=null,rn.RED=!0,rn.BLACK=!1,rn.EMPTY=new class{constructor(){this.size=0}get key(){throw nk()}get value(){throw nk()}get color(){throw nk()}get left(){throw nk()}get right(){throw nk()}copy(e,t,n,r,i){return this}insert(e,t,n){return new rn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ri(this.data.getIterator())}getIteratorFrom(e){return new ri(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof rr)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new rr(this.comparator);return t.data=e,t}}class ri{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.fields=e,e.sort(nJ.comparator)}static empty(){return new rs([])}unionWith(e){let t=new rr(nJ.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new rs(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nK(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.binaryString=e}static fromBase64String(e){return new ra(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ro("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new ra(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return nz(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ra.EMPTY_BYTE_STRING=new ra("");const rl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rh(e){if(e||nk(),"string"==typeof e){let t=0,n=rl.exec(e);if(n||nk(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:ru(e.seconds),nanos:ru(e.nanos)}}function ru(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rc(e){return"string"==typeof e?ra.fromBase64String(e):ra.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="server_timestamp",rd="__type__",rp="__previous_value__",rg="__local_write_time__";function rm(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[rd])||void 0===n?void 0:n.stringValue)===rf}function ry(e){let t=e.mapValue.fields[rp];return rm(t)?ry(t):t}function rv(e){let t=rh(e.mapValue.fields[rg].timestampValue);return new nH(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t,n,r,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}const rE="(default)";class rb{constructor(e,t){this.projectId=e,this.database=t||rE}static empty(){return new rb("","")}get isDefaultDatabase(){return this.database===rE}isEqual(e){return e instanceof rb&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="__type__",r_="__max__",rC={mapValue:{fields:{__type__:{stringValue:r_}}}},rI="__vector__",rS="value";function rA(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rm(e)?4:rj(e)?0x1fffffffffffff:rV(e)?10:11:nk()}function rx(e,t){if(e===t)return!0;let n=rA(e);if(n!==rA(t))return!1;switch(n){case 0:case 0x1fffffffffffff:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return rv(e).isEqual(rv(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=rh(e.timestampValue),r=rh(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return rc(e.bytesValue).isEqual(rc(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ru(e.geoPointValue.latitude)===ru(t.geoPointValue.latitude)&&ru(e.geoPointValue.longitude)===ru(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ru(e.integerValue)===ru(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=ru(e.doubleValue),r=ru(t.doubleValue);return n===r?n8(n)===n8(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return nK(e.arrayValue.values||[],t.arrayValue.values||[],rx);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(n4(n)!==n4(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!rx(n[e],r[e])))return!1;return!0}(e,t);default:return nk()}}function rN(e,t){return void 0!==(e.values||[]).find(e=>rx(e,t))}function rD(e,t){if(e===t)return 0;let n=rA(e),r=rA(t);if(n!==r)return nz(n,r);switch(n){case 0:case 0x1fffffffffffff:return 0;case 1:return nz(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=ru(e.integerValue||e.doubleValue),r=ru(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return rk(e.timestampValue,t.timestampValue);case 4:return rk(rv(e),rv(t));case 5:return nz(e.stringValue,t.stringValue);case 6:return function(e,t){let n=rc(e),r=rc(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=nz(n[e],r[e]);if(0!==t)return t}return nz(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=nz(ru(e.latitude),ru(t.latitude));return 0!==n?n:nz(ru(e.longitude),ru(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return rO(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;let o=e.fields||{},a=t.fields||{},l=null===(n=o[rS])||void 0===n?void 0:n.arrayValue,h=null===(r=a[rS])||void 0===r?void 0:r.arrayValue,u=nz((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==h?void 0:h.values)||void 0===s?void 0:s.length)||0);return 0!==u?u:rO(l,h)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===rC.mapValue&&t===rC.mapValue)return 0;if(e===rC.mapValue)return 1;if(t===rC.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=nz(r[e],s[e]);if(0!==t)return t;let o=rD(n[r[e]],i[s[e]]);if(0!==o)return o}return nz(r.length,s.length)}(e.mapValue,t.mapValue);default:throw nk()}}function rk(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return nz(e,t);let n=rh(e),r=rh(t),i=nz(n.seconds,r.seconds);return 0!==i?i:nz(n.nanos,r.nanos)}function rO(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=rD(n[e],r[e]);if(t)return t}return nz(n.length,r.length)}function rR(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=rh(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rc(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,nZ.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=rR(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${rR(e.fields[i])}`;return n+"}"}(e.mapValue):nk()}function rL(e){return!!e&&"integerValue"in e}function rM(e){return!!e&&"arrayValue"in e}function rP(e){return!!e&&"nullValue"in e}function rU(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rF(e){return!!e&&"mapValue"in e}function rV(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[rT])||void 0===n?void 0:n.stringValue)===rI}function rB(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return n7(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=rB(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rB(e.arrayValue.values[n]);return t}return Object.assign({},e)}function rj(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===r_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${constructor(e){this.value=e}static empty(){return new r$({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!rF(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rB(t)}setAll(e){let t=nJ.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=rB(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());rF(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rx(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];rF(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(n7(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new r$(rB(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rq{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new rq(e,0,nG.min(),nG.min(),nG.min(),r$.empty(),0)}static newFoundDocument(e,t,n,r){return new rq(e,1,t,nG.min(),n,r,0)}static newNoDocument(e,t){return new rq(e,2,t,nG.min(),nG.min(),r$.empty(),0)}static newUnknownDocument(e,t){return new rq(e,3,t,nG.min(),nG.min(),r$.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(nG.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=r$.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=r$.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nG.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof rq&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rq(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz{constructor(e,t){this.position=e,this.inclusive=t}}function rK(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(r=s.field.isKeyField()?nZ.comparator(nZ.fromName(o.referenceValue),n.key):rD(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function rH(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rx(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rG{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rQ{}class rW extends rQ{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new rZ(e,t,n):"array-contains"===t?new r6(e,n):"in"===t?new r3(e,n):"not-in"===t?new r5(e,n):"array-contains-any"===t?new r8(e,n):new rW(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new r0(e,n):new r1(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(rD(t,this.value)):null!==t&&rA(this.value)===rA(t)&&this.matchesComparison(rD(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return nk()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rY extends rQ{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new rY(e,t)}matches(e){return rX(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function rX(e){return"and"===e.op}function rJ(e){for(let t of e.filters)if(t instanceof rY)return!1;return!0}class rZ extends rW{constructor(e,t,n){super(e,t,n),this.key=nZ.fromName(n.referenceValue)}matches(e){let t=nZ.comparator(e.key,this.key);return this.matchesComparison(t)}}class r0 extends rW{constructor(e,t){super(e,"in",t),this.keys=r2("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class r1 extends rW{constructor(e,t){super(e,"not-in",t),this.keys=r2("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function r2(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>nZ.fromName(e.referenceValue))}class r6 extends rW{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return rM(t)&&rN(t.arrayValue,this.value)}}class r3 extends rW{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&rN(this.value.arrayValue,t)}}class r5 extends rW{constructor(e,t){super(e,"not-in",t)}matches(e){if(rN(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!rN(this.value.arrayValue,t)}}class r8 extends rW{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!rM(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>rN(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.le=null}}function r7(e,t=null,n=[],r=[],i=null,s=null,o=null){return new r4(e,t,n,r,i,s,o)}function r9(e){if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(e=>(function e(t){if(t instanceof rW)return t.field.canonicalString()+t.op.toString()+rR(t.value);if(rJ(t)&&rX(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(","),t+="|ob:",t+=e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>rR(e)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>rR(e)).join(",")),e.le=t}return e.le}function ie(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof rW?n instanceof rW&&t.op===n.op&&t.field.isEqual(n.field)&&rx(t.value,n.value):t instanceof rY?n instanceof rY&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void nk()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!rH(e.startAt,t.startAt)&&rH(e.endAt,t.endAt)}function it(e){return nZ.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function ii(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function is(e){if(null===e.he){let t;e.he=[];let n=new Set;for(let t of e.explicitOrderBy)e.he.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new rr(nJ.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.he.push(new rG(t,r))}),n.has(nJ.keyField().canonicalString())||e.he.push(new rG(nJ.keyField(),r))}return e.he}function io(e){return e.Pe||(e.Pe=function(e,t){if("F"===e.limitType)return r7(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new rG(e.field,t)});let n=e.endAt?new rz(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new rz(e.startAt.position,e.startAt.inclusive):null;return r7(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,is(e))),e.Pe}function ia(e,t,n){return new ir(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function il(e,t){return ie(io(e),io(t))&&e.limitType===t.limitType}function ih(e){return`${r9(io(e))}|lt:${e.limitType}`}function iu(e){var t;let n;return`Query(target=${n=(t=io(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof rW?`${t.field.canonicalString()} ${t.op} ${rR(t.value)}`:t instanceof rY?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(e=>rR(e)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(e=>rR(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function ic(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):nZ.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of is(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=rK(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,is(e),t))&&(!e.endAt||!!function(e,t,n){let r=rK(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,is(e),t))}function id(e){return(t,n)=>{let r=!1;for(let i of is(e)){let e=function(e,t,n){let r=e.field.isKeyField()?nZ.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?rD(r,i):nk()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return nk()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){n7(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return n9(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new re(nZ.comparator),im=new re(nZ.comparator);function iy(...e){let t=im;for(let n of e)t=t.insert(n.key,n);return t}function iv(e){let t=im;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function iw(){return new ip(e=>e.toString(),(e,t)=>e.isEqual(t))}const iE=new re(nZ.comparator),ib=new rr(nZ.comparator);function iT(...e){let t=ib;for(let n of e)t=t.add(n);return t}const i_=new rr(nz);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:n8(t)?"-0":t}}function iI(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this._=void 0}}function iA(e,t){return e instanceof iR?rL(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class ix extends iS{}class iN extends iS{constructor(e){super(),this.elements=e}}function iD(e,t){let n=iM(t);for(let t of e.elements)n.some(e=>rx(e,t))||n.push(t);return{arrayValue:{values:n}}}class ik extends iS{constructor(e){super(),this.elements=e}}function iO(e,t){let n=iM(t);for(let t of e.elements)n=n.filter(e=>!rx(e,t));return{arrayValue:{values:n}}}class iR extends iS{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function iL(e){return ru(e.integerValue||e.doubleValue)}function iM(e){return rM(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class iP{constructor(e,t){this.version=e,this.transformResults=t}}class iU{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new iU}static exists(e){return new iU(void 0,e)}static updateTime(e){return new iU(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function iF(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class iV{}function iB(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new iQ(e.key,iU.none()):new iq(e.key,e.data,iU.none());{let n=e.data,r=r$.empty(),i=new rr(nJ.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new iz(e.key,r,new rs(i.toArray()),iU.none())}}function ij(e,t,n,r){return e instanceof iq?function(e,t,n,r){if(!iF(e.precondition,t))return n;let i=e.value.clone(),s=iG(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof iz?function(e,t,n,r){if(!iF(e.precondition,t))return n;let i=iG(e.fieldTransforms,r,t),s=t.data;return(s.setAll(iK(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):iF(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function i$(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&nK(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof iN&&r instanceof iN||n instanceof ik&&r instanceof ik?nK(n.elements,r.elements,rx):n instanceof iR&&r instanceof iR?rx(n.Ie,r.Ie):n instanceof ix&&r instanceof ix)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class iq extends iV{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class iz extends iV{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function iK(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function iH(e,t,n){var r;let i=new Map;e.length===n.length||nk();for(let s=0;s<n.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);i.set(o.field,(r=n[s],a instanceof iN?iD(a,l):a instanceof ik?iO(a,l):r))}return i}function iG(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof ix?function(e,t){let n={fields:{[rd]:{stringValue:rf},[rg]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&rm(t)&&(t=ry(t)),t&&(n.fields[rp]=t),{mapValue:n}}(t,s):e instanceof iN?iD(e,s):e instanceof ik?iO(e,s):function(e,t){let n=iA(e,t),r=iL(n)+iL(e.Ie);return rL(n)&&rL(e.Ie)?iI(r):iC(e.serializer,r)}(e,s))}return r}class iQ extends iV{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iW extends iV{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iY{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof iq?function(e,t,n){let r=e.value.clone(),i=iH(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof iz?function(e,t,n){if(!iF(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=iH(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(iK(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=ij(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=ij(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=iw();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields),a=iB(s,o=t.has(r.key)?null:o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(nG.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),iT())}isEqual(e){return this.batchId===e.batchId&&nK(this.mutations,e.mutations,(e,t)=>i$(e,t))&&nK(this.baseMutations,e.baseMutations,(e,t)=>i$(e,t))}}class iX{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||nk();let r=iE,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new iX(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iJ{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iZ{constructor(e,t){this.count=e,this.unchangedNames=t}}function i0(e){if(void 0===e)return nx("GRPC error has no .code"),nO.UNKNOWN;switch(e){case Q.OK:return nO.OK;case Q.CANCELLED:return nO.CANCELLED;case Q.UNKNOWN:return nO.UNKNOWN;case Q.DEADLINE_EXCEEDED:return nO.DEADLINE_EXCEEDED;case Q.RESOURCE_EXHAUSTED:return nO.RESOURCE_EXHAUSTED;case Q.INTERNAL:return nO.INTERNAL;case Q.UNAVAILABLE:return nO.UNAVAILABLE;case Q.UNAUTHENTICATED:return nO.UNAUTHENTICATED;case Q.INVALID_ARGUMENT:return nO.INVALID_ARGUMENT;case Q.NOT_FOUND:return nO.NOT_FOUND;case Q.ALREADY_EXISTS:return nO.ALREADY_EXISTS;case Q.PERMISSION_DENIED:return nO.PERMISSION_DENIED;case Q.FAILED_PRECONDITION:return nO.FAILED_PRECONDITION;case Q.ABORTED:return nO.ABORTED;case Q.OUT_OF_RANGE:return nO.OUT_OF_RANGE;case Q.UNIMPLEMENTED:return nO.UNIMPLEMENTED;case Q.DATA_LOSS:return nO.DATA_LOSS;default:return nk()}}(W=Q||(Q={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=new L([0xffffffff,0xffffffff],0);function i2(e){let t=(new TextEncoder).encode(e),n=new M;return n.update(t),new Uint8Array(n.digest())}function i6(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new L([n,r],0),new L([i,s],0)]}class i3{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new i5(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new i5(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new i5(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=L.fromNumber(this.Ee)}Ae(e,t,n){let r=e.add(t.multiply(L.fromNumber(n)));return 1===r.compare(i1)&&(r=new L([r.getBits(0),r.getBits(1)],0)),r.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ee)return!1;let[t,n]=i6(i2(e));for(let e=0;e<this.hashCount;e++){let r=this.Ae(t,n,e);if(!this.Re(r))return!1}return!0}static create(e,t,n){let r=new i3(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Ee)return;let[t,n]=i6(i2(e));for(let e=0;e<this.hashCount;e++){let r=this.Ae(t,n,e);this.Ve(r)}}Ve(e){let t=Math.floor(e/8);this.bitmap[t]|=1<<e%8}}class i5 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,i4.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new i8(nG.min(),r,new re(nz),ig,iT())}}class i4{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new i4(n,t,iT(),iT(),iT())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i7{constructor(e,t,n,r){this.me=e,this.removedTargetIds=t,this.key=n,this.fe=r}}class i9{constructor(e,t){this.targetId=e,this.ge=t}}class se{constructor(e,t,n=ra.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class st{constructor(){this.pe=0,this.ye=si(),this.we=ra.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=iT(),t=iT(),n=iT();return this.ye.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:nk()}}),new i4(this.we,this.Se,e,t,n)}Me(){this.be=!1,this.ye=si()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,this.pe>=0||nk()}Le(){this.be=!0,this.Se=!0}}class sn{constructor(e){this.ke=e,this.qe=new Map,this.Qe=ig,this.$e=sr(),this.Ke=sr(),this.Ue=new re(nz)}We(e){for(let t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(let t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{let n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Ce(e.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(e.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(t);break;case 3:this.Je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Ce(e.resumeToken));break;default:nk()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((e,n)=>{this.Je(n)&&t(n)})}Ze(e){let t=e.targetId,n=e.ge.count,r=this.Xe(t);if(r){let i=r.target;if(it(i)){if(0===n){let e=new nZ(i.path);this.ze(t,e,rq.newNoDocument(e,nG.min()))}else 1===n||nk()}else{let r=this.et(t);if(r!==n){let n=this.tt(e),i=n?this.nt(n,e,r):1;0!==i&&(this.Ye(t),this.Ue=this.Ue.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}tt(e){let t,n;let r=e.ge.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=r;try{t=rc(i).toUint8Array()}catch(e){if(e instanceof ro)return nN("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new i3(t,s,o)}catch(e){return nN(e instanceof i5?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Ee?null:n}nt(e,t,n){return 2*(t.ge.count!==n-this.st(e,t.targetId))}st(e,t){let n=this.ke.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.ke.it(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.ze(t,n,null),r++)}),r}ot(e){let t=new Map;this.qe.forEach((n,r)=>{let i=this.Xe(r);if(i){if(n.current&&it(i.target)){let t=new nZ(i.target.path);this._t(t).has(r)||this.ut(r,t)||this.ze(r,t,rq.newNoDocument(t,e))}n.ve&&(t.set(r,n.Fe()),n.Me())}});let n=iT();this.Ke.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Qe.forEach((t,n)=>n.setReadTime(e));let r=new i8(e,t,this.Ue,this.Qe,n);return this.Qe=ig,this.$e=sr(),this.Ke=sr(),this.Ue=new re(nz),r}Ge(e,t){if(!this.Je(e))return;let n=2*!!this.ut(e,t.key);this.He(e).xe(t.key,n),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;let r=this.He(e);this.ut(e,t)?r.xe(t,1):r.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),n&&(this.Qe=this.Qe.insert(t,n))}removeTarget(e){this.qe.delete(e)}et(e){let t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new st,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new rr(nz),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new rr(nz),this.$e=this.$e.insert(e,t)),t}Je(e){let t=null!==this.Xe(e);return t||nA("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){let t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new st),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function sr(){return new re(nZ.comparator)}function si(){return new re(nZ.comparator)}const ss={asc:"ASCENDING",desc:"DESCENDING"},so={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sa={and:"AND",or:"OR"};class sl{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sh(e,t){return e.useProto3Json||null==t?t:{value:t}}function su(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function sf(e){return e||nk(),nG.fromTimestamp(function(e){let t=rh(e);return new nH(t.seconds,t.nanos)}(e))}function sd(e,t){return sp(e,t).canonicalString()}function sp(e,t){let n=new nY(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function sg(e){let t=nY.fromString(e);return sC(t)||nk(),t}function sm(e,t){return sd(e.databaseId,t.path)}function sy(e,t){let n=sg(t);if(n.get(1)!==e.databaseId.projectId)throw new nR(nO.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new nR(nO.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new nZ(sE(n))}function sv(e,t){return sd(e.databaseId,t)}function sw(e){return new nY(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sE(e){return e.length>4&&"documents"===e.get(4)||nk(),e.popFirst(5)}function sb(e,t,n){return{name:sm(e,t),fields:n.value.mapValue.fields}}function sT(e){return{fieldPath:e.canonicalString()}}function s_(e){return nJ.fromServerFormat(e.fieldPath)}function sC(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t,n,r,i=nG.min(),s=nG.min(),o=ra.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new sI(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sI(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sI(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sI(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.Tt=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(+!!e.booleanValue);else if("integerValue"in e)this.ft(t,15),t.gt(ru(e.integerValue));else if("doubleValue"in e){let n=ru(e.doubleValue);isNaN(n)?this.ft(t,13):(this.ft(t,15),n8(n)?t.gt(0):t.gt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ft(t,20),"string"==typeof n&&(n=rh(n)),t.yt(`${n.seconds||""}`),t.gt(n.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(rc(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.ft(t,45),t.gt(n.latitude||0),t.gt(n.longitude||0)}else"mapValue"in e?rj(e)?this.ft(t,Number.MAX_SAFE_INTEGER):rV(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):nk()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){let n=e.fields||{};for(let e of(this.ft(t,55),Object.keys(n)))this.wt(e,t),this.Rt(n[e],t)}vt(e,t){var n,r;let i=e.fields||{};this.ft(t,53);let s=(null===(r=null===(n=i[rS].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.ft(t,15),t.gt(ru(s)),this.wt(rS,t),this.Rt(i[rS],t)}Ft(e,t){let n=e.values||[];for(let e of(this.ft(t,50),n))this.Rt(e,t)}Dt(e,t){this.ft(t,37),nZ.fromName(e).path.forEach(e=>{this.ft(t,60),this.Mt(e,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}sA.xt=new sA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(){this.Tn=new sN}addToCollectionParentIndex(e,t){return this.Tn.add(t),n6.resolve()}getCollectionParents(e,t){return n6.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return n6.resolve()}deleteFieldIndex(e,t){return n6.resolve()}deleteAllFieldIndexes(e){return n6.resolve()}createTargetIndexes(e,t){return n6.resolve()}getDocumentsMatchingTarget(e,t){return n6.resolve(null)}getIndexType(e,t){return n6.resolve(0)}getFieldIndexes(e,t){return n6.resolve([])}getNextCollectionGroupToUpdate(e){return n6.resolve(null)}getMinOffset(e,t){return n6.resolve(n0.min())}getMinOffsetFromCollectionGroup(e,t){return n6.resolve(n0.min())}updateCollectionGroup(e,t,n){return n6.resolve()}updateIndexEntries(e,t){return n6.resolve()}}class sN{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new rr(nY.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new rr(nY.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class sk{static withCacheSize(e){return new sk(e,sk.DEFAULT_COLLECTION_PERCENTILE,sk.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sk.DEFAULT_COLLECTION_PERCENTILE=10,sk.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sk.DEFAULT=new sk(0x2800000,sk.DEFAULT_COLLECTION_PERCENTILE,sk.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sk.DISABLED=new sk(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new sO(0)}static Un(){return new sO(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="LruGarbageCollector";function sL([e,t],[n,r]){let i=nz(e,n);return 0===i?nz(t,r):i}class sM{constructor(e){this.Hn=e,this.buffer=new rr(sL),this.Jn=0}Yn(){return++this.Jn}Zn(e){let t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>sL(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sP{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(e){nA(sR,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){n3(e)?nA(sR,"Ignoring IndexedDB error during garbage collection: ",e):await n2(e)}await this.er(3e5)})}}class sU{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return n6.resolve(n5.ae);let n=new sM(t);return this.tr.forEachTarget(e,e=>n.Zn(e.sequenceNumber)).next(()=>this.tr.rr(e,e=>n.Zn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.tr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(nA("LruGarbageCollector","Garbage collection skipped; disabled"),n6.resolve(sD)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(nA("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sD):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let n,r,i,s,o,a,l;let h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(nA("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),nS()<=R.DEBUG&&nA("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-h}ms
	Determined least recently used ${r} in `+(o-s)+"ms\n"+`	Removed ${i} targets in `+(a-o)+"ms\n"+`	Removed ${e} documents in `+(l-a)+"ms\n"+`Total Duration: ${l-h}ms`),n6.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(){this.changes=new ip(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rq.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?n6.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&ij(n.mutation,e,rs.empty(),nH.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,iT()).next(()=>t))}getLocalViewOfDocuments(e,t,n=iT()){let r=iw();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=iy();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=iw();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,iT()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=ig,s=iw(),o=iw();return t.forEach((e,t)=>{let o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof iz)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),ij(o.mutation,t,o.mutation.getFieldMask(),nH.now())):s.set(t.key,rs.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new sV(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){let n=iw(),r=new re((e,t)=>e-t),i=iT();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=n.get(e)||rs.empty();o=i.applyToLocalView(s,o),n.set(e,o);let a=(r.get(i.batchId)||iT()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{let s=[],o=r.getReverseIterator();for(;o.hasNext();){let r=o.getNext(),a=r.key,l=r.value,h=iw();l.forEach(e=>{if(!i.has(e)){let r=iB(t.get(e),n.get(e));null!==r&&h.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,h))}return n6.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return nZ.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):n6.resolve(iw()),o=-1,a=i;return s.next(t=>n6.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?n6.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,iT())).next(e=>({batchId:o,changes:iv(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new nZ(t)).next(e=>{let t=iy();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=iy();return this.indexManager.getCollectionParents(e,i).next(o=>n6.forEach(o,o=>{let a=new ir(o.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,rq.newInvalidDocument(r)))});let n=iy();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&ij(s.mutation,r,rs.empty(),nH.now()),ic(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return n6.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,{id:t.id,version:t.version,createTime:sf(t.createTime)}),n6.resolve()}getNamedQuery(e,t){return n6.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=sg(e);return 4===t.length?nY.emptyPath():sE(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,o=null;if(s>0){1===s||nk();let e=i.from[0];e.allDescendants?o=e.collectionId:r=r.child(e.collectionId)}let a=[];i.where&&(a=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=s_(e.unaryFilter.field);return rW.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=s_(e.unaryFilter.field);return rW.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=s_(e.unaryFilter.field);return rW.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=s_(e.unaryFilter.field);return rW.create(i,"!=",{nullValue:"NULL_VALUE"});default:return nk()}}(t):void 0!==t.fieldFilter?rW.create(s_(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return nk()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?rY.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return nk()}}(t.compositeFilter.op)):nk()}(e);return n instanceof rY&&rJ(t=n)&&rX(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new rG(s_(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let h=null;i.limit&&(h=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let u=null;i.startAt&&(u=function(e){let t=!!e.before;return new rz(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new rz(e.values||[],t)}(i.endAt)),new ir(r,o,l,a,h,"F",u,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ia(t,t.limit,"L"):t}(t.bundledQuery),readTime:sf(t.readTime)}),n6.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(){this.overlays=new re(nZ.comparator),this.Rr=new Map}getOverlay(e,t){return n6.resolve(this.overlays.get(t))}getOverlays(e,t){let n=iw();return n6.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.Et(e,t,r)}),n6.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Rr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Rr.delete(n)),n6.resolve()}getOverlaysForCollection(e,t,n){let r=iw(),i=t.length+1,s=new nZ(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return n6.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new re((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=iw(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=iw(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return n6.resolve(o)}Et(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.Rr.get(r.largestBatchId).delete(n.key);this.Rr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new iJ(t,n));let i=this.Rr.get(t);void 0===i&&(i=iT(),this.Rr.set(t,i)),this.Rr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sq{constructor(){this.sessionToken=ra.EMPTY_BYTE_STRING}getSessionToken(e){return n6.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,n6.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sz{constructor(){this.Vr=new rr(sK.mr),this.gr=new rr(sK.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){let n=new sK(e,t);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.wr(new sK(e,t))}Sr(e,t){e.forEach(e=>this.removeReference(e,t))}br(e){let t=new nZ(new nY([])),n=new sK(t,e),r=new sK(t,e+1),i=[];return this.gr.forEachInRange([n,r],e=>{this.wr(e),i.push(e.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){let t=new nZ(new nY([])),n=new sK(t,e),r=new sK(t,e+1),i=iT();return this.gr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new sK(e,0),n=this.Vr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class sK{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return nZ.comparator(e.key,t.key)||nz(e.Cr,t.Cr)}static pr(e,t){return nz(e.Cr,t.Cr)||nZ.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sH{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new rr(sK.mr)}checkEmpty(e){return n6.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new iY(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Mr=this.Mr.add(new sK(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return n6.resolve(s)}lookupMutationBatch(e,t){return n6.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Nr(t+1),r=n<0?0:n;return n6.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return n6.resolve(0===this.mutationQueue.length?-1:this.Fr-1)}getAllMutationBatches(e){return n6.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new sK(t,0),r=new sK(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([n,r],e=>{let t=this.Or(e.Cr);i.push(t)}),n6.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new rr(nz);return t.forEach(e=>{let t=new sK(e,0),r=new sK(e,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([t,r],e=>{n=n.add(e.Cr)})}),n6.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;nZ.isDocumentKey(i)||(i=i.child(""));let s=new sK(new nZ(i),0),o=new rr(nz);return this.Mr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Cr)),!0)},s),n6.resolve(this.Br(o))}Br(e){let t=[];return e.forEach(e=>{let n=this.Or(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Lr(t.batchId,"removed")||nk(),this.mutationQueue.shift();let n=this.Mr;return n6.forEach(t.mutations,r=>{let i=new sK(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Mr=n})}qn(e){}containsKey(e,t){let n=new sK(t,0),r=this.Mr.firstAfterOrEqual(n);return n6.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,n6.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Or(e){let t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sG{constructor(e){this.kr=e,this.docs=new re(nZ.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.kr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return n6.resolve(n?n.document.mutableCopy():rq.newInvalidDocument(t))}getEntries(e,t){let n=ig;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():rq.newInvalidDocument(e))}),n6.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=ig,s=t.path,o=new nZ(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=nZ.comparator(e.documentKey,t.documentKey))?n:nz(e.largestBatchId,t.largestBatchId)}(new n0(o.readTime,o.key,-1),n)||(r.has(o.key)||ic(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return n6.resolve(i)}getAllFromCollectionGroup(e,t,n,r){nk()}qr(e,t){return n6.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new sQ(this)}getSize(e){return n6.resolve(this.size)}}class sQ extends sF{constructor(e){super(),this.Ir=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Ir.addEntry(e,r)):this.Ir.removeEntry(n)}),n6.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sW{constructor(e){this.persistence=e,this.Qr=new ip(e=>r9(e),ie),this.lastRemoteSnapshotVersion=nG.min(),this.highestTargetId=0,this.$r=0,this.Kr=new sz,this.targetCount=0,this.Ur=sO.Kn()}forEachTarget(e,t){return this.Qr.forEach((e,n)=>t(n)),n6.resolve()}getLastRemoteSnapshotVersion(e){return n6.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return n6.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),n6.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$r&&(this.$r=t),n6.resolve()}zn(e){this.Qr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ur=new sO(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,n6.resolve()}updateTargetData(e,t){return this.zn(t),n6.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,n6.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Qr.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Qr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),n6.waitFor(i).next(()=>r)}getTargetCount(e){return n6.resolve(this.targetCount)}getTargetData(e,t){let n=this.Qr.get(t)||null;return n6.resolve(n)}addMatchingKeys(e,t,n){return this.Kr.yr(t,n),n6.resolve()}removeMatchingKeys(e,t,n){this.Kr.Sr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),n6.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),n6.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Kr.vr(t);return n6.resolve(n)}containsKey(e,t){return n6.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sY{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new n5(0),this.zr=!1,this.zr=!0,this.jr=new sq,this.referenceDelegate=e(this),this.Hr=new sW(this),this.indexManager=new sx,this.remoteDocumentCache=new sG(e=>this.referenceDelegate.Jr(e)),this.serializer=new sS(t),this.Yr=new sj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new s$,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Wr[e.toKey()];return n||(n=new sH(t,this.referenceDelegate),this.Wr[e.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,n){nA("MemoryPersistence","Starting transaction:",e);let r=new sX(this.Gr.next());return this.referenceDelegate.Zr(),n(r).next(e=>this.referenceDelegate.Xr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}ei(e,t){return n6.or(Object.values(this.Wr).map(n=>()=>n.containsKey(e,t)))}}class sX extends n1{constructor(e){super(),this.currentSequenceNumber=e}}class sJ{constructor(e){this.persistence=e,this.ti=new sz,this.ni=null}static ri(e){return new sJ(e)}get ii(){if(this.ni)return this.ni;throw nk()}addReference(e,t,n){return this.ti.addReference(n,t),this.ii.delete(n.toString()),n6.resolve()}removeReference(e,t,n){return this.ti.removeReference(n,t),this.ii.add(n.toString()),n6.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),n6.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(e=>this.ii.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.ii.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return n6.forEach(this.ii,n=>{let r=nZ.fromPath(n);return this.si(e,r).next(e=>{e||t.removeEntry(r,nG.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(e=>{e?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return n6.or([()=>n6.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class sZ{constructor(e,t){this.persistence=e,this.oi=new ip(e=>(function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new sU(this,t)}static ri(e,t){return new sZ(e,t)}Zr(){}Xr(e){return n6.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){let t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}sr(e){let t=0;return this.rr(e,e=>{t++}).next(()=>t)}rr(e,t){return n6.forEach(this.oi,(n,r)=>this.ar(e,n,r).next(e=>e?n6.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.qr(e,r=>this.ar(e,r,t).next(e=>{e||(n++,i.removeEntry(r,nG.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),n6.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),n6.resolve()}removeReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),n6.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),n6.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(rA(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let n=ry(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return rc(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:case 11:var r;let i;return r=t.mapValue,i=0,n7(r.fields,(t,n)=>{i+=t.length+e(n)}),i;default:throw nk()}}(e.data.value)),t}ar(e,t,n){return n6.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.oi.get(t);return n6.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hi=n,this.Ji=r}static Yi(e,t){let n=iT(),r=iT();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new s0(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=!function(){var e;let t=null===(e=e0())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(J.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.rs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ss(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new s1;return this._s(e,t,n).next(r=>{if(i.result=r,this.Xi)return this.us(e,t,n,r.size)})}).next(()=>i.result)}us(e,t,n,r){return n.documentReadCount<this.es?(nS()<=R.DEBUG&&nA("QueryEngine","SDK will not create cache indexes for query:",iu(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),n6.resolve()):(nS()<=R.DEBUG&&nA("QueryEngine","Query:",iu(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ts*r?(nS()<=R.DEBUG&&nA("QueryEngine","The SDK decides to create cache indexes for query:",iu(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,io(t))):n6.resolve())}rs(e,t){if(ii(t))return n6.resolve(null);let n=io(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=io(t=ia(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=iT(...r);return this.ns.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.cs(t,r);return this.ls(t,s,i,n.readTime)?this.rs(e,ia(t,null,"F")):this.hs(e,s,t,n)}))})))}ss(e,t,n,r){return ii(t)||r.isEqual(nG.min())?n6.resolve(null):this.ns.getDocuments(e,n).next(i=>{let s=this.cs(t,i);return this.ls(t,s,n,r)?n6.resolve(null):(nS()<=R.DEBUG&&nA("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),iu(t)),this.hs(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new n0(nG.fromTimestamp(1e9===r?new nH(n+1,0):new nH(n,r)),nZ.empty(),-1)}(r,0)).next(e=>e))})}cs(e,t){let n=new rr(id(e));return t.forEach((t,r)=>{ic(e,r)&&(n=n.add(r))}),n}ls(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}_s(e,t,n){return nS()<=R.DEBUG&&nA("QueryEngine","Using full collection scan to execute query:",iu(t)),this.ns.getDocumentsMatchingQuery(e,t,n0.min(),n)}hs(e,t,n,r){return this.ns.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s6="LocalStore";class s3{constructor(e,t,n,r){this.persistence=e,this.Ps=t,this.serializer=r,this.Ts=new re(nz),this.Is=new ip(e=>r9(e),ie),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(n)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sB(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}async function s5(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.As(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],o=iT();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(n,o).next(e=>({Rs:e,removedBatchIds:i,addedBatchIds:s}))})})}function s8(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}async function s4(e,t,n){let r=e.Ts.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!n3(e))throw e;nA(s6,`Failed to update sequence numbers for target ${t}: ${e}`)}e.Ts=e.Ts.remove(t),e.Is.delete(r.target)}function s7(e,t,n){let r=nG.min(),i=iT();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.Is.get(n);return void 0!==r?n6.resolve(e.Ts.get(r)):e.Hr.getTargetData(t,n)})(e,s,io(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Hr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Ps.getDocumentsMatchingQuery(s,t,n?r:nG.min(),n?i:iT())).next(n=>{var r,s,o;let a;return r=e,s=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),o=n,a=r.Es.get(s)||nG.min(),o.forEach((e,t)=>{t.readTime.compareTo(a)>0&&(a=t.readTime)}),r.Es.set(s,a),{documents:n,gs:i}}))}class s9{constructor(){this.activeTargetIds=i_}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class oe{constructor(){this.ho=new s9,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,n){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new s9,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="ConnectivityMonitor";class or{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){for(let e of(nA(on,"Network connectivity changed: AVAILABLE"),this.Vo))e(0)}Ro(){for(let e of(nA(on,"Network connectivity changed: UNAVAILABLE"),this.Vo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi=null;function os(){return null===oi?oi=0x10000000+Math.round(0x80000000*Math.random()):oi++,"0x"+oi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="RestConnection",oa={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ol{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${r}`,this.wo=this.databaseId.database===rE?`project_id=${n}`:`project_id=${n}&database_id=${r}`}So(e,t,n,r,i){let s=os(),o=this.bo(e,t.toUriEncodedString());nA(oo,`Sending RPC '${e}' ${s}:`,o,n);let a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(a,r,i),this.vo(e,o,a,n).then(t=>(nA(oo,`Received RPC '${e}' ${s}: `,t),t),t=>{throw nN(oo,`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}Co(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+nC,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}bo(e,t){let n=oa[e];return`${this.po}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="WebChannelConnection";class oc extends ol{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,r){let i=os();return new Promise((s,o)=>{let a=new P;a.setWithCredentials(!0),a.listenOnce(F.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case V.NO_ERROR:let t=a.getResponseJson();nA(ou,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case V.TIMEOUT:nA(ou,`RPC '${e}' ${i} timed out`),o(new nR(nO.DEADLINE_EXCEEDED,"Request time out"));break;case V.HTTP_ERROR:let n=a.getStatus();if(nA(ou,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(nO).indexOf(t)>=0?t:nO.UNKNOWN}(t.status);o(new nR(e,t.message))}else o(new nR(nO.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new nR(nO.UNAVAILABLE,"Connection failed."));break;default:nk()}}finally{nA(ou,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);nA(ou,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",l,n,15)})}Wo(e,t,n){let r=os(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=q(),o=$(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;let h=i.join("");nA(ou,`Creating RPC '${e}' stream ${r}: ${h}`,a);let u=s.createWebChannel(h,a),c=!1,f=!1,d=new oh({Fo:t=>{f?nA(ou,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(c||(nA(ou,`Opening RPC '${e}' stream ${r} transport.`),u.open(),c=!0),nA(ou,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Mo:()=>u.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(u,U.EventType.OPEN,()=>{f||(nA(ou,`RPC '${e}' stream ${r} transport opened.`),d.Qo())}),p(u,U.EventType.CLOSE,()=>{f||(f=!0,nA(ou,`RPC '${e}' stream ${r} transport closed`),d.Ko())}),p(u,U.EventType.ERROR,t=>{f||(f=!0,nN(ou,`RPC '${e}' stream ${r} transport errored:`,t),d.Ko(new nR(nO.UNAVAILABLE,"The operation could not be completed")))}),p(u,U.EventType.MESSAGE,t=>{var n;if(!f){let i=t.data[0];i||nk();let s=(null==i?void 0:i.error)||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){nA(ou,`RPC '${e}' stream ${r} received error:`,s);let t=s.status,n=function(e){let t=Q[e];if(void 0!==t)return i0(t)}(t),i=s.message;void 0===n&&(n=nO.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,d.Ko(new nR(n,i)),u.close()}else nA(ou,`RPC '${e}' stream ${r} received:`,i),d.Uo(i)}}),p(o,j.STAT_EVENT,t=>{t.stat===B.PROXY?nA(ou,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===B.NOPROXY&&nA(ou,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.$o()},0),d}}function of(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(e){return new sl(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=n,this.zo=r,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();let t=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),r=Math.max(0,t-n);r>0&&nA("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="PersistentStream";class om{constructor(e,t,n,r,i,s,o,a){this.Ti=e,this.n_=n,this.r_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new op(e,t)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==e?this.a_.reset():t&&t.code===nO.RESOURCE_EXHAUSTED?(nx(t.toString()),nx("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===nO.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;let e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.i_===t&&this.V_(e,n)},t=>{e(()=>{let e=new nR(nO.UNKNOWN,"Fetching auth token failed: "+t.message);return this.m_(e)})})}V_(e,t){let n=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(e=>{n(()=>this.m_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.__?this.g_(e):this.onNext(e))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return nA(og,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(nA(og,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oy extends om{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:nk(),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||nk(),ra.fromBase64String(i||"")):(void 0===i||i instanceof t4||i instanceof Uint8Array||nk(),ra.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new se(s,o,a,l&&new nR(void 0===l.code?nO.UNKNOWN:i0(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=sy(e,r.document.name),s=sf(r.document.updateTime),o=r.document.createTime?sf(r.document.createTime):nG.min(),a=new r$({mapValue:{fields:r.document.fields}}),l=rq.newFoundDocument(i,s,o,a);n=new i7(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=sy(e,r.document),s=r.readTime?sf(r.readTime):nG.min(),o=rq.newNoDocument(i,s);n=new i7([],r.removedTargetIds||[],o.key,o)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=sy(e,r.document);n=new i7([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return nk();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new iZ(r,i);n=new i9(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return nG.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?nG.min():t.readTime?sf(t.readTime):nG.min()}(e);return this.listener.p_(t,n)}y_(e){let t={};t.database=sw(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=it(r)?{documents:{documents:[sv(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(i=o,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=o.popLast(),s.structuredQuery.from=[{collectionId:o.lastSegment()}]),s.parent=sv(e,i);let a=function(e){if(0!==e.length)return function e(t){return t instanceof rW?function(e){if("=="===e.op){if(rU(e.value))return{unaryFilter:{field:sT(e.field),op:"IS_NAN"}};if(rP(e.value))return{unaryFilter:{field:sT(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(rU(e.value))return{unaryFilter:{field:sT(e.field),op:"IS_NOT_NAN"}};if(rP(e.value))return{unaryFilter:{field:sT(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sT(e.field),op:so[e.op],value:e.value}}}(t):t instanceof rY?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:sa[t.op],filters:n}}}(t):nk()}(rY.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:sT(e.field),direction:ss[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let h=sh(e,t.limit);return null!==h&&(s.structuredQuery.limit=h),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{ht:s,parent:i}}(e,r).ht}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=sc(e,t.resumeToken);let r=sh(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(nG.min())>0){n.readTime=su(e,t.snapshotVersion.toTimestamp());let r=sh(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return nk()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.I_(t)}w_(e){let t={};t.database=sw(this.serializer),t.removeTarget=e,this.I_(t)}}class ov extends om{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return e.streamToken||nk(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&nk(),this.listener.D_()}onNext(e){var t,n;e.streamToken||nk(),this.lastStreamToken=e.streamToken,this.a_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||nk(),t.map(e=>{let t;return(t=e.updateTime?sf(e.updateTime):sf(n)).isEqual(nG.min())&&(t=sf(n)),new iP(t,e.transformResults||[])})):[]),i=sf(e.commitTime);return this.listener.v_(i,r)}C_(){let e={};e.database=sw(this.serializer),this.I_(e)}b_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof iq)r={update:sb(e,t.key,t.value)};else if(t instanceof iQ)r={delete:sm(e,t.key)};else if(t instanceof iz)r={update:sb(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof iW))return nk();r={verify:sm(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof ix)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof iN)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ik)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof iR)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw nk()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:su(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:nk()),r})(this.serializer,e))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{}class oE extends ow{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.F_=!1}M_(){if(this.F_)throw new nR(nO.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,sp(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===nO.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nR(nO.UNKNOWN,e.toString())})}Co(e,t,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,sp(t,n),r,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===nO.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nR(nO.UNKNOWN,e.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class ob{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,"Online"===e&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(nx(t),this.N_=!1):nA("OnlineStateTracker",t)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="RemoteStore";class o_{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(e=>{n.enqueueAndForget(async()=>{oO(this)&&(nA(oT,"Restarting streams for network reachability change."),await async function(e){e.W_.add(4),await oI(e),e.j_.set("Unknown"),e.W_.delete(4),await oC(e)}(this))})}),this.j_=new ob(n,r)}}async function oC(e){if(oO(e))for(let t of e.G_)await t(!0)}async function oI(e){for(let t of e.G_)await t(!1)}function oS(e,t){e.U_.has(t.targetId)||(e.U_.set(t.targetId,t),ok(e)?oD(e):oQ(e).c_()&&ox(e,t))}function oA(e,t){let n=oQ(e);e.U_.delete(t),n.c_()&&oN(e,t),0===e.U_.size&&(n.c_()?n.P_():oO(e)&&e.j_.set("Unknown"))}function ox(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(nG.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}oQ(e).y_(t)}function oN(e,t){e.H_.Ne(t),oQ(e).w_(t)}function oD(e){e.H_=new sn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.U_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),oQ(e).start(),e.j_.B_()}function ok(e){return oO(e)&&!oQ(e).u_()&&e.U_.size>0}function oO(e){return 0===e.W_.size}async function oR(e){e.j_.set("Online")}async function oL(e){e.U_.forEach((t,n)=>{ox(e,t)})}async function oM(e,t){e.H_=void 0,ok(e)?(e.j_.q_(t),oD(e)):e.j_.set("Unknown")}async function oP(e,t,n){if(e.j_.set("Online"),t instanceof se&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.U_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.U_.delete(r),e.H_.removeTarget(r))}(e,t)}catch(n){nA(oT,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await oU(e,n)}else if(t instanceof i7?e.H_.We(t):t instanceof i9?e.H_.Ze(t):e.H_.je(t),!n.isEqual(nG.min()))try{let t=await s8(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.H_.ot(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.U_.get(r);i&&e.U_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.U_.get(t);if(!r)return;e.U_.set(t,r.withResumeToken(ra.EMPTY_BYTE_STRING,r.snapshotVersion)),oN(e,t);let i=new sI(r.target,t,n,r.sequenceNumber);ox(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){nA(oT,"Failed to raise snapshot:",t),await oU(e,t)}}async function oU(e,t,n){if(!n3(t))throw t;e.W_.add(1),await oI(e),e.j_.set("Offline"),n||(n=()=>s8(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{nA(oT,"Retrying IndexedDB access"),await n(),e.W_.delete(1),await oC(e)})}function oF(e,t){return t().catch(n=>oU(e,n,t))}async function oV(e){var t;let n=oW(e),r=e.K_.length>0?e.K_[e.K_.length-1].batchId:-1;for(;oO(t=e)&&t.K_.length<10;)try{let t=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,r);if(null===t){0===e.K_.length&&n.P_();break}r=t.batchId,function(e,t){e.K_.push(t);let n=oW(e);n.c_()&&n.S_&&n.b_(t.mutations)}(e,t)}catch(t){await oU(e,t)}oB(e)&&oj(e)}function oB(e){return oO(e)&&!oW(e).u_()&&e.K_.length>0}function oj(e){oW(e).start()}async function o$(e){oW(e).C_()}async function oq(e){let t=oW(e);for(let n of e.K_)t.b_(n.mutations)}async function oz(e,t,n){let r=e.K_.shift(),i=iX.from(r,t,n);await oF(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await oV(e)}async function oK(e,t){t&&oW(e).S_&&await async function(e,t){var n;if(function(e){switch(e){case nO.OK:return nk();case nO.CANCELLED:case nO.UNKNOWN:case nO.DEADLINE_EXCEEDED:case nO.RESOURCE_EXHAUSTED:case nO.INTERNAL:case nO.UNAVAILABLE:case nO.UNAUTHENTICATED:return!1;case nO.INVALID_ARGUMENT:case nO.NOT_FOUND:case nO.ALREADY_EXISTS:case nO.PERMISSION_DENIED:case nO.FAILED_PRECONDITION:case nO.ABORTED:case nO.OUT_OF_RANGE:case nO.UNIMPLEMENTED:case nO.DATA_LOSS:return!0;default:return nk()}}(n=t.code)&&n!==nO.ABORTED){let n=e.K_.shift();oW(e).h_(),await oF(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await oV(e)}}(e,t),oB(e)&&oj(e)}async function oH(e,t){e.asyncQueue.verifyOperationInProgress(),nA(oT,"RemoteStore received new credentials");let n=oO(e);e.W_.add(3),await oI(e),n&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await oC(e)}async function oG(e,t){t?(e.W_.delete(2),await oC(e)):t||(e.W_.add(2),await oI(e),e.j_.set("Unknown"))}function oQ(e){var t,n,r;return e.J_||(e.J_=(t=e.datastore,n=e.asyncQueue,r={xo:oR.bind(null,e),No:oL.bind(null,e),Lo:oM.bind(null,e),p_:oP.bind(null,e)},t.M_(),new oy(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.G_.push(async t=>{t?(e.J_.h_(),ok(e)?oD(e):e.j_.set("Unknown")):(await e.J_.stop(),e.H_=void 0)})),e.J_}function oW(e){var t,n,r;return e.Y_||(e.Y_=(t=e.datastore,n=e.asyncQueue,r={xo:()=>Promise.resolve(),No:o$.bind(null,e),Lo:oK.bind(null,e),D_:oq.bind(null,e),v_:oz.bind(null,e)},t.M_(),new ov(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.G_.push(async t=>{t?(e.Y_.h_(),await oV(e)):(await e.Y_.stop(),e.K_.length>0&&(nA(oT,`Stopping write stream with ${e.K_.length} pending writes`),e.K_=[]))})),e.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oY{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new nL,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new oY(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new nR(nO.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oX(e,t){if(nx("AsyncQueue",`${t}: ${e}`),n3(e))return new nR(nO.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oJ{static emptySet(e){return new oJ(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||nZ.comparator(t.key,n.key):(e,t)=>nZ.comparator(e.key,t.key),this.keyedMap=iy(),this.sortedSet=new re(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oJ)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new oJ;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oZ{constructor(){this.Z_=new re(nZ.comparator)}track(e){let t=e.doc.key,n=this.Z_.get(t);n?0!==e.type&&3===n.type?this.Z_=this.Z_.insert(t,e):3===e.type&&1!==n.type?this.Z_=this.Z_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Z_=this.Z_.remove(t):1===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):nk():this.Z_=this.Z_.insert(t,e)}X_(){let e=[];return this.Z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class o0{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new o0(e,t,oJ.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&il(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class o2{constructor(){this.queries=o6(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=o6(),n.forEach((e,n)=>{for(let e of n.ta)e.onError(t)})}(this,new nR(nO.ABORTED,"Firestore shutting down"))}}function o6(){return new ip(e=>ih(e),il)}async function o3(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.na()&&t.ra()&&(n=2):(i=new o1,n=+!t.ra());try{switch(n){case 0:i.ea=await e.onListen(r,!0);break;case 1:i.ea=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=oX(n,`Initialization of query '${iu(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.ta.push(t),t.sa(e.onlineState),i.ea&&t.oa(i.ea)&&o7(e)}async function o5(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.ta.indexOf(t);e>=0&&(i.ta.splice(e,1),0===i.ta.length?r=+!t.ra():!i.na()&&t.ra()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function o8(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.ta)e.oa(r)&&(n=!0);i.ea=r}}n&&o7(e)}function o4(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.ta)e.onError(n);e.queries.delete(t)}function o7(e){e.ia.forEach(e=>{e.next()})}(X=Y||(Y={}))._a="default",X.Cache="cache";class o9{constructor(e,t,n){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new o0(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){return!(e.fromCache&&this.ra())||(!this.options.Ta||"Offline"===t)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}la(e){if(e.docChanges.length>0)return!0;let t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Pa(e){e=o0.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Y.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.key=e}}class at{constructor(e){this.key=e}}class an{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=iT(),this.mutatedKeys=iT(),this.ya=id(e),this.wa=new oJ(this.ya)}get Sa(){return this.fa}ba(e,t){let n=t?t.Da:new oZ,r=t?t.wa:this.wa,i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1,a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let h=r.get(e),u=ic(this.query,t)?t:null,c=!!h&&this.mutatedKeys.has(h.key),f=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations),d=!1;h&&u?h.data.isEqual(u.data)?c!==f&&(n.track({type:3,doc:u}),d=!0):this.va(h,u)||(n.track({type:2,doc:u}),d=!0,(a&&this.ya(u,a)>0||l&&0>this.ya(u,l))&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),d=!0):h&&!u&&(n.track({type:1,doc:h}),d=!0,(a||l)&&(o=!0)),d&&(u?(s=s.add(u),i=f?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{wa:s,Da:n,ls:o,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;let s=e.Da.X_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return nk()}};return n(e)-n(t)})(e.type,t.type)||this.ya(e.doc,t.doc)),this.Ca(n),r=null!=r&&r;let o=t&&!r?this.Fa():[],a=0===this.pa.size&&this.current&&!r?1:0,l=a!==this.ga;return(this.ga=a,0!==s.length||l)?{snapshot:new o0(this.query,e.wa,i,s,e.mutatedKeys,0===a,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:o}:{Ma:o}}sa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({wa:this.wa,Da:new oZ,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=e.current)}Fa(){if(!this.current)return[];let e=this.pa;this.pa=iT(),this.wa.forEach(e=>{this.xa(e.key)&&(this.pa=this.pa.add(e.key))});let t=[];return e.forEach(e=>{this.pa.has(e)||t.push(new at(e))}),this.pa.forEach(n=>{e.has(n)||t.push(new ae(n))}),t}Oa(e){this.fa=e.gs,this.pa=iT();let t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return o0.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}const ar="SyncEngine";class ai{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class as{constructor(e){this.key=e,this.Ba=!1}}class ao{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.La={},this.ka=new ip(e=>ih(e),il),this.qa=new Map,this.Qa=new Set,this.$a=new re(nZ.comparator),this.Ka=new Map,this.Ua=new sz,this.Wa={},this.Ga=new Map,this.za=sO.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}async function aa(e,t,n=!0){let r;let i=ax(e),s=i.ka.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Na()):r=await ah(i,t,n,!0),r}async function al(e,t){let n=ax(e);await ah(n,t,!0,!1)}async function ah(e,t,n,r){var i,s;let o;let a=await (i=e.localStore,s=io(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Hr.getTargetData(e,s).next(n=>n?(t=n,n6.resolve(t)):i.Hr.allocateTargetId(e).next(n=>(t=new sI(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.Hr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.Ts.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.Ts=i.Ts.insert(e.targetId,e),i.Is.set(s,e.targetId)),e})),l=a.targetId,h=e.sharedClientState.addLocalQueryTarget(l,n);return r&&(o=await au(e,t,l,"current"===h,a.resumeToken)),e.isPrimaryClient&&n&&oS(e.remoteStore,a),o}async function au(e,t,n,r,i){e.Ha=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ba(n);i.ls&&(i=await s7(e.localStore,t.query,!1).then(({documents:e})=>t.view.ba(e,i)));let s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return a_(e,t.targetId,a.Ma),a.snapshot})(e,t,n,r);let s=await s7(e.localStore,t,!0),o=new an(t,s.gs),a=o.ba(s.documents),l=i4.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),h=o.applyChanges(a,e.isPrimaryClient,l);a_(e,n,h.Ma);let u=new ai(t,n,o);return e.ka.set(t,u),e.qa.has(n)?e.qa.get(n).push(t):e.qa.set(n,[t]),h.snapshot}async function ac(e,t,n){let r=e.ka.get(t),i=e.qa.get(r.targetId);if(i.length>1)return e.qa.set(r.targetId,i.filter(e=>!il(e,t))),void e.ka.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await s4(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&oA(e.remoteStore,r.targetId),ab(e,r.targetId)}).catch(n2)):(ab(e,r.targetId),await s4(e.localStore,r.targetId,!0))}async function af(e,t){let n=e.ka.get(t),r=e.qa.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),oA(e.remoteStore,n.targetId))}async function ad(e,t,n){var r,i;let s=((r=e).remoteStore.remoteSyncer.applySuccessfulWrite=ay.bind(null,r),r.remoteStore.remoteSyncer.rejectFailedWrite=av.bind(null,r),r);try{let e;let r=await function(e,t){let n,r;let i=nH.now(),s=t.reduce((e,t)=>e.add(t.key),iT());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=ig,l=iT();return e.ds.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=iA(r.transform,e||null);null!=i&&(null===n&&(n=r$.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new iz(e.key,t,function e(t){let n=[];return n7(t.fields,(t,r)=>{let i=new nJ([t]);if(rF(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new rs(n)}(t.value.mapValue),iU.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:iv(n)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),i=r.batchId,(e=s.Wa[s.currentUser.toKey()])||(e=new re(nz)),e=e.insert(i,n),s.Wa[s.currentUser.toKey()]=e,await aI(s,r.changes),await oV(s.remoteStore)}catch(t){let e=oX(t,"Failed to persist write");n.reject(e)}}async function ap(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s,o,a;let l,h,u=e.ds.newChangeBuffer({trackRemovals:!0});r=e.Ts;let c=[];t.targetChanges.forEach((s,o)=>{var a;let l=r.get(o);if(!l)return;c.push(e.Hr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Hr.addMatchingKeys(i,s.addedDocuments,o)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?h=h.withResumeToken(ra.EMPTY_BYTE_STRING,nG.min()).withLastLimboFreeSnapshotVersion(nG.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,n)),r=r.insert(o,h),a=h,(0===l.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&c.push(e.Hr.updateTargetData(i,h))});let f=ig,d=iT();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),c.push((s=i,o=u,a=t.documentUpdates,l=iT(),h=iT(),a.forEach(e=>l=l.add(e)),o.getEntries(s,l).next(e=>{let t=ig;return a.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(h=h.add(n)),r.isNoDocument()&&r.version.isEqual(nG.min())?(o.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(o.addEntry(r),t=t.insert(n,r)):nA(s6,"Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{Vs:t,fs:h}})).next(e=>{f=e.Vs,d=e.fs})),!n.isEqual(nG.min())){let t=e.Hr.getLastRemoteSnapshotVersion(i).next(t=>e.Hr.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(t)}return n6.waitFor(c).next(()=>u.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,f,d)).next(()=>f)}).then(t=>(e.Ts=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Ka.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||nk(),t.addedDocuments.size>0?r.Ba=!0:t.modifiedDocuments.size>0?r.Ba||nk():t.removedDocuments.size>0&&(r.Ba||nk(),r.Ba=!1))}),await aI(e,n,t)}catch(e){await n2(e)}}function ag(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.ka.forEach((e,n)=>{let r=n.view.sa(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.ta)e.sa(t)&&(n=!0)}),n&&o7(r),i.length&&e.La.p_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function am(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Ka.get(t),i=r&&r.key;if(i){let n=new re(nZ.comparator);n=n.insert(i,rq.newNoDocument(i,nG.min()));let r=iT().add(i),s=new i8(nG.min(),new Map,new re(nz),n,r);await ap(e,s),e.$a=e.$a.remove(i),e.Ka.delete(t),aC(e)}else await s4(e.localStore,t,!1).then(()=>ab(e,t,n)).catch(n2)}async function ay(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),o=n6.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||nk(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=iT();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});aE(e,r,null),aw(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await aI(e,i)}catch(e){await n2(e)}}async function av(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||nk(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});aE(e,t,n),aw(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await aI(e,i)}catch(e){await n2(e)}}function aw(e,t){(e.Ga.get(t)||[]).forEach(e=>{e.resolve()}),e.Ga.delete(t)}function aE(e,t,n){let r=e.Wa[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Wa[e.currentUser.toKey()]=r}}function ab(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.qa.get(t)))e.ka.delete(r),n&&e.La.Ja(r,n);e.qa.delete(t),e.isPrimaryClient&&e.Ua.br(t).forEach(t=>{e.Ua.containsKey(t)||aT(e,t)})}function aT(e,t){e.Qa.delete(t.path.canonicalString());let n=e.$a.get(t);null!==n&&(oA(e.remoteStore,n),e.$a=e.$a.remove(t),e.Ka.delete(n),aC(e))}function a_(e,t,n){for(let r of n)r instanceof ae?(e.Ua.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.$a.get(n)||e.Qa.has(r)||(nA(ar,"New document in limbo: "+n),e.Qa.add(r),aC(e))}(e,r)):r instanceof at?(nA(ar,"Document no longer in limbo: "+r.key),e.Ua.removeReference(r.key,t),e.Ua.containsKey(r.key)||aT(e,r.key)):nk()}function aC(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){let t=e.Qa.values().next().value;e.Qa.delete(t);let n=new nZ(nY.fromString(t)),r=e.za.next();e.Ka.set(r,new as(n)),e.$a=e.$a.insert(n,r),oS(e.remoteStore,new sI(io(new ir(n.path)),r,"TargetPurposeLimboResolution",n5.ae))}}async function aI(e,t,n){let r=[],i=[],s=[];e.ka.isEmpty()||(e.ka.forEach((o,a)=>{s.push(e.Ha(a,t,n).then(t=>{var s;if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:null===(s=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(a.targetId,r?"current":"not-current")}if(t){r.push(t);let e=s0.Yi(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.La.p_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>n6.forEach(t,t=>n6.forEach(t.Hi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>n6.forEach(t.Ji,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!n3(e))throw e;nA(s6,"Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.Ts.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.Ts=e.Ts.insert(t,i)}}}(e.localStore,i))}async function aS(e,t){var n;if(!e.currentUser.isEqual(t)){nA(ar,"User change. New user:",t.toKey());let r=await s5(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Ga.forEach(e=>{e.forEach(e=>{e.reject(new nR(nO.CANCELLED,n))})}),e.Ga.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await aI(e,r.Rs)}}function aA(e,t){let n=e.Ka.get(t);if(n&&n.Ba)return iT().add(n.key);{let n=iT(),r=e.qa.get(t);if(!r)return n;for(let t of r){let r=e.ka.get(t);n=n.unionWith(r.view.Sa)}return n}}function ax(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=ap.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=am.bind(null,e),e.La.p_=o8.bind(null,e.eventManager),e.La.Ja=o4.bind(null,e.eventManager),e}class aN{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=od(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){var t,n;return t=this.persistence,n=new s2,new s3(t,n,e.initialUser,this.serializer)}Xa(e){return new sY(sJ.ri,this.serializer)}Za(e){return new oe}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}aN.provider={build:()=>new aN};class aD extends aN{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){return this.persistence.referenceDelegate instanceof sZ||nk(),new sP(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Xa(e){let t=void 0!==this.cacheSizeBytes?sk.withCacheSize(this.cacheSizeBytes):sk.DEFAULT;return new sY(e=>sZ.ri(e,t),this.serializer)}}class ak{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ag(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=aS.bind(null,this.syncEngine),await oG(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new o2}createDatastore(e){var t;let n=od(e.databaseInfo.databaseId),r=new oc(e.databaseInfo);return t=e.authCredentials,new oE(t,e.appCheckCredentials,r,n)}createRemoteStore(e){var t,n;return t=this.localStore,n=this.datastore,new o_(t,n,e.asyncQueue,e=>ag(this.syncEngine,e,0),or.D()?new or:new ot)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){let a=new ao(e,t,n,r,i,s);return o&&(a.ja=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){nA(oT,"RemoteStore shutting down."),e.W_.add(5),await oI(e),e.z_.shutdown(),e.j_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}ak.provider={build:()=>new ak};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):nx("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="FirestoreClient";class aL{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=n_.UNAUTHENTICATED,this.clientId=nq.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{nA(aR,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(nA(aR,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new nL;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=oX(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function aM(e,t){e.asyncQueue.verifyOperationInProgress(),nA(aR,"Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await s5(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function aP(e,t){e.asyncQueue.verifyOperationInProgress();let n=await aU(e);nA(aR,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>oH(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>oH(t.remoteStore,n)),e._onlineComponents=t}async function aU(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){nA(aR,"Using user provided OfflineComponentProvider");try{await aM(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===nO.FAILED_PRECONDITION||t.code===nO.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;nN("Error using user provided cache. Falling back to memory cache: "+t),await aM(e,new aN)}}else nA(aR,"Using default OfflineComponentProvider"),await aM(e,new aD(void 0))}return e._offlineComponents}async function aF(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(nA(aR,"Using user provided OnlineComponentProvider"),await aP(e,e._uninitializedComponentsProvider._online)):(nA(aR,"Using default OnlineComponentProvider"),await aP(e,new ak))),e._onlineComponents}async function aV(e){let t=await aF(e),n=t.eventManager;return n.onListen=aa.bind(null,t.syncEngine),n.onUnlisten=ac.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=al.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=af.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aB(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aj=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a$(e,t,n){if(!n)throw new nR(nO.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function aq(e){if(!nZ.isDocumentKey(e))throw new nR(nO.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function az(e){if(nZ.isDocumentKey(e))throw new nR(nO.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function aK(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":nk()}function aH(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new nR(nO.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=aK(e);throw new nR(nO.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aG="firestore.googleapis.com";class aQ{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new nR(nO.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=aG,this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new nR(nO.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new nR(nO.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aB(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new nR(nO.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new nR(nO.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new nR(nO.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class aW{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new aQ({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new nR(nO.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new nR(nO.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new aQ(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new nP;switch(e.type){case"firstParty":return new nB(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new nR(nO.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=aj.get(e);t&&(nA("ComponentProvider","Removing Datastore"),aj.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aY{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new aY(this.firestore,e,this._query)}}class aX{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aJ(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new aX(this.firestore,e,this._key)}}class aJ extends aY{constructor(e,t,n){super(e,t,new ir(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new aX(this.firestore,null,new nZ(e))}withConverter(e){return new aJ(this.firestore,e,this._path)}}function aZ(e,t,...n){if(e=te(e),a$("collection","path",t),e instanceof aW){let r=nY.fromString(t,...n);return az(r),new aJ(e,null,r)}{if(!(e instanceof aX||e instanceof aJ))throw new nR(nO.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(nY.fromString(t,...n));return az(r),new aJ(e.firestore,null,r)}}function a0(e,t,...n){if(e=te(e),1==arguments.length&&(t=nq.newId()),a$("doc","path",t),e instanceof aW){let r=nY.fromString(t,...n);return aq(r),new aX(e,null,new nZ(r))}{if(!(e instanceof aX||e instanceof aJ))throw new nR(nO.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(nY.fromString(t,...n));return aq(r),new aX(e.firestore,e instanceof aJ?e.converter:null,new nZ(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1="AsyncQueue";class a2{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new op(this,"async_queue_retry"),this.Su=()=>{let e=of();e&&nA(a1,"Visibility state changed to "+e.visibilityState),this.a_.t_()},this.bu=e;let t=of();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;let t=of();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});let t=new nL;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!n3(e))throw e;nA(a1,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){let t=this.bu.then(()=>(this.pu=!0,e().catch(e=>{let t;throw this.gu=e,this.pu=!1,nx("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.pu=!1,e))));return this.bu=t,t}enqueueAfterDelay(e,t,n){this.Du(),this.wu.indexOf(e)>-1&&(t=0);let r=oY.createAndSchedule(this,e,t,n,e=>this.Fu(e));return this.fu.push(r),r}Du(){this.gu&&nk()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(let t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{for(let t of(this.fu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.fu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){let t=this.fu.indexOf(e);this.fu.splice(t,1)}}class a6 extends aW{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new a2,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new a2(e),this._firestoreClient=void 0,await e}}}function a3(e){if(e._terminated)throw new nR(nO.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r,i,s;let o=e._freezeSettings(),a=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",new rw(i,s,e._persistenceKey,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,aB(o.experimentalLongPollingOptions),o.useFetchStreams));e._componentsProvider||(null===(n=o.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),e._firestoreClient=new aL(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(e){this._byteString=e}static fromBase64String(e){try{return new a5(ra.fromBase64String(e))}catch(e){throw new nR(nO.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new a5(ra.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a8{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new nR(nO.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nJ(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a7{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new nR(nO.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new nR(nO.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return nz(this._lat,e._lat)||nz(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a9{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=/^__.*__$/;class lt{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new iz(e,this.data,this.fieldMask,t,this.fieldTransforms):new iq(e,this.data,t,this.fieldTransforms)}}function ln(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nk()}}class lr{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new lr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.$u(e),r}Ku(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.Bu(),r}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return lh(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(0===e.length)throw this.Wu("Document fields must not be empty");if(ln(this.Lu)&&le.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class li{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||od(e)}ju(e,t,n,r=!1){return new lr({Lu:e,methodName:t,zu:n,path:nJ.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ls(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof nH||e instanceof a7||e instanceof a5||e instanceof aX||e instanceof a4||e instanceof a9)}function lo(e,t,n){if(!ls(n)||"object"!=typeof n||null===n||Object.getPrototypeOf(n)!==Object.prototype&&null!==Object.getPrototypeOf(n)){let r=aK(n);throw"an object"===r?t.Wu(e+" a custom object"):t.Wu(e+" "+r)}}const la=RegExp("[~\\*/\\[\\]]");function ll(e,t,n){if(t.search(la)>=0)throw lh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new a8(...t.split("."))._internalPath}catch(r){throw lh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function lh(e,t,n,r,i){let s=r&&!r.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new nR(nO.INVALID_ARGUMENT,a+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new aX(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new lc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(lf("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class lc extends lu{data(){return super.data()}}function lf(e,t){return"string"==typeof t?ll(e,t):t instanceof a8?t._internalPath:t._delegate._internalPath}class ld{convertValue(e,t="none"){switch(rA(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ru(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rc(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw nk()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return n7(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;return new a9(null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[rS].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>ru(e.doubleValue)))}convertGeoPoint(e){return new a7(ru(e.latitude),ru(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=ry(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(rv(e));default:return null}}convertTimestamp(e){let t=rh(e);return new nH(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=nY.fromString(e);sC(n)||nk();let r=new rb(n.get(1),n.get(3)),i=new nZ(n.popFirst(5));return r.isEqual(t)||nx(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lg extends lu{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new lm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(lf("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class lm extends lg{data(e={}){return super.data(e)}}class ly{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new lp(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new lm(this._firestore,this._userDataWriter,n.key,n,new lp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new nR(nO.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new lm(e._firestore,e._userDataWriter,n.doc.key,n.doc,new lp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new lm(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return nk()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class lv extends ld{constructor(e){super(),this.firestore=e}convertBytes(e){return new a5(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new aX(this.firestore,null,t)}}function lw(e,t){return function(e,t){let n=new nL;return e.asyncQueue.enqueueAndForget(async()=>ad(await aF(e).then(e=>e.syncEngine),t,n)),n.promise}(a3(e),t)}new WeakMap,function(e=!0){nC="11.3.1",tL(new tt("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new a6(new nF(t.getProvider("auth-internal")),new n$(i,t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new nR(nO.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rb(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),tF(nb,nT,void 0),tF(nb,nT,"esm2017")}();const lE=function(e,t){let n=(function(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)})("object"==typeof e?e:function(e=tx){let t=tD.get(e);if(!t&&e===tx&&e6())return tU();if(!t)throw tM.create("no-app",{appName:e});return t}(),"firestore").getImmediate({identifier:"string"==typeof e?e:rE});if(!n._initialized){let e=e2("firestore");e&&function(e,t,n,r={}){var i;let s=(e=aH(e,aW))._getSettings(),o=`${t}:${n}`;if(s.host!==aG&&s.host!==o&&nN("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=n_.MOCK_USER;else{t=function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[eW(JSON.stringify({alg:"none",type:"JWT"})),eW(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new nR(nO.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new n_(s)}e._authCredentials=new nU(new nM(t,n))}}(n,...e)}return n}(tU({apiKey:"AIzaSyDfyBO37Hlr5miCbqP07S_sARXlyn-koE0",authDomain:"recipe-organizer-web-app.firebaseapp.com",projectId:"recipe-organizer-web-app",storageBucket:"recipe-organizer-web-app.firebasestorage.app",messagingSenderId:"50151959549",appId:"1:50151959549:web:db1fdab4a07df76e140794",measurementId:"G-W0GN1DPC4Q"}));async function lb(){try{return n=(await function(e){e=aH(e,aX);let t=aH(e.firestore,a6);return(function(e,t,n={}){let r=new nL;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new aO({next:a=>{s.su(),t.enqueueAndForget(()=>o5(e,o));let l=a.docs.has(n);!l&&a.fromCache?i.reject(new nR(nO.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&a.fromCache&&r&&"server"===r.source?i.reject(new nR(nO.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new o9(new ir(n.path),s,{includeMetadataChanges:!0,Ta:!0});return o3(e,o)})(await aV(e),e.asyncQueue,t,n,r)),r.promise})(a3(t),e._key).then(n=>(function(e,t,n){let r=n.docs.get(t._key),i=new lv(e);return new lg(e,i,t._key,r,new lp(n.hasPendingWrites,n.fromCache),t.converter)})(t,e,n))}(a0(lE,"apikey","googlegenai"))).data().key,r=new ek(n).getGenerativeModel({model:"gemini-1.5-flash"}),console.log("API key initialized and model set."),r}catch(e){console.error("Error getting API key:",e)}}lb().catch(e=>console.error("Error during initialization:",e)),lb().then(()=>{r?console.log("Model is ready to use."):console.log("Model not initialized.")}).catch(e=>{console.error("Error initializing API or model:",e)}),document.addEventListener("DOMContentLoaded",()=>{l_();let e=document.getElementById("addButton");e&&e.addEventListener("click",lT);let t=document.getElementById("fetchButton");t&&t.addEventListener("click",l_);let n=document.getElementById("recipeList");n&&n.addEventListener("click",e=>{e.target&&e.target.classList.contains("delete-btn")&&lC(e.target.getAttribute("data-id"))})});const lT=async()=>{let e=document.getElementById("recipeTitle").value,t=document.getElementById("recipeIngredients").value,n=document.getElementById("recipeInstructions").value;if(e&&t&&n)try{let r=aZ(lE,"recipes");await function(e,t){var n;let r=aH(e.firestore,a6),i=a0(e),s=(n=e.converter)?n.toFirestore(t):t;return lw(r,[(function(e,t,n,r,i,s={}){let o,a;let l=e.ju(s.merge||s.mergeFields?2:0,t,n,i);lo("Data must be an object, but it was:",l,r);let h=function e(t,n){let r={};return n9(t)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):n7(t,(t,i)=>{let s=function t(n,r){if(ls(n=te(n)))return lo("Unsupported field value:",r,n),e(n,r);if(n instanceof a4)return function(e,t){if(!ln(t.Lu))throw t.Wu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Wu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(n,r),null;if(void 0===n&&r.ignoreUndefinedProperties)return null;if(r.path&&r.fieldMask.push(r.path),n instanceof Array){if(r.settings.Qu&&4!==r.Lu)throw r.Wu("Nested arrays are not supported");return function(e,n){let r=[],i=0;for(let s of e){let e=t(s,n.Uu(i));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),i++}return{arrayValue:{values:r}}}(n,r)}return function(e,t){var n,r,i;if(null===(e=te(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!n8(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?iI(r):iC(n,r);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=nH.fromDate(e);return{timestampValue:su(t.serializer,n)}}if(e instanceof nH){let n=new nH(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:su(t.serializer,n)}}if(e instanceof a7)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof a5)return{bytesValue:sc(t.serializer,e._byteString)};if(e instanceof aX){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Wu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:sd(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof a9)return{mapValue:{fields:{[rT]:{stringValue:rI},[rS]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.Wu("VectorValues must only contain numeric values.");return iC(t.serializer,e)})}}}}};throw t.Wu(`Unsupported field value: ${aK(e)}`)}(n,r)}(i,n.qu(t));null!=s&&(r[t]=s)}),{mapValue:{fields:r}}}(r,l);if(s.merge)o=new rs(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=function(e,t,n){if((t=te(t))instanceof a8)return t._internalPath;if("string"==typeof t)return ll(e,t);throw lh("Field path arguments must be of type string or ",e,!1,void 0,n)}(t,r,n);if(!l.contains(i))throw new nR(nO.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,i)||e.push(i)}o=new rs(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new lt(new r$(h),o,a)})(function(e){let t=e._freezeSettings(),n=od(e._databaseId);return new li(e._databaseId,!!t.ignoreUndefinedProperties,n)}(e.firestore),"addDoc",i._key,s,null!==e.converter,{}).toMutation(i._key,iU.exists(!1))]).then(()=>i)}(r,{title:e,ingredients:t,instructions:n}),alert("Recipe added successfully!"),l_(),lI()}catch(e){console.error("Error adding recipe:",e)}else alert("Please fill in all fields!")},l_=async()=>{let e=document.getElementById("recipeList");e.innerHTML="";try{let t=aZ(lE,"recipes");(await function(e){e=aH(e,aY);let t=aH(e.firestore,a6),n=a3(t),r=new lv(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new nR(nO.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let r=new nL;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new aO({next:n=>{s.su(),t.enqueueAndForget(()=>o5(e,o)),n.fromCache&&"server"===r.source?i.reject(new nR(nO.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new o9(n,s,{includeMetadataChanges:!0,Ta:!0});return o3(e,o)})(await aV(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new ly(t,r,e,n)))}(t)).forEach(t=>{let n=t.data(),r=document.createElement("li");r.innerHTML=`
                <h3>${n.title}</h3>
                <p>Ingredients: ${n.ingredients}</p>
                <p>Instructions: ${n.instructions}</p>
                <button class="delete-btn" data-id="${t.id}">Delete</button>
            `,e.appendChild(r)})}catch(e){console.error("Error fetching recipes:",e)}},lC=e=>{var t;lw(aH((t=a0(lE,"recipes",e)).firestore,a6),[new iQ(t._key,iU.none())]).then(()=>{console.log(`Recipe with ID ${e} deleted`),l_()}).catch(e=>{console.error("Error deleting recipe:",e)})},lI=()=>{document.getElementById("recipeTitle").value="",document.getElementById("recipeIngredients").value="",document.getElementById("recipeInstructions").value=""},lS=document.getElementById("send-btn"),lA=document.getElementById("chat-input"),lx=document.getElementById("chat-history");function lN(e){let t=document.createElement("div");t.textContent=e,t.className="history",lx.appendChild(t),lA.value=""}async function lD(){let e=lA.value.trim().toLowerCase();if(e){if(e.startsWith("add recipe")){let t=e.replace("add recipe","").trim();t?(addTask(t),lN(`Recipe "${t}" added!`)):lN("Please specify a recipe to add.")}else if(e.startsWith("complete")){let t=e.replace("complete","").trim();t?lN(`Recipe "${t}" marked as complete.`):lN("Please specify a recipe to complete.")}else lN(await lk(e))}else lN("Please enter a prompt.")}async function lk(e){if(!r)return console.error("Model not initialized."),"AI model not initialized.";try{let t=await r.generateContent(e);if(t&&t.candidates&&t.candidates.length>0)return await t.candidates[0].text();return"This Generative Language API is the only ~chatbot~ I was able to find and utilize but otherwise fully functional"}catch(e){return console.error("Error interacting with AI:",e),"Sorry, there was an issue with the AI request."}}lS.addEventListener("click",async()=>{await lD()});
//# sourceMappingURL=index.3fe2365d.js.map
