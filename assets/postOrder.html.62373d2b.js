import{r as p,o as t,a as e,b as n,e as o,F as c,d as s,c as l}from"./app.72349eea.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h3",{id:"\u9898\u76EE-\u540E\u5E8F\u904D\u5386",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9898\u76EE-\u540E\u5E8F\u904D\u5386","aria-hidden":"true"},"#"),s(" \u9898\u76EE - \u540E\u5E8F\u904D\u5386")],-1),k={href:"https://leetcode-cn.com/problems/binary-tree-postorder-traversal/",target:"_blank",rel:"noopener noreferrer"},b=s("leetcode 145"),m=l(`<p>\u7ED9\u4F60\u4E8C\u53C9\u6811\u7684\u6839\u8282\u70B9 root\uFF0C\u8FD4\u56DE\u5B83\u8282\u70B9\u503C\u7684\u540E\u5E8F\u904D\u5386</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">\u8F93\u5165</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
   <span class="token number">1</span>
    \\
     <span class="token number">2</span>
    <span class="token operator">/</span>
   <span class="token number">3</span>
<span class="token literal-property property">\u8F93\u51FA</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FDB\u9636: \u9012\u5F52\u7B97\u6CD5\u5F88\u7B80\u5355\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8FED\u4EE3\u7B97\u6CD5\u5B8C\u6210\u5417\uFF1F</p><h3 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h3><p>\u9012\u5F52\u5B9E\u73B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">postorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> array<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> array<span class="token punctuation">)</span><span class="token punctuation">;</span>
    array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> array<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u975E\u9012\u5F52\u5B9E\u73B0</p><blockquote><p>\u4E24\u79CD\u65B9\u5F0F\u662F\u7B49\u4EF7\u7684\uFF0C\u533A\u522B\u5728\u4E8E\u9012\u5F52\u7684\u65F6\u5019\u9690\u5F0F\u5730\u7EF4\u62A4\u4E86\u4E00\u4E2A\u6808\uFF0C\u800C\u6211\u4EEC\u5728\u8FED\u4EE3\u7684\u65F6\u5019\u9700\u8981\u663E\u5F0F\u5730\u5C06\u8FD9\u4E2A\u6808\u6A21\u62DF\u51FA\u6765\uFF0C\u5176\u4ED6\u90FD\u76F8\u540C.</p></blockquote><ul><li>\u53D6\u6839\u8282\u70B9\u4E3A\u76EE\u6807\u8282\u70B9\uFF0C\u5F00\u59CB\u904D\u5386</li><li>1.\u5DE6\u8282\u70B9\u5165\u6808 -&gt; \u76F4\u81F3\u5DE6\u8282\u70B9\u4E3A\u7A7A\u7684\u8282\u70B9</li><li>2.\u6808\u9876\u8282\u70B9\u7684\u53F3\u8282\u70B9\u4E3A\u7A7A\u6216\u53F3\u8282\u70B9\u88AB\u8BBF\u95EE\u8FC7 -&gt; \u8282\u70B9\u51FA\u6808\u5E76\u8F93\u51FA\u5B83\uFF0C\u5C06\u8BE5\u8282\u70B9\u8BBE\u4E3A\u4E0A\u4E00\u4E2A\u8BBF\u95EE\u8282\u70B9</li><li>3.\u6808\u9876\u8282\u70B9\u7684\u53F3\u8282\u70B9\u4E0D\u4E3A\u7A7A\u4E14\u672A\u88AB\u8BBF\u95EE\uFF0C\u4EE5\u53F3\u5B69\u5B50\u4E3A\u76EE\u6807\u8282\u70B9\uFF0C\u518D\u4F9D\u6B21\u6267\u884C 1\u30012\u30013</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">postorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// \u6807\u8BB0\u4E0A\u4E00\u4E2A\u8BBF\u95EE\u7684\u8282\u70B9</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>root <span class="token operator">||</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
      root <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u83B7\u53D6\u5F53\u524D\u8282\u70B9</span>
    root <span class="token operator">=</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// \u53F3\u8282\u70B9\u4E0D\u5B58\u5728\u6216\u8005\u53F3\u8282\u70B9\u88AB\u8BBF\u95EE\u8FC7</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>right <span class="token operator">||</span> root<span class="token punctuation">.</span>right <span class="token operator">==</span> prev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      root <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      prev <span class="token operator">=</span> root<span class="token punctuation">;</span>
      <span class="token comment">// \u9632\u6B62\u9677\u5165\u8FDB\u6808\u51FA\u6808\u5FAA\u73AF</span>
      root <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      root <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,11);function d(v,h){const a=p("ExternalLinkIcon");return t(),e(c,null,[i,n("blockquote",null,[n("p",null,[n("a",k,[b,o(a)])])]),m],64)}var g=r(u,[["render",d]]);export{g as default};
