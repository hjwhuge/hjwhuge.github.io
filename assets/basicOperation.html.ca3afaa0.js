import{c as n}from"./app.72349eea.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h3 id="\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> \u57FA\u672C\u64CD\u4F5C</h3><blockquote><p>\u5355\u94FE\u8868\uFF1A\u67E5\u627E\u3001\u63D2\u5165\u3001\u5220\u9664\u64CD\u4F5C</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token string">&quot;head&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u6839\u636Evalue\u67E5\u627E\u8282\u70B9</span>
  <span class="token function">findByValue</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> currentNode<span class="token punctuation">.</span>val <span class="token operator">!==</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> currentNode <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> currentNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6839\u636Eindex\u67E5\u627E\u8282\u70B9\uFF0C\u4E0B\u6807\u4ECE0\u5F00\u59CB</span>
  <span class="token function">findByIndex</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">let</span> pos <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> pos <span class="token operator">!==</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      pos<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> currentNode <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> currentNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5411\u94FE\u8868\u672B\u5C3E\u8FFD\u52A0\u8282\u70B9</span>
  <span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6307\u5B9A\u5143\u7D20\u5411\u540E\u63D2\u5165</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findByValue</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u672A\u627E\u5230\u63D2\u5165\u4F4D\u7F6E&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u67E5\u627E\u524D\u4E00\u4E2A</span>
  <span class="token function">findPrev</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">!==</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> currentNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6839\u636E\u503C\u5220\u9664</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> prevNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findPrev</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prevNode <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u672A\u627E\u5230\u5143\u7D20&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    prevNode<span class="token punctuation">.</span>next <span class="token operator">=</span> prevNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u904D\u5386\u663E\u793A\u6240\u6709\u8282\u70B9</span>
  <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// \u5FFD\u7565\u5934\u6307\u9488\u7684\u503C</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br></div></div><p>\u6D4B\u8BD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> LList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
LList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
LList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
LList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
LList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// A -&gt; B -&gt; C -&gt; D</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;-------------insert item------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
LList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9996\u5143\u7D20\u540E\u63D2\u5165</span>
LList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;Y&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C3E\u5143\u7D20\u540E\u63D2\u5165</span>
LList<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// A -&gt; X -&gt; B -&gt; C -&gt; D -&gt; Y</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;-------------remove item------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
LList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
LList<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// A -&gt; X -&gt; C -&gt; D -&gt; Y</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;-------------find by item------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
LList<span class="token punctuation">.</span><span class="token function">findByValue</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;-------------find by index------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
LList<span class="token punctuation">.</span><span class="token function">findByIndex</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;-------------\u4E0E\u5934\u7ED3\u70B9\u540C\u503C\u5143\u7D20\u6D4B\u8BD5------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
LList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;head&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
LList<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// A -&gt; X -&gt; C -&gt; head -&gt; D -&gt; Y</span>
LList<span class="token punctuation">.</span><span class="token function">findPrev</span><span class="token punctuation">(</span><span class="token string">&quot;head&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// C</span>
LList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;head&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
LList<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// A -&gt; X -&gt; C -&gt; D -&gt; Y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,5);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
