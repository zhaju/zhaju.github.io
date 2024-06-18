[MCV4UP Course Overview](https://docs.google.com/document/d/1zxxu8H_ZE2FBxYEqlFhhqAuRdSdMgtf8XED8eC72FdM/edit)
[AP Calc Classroom](https://apclassroom.collegeboard.org/26/)
[Calc Textbook](https://drive.google.com/file/d/1-eEgYlexam6OOYi00Y4VFwpmeVzwEB6Y/view)
## 1. Limits and Continuity
Definition of the Derivative:
$$
\frac{dy}{dx}=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}
$$
Symmetric Difference Quotient:
$$
f'(a)\approx \frac{f(a+h)-f(a-h)}{(a+h)-(a-h)}
$$
$$
f'(a) = \frac{f(a+h)-f(a-h)}{2h}
$$
Continuity: A function $f$ is **continuous** at $a$ if
$$
lim_{x\to a}f(x)=f(a)
$$
But continuity does not imply differentiability - counterexample: $f(x)=|x|$
## 2. Derivative Rules
Power Rule: 
$$
f'(x)=n \cdot x^{n-1}
$$Constant Rule: Let $f(x)=c$ $$
f'(x)=0
$$Constant Multiple Rule: Let $f(x)=c\cdot g(x)$ $$
f'(x)=c\cdot g'(x)
$$Product / Sum Rule: Let $f(x)=g(x)\pm h(x)$ $$
f'(x)=g'(x)\pm h'(x)
$$Power Rule: $$
f'(x)=n \cdot x^{n-1}
$$Definition of $e$ $$
e = lim_{n\to\infty}(1+\frac{1}{n})^n
$$Product Rule: Let $f(x)=g(x)\cdot h(x)$ $$
f'(x)=g'(x)\cdot h(x) + g(x)\cdot h'(x)
$$Quotient Rule: Let $F(x)=\frac{f(x)}{g(x)}$ $$
F'(x)=\frac{f'(x)\cdot g(x) - f(x)\cdot g'(x)}{(g(x))^2}
$$Logs and Exponents $$
\frac{d}{dx}e^x=e^x
$$$$
\frac{d}{dx}ln(x)=\frac{1}{x}
$$$$
\frac{d}{dx}b^x=b^x \cdot ln(b)
$$$$
\frac{d}{dx}\log_b(x)=\frac{1}{x\cdot ln(b)}
$$Trig Functions