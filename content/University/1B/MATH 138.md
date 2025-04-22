```
MATH 138 - Calculus 2
MWF 11:30AM - 12:20PM 
MC 4021
Katy Howell Escobar
```
# 1 | Integration
## 1.1 | The Definite Integral
> Regular Partition:
> Consider an interval $[a,b]$ with $a<b$ and $n\in\mathbb{Z}$. If we define $\Delta{x}=b-\frac{a}{n}$, Then the points $x_i=a+i\Delta x, i\in\mathbb{N}$ separate $[a,b]$ into subintervals of equal width $\Delta x$. 
> We call this a regular partition of $[a,b]$

> Riemann Sum
$$
\sum_{i=1}^n f(x_i)\Delta x = f(x_1)\Delta x + f(x_2)\Delta x+\cdots+f(x_n)\Delta x
$$
> Definite Integral
$$
\int_a^bf(x)dx=\lim_{n\to\infty}\sum_{i=1}^nf(x_i)(\frac{b-a}{n})
$$
> Right and Left Endpoint Riemann Sums
$$
R_n=f(x_1)\Delta x+f(x_2)\Delta x+\cdots+f(x_n)\Delta x=\sum_{i=1}^nf(x_i)(\frac{b-a}{n})
$$
$$
L_n=f(x_0)\Delta x+f(x_1)\Delta x+\cdots+f(x_{n-1})\Delta x=\sum_{i=1}^nf(x_{i-1})(\frac{b-a}{n})
$$
> Converting Function to Riemann Sum
$$
\int_a^bf(x)dx=\lim_{n\to\infty}\sum_{i=1}^nf\left( a+\frac{i(b-a)}{n} \right)\left( \frac{b-a}{n} \right)
$$

Example: Evaluate
$$
\lim_{n\to\infty} \sum^n_{i=1}\sqrt{2-\frac{i3}{n}}(\frac{3}{n})
$$
Right-handed Riemann sum:
$\Delta{x}=\frac{3}{n}=\frac{b-a}{n}$ (IMPORTANT)
$f(x)=\sqrt{2-x}$
$f(x_i)=\sqrt{2-(a+i(\frac{3}{n}))}$
$x\in[0,3]$
This is the same thing as
$$
\int_0^3 \sqrt{2-x}
$$
Summation Formulas
$$
\begin{align}
\sum_{i=1}^n1&=n \\
\sum_{i=1}^n i&=\frac{n(n+1)}{2} \\
\sum_{i=1}^n i^2&=\frac{n(n+1)(2n+1)}{6} \\
\sum_{i=1}^n i^3&=\frac{n^2(n+1)^2}{4}
\end{align}
$$
## 1.2 | Properties of the Definite Integral
> Integral Properties
1. Constant Multiple
$$
\int_a^b kf(x)dx=k\int_a^bf(x)dx
$$
2. Sum / Difference
$$
\int_a^b(f(x)\pm g(x))dx=\int_a^bf(x)dx\pm\int_a^b g(x)dx
$$
3. Squeeze: $m\leq f(x)\leq M$ for all $x\in[a,b]$
$$
m(b-a)\leq\int_a^b f(x)dx\leq M(b-a)
$$
4. Positive: $f(x)\geq0$ for all $x$
$$
\int_a^b f(x)dx\geq 0
$$
5. Greater: $f(x)\leq g(x)$ for all $x\in[a,b]$

$$
\int_a^b f(x)dx\leq\int_a^b g(x)dx
$$
6. Absolute Value:
$$
|\int_a^bf(x)dx|\leq\int_a^b|f(x)|dx
$$
> Definite Integrals: Special Cases
> Zero
$$
\int_a^af(x)dx=0
$$
> Inverted range
$$
\int_a^bf(x)dx=-\int_b^af(x)dx
$$

> (Separating the Domain of Integration)
$$
\int_a^b f(x)dx+\int_b^c f(x)dx=\int_a^c f(x)dx
$$

> Even and Odd Functions:
> Let $f$ be a bounded integrable function defined on $[-a,a]$
> If $f$ is odd $(f(-x)=-f(x))$, then
$$
\int_{-a}^af(x)dx=0
$$
> If $f$ is even $(f(-x)=f(x))$, then
$$
\int_{-a}^af(x)dx=2\int_0^af(x)dx
$$

Function parity is just like number parity: odd / odd = even / even = even, else it's odd
## 1.3 | Average Value of a Function
> Definition: Average Value of a Continuous Function:  
> If $f$ is continuous on $[a,b]$, then the average value of $f$ on $[a,b]$ is
$$
f_{avg}=\frac{1}{b-a}\int_a^bf(x)dx
$$

> Average Value Theorem (AVT) - similar to VT
> If $f$ is continuous on $[a,b]$, then there exists at least on $c\in[a,b]$ such that
$$
f(x)=\frac{1}{b-a}\int_a^bf(x)dx
$$
## 1.4 | FTC Part 1
> Power Rule for Antiderivatives
> For all $n\in\mathbb{R}, n\neq-1$
$$
\int x^ndx=\frac{x^{n+1}}{n+1}+C
$$
> FTC I: If $f$ is continuous on an open interval $I$ containing $a$, then
$$
\frac{d}{dx}\int_{a}^{x}f(t)dt=f(x)
$$
> Extended FTC I (Chain Rule): If $f$ is continuous and $g,h$ are differentiable, then
$$
\frac{d}{dx}\int_{g(x)}^{h(x)}f(t)dt=f(h(x))h'(x)-f(g(x))g'(x)
$$

Example: Evaluate
$$
\frac{d}{dx}\int_{5x}^\sqrt{x}\cos(t^2)dt=\cos(x)\cdot\frac{1}{2\sqrt{x}}-\cos(25x^2)\cdot5
$$
## 1.5 | FTC Part 2
> The Antiderivative Theorem: If $F,G$ are antiderivatives of a function $f$ on an open interval $I$, there exists a constant $C\in\mathbb{R}$ such that
$$
G(x)=F(x)+C
$$
> FTC II:
$$
\int_{a}^{b}f(t)dt=f'(b)-f'(a)
$$
## 1.6 | The Substitution Rule
> Substitution Rule / Change of Variables
> If $f$ and $g$ are functions such that $g'$ is continuous on an interval $[a,b]$ and $f$ is continuous on the range of $g$
$$
\int f(g(x))g'(x)dx=\int f(u)du\vert_{u=g(x)}
$$

Example: Evaluate 
$$
\int x^2\sqrt{x^3+4}dx
$$
$$
u=x^3+4\implies du=3x^2dx \implies dx=\frac{du}{3x^2}
$$
$$
\begin{align*}
\int x^2\sqrt{x^3+4}dx&=\int x^2\sqrt{u} \frac{du}{3x^2} \\
&= \frac{1}{3} \int u^{1/2}du \\
&= \frac{1}{3} \frac{u^{3/2}}{3/2}+C \\
&= \frac{2}{9}u^{3/2}+C \\
&= \frac{2}{9}(x^3+4)^{3/2}+C
\end{align*}
$$
Example: Evaluate
$$
\int\frac{\ln(x)}{x}dx=\int \frac{1}{x}\ln(x)dx
$$
$$
u=\ln(x)\implies \frac{du}{dx}=\frac{1}{x}\implies dx=xdu
$$
$$
\int \frac{1}{x}u(xdu) = \int udu = \frac{1}{2}u^2+C = \frac{1}{2}(\ln(x))
^2+C
$$
Example: Evaluate
$$
\int\frac{\cos(\sqrt{x})}{x}dx
$$
$$
u=\sqrt{x}\implies \frac{du}{dx}=\frac{1}{2\sqrt{x}}\implies dx=2\sqrt{x}du = 2udu
$$
$$
\int\frac{\cos(u)}{u}\cdot2udu = \int 2\cos(u)du = 2\sin(u)+C = 2\sin(\sqrt{x})+C
$$
Example: Evaluate
$$
\int \frac{x^2}{\sqrt{x+1}}dx
$$
$$
u=x+1 \implies \frac{du}{dx}=1\implies dx=du
$$
$$
\int \frac{(u-1)^2}{\sqrt{u}}du = \int\frac{u^2-2u+1}{u^{1/2}} = \int u^{3/2}-2u^{1/2}+u^{-1/2} = \frac{2}{5}u^{5/2}-\frac{4}{3}u^{3/2}+2u^{1/2}+C
$$
$$
=\frac{2}{5}(x+1)^{5/2}-\frac{4}{3}(x+1)^{3/2}+2(x+1)^{1/2}+C
$$
Example: Evaluate
$$
\int\sin^6x\cos xdx
$$
$$
u=\sin(x)\implies \frac{du}{dx}=\cos(x) \implies du=\cos(x)dx
$$
$$
=\int u^6du = \frac{1}{7}u^7+C = \frac{1}{7}\sin^7(x)+C
$$
Example: Evaluate 
$$
\int x e^{5x^2}dx
$$
$$
u=5x^2 \implies \frac{du}{dx} = 10x \implies dx = \frac{du}{10x} \implies xdx=\frac{du}{10}
$$
$$
\frac{1}{10}\int e^udu = \frac{1}{10}\int e^u
+C = \frac{1}{10}\int e^5x^2 + C
$$
Example: Integrate
$$
\int_0^1 e^x\cos(e^x)dx
$$
$$
u=e^x \implies \frac{du}{dx}=e^x\implies dx = \frac{du}{u} \implies e^0=1, e^1=e
$$
$$
\int_1^e u\cos(u) \frac{du}{u} = \int\cos(u)du = \sin(u)\mid_1^e = \sin(e)-\sin(1)
$$
> Theorem: Integrating $f(ax)$
> Let $a\in\mathbb{R}, a\neq0$. If $\int f(x)dx=F(x)+C$, then
$$
\int f(ax)dx=\frac{1}{a}F(ax)+C
$$
> Theorem: Substitution Rule for Definite Integrals
> If $f,g$ are functions such that $g'$ is continuous on an interval $[a,b]$ and $f$ is continuous on the range of $g$, then
$$
\int_{x=a}^{x=b}f(g(x))g'(x)dx=\int_{u=g(a)}^{u=g(b)}f(u)du
$$

Example: Integrate
$$
\int_0^1 \frac{x^3}{1+x^4}dx
$$
$$
u=1+x^4\implies \frac{du}{dx}=4x^3\implies dx=\frac{du}{4x^3} \implies \frac{du}{4}=x^3dx
$$
$$
\int_{x=1}^{x=0} = \frac{1}{4u}du = \frac{1}{4}\ln(u)\mid^{x=1}_{x=0} = \frac{1}{4}(\ln2-\ln1)=\frac{\ln2}{4}
$$
## 1.7 | Trig Substitution
> Theorem: Antiderivatives of Trig functions
$$
\int\sec(x)dx=\ln|\sec(x)+\tan(x)|+C
$$
$$
\int\csc(x)dx=-\ln|\csc(x)+\cot(x)|+C
$$
$$
\int\tan(x)dx=-\ln|\cos(x)|+C
$$
$$
\int\cot(x)dx=\ln|\sin(x)|+C
$$

**Example 1:** Consider
$$
\int\frac{\sqrt{9-4x^2}}{x^2}dx
$$
Let $x=\frac{3}{2}\sin\theta, -\frac{\pi}{2}\leq\theta\leq \frac{\pi}{2}$
$\frac{dx}{d\theta}=\frac{3}{2}\cos\theta$
$$
\begin{align*}
&= \int\frac{\sqrt{9-4\left( \frac{3}{2}\sin\theta \right)^2}}{\frac{3}{2}\sin\theta^2}\cdot \frac{3}{2}\cos\theta d\theta \\
&= \int\frac{\sqrt{9-9\sin^2\theta}}{\frac{9}{4}\sin^2\theta}\cdot \frac{3}{2}\cos\theta d\theta \\
&= \int\frac{3\cos\theta}{\frac{9}{4}\sin^2\theta}\cdot \frac{3}{2}\cos\theta d\theta \\
&= \int2 \frac{\cos^2\theta}{\sin^2\theta}d\theta \\
&= 2\cot^2\theta d\theta \\
&= 2\int csc^2\theta-1d\theta \\
&=-2\cot\theta-2\theta+C \\
&=-2(\frac{\sqrt{9-4x^2}}{2x})-2\arcsin(\frac{2x}{3}+C))
\end{align*}
$$
Motivation for picking $x=\frac{3}{2}\sin\theta$:
$$
9-9\sin^2\theta=9(1-\sin^2\theta)=9\cos^2\theta=(3\cos\theta)^2
$$
Writing in terms of $x$:
$$
\frac{2x}{3}=\sin\theta \implies \theta=\arcsin(\frac{2x}{3}+C)
$$
**Example 2:** Consider
$$
\int \frac{1}{\sqrt{x^2+4}}dx
$$
Let $x=2\tan\theta$
$\frac{dx}{d\theta}=2\sec^2\theta d\theta,\theta\in(\frac{-\pi}{2},\frac{\pi}{2})$
$$
\begin{align*}
&= \int \frac{1}{\sqrt{4\tan^2\theta+4}}\cdot2\sec^2\theta d\theta \\
&= \int \frac{2\sec^2\theta}{\sqrt{\tan^2\theta+1}}d\theta \\
&= \int \frac{\sec^2\theta}{\sqrt{\sec^2\theta}} d\theta \\
&= \int \frac{sec^2\theta}{|\sec\theta|}d\theta \\
&= \int \sec\theta d\theta \\
&= \ln|\sec\theta+\tan\theta|+C \\
&= \ln|\frac{\sqrt{x^2+4}}{2}+ \frac{x}{2}|+C
\end{align*}
$$
**Example 3:**
$$
\int\frac{dx}{x^2\sqrt{x^2-4}}
$$
Let $x=2\sec\theta$
$\frac{dx}{d\theta}=2\sec\theta\tan\theta d\theta$
$$
\begin{align*}
&=\int \frac{2\sec\theta\tan\theta}{4\sec^2\theta\sqrt{(2\sec\theta)^2-4}} d\theta\\
&=\int \frac{\tan\theta}{2\sec\theta\sqrt{4\sec^2\theta-4}} d\theta\\
&=\frac{1}{4}\int \frac{\tan\theta}{2\sqrt{\sec^2\theta-1}} d\theta\\
&=\frac{1}{4}\int \frac{\tan\theta}{\sec\theta\tan\theta} d\theta\\
&=\frac{1}{4}\int \frac{1}{\sec\theta} d\theta\\
&=\frac{1}{4}\int \cos\theta d\theta \\ 
&=\frac{\sin\theta}{4}+C \\
&=\frac{\sqrt{x^2-4}}{4x}+C
\end{align*}
$$
hyp = x
adj = 2
opp = $\sqrt{x^2-4}$

**Example 5:**
$$
\int_0^\sqrt{3}\frac{x}{(1+x^2)}dx
$$
Let $x=\tan\theta$
$dx=\sec^2\theta d\theta$
$0=\tan\theta$
$\theta=0$
$\sqrt{3}=\tan\theta$
$\theta=\frac{\pi}{3}$
$$
\begin{align*}
&= \int_0^\frac{\pi}{3} \frac{\tan\theta\sec^2\theta}{(1+\tan\theta)^2}d\theta \\
&= \int_0^\frac{\pi}{3} \frac{\tan^\theta\sec^2\theta}{\sec^4\theta}d\theta \\
&= \int_0^\frac{\pi}{3} \frac{\tan\theta}{\sec^2\theta} d\theta\\
&= \int_0^\frac{\pi}{3} \frac{\sin\theta}{\cos\theta} \cos^2\theta d\theta \\
&= \int_0^\frac{\pi}{3} \sin\theta\cos\theta d\theta \\
&= \int_0^{\frac{\sqrt{3}}2} udu \\
&= \frac{u^2}{2} \mid_0^\frac{\sqrt{3}}{2} \\
&= \frac{3}{8}
\end{align*}
$$
**Example 6:**
$$
\int\frac{x}{(3-2x-x^2)^{3/2}}dx
$$
Aside:
$$
\begin{align*}
3-2x-x^2&=-x^2-3x+3 \\
&=-(x^2+2x)+3 \\
&=-(x^2+2x+1)+3 \\
&=-(x+1)^2+4
\end{align*}
$$
Let $x+1=2\sin\theta\implies x=2\sin\theta-1$
$\frac{dx}{d\theta}=2\cos\theta$ 
$$
\begin{align*}
&=\int \frac{x}{[4-(x+1)^2]^{3/2}}dx \\
&=\int \frac{(2\sin\theta-1)2\cos\theta}{(4-4\sin^2\theta)^{3/2}}d\theta \\
&=\frac{1}{4}\int \frac{(2\sin\theta-1)\cos\theta}{(\cos^2\theta)^{3/2}}d\theta \\
&=\frac{1}{4}\int\frac{2\sin\theta-1}{\cos^2\theta}d\theta \\
&=\frac{1}{4}\int \frac{2\sin\theta}{\cos^2\theta}-\frac{1}{\cos^2\theta}d\theta \\
&=\frac{1}{4}\int2\tan\theta\sec\theta-\sec^2\theta d\theta\\
&-\frac{1}{4}(2\sec\theta-\tan\theta)+C \\
&=\frac{1}{4}(\frac{4}{\sqrt{4-(x+1)^2}}-\frac{x-1}{\sqrt{4-(x+1)^2}})+C
\end{align*}
$$
## 1.8 | Integration by Parts
Derivation
$$
\begin{align*}
[f(x)g(x)]'&=f'(x)g(x)+f(x)g'(x) \\
f(x)g'(x)&=[f(x)g(x)]'-f'g(x) \\
\int f(x)g'(x)dx&=\int[f(x)g(x)]'dx-\int f'(x)g(x)dx \\
\int f(x)g'(x)dx&=f(x)g(x)-\int f'(x)g(x)dx
\end{align*}
$$
> Theorem: Integration by parts
$$
\int u dv = uv - \int v du
$$

Example 1:
$$
f(x)=ln(x) \implies f'(x)=\frac{1}{x}
$$
$$
g'(x)=x^2\implies g(x)=\frac{1}{3}x^2
$$
$$
\begin{align*}
\int x^2\ln xdx&=\frac{x^3\ln{x}}{3}-\int \frac{1}{x} \frac{x^3}{3}dx \\
&=\frac{x^3\ln{x}}{3}-\int \frac{x^2}{3}dx \\
&=\frac{x^3\ln{x}}{3}-\frac{x^3}{9}+C
\end{align*}
$$
Example 2:
$f(x)=x \implies f'(x)=1$
$g'(x)=e^x\implies g(x)=e^x$
$$
\begin{align*}
\int x e^xdx &= xe^x-\int e^x(1) \\
&=xe^x-e^x+C \\
&=e^x(x-1)+C \\
\end{align*}
$$
## 1.9 | Partial Fractions
Robert Garbary

Goal: Find a derivative of 
$$
\int \frac{a(x)}{b(x)}dx
$$
If $\deg(a)\geq deg(b)$, write $a(x)=b(x)q(x)+r(x)$
$$
\int \frac{a(x)}{b(x)} =\int \frac{b(x)q(x)+r(x)}{b(x)}dx = q(x) + \frac{r(x)}{b(x)}dx
$$
Ex:
$$
\int \frac{x+1}{(x+3)(x+4)}dx
$$
Plan: Find $A,B\in\mathbb{R}$ such that
$$
\frac{x+1}{(x+3)(x+4)} = \frac{A}{x+3}+\frac{B}{x+4}
$$
Spoiler: It turns out a unique $A,B$ always exist as long as $\deg(P(x))\leq5$
$$
\frac{A(x+4)+B(x+3)}{(x+3)(x+4)}
$$
$$
x+1=A(x+4)+B(x+3)
$$
Method 1: Comparing coefficients
$$
x+1=(A+B)x + (4A+3B)
$$
$$
A+B=1
$$
$$
4A+3B=1
$$
$$
(A,B)=(-2,3)
$$
Method 2: 
$$
x=-4, -4=B(-1)\implies B=3
$$
$$
x=-3, -2=A(1)\implies A=-2
$$
$$
\int \frac{x+1}{(x+3)(x+4)}dx = \int \frac{-2}{x+3}+\frac{-3}{x+4}dx = -2\ln|x+3|+3\ln|x+4|+C = \ln|\frac{(x+4)^3}{(x+3)^2}|+C
$$

> Theorem: Cool stuff
$$
\begin{aligned}
 & ax+b & \frac{A}{ax+b} \\
 & (ax+b)^n & \frac{A_1}{ax+b}+\frac{A_2}{(ax+b)^2}+\cdots+\frac{A_n}{(ax+b)^n} \\
 & \underbrace{ax^2+bx+c}_{\text{irreducible}} & \frac{Ax+B}{ax^2+bx+c} \\
 & (ax^2+bx+c)^n & \frac{A_1x+B_1}{ax^2+bx+c}+\frac{A_2x+B_2}{(ax^2+bx+c)^2}+\cdots+\frac{A_nx+B_n}{(ax^2+bx+c)^n}
\end{aligned}
$$

Ex:
$$
\frac{x^2+x-3}{(x-3)^2(x+3)}=\frac{A}{x-3}+\frac{B}{(x-3)^2}+\frac{C}{x+3}
$$
$$
x^3+x-1=(A+C)x^3+(B+D)x^2+(SA)x+(SB)
$$
$A+C=1\implies C=\frac{4}{5}$
$B+D=0\implies D=\frac{1}{5}$
$SA=1 \implies A= \frac{1}{5}$
$SB=-1\implies B= -\frac{1}{5}$
$$
\begin{align*}
I&=\frac{1}{5} \int \frac{1}{x}dx-\frac{1}{5}\int \frac{1}{x}dx+\frac{1}{5}\int \frac{4x+1}{x^2+5} \\
&=\frac{1}{5} \int \frac{1}{x}dx-\frac{1}{5}\int \frac{1}{x}dx+\frac{1}{5}\int \frac{4x}{x^2+5}+\int\frac{1}{x^2+5} \\
\end{align*}
$$
$$
x=\sqrt{5}\tan\theta\implies \int\frac{1}{x^2+5} = \frac{1}{\sqrt{5}}\arctan(\frac{x}{\sqrt{5}})
$$
Ex:
$$
\int \frac{x^3-2x}{x^2+3x+2}dx
$$
$$
x^3-2x=(x^2+3x+2)(x-3)+5x+6
$$
$$
\begin{align*}
&=\int x-3+ \frac{5x+6}{x^2+3x+2}dx \\
&=\int x-3+ \frac{A}{x+1}+\frac{B}{x+2}
\end{align*}
$$
## 1.10 | Improper Integrals
> Definition: Improper Integrals
> Let $a\in\mathbb{R}$, assume $f(x)$ is integrable on $[a,t]$ for all $t\geq a$. Let $L=\lim_{t\to\infty} \int_a^t f(x)dx$.
> - If $L$ exists (it converges to a number), we say $\int_a^\infty f(x)dx$ converges to L.
> - If $L$ doesn't exist, we say it diverges.
### Type 1 Improper Integral
One of the bounds is $\pm\infty$
Ex: 
$$
\int_2^\infty \frac{1}{\sqrt{x}}dx
$$
Note that the 2 doesn't affect whether or not this converges, but what it converges to.
$$
\int_2^\infty \frac{1}{\sqrt{x}}dx = \lim_{c\to\infty}(\int_2^c x^{-1/2}dx) = \lim_{c\to\infty} 2\sqrt{x}\mid_2^c = \lim_{c\to\infty}2\sqrt{c}-2\sqrt{2} = DNE
$$

Ex: 
$$
\int_{-\infty}^0 \frac{1}{x^2+1}dx = \lim_{c\to\infty}\int_c^0 \frac{1}{x^2+1}dx = \lim_{c\to\infty}(\arctan(0)-\arctan(c))=(0-(-\frac{\pi}{2})) = \frac{\pi}{2}
$$

Ex:
$$
\int_{-\infty}^\infty xdx=\int_{-\infty}^5+\int_5^\infty
$$
$$
=\lim_{c\to x}\int_5^c xdx=\lim_{c\to\infty}(\frac{c^2}{2}-\frac{5^2}{2})
$$
$$
\lim_{c\to\infty}\int_{-c}^c xdx=\lim_{c\to\infty}0=0
$$
VERY IMPORTANT NOTE:
$$
\int_{-\infty}^\infty f(x)dx\neq\lim_{c\to\infty}\int_{-c}^c f(x)dx
$$
Ex: Let $p\in\mathbb{R}$. for which $p$ does the following diverge:
$$
\int_1^\infty \frac{1}{x^p}dx
$$
Case 1: $p=1$
$$
\lim_{c\to\infty} \int_1^c \frac{1}{x}dx = \lim_{c\to\infty} \ln(x)|^c_1=\lim_{c\to\infty}\ln(c) = DNE
$$
Case 2: $p\neq1$
$$
\lim_{c\to\infty}\int_1^c x^{-p}dx = \lim_{c\to\infty} \frac{1}{1-p}x^{1-p}|_1^c = \frac{1}{1-p}\lim_{c\to\infty}(c^{1-p}-1)
$$
> Theorem: Type-1 p-integrals:
$$
\int_1^\infty \frac{1}{x^p}dx
$$
> converges if and only if $p>1$. If it converges, it converges to $\frac{1}{p-1}$.

> Theorem: Improper Type 2 p-integral
$$
J=\int_0^1 \frac{1}{x^p}dx
$$
> 1. J converges if and only if $p<1$
> 2. If J converges, it converges to $J=\frac{1}{1-p}$

$$
J=\int_0^1 \frac{1}{x^p}dx = \lim_{c\to0^+} \int_c^1 \frac{1}{x^p}dx
$$
Let $u=\frac{1}{x}, du=- \frac{1}{x^2}dx$
$x=1\implies u=1$
$x\to0^+\implies u=-\infty$
$$
\begin{align*}
\lim_{c\to0^+} \int_c^1 \frac{1}{x^p}dx&=\lim_{d\to\infty}\int_{u=d}^{u=1}u^p(-x^2du) \\
&=\lim_{d\to\infty} \int_a^d u^{p-2}du \\
&=\int_1^\infty \frac{1}{u^{2-p}du}
\end{align*}
$$
By Improper Type-1 p-integral Theorem, $2-p>1\iff p<1$
Thus $J$ converges, and it converges to $\frac{1}{(2-p)-1}=\frac{1}{1-p}$
### Type 2 Improper Integral
> Definition: Let $a,b\in\mathbb{R}$ with $a<b$. Assume $f(x)$ is integrable on $[t,b]$ for all $t\in[a,b]$. Assume $f(x)$ is "bad" at a (or b)
$$
\int_a^b f(x)dx=\lim_{t\to a^+}\int_t^b f(x)dx
$$
> If $f(x)$ is bad $c, a<c<b$, we define
$$
\int_a^bf(x)dx=\int_a^cf(x)dx+\int_c^bf(x)dx
$$

Ex:
$$
\int_0^4 \frac{1}{\sqrt{x}}dx
$$
Solution
$$
=\lim_{c\to0^+}\int_c^4 x^{-1/2}dx=\lim_c\to0^+ 2\sqrt{x}\mid_c^4 = \lim_{c\to0^+}(4-2\sqrt{c})=4
$$

Ex: 
$$
\int_0^5 \frac{x}{x-2}dx=\int_0^2 \frac{x}{x-2}dx+\int_2^5\frac{x}{x-2}dx
$$
Solution
$$
\frac{x}{x-2}=1+\frac{2}{x-2}\mid \lim_{c\to2^-}\int_0^c 1+\frac{2}{x-2}dx = DNE
$$
## 1.11 | Area Between Curves
Bounded area of $f(x),g(x)\in[a,b]$:
$$
\int_a^b f(x)-g(x)dx
$$
If they intersect at $c\in[a,b]$:
$$
\int_a^cf(x)-g(x)dx+\int_c^bg(x)-f(x)dx
$$
Example: On $[0,\pi]$, find the area bounded by $y=\sin x, y=\cos x$
$$
A=\int_0^{\frac{\pi}{4}}\cos x-\sin x+\int_{\frac{\pi}{4}}^4 \sin x-\cos xdx = 2\sqrt{2}
$$
Vertical integrals: $x=g(y),x=f(y), y\in[c,d]$
$$
A=\int_c^dx_{right}(y)-x_{left}(y)dy = \int_c^d f(y)-g(y)dy
$$
Example: Find the area bounded by $x=-y^2, x=-y-2$
$-y^2=-y-2\implies y^2-y-2=0\implies y=-1,2$
$x_{right})y)=-y^2$
$x_{left}(y)=-y-2$
$$
A=\int_{-1}^2 x_{right}(y)-x_{left}(y)dy = \int_{-1}^2-y^2-(y-2)dy= \frac{9}{2}
$$
## 1.12 | Volumes of Solids of Revolution
> Volume of Revolution (Disc)
$$
V = \int_a^b \pi f(x)^2dx
$$

Ex: Fix $R>0, y=\sqrt{R^2-x^2}$ 
$$
V=\pi\int_{-R}^R\sqrt{R^2-x^2}^2dx=\pi\int_{-R}^R R^2-x^2dx = \frac{4}{3}\pi R^2
$$
Proves the volume of a sphere!

> Volume of Revolution (Washer)
$$
V =\pi\int_a^b(R(x)^2-r(x)^2)dx
$$
> Where $R$ is the big radius, $r$ is the small one

Ex: Consider the area between $y=3, y=\sqrt{x}$
$$
V=\int_0^4 [3^2-\sqrt{x}^2]dx = 28\pi
$$

Ex: Consider $g(x)>f(x)$ rotated around $y=5$
$$
V=\pi\int_a^b[(5-f(x))^2-(5-g(x))^2]dx
$$

Ex: Consider $f(x), g(x), f(x)<g(x)\in[a,c], f(x)>g(x)\in[c,b]$
$$
V=\pi\int_a^c g^2-f^2dx - \int_c^b f^2-g^2dx
$$

Ex: Consider $y=x, y=\sqrt{x}$, revolved around the $y$ axis
$$
V=\int_c^d\pi(R(y)^2-r(y)^2)dy = \pi\int_0^1(y^2-y^2)^2dy = \pi\left( \frac{1}{3}-\frac{1}{5} \right)
$$

Ex: Consider a cone with base $R$ and height $H$ revolved around the y axis
$$
y=-\frac{H}{R}(x-R)\implies -\frac{Ry}{H}=x-R\implies x=R(1-\frac{y}{H})
$$
$$
\begin{align*}
V&=\pi\int_0^H\left( R\left( 1- \frac{y}{H} \right) \right)dy \\
&=\pi R^2\int_0^H 1-\frac{2y}{H}+ \frac{y^2}{H^2}dy \\
&=\pi R^2(y- \frac{y^2}{H} + \frac{y^3}{3H}) \mid ^H_0 \\
&= \pi R^2(\frac{H}{3})
\end{align*}
$$
# 2 | Differential Equations
## 2.1 | Introduction to Differential Equations 
> Definition: Differential Equations
- Differential Equation (DE) = equation involving an unknown function and it's derivative
- Ordinary Differential Equation (ODE) = single-variable functions
- Partial Differential Equation (PDE) = multivariable functions (multiple inputs)

> Definition: Order of a DE
- The order of a DE is the highest derivative that appears in the equations

> Definition: Linearity
- An ODE is called **linear** if it only contains linear functions on $y, y', y'', \ldots$

 > Definition: General and Particular Solution
1. General Solution = Complete collection of solutions to a DE including arbitrary constants
2. Particular Solution = One where all arbitrary constants have been specified

Ex: What constant functions ($y=c$) satisfy:
$$
y'=y^3+2y^2-80y
$$
Solution: We know $f'(x) = c' = 0$
$$
0 = c(c+10)(c-8)
$$
$$
c = 0, -10, 8
$$
Ex: Is $y=\sqrt{5-x^3}$ a solution to the DE
$$
y^2-2yy'+x^3=3x^2+5
$$
Solution: Yes
$$
\begin{align*}
y^2-2yy' &= (5-x^3)-2(\sqrt{5-x^3})(\frac{-3x^2}{2\sqrt{5-x^3}}) \\
&= 5 - x^3+3x^2 \\
&= -x^3+3x^2+5
\end{align*}
$$
## 2.2 | Separable Differential Equations
> Definition: A first-order differential equation is said to be *separable* if it can be written in the form
$$
\frac{dy}{dx}=g(x)h(y)
$$
> Method: Solving a separable DE
1. Determine any solutions $y$ with $h(y)=0$
2. Find the solutions $y, h(y)\neq0$ by evaluating the following. If possible, isolate $y$ is a function of $x$ in the resulting equation.
$$
\frac{1}{h(x)}dy=g(x)dx \implies \int \frac{1}{h(y)}dx=\int g(x)dx
$$
Ex: 
$$
\frac{dy}{dx}=\frac{x}{y}
$$
Solution:
$g(x)=x, h(y)=\frac{1}{y}$
Step 1: $h(y)=0$, no constant solution
Step 2: Rearranging and integrating
$$
\int ydy = \int xdx
$$
$$
\frac{y^2}{2}=\frac{x^2}{2}+C
$$
$$
y=\pm\sqrt{x^2+2C}
$$
Checking:
$$
\frac{dy}{dx}=\pm \frac{2x}{2\sqrt{x^2+2C}} = \frac{x}{y}
$$
Ex: 
$$
\frac{dy}{dx}= \frac{3x^2+4x+2}{2y-2}
$$
	Solution:
$g(x) = 3x^2+4x+2, h(x)=\frac{1}{2y-2}$
Step 1: $h(y) = 0$, no constant solution
Step 2: Rearranging and integrating
$$
\int [2y-2]dy = \int [3x^2+4x+2] dx
$$
$$
y^2-2y = x^3+2x^2+2x+C
$$
Imagine we know that $y(0)=1$
$$
\begin{align*}
(-1)^2-2(-1)&=0+C \\
C&=3 \\
y^2-2y&=x^3+2x^2+3x+3 \\
y^2-2y+1&=x^3+2x^2+3x+4 \\
(y-1)^2&=x^3+2x^2+3x+4 \\
y&=1\pm\sqrt{x^2+2x^2+3x+4}
\end{align*}
$$
Ex
$$
\frac{dy}{dx}=\frac{y\cos x}{1+2y^2}= \frac{y}{1+2y^2}\cos x
$$
Solution
$h(y)=0\implies y=0$
$$
\int \frac{1+2y^2}{y}dy=\int\cos xdx, y\neq0
$$
$$
\ln|x|+y^2=\sin x+C
$$
$$
\text{ OR } y=0
$$
Ex:
$$
y'=x\cos^2y
$$
Solution
$$
\cos^2y = 0\implies \cos y=0 \implies y=\frac{\pi}{2}+k\pi, k\in\mathbb{Z}
$$
$$
\int \frac{1}{\cos^2y}dy=\int xdx
$$
$$
\tan y = \frac{x^2}{2}+C
$$
$$
y=\arctan\left( \frac{x^2}{2}+C \right), \text{ or } y=\frac{\pi}{2}+k\pi
$$
Ex:
$$
\frac{dy}{dx}=(x+y)^2-1
$$
Solution:
Let $u=x+y$. $\frac{du}{dx}=1+y'$
$$
\frac{du}{dx}-1=u^2-1 \implies \frac{du}{dx}=u^2
$$
$$
\begin{align*}
\int \frac{1}{u^2}du &= \int 1dx \\
-\frac{1}{u}&=x+C \\ 
u &= -\frac{1}{x+C} \\
x+y&= -\frac{1}{x+C} \\
y&=-\frac{1}{x+C}-x
\end{align*}
$$
NOTE: we divided both sides by $u$, so $u=0$ is also a solution. $u=0\implies x=-y$
## 2.3 | Linear First-Order Differential Equations
> Definition: A **linear differential equation of order** $n$ has the form
$$
A_n(x)y^n + A_{n-1}(x)y^{n-1}+\cdots+A_1(x)y'+A_0(x)y=B(x)
$$
> where $A_n(x)\neq0$

> Definition: A first-order linear DE of the form 
$$
y'+P(x)y=Q(x)
$$
> is said to be in **standard form.**

Example: Consider the first order linear DE:
$$
y'+\frac{3}{x}y=1
$$
Multiply by $x^3$ on both sides, so that the left hand side becomes **the derivative of the right side**
$$
y'x^3+3x^2y=1
$$
$$
(x^3y)'=x^3
$$
$$
\int(x^3y)'dx=\int x^3dx
$$
$$
x^3y = \frac{x^4}{4}+C
$$
$$
y=\frac{x}{4}+\frac{C}{x^3}, C\in\mathbb{R}
$$
NOTE: do not take the $\frac{C}{x^3}$ term and bundle it into a new constant!

> Definition: Integrating Factor
> Given a linear DE of the form $y'+P(x)y=Q(x)$, the **integrating factor** for would be
$$
\mu(x)=e^{\int P(x)dx}
$$

In the example $y'+\frac{3}{x}y=1$, $P(x)= \frac{3}{x}, Q(x)=1$
$$
\int \frac{3}{x}dx = 3\ln|x| \implies \mu(x)=e^{3\ln|x|dx} = e^{\ln|x^3|} = x^3
$$

> Method: Solving a first order DE
1. Divide by $A_1(x)$ to write the DE in standard form: $y' + P(x)y = Q(x)$.
2. Multiply both sides of the equation by the integrating factor $\mu(x) = e^{\int P(x)dx}$.
3. Rewrite the left-hand side of the resulting equation as $(\mu(x)y)'$.
4. Integrate both sides of the equation with respect to x.
5. Isolate for y.
## 2.4 | Applications of Differential Equations
Example: Tank has 1000L salt water, initially 0.1kg/L. Salt water of concentration 0.3 kg/L flows in at 10 L/min. Assume ceteris paribus.

1000L = constant volume
0.1 kg/L = initial concentration
1000L x 0.1kg = 100kg of salt

Let $x(t)$ = amount of salt (kg) in the contain at time $t$ minutes
$$
x(0)=100
$$
$$
0.3 \frac{kg}{L}\cdot 10 \frac{L}{min}=3 \frac{kg}{min}
$$
Concentration is
$$
\frac{x}{100} \frac{kg}{L}
$$
$$
\begin{align*}
\frac{dx}{dt} &= \text{(Rate of salt in) - (Rate of salt out)} \\
&= 3- \frac{x}{100} \\
&= 300 - \frac{x}{100} \\
&= \frac{300-x}{100}= (300-x)\cdot \frac{1}{100}
\end{align*}
$$
Solving the separable DE:
$$
\begin{align}
\int \frac{1}{300-x}dx &= \int \frac{1}{100}dt \\
-\ln|300-x| &= \frac{t}{100}+C
\end{align}
$$
Sub $x(0)=100$
$$
\begin{align*}
-\ln{300-100}&= 0 + c \implies c = -\ln 200 \\
-\ln|300-x| &= \frac{t}{100}-\ln 200 \\
\ln|300-x| &= \ln200 - \frac{t}{100} \\
|300-x| &= e^{\ln200-\frac{t}{100}} \\
|300-x| &= 200e^{\frac{-t}{100}} \\
300-x &= 200e^{\frac{-t}{100}} \text{(just kill the absolute value)}\\
x(t) &= 300-200e^{-t/100}
\end{align*}
$$

> Science: Newton's Law of Cooling:
> An object's temperature changes at a rate proportional to $T_{object}-T_{room}$
$$
\frac{dT}{dt} = -k(T-T_{room}), k>0
$$

Example: Find the general solution to Netwon's Law of Cooling 
$$
\begin{align*}
\int\frac{1}{T-T_{room}}dT &= \int -kdt \\
\ln|T-T_{room}| &= -kt+C \\
|T-T_{room}| &= e^{-kt+C} \\
T(t)&= e^ce^{-kt+C} \\
T(t)&= Ae^{-kt+C}, A=e^c
\end{align*}
$$
Example: If the object went from 0C to 5C in 10 minutes, solve the ODE
$$
\frac{dT}{dt} = -k(T-25)
$$
$T_{room}=25$
$T(0)=0$
$T(10)=5$
$$
\begin{align*}
T(t)&=Ae^{-kt}+25 \\
0&= Ae^0+25 \\
A&=-25 \\
T(t)&=-25e^{-kt}+25
\end{align*}
$$
Solving the general formula:
$$
\begin{align*}
5&=-25e^{-10k}+25 \\
\frac{20}{25}&=e^{-10k} \\
\ln (\frac{4}{5}) &= -10k \\
k&= -\frac{\ln(4/5)}{10}
\end{align*}
$$
Solution:
$$
T(t)=-25e^{\frac{t\cdot\ln(4/5)}{10}}
$$
# 3 | Numerical Series
## 3.1 | Introduction to Series
> Definition: Series
> Let $\{a_n\}^\infty_{n=1}$ be a sequence of real numbers. An **infinite series** be a symbolic expression of the form
$$
a_1+a_2+\cdots=\int_{n=1}^\infty a_n
$$
> Definition: Partial Sums
> Given an infinite series $a_n$, we define its sequence of partial sums, $\{s_m\}^\infty_{m=1}$ as
$$
S_m=a_1+a_2+\cdots+a+m=\sum_{n=1}^ma_n
$$
> $S_m$ is called the $m$-th partial sum of the infinite series.

> Definition: Geometric Series
> A geometric series is a series of the form
$$
\sum_{n=0}^\infty ax^n=a+ax+ax^2+\cdots
$$
> The $m$-th partial sum of the geometric series is
$$
S_m=\sum_{n=0}^m ax^n = a+ax+ax^2+
$$

> Theorem: Geometric Series Test
> Let $\sum_{n=0}^\infty ax_n$ be a geometric series, where $a\neq0$
> 1. If $|x|<1$, then $\int_{n=0}^\infty ax^n$ converges to $\frac{a}{1-x}$
> 2. If $|x|\geq1$, then $\int_{n=0}^\infty ax^n$ diverges

Example: The series
$$
\sum_{n=1}^\infty \frac{1}{2^n}
$$
Converges to
$$
\frac{a}{1-x} = \frac{\frac{1}{2}}{1- \frac{1}{2} = 1}
$$
> Definition: Harmonic Series
$$
\sum_{n=1}^\infty \frac{1}{n}=\frac{1}{1}+\frac{1}{2}+\ldots
$$

Telescoping Example: The series
$$
\frac{1}{n(n+1)} = \frac{1}{n}-\frac{1}{n+1}
$$
Converges to
$$
1+\frac{1}{2}-\frac{1}{2}+\frac{1}{3}-\frac{1}{3}+\cdots-\frac{1}{\infty}=1
$$
## 3.2 | Arithmetic Properties of Series and the Divergence Test
> Definition: Tail
> Given an infinite series $\sum_{n=1}^\infty a_n$, let $S_m=\int_{n=1}^m a_n=a_1+a_2+\cdots+a_m$ denote its $m$-th partial sum. The difference
$$
(\sum_{n=1}^{\infty} a_n)-S_m=a_{m+1}+a_{m+2}+\cdots=\sum_{n=m+1}^\infty a_n
$$
> Is called a tail of the infinite series $a_n$

> Theorem: Tail Convergence / Divergence Theorem
> Let $\{a_n\}^\infty_{n=1}$ be a sequence and let $j$ be a positive integer.
> 1. If $\sum_{n=1}^\infty a_n$ converges, then its tail $\sum_{n=j}^\infty a_n$ also converges for each $j\geq1$
> 2. If the tail $\sum_{n=j}^\infty a_n$ converges for some $j$, then $\sum_{n=1}^\infty a_n$ also converges
> (There's also a Tail Divergence Theorem which is just the contrapositive)

> Theorem: Convergence Theorem
> If $\sum_{n_1}^\infty a_n$ converges, then $\lim_{n\to\infty}a_n=0$

> Theorem: Divergence Test (n-th term divergence test)
> If $\lim_{n\to\infty} a_n\neq0$, then $\sum_{n=1}^\infty a_n$ diverges

Katy's examples
1: converges
$$
\frac{1}{1-\frac{2}{3}} = \frac{1}{\frac{1}{3}} = 3
$$
2: converges
$$
r = 2^33^{-2} = \frac{8}{9}
$$
$$
S = \frac{1}{1-\frac{8}{9}} = 9
$$
3: diverges
4: diverges
$$
1 + \frac{3^n}{2^n}
$$
5: converges, p series $p>1$
$$
\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi}{6}
$$
6: diverges??
$$
\lim_{n\to\infty} arcsin(n) = \frac{\pi}{2}
$$
Example:
What is the value of $c$ if
$$
\sum_{n=2}^\infty(1+c)^{-n} = 2
$$
Solution:
$$
a=\frac{1}{(1+c)^2}
$$
$$
\sum_{n=2}^\infty \frac{1}{(1+c)^{n-2}} = \frac{1}{(1+c)^2}\sum_{n=0}^\infty \frac{1}{(1+c)^n} = \frac{1}{(1+c)^2}\cdot \frac{1}{1- \frac{1}{(1+c)}} = \frac{1}{(1+c)^2}\cdot \frac{1}{\frac{c}{1+c}}
$$
$$
= \frac{1}{(1+c)^2}\cdot \frac{1+c}{c}=\frac{1}{c(1+c)} = 2
$$
$$
0=2c^2+2c-1
$$
$$
c= \frac{-2\pm2\sqrt{3}}{4} = \frac{-1\pm\sqrt{3}}{2}
$$
Evaluating the +
$$
(1+ \frac{-1+\sqrt{3}}{2})^{-n} = (\frac{2}{1+\sqrt{3}})^n
$$
$$
\lim_{n\to\infty} (\frac{2}{1+\sqrt{3}})^n=0
$$
Evaluating the -
$$
(1+ \frac{-1-\sqrt{3}}{2})^{-n} = (\frac{2}{1-\sqrt{3}})^n
$$
$$
\lim_{n\to\infty} (\frac{2}{1-\sqrt{3}})^n=0
$$
So the solution is the +
## 3.3 | Integral Test
> Definition: An infinite series $\sum_{n=1}^\infty a_n$ is said to be:
> - Positive / Nonnegative if $a_n\geq0$ for all $n\geq1$
> - Strictly positive if $a_n>0$
> - Eventually positive if there exists a positive integer $j$ such that $a_n\geq0$ for all $n\geq j$
> - Eventually strictly positive for ... take a wild guess

> Lemma:
> Let $\sum_{n=1}^\infty a_n$ be an eventually positive series. Let $S_m=\sum_{n=1}^m$ denote its $m$-th partial sum. Then there are only two possibilities.
> 1. If the sequence of partial sums $\{s_m\}^\infty_{m=1}$ is bounded from above, the $a_n$ converges
> 2. If the sequence of partial sums $\{s_m\}^\infty_{m=1}$ is not bounded from above, then $a_n$ diverges to $\infty$

> Theorem: Integral Test
> Suppose a function $f$ is continuous, positive, and decreasing on the infinite integral $[k,\infty)$ for some positive integer $k$. Then,
> 1. If $\int_k^\infty f(x)dx$ converges, then the infinite series $f(n)$ converges
> 2. If $\int_k^\infty f(x)$ diverges, then the infinite series $f(n)$ diverges to $\infty$

Example:
$$
\sum_{n=1}^{\infty} \frac{1}{n},\sum_{n=1}^{\infty} \frac{1}{n^2}
$$
Using the integral test:
$$
\int_k^\infty \frac{1}{x} = \ln(x) \implies \sum_{n=k}^\infty \ln(x)\implies\text{ diverges}
$$
$$
\int_k^\infty \frac{1}{x^2} = \ln(x) \implies \sum_{n=k}^\infty -\frac{1}{x} \implies \text{ converges}
$$

Example:
$$
\sum_{n=1}^\infty \frac{\ln(n)}{n}
$$
Integral Test:
$$
f(x)=\ln(x), f'(x)= \frac{1-\ln x}{x^2}=0
$$
$$
\lim_{t\to\infty}\int_1^t \frac{\ln x}{x}dx=\lim_{t\to\infty} \frac{(\ln x)^2}{2}\mid ^t_1
$$
$$
\lim_{t\to\infty} \frac{(\ln(t))^2}{2} \to \infty \implies \text{diverges}
$$

Example:
$$
\sum_{n=1}^\infty \frac{1}{n^2+1}
$$
Using the integral test, since $f(x)$ is continuous and positive for $n\geq1$
$$
f(x)= \frac{1}{(n^2+1)}
$$
$$
\int f(x) = \arctan(x)+C
$$
$$
\lim_{t\to\infty} \arctan(t)\to\infty = \pi \implies \text{converges}
$$

> Definition: p-series
$$
\sum_{n=1}^\infty \frac{1}{n^p}=1+\frac{1}{2^p}+\frac{1}{3^p}+\ldots
$$
- $p>1$ converge
- $p\leq1$ diverge

Example: The following series converges because $2>1$
$$
\sum_{n=1}^\infty \frac{1}{n^2}=1+\frac{1}{4}+\frac{1}{9}+\ldots
$$

> Theorem: Integral Test Estimation Theorem
> Suppose that a function $f$ is continuous, positive, and decreasing on the infinite interval $[k,\infty)$ for some positive integer $k$, and that $\int_k^\infty f(x)dx$ converges so that $\sum_{n=1}^\infty f(n)=S$ for some real number $S$ by the integral test. 
> Let $S_m=\sum_{n=1}^m f(n)$ denote the $m$-th partial sum. Then for any integer $m\geq k$, 
$$
\int_{m+1}^\infty f(x)dx\leq S-S_m\leq\int_m^\infty f(x)dx
$$
> We denote $R_n=S-S_n$

Example: How many terms are needed to approximate $\sum_{n=1}^\infty \frac{1}{n^2}$ with an error of at most 0.001

Solution:
$$
\int_1^\infty \frac{1}{x^2}dx = \lim_{t\to\infty} -\frac{1}{x}\mid^t_n = \frac{1}{n}\leq0.001
$$
$$
n\geq1000
$$
Example: Find an upper bound on the error if we choose the partial sum $S_{10}$ to estimate $S=\sum_{n=1}^\infty \frac{1}{n^2}$

Solution:
$$
S-S_{10}\leq\int_{10}^\infty \frac{1}{x^2}dx
$$
## 3.4 | Comparison Test and Limit Comparison Test
> Theorem: Comparison Test
> For any two sequences $a_n\leq b_n$
- If $b_n$ converges, then any smaller series $a_n$ converges
- If $a_n$ diverges, $b_n$ also diverges

Examples: 
$$
\sum \frac{n}{n^2+7}
$$
Solution:
Since $\sum \frac{1}{n^2}$ converges (p-test, $p=2\geq 1$), then by comparison, so does $\sum \frac{n}{n^3+7}$
$$
\sum \frac{n+7}{n^2-1}
$$
Solution:
$$
\frac{n+7}{n^2-1} \geq \frac{n}{n^2-1} \geq \frac{n}{n^2} = \frac{1}{n} \geq 0
$$
Since $\sum \frac{1}{n}$ diverges (Harmonic series, p-series), then by comparison, $\sum \frac{n+7}{n^2-1}$ also diverges

$$
\sum \frac{n^3-n}{n^4+7}
$$
Solution:
$$
\frac{n^3-n}{n^4+7}\leq \frac{n^3}{n^4+7}\leq \frac{n^3}{n^4}\leq \frac{1}{n}
$$
Since $\sum \frac{1}{n}$ diverges, BUT $\frac{n^3-n}{n^4+7}$ is less than $\frac{1}{n}$, we get no information about it!

> Theorem: Limit Comparison Test
> For any two sequences $a_n\geq0$, $b_n>0$, let 
$$
\lim_{n\to\infty} \frac{a_n}{b_n}>0
$$
1. If $0<L<\infty$ either **both converge or both diverge**
2. If $L=0$, there exists a positive integer $j$ such that $a_n<b_n$ for all $n\geq j$. Consequently:
	1. If $b_n$ converges, then $a_n$ does too. 
	2. If $a_n$ diverges, then $b_n$ does too.
3. If $L=\infty$, then there is a positive integer such that $a_n>b_n$ for all $n\geq j$. Consequently: 
	1. If $a_n$ converges, then $b_n$ does too. 
	2. If $b_n$ diverges, then $a_n$ does too.
4. If $L = DNE$, we don't know anything

When to use LCT?
$$
\sum \frac{\text{powers of n}}{\text{powers of n}}
$$
Almost geometric series:
$$
\sum \frac{2^n+n}{3^n+1}
$$
Examples:
$$
\sum \frac{n^3-n}{n^4+7} \sim \frac{1}{n}
$$
Solution:
$$
\lim_{n\to\infty} \frac{a_n}{b_n}=\lim_{n\to\infty} \frac{n^3-n}{n^4+7}\cdot \frac{n}{1} = 1
$$
By LCT, since $\frac{1}{n}$ diverges, so does $\frac{n^3-n}{n^4+7}$
$$
\sum \frac{2^n-1}{3^n+n} \sim (\frac{2}{3})^n
$$
Solution:
$$
\lim_{n\to\infty}\frac{2^n-1}{3^n+n}\cdot \frac{3^n}{2^n} = \lim_{n\to\infty}\frac{2^n3^n}{3^n2^n}(\frac{1-\frac{1}{2}^n}{1-\frac{2}{3}^n})=1
$$
Since $(\frac{2}{3})^n$ converges (geometric series), by LCT, so does $\frac{2^n+n}{3^n+1}$
$$
\sum \frac{\sqrt{n^2+5n}+3}{n^{7/4}+3n-1}\sim \frac{1}{n^{3/4}} \implies \text{diverges}
$$
## 3.5 | Alternating Series Test
> Definition: Alternating Series
> Let $\{a_n\}^\infty_{n=1}$ be a strictly positive series. An **alternating series** is an infinite series that is in one of the following forms:
$$
(i)\sum^\infty_{n=1}(-1)^{n-1}a_n=a_1-a_2+a_3-a_4+\cdots
$$
$$
(ii)\sum_{n=1}^\infty(-1)^na_n=-a_1+a_2-a_3+a_4-\cdots = -\sum_{n=1}^\infty(-1)^{n-1}a_n
$$
> Theorem: Alternating Series Test
> $\{a_n\}^\infty_{n=1}$ converges if
1. $\lim_{n\to\infty}a_n=0$
2. $a_n$ is eventually decreasing; there exists a positive integer $k$ such that $a_n\geq a_{n+1}>0$ for all $n\geq k$

Example:
$$
\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n} = \sum_{n=1}^\infty (-1)^{n-1} \frac{1}{n}
$$
1. $\lim_{n\to\infty} \frac{1}{n} = 0$
2. $\frac{1}{n}\geq \frac{1}{n+1}$
BY AST this converges

Example
$$
\sum_{n=1}^\infty(-1)^{n+1} \frac{n^2}{n^3+1}
$$
1. $\lim_{n\to\infty} \frac{1}{n}=0$
2. Use derivative to find decreasing
$$
f(x) = \frac{x^3}{x^3+1}
$$
$$
f'(x)=\frac{2x(x^3+1)-x^2(3x^2)}{(x^3+1)^2} = \frac{2x-x^4}{(x^3+1)^2}=\frac{x(2-x^3)}{(x^3+1)^2}
$$
$$
f'(x)=0\implies x=0, x=\sqrt[3]{2}
$$
$$
f'(x)<0\implies x>\sqrt[3]{2}
$$
Thus, $\frac{n^2}{n^3+1}$ is decreasing on $n\geq2$

Example
$$
\sum_{n=1}^\infty \frac{(-1)^n3n}{4n-1}
$$
1. $\lim_{n\to\infty}=\frac{3}{4}\neq0$ - criteria fails!

Use Divergence Test:
$$
\lim_{n\to\infty} \frac{(-1)^2 3n}{4n-1}\cdot\frac{\frac{1}{n}}{\frac{1}{n}}=\lim_{n\to\infty}\frac{(-1)^n3}{4- \frac{1}{n}}=\lim_{n\to\infty}\frac{(-1)^n3}{4}=\frac{3}{4}\lim_{n\to\infty}(-1)^n=DNE
$$
Since $\lim\neq0$, this diverges!

> Theorem: Alternating Series Estimation Theorem
> Let $\{a_n\}_{n=1}^\infty$ be a sequence that satisfies the Alternating Series Test, so that 
$$
\sum_{n=1}^\infty(-1)^{n-1}a_n\to S, \sum_{n=1}^\infty(-1)^na_n\to T
$$
> Let $S_m$ denote the $m$-th partial sum of $S$, and $T_m$ denote the $m$-th partial sum of $T$.
> Suppose $m\geq k$, where $k$ is the positive integer in part ii) of AST hypothesis. Then,
1. $|S-S_m|\leq a_{m+1}$ and $|T-T_m|\leq a_{m+1}$
2. If $m$ is even, then $S_m$ is an underestimate of $S$ and $T_m$ is an overestimate of $T$
3. If $m$ is odd, then $S_m$ is an overestimate of $S$ and $T_m$ is an underestimate of $T$

Example:
Find an upper bound on the remainder if we use $S_{10}$ to approximate
$$
|R_{10}|\leq b_{11}= \frac{(-1)^{12}}{11^2}=\frac{1}{121}
$$
How many terms are needed to approximate $\sum_{n=1}^\infty \frac{(-1)^n}{n5^n}$ with an error of most $10^{-4}$
$$
|R_n|\leq b_{n+1}= \frac{1}{(n+1)5^{n+1}}\leq \frac{1}{10000}\implies
$$
$$
n=4
$$
Is the 121st partial sum of $\frac{(-1)^{n+1}3^n}{n4^n}$ an over or underestimate?
$S_1$ is over, $S_2$ is under, so $S_{121}$ is an overestimate

## 3.6 | Absolute and Conditional Convergence
> Definition: Absolutization
$$
\sum_{n=1}^\infty a_n \text{ converges absolutely if } \sum_{n=1}^\infty|a_n|\text{ converges} 
$$
> Theorem: Absolute Convergence Test
$$
\text{If }\sum_{n=1}^\infty|a_n|\text{ converges, then }\sum_{n=1}^\infty a_n\text{ converges}
$$

Example:
$$
\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n}\text{ converges}
$$
$$
\sum_{n=1}^\infty \frac{1}{n}\text{ diverges}
$$
So this series is conditionally convergent!

Example:
$$
\sum_{n=1}^\infty \frac{\cos(n)}{n^2}
$$
Consider
$$
\sum_{n=1}^\infty \frac{|\cos(n)|}{n^2}
$$
Comparison test:
$$
- \frac{1}{n^2}<\frac{\cos(n)}{n}< \frac{1}{n^2}
$$
Since $\frac{1}{n^2}$ converges (p-series), we have that $\frac{\cos(n)}{n^2}$ neither diverges to $\infty$ or $-\infty$. Thus, it converges

Order to apply tests
1. Divergence test
2. Check for absolute convergence
	1. p-series
	2. geometric
	3. comparison
	4. integral
3. Check for conditional convergence
	1. alternating series

Examples:
$$
\sum_{n=1}^\infty \frac{\sqrt{n^3+1}}{3n^3+4n^2+2}
$$
1. Divergence test fails (limit = 0)
2. Comparison test with $\frac{1}{3n^{3/2}}$
$$
\lim_{n\to\infty} \frac{\sqrt{n^3+1}}{3n^3+4n^2+2} / \frac{1}{3n^3} = \lim_{n\to\infty} \frac{3\sqrt{n^6+n^3}}{3n^3+4n^2+2}=1
$$
By LCT since $\sum \frac{1}{3n^{3/2}}$ converges (p-series), this also CONVERGES ABSOLUTELY
$$
\sum_{n=1}^\infty ne^{-n^2}
$$
3. Divergence test fails
4. Integral test with $u=x^2$
$$
\int_1^\infty xe^{u} \frac{du}{2x}=-\frac{1}{2} \int_1^\infty e^-u = -\frac{1}{2}[e^{-\infty}-e^{-1}] \implies \text{converrges absolutely}
$$

$$
\sum_{n=1}^\infty \frac{(-1)^n4^n}{3^n} = (-1)^n (\frac{4}{3})^n \implies \text{diverges}
$$
$$
\sum_{n=1}^\infty (-1)^n \frac{n^3}{n^4+1}
$$
1. Divergence test fails
2. LCT with $\frac{1}{n}$
$$
\lim_{n\to\infty} \frac{n^3}{n^4+1} / \frac{1}{n} = \lim_{n\to\infty} \frac{n^4}{n^4+1}=1\implies \text{diverges}
$$
3. AST
$$
\lim_{n\to\infty} \frac{n^3}{n^4+1}=0
$$
$$
\frac{(n+1)^3}{(n+1)^4+1}\leq \frac{n^3}{n^4+1}
$$
Thus, this series CONVERGES CONDITIONALLY
## 3.7 | Ratio Test and Root Test
> Theorem: Ratio Test
> Let $k$ be a positive integer. Suppose that $\{a_n\}^\infty_{n=1}$ is a sequence satisfying $a_n\neq 0$ for every $n\geq k$. Let $L$ be the following, and suppose that either $L\in\mathbb{R}$ or $L=\infty$ 
$$
L=\lim_{n\to\infty} |\frac{a_{n+1}}{a_n}|
$$
1. If $L<1$, then $a_n$ converges absolutely
2. If $L>1$, then $a_n$ diverges
3. If $L=1$, then the test is inconclusive

Example
$$
\sum_{n=1}^\infty \frac{n^2+3n}{5n}
$$
$$
\begin{align}
&\lim_{n\to\infty}|\frac{(n+1)^2+3(n+1)}{5^{n+1}}/\frac{n^2+3n}{5^n} \\
=&\lim_{n\to\infty}|\frac{(n+1)^2+3(n+1)}{5^{n+1}}\cdot \frac{5^n}{n^2+3n}| \\
=&\lim_{n\to\infty} \frac{1}{5}\cdot\frac{(n+1)^2+3(n+1)}{n^2+3n}=\frac{1}{5}<1
\end{align}
$$
Example:
$$
\begin{align}
&\lim_{n\to\infty}|\frac{(-1)^{n+1}9^{n+1}}{(n+1)2^{n+1}} \cdot \frac{n2^n}{(-1)^n9^n}| \\
=&\lim_{n\to\infty} \frac{9n}{2(n+1)} \\
=& \frac{9}{2} \implies \text{diverges}
\end{align}
$$

Example
$$
\begin{align}
&\lim_{n\to\infty} |\frac{(n+1)^2+2(n+1)+1}{3(n+1)^4}\cdot\frac{3n^4+4}{n^2+2n+1}| \\
=&\lim_{n\to\infty} \frac{3n^6\cdots}{3n^6\cdots} \\
=&1\implies\text{inconclusive}
\end{align}
$$
Example:
$$
\begin{align}
&\lim_{n\to\infty}|\frac{(n+1)^{n+1}}{(n+1)!}\frac{n!}{n^n}| \\
=&\lim_{n\to\infty}| \frac{(n+1)^{n+1}}{(n+1)n^n}| \\
=&\lim_{n\to\infty}|(\frac{n+1}{n})^n| \\
=&\lim_{n\to\infty}(1+\frac{1}{n})^n \\
=&e>1\implies\text{diverges}
\end{align}
$$
Example:
$$
\lim_{n\to\infty}|\frac{x^{n+1}}{(n+1)!}\frac{n!}{x^n} = 0\implies\text{converges}
$$
> Theorem: Root Test
> Let $L$ be the following, and suppose that $L\in\mathbb{R}$ or $L=\infty$
$$
L=\lim_{n\to\infty}\sqrt[n]{|a_n|}
$$
1. If $L<1$, then $a_n$ converges absolutely
2. If $L>1$, then $a_n$ diverges
3. If $L=1$, then the test is inconclusive

Example:
$$
\begin{align}
&\lim_{n\to\infty}\sqrt[n]{|\frac{n+1}{3n+7}|^n} = \frac{1}{3} < 1\implies\text{converges}
\end{align}
$$

> Comparing Values
$$
(\ln(n))^p<<n^p<<x^n<<n!<<n^n
$$

## Series Recap
1. Sum of Geometric and Telescoping Series
	1. $\sum ar^{n-1}, \sum \frac{1}{n}-\frac{1}{n+1}$
2. Divergence Test (any series)
	2. $\lim_{n\to\infty} a_n$
	3. Use this first 
3. Integral Test (positive series)
	1. Last resort, must be continuous, positive, decreasing
4. P-series
	2. $\sum \frac{1}{n^p}$
	3. Good for comparison and limit comparison
5. Comparison Test
	1. Polynomial / Polynomial
	2. Also last resort, LCT usually better
6. Ratio Test (any series)
	1. Factorials / Exponents
7. Root Test (any series)
	1. Powers of n
8. Alternating Series
	2. Only proves conditional convergence
# 4 | Power Series
## 4.1 | Introduction to Power Series
> Definition: Power Series
> A **power series** is a series of the form **(centered at 0)**
$$
\sum_{n=0}^\infty a_nx^n=a_0+a_1x+a_2x^2+\ldots
$$
> Or **(centered at a)**
$$
\sum_{n=0}^\infty a_n(x-a)^n=a_0+a_1(x-a)+a_2(x-a)^2
$$
> The **domain** of a power series is the collection of all $x\in\mathbb{R}$ for which the power series converges

Notes:
$$
\sum_{n=0}^\infty a_n(x-a)^n
$$
1. When $n=0$, the term is $a_0$
2. If the first few coefficients are zero, $a_0=a_1=\cdots=a_k=0$, then
$$
\sum_{n=0}^\infty a_n(x-a)^n=\sum_{n=k+1}^\infty a_n(x-a)^n
$$

Example: Find the domain of
$$
\sum_{n=0}^\infty n!x^n
$$
Ratio test:
$$
\begin{align}
\lim_{n\to\infty}| \frac{(n+1)!x^{n+1}}{n!x^n}&=\lim_{n\to\infty}|(n+1)x|  \\
&= \lim_{n\to\infty}(n+1)|x| \\
&=\infty
\end{align}
$$
Domain: $x=0$

Example: Find the domain of
$$
\sum_{n=0}^\infty \frac{(x-3)^n}{n}
$$
Ratio test:
$$
\begin{align}
\lim_{n\to\infty} |\frac{(x-3)^{n+1}}{n+1}\frac{n}{(x-3)^n}| &= \lim_{n\to\infty} |\frac{(x-3)n}{n+1} |\\
&= \lim_{n\to\infty} |(x-3) \frac{n}{n+1}| \\
&=|x-3|
\end{align}
$$
By the ratio test, $|x-3|<1\implies x\in[2,4)$
If $x=2, \sum \frac{(-1)^n}{n}$ converges by AST
If $x=4,\sum \frac{1^n}{n}$ diverges by p-series

> Theorem: Power Series
> For any power series $\sum_{n=0}^\infty c_n(x-a)^n$, there are only three possibilities
> 1. The series converges only when $x=a$
> 2. The series converges for all $x\in\mathbb{R}$
> 3. There exists $R\in\mathbb{R}$ such that the series converges absolutely for $|x-a|<R$, diverges if $|x-a|>R$, and may converges or diverge if $|x-a|=R$

> Definition: Radius and Interval of Convergence
> The $R$ in the previous theorem is called the **radius of convergence**, and the **domain / interval of convergence** is the interval on which the power series converges
> 1. $R=0$
> 2. $R=\infty$
> 3. $R\in(0, \infty)$ - check endpoints in this case

Find the radius and intervals of convergence:
Q1
$$
\sum_{n=0}^\infty \frac{(-3)^nx^n}{\sqrt{n+1}}
$$
$$
\begin{align}
\lim_{n\to\infty} \frac{(-3)^{n+1}x^{n+1}}{\sqrt{n+2}}\frac{\sqrt{n+1}}{(-3)^nx^n} &= \lim_{n\to\infty}-3x \frac{\sqrt{n+1}}{\sqrt{n+2}} \\
&=|-3x| < 1 \\
&\implies x\in(-\frac{1}{3}, \frac{1}{3}] \\
&\implies R=3
\end{align}
$$
Q2
$$
\sum_{n=0}^\infty \frac{n(x+2)^n}{3^{n+1}}
$$
$$
\begin{align}
\lim_{n\to\infty} \frac{(n+1)(x+2)^{n+1}}{3^{n+2}}\frac{3^{n+1}}{n(x+2)^n} &= \lim_{n\to\infty} \frac{n+1}{n} \frac{x+2}{3} \\
&= |\frac{x+2}{3}| < 1\ \\
&\implies |x+2|<3 \\
&\implies x\in(-5, 1) \\
&\implies R=3
\end{align}
$$
Q3
$$
\sum_{n=0}^\infty \frac{(-1)^nx^{2n}}{2^{2n}(n!)^2}
$$
 $$
\begin{align}
\sum_{n=0}^\infty \frac{(-1)^{n+1}x^{2n+2}}{2^{2n+2}(n+1)!^2}\frac{2^{2n}(n!)^2}{(-1)^nx^{2n}} &= -x^2 \frac{1}{2^2 (n+1)^2} \\
&=-\frac{x^2}{4(n+1)^2}=0<1\\
&\implies x\in\mathbb{R} \\
&\implies R=\infty
\end{align}
$$
## 4.2 | Representing Functions as Power Series
> Theorem: Abel's Theorem
> Let $I$ denote the interval of convergence for the power series function
$$
f(x)=\sum_{n=0}^\infty c_n(x-a)^n
$$
> Then $f$ is continuous on $I$

> Properties 
> Let $f(x)=\sum c_n(x-a)^n$ and $g(x)=d_n(x-a)^n$
> Let $R_f, R_g, I_f, I_g$ be the radii and intervals of convergence for $f, g$ respectively.
> Property 1:
$$
h(x)=f(x)\pm g(x)=\sum_{n=0}^\infty (c_n\pm d_n)(x-a)^n
$$
- If $R_f\neq R_g$, then $R_h=\min\{R_f,R_g\}$ and $I_h=I_f\cap I_g$
- If $R_f=R_g$, the $R_h\geq R_f$
> Property 2:
$$
p(x)=(x-a)^kf(x)=\sum_{n=0}^\infty x_n(x-a)^{n+k}
$$
> $R_p=R_f, I_p=I_f$
> Property 3:
$$
q(x)=f(bx^k)=\sum_{n=0}^\infty c_nb^nx^{kn}
$$
> $R_q=(\frac{R_f}{|b|})^{1/k}$, and if $R_f=\infty, R_q=\infty$
> $I_q=\{x\in\mathbb{R}\mid bx^k\in I_f\}$

Example: 
Express $\frac{1}{1+x^2}$ as a power series and find the interval of convergence.
$$
\begin{align}
\frac{1}{1+x^2} &= \frac{1}{1-(-x^2)} \\
&=\sum_{n=0}^\infty(-x^2)^n \\
&=\sum_{n=0}^\infty(-1)^nx^{2n} \\
|-x^2|&<1 \\
x^2&<1 \\
|x|&<1
\end{align}
$$
Example:
$$
\begin{align}
\frac{1}{x+2}&=\frac{1}{2} \frac{1}{1-(-\frac{x}{2})} \\
&=\frac{1}{2}\sum_{n=0}^\infty (-\frac{x}{2})^n \\
&=\sum_{n=0}^\infty(-1)^n \frac{x^n}{2^{n+1}}
\end{align}
$$
Radius:
$$
\begin{align}
|-\frac{x}{2}|&<1 \\
|x|&<2 \\
R&=2 \\
I&=(-2,2)
\end{align}
$$
Example:
$$
\begin{align}
\frac{1}{4-x^2}&=\frac{1}{x} \frac{1}{1-\frac{x^2}{4}} \\
&=\frac{1}{4}\sum_{n=0}^\infty\left( \frac{x^2}{4} \right)^n \\
&=\sum_{n=0}^\infty \frac{x^{2n}}{4^{n+1}}
\end{align}
$$
Radius
$$
\begin{align}
|\frac{x^2}{4}|&<1 \\
x^2&<4 \\
|x|&<2 \\
R&=2 \\
I&=(-2,2)
\end{align}
$$
Example:
$$
\begin{align}
\frac{x^3}{x+2}&=x^3\sum_{n=0}^\infty \frac{(-1)^nx^n}{2^{n+1}} \\
&=\sum_{n=0}^\infty \frac{(-1)^nx^{n+3}}{2^{n+1}}
\end{align}
$$
Radius
$R=2, I=(-2,2)$

Example
$$
\begin{align}
\frac{1+x}{1-x} &= 1+\frac{2x}{1-x} \\
&=1+2x(\frac{1}{1-x}) \\
&=1+2x\sum_{n=0}^\infty x^n \\
&=1+\sum_{m=0}^\infty 2x^{n+1} \\
\end{align}
$$
Radius
$$
|x|<1, I=(-1,1)
$$
Example
$$
\begin{align}
\frac{3}{x^2-x-2}&=\frac{3}{(x-2)}(x+1) \\
&=\frac{1}{x-2}-\frac{1}{x+1} \\
&=-\frac{1}{2}\left( \frac{1}{1-\frac{x}{2}} \right)-\frac{1}{1-(-x)} \\
&=-\sum_{n=0}^\infty \frac{x^n}{2^{n+1}}-\sum_{n=0}^\infty (-1)^nx^n \\
&=\sum_{n=0}^\infty\left[ (-1)^{n+1}-\frac{1}{2^{n+1}} \right]x^m
\end{align}
$$
## 4.3 | Differentiating and Integrating Power Series
> Theorem:
> Let $f(x)=\sum_{n=0}^\infty c_n(x-a)^n$ with radius of convergence $R>0$. Then, $f(x)$ is differentiable (and continuous and integrable) on $(a-R, a+R)$. In addition:
$$
f'(x)=\sum_{n=1}^\infty c_n(x-a)^{n-1}, x\in(a-R, a+R)
$$
$$
\int f(x)dx = C+\sum_{n=0}^\infty c_n \frac{(x-a)^{n+1}}{n+1}
$$
$$
\int_b^d f(x)dx=\sum_{n=0}^\infty c_n[ \frac{(x-a)^{n+1}}{n+1} ]
$$

Example: 
$$
\begin{align}
\frac{1}{1-x}&=\sum_{n=1}^\infty x^n \text{(diffentiate)}\\
-1(1-x)^{-2}(-1)&=\sum_{n=1}^\infty nx^{n-1} \\
\frac{5}{(1-x)^2}&=5\sum_{n=1}^\infty nx^{n-1} \\
&=\sum_{n=1}^\infty5nx^{n-1}, R=1
\end{align}
$$
$x=-1\implies  \sum 5n(-1)^{n-1}$ diverges by divergence test
$x=1\implies \sum 5n(1)$ diverges by divergence test
$I(-1,1)$

Example
$$
\begin{align}
\frac{1}{1+x^7}&=\frac{1}{1-(-x^7)} \\
&=\sum_{n=0}^\infty(-x^7)^n \\
&=\sum_{n=0}^\infty(-1)^n x^{7n} \\
\int \frac{1}{1+x^7}dx&=\int\sum_{n=0}^\infty (-1)^n x^{7n}dx \\
&=C+\sum_{n=0}^\infty \frac{(-1)^nx^{7n+1}}{7n+1} \\
\end{align}
$$
To test endpoints, choose $C=0$ (this doesn't affect convergence / divergence)
$x=-1$
$$
\sum \frac{(-1)^n(-1)^{7n+1}}{7n+1}=\sum\frac{(-1)^{8n+1}}{7n+1}-\sum \frac{-1}{7n+1}
$$
Diverges by LCT
$x=1$
$$
\sum \frac{(-1)^n(1)^{7n+1}}{7n+1}=\sum \frac{(-1)^n}{7n+1}
$$
Converges by AST
$I=(-1,1]$

Example:
$$
\begin{align}
\frac{1}{1-x}&=\sum x^n \\
\frac{1}{-(-x)}&=\sum (-x)^n \\
\int\frac{1}{1-(-x)} &= \int\sum(-1)^nx^n dx \\
\ln|1+x|&=C + \sum\frac{(-1)^nx^{n+1}}{n+1} \\
R&=1
\end{align}
$$
Let $x=0, \ln|1+0|=...$
Endpoints:
$x=-1$
$$
\sum \frac{(-1)^n(-1)^{n+1}}{n+1}=\sum\frac{(-1)^{2n+1}}{n+1} =\sum -\frac{1}{n+1}
$$
Diverges by LCT
$x=1$
$$
\sum \frac{(-1)^n}{n+1}
$$
Converges by AST
$I=(-1,1]$

> Theorem:
$$
e^x=\sum_{n=0}^\infty \frac{x^n}{n!}
$$

Proof: 
$$
g(x)=\sum_{n=0}^\infty \frac{x^n}{n!}
$$
$$
g'(x)=\sum_{n=1}^\infty \frac{nx^{n-1}}{n!} = \sum_{n=1}^\infty \frac{x^{n-1}}{(n-1)!}=\sum_{n=0}^\infty \frac{x^n}{n!}=g(x)
$$
$$
\begin{align}
\frac{dg(x)}{dx}&=g(x) \\
\int\frac{1}{g(x)} dg(x)&=\int1dx \\
\ln|g(x)|&=x+C \\
|g(x)&=e^ce^x| \\
g(x)&=\pm e^ce^x  \\
g(x)&=e^x
\end{align}
$$

## 4.4 | Taylor Series and Taylor Polynomials
### 3b1b Explanation
Pendulum approximation
$$
\cos(\theta)\approx 1 - \frac{\theta^2}{2}
$$
Taylor Series approximate non-polynomial functions with polynomials.

Ex: Approximate $\cos(x)=0$ with a function 
$P(x)=c_0+c_1x+c_2x^2$
We know that $P(0)=1$, so 
$P(x)=1+c_1x+c_2x^2 \implies c_0=1$

We want the derivative of $\cos(x)$ to be similar to the derivative of $P(x)$
$\cos'(0)=-\sin(0)=0$
$P'(0)=c_1+2c_2(0) = c_1 = 0 \implies c_1=0$
$P(x)=1+0x+c_2x^2$

We want the second derivative of $\cos(x)$ to be similar as well
$\cos''(0)=-\cos(0)=-1$
$P''(0)=0+2c_2 = 2c_2 = -1\implies c_2=-\frac{1}{2}$
$P(x)=1+0x-\frac{1}{2}x^2 = 1-\frac{1}{2}x^2$

Observe:
- We can add a term $\frac{1}{24}x^4$ if we wanted to get even closer
- There are many factorial terms ($4!=24$)
- Adding new terms doesn't change the previous terms
- Observations about higher-order derivatives make the approximation more accurate

Taylor Polynomial
$$
P(x)=f(0)+\frac{df}{dx}(0)\frac{x^1}{1!}+\frac{d^2f}{dx^2}(0)\frac{x^2}{2!}+\frac{d^3f}{dx^3}(0)\frac{x^3}{3!}+\cdots
$$
Taylor Polynomial around a point $a$:
$$
P(x)=f(a)+\frac{df}{dx}(a)\frac{(x-a)^1}{1!}+\frac{d^2f}{dx^2}(a)\frac{(x-a)^2}{2!}+\cdots
$$

Example: Approximating $e^x$ around 0
$$
P(x)=1+1\frac{x^1}{1!}+1\frac{x^2}{2!}+\cdots
$$
Example: Approximating the integral function of $f(x)$

Base = $(x-a)$
Height = $\frac{d^2f_{area}}{dx^2}(a)(x-a)$
Triangle = $\frac{1}{2}\frac{d^2f_{area}}{dx^2}(a)(x-a)^2$
$$
f(x)\approx f(a)+\frac{df}{dx}(a)(x-a)+\frac{1}{2} \frac{d^2f}{dx^2}(a)(x-a)^2
$$

Does it make sum to keep approximating without stopping?
- Taylor Series = Infinitely long Taylor Polynomial
- Certain series converge to a certain value
- For instance, the Taylor Polynomial for $e^x$ converges to $e$ at all inputs $x$
- The Taylor Polynomial for $\ln(x)$ converges to $x$ on $[0,1]$, otherwise it diverges
- This is called the Radius of Convergence
- Lagrange Error Bound, convergence tests, etc.
### Textbook
> Definition:
> The $n$-th derivative of $f$ will be denoted by $f^{(n)}(x)$

> Theorem: Uniqueness of Power Series Representation
> Suppose that $f$ has a power series representation centered at $x=a$, meaning
$$
f(x)=\sum_{n=0}^\infty c_n(x-a)^n
$$
> holds for all $x$ satisfying $|x-a|<R$, where $R>0$. Then,
$$
c_n= \frac{f^{(n)}(a)}{n!}
$$

> Definition: Taylor and Maclaurin Series
> Let $f$ be differentiable arbitrarily many times at $x=a$, i.e., $f^{(n)}(a)$ is a well-defined real number for every nonnegative integer $n$. The power series
$$
\sum_{n=0}^\infty \frac{f^{(n)}(a)}{n!} (x-a)^n
$$
> is called the **Taylor Series** for $f$ centered at $x=a$. The **Maclaurin Series** is a Taylor Series centered at 0.
$$
\sum_{n=0}^\infty \frac{f^{(n)}(0)}{n!}x^n
$$
> Definition: Taylor Polynomial
> Assume that $f$ is $m$-times differentiable at $x=a$. The $m$-th degree **Taylor Polynomial** for $f$ centered at $x=a$ is
$$
\begin{align}
T_{m,a}(x)&=\sum_{n=0}^m \frac{f^{(n)}(a)}{n!}(x-a)^n \\
&= f(a)+f'(a)(x-a)+\ldots+\frac{f^{(m)}(a)}{m!}(x-a)^m
\end{align}
$$
> We note that $T_{m,a}(x)$ is the $m$-th partial sum of the Taylor series for $f$ centered at $x=a$

> Theorem:
> For every integer $j\in\{0,1,2,\ldots,m\}$, we have that
$$
T_{m,a}^{(j)}(a)=F^{(j)}(a)
$$

> Theorem: Lagrange Remainder Formula
> Let $m$ be a nonnegative integer. Suppose that $f^{(m+1)}$ is continuous on an open interval $I$ that contains $a$. If $x\in I$, then there exists a real number $c\in[a,x]$ such that
$$
f(x)-T_{m,a}(x)=\frac{f^{(m+1)}(c)}{(m+1)!}(x-a)^{m+1}
$$

> Theorem: Taylor's Inequality
> Let $m$ be a nonnegative integer. Suppose that $f^{(m+1)}$ is continuous on an open interval $I$ that contains $a$. If $|f^{(m+1)}(x)\leq K$ for every $x\in I$, then we have
$$
|f(x)-T_{m,a}(x)|\leq \frac{K|x-a|^{m+1}}{(m+1)!}
$$

> Theorem: Convergence Theorem for Taylor Series
> Assume that $f$ has derivatives of all orders on an open interval $I$ that contains $a$. Further assume that there is a constant $K$ such that $f^{(n)}(x)\leq K$ for every nonnegative integer $n$ and for every $x\in I$. Then for every $x\in I$
$$
f(x)=\sum_{n=0}^\infty \frac{f^{(n)}(a)}{n!}(x-a)^n
$$
## 4.5 | Some examples of Taylor Series
### Examples: Taylor Series
Write a Maclaurin Series for $f(x)=\sin x$
$f(x)=\sin x\implies f(0)=0$
$f'(x)=\cos x\implies f'(0)=1$
$f^{(2)}(x)=-\sin x\implies f'^{(2)}=0$
$f^{(3)}(x)=-\cos x\implies f^{(3)}(0)=-1$
$$
\begin{align}
\sin(x)&=x - \frac{x^3}{3!}+\frac{x^5}{5!}+\cdots \\
&=\sum_{n=0}^\infty \frac{(-1)^nx^{2n+1}}{(2n+1)!}
\end{align}
$$

Write a Maclaurin series for $f(x)=\cos x$
$f(x)=\cos x$
$f'(x)=-\sin x$
$f''(x)=-\cos x$
$f'''(x)=\sin x$

$$
\begin{align}
\frac{d\sin(x)}{dx}&=\frac{d}{dx}\sum_{n=0}^\infty \frac{(-1)^nx^{2n+1}}{(2n+1)}! \\
\cos(x)&=\sum_{n=0}^\infty \frac{(-1)^n(2n+1)x^{2n}}{(2n+1)!} \\
&=\sum_{n=0}^\infty \frac{(-1)^nx^{2n}}{(2n)!}
\end{align}
$$
> Known Power Series
$$
\frac{1}{1-x}=\sum_{n=0}^\infty x^n, R=1
$$
$$
e^x=\sum_{n=0}^\infty \frac{x^n}{n!}, R=\infty
$$
$$
\sin x=\sum_{n=0}^\infty \frac{(-1)^nx^{2n+1}}{(2n+1)!}, R=\infty
$$
$$
\cos x=\sum_{n=0}^\infty \frac{(-1)^nx^{2n}}{(2n)!},R=\infty
$$

Example: Find the Maclaurin Series and radius for $f(x)=xe^{-x}$
$$
e^{-x}=\sum_{n=0}^\infty \frac{(-x)^n}{n!} = \sum_{n=0}^\infty \frac{(-1)^nx^n}{n!}
$$
$$
f(x)=xe^{-x}=x\sum_{n=0}^\infty \frac{(-1)^nx^n}{n!} = \sum_{n=0}^\infty \frac{(-1)^nx^{n+1}}{n!}, R=\infty
$$
Example: Find the first three nonzero terms of the Maclaurin Series for $f(x)=e^{-x^2}\cos(x)$
$$
e^{-x^2}=\sum_{n=0}^\infty \frac{(-x^2)^n}{n!}=\sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{n!}
$$
$$
\cos(x)=\sum_{n=0}^\infty \frac{(-1)^nx^{2n}}{(2n+1)!}
$$
$$
\begin{align}
f(x)&=(1-x^2+ \frac{x^4}{2!} - \frac{x^6}{3!}+\cdots)\cdot (1- \frac{x^3}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} +\cdots)  \\
&=1- \frac{3}{2}x^3 + \frac{25}{24}x^4 + \cdots
\end{align}
$$
Example: Write the following as an infinite sum
$$
\begin{align}
\int_0^1 \cos(x^2)dx &= \int_0^1 \sum_{n=0}^\infty \frac{(-1)^n(x^2)^{2n}}{(2n)!} \\
&= \int_0^1 \sum_{n=0}^\infty \frac{(-1)^nx^{4n}}{(2n)!} \\
&=\sum_{n=0}^\infty \frac{(-1)^nx^{4n+1}}{(4n+1)(2n)!} \mid_0^1 \\
&=\sum_{n=0}^\infty \frac{(-1)^n}{(4n+1)(2n)!}
\end{align}
$$
Examples: Find the Taylor Series and interval of convergence for:
$$
\begin{align}
2^x &= (e^{\ln 2})^x  \\
&= \sum_{n=0}^\infty \frac{(\ln(2)x)^n}{n!}  \\
&= \sum_{n=0}^\infty \frac{(\ln 2)^nx^n}{n!}
\end{align}
$$
$$
\begin{align}
\sin^2(x)&=\frac{1}{2}(1-\cos(2x))  \\
&= \frac{1}{2}-\frac{1}{2}\cos(2x) \\
&=\frac{1}{2}-\frac{1}{2}\sum_{n=0}^\infty \frac{(-1)^n(2x)^{2n}}{(2n)!} \\
&=\frac{1}{2}+\sum_{n=0}^\infty  \frac{(-1)^{n+1}2^{2n}x^{2n}}{2(2n)!} \\
&= \frac{1}{2} = \sum_{n=0}^\infty  \frac{(-1)^{n+1}2^{2n-1}x^2n}{(2n)!}
\end{align}
$$
$$
\begin{align}
\ln\left( \frac{1+x}{1-x} \right)&= \ln(1+x)-\ln(1-x) \\
\int\frac{1}{1-(-x)}-\frac{1}{1-x}&=\int\sum_{n=0}^\infty(-x)^n - \sum_{n=0}^\infty x^n \\
\ln(1+x)-\ln(1-x)&= \sum_{n=0}^\infty \frac{(-x)^{n+1}}{n+1}-\sum_{n=0}^\infty \frac{x^{n+1}}{n+1} +C \\
&=\sum_{n=0}^\infty \frac{(-1)^{n+1}x^{n+1}}{n+1}+ \frac{x^{n+1}}{n+1}+C \\
&=\sum_{n=0}^\infty \frac{(-1)^{n+1}-1}{n+1}x^{n+1}
\end{align}
$$
Note: all odd $n$ have 0 as a coefficient, all even $n$ have 2
$$
\ln\left( \frac{1+x}{1-x} \right)=\sum_{n=0}^\infty -\frac{2x^{2n+1}}{2n+1}
$$
Ex: Determine an explicit formula of the power series
$$
\begin{align}
1-(\ln 2)x+ \frac{(\ln 2)^2}{2}x^2 - \frac{(\ln 2)^3}{6}x^3 +\ldots &=\sum_{n=0}^\infty \frac{(-\ln(2)x)^n}{n!} \\
&=e^{(-\ln(2)x)} \\
&=e^{\ln 2^{-x}} \\
&=\frac{1}{2^x}
\end{align}
$$
$$
\begin{align}
\sum_{n=0}^\infty \frac{3^n}{5^n n!} &= \sum_{n=0}^\infty \frac{(3/5)^n}{n!} \\
&=e^{3/5}
\end{align}
$$
### Examples: Taylor Polynomials
Find the 2, 4, 6th degree Taylor Polynomial centered at $x=0$ for 
$$
\begin{align}
f(x)&=x\sin x \\
&= x\sum \frac{(-1)^nx^{2n+1}}{(2n+1)!} \\
&= \sum \frac{(-1)^nx^{2n+2}}{(2n+1)!} \\
T_{2,0}(x)&=x^2 &&(n=0) \\
T_{4,0}(x)&=x^2 - \frac{x^4}{4} && (n=0,1) \\
T_{6,0}(x)&=x^2-\frac{x^4}{6}+\frac{x^6}{5!} &&(n=0,1,2)
\end{align}
$$
Find the 4th degree Taylor Polynomial centered at $x=\frac{\pi}{2}$ for $f(x)=x\sin x$
$f(x)=x\sin(x)\implies f\left( \frac{\pi}{2} \right) = \frac{\pi}{2}$
$f'(x)=\sin(x)+x\cos(x) \implies f'(\frac{\pi}{2}) = 1$
$f''(x)=2\cos(x) + x\sin(x)\implies f''(\frac{\pi}{2}) = \frac{\pi}{2}$
$f'''(x)=-3\sin(x)-x\cos(x)\implies f'''(x)= -3$
$f''''(x)=-4\cos(x)+x\sin(x)\implies f''''(x)= \frac{\pi}{2}$
$$
T_{4, \frac{\pi}{2}}(x) = \frac{\pi}{2}+1\left( x-\frac{\pi}{2} \right) - \frac{\pi/2}{2!}\left( x-\frac{\pi}{2} \right)^2 - \frac{3}{3!}(x-\frac{\pi}{2})^3+ \frac{\pi/2}{4!}(x-\frac{\pi}{2})^4
$$

Approximate the function $f(x)=\sqrt[3]{x}$ by a Taylor polynomial of degree 2 at $a=8$
How accurate is this when $7\leq x\leq9$?
$f(x)=x^{\frac{1}{3}}\implies f(8)=2$
$f'(x)= \frac{1}{3}x^{-\frac{2}{3}}\implies f'(8)= \frac{1}{12}$
$f''(x)= -\frac{2}{9}x^{-\frac{5}{3}}\implies f''(8)=-\frac{1}{144}$
$f'''(x)= \frac{10}{27}x^{-\frac{8}{5}}$
$$
T_{2,8}(x)=2+ \frac{1}{12}(x-8)- \frac{1}{144\cdot2}(x-8)^2
$$
Finding Error
$$
\begin{align}
|f^{(3)}(x)|&<k \\
\frac{|10}{27}x^{-8/3}|&<k \\
| \frac{10}{27}x^{-8/3}|&< \frac{10}{27}(7)^{-8/3} < 0.0021
\end{align}
$$
$$
7\leq x\leq 9
$$
$$
-1\leq x-8\leq 1
$$
$$
|x-8|\leq1
$$
$$
\begin{align}
|R_2(x)|&\leq \frac{k}{3!}|x-8|^3 \\
&\leq \frac{0.0021}{3!}(1)^3 \\
&\leq \frac{0.0021}{6} \\
&\leq 0.0004
\end{align}
$$
## 4.6 | Binomial Series
> Example: Binomial Coefficient
> Let $k$ be a real number and let $n$ be a strictly positive integer. We define
$$
{k\choose n} = \frac{(k-0)(k-1)\cdots(k-(n-1))}{n!} = \frac{k(k-1)\cdots(k-n+1)}{n!}
$$
> We note that the numerator of ${k\choose n}$ has $n$ factors. We also define ${k\choose 0}=1, {k\choose -n}=0$

> Remark: Choose Notation
$$
{k\choose n} = \frac{k!}{n!(k-n)!}
$$
> The Binomial Theorem states that
$$
(1+x)^k=\sum_{n=0}^k {k\choose n}x^n
$$

> Theorem: Let $k$ be a real number and $n$ be a strictly positive integer. Then
$$
{k\choose n+1}(n+1)+{k\choose n}n = {k\choose n}k
$$

> Theorem: Generalized Binomial Theorem
> Let $k$ be a real number. If $|x|<1$, then
$$
(1+x)^k=\sum_{n=0}^\infty{k\choose n}x^n=1+kx+\frac{k(k-1)}{2}x^2+\frac{k(k-1)(k-2)}{6}x^3+\cdots
$$
> If $|x|>1$ and $a$ is not a nonnegative integer, then this sum diverges.

Prove: If $f(x)=\sum_{n=0}^\infty{k\choose n}x^n$, then $'(x)+xf'(x)=kf(x), x\in(-1,1)$
$$
\begin{align}
f'(x)+xf'(x)&=\sum_{n=0}^\infty {k\choose n}nx^{n-1}+x\sum_{n=1}^\infty{k\choose n}nx^{n-1} \\
&={k\choose 1}+\sum_{n=2}^\infty{k\choose n}nx^{n-1}+\sum_{n=1}^\infty{k\choose n}nx^n \\
&=k+\sum_{n=1}^\infty{k\choose n+1}(n+1)x^n+\sum_{n=1}^\infty{k\choose n}nx^n \\
&=k+\sum_{n=1}^\infty[{k\choose n+1}(n+1)+{k\choose n}n]x^n \\
&=k+\sum_{n=1}^\infty{k\choose n}kx^n \\
&=k(1+\sum_{n=1}^\infty{k\choose n}x^n) \\
&=k\sum_{n=0}^\infty{k\choose n}x^n \\
&=kf(x)
\end{align}
$$
Prove: Let $g(x)=\frac{f(x)}{(1+x)^k}$ then $g'(x)=0, x\in(-1,1)$
$$
\begin{align}
g'(x)&=\frac{f'(x)(1+x)^k-f(x)k(1+x)^{k-1}}{(1+x)^{2k}} \\
&=\frac{f'(x)(1+x)^k-f'(x)(1+x)(1+x)^{k-1}}{(1+x)^{2k}} \\
&=\frac{f'(x)(1+x)^k-f'(x)(1+x)^k}{(1+x)^{2k}} \\
&=0
\end{align}
$$
Ex: Write $\frac{1}{(1+x)^2}$ as a power series.
$$
(1+x)^{-2}=\sum_{n=0}^\infty{-2\choose n}x^n
$$
$$
\begin{align}
{-2\choose n}&=\frac{(-2)(-3)(-4)\cdots(-2-n+1)}{n!} \\
&=\frac{(-1)^n(2)(3)(4)\cdots(n+1)}{n!} \\
&=(-1)^n(n+1)
\end{align}
$$
$$
\frac{1}{(1+x)^2}=\sum_{n=0}^\infty (-1)^n(n+1)x^n
$$
Ex: Find the Maclaurin series for the function $f(x)=\frac{1}{\sqrt{4-x}}$
$$
\begin{align}
\frac{1}{\sqrt{4-x}}&=\frac{1}{\sqrt{4\left( 1+\left( -\frac{x}{4} \right) \right)}} \\
&=\frac{1}{2}\left( 1+\left( -\frac{x}{4} \right) \right)^{-1/2} \\
&=\frac{1}{2}\sum_{n=0}^\infty{ -\frac{1}{2}\choose n}\left(  -\frac{x}{4} \right)^n \\
\end{align}
$$
## 4.7 | Applications of Taylor Series
Ex: Determine 2 different series that can be used to evaluate the following functions
$f(x)=3^x$
1. $e^x\implies e^{x\ln 3}$
2. $(1+2)^x$
$f(x)=\frac{1}{(3+x)^4}$
3. $(3+x)^{-4}$
4. geometric
$f(x)= -\frac{1}{2}\sin(2x)$
5. $\sin(x)$ 
6. $\cos(x)$ with derivative

Ex: Find the values of the following series
$$
\begin{align}
\sum_{n=0}^\infty \frac{e^n}{2^{n+1}}  &= \frac{1}{2}\frac{1}{1-\left( \frac{e}{2} \right)} \\
&=\frac{1}{2-e}
\end{align}
$$
Ex 2
$$
\sum \frac{k(k-1)\cdots(k-n)1}{n!}x^n
$$
$$
\begin{align}
\sum_{n=0}^\infty \frac{\pi(\pi-1)(\pi-2)\cdots(\pi-n+1)}{7^nn!}&=\sum_{n=0}^\infty \frac{\pi(\pi-1)(\pi-2)\cdots(\pi-n+1)}{n!}\left( \frac{1}{7} \right)^n \\
&=\left( 1+\frac{1}{7} \right)^\pi \\
&=\left( \frac{8}{7} \right)^\pi
\end{align}
$$
Ex 3
$$
\begin{align}
\sum_{n=0}^\infty \frac{(-1)^n(1)(5)(9)\cdots(4n-3)}{4^n3^{4n}n!}\cdot19^n
&=\sum_{n=0}^\infty \frac{\left( -\frac{1}{4} \right)\left( -\frac{5}{4} \right)\cdots\left( -n+\frac{3}{4} \right)}{n!}\cdot \frac{19^n}{3^{4n}} \\
&=\sum_{n=0}^\infty \frac{\left( -\frac{1}{4} \right)\left( -\frac{5}{4} \right)\cdots\left( -n+\frac{3}{4} \right)}{n!}\cdot \left( \frac{19}{81} \right)^n \\ 
&=\left( 1+\frac{19}{81} \right)^{-1/4} \\
&=\left( \frac{100}{81} \right)^{-1/4} \\
&=\frac{3}{\sqrt{10}}
\end{align}
$$
Ex: Find the sum of
$$
\begin{align}
f(x)&=\sum_{n=0}^\infty \left( \frac{(-1)^nx^{2n+1}}{2n+1} \right)+4 \\
f'(x)&=\sum_{n=0}^\infty \frac{(-1)^n(2n+1)x^{2n}}{2n+1}  \\
&=\sum_{n=0}^\infty(-x^2)^n \\
&=\frac{1}{1-(-x^2)} \\
&=\frac{1}{1+x^2} \\
\int f'(x)dx&=\int \frac{1}{1+x^2}\implies 4+\sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{2n+1} \\
f(x)&=\arctan(x)+C \\
f(0)&=4\implies f(x)=\arctan(x)+4
\end{align}
$$
Ex: Express as a power series
$$
e^(-x^2)=\sum_{n=0}^\infty \frac{(-x^2)^n}{n!}=\sum_{n=0}^\infty \frac{(-1)^nx^{2n}}{n!}
$$
$$
\begin{align}
\int_0^1 e^{-x^2}dx&=\int_0^1\sum_{n=0}^\infty \frac{(-1)^nx^{2n}}{n!}dx \\
&=\sum_{n=0}^\infty \frac{(-1)^nx^{2n+1}}{n!(2n+1)}\mid_0^1 \\
&=\sum_{n=0}^\infty \frac{(-1)^n}{n!(2n+1)}
\end{align}
$$
Ex: How many terms to get this approximation within an error of $\frac{1}{1000}?$
$$
\begin{align}
&=1-\frac{1}{3\cdot1!}+\frac{1}{5\cdot2!}+\frac{1}{7\cdot3!}+\frac{1}{9\cdot4!}-\frac{1}{11\cdot5!} \\
&=1-\frac{1}{3}+\frac{1}{10}-\frac{1}{43}+\frac{1}{216}\leq \frac{1}{1320}
\end{align}
$$
Ex: Evaluate as power series
$$
x\sin(x^3)dx=x\sum_{n=0}^\infty\frac{(-1)^n(x^3)^{2n+1}}{(2n+1)!}  = \sum_{n=0}^\infty\frac{(-1)^nx^{6n+4}}{(2n+1)!}
$$
$$
\begin{align}
\int x\sin(x^3)dx&=\int\sum_{n=0}^\infty\frac{(-1)^nx^{6n+4}}{(2n+1)!} \\
&=\sum_{n=0}^\infty \frac{(-1)^nx^{6n+5}}{(2n+1)!(6n+5)} +C
\end{align}
$$
Ex: Evaluate
$$
\begin{align}
\cos(x)&=\sum_{n=0}^\infty \frac{(-1)^nx^{2n}}{(2n)!} \\
\frac{\cos(x)-1}{x}&=\sum_{n=1}^\infty \frac{(-1)^nx^{2n-1}}{(2n)!}
\end{align}
$$
$$
\begin{align}
\int\frac{\cos(x)-1}{x}dx&=\int\sum_{n=1}^\infty \frac{(-1)^nx^{2n-1}}{(2n!)}dx \\
&=\sum_{n=1}^\infty \frac{(-1)^nx^{2n}}{(2n)(2n)!}+C
\end{align}
$$
Ex: Evaluate
$$
\begin{align}
\lim_{x\to0}\frac{e^x-1-x}{x^2}&=\lim_{x\to0}\frac{\left( 1+x+\frac{x^2}{2}+\cdots  \right)-1-x}{x^2} \\
&=\lim_{x\to0}\frac{\frac{x^2}{2}+\frac{x^3}{3!}+\frac{x^4}{4!}+\cdots}{x^2} \\
&=\lim_{x\to0} \frac{1}{2}+\frac{x}{3!}+\frac{x^2}{4+\cdots}= \frac{1}{2}
\end{align}
$$
Ex:
$$
\arctan(x)=\sum_{n=0}^\infty (-1)^n \frac{x^{2n+1}}{2n+1}
$$
$$
\begin{align}
\lim_{x\to0} \frac{x-\arctan(x)}{x^3}&=\frac{x-( x-\frac{x^3}{3}+\frac{x^5}{5}-\cdots)}{x^3} \\
&=\frac{\frac{x^3}{3}-\frac{x^5}{5}+\cdots}{x^3} \\
&=\frac{1}{3}-\frac{x^2}{5}+\frac{x^5}+\cdots \\
&=\frac{1}{3}
\end{align}
$$
Ex:
$$
\sin(x)=\sum_{n=0}^\infty \frac{(-1)^nx^{2n+1}}{(2n+1)!}
$$
$$
\begin{align}
\lim_{x\to0} \frac{\sin(x)-x+\frac{1}{6}x^3}{x^5}&= \frac{1}{x^5}((x - \frac{x^3}{3}+\frac{x^5}{5}-\frac{x^7}{7}\cdots)-x+\frac{1}{6}x^3) \\ 
&= \frac{1}{x^5}(\frac{x^5}{5!}-\frac{x^7}{7!}+\frac{x^9!}{9}) \\
&= \frac{1}{5!} \\
&=\frac{1}{20}
\end{align}
$$
Ex:
$$
f(x)=\frac{1}{\sqrt{1-x}}-1
$$
$f(x)=(1-x)^{-\frac{1}{2}}-1\implies f(0)=0$
$f'(x)-\frac{1}{2}(1-x)^{-\frac{3}{2}}\implies f'(0)=-\frac{1}{2}$
$f''(x)=\frac{3}{4}(1-x)^{-5/2}\implies f''(0)=\frac{3}{4}$
$$
\begin{align}
f(x)&=0+\frac{1}{2}x+\frac{3}{4\cdot2!}x^2+\cdots \\
f(x)&=\frac{1}{2}x+\frac{3}{8}x+\cdots \\
f(\frac{v^2}{c^2})&=\frac{1}{2}(\frac{v^2}{c^2})+\frac{3}{8}(\frac{v^2}{c^2})+\cdots \\
mc^2f(\frac{v^2}{c^2})&=\frac{mc^2}{2}(\frac{v^2}{c^2})+\frac{3mc^2}{8}(\frac{v^2}{c^2})+\cdots \\
mc^2f(\frac{c^2}{c^2})&=\frac{1}{2}mv^2+\cdots
\end{align}
$$

## 4.8 | Big-O Notation
> Definition: Big-O Notation
> Let $a$ denote a real number or $\infty$. Assume that $f(x), g(x)$ are two functions that are defined for all real $x$ values that are near $a$ but are not necessarily when $x=a$. More precisely, if $a\in\mathbb{R}$, we assume that $f(x), g(x)$ are both defined for all $x$ in the union
$$
I=(a-\epsilon, a)\cup(a,a+\epsilon)=\{x\in\mathbb{R}\mid 0<|x-a|<\epsilon\}
$$
> where $\epsilon$ is some strictly positive real number. If $a=\infty$, we assume that $f(x),g(x)$ are both defined for all $x$ in some open interval $I=(c\infty)$, where $c\in\mathbb{R}$. We write
$$
f(x)=O(g(x)) \text{ as } x\to a
$$
> if there exists a real constant $M>0$ such that for all $x\in I$,
$$
|f(x)|\leq M|g(x)|
$$

Ex: Express $|7x^5+4x^3+x|\leq14|x^5|$ in Big-O notation
$$
7x^5+4x^3+x=O(x^5)
$$
Ex: Show that if $f(x)+3x-2$ then $f(x)=O(x^3)$
$x^2\leq x^3$
$3x-2\leq x^3$
$x^2+3x-2\leq x^3+x^3 = 2x^3$

Ex: 
$$
\begin{align}
1^2+2^2+\cdots+n^2=&\frac{n(n+1)(2n+1)}{6} \\
&=\frac{2n^3+3n+n}{6} \\
&=\frac{1}{3}n^3+\frac{1}{2}n+\frac{n}{6} \\
&=O(n^3)
\end{align}
$$
Ex:
1. F
2. T
3. F
4. F
5. T

Ex: Consider $f(x)=\sin(x)$
$$
\begin{align}
|\sin(x)-T_{1,0}(x)
&=|\sin(x)-x| \\
&=|\frac{f''(c)}{2!}x^2| \\
&=| -\frac{\sin(c)}{2}x^2| \\
&\leq \frac{1}{2}|x^2| \\
\sin(x)-x&=O(x^2) \\
\sin(x)&=x+O(x^2)
\end{align}
$$

> Theorem
> Let $a$ denote a real number or $\infty$. If $f(x)=O(g(x))$ as $x\to a$ and $g(x)=O(h(x))$ as $x\to a$, then $f(x)=O(h(x))$ as $x\to a$.

> Theorem
> Let m and n be nonnegative integers. As $x\to0$, the following statements hold.
> (i) $O(x^m) \cdot O(x^n)=O(x^{m+n})$
> (ii) $O(x^m)\pm O(x^n)=O(x^k)$, where $k=\min\{m,n\}$.
> (iii) $x\cdot O(x^n)=O(x^{n+1})$.
> (iv) $\frac1x\cdot O(x^n)=O(x^{n-1})$ when $n\geq1$.
> (v) $C\cdot O(x^n)=O(Cx^n)=O(x^n)$ for any real constant C.
> (vi) $\lim_{x\to0}O(x^n)=0$ when $n\geq1$.

> Theorem: Taylor's Inequality, the Big-O Version
> Let $m$ be a nonnegative integer. Suppose that $f^{(m+1)}$ is continuous on an open interval $I$ that contains $a\in\mathbb{R}$. If there is a real constant $K>0$ such that $f^{(m+1)}(x)\leq K$ for every $x\in I$, then
$$
f(x)-T_{m,a}(x)=O((x-a)^{m+1})
$$
> as $x\to a$. Moreover, if $P(x)$ is a polynomial of degree $\leq m$ such that
$$
f(x)-P(x)=O((x-a)^{m+1})
$$
> as $x\to a$, then $P(x)=T_{m,a}(x)$

Ex
1. $O(x^2) + 2$
2. $O(x^3) + 4x^2+2x-3$
3. $O(x^4)+ \frac{3}{2}x$

Ex
$$
\sin(x)=\sum_{n=0}^\infty \frac{(-1)^nx^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!}+\cdots = x - \frac{x^3}{3!}+O(x^5)
$$
$$
\begin{align}
\lim_{x\to0} \frac{\sin(x)}{x} &= \lim_{x\to0} \frac{x-\frac{x^3}{3!}+O(x^5)}{x} \\
&=\lim_{x\to0} 1-\frac{x^3}{3!}+O(x^4) \\
&=1
\end{align}
$$
thanks katy howell escobar!