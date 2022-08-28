import{r as p,o as t,a as o,b as n,e,F as c,d as s,c as l}from"./app.72349eea.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},k=n("h3",{id:"\u9898\u76EE-\u7F16\u8F91\u8DDD\u79BB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9898\u76EE-\u7F16\u8F91\u8DDD\u79BB","aria-hidden":"true"},"#"),s(" \u9898\u76EE - \u7F16\u8F91\u8DDD\u79BB")],-1),i={href:"https://leetcode-cn.com/problems/edit-distance/",target:"_blank",rel:"noopener noreferrer"},b=s("leetcode 72"),m=l(`<h4 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a> \u9898\u76EE\u63CF\u8FF0</h4><p>\u7ED9\u4F60\u4E24\u4E2A\u5355\u8BCD \xA0word1 \u548C \xA0word2\uFF0C \u8BF7\u8FD4\u56DE\u5C06 \xA0word1\xA0 \u8F6C\u6362\u6210 \xA0word2 \u6240\u4F7F\u7528\u7684\u6700\u5C11\u64CD\u4F5C\u6570 \xA0\u3002</p><p>\u4F60\u53EF\u4EE5\u5BF9\u4E00\u4E2A\u5355\u8BCD\u8FDB\u884C\u5982\u4E0B\u4E09\u79CD\u64CD\u4F5C\uFF1A</p><ul><li>\u63D2\u5165\u4E00\u4E2A\u5B57\u7B26</li><li>\u5220\u9664\u4E00\u4E2A\u5B57\u7B26</li><li>\u66FF\u6362\u4E00\u4E2A\u5B57\u7B26</li></ul><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u8F93\u5165\uFF1Aword1 <span class="token operator">=</span> <span class="token string">&quot;horse&quot;</span><span class="token punctuation">,</span> word2 <span class="token operator">=</span> <span class="token string">&quot;ros&quot;</span>
\u8F93\u51FA\uFF1A<span class="token number">3</span>
\u89E3\u91CA\uFF1A
horse <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token function">rorse</span> <span class="token punctuation">(</span>\u5C06 <span class="token string">&#39;h&#39;</span> \u66FF\u6362\u4E3A <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span>
rorse <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token function">rose</span> <span class="token punctuation">(</span>\u5220\u9664 <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span>
rose <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token function">ros</span> <span class="token punctuation">(</span>\u5220\u9664 <span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h3><ul><li>\u52A8\u6001\u89C4\u5212\u5B9E\u73B0</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">minDistance</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word1<span class="token punctuation">,</span> word2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> m <span class="token operator">=</span> word1<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> word2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token comment">// \u6709\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E3A\u7A7A\u5B57\u7B26\u4E32</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">*</span> m <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n <span class="token operator">+</span> m<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// DP \u6570\u7EC4</span>
  <span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u8FB9\u754C\u72B6\u6001\u521D\u59CB\u5316</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u8BA1\u7B97\u6240\u6709 DP \u503C</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> left <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> down <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> left_down <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// charAt \u8FD4\u56DE\u6307\u5B9A\u4F4D\u7F6E\u7684\u5B57\u7B26</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>word1<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">!=</span> word2<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        left_down <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>down<span class="token punctuation">,</span> left_down<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> dp<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>`,9);function d(f,h){const a=p("ExternalLinkIcon");return t(),o(c,null,[k,n("blockquote",null,[n("p",null,[n("a",i,[b,e(a)])])]),m],64)}var g=r(u,[["render",d]]);export{g as default};
