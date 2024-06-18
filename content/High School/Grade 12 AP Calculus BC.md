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
## 3. Chain, Inverse, Implicit differentiation
Implicit Differentiation: Differentiate $y$ with respect to $x$
- Explicitly Defined: $y=f(x)$
- Implicitly Defined: $y=x$

Inverse Function Theorem: For $f^-1(x)=g(x)$
$$
g'(x)=\frac{1}{f'(g(x))}
$$
Example:
$$
f(x)=x^2. g(x)=\sqrt{x}
$$
$$
\frac{1}{2}x^{-1/2} = \frac{1}{2x\left( x^-\frac{1}{2} \right)}
$$
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
## 4. Contextual Applications of differentiation
Related Rates
- Just relate the rates

Local Linear Approximation
$$
f(a+h)=f(a)+f'(a)*h
$$
L'Hôpital's Rule
$$
lim_{x\to a}\frac{f(x)}{g(x)}=lim_{x\to a}\frac{f'(x)}{g'(x)}
$$
## 5. Analytical Applications of differentiation
MVT: If f is continuous and differentiable, there exists a $c\in (a,b)$ such that
$$
f'(c)=\frac{f(b)-f(a)}{b-a}
$$
EVT: If f is continuous and differentiable, it has an absolute min and max

Optimization
- Set the desired $\frac{dy}{dx}=0$

Derivative Tests
- First derivative = increase / decrease
- Second derivative = concave up / down
- Critical points = when $\frac{dy}{dx}=0$
- Inflection points = when $\frac{d^2y}{dx^2}=0$
## 6. Integration
### Riemann Sums
$$
F(f,C,P)=\sum_{i=1}^n f(c_i)\cdot(x_i-x_{i-1})
$$
- $f(c_i)$ = height
- $(x_i-x_{i-1})$ = width

FTC I:
$$
\frac{d}{dx}\int_{a}^{x}f(t)dt=f(x)
$$
FTC II:
$$
\int_{a}^{x}f(t)dt=f'(a)-f'(b)
$$
### Integral Rules
Order of Integration
$$
\int_a^bf(x)dx=-\int_b^af(x)dx
$$
Zero
$$
\int_a^af(x)dx=0
$$
Constant Multiple
$$
\int_a^b k*f(x)dx=k*\int_a^bf(x)dx
$$
Sum / Difference
$$
\int_a^b(f(x)\pm g(x))dx=\int_a^bf(x)dx\pm\int_a^b g(x)dx
$$
Additivity
$$
\int_a^b f(x)dx+\int_b^c f(x)dx=\int_a^c f(x)dx
$$
Integration by parts (for products)
$$
\int u dv = uv - \int v du
$$
## 7. Differential Equations
### Modelling with differential equations
- Same thing as related rates
### Slope fields
- Are literally just a bunch of lines
### Solving separable differential equations
- cross-multiply $\frac{dy}{dx}$ and solve
## 8. Applications of Integration
### Average value of a function
$$
=\frac{\int_a^bf(x)}{b-a}
$$
### Net change
- Just a regular integral
### Area between curves
- Subtract two integrals
### Volumes formed by revolving regions 
- I still don't understand this
### Volumes by cross-section
- Area = $\int$ volume of shapes
- Area = $\int$ area * thickness (dx)
- Semicircles
	- Area of a semicircle = $\frac{1}{2}\pi(4-y)$
	- Thickness = $dy$
	- Volume =  $\int_{0}^{4} \frac{1}{2} \pi (4-y) \,dx$
- Equilateral Triangles
	- Area = $\frac{\sqrt{3}}{4}b^2$
	- Volume = $\int \frac{\sqrt{3}}{4}b^2 \times dx$
- Hemispheres
	- Area = $\pi r^2$
	- Volume = $\int \pi r^2 \times dx$
## 9. Vectors
### Parametric Equations
Take a value t that's defined on an interval l. Parametric equations in t:
$$
x=x(t), y=y(t)
$$
Differentiating parametric equations:
$$
x=2sin(1+3t)\to \frac{dx}{dt}2cos(1+3t)*t
$$
$$
y=2t^3\to \frac{dy}{dt}6t^2
$$
$$
\frac{dy}{dx}= \frac{\frac{dy}{dt}}{\frac{dx}{dt}}=\frac{6t^2}{6cos(1+3t)}=\frac{t^2}{cos(1+3t)}
$$
Derivative at $t=-\frac{1}{3}$
$$
\frac{dy}{dx}= \frac{\left( -\frac{1}{3} \right)^2}{cos(0)}=\frac{1}{9}
$$
Second Derivatives
$$
\frac{d^2y}{dx^2}=\frac{\frac{d}{dt}(\frac{dy}{dx})}{\frac{dx}{dt}}
$$
### Parametric Curve Length
$$
dx = \frac{dx}{dt}*dt=x'(t)dt
$$
$$
dy=\frac{dy}{dt}*dt=y'(t)dt
$$Curve Length:
$$
\int_{t_a}^{t_b}\sqrt{x'(t)^2+y'(t)^2}*dt
$$
### Differentiating Vector-Valued Functions
$$
\vec{r}(a)=x(a)\hat{i}+y(a)\hat{j}
$$
$$
\vec{r}(a+b)=x(a+b)\hat{i}+y(a+b)\hat{j}
$$
Differentiating Vector Functions
$$
\vec{r}(t)=x(t)\hat{i}+y(t)\hat{j}
$$
$$
\lim_{h\to0} \frac{\vec{r}(t+h)-\vec{r}(t)}{h}=\lim_{h\to0}\frac{(x(t+h)-x(t))\hat{i}}{h}+\lim_{h\to0}\frac{(y(t+h)-y(t))\hat{j}}{h}
$$
$$
\vec{r}'(t)=\vec{x}(t)\hat{i}+y'(t)\hat{j}
$$
First and second derivatives are just normal
### Planar Motion
Distance -> Velocity' -> Acceleration''

Motion along a curve (derivatives):
$$
\frac{d}{dt}[x^2y^2]=\frac{d}{dt}[16]
$$
Magnitude of Velocity
$$
\vec{V}(t)=(\frac{dx}{dt}, \frac{dy}{dt})
$$
$$
|\vec{V}(t)|=\sqrt{\frac{dx}{dt}^2+\frac{dy}{dt}^2}
$$
Motion along the curve (integrals):
$$
\Delta x=\int_{1}^{3} \frac{1}{t+7}dt
$$
$$
\Delta y=\int_{1}^{3}t^4dt
$$
### Polar Functions
$$
x=rcos\theta
$$
$$
y=rsin\theta
$$
Area bounded by Polar Curves = Integrals
## 10. Vector Algebra
### 1-4: Vector Properties

Given $\vec{v}=(v_x,v_y), \vec{w}=(w_x,w_y)$
1. Sum: $\vec{v}+\vec{u}=(u_x+v_x, u_y+v_y)$
2. Constant product: $k\cdot \vec{v}=(k\cdot v_x, k\cdot v_y$)
3. Magnitude: $||\vec{v}||=\sqrt{v_x^2+v_y^2}$

Constructing Vectors: tip - tail
Given $\vec{p}=(p_x,p_y,p_z), \vec{q}=(q_x,q_y,q_z)$ 
$$
\vec{PQ}=(q_x-p_x,q_y-p_y,q_z-p_z)
$$
### 5: Dot Product
"the distance from the vector to the shadow"
$$
\vec{v}\cdot\vec{w}=||v_x||||w_x||cos\theta
$$
$$
cos\theta=\frac{\vec{u}\cdot\vec{v}}{||\vec{u}||||\vec{v}||}
$$
Properties
1. Square: $\vec{v}\cdot\vec{v}=||\vec{v}||^2$
2. Commutative: $\vec{v}\cdot\vec{w}=\vec{w}\cdot\vec{v}$
3. Distributive: $\vec{v}\cdot(\vec{w}+\vec{u})=\vec{v}\cdot\vec{w}+\vec{v}\cdot\vec{u}$
4. Associative: $(k\vec{v})\cdot\vec{w}=k(\vec{v}\cdot\vec{w})$
5. Orthogonal: $\vec{v}\cdot\vec{w}=0$ if $\theta=90^o$ 
### 6: Projections
"the shadow of v cast onto w"
$$
proj_{\vec{w}}\vec{v}=\frac{||\vec{v}||cos\theta}{||\vec{w}||}\vec{w}=\frac{\vec{v}\cdot\vec{w}}{||\vec{w}||^2}\vec{w}
$$
Unit Vectors
$$\hat{i}=(1,0,0), \hat{j}=(0,1,0), \hat{k}=(0,0,1)$$
$$
\hat{k}=\hat{i}\times\hat{j}
$$
### 7-8: Cross Product
Finding a vector that is orthogonal to both vectors
$$
\vec{v}\times\vec{w}=\vec{(v_zw_z-v_zw_y,v_zw_x-v_xw_z,v_xw_z-v_yw_x)}
$$
Properties
1. Orthogonal
2. $||\vec{v}\times\vec{w}||=||\vec{v}||\vec{w}||sin\theta$
3. Right Hand Rule
4. $v\times w=-(w\times v)$
5. Distributive across addition
6. Distributive across multiplication
### 9: 3D Lines

Given:
- $A(x_0,y_0,z_0)$: Point
- $(x_0,y_0,z_0)$: Position Vector
- $\vec{d}=\vec{(a,b,c)}$: Direction Vector
- $P(x,y,z)$: Any point
Vector Equation of a line:
$$
\vec{(x.y.z)}=\vec{(x_0,y_0,z_0)}+t\vec{(a,b,c)}
$$
Parametric Form:
$$
x=z_0+at
$$
$$
y=y_0+bt
$$
$$
z=z_0+ct
$$
Symmetric Form
$$
\frac{x-x_0}{a}=\frac{y-y_0}{b}=\frac{z-z_0}{c}
$$
Example: Finding the shortest distance between
$$
\frac{x-2}{7}=\frac{y-1}{3}=\frac{z-5}{-2}, \frac{x+3}{4}=\frac{y-8}{2}=\frac{z+14}{-1}
$$
point on A: $A(2,1,-5)$
direction of A: $\vec{d_1}=(7,3,-2)$
point on B: $B(-3,8,-14)$
direction of B: $\vec{d_2}=(4,2,-1)$

Vector connecting $l_1$ and $l_2$ is $\vec{v}=\vec{BA}=\vec{(5,-7,9)}$
Vector orthogonal to both $l_1$ and $l_2$ is $\vec{h}=\vec{d_1}\times\vec{d_2}=\vec{(1,-1,2)}$
Shortest distance is $||\vec{v}\downarrow\vec{n}||=\frac{\vec{v}\cdot\vec{n}}{||\vec{n}||}=|\frac{30}{\sqrt{6}}|=5\sqrt{6}$
### 10: Planes
Cartesian / Scalar equation of a plane:
$$
ax+by+cz=d
$$
- $\vec{(a,b,c)}$ is a vector normal to the plane
- $d=ax_0+by_0+cz_0$ with point $(x_0,y_0,z_0)$ on the plane

Vector Equation of a plane:
$$
\vec{OP}=\vec{OP_0}+s\vec{a}+t\vec{b}
$$
- $P(x,y,z)$ is a point
- $P_0(x_0,y_0,z_0)$ is a fixed point
- $\vec{a}, \vec{b}$ are non-collinear vectors

Parametric Equation
$$
x=x_0+sa_x+tb_x
$$
$$
y=y_0+sa_y+tb_y
$$
$$
z=z_0+sa_z+tb_z
$$
## 11. Vector Geometry
## 12. Infinite Series
### 12.1 Defining Infinite Series
Converges: has a limit as n approaches infinity
Diverges: has no limit (infinity, oscillates)
### 12.2 Geometric Series
Sum of infinite geometric series for $|r|<1$
$$
S=\frac{a}{1-r}
$$
Diverges if $|r| >1$
### 12.3 n-th term divergence test
If $\lim_{n\to\infty}a_n\neq0$, then $\sum_{n=1}^{\infty}a_n$ will diverge
- This is because every subsequent term should get smaller and smaller
- The inverse is not true
### 12.4 Integral Test
$$
\sum_{n=1}^{\infty} \frac{1}{n^2}\to f(x)=\frac{1}{x^2}
$$
$$
\sum_{n=1}^{\infty} \frac{1}{n^2}=1+\sum_{n=2}^{\infty} \frac{1}{n^2}<1+\int_1^\infty \frac{1}{x^2}dx
$$
1. If $\int_k^\infty f(x)dx$ converges, then $\sum_{n=k}^\infty f(n)$ converges
	1. $\frac{1}{x^2}$ converges because integral = $-\frac{1}{x}$
2. If $\int_k^\infty f(x)dx$ diverges, then $\sum_{n=k}^\infty f(n)$ diverges
	1. $\frac{1}{x}$ diverges because integral = $ln(x)$
### 12.5 Harmonic and p-series
Harmonic Series
$$
\sum_{n=1}^\infty \frac{1}{n}=\frac{1}{1}+\frac{1}{2}+\ldots
$$
p-series
$$
\sum_{n=1}^\infty \frac{1}{n^2}=1+\frac{1}{4}+\frac{1}{9}+\ldots
$$
$$
\sum_{n=1}^\infty \frac{1}{n^p}=1+\frac{1}{2^p}+\frac{1}{3^p}+\ldots
$$
- $p>1$ converge
- $p\leq1$ diverge
### 12.6 Comparison Tests
Direct Comparison Test: For any $a_n\leq b_n$
- If $b_n$ converges, then any smaller series $a_n$ converges
- If $a_n$ diverges, $b_n$ also diverges

Limit Comparison Test $a_n\geq0$, $b_n>0$
If $lim_{n\to\infty} \frac{a_n}{b_n}>0$ and finite, either **both converge or both diverge**
### 12.7 Alternating Series Test
$\sum_{n\to k}^\infty a_n$ converges if:
1. $a_n=(-1)^nb_n =(-1)^{n+1}b_n$
2. $\lim_{n\to\infty}b_k=0$
3. $b_n$ is decreasing
Proves the inverse of the n-th term divergence test (if limit = 0)
### 12.8 Ratio Test for convergence
$$
\sum_{n=k}^\infty a_k
$$
$$
\lim_{n\to\infty} |\frac{a_{n+1}}{a_n}|=L
$$
- if L<1 -> converges
- if L>1 -> diverges
- if L=1 -> inconclusive
### 12.9 Absolute or Conditional Convergence
- Absolutely: Even if you take the absolute value
- Conditionally: not
### 12.10 Alternating Series Error Bound
$$
\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^2}=1-\frac{1}{4}+\frac{1}{9}-\frac{1}{16}+\frac{1}{25}-\ldots
$$
$$
S=S_4+R_4
$$
$$
S=\frac{115}{144}+R_4
$$
$$
\frac{115}{114}<S< \frac{115}{144}+\frac{1}{25}
$$
### 12.11 Taylor and Maclaurin Approximation

Maclaurin Series = Taylor series centered at 0
Approximating p(x) using f(x), but we want the first, second, etc. derivatives to match
$$
p(x)=f(0)+f'(0)x+\frac{1}{2}f''(0)x^2+\frac{1}{2*3}f'''(0)x^3+\cdots f^n(0)\frac{*x_n}{n!}
$$
Taylor Series
$$
p(x)=f(c)+\frac{f'(c)}{1!} (x-c)+\frac{f''(c)}{2!}(x-c)^2+\cdots+\frac{f^n(c)}{n!}(x-c)^n
$$
### 12.12 Lagrange Error Bound

Trying to bound the Taylor approximation
$$
R_{N,a}(x)=E_{N,a}(x)=f(x)-P_{N,a}(x)
$$
$$
E(a)=f(a)-P(a)=0
$$
$$
E'(A)=f'(a)-P'(a)=0
$$
$$
E^{(N)}(a)=f^{(N)}(a)-P^{(N)}(a)=0
$$
$$
E^{n+1}(x)=f^{n+1}(x)\leq M
$$
$$
E(b)\leq K
$$
Formula:
$$
|R_n(x)|\leq| \frac{M}{(n+1!)}(x-c)^{N+1}|
$$