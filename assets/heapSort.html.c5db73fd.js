import{o as a,a as p,b as t,F as e,c as n}from"./app.72349eea.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const c={},l=n('<h3 id="\u5806\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5806\u6392\u5E8F" aria-hidden="true">#</a> \u5806\u6392\u5E8F</h3><h3 id="\u601D\u60F3" tabindex="-1"><a class="header-anchor" href="#\u601D\u60F3" aria-hidden="true">#</a> \u601D\u60F3</h3><p>\u6211\u4EEC\u53EF\u4EE5\u628A\u5806\u6392\u5E8F\u7684\u8FC7\u7A0B\u5927\u81F4\u5206\u89E3\u6210\u4E24\u4E2A\u5927\u7684\u6B65\u9AA4\uFF0C\u5EFA\u5806\u548C\u6392\u5E8F\u3002</p><p>1\u3001\u5EFA\u5806\uFF0C\u6211\u4EEC\u9996\u5148\u5C06\u6570\u7EC4\u5EFA\u6210\u4E00\u4E2A\u5806\uFF08\u4EE5\u5927\u9876\u5806\u4E3A\u4F8B\uFF09\u3002\u5EFA\u5806\u7684\u8FC7\u7A0B\uFF0C\u6709\u4E24\u79CD\u601D\u8DEF\uFF1A\u4E0A\u6D6E\u6216\u8005\u4E0B\u6C89\u3002</p><ul><li>\u66F4\u591A\u5B9E\u73B0\u53EF\u4EE5\u67E5\u770B \u6570\u636E\u7ED3\u6784 - \u5806 - \u5806\u7684\u57FA\u672C\u64CD\u4F5C</li></ul><p>2\u3001\u6392\u5E8F</p><ul><li><p>\u5EFA\u5806\u7ED3\u675F\u4E4B\u540E\uFF0C\u6839\u636E\u5927\u9876\u5806\u7684\u7279\u6027\u3002\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u5C31\u662F\u5806\u9876\uFF0C\u4E5F\u5C31\u662F\u6700\u5927\u7684\u5143\u7D20\u3002\u6211\u4EEC\u628A\u5B83\u8DDF\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u4EA4\u6362\uFF0C\u90A3\u6700\u5927\u5143\u7D20\u5C31\u653E\u5230\u4E86\u4E0B\u6807\u4E3A n \u7684\u4F4D\u7F6E</p></li><li><p>\u8FD9\u4E2A\u8FC7\u7A0B\u6709\u70B9\u7C7B\u4F3C\u4E0A\u9762\u8BB2\u7684\u201C\u5220\u9664\u5806\u9876\u5143\u7D20\u201D\u7684\u64CD\u4F5C\uFF0C\u5F53\u5806\u9876\u5143\u7D20\u79FB\u9664\u4E4B\u540E\uFF0C\u6211\u4EEC\u628A\u4E0B\u6807\u4E3A n \u7684\u5143\u7D20\u653E\u5230\u5806\u9876\uFF0C\u7136\u540E\u518D\u901A\u8FC7\u5806\u5316\u7684\u65B9\u6CD5\uFF0C\u5C06\u5269\u4E0B\u7684 n\u22121 \u4E2A\u5143\u7D20\u91CD\u65B0\u6784\u5EFA\u6210\u5806\u3002\u5806\u5316\u5B8C\u6210\u4E4B\u540E\uFF0C\u6211\u4EEC\u518D\u53D6\u5806\u9876\u7684\u5143\u7D20\uFF0C\u653E\u5230\u4E0B\u6807\u662F n\u22121 \u7684\u4F4D\u7F6E\uFF0C\u4E00\u76F4\u91CD\u590D\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u76F4\u5230\u6700\u540E\u5806\u4E2D\u53EA\u5269\u4E0B\u6807\u4E3A 1 \u7684\u4E00\u4E2A\u5143\u7D20\uFF0C\u6392\u5E8F\u5DE5\u4F5C\u5C31\u5B8C\u6210\u4E86\u3002</p></li></ul>',7),u=["src"],r=n(`<h3 id="\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a> \u89E3\u6CD5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">heapSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">buildHeap</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;buildHeap&quot;</span><span class="token punctuation">,</span> array<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u4EA4\u6362\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u7136\u540E\u91CD\u65B0\u8C03\u6574\u5927\u9876\u5806</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">bubbleDown</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> array<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5806\u5316\u6570\u636E\uFF0C\u4ECE\u6700\u540E\u4E00\u4E2A\u975E\u53F6\u5B50\u8282\u70B9\u5F00\u59CB\u4E0B\u6C89\uFF0C\u4E00\u76F4\u5230\u5806\u9876\u5143\u7D20</span>
<span class="token keyword">function</span> <span class="token function">buildHeap</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> start <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">bubbleDown</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> i<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8FD9\u91CC\u4E0B\u6C89\u6839\u636E\u4E0D\u540Clen\u6765\u8FDB\u884C\u5806\u6392\u5E8F</span>
<span class="token keyword">function</span> <span class="token function">bubbleDown</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> index<span class="token punctuation">,</span> len</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> leftIndex <span class="token operator">=</span> index <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rightIndex <span class="token operator">=</span> index <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token comment">// \u7528\u4E8E\u548C\u5B50\u8282\u70B9\u6BD4\u8F83</span>
    <span class="token keyword">let</span> findIndex <span class="token operator">=</span> index<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">&lt;=</span> len <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">-</span> array<span class="token punctuation">[</span>findIndex<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      findIndex <span class="token operator">=</span> leftIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rightIndex <span class="token operator">&lt;=</span> len <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span> <span class="token operator">-</span> array<span class="token punctuation">[</span>findIndex<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      findIndex <span class="token operator">=</span> rightIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!==</span> findIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>findIndex<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>array<span class="token punctuation">[</span>findIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      index <span class="token operator">=</span> findIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="\u590D\u6742\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u590D\u6742\u5EA6" aria-hidden="true">#</a> \u590D\u6742\u5EA6</h3><p>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(nlogn)</p><p>\u7A7A\u95F4\u590D\u6742\u5EA6:O(1)</p><h3 id="\u7A33\u5B9A\u6027" tabindex="-1"><a class="header-anchor" href="#\u7A33\u5B9A\u6027" aria-hidden="true">#</a> \u7A33\u5B9A\u6027</h3><blockquote><p>\u5BF9\u4E8E\u503C\u76F8\u540C\u7684\u5143\u7D20\uFF0C\u6392\u5E8F\u4E4B\u540E\u76F8\u5BF9\u4F4D\u7F6E\u4E0D\u53D8</p></blockquote><p>\u4E0D\u7A33\u5B9A</p>`,8);function i(s,k){return a(),p(e,null,[l,t("img",{src:s.$withBase("/heapSort.png"),alt:"\u5806\u6392\u5E8F"},null,8,u),r],64)}var m=o(c,[["render",i]]);export{m as default};
