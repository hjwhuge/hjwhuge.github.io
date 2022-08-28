import{r as e,o as p,a as t,b as n,e as o,F as c,d as s,c as l}from"./app.72349eea.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h3",{id:"\u9898\u76EE-\u6570\u7EC4\u4E2D\u91CD\u590D\u7684\u6570\u5B57",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9898\u76EE-\u6570\u7EC4\u4E2D\u91CD\u590D\u7684\u6570\u5B57","aria-hidden":"true"},"#"),s(" \u9898\u76EE - \u6570\u7EC4\u4E2D\u91CD\u590D\u7684\u6570\u5B57")],-1),k={href:"https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/",target:"_blank",rel:"noopener noreferrer"},d=s("leetcode \u5251\u6307 offer 03"),m=l(`<h4 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a> \u9898\u76EE\u63CF\u8FF0</h4><p>\u627E\u51FA\u6570\u7EC4\u4E2D\u91CD\u590D\u7684\u6570\u5B57\u3002</p><p>\u5728\u4E00\u4E2A\u957F\u5EA6\u4E3A n \u7684\u6570\u7EC4 nums \u91CC\u7684\u6240\u6709\u6570\u5B57\u90FD\u5728 0 \uFF5E n-1 \u7684\u8303\u56F4\u5185\u3002\u6570\u7EC4\u4E2D\u67D0\u4E9B\u6570\u5B57\u662F\u91CD\u590D\u7684\uFF0C\u4F46\u4E0D\u77E5\u9053\u6709\u51E0\u4E2A\u6570\u5B57\u91CD\u590D\u4E86\uFF0C\u4E5F\u4E0D\u77E5\u9053\u6BCF\u4E2A\u6570\u5B57\u91CD\u590D\u4E86\u51E0\u6B21\u3002\u8BF7\u627E\u51FA\u6570\u7EC4\u4E2D\u4EFB\u610F\u4E00\u4E2A\u91CD\u590D\u7684\u6570\u5B57\u3002</p><p>\u793A\u4F8B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u8F93\u5165\uFF1A
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
\u8F93\u51FA\uFF1A<span class="token number">2</span> \u6216 <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u5B9E\u73B0\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a> \u5B9E\u73B0\u601D\u8DEF</h4><p>\u65B0\u5EFA\u4E00\u4E2A map \u5BF9\u8C61\uFF0C\u904D\u5386\u6570\u7EC4\uFF0C\u5982\u679C\u6570\u5B57\u4E0D\u5B58\u5728 map \u4E2D\uFF0C\u6DFB\u52A0\u5230 map\uFF1B\u5982\u679C\u6570\u5B57\u5B58\u5728 map \u4E2D\uFF0C\u8BF4\u660E\u8BE5\u6570\u5B57\u662F\u91CD\u590D\u7684\uFF0C\u8FD4\u56DE\u6539\u6570\u5B57\u3002</p><h3 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>cosnt <span class="token function-variable function">findRepeatNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> item
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,9);function b(h,f){const a=e("ExternalLinkIcon");return p(),t(c,null,[i,n("blockquote",null,[n("p",null,[n("a",k,[d,o(a)])])]),m],64)}var g=r(u,[["render",b]]);export{g as default};
