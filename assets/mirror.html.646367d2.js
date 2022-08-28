import{r as p,o as t,a as e,b as n,e as o,F as c,d as s,c as r}from"./app.72349eea.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const l={},i=n("h3",{id:"\u9898\u76EE-\u4E8C\u53C9\u6811\u7684\u955C\u50CF",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9898\u76EE-\u4E8C\u53C9\u6811\u7684\u955C\u50CF","aria-hidden":"true"},"#"),s(" \u9898\u76EE - \u4E8C\u53C9\u6811\u7684\u955C\u50CF")],-1),k={href:"https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/",target:"_blank",rel:"noopener noreferrer"},b=s("leetcode 27"),m=r(`<p>\u9898\u76EE\u63CF\u8FF0</p><p>\u8BF7\u5B8C\u6210\u4E00\u4E2A\u51FD\u6570\uFF0C\u8F93\u5165\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u8BE5\u51FD\u6570\u8F93\u51FA\u5B83\u7684\u955C\u50CF\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u8F93\u5165\uFF1Aroot <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span>
\u8F93\u51FA\uFF1A<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h3><p>\u904D\u5386\u6BCF\u4E2A\u8282\u70B9\uFF0C\u5982\u679C\u8BE5\u8282\u70B9\u6709\u5B50\u8282\u70B9\uFF0C\u5C31\u4EA4\u6362\u5B83\u7684\u4E24\u4E2A\u5B50\u8282\u70B9\u3002\u5F53\u4EA4\u6362\u5B8C\u6240\u6709\u8282\u70B9\u7684\u5DE6\u53F3\u5B50\u8282\u70B9\u4E4B\u540E\uFF0C\u5C31\u5F97\u5230\u6811\u7684\u955C\u50CF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">mirrorTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> tempNode <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>left <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>right <span class="token operator">=</span> tempNode<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">mirrorTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">mirrorTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,7);function d(h,f){const a=p("ExternalLinkIcon");return t(),e(c,null,[i,n("blockquote",null,[n("p",null,[n("a",k,[b,o(a)])])]),m],64)}var v=u(l,[["render",d]]);export{v as default};
