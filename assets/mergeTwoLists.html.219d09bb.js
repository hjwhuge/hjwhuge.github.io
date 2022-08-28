import{r as e,o as p,a as t,b as n,e as o,F as c,d as s,c as l}from"./app.72349eea.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h3",{id:"\u9898\u76EE-\u4E24\u4E2A\u6709\u5E8F\u7684\u94FE\u8868\u5408\u5E76",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9898\u76EE-\u4E24\u4E2A\u6709\u5E8F\u7684\u94FE\u8868\u5408\u5E76","aria-hidden":"true"},"#"),s(" \u9898\u76EE - \u4E24\u4E2A\u6709\u5E8F\u7684\u94FE\u8868\u5408\u5E76")],-1),k={href:"https://leetcode-cn.com/problems/merge-two-sorted-lists/",target:"_blank",rel:"noopener noreferrer"},d=s("leetcode 21"),b=l(`<p>\u5C06\u4E24\u4E2A\u5347\u5E8F\u94FE\u8868\u5408\u5E76\u4E3A\u4E00\u4E2A\u65B0\u7684 \u5347\u5E8F \u94FE\u8868\u5E76\u8FD4\u56DE\u3002\u65B0\u94FE\u8868\u662F\u901A\u8FC7\u62FC\u63A5\u7ED9\u5B9A\u7684\u4E24\u4E2A\u94FE\u8868\u7684\u6240\u6709\u8282\u70B9\u7EC4\u6210\u7684\u3002</p><h4 id="\u5B9E\u73B0\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a> \u5B9E\u73B0\u601D\u8DEF</h4><ul><li>\u601D\u8DEF\u4E00\uFF1Awhile \u5FAA\u73AF\u904D\u5386\uFF0C\u7EC8\u6B62\u6761\u4EF6\u4E24\u4E2A\u90FD\u4E0D\u662F\u7A7A\u94FE\u8868\uFF0C\u5224\u65AD\u94FE\u8868\u5934\u7ED3\u70B9\u5927\u5C0F\uFF0C\u5C0F\u7684\u653E\u5165\u7ED3\u679C\u4E2D\uFF0C\u5E76\u628A\u8BE5\u94FE\u8868\u5934\u7ED3\u70B9\u540E\u79FB\u4E00\u4F4D\u3002</li><li>\u601D\u8DEF\u4E8C\uFF1A\u9012\u5F52\u5B9E\u73B0</li></ul><h3 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h3><h4 id="\u5FAA\u73AF\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u5B9E\u73B0" aria-hidden="true">#</a> \u5FAA\u73AF\u5B9E\u73B0</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">list1<span class="token punctuation">,</span> list2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8BBE\u7F6E\u54E8\u5175\u8282\u70B9\uFF0C\u65B9\u4FBF\u8FD4\u56DE\u6700\u7EC8\u7ED3\u679C</span>
  <span class="token keyword">const</span> prehead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u7EF4\u62A4prev\u6307\u9488\uFF0C\u6BCF\u6B21\u52A0\u5165\u4E00\u4E2A\u6570\u636E\u540E\uFF0C\u66F4\u65B0prev\u6307\u9488</span>
  <span class="token keyword">let</span> prev <span class="token operator">=</span> prehead<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>list1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> list2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      prev<span class="token punctuation">.</span>next <span class="token operator">=</span> list1<span class="token punctuation">;</span>
      list1 <span class="token operator">=</span> list1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      prev<span class="token punctuation">.</span>next <span class="token operator">=</span> list2<span class="token punctuation">;</span>
      list2 <span class="token operator">=</span> list2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5FAA\u73AF\u7ED3\u675F\uFF0C\u4F1A\u5B58\u5728\u8FD8\u6709\u4E00\u4E2A\u94FE\u8868\u4E0D\u4F1A\u7A7A\uFF0C\u628A\u5B83\u62FC\u63A5\u5230prev\u6307\u9488\u540E\u9762</span>
  prev<span class="token punctuation">.</span>next <span class="token operator">=</span> list1 <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> list2 <span class="token operator">:</span> list1<span class="token punctuation">;</span>
  <span class="token keyword">return</span> prehead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="\u9012\u5F52\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u5B9E\u73B0" aria-hidden="true">#</a> \u9012\u5F52\u5B9E\u73B0</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,8);function m(h,v){const a=e("ExternalLinkIcon");return p(),t(c,null,[u,n("blockquote",null,[n("p",null,[n("a",k,[d,o(a)])])]),b],64)}var f=r(i,[["render",m]]);export{f as default};
