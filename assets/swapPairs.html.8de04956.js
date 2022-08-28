import{r as e,o as p,a as t,b as n,e as o,F as c,d as s,c as r}from"./app.72349eea.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h3",{id:"\u9898\u76EE-\u94FE\u8868\u4EA4\u6362\u76F8\u90BB\u5143\u7D20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9898\u76EE-\u94FE\u8868\u4EA4\u6362\u76F8\u90BB\u5143\u7D20","aria-hidden":"true"},"#"),s(" \u9898\u76EE - \u94FE\u8868\u4EA4\u6362\u76F8\u90BB\u5143\u7D20")],-1),k={href:"https://leetcode-cn.com/problems/swap-nodes-in-pairs/",target:"_blank",rel:"noopener noreferrer"},d=s("leetcode 24"),m=r(`<p>\u7ED9\u4F60\u4E00\u4E2A\u94FE\u8868\uFF0C\u4E24\u4E24\u4EA4\u6362\u5176\u4E2D\u76F8\u90BB\u7684\u8282\u70B9\uFF0C\u5E76\u8FD4\u56DE\u4EA4\u6362\u540E\u94FE\u8868\u7684\u5934\u8282\u70B9\u3002\u4F60\u5FC5\u987B\u5728\u4E0D\u4FEE\u6539\u8282\u70B9\u5185\u90E8\u7684\u503C\u7684\u60C5\u51B5\u4E0B\u5B8C\u6210\u672C\u9898\uFF08\u5373\uFF0C\u53EA\u80FD\u8FDB\u884C\u8282\u70B9\u4EA4\u6362\uFF09\u3002</p><h4 id="\u5B9E\u73B0\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a> \u5B9E\u73B0\u601D\u8DEF</h4><p>\u521B\u5EFA\u54D1\u7ED3\u70B9 dummy\uFF0C\u521B\u5EFA temp \u6307\u5411\u5F53\u524D\u8282\u70B9\uFF08\u521D\u59CB\u4E3A\u54D1\u7ED3\u70B9\uFF09\uFF0C\u5FAA\u73AF temp \u8282\u70B9\uFF0C\u5982\u679C temp \u540E\u9762\u6709\u4E24\u4E2A\u8282\u70B9\u624D\u8FDB\u884C\u904D\u5386</p><p>\u83B7\u5F97 temp \u540E\u9762\u7684\u4E24\u4E2A\u8282\u70B9 node1 \u548C node2</p><p>\u904D\u5386\u4E2D\u9700\u8981\u8FDB\u884C\u7684\u64CD\u4F5C\u662F\uFF1A\u628A temp -&gt; node1 -&gt; node2 \u8F6C\u6362\u6210 temp -&gt; node2 -&gt; node1\uFF1B\u7136\u540E\u628A temp \u8BBE\u4E3A node1.</p><h3 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">swapPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> temp <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node1 <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">const</span> node2 <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token comment">// \u5173\u952E\u4EE3\u7801</span>
    temp<span class="token punctuation">.</span>next <span class="token operator">=</span> node2<span class="token punctuation">;</span>
    node1<span class="token punctuation">.</span>next <span class="token operator">=</span> node2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node1<span class="token punctuation">;</span>
    temp <span class="token operator">=</span> node1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,7);function b(h,x){const a=e("ExternalLinkIcon");return p(),t(c,null,[i,n("blockquote",null,[n("p",null,[n("a",k,[d,o(a)])])]),m],64)}var w=l(u,[["render",b]]);export{w as default};
