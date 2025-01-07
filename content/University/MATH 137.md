# 0 | Pre-Calculus Review
## 0.1 | Real-Valued Functions
Function:
- Vertical Line Test
- Let X and Y be sets. A function f is a mapping that assigns to each $x\in X$ exactly one $y=f(x)\in Y.$ We use the notation
$$
f:X\to Y, x\to f(x)
$$
Domain and Range
- Domain: List of possible inputs
- Range: List of possible outputs
$$
range(f)=\{f(x):x\in D\}
$$
Examples
1. $y=x$
	1. $D=\mathbb{R}, R=\mathbb{R}$
2. $y=x^2$
	1. $D=\mathbb{R}, R=[0,\infty)$
3. $y=\frac{1}{x}$
	1. $D=\mathbb{R}-0, R=\mathbb{R}-0$

Odd and Even Functions
- $f$ is called even if $f(x)=f(-x)$ for all $x\in D$
- $g$ is called odd if $g(x)=-g(-x)$ for all $x\in D$
- Suppose $f$ is a function, and suppose that $x\in D$ so that $f(x)=0$. Then we call x a **root** of f

Function Composition
$$
g\circ f=g(f(x))
$$
Examples
1. $6x+3$
2. $6x+9$
3. $4x+9$
4. $9x$

Functional Inverses (only works with bijective/passes vertical line test)
$$
f^{-1}(f(x))=x
$$
> Given $g(x)=\frac{1}{2}x + 7$ find $g^{-1}(x)$

$y=\frac{1}{2}x+7$
$y-7=\frac{1}{2}x$
$x=2(y-7)$
$x=2y-14$
$g^{-1}(x)=2x-14$

Examples

Find the Domain
1. $x\in\mathbb{R}$
2. $x\in\mathbb{R}-\{2,-2\}$

Even or Odd
1. Neither
2. Odd
3. Even

Find the Inverse
1. $f^{-1}(x)=\sqrt{\frac{4x-13}{13}}$
2. $x=3y^2-2y+5, f^{-1}(5)=0$
## 0.2 | Polynomials

> Def: Polynomials are functions of the form
$$
f(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_0
$$

Number of Roots
- Fundamental Theorem of Arithmetic: Polynomials with degree n have n complex roots

> Ex:  Long Division
$$
\frac{6x^3-8x+5}{2x-4} = (3x^2+6x+8)(2x-4)+37
$$
> Ex: When $x^3-4x^2+mx-2$ is divided by $x-1$, the remainder is -7. What is m?
$$
m=-2
$$
# 1 | Sequence Limits
## 1.1 | Absolute Values 
###  Triangle Inequality 1

> Ex: Triangle Inequality 1: > For all $x,y,z\in\mathbb{R},$
$$
|x-y|\leq|x-z|+|z-y|
$$

Proof: Assume WLOG that $x\leq y$
Case 1: $z<x$
Case 2: $x\leq z\leq y$
Case 3: $y<z$
### Triangle Inequality 2
> Triangle Inequality 2: For all $x,y\in\mathbb{R}$
$$
x+y\leq|x|+|y|
$$

Proof:
$$
\begin{align*}
|x+y|&\leq|x-0|+|0-y|\\
&=|x|+|y|
\end{align*}
$$
### Absolute Value Problems
> Ex 1: Single Bound
$$
|x-2|<3
$$

Simplifying:
$-3<x-2<3$
$-3+2<x<3+2$
$-1<x<5$

> Ex 4: Double Bound
$$
2\leq|x-4|<4
$$
$$
x\in(0.2]\cup[6,8)
$$
> Ex 5: Double Absolute
$$
|x-3|-|x-4|<x
$$

> Ex 3: Double Absolute
$$
|7x-3|\geq|3x+7|
$$
$$
x\in\left( -\infty,-\frac{2}{5} \right)\cup\left(  \frac{5}{2}, \infty  \right)
$$
## 1.2 | Sequences and Limits
### Uniqueness of Sequence Limit

> (Uniqueness of Sequence Limit)
> Let $\{a_n\}$ be a sequence. If $\{a_n\}$ has a limit L, then the limit L is unique.
## 1.3 | Rules for Limits
### Epsilon-N

> Epsilon-Delta definition of a limit

Let $\{a_n\}$ be a sequence and $L\in\mathbb{R}$. We say that L is the limit of $\{a_n\}$ if for all $\epsilon>0$ there exists a real number N such that if $n>N$, then
$$
|a_n-L|<\epsilon
$$
If such an L exists, we say that $\{a_n\}$ CONVERGES  to L and write
$$
\lim_{n\to\infty}a_n=L \text{   OR   } a_n\to L
$$
If no such L exists, we say that $\{a_n\}$ DIVERGES

> Ex: Prove that $a_n=\frac{1}{n^2}$ converges to 0

Proof: Let $\epsilon>0$ be given. We determine N so that $|a_n-L|<\epsilon$ by solving
$$
{a_n-L<\epsilon}
$$
$$
|\frac{1}{n^2}|<\epsilon
$$
$$
\frac{1}{n^2}<\epsilon
$$
$$
n^2 > \frac{1}{\epsilon}
$$
$$
n>\frac{1}{\sqrt{\epsilon}}
$$
Thus, for every $\epsilon>0$, let $N=\frac{1}{\sqrt{\epsilon}}$. Then, for all $n>N$,
$$
|a_n-L|=\frac{1}{n^2}<\frac{1}{\left( \frac{1}{\sqrt{\epsilon}} \right)^2}
$$
### More Epsilon-N
Epsilon-Delta: every function - its limit will always be less than the smallest real number

> Show that $\lim_{n\to\infty}{\frac{3n+2}{4n+3}=\frac{3}{4}}$ for all arbitrary $\epsilon$

USING $\epsilon = \frac{1}{1000}$
$$
a_n=\frac{3n+2}{4n+3}, L=\frac{3}{4}
$$
$$
|a_n-L|=|\frac{(3n+2)}{4n+3}-\frac{3}{4}|=|-\frac{1}{16n+12}|=\frac{1}{16n+12}< \frac{1}{1000}
$$
$$
\frac{\frac{1}{16n+12}<1}{1000}\implies 16n+12>1000\implies n>61.75
$$
AKA: the bound is too big for all $n>61.75$. The bound should approach infinity.

USING $\epsilon\to0$
$$
a_n=\frac{3n+2}{4n+3}, L=\frac{3}{4}, N=\frac{1}{16}\left( \frac{1}{\epsilon-12} \right)
$$
$$
|a_n-L|={\frac{1}{16n+12}}<\frac{1}{{16\left( \frac{1}{16}\left( \frac{1}{\epsilon}-12 \right) \right)+12}}
$$
$$
|a_n-L=| \frac{3n+2}{4n+3}-\frac{3}{4} |=|- \frac{1}{16n+12}|=\frac{1}{16n+12}<\epsilon
$$
$$
\frac{1}{16n+12}<\epsilon\implies 16n+12>\frac{1}{\epsilon}\implies n > \frac{1}{16}\left( \frac{1}{\epsilon}-12 \right)=N
$$
## 1.4 | Squeeze Theorem
### Squeeze Theorem
> (Squeeze Theorem for Sequences)
> If $a_n\leq b_n\leq c_n$ for all $n>M$ (for some $M\in\mathbb{N}$) and $\lim_{n\to\infty} a_n=L=\lim_{n\to\infty}$, then $\lim_{n\to\infty} b_n=L$ as well

> Use the Squeeze Theorem to prove convergence:
$$
a_n=\frac{(-1)^n}{n^2+1}
$$

Solution:
$$
\frac{-1}{n^2+1}\leq \frac{(-1)^n}{n^2+1}\leq \frac{1}{n^2+1}
$$
$$
\lim_{n\to\infty} \frac{-1}{n^2+1}=0=\lim_{n\to\infty} \frac{1}{n^2+1}
$$
Hence, $\lim_{n\to\infty} \frac{(-1)^n}{n^2+1}=0$ by the squeeze theorem.
## 1.5 | Recursive Sequences
### Explicit vs Recursive
Explicit Sequence
$$
\left\{ \frac{1}{n+1} \right\}^{\infty}_{n=1}
$$
Recursive Sequences
$$
F_1=1, F_2=1, F_n=F_{n-1}+F_{n-2} n\geq3
$$
### GLB and LUB
Let $S\subset \mathbb{R}$. Then $\beta$ is called the GREATEST LOWER BOUND of $S$ if :
1. $\beta$ is a lower bound, and
2. $\beta$ is the largest lower bound, that is, if $\beta'$ is another lower bound of S, then $\beta'\leq\beta$
Greatest Lower Bound of S = $glb(s)$ = infimum = $inf(s)$

Greatest Lower Bound $(glb)$ and Least Upper Bound $(lub)$
> Ex: $S=[0,1)$ is bounded
- $glb(S)=0$
- $lub(S)=1$
- NOTE: $glb$ and $lub$ might be in S, but do not have to be

> Ex: $S=\{0\}\cup[1,2]\cup\{3\}$
- $lub(S)=3$
- $glb(s)=0$

> Ex: $S={x\in\mathbb{Q}:x^2<2}$
- $lub(S)=\sqrt{2}$
- $glb(s)=-\sqrt{2}$
### Monotone Convergence Theorem:
MONOTONE = Strictly increasing or decreasing

(Theorem 1.5.7 in notes)
Let $\{a_n\}$ be an increasing sequence
1. If $\{a_n\}$ is bounded above, then $\{a_n\}$ converges to $L=lub(\{a_n\})$.
2. If $\{a_n\}$ is not bounded above, then$\{a_n\}$ diverges to $\infty$
Similarly, let $\{b_n\}$ be a decreasing sequence
1. If $\{b_n\}$is bounded below, then $\{b_n\}$ converges to $L=glb(\{b_n\})$
2. If $\{b_n\}$is not bounded below, then $\{b_n\}$ diverges to $-\infty$

> Ex: We have $\{a_n\}^{\infty}_{n=1}, a_1=1, a_{n+1}= \frac{1+2a_n}{5}$ If a converges, then $\lim_{n\to\infty}a_n=\frac{1}{5}$

We will show that the sequence converges using MCT
To do this, we use induction to show that it is decreasing and bounded below.
**Base case:** $n=1$. Then $a_n=1>0$
**Induction Step:** Assume $a_k>0$ for some $k\geq1$. We need to show, using $a_k>0$, that $a_{k+1}=0$.
Since $a_k>0$, $2a_k>2(0)=0$, so $2a_k+1>1$. 
Dividing by 5 gives $\frac{1+2a_k}{5}> \frac{1}{5}=0$
Therefore, $a_{k+1}>0$
By induction, $a_n>0$ for all n.

Now, we prove that $a_n$ is decreasing, or that $a_n>a_{n+1}$ for all n.
**Base case:** $n=1, a_n=a_1=1$
$a_{n+1}=a_2= \frac{1+2a_1}{5}=\frac{1}{5}$
$\frac{3}{5}$ so $a_n>a_{n+1}$ when $n=1$
**Induction step:** Assume $a_k>a_{k+1}$ for some $k\geq1$
Starting with $a_k>a_{k+1}$, we have that $2a_k>2a_{k+1}$
$1+2a_k>1+2a_{k+1}$
$\frac{1+2a_k}{5}> \frac{1+2a_{k+1}}{5}$
$a_{k+1}>a_{k+2}$
Therefore, $a_n>a_{n+1}$ for all $n\geq1$ by induction.
Since $\{a_n\}^\infty_{n=1}$ is decreasing and bounded below, it converges by the MCT.

> Let $a_1=\sqrt{2}$ and $a_{n+1}=\sqrt{2+9n}$ for all $n\geq1$. Prove that $\{a_n\}^\infty_{n=1}$
# 2 | Function Limits and Continuity
## 2.1 | Introduction to Function Limits
### Epsilon-Delta
> Example: Consider
$$
f(x)=\frac{(x+1)(x+2)}{x+1}
$$
- -1 is not in the domain
- $\lim_{x\to a}$ has nothing to do with $f(a)$. In fact, it can exist even when $f(a)$ is undefined.

>Informal definition of a limit: The limit as $x$ approaches $a$ of $f(x)$ is $L$ if $f(x)$ is very close to $L$ when x is very close to $a$

> (Definition) Formal Limit Definition
> Let $f(x)$ be a function and $a\in\mathbb{R}$. We say that the limit as $f(x)$ approaches a from the left is L and write 
$$
\lim_{x\to a^-} f(x)=L
$$
> If for all $\epsilon$ there exists $\delta>0$ such that
$$
0<|x-a|<\delta\implies |f(x)-L|<\epsilon
$$
### Epsilon-Delta Examples
>Example: Show that $\lim_{x\to3}3x+1=10$

Aside:
$|f(x)-L|<\epsilon$
$|(3x+1)-10|<\epsilon$
$|3x+1-10|=|3x-9|=3|x-3|<\epsilon$
$|x-3|< \frac{\epsilon}{3}$

Proof: 
Let $\epsilon>0$ be given and choose $\delta=\frac{\epsilon}{3}$. If $0<|x-3|<5$ then
$|3x+1-10|=|3x-9|=3|x-3|<\epsilon=3\delta$
But $\delta=\frac{\epsilon}{3}$ so $|3x+1-10|<3\times \frac{5}{3} = \epsilon$
So $0<|x-3|<\delta$ implies $|3x+1-10|<\epsilon$, so $\lim_{x\to3}3x+1=10$

> Example: Prove that $\lim_{x\to7}x^2+1=50$

Rough Work:
By making $|x-7|$ small we want to make $|(x^2+1)-50|$ small.
$$
\begin{align*}
|x^2+1-50|&=|x^2-49| \\
&=|x-7||x+7|
\end{align*}
$$
Proof must ensure that $\delta\leq1$
$$
\begin{align*}
|x+7|=|x-7+14|&\leq|x-7|+|14| \\
&<\epsilon+14\leq15
\end{align*}
$$
$|x-7||x+7|<\delta\cdot15=\epsilon$
$\implies \delta= \frac{\epsilon}{15}$

Proof: 
Let $\epsilon>0$ be given. Choose $\delta=min(1, \frac{\epsilon}{15})$. Thus $\epsilon \leq1$ and $\delta\leq \frac{\epsilon}{15}$. Assume $0<|x-7|<\delta$
Note that 
$$
|x+7|=|x-7+14|\leq|x-7|+|14|<\delta+14\leq1+14=15 \implies |x+7|<15
$$
Now show that $x^2+1-50<\epsilon$
$$
\begin{align*}
|x^2+1-50|&=|x^2-49| \\
&= |x-7||x+7| \\
&< 15\cdot\delta \\
&\leq 15\cdot \frac{\delta}{15}=\epsilon
\end{align*}
$$
> Ex: Show that $\lim_{x\to0} \frac{|x|}{x}$ does not exist.

Proof; Assume towards a contradiction that $\lim_{x\to\infty} \frac{|x|}{x}=L$ for some $L\in\mathbb{R}$
Consider $\epsilon = \frac{1}{2}$. Since L exists, there is $\delta>0$ such that 
$$
0<|x-0|<\delta\implies | \frac{|x|}{x}-L| < \frac{1}{2}
$$
Let $x_1=-\frac{\delta}{2}, x_2= \frac{\delta}{2}$
$|x_1-0|=| -\frac{\delta}{2}| = |-\frac{\delta|}{2}= \frac{\delta}{2}<\delta$
So $| \frac{|x_1|}{x_1}|< \frac{1}{2}$
$x_1<0$, so this is equivalent to $|-1 -L|< \frac{1}{2}$
Similarly, $|x_2-0|=| \frac{\delta}{2}| = \frac{\delta}{2}<\delta$ 
So $| \frac{|x_2|}{x_2}-L| = |1-L|< \frac{1}{2}$ since $x_2>0$
$$
\begin{align*}
2&=|1-(-1)| \\
&= |(1-l)+(L-(-1))| \\
&\leq |1-L|+|L-(-1)| \\
&=|1-L|+|-1-L| \\
&< \frac{1}{2} + \frac{1}{2} =1 \\
2&<1
\end{align*}
$$
Contradiction!
## 2.2 | Sequential Characterization of Limits
## 2.3 | One-Sided Limits

> Example: show that $\lim_{x\to\infty} \frac{|x|}{x}$ does not exist.

PROOF: It suffices to prove that the limits from both directions are not equal.
Show $\lim_{x\to\infty^+} \frac{|x|}{x}=1$
Let $\epsilon>0$ and choose $\delta=7$
Then $0<x-0<\delta\implies$ 0<x<7 so $|x|=x$
$$
| \frac{|x|}{x}-1|= | \frac{x}{x}-1|= |1-1|=0<\epsilon
$$
Similarly, $\lim_{x\to\infty^-}f(x)=-1$ so the one sided limits are not equal.
## 2.4 | Fundamental Trig Limit

> (Theorem) Fundamental Trig Limit) $$
\lim_{x\to\infty} \frac{sin(x)}{x}=1
$$

> Example: Show that $\lim_{x\to\infty^+} x\sin(\frac{1}{x})=0$

$-1\leq\sin(\frac{1}{x})$ for all $x\neq0$
If $x=0$ then $-x\leq x\sin(\frac{1}{x})=\leq x$
$\lim_{x\to\infty^+}=\lim_{x\to\infty^+}-x=0$
So $\lim_x\to\infty^+ x\sin(\frac{1}{x})=0$
Similarly, $\lim_x\to\infty^- x\sin(\frac{1}{x})=0$
So $\lim_{x\to\infty} x\sin(\frac{1}{x})=0$

> Example; Compute $\lim_{x\to\infty} \frac{sin(4x)}{sin(5x)}$

$=\lim_{x\to\infty} \frac{4\cdot5x}{5\cdot4x}\cdot \frac{sin(4x)}{sin(5x)}$
$=\frac{4}{5}\lim_{x\to\infty} \frac{5x}{sin(5x)}\cdot \frac{sin(4x)}{4x}$
$= \frac{4}{5} \lim_{x\to\infty} \frac{\frac{ \frac{sin(x)}{x}}{sin(5x)}}{5x}$
$=\frac{4}{5} \cdot \frac{1}{1}$
$=\frac{4}{5}$
## 2.5 | Limits at Infinity and Horizontal Asymptotes

> (Definition) Limits as x approaches infinity
> Let $f(x)$ be a function. We say that $f(x)$ approaches L as x approaches $\infty$ and write $\lim_{x\to\infty} f(x)=L$ if for $\epsilon >0$ there exists $N\in\mathbb{R}$ such that if $x>N$, then $|f(x)-L|<\epsilon$

> (Definition) Horizontal Asymptotes
> Let $f(x)$ be a function and $L\in\mathbb{R}$. We say that the line with equation $y=L$ is a horizontal asymptote of $f(x)$ if wither $\lim_{x\to\infty} f(x)=L$ or $\lim_{x\to-\infty} f(x)=L$
## 2.6 | Fundamental Log Limit
> (Definition) Fundamental Log Limit
$$
\lim_{x\to\infty} \frac{ln(x)}{x}=0
$$
## 2.7 | Infinite Limits and Vertical Asymptotes

> (Definition) Limits to Infinity
> We say that $f(x)\to\infty$ as $x\to a$ from the right if for all $M>0$ there exists $\delta>0$ such that if $0<x-a<\delta$ $\lim_{x\to\infty}=\infty$ then $f(x)>M$
> $\lim_{x\to a^-} f(x)=\infty, \lim_{x\to a^+} f(x)=-\infty$ and $\lim_{x\to\infty^-}f(x)=\infty$ are all defined

Similarly, if $\lim_{x\to a^+} f(x)=\pm \infty$ or $\lim_{a\to a^-}f(x)=\pm\infty$, we say that $f(x)$ has a VERTICAL ASYMPTOTE at $x=a$. 

> Example: $$
\lim_{x\to 2^-} \frac{x+1}{x-2}=\frac{3}{0} 
$$ So the limit is $\pm\infty$
## 2.8 | Continuity

Fact about continuity: 
$f(x)$ is continuous at $x=a$ if and only if $\lim_{h\to0}f(a+h)=f(a)$

> (Theorems 2.8.7, 2.8.8, 2.8.9)
> The following functions are continuous everywhere in their domain:

1. Polynomials
	1. Proof: We can evaluate by substitution: $\lim_{x\to a}P(x)=P(a)$
2. $sin(x), cos(x)$
	1. Proof: $\lim_{h\to0}f(a+h)=\lim_{h\to0}sin(a+h)=\lim_{h\to0}(sin(a)cos(h)+sin(h)cos(a)$
3. $e^x$
	1. $\lim_{h\to0} e^{a+h}=\lim_{h\to0}e^a\cdot e^h=e^a\lim_{h\to\infty}e^h$
	2. Proof: $\lim_{h\to\infty}e^h=1=e^0$
4. $ln(x)$

> (Theorem) Let $f(x), g(x)$ be continuous at $x=a$. The following are also continuous at $x=a$.
> 1. $f(x)+g(x)$
> 2. $f(x)g(x)$
> 3. $\frac{f(x)}{g(x)}$
> 4. $cf(x)$

> (Theorem): If $f(x)$ is continuous at $x=a$, so it it's inverse.

> (Theorem): Suppose $f(x), g(x)$ are continuous at $x=a$, then $g\circ f$ is continuous at $x=a$

> (Proof) Sequential Characterization

$f(x)$ is continuous at $x=a$, $\lim_{n\to\infty}f(xn)=f(a)$ by sequential characterization
Now $\{f(x_n)\}^\infty_{n=1}$ is a sequence converging to $f(a)$
By continuity of $f(x)$ at $x=f(a)$ and the sequential characterization $\lim_{n\to\infty} g(f(x_n))=g(f(n))$. 
By the sequential characterization, $g\circ f$ is continuous at $x=a$

> (Definition) We say $f(x)$ is continuous on $[a,b]$ if $\lim_{x\to a^+} f(x)=f(a)$ and $\lim_{x\to b^-}f(x)=f(b)$
## 2.9 | Types of Discontinuities
> (Definition) Discontinuities
> $f(x)$ has a removable discontinuity at $x=a$ if $\lim_{x\to a}f(x)$ exists but does not equal $f(a)$
> $f(x)$ has a jump continuity at $x=a$ if $\lim_{x\to a^-}f(x)$ and $\lim_{x\to a^+}$ both exist but are not equal
> $f(x)$ has an infinite discontinuity at $x=a$ if $f(x)$ has a vertical asymptote at $x=a$
> $f(x)$ has an oscillatory discontinuity if it oscillates
## 2.10 | Intermediate Value Theorem

> (Theorem) IVT
> Suppose $f(x)$ is continuous on $[a,b]$ and that $\alpha\in\mathbb{R}$.is between $f(a)$ and $f(b)$.
> Then there exists $c\in(a,b)$ such that $f(x)=\alpha$

> Ex: show that there is a real number $c$ such that $2^c=3c$. 

PROOF: Let $f(x)=2^x-3x$. This is a difference of continuous functions, thus it is continuous. 
$f(1)=2^1-3(1)=2-3=-1<0$
$f(0)=2^0-3(0)=1-0=1>0$
So $f(a)<0<f(0)$ and $f$ is continuous on $[0,1]$. 
Therefore, $\exists c\in(0,1)$

> Ex: Show that $f(x)=x^3+x-3$ has a real root

PROOF:
$f(0)<0<f(2)$
$f(1)=1^3+1-3=-1$
$f(1)<0<f(2)$
$a+0=1, b_0=2$ in $[a_0, b_0]$. There is a root $f(a_0)<0<f(b_0)$
$d=\frac{a_0+b_0}{2}= \frac{1+2}{2}=\frac{3}{2}$
$f(d)=f\left( \frac{3}{2} \right)=\frac{13}{8}>0$
$f(d_0)<0<f(d)$ in $[a_0,d]$ by IVT

$a_1=a_0=1$
$b_1=d=\frac{3}{2}$
root in $[a_1,b_1]$
$d= \frac{a_1+b_1}{2}=\frac{1+\frac{3}{2}}{2}=\frac{5}{4}$
$f(d)= \frac{13}{64}>0$
$f(d_0)<0<f(d)$

$d_2=a_1=1$
$b_2=d= \frac{5}{4}$
root in $[a_2, b_2]$
$d= \frac{a_2+b_2}{2}=\frac{9}{8}$
$f(d)= -\frac{231}{512}>=$
$f(d)<0<f(b_2)$

$a_3=d=\frac{9}{8}$
$b_3=b_2=\frac{5}{4}$
$d= \frac{a_3+b_3}{2}=\frac{19}{16}$
$a_4=1.875$
$b_4=1.25$

etc.
# 3 | Derivatives
## 3.1 | Average and Instantaneous Velocity
## 3.2 | Definition of the Derivative
Definition of the Derivative:
$$
\frac{dy}{dx}=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}
$$
Continuity: A function $f$ is **continuous** at $a$ if
$$
lim_{x\to a}f(x)=f(a)
$$
But continuity does not imply differentiability - counterexample: $f(x)=|x|$

Symmetric Difference Quotient:
$$
f'(a)\approx \frac{f(a+h)-f(a-h)}{(a+h)-(a-h)}
$$
$$
f'(a) = \frac{f(a+h)-f(a-h)}{2h}
$$
## 3.3 | Derivatives of Common Functions
L'Hôpital's Rule
$$
lim_{x\to a}\frac{f(x)}{g(x)}=lim_{x\to a}\frac{f'(x)}{g'(x)}
$$
## 3.4 | Derivative Rules
Power Rule:
$$
f'(x)=n \cdot x^{n-1}
$$
Constant Rule: Let $f(x)=c$
$$
f'(x)=0
$$
Constant Multiple Rule: Let $f(x)=c\cdot g(x)$
$$
f'(x)=c\cdot g'(x)
$$
Product / Sum Rule: Let $f(x)=g(x)\pm h(x)$ 
$$
f'(x)=g'(x)\pm h'(x)
$$
Power Rule: 
$$
f'(x)=n \cdot x^{n-1}
$$
Definition of $e$ 
$$
e = lim_{n\to\infty}(1+\frac{1}{n})^n
$$
Product Rule: Let $f(x)=g(x)\cdot h(x)$
$$
f'(x)=g'(x)\cdot h(x) + g(x)\cdot h'(x)
$$
Quotient Rule: Let $F(x)=\frac{f(x)}{g(x)}$
$$
F'(x)=\frac{f'(x)\cdot g(x) - f(x)\cdot g'(x)}{(g(x))^2}
$$
Logs and Exponents
1. $\frac{d}{dx}e^x=e^x$
2. $\frac{d}{dx}ln(x)=\frac{1}{x}$
3. $\frac{d}{dx}b^x=b^x \cdot ln(b)$
4. $\frac{d}{dx}\log_b(x)=\frac{1}{x\cdot ln(b)}$

Trig Functions
1. $\frac{d}{dx}\sin(x) = \cos(x)$
2. $\frac{d}{dx}\cos(x) = -\sin(x)$
3. $\frac{d}{dx}\tan(x) = \sec^2(x)$
4. $\frac{d}{dx}\cot(x) = -\csc^2(x)$
5. $\frac{d}{dx}\sec(x) = \sec(x)\cdot\tan(x)$
6. $\frac{d}{dx}\csc(x) = -\csc(x)\cdot\cot(x)$

Inverse Trig Functions
$$
\frac{dy}{dx}arcsin(x)=\frac{1}{\sqrt{1-x^2}}
$$
$$
\frac{dy}{dx}arccos(x)=-\frac{1}{\sqrt{1-x^2}}
$$
$$
\frac{dy}{dx}arctan(x)=\frac{1}{1+x^2}
$$
$$
\frac{dy}{dx}arccot(x)=-\frac{1}{1+x^2}
$$
$$
\frac{dy}{dx}arccsc(x)=\frac{1}{csc^2(x)}
$$
## 3.5 | Linear Approximation
Local Linear Approximation
$$
f(a+h)\approx f(a)+f'(a)*h
$$
## 3.6 | Newton's Method

> Newton's Method
$$
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}
$$
## 3.7 | Derivatives of Inverse Functions
Inverse Function Theorem: For $f^{-1}(x)=g(x)$
$$
g'(x)=\frac{1}{f'(g(x))}
$$
Example: $f(x)=x^2. g(x)=\sqrt{x}$
$$
g'(x) = \frac{1}{2(x^\frac{1}{2})} = \frac{1}{2}x^{-1/2}
$$
## 3.8 | Implicit and Logarithmic Differentiation
Implicit Differentiation: Differentiate $y$ with respect to $x$
- Explicitly Defined: $y=f(x)$
- Implicitly Defined: $y=x$

Logarithmic Differentiation: $ln()$ everything
# 4 | Applications of the Derivative
## 4.1 | Related Rates
Just relate the rates
## 4.2 | Extrema

> Theorem (Extreme Value Theorem)
> Let $f(x)$ be continuous on $[a,b]$. Then, $f(x)$ has a global maximum and a global minimum on $[a,b]$.
## 4.3 | MVT

> Theorem (Rolle's Theorem)
> If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, and $x_1=x_2$ for some $a\leq x_1\leq x_2\leq b$, then there exists some point $c\in(a,b)$ such that
$$
f'(x)=0
$$

> Theorem (MVT)
> If f is continuous on $[a,b]$ and differentiable on $(a,b)$, there exists a $c\in (a,b)$ such that
$$
f'(c)=\frac{f(b)-f(a)}{b-a}
$$

> Theorem (Bounded Derivative Theorem)
> If $m\leq f'(x)\leq M$, then
$$
f(x)+m(x-a)\leq f(x)\leq f(a)+M(x-a)
$$

Ex: Prove that $\sqrt{51}\in[7+\frac{1}{8}, 7+\frac{1}{7}]$
$$
f(x)=\sqrt{x}, a=49, b=64
$$
$$
f'(x) = \frac{1}{2\sqrt{x}}
$$
$f'(x)$ is decreasing, so 
$$
m=\frac{1}{2\sqrt{b}}=\frac{1}{16}, M=\frac{1}{2\sqrt{a}}=\frac{1}{17}
$$
$51\in (49,64)$
$$
f'(49)+\frac{1}{16}(51-49)\leq f(51)\leq f(49)+ \frac{1}{14}(51-49)
$$
$$
7+ \frac{1}{8}\leq\sqrt{51}\leq 7+ \frac{1}{7}
$$
## 4.4 | Antiderivatives
$$
\int ax^n=\frac{a}{n+1}x^{n+1}
$$
## 4.5 | First Derivatives and Direction
Derivative Tests
- First derivative = increase / decrease
- Second derivative = concave up / down
- Critical points = when $\frac{dy}{dx}=0$
- Inflection points = when $\frac{d^2y}{dx^2}=0$
## 4.6 | Second Derivatives and Concavity
See above
## 4.7 | Classifying Critical Points

First Derivative Test (FDT) and Second Derivative Test (SDT)

## 4.8 | L'Hopital's Rule
> Theorem (L'Hôpital's Rule)
$$
\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)}
$$
## 4.9 | Curve Sketching
Order of steps
1. Domain and range
2. x and y intercepts
3. Limits at infinity and asymptotes
4. Intervals of increase and decrease
5. Intervals of concave up / down
## 4.10 | Optimization
Optimization
- Set the desired $\frac{dy}{dx}=0$ and find critical points

