import{o as s,a as t,b as n,F as p,c as e}from"./app.72349eea.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const l={},i=e(`<h3 id="\u52A8\u6001\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a> \u52A8\u6001\u89C4\u5212</h3><p>\u52A8\u6001\u89C4\u5212\u5176\u5B9E\u53EF\u4EE5\u7406\u89E3\u4E3A\u52A8\u6001\u9012\u63A8\uFF0C\u7531\u9012\u5F52 + \u8BB0\u5FC6\u5316\u63A8\u5BFC\u5F97\u5230\u3002\u4F7F\u7528\u52A8\u6001\u89C4\u5212\u6C42\u89E3\u95EE\u9898\u5F88\u91CD\u8981\u7684 3 \u70B9</p><ul><li>\u6700\u4F18\u5B50\u7ED3\u6784 <ul><li>\u6700\u4F18\u5B50\u7ED3\u6784\u6307\u7684\u662F\uFF0C\u95EE\u9898\u7684\u6700\u4F18\u89E3\u5305\u542B\u5B50\u95EE\u9898\u7684\u6700\u4F18\u89E3\u3002\u53CD\u8FC7\u6765\u8BF4\u5C31\u662F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5B50\u95EE\u9898\u7684\u6700\u4F18\u89E3\uFF0C\u63A8\u5BFC\u51FA\u95EE\u9898\u7684\u6700\u4F18\u89E3\u3002</li></ul></li><li>\u72B6\u6001\u5B9A\u4E49\uFF1Aopt[n], dn[n], fib[n] <ul><li>eg: \u6590\u6CE2\u62C9\u5951\u6570\u5217\u4E2D\uFF1Aopt[n], \u8D70\u8FF7\u5BAB\u4E2D\uFF1Aopt[i, j]</li></ul></li><li>\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B\uFF1Aopt[n] = best_of(opt[n-1], opt[n-2], ...) <ul><li>\u6709\u70B9\u7C7B\u4F3C\u9012\u5F52\u7684\u89E3\u9898\u601D\u8DEF\u3002\u6211\u4EEC\u9700\u8981\u5206\u6790\uFF0C\u67D0\u4E2A\u95EE\u9898\u5982\u4F55\u901A\u8FC7\u5B50\u95EE\u9898\u6765\u9012\u5F52\u6C42\u89E3\uFF0C\u4E5F\u5C31\u662F\u6240\u8C13\u7684\u6700\u4F18\u5B50\u7ED3\u6784\u3002\u6839\u636E\u6700\u4F18\u5B50\u7ED3\u6784\uFF0C\u5199\u51FA\u9012\u5F52\u516C\u5F0F\uFF0C\u4E5F\u5C31\u662F\u6240\u8C13\u7684\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B</li><li>\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B\u662F\u89E3\u51B3\u52A8\u6001\u89C4\u5212\u7684\u5173\u952E</li><li>eg: \u6590\u6CE2\u62C9\u5951\u6570\u5217\u4E2D\uFF1AF(n) = F(n - 1) + F(n - 2)</li><li>eg: \u8D70\u8FF7\u5BAB\u4E2D\uFF0C\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B\u6839\u636E\u4E0B\u4E00\u6B65\u662F\u7A7A\u5730\u8FD8\u662F\u77F3\u5934\uFF0C\u6267\u884C\u4E0D\u540C\u64CD\u4F5C</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;\u7A7A\u5730&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  opt<span class="token punctuation">[</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> opt<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">+</span> opt<span class="token punctuation">[</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  opt<span class="token punctuation">[</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="\u53EF\u4EE5\u5E94\u7528\u52A8\u6001\u89C4\u5212\u6C42\u89E3\u95EE\u9898\u7684\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u53EF\u4EE5\u5E94\u7528\u52A8\u6001\u89C4\u5212\u6C42\u89E3\u95EE\u9898\u7684\u7279\u70B9" aria-hidden="true">#</a> \u53EF\u4EE5\u5E94\u7528\u52A8\u6001\u89C4\u5212\u6C42\u89E3\u95EE\u9898\u7684\u7279\u70B9</h4><ul><li>\u6C42\u4E00\u4E2A\u95EE\u9898\u7684\u6700\u4F18\u89E3 <ul><li>\u6700\u4F18\u89E3\uFF08\u901A\u5E38\u6307\u6C42\u6700\u5927\u503C\u6216\u6700\u5C0F\u503C\uFF09</li></ul></li><li>\u6574\u4E2A\u95EE\u9898\u7684\u6700\u4F18\u89E3\u662F\u4F9D\u8D56\u5404\u4E2A\u5B50\u95EE\u9898\u7684\u6700\u4F18\u89E3</li><li>\u628A\u5927\u95EE\u9898\u5206\u89E3\u6210\u82E5\u5E72\u5C0F\u95EE\u9898\uFF0C\u8FD9\u4E9B\u5C0F\u95EE\u9898\u4E4B\u95F4\u8FD8\u6709\u76F8\u4E92\u91CD\u53E0\u7684\u66F4\u5C0F\u7684\u5B50\u95EE\u9898</li><li>\u4ECE\u4E0A\u5F80\u4E0B\u5206\u6790\u95EE\u9898\uFF0C\u4ECE\u4E0B\u5F80\u4E0A\u6C42\u89E3\u95EE\u9898 <ul><li>\u4E3A\u4E86\u907F\u514D\u6C42\u89E3\u91CD\u590D\u5B50\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u4EE5\u91C7\u7528\u4ECE\u4E0B\u5F80\u4E0A\u7684\u987A\u5E8F\u5148\u8BA1\u7B97\u5C0F\u95EE\u9898\u7684\u6700\u4F18\u89E3\u5E76\u5B58\u50A8\u4E0B\u6765\uFF0C\u518D\u4EE5\u6B64\u4E3A\u57FA\u7840\u6C42\u53D6\u5927\u95EE\u9898\u7684\u6700\u4F18\u89E3</li></ul></li></ul><h4 id="\u5904\u7406\u91CD\u590D\u5B50\u95EE\u9898\u65F6" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u91CD\u590D\u5B50\u95EE\u9898\u65F6" aria-hidden="true">#</a> \u5904\u7406\u91CD\u590D\u5B50\u95EE\u9898\u65F6</h4><p>\u5728\u5904\u7406\u91CD\u590D\u5B50\u95EE\u9898\u65F6\uFF0C\u6211\u4EEC\u6709\u4E24\u79CD\u65B9\u6848</p><ul><li>\u7B2C\u4E00\u79CD\u662F\u76F4\u63A5\u7528\u56DE\u6EAF\u52A0\u8BB0\u5FC6\u5316\u7684\u65B9\u6CD5\uFF0C\u6765\u907F\u514D\u91CD\u590D\u5B50\u95EE\u9898\u3002\u4ECE\u6267\u884C\u6548\u7387\u4E0A\u6765\u8BB2\uFF0C\u8FD9\u8DDF\u52A8\u6001\u89C4\u5212\u7684\u89E3\u51B3\u601D\u8DEF\u6CA1\u6709\u5DEE\u522B\u3002</li><li>\u7B2C\u4E8C\u79CD\u662F\u4F7F\u7528\u52A8\u6001\u89C4\u5212\u7684\u89E3\u51B3\u65B9\u6CD5\u3002</li></ul><h4 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>\u8D70\u8FF7\u5BAB\uFF0C\u4ECE start \u5F00\u59CB\u5230 end\uFF0C\u7EDF\u8BA1\u5171\u6709\u591A\u5C11\u79CD\u8D70\u6CD5\uFF0C\u7EA2\u8272\u5757\u8868\u793A\u662F\u77F3\u5934\uFF0C\u6BCF\u6B21\u53EA\u80FD\u5F80\u4E0B\u6216\u8005\u5F80\u53F3\u8D70\u3002</p>`,11),c=["src"],u=n("p",null,"\u81EA\u5E95\u5411\u4E0A\u7684\u6C42\u89E3\uFF0C\u53EF\u4EE5\u5E2E\u4F60\u7701\u7565\u5927\u91CF\u7684\u590D\u6742\u8BA1\u7B97\u3002",-1);function r(a,k){return s(),t(p,null,[i,n("img",{src:a.$withBase("/dynamicProgramming.png"),alt:"\u52A8\u6001\u89C4\u5212"},null,8,c),u],64)}var m=o(l,[["render",r]]);export{m as default};
