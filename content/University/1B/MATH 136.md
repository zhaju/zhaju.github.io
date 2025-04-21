```
MATH 136 - Linear Algebra
MWF 3:30PM - 4:20PM
QNC 2502
Thomas Jung Spier
```
# 1 | Vectors in Euclidean Space
## 1.1 | Vector Addition and Scalar Multiplication
The Euclidean Space $\mathbb{R}^n$ is a collection of points 
$$
(x_1, \ldots x_n)\in\mathbb{R} \forall i\in\{1,\ldots,n\}
$$
$$
\vec{x} = 
\begin{bmatrix}
x_1 \\
\vdots \\
x_n
\end{bmatrix}
$$
Represents the vector connecting the origin $(0,\ldots0)$ or TAIL to the point $(x_1,\ldots x_n)$ or HEAD.

> Definition (Vectors in $\mathbb{R}^n$)
> The set $\mathbb{R}^n$ is defined as 
$$
R^n\mapsto \{ R = 
\begin{bmatrix}
x_1 \\
\vdots \\
x_n
\end{bmatrix} | x_1\ldots x_n\in\mathbb{R}\}
$$
> Definition (Vector Equality)
> Two vectors
$$
\vec{x}=
\begin{bmatrix}
x_1 \\
\vdots \\
x_n
\end{bmatrix}, \vec{y} = 
\begin{bmatrix}
y_1 \\
\vdots \\
y_m
\end{bmatrix}
$$
> Are equal if and only if $n=m$ and $x_i=y_i\forall i\in\{1,\ldots n\}$

> Definition (Vector Addition and Scalar Multiplication)
> Let $\vec{x}, \vec{y}$ be defined as above, and $c$ be a scalar. 
$$
\vec{x}+\vec{y}
\begin{bmatrix}
x_1+y_1 \\
\vdots \\
x_n+y_n
\end{bmatrix}
$$
$$
c\vec{x}=
\begin{bmatrix}
cx_1 \\
\vdots \\
cx_n
\end{bmatrix}
$$
> Definition (Linear Combinations)
> For $\vec{v_1},\ldots\vec{v_n}\in\mathbb{R}^n$ and $c_1,\ldots,c_k\in\mathbb{R}$, we call $c_1\vec{v_1}+\cdots+c_n\vec{v}_n$ a linear combination of $\vec{v_1},\ldots,\vec{v_n}$. This yields a vector in $\mathbb{R}^n$

> Theorem (Properties of Addition and Scalar Multiplication). Let $\vec{x},\vec{y},\vec{w}\in\mathbb{R}^n$ and $c,d\in\mathbb{R}$. Then:
1. $\vec{x}+\vec{y}\in\mathbb{R}^n$
2. (Associativity of addition) $(\vec{x}+\vec{y})+\vec{w}=\vec{x}+(\vec{y}+\vec{w})$
3. (Commutativity of addition) $\vec{x}+\vec{y}=\vec{y}+\vec{x}$
4. (Zero element for addition) $\exists\vec{0}\in\mathbb{R}^n: \vec{x}+\vec{0}=\vec{x}$
5. (Additive inverse): $\forall x\in\mathbb{R}^n, \exists\vec{-x}\in\mathbb{R}^n: \vec{x}+\vec{-x}=\vec{0}$
6. $c\vec{x}\in\mathbb{R}^n$
7. (Associativity): $c(d\vec{x})=(cd)\vec{x}$
8. (Identity): $1\cdot\vec{x}=\vec{x}$
9. (Distributive): $(c+d)\vec{x}=c\vec{x}+d\vec{x}$
10. (Distributive): $c(\vec{x}+\vec{y})=c\vec{x}+c\vec{y}$
## 1.2 | Bases
Basic Vectors
$$
\hat{i}=
\begin{bmatrix}
0 \\
1
\end{bmatrix}
,\hat{j}=
\begin{bmatrix}
1 \\
0
\end{bmatrix}
$$
You can reach every vector in $\mathbb{R}^2$ with a **linear combination** of any two scalars
$$
\vec{v}=a\hat{i}+b\hat{j}
$$
> Let $B=\{\vec{v_1},\ldots\vec{v_n}\}$ be a set of vectors in $\mathbb{R}^n$, We define the "span" of $B$ as
$$
Span(B)\mapsto\{c_1\vec{v_1}+\ldots c_n\vec{v_n}\mid c_1\ldots c_n\in\mathbb{R}\}
$$

Geometric interpretation of span
- The span of a set of vectors is the set of all locations I can reach while starting at the origin and walking along those vectors
- Unless the vectors are linearly dependent, 
	- The span of 2 vectors in 3D is a plane
	- The span of 3 vectors in 3D is everything

> (Theorem) Cancelling from the Span
> Let $\vec{v_1},\ldots\vec{v_n}\in\mathbb{R}^n$. Some vector $\vec{vi}$ can be written as a linear combination of $\vec{v_1}\ldots,\vec{v_{i-1}},\vec{v_{i+1}},\ldots\vec{v_n}$ if and only if (this essentially lets you cancel vectors out of the span)
$$
Span\{\vec{v_1},\ldots,\vec{v_n}\}=Span\{\vec{v_1}\ldots,\vec{v_{i-1}},\vec{v_{i+1}},\ldots\vec{v_n}\}
$$

> Linear Dependence:
> A set of vectors $\{\vec{v_1},\ldots,\vec{v_k}\}$ in $\mathbb{R}^n$ is said to be **linearly dependent** if there exists $c_1,\ldots,c_k\in\mathbb{R}$, not all zero, such that
$$
c_1\vec{v_1}+\cdots+c_k\vec{v_k}=\vec{0}
$$
 > A set of vectors $\{\vec{v_1},\ldots,\vec{v_k}\}$ in $\mathbb{R}^n$ is said to be **linearly independent** if the only solution to
$$
c_1\vec{v_1}+\cdots+c_k\vec{v_k}=\vec{0}
$$
> is the trivial solution with $c_1,\ldots,c_k=0$

> Basis
> The **basis** of a vector space a set of **linearly independent** vectors that **span** the full space
> The basis of the set $S=\{\vec{0}\}$ is to empty set
> There are infinitely many basis of the set $\mathbb{R}^2$; one could be
$$
\{\begin{bmatrix}
1 \\
0
\end{bmatrix},
\begin{bmatrix}
0 \\
1
\end{bmatrix}\}
$$

Exercise 1.7a:
$$
c_1
\begin{bmatrix}
0 \\
1 \\
-1
\end{bmatrix}
+ c_2 
\begin{bmatrix}
1 \\
2 \\
1
\end{bmatrix}
+ c_3
\begin{bmatrix}
3 \\
0 \\
3
\end{bmatrix}
=
\begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}
$$
The only solution is $(0,0,0)$, thus the set is linearly independent

Exercise 1.8a
$$
c_1(\vec{v_1}+\vec{v_2})+c_2(\vec{v_2}+\vec{v_3})+c_3(\vec{v_3}+\vec{v_1})=\vec{0}
$$
$$
(c_1+c_3)\vec{v_1}+(c_1+c_2)\vec{v_2}+(c_2+c_3)\vec{v_3}=\vec{0}
$$
$$
\{c_1,c_2,c_3\}=\{0,0,0\}
$$
Exercise 1.8b
$$
(\vec{v_1}+\vec{v_2}) - (\vec{v_2}+\vec{v_3}) + (\vec{v_3}+\vec{v_4})-(\vec{v_4}+\vec{v_1})=\vec{0}
$$

Exercise 1.10: Consider the set $\beta=\{\vec{e_n},\ldots,\vec{e_n}\}\subseteq\mathbb{R}^n$ where $\vec{e_i}$ is the vector in $\mathbb{R}^n$ with $i$th entry equal to 1 and all other entries 0. Prove that $\beta$ is a basis for $\mathbb{R}^n$
Linear Independence: The only valid solution by inspection is $(c_1,\ldots c_n)=(0,\ldots,0)$
Spanning Set: Consider
$$
\begin{bmatrix}
x_1 \\
\vdots \\
x_n
\end{bmatrix} = c_1
\begin{bmatrix}
1 \\
\vdots \\
0
\end{bmatrix} + \cdots + c_n
\begin{bmatrix}
0 \\
\vdots \\
1
\end{bmatrix}
$$
Let $c_1=x_1, \ldots, c_n=x_n$. Thus, $Span\{\beta\}\subseteq R^n$, and $R^n\subseteq Span\{\beta\}$.

Exercise 1.11: Consider
$$
\begin{bmatrix}
a \\
b \\
c
\end{bmatrix} = c_1
\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix} + c_2
\begin{bmatrix}
2 \\
6 \\
0
\end{bmatrix} + c_3
\begin{bmatrix}
1 \\
-1 \\
2
\end{bmatrix}
$$
Which corresponds to the system
$$
\begin{align*}
c_1+2c_2+c_3&=a \\
c_1+6c_2-c_3&=b \\
c_1+2c_3&=c
\end{align*}
$$
Simplifying, we get
$$
4c_2-2c_3=b-a
$$
$$
-2c_2+c_3=c-a
$$
$$
2c_2-c_3=\frac{1}{2}(b-a)
$$
$$
2c_2-c_3=a-c
$$
If $\frac{1}{2}(b-a)\neq a-c$, we have a contradiction. Take $(0,0,1)$. We would need
$$
2c_2-c_3=0\land2c_2-c_3=-1
$$
$$
\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}
\neq Span(B)
$$
## 1.3 | Subspaces
> (Definition) A subset $\mathbb{S}$ of $\mathbb{R}^n$ is called a subspace of $\mathbb{R}^n$ if for every $\vec{x}, \vec{y},\vec{w}\in\mathbb{S}$ and $c,d\in\mathbb{R}$, we have
1. $\vec{x}+\vec{y}\in\mathbb{S}.$
2. $(\vec{x}+\vec{y})+\vec{w}=\vec{x}+(\vec{y}+\vec{w}).$
3. $\overrightarrow{x}+\overrightarrow{y}=\overrightarrow{y}+\overrightarrow{x}.$
4. There exists a vector $\vec{0}\in\mathbb{S}$ such that $\vec{x}+\vec{0}=\vec{x}$ for all $\vec{x}\in\mathbb{S}.$ 
5. For every $\vec{x}\in\mathbb{S}$ there exists $(-\vec{x})\in\mathbb{S}$ such that $\vec{x}+(-\vec{x})=\vec{0}.$
6. $c\vec{x}\in\mathbb{S}.$
7. $c(d\vec{x})=(cd)\vec{x}.$
8. $(c+d)\overrightarrow{x}=c\overrightarrow{x}+d\overrightarrow{x}.$
9. $c(\vec{x}+\vec{y})=c\vec{x}+c\vec{y}.$
10. $1\overrightarrow{x}=\overrightarrow{x}.$

Closed Sets
- A set that satisfies V1: $\vec{x}+\vec{y}\in\mathbb{R}^n$ is called **closed under addition**
- A set that satisfies V6: $c\vec{x}\in\mathbb{R}^n$ is called **closed under scalar multiplication**

> (Theorem) Subspace Test
> Let $\mathbb{S}$ be a non-empty subset of $\mathbb{R}^n$. If $\vec{x}+\vec{y}\in\mathbb{S}$, and $c\vec{x}\in\mathbb{S}$ for all $\vec{x},\vec{y}\in\mathbb{S}$ and $c\in\mathbb{R}$, then $\mathbb{S}$ is a subspace of $\mathbb{R}^n$

**Example 1.3.3:** 
Show that the line through the origin of $\mathbb{R}^2$ with the following vector equation is a subspace of $\mathbb{R}^s$.
$$
\vec{x}= s
\begin{bmatrix}
1 \\
-4
\end{bmatrix}, s\in\mathbb{R}
$$
Solution: By V6, we know that $\vec{x}\in\mathbb{R}$ for every $s\in\mathbb{R}$, thus it is a non-empty subset of $\mathbb{R}^2$. 
To show the line is closed under addition (S1), we pick any two vectors $\vec{x},\vec{y}$ on the line and show that $\vec{x},\vec{y}$ is also on the line.
$$
\vec{x}=s_1
\begin{bmatrix}
1 \\
-4
\end{bmatrix},
\vec{y}=s_2
\begin{bmatrix}
1 \\
-4
\end{bmatrix}
\implies \vec{x}+\vec{y} = 
(s_1+s_2)
\begin{bmatrix}
1 \\
-4
\end{bmatrix}
$$
To show that the line is closed under scalar multiplication (S6):
$$
c\vec{x}=c(s_1
\begin{bmatrix}
1 \\
-4
\end{bmatrix})
=(cs_1)
\begin{bmatrix}
1 \\
-4
\end{bmatrix}
$$

**Example 1.3.5:**
Prove that the following set is a subspace of $\mathbb{R}^3$
$$
\mathbb{S}_1=\{
\begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix}
\in\mathbb{R}^3\mid x_1+x_2=0, x_1-x_3=0
\}
$$
Solution: By definition, $S_1$ is a subset of $\mathbb{R}$ and $\vec{0}$ satisfies the conditions of the set $(0+0=0, 0-0=0)$. Thus, $\mathbb{S}$ is a non-empty subset of $\mathbb{R}^3$. 
To show that $S_1$ is closed under addition:
$$
\vec{x}+\vec{y}=
\begin{bmatrix}
x_1+y_1 \\
x_2+y_2 \\
x_3+y_3
\end{bmatrix}
$$
$$
(x_1+y_1)+(x_2+y_2)=(x_1+x_2)+(y_1+y_2)=0+0=0
$$
$$
(x_1+y_1)-(x_3+y_3)=(x_1-x_3)+(y_1-y_3)=0+0=0
$$
To show that $S_2$ is closed under scalar multiplication:
$$
c\vec{x}=
\begin{bmatrix}
cx_1 \\
cx_2 \\
cx_3
\end{bmatrix}
$$
$$
cx_1+cx_2=c(x_1+x_2)=c0=0, cx_1-cx_3=c(x_1-x_3)=c0=0
$$
**Example 1.3.6:**
Prove that the following is not a subspace of $\mathbb{R}^3$
$$
\mathbb{S}_2=\{
\begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix}
\in\mathbb{R}^3\mid x_1+x_2=1\}
$$
Solution: By definition, $\mathbb{S_2}$ is a subset of $\mathbb{R}^3$, but we see that $\vec{0}$ does not satisfy the condition of $\mathbb{S}_2(0+0\neq1)$, hence $\mathbb{S}_2$ is not a subspace of $\mathbb{R}^3$.

> (Theorem) Span is a Subspace
> If $\vec{v_1},\ldots,\vec{v_k}\in\mathbb{R}^n$, then $\mathbb{S}=Span\{\vec{v_1},\ldots,\vec{v_k}\}$ is a subspace of $\mathbb{R}^n$

> Bases of Subspaces
> If a subset $\mathbb{S}$ of $\mathbb{R}^n$ has a basis, then $\mathbb{S}$ must be a subspace of $\mathbb{R}^n$. Converse is also true: every subspace $\mathbb{S}$ of $\mathbb{R}^n$ has basis
> All bases of $\mathbb{S}$ will contain the same number of elements. We define the dimension of $\mathbb{S}$ as $\dim(\mathbb{S})$.

**Example 1.3.10:** Find a basis for the following subspace, and determine it's dimension.
$$
\mathbb{S}_1=\{
\begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix}
\in\mathbb{R}^3\mid x_1+x_2=0, x_1-x_3=0\}
$$
If $[x_1,x_2,x_3]\in\mathbb{S}_1$, then $x_1+x_2=0$ and $x_1-x_3=0$. Hence, $x_2=-x_1$ and $x_3=x_1$. Thus, every vector in $\mathbb{S}_1$ can be represented as 
$$
\begin{bmatrix}
x_1 \\
x_2 \\
x_3 \\
\end{bmatrix}
=
\begin{bmatrix}
x_1 \\
-x_1 \\
x_1
\end{bmatrix}
= x_1
\begin{bmatrix}
1 \\
-1 \\
1
\end{bmatrix}
$$
Thus, the vector 
$$
B=
\begin{bmatrix}
1 \\
-1 \\
1
\end{bmatrix}
$$
is a spanning set and a basis for $\mathbb{S}_1$. Since $B$ contains one vector, $\dim(\mathbb{S})=1$
## 1.4 | Dot Product, Cross Product, Scalar Equations
### Norm
> Definition: Norm (the length of a vector $\vec{v}$)
$$
||\vec{v}||=\sqrt{\vec{v}\cdot\vec{v}}
$$

Norm Properties
1. $||\vec{x}||\geq0$ and $||\vec{x}||=0$ if and only if $\vec{x}=\vec{0}$
2. $||c\vec{x}||=|c|||\vec{x}||$
3. $|\vec{x}\cdot\vec{y}||\leq||\vec{x}||||\vec{y}||$ (Cauchy-Schwarz)
4. $||\vec{x}+\vec{y}||\leq||\vec{x}||+||\vec{y}||$ (Triangle Inequality)
### Dot Product
> Definition: Dot Product (Algebraic)
> The dot product of $\vec{x},\vec{y}$ is "the distance from the vector to the shadow"
$$
\vec{x}\cdot\vec{y}=
\begin{bmatrix}
x_1 \\
\vdots \\
x_n
\end{bmatrix}
\cdot
\begin{bmatrix}
y_1 \\
\vdots \\
y_n
\end{bmatrix}
=x_1y_1+\cdots+x_ny_n=\sum_{i=1}^n x_iy_i
$$
> Theorem: Dot Product (Geometric)
> If $\vec{x},\vec{y}\in\mathbb{R}^2$ and $\theta$ is an angle between $\vec{x},\vec{y}$, then 
$$
\vec{x}\cdot\vec{y}=||\vec{x}||\times||y||\cos\theta
$$
> Furthermore, $\vec{x},\vec{y}$ are said to be **orthogonal** if their dot product is 0.
> A set of vectors is called an **orthogonal set** is they are all orthogonal with each other.

Proof of the dot product:
$$
\begin{align*}
||\vec{x}-\vec{y}||^2&=||\vec{x}||^2+||\vec{y}||^2-2||\vec{x}||||\vec{y}||\cos\theta \\
&=(\vec{x}-\vec{y})\cdot(\vec{x}-\vec{y}) \\
&=\vec{x}\cdot\vec{x}-(\vec{x}\cdot\vec{y})-\vec{y}\cdot\vec{x})+\vec{y\cdot\vec{y}} \\
&=||\vec{x}||^2-2(\vec{x}\cdot\vec{y})+||\vec{y}||^2 \\
-2(\vec{x}\cdot\vec{y})&=-2||\vec{x}||||\vec{y}||\cos\theta \\
(\vec{x}\cdot\vec{y})&=||\vec{x}||||\vec{y}||\cos\theta
\end{align*}
$$

Dot Product Properties
1. Zero: $\vec{v}\cdot\vec{v}=0\iff \vec{x}=0$
2. Commutative: $\vec{v}\cdot\vec{w}=\vec{w}\cdot\vec{v}$
3. Distributive: $\vec{v}\cdot(\vec{w}+\vec{u})=\vec{v}\cdot\vec{w}+\vec{v}\cdot\vec{u}$
4. Associative: $(k\vec{v})\cdot\vec{w}=k(\vec{v}\cdot\vec{w})$
5. Orthogonal: $\vec{v}\cdot\vec{w}=0$ if $\theta=90^o$ 
### Cross Product
Revisiting lines in $\mathbb{R}^2$
$$
\vec{x}+\vec{b}+t\vec{m}, t\in\mathbb{R}, \vec{m}\neq\vec{0}
$$
Suppose $\vec{n}\neq\vec{0}$ is orthogonal to the direction vector $\vec{m}$. Then, the vectors on the line are the vectors $\vec{x}$ satisfying
$$
(\vec{x}-\vec{b})\cdot\vec{n}=0
$$
$$
0=\begin{bmatrix}
x_1-b_1 \\
x_2-b_2
\end{bmatrix}
\cdot \begin{bmatrix}
n_1 \\
n_2
\end{bmatrix}
=n_1(x_1-b_1)+n_2(x_2-b_2)
$$
$$
n_1x_1+n_2x_2=n_1b_1+n_2b_2
$$

> Definition: Cross Product 
> Finding a vector that is orthogonal to both vectors
$$
\begin{bmatrix}
u_1 \\
u_2 \\
u_3
\end{bmatrix}
\times
\begin{bmatrix}
v_1 \\
v_2 \\
v_3
\end{bmatrix}
=
\begin{bmatrix}
u_2v_3-u_3v_2 \\
u_3v_1-u_1v_3 \\
u_1v_2-u_2v_1
\end{bmatrix}
$$

Cross Product Properties
1. If $\vec{n}=\vec{v}\times\vec{w}$ then for all $y\in Span\{\vec{v},\vec{w}\}$ we have $\vec{y}\cdot\vec{n}=0$
2. $v\times w=-(w\times v)$
3. $\vec{v}\times\vec{v}=\vec{0}$
4. $\vec{v}\times\vec{w}=\vec{0}\iff \vec{v}=\vec{0}$ or $\vec{w}=c\vec{v}$
5. $\vec{v}\times(\vec{w}+\vec{x})=(\vec{v}\times\vec{w})+(\vec{v}\times\vec{w})$
6. $(c\vec{v})\times(\vec{w})=c(\vec{v}\times\vec{w})$
7. $||\vec{v}\times\vec{w}||=||\vec{v}||\vec{w}||\sin\theta$

> Let $\vec{p},\vec{u},\vec{v}\in\mathbb{R}^3$ with $\{\vec{u},\vec{v}\}$ linearly independent and let $P$ be the plane in $\mathbb{R}^3$ with vector equation
$$
\vec{x}=\vec{p}+s\vec{u}+t\vec{v}, s,t\in\mathbb{R}
$$
> If $\vec{n}=\vec{u}\times\vec{v}$, then an equation for the plane $P$ is
$$
(\vec{x}-\vec{p})\cdot\vec{n}=0
$$

Ex 1.2.6: Determine a scalar equation for
$$
\vec{x}=\begin{bmatrix}
2 \\
3 \\
3
\end{bmatrix}
+ s \begin{bmatrix}
3 \\
1 \\
-1
\end{bmatrix}
+ t \begin{bmatrix}
-1 \\
-1 \\
5
\end{bmatrix}
$$
Solution:
$$
\vec{w}=\begin{bmatrix}
3 \\
1 \\
-1
\end{bmatrix}
\times \begin{bmatrix}
-1 \\
-1 \\
5
\end{bmatrix}
= \begin{bmatrix}
4 \\
-14 \\
2
\end{bmatrix}
,
\vec{p}=\begin{bmatrix}
2 \\
3 \\
3
\end{bmatrix}
$$
$$
(\vec{x}-\vec{p})\cdot\vec{n}=0
$$
$$
\vec{n}\cdot\vec{x}=\vec{n}\cdot\vec{p}
$$
$$
\begin{bmatrix}
4 \\
-14 \\
2
\end{bmatrix}
\cdot
\begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix}
=
\begin{bmatrix}
4 \\
-14 \\
2
\end{bmatrix}
=
\begin{bmatrix}
2 \\
3 \\
3
\end{bmatrix}
$$
$$
(3x_1-14x_2-2x_3=-40) \lor (2x_1-7x_2-x_3=-20)
$$
### Scalar Equations of Planes
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
## 1.5 | Projections
> Definition: Projection / "the shadow of $\vec{u}$ cast onto $\vec{v}$"
$$
proj_{\vec{v}}\vec{v}=c\vec{v}=\frac{||\vec{u}||cos\theta}{||\vec{v}||}\vec{v}=\frac{\vec{u}\cdot\vec{v}}{||\vec{v}||^2}\vec{v}
$$
> Definition: Perpendicular / "the perpendicular of $\vec{u}$ onto $\vec{v}$"
$$
perp_{\vec{v}}(\vec{u})=\vec{u}-proj_\vec{v}(\vec{u})
$$

Deriving the Projection Formula:
$\vec{u}=c\vec{v}+\vec{w}$ for some $c\in\mathbb{R}$, $\vec{w}$ with $\vec{w}+\vec{v}=0$. If this holds, we must have:
$\vec{u}\cdot\vec{v}=(c\vec{v}+\vec{w})\cdot\vec{v}$
$\vec{u}\cdot\vec{v}=c(\vec{v}\cdot\vec{v}) + \vec{w}\cdot\vec{v}$
$$
c=\frac{\vec{u}\cdot\vec{v}}{||\vec{v}||^2}
$$
$$
\vec{w}=\vec{u}-c\vec{v}=\vec{u}-\frac{\vec{u}\cdot\vec{v}}{||\vec{v}||}^2
\vec{v}
$$
Ex 1.3.0: Prove that
$$
proj_\vec{v}(2\vec{x}-3\vec{y})-2proj_\vec{v}(\vec{x})-3proj_\vec{v}(\vec{y})
$$
$$
\begin{align}
proj_\vec{v}(2\vec{x}-3\vec{y})&=\frac{(2\vec{x}-3\vec{y})\cdot\vec{v}}{||\vec{v}||^2}\vec{v} \\
&=\frac{2(\vec{x}\cdot\vec{v})-3(\vec{y}\cdot\vec{v})}{||\vec{v}||^2}\vec{v} \\
&= (\frac{2(\vec{x}\cdot\vec{v})}{||\vec{v}||^2} - \frac{3(\vec{y}\cdot\vec{v})}{||\vec{v}||^2})\vec{v} \\
&= \frac{2(\vec{x}\cdot\vec{v})}{||\vec{v}||^2}\vec{v} - \frac{3(\vec{y}\cdot\vec{v})}{||\vec{v}||}\vec{v} \\
&= 2proj_\vec{v}(\vec{x})-3proj_\vec{v}(y)
\end{align}
$$
# 2 | Systems of Linear Equations
## 2.1 | Basic Terminology
> Definition: Linear Equation
> An equation in $n$ variables (unknowns) $x_1,\ldots,x_n$ that can be written in the form
$$
a_1x_1+\cdots+a_nx_n=b
$$
> is called a linear equation. Multiple such simultaneous equations are called a system of linear equations.

> Theorem: If a system of $m$ linear equation in $n$ variables has two distinct solutions $\vec{s},\vec{t}\in\mathbb{R}^n$, then for every $c\in\mathbb{R},\vec{s}+c(\vec{s}-\vec{t})$ is a solution, and furthermore these solutions are all distinct.
## 2.2 | Solving Systems of Linear Equations
Elementary Row Operations
> Definition: Coefficient and Augmented Matrices
> The coefficient matrix for the system of linear equations
$$
\begin{align*}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n &= b_2 \\
&\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n &= b_m
\end{align*}
$$
> is the rectangular array 
$$
\begin{bmatrix}
a_{11}&a_{12}&...&a_{1n} \\
a_{21}&a_{22}&...&a_{2n} \\
... &...&\ddots&... \\
a_{m1}&a_{m2}&...&a_{mn}
\end{bmatrix}.
$$
> The augmented matrix of the system is 
$$
\begin{bmatrix}
a_{11}&a_{12}&...&a_{1n}&\mid &b_1 \\
a_{21}&a_{22}&...&a_{2n}&\mid &b_2 \\ 
... &...&...&... &\mid &\vdots\\
a_{m1}&a_{m2}&...&a_{mn} &\mid &b_m
\end{bmatrix}
$$

Example:
$$
\begin{bmatrix}
2&1&\mid&5 \\
3&4&\mid&6
\end{bmatrix}
R_2\leftarrow2R_2
\begin{bmatrix}
2&1&\mid&5 \\
6&8&\mid&12
\end{bmatrix}
R_2\leftarrow R_2-3R_1
\begin{bmatrix}
2&1&\mid&5 \\
0&5&\mid&-3
\end{bmatrix}
$$
$$
R_1\leftarrow R_1-\frac{1}{5}R_2
\begin{bmatrix}
2&0&\mid& \frac{28}{5} \\
0&5&\mid&-3
\end{bmatrix}
R_1\leftarrow \frac{1}{2}R_1
\begin{bmatrix}
1&0&\mid& \frac{14}{5} \\
0&5&\mid&-3 
\end{bmatrix}
R_2\leftarrow \frac{1}{5}R_2 
\begin{bmatrix}
1&0&\mid& \frac{14}{5} \\
0&1&\mid& -\frac{3}{5}
\end{bmatrix}
$$
> Definition: Elementary row operations (EROs):
> 1. Multiplying a row by a non-zero scalar $(R_i\leftarrow cR_i)$
> 2. Add a multiple of one row to another ($R_i\leftarrow R_i+cR_j$)
> 3. Swapping two rows ($R_i\leftrightarrow R_j$)

> Definition: Reduced row echelon form (RREF):
> 1. If there is zero row, then it appears below all non-zero rows.
> 2. The leftmost non-zero entry in each non-zero row is a 1 (leading 1)
> 3. When comparing two non-zero rows, the leading 1 in the higher row is further to the left than the leading 1 in the lower row
> 4. A leading 1 is the only non-zero entry in its column.

> Theorem: Every matrix has a unique reduced row echelon form

Reducing Row 1
$$
A =
\begin{bmatrix}
2&0&4 \\
1&-3&5 \\
1&3&1
\end{bmatrix}
\frac{1}{2}R_1
\begin{bmatrix}
1&0&2 \\
1&-3&5 \\
1&3&-1
\end{bmatrix}
R_2-R_1
\begin{bmatrix}
1&0&2 \\
0&-3&3 \\
1&3&-1
\end{bmatrix}
R_3-R_1
\begin{bmatrix}
1&0&2 \\
0&-3&3 \\
0&3&-3
\end{bmatrix}
$$
Reducing Row 2
$$
\frac{1}{2}R_2
\begin{bmatrix}
1&0&2 \\
0&1&-1 \\
0&3&-3
\end{bmatrix}
R_3-3R_2
\begin{bmatrix}
1&0&2 \\
0&1&-1 \\
0&0&0
\end{bmatrix}
$$
This is an RREF :')

> Algorithm: Gauss-Jordan Eliminations
> To solve a system of linear equations: just make leading 1s and clear everything
1. Write the augmented matrix for the system.  
2. Use elementary row operations to row reduce the augmented matrix into RREF.  
3. Write the system of linear equations corresponding to the RREF.  
4. If the system contains an equation of the form 0 = 1, the system is inconsistent.  
5. Otherwise, move each free variable (if any) to the right hand side of each equation and assign each free variable a parameter.  
6. Determine the solution set by using vector operations to write the system as a linear combination of vectors.

> Definition: Homogeneous Systems
> Systems with the form $[A\mid\vec{0}]$, which is the same as
$$
c_1\vec{v_1}+c_2\vec{v_2}+\cdots+c_k\vec{v_k}=\vec{0}
$$

Example:
$$
\begin{bmatrix}
2&0&4&\mid&2 \\
1&-3&5&\mid&1 \\
1&3&-1&\mid&1 \\
\end{bmatrix}
=
\begin{bmatrix}
1&0&2&|&1 \\
0&1&-1&|&0 \\
0&0&0&|&0
\end{bmatrix}
$$
Represents the following system
$$
\begin{align*}
x_1+2x_3&=1 \\
x_2-x_3&=0 \\
0&=0
\end{align*}
$$
This system is consistent and the solution set has a parameter for a **free variable**.

If we let $x_3=s\in\mathbb{R}, x_1=1-2s, x_2=s$.
$$
\vec{x}=
\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}
+s
\begin{bmatrix}
-2 \\
1 \\
1
\end{bmatrix}
$$
Consider the **associated homogeneous system.** 
$$
\begin{bmatrix}
2&0&4&\mid&0 \\
1&-3&5&\mid&0 \\
1&3&-1&\mid&0 \\
\end{bmatrix}
=
\begin{bmatrix}
1&0&2&|&0 \\
0&1&-1&|&0 \\
0&0&0&|&0
\end{bmatrix}
$$
Solution:
$$
\vec{x}=t
\begin{bmatrix}
-2 \\
1 \\
1
\end{bmatrix}
$$
> Theorem: Solutions of homogeneous systems
> The solution set of a homogeneous system in $m$ linear equations and $n$ variables is a subspace of $\mathbb{R}^n$

> Definition: Associated homogeneous system
> Given a non-homogeneous system of equations $[A\mid \vec{b}]$, the homogeneous system $[A\mid\vec{0}]$ is called the associated homogeneous system.
> **NOTE: the coefficients of a matrix are the same of it's associated homogeneous system, same with the RREF of each** 

> Definition: Free Variable
> Let $R$ be the RREF of the coefficient matrix, $A$, of a **consistent system** of linear equations $[A\mid \vec{b}]$. If the jth variable of $R$ does not contain a leading 1, then we call variable $x_j$ a **free variable** of the system.

Example: This is a consistent system with one free variable ($x_3$)
$$
[B\mid \vec{c}]=
\begin{bmatrix}
1&0&2&|&1 \\
0&1&-1&|&0  \\
0&0&0&|&0
\end{bmatrix}
$$

Exercise: Solve the following system:
$$
[A\mid\vec{b}]
\begin{bmatrix}
1&1&2&|&-1 \\
2&1&2&|&1 \\
1&2&1&|&1
\end{bmatrix}
R_2-2R_1, R_3-R_1
\begin{bmatrix}
1&1&2&|&-1 \\
0&-1&-2&|&3  \\
0&1&-1&|&2
\end{bmatrix}
-R_2
\begin{bmatrix}
1&1&2&|&-1 \\
0&1&2&|&-3 \\
0&1&-1&|&2
\end{bmatrix}
$$
$$
R_1-R_2, R_3-R_2
\begin{bmatrix}
1&0&0&|&2 \\
0&1&2&|&-3 \\
0&0&-3&|&5
\end{bmatrix}
-\frac{1}{3}R_3
\begin{bmatrix}
1&0&0&|&2 \\
0&1&2&|&-3 \\
0&0&1&|&-\frac{5}{3}
\end{bmatrix}
R_2-2R_3
\begin{bmatrix}
1&0&0&|&2 \\
0&1&0&|& \frac{1}{3} \\
0&0&1&|& -\frac{5}{3}
\end{bmatrix}
$$
The solution set is the following point $\mathbb{R}^3$:
$$
\begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix}
=
\begin{bmatrix}
2 \\
\frac{1}{3} \\
-\frac{5}{3}
\end{bmatrix}
$$
Exercise: Check if a set of 5 vectors in $\mathbb{R}^4$ is linearly independent
Solution: The resulting coefficient matrix is a homogenous 5x4 matrix. This matrix cannot be consistent with a free variable, because it is larger than 4x4 (square).
## 2.3 | Rank
> Definition: Rank of a Matrix
> The **rank** of a matrix, denoted by $rank(A)$ is the number of leading 1s in the reduced row echelon form of the matrix
$$
C = 
\begin{bmatrix}
0&0&0 \\
0&0&0 \\
0&0&0
\end{bmatrix}
, rank(C)=0
$$
$$
D = 
\begin{bmatrix}
1&1&1 \\
1&1&1 \\
1&1&1
\end{bmatrix}
, rank(D)=1
$$
$$
A=
\begin{bmatrix}
1&0&2 \\
0&1&-1 \\
0&0&0
\end{bmatrix}
, rank(A)=2
$$

> Theorem: System-Rank Theorem 
> Let $A$ be the coefficient matrix of a system of $m$ linear equations in $n$ variables, $[A\mid\vec{b}]$
> 1. The system $[A\mid\vec{b}]$ is inconsistent if an only if $rank(A)<rank[a\mid\vec{B}]$
> 2. If the system $[A\mid\vec{b}]$ is consistent, then the system contains $(n-rank(A))$ free variables (parameters)

Example: Find all $c\in\mathbb{R}$ such that the given system has i) no solutions, ii) infinite solutions, iii) a unique solution:
$$
\begin{bmatrix}
1&3&3&|&2 \\
2&7&5&|&8 \\
-1&-2&2c^3&|&2c
\end{bmatrix}
$$
i) The system has no solution iff $rank(A)<rank[A\mid\vec{b}]$. $c=-1$
ii) $c=1$
iii) $c\neq\pm1$
## 2.4 | Linear Independence, Spanning Sets, Bases
> Theorem: Extension of System-Rank Theorem
- Let $\{\vec{v_1},\ldots,\vec{v}_k\}$ be a set of $k$ vectors in $\mathbb{R}^n$ and let $A=[\vec{v}\cdots\vec{v}_k]$. The set $\{\vec{v_1},\ldots,\vec{v}_k\}$ is linearly independent if and only if $rank(A)=k$.

> Theorem: Rank implies Span
- $\{\vec{v_1},\ldots,\vec{v}_k\}$ spans $\mathbb{R}^n$ if and only if $rank(A)=n$

> Theorem: Linear Independence implies Span
- $\{\vec{v_1},\ldots,\vec{v}_n\}$ in $\mathbb{R}^n$ is linearly independent if and only if it spans $\mathbb{R}^n$. 
## 2.5 | Complex Systems
# 3 | Matrices and Linear Mappings
## 3.1 | Operations on Matrices
### Addition and Scalar Multiplication
Functions on Euclidean Spaces:
$$
f:\mathbb{R}^n\to\mathbb{R}^m
$$
> Definition: Matrix
> An $m\times n$ matrix $A$ is a rectangular array with $m$ rows and $n$ columns. We denote the entry in the $i$-th row and $j$-th column by $a_ij$ or $(A)_{ij}.$ That is,
$$\begin{gathered}A=\begin{bmatrix}a_{11}&a_{12}&\cdots&a_{1j}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2j}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots&&\vdots\\a_{i1}&a_{i2}&\cdots&a_{ij}&\cdots&a_{in}\\\vdots&\vdots&&\vdots&&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mj}&\cdots&a_{mn}\end{bmatrix}.\end{gathered}$$
> Two $m\times n$ matrices $A$ and $B$ are equal if $a_ij=b_{ij}$ for all $1\leq i\leq m,1\leq j\leq n.$ The set of all $m\times n$ matrices with real entries is denoted by $M_{m\times n}(\mathbb{R}).$

> Definition: Addition and Scalar Multiplication
> Let $A,B\in M_{m\times n}(\mathbb{R}), c\in\mathbb{R}$. We define $A+B$ and $cA$ by
$$
(A+B)_{ij}=(A)_{ij}+(B)_{ij}
$$
$$
(cA)_{ij}=c(A)_{ij}
$$
> REMARKS
1. Addition is only defined if both matrices have the same size
2. A sum of scalar multiples of matrices is called a **linear combination**
### Transpose
> Definition: Transpose (like cs135)
> The **transpose** of an $m\times n$ matrix $A$ is the $n\times m$ matrix $A^T$ whose $ij$-th entry is the $ji$-th entry of $A$. That is,
$$
(A^T)_{ij}=(A)_{ji}
$$
> TRANSPOSE PROPERTIES
1. $(A^T)^T=A$
2. $(A+B)^T=A^T+B^T$
3. $(cA)^T=cA^T$
### Matrix-Vector Multiplication
> Definition: Matrix-Vector Product
> Let $A$ be an $m\times n$ matrix whose rows are denoted $\vec{a}^T_i$ for $1\leq i\leq m$. For any $\vec{X}\in\mathbb{R}^n$, we define $A\vec{x}$ by
$$
A\vec{X}=\begin{bmatrix}
\vec{a_1}\cdots\vec{x_1} \\
\vdots \\
\vec{a_m}\cdots\vec{x_m}
\end{bmatrix}
=\begin{bmatrix}
(a_{11},\ldots,a_{1n})\cdots(x_1,\ldots,x_n) \\
\vdots \\
(a_{m1},\ldots,a_{mn}\cdots(x_1,\ldots,x_n)) \\
\end{bmatrix}
= x_1 \begin{bmatrix}
a_{11} \\
\vdots \\
a_{m1}
\end{bmatrix}
+ \ldots + x_n \begin{bmatrix}
a_{1n} \\
\vdots \\
a_{mn}
\end{bmatrix}
$$
> For instance, in 2 dimensions this would be:
$$
\begin{bmatrix}
a_{11}&a_{12} \\
a_{21}&a_{22}
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2
\end{bmatrix}
=
\begin{bmatrix}
a_{11}x_1+a_{12}x_2 \\
a_{21}x_1+a_{22}x_2 
\end{bmatrix}
$$
> Note: If $A$ is an $m\times n$ matrix, then $A\vec{x}$ is only defined if $\vec{x}\in\mathbb{R}^n$.

> Definition: Matrix-Vector Multiplication
$$
A\vec{x}=\begin{bmatrix}
\vec{a_1}\cdot\vec{x}\\
\vdots\\
\vec{a_m}\cdot\vec{x}
\end{bmatrix}
$$
> PROPERTIES
1. $A(\vec{x}+\vec{y})=A\vec{x}+A\vec{y}$
2. $A(c\vec{x})=c(A\vec{x})$

> Theorem: Column Extraction 
> If $\vec{e_i}$ is the $i$-th standard basis vector and $A=[\vec{a_1}\cdots\vec{a_n}]$, then
$$
A\vec{e_i}=\vec{a_i}
$$

> Theorem: Row-Column Multiplication
> If $\vec{x},\vec{y}\in\mathbb{R}^n$, then
$$
\vec{x}^T\vec{y}=\vec{x}\cdot\vec{y}
$$
### Matrix Multiplication
> Definition: Matrix Multiplication
> For an $m\times n$ matrix $A$ and an $n\times p$ matrix $B=[\vec{b_1}\cdots\vec{b_p}]$, we define $AB$ to be the $m\times p$ matrix 
$$
AB=A[\vec{b_1}\cdots\vec{b_p}]=[A\vec{b_1}\cdots A\vec{b_p}]
$$
> PROPERTIES
1. $A(B+C)=AB+AC$
2. $(A+B)C=AC+BC$
3. $t(AB)=(tA)B=A(tB)$
4. $A(BC)=(AB)C$
5. $(AB)^T=B^TA^T$

> Matrix Multiplication Formula:
$$
\begin{bmatrix}
a&b \\
c&d
\end{bmatrix}
\begin{bmatrix}
e&f \\
g&h
\end{bmatrix}
=
\begin{bmatrix}
ae+bg&af+bh \\
ce+dg&cf+dh
\end{bmatrix}
$$
> Theorem: Matrix Equality Theorem
> If $A$ and $B$ are $m\times n$ matrices such that $A\vec{X}=B\vec{x}$ for every $\vec{x}\in\mathbb{R}^n$, then $A=B$

> Definition: Identity Matrix
> The $n\times n$ identity matrix, denoted by $I$ or $In$, is the matrix such that $(I)_{ii}=1$ for $1\leq i\leq n$ and $(I)_{ij}=0$ whenever $i\neq j$. That is,
$$
I = [\vec{e}_1 ~~~ \vec{e}_2 ~~~ \cdots ~~~ \vec{e}_n] =
\begin{bmatrix}
1 & 0 & 0 & \cdots & 0\\
0 & 1 & 0 & \cdots & 0\\
0 & 0 & 1 & \cdots & 0\\
\vdots & \vdots & \vdots & \ddots & \vdots\\
0 & 0 & 0 & \cdots & 1
\end{bmatrix}
$$
> Definition: Block Matrix
> If $A$ is an $m\times n$ matrix, then we can write $A$ as the $k\times l$ **block matrix**
$$
A = \begin{bmatrix}
A_{11}&\cdots&A_{1l} \\
\vdots&\ddots&\vdots \\
A_{k1}&\ldots&A_{kl}
\end{bmatrix}
$$
> Where $A_{ij}$ is a block such that all blocks in the $i$-th row have the same number of rows and all blocks in the $j$-th column have the same number of columns.
## 3.2 | Linear mappings
### Matrix Mappings
> Domain and Codomain
> For sets $A,B$, a function $f:A\to B$ is a rule that associates $a\in A$ to $f(a)\in B$ called the **image** of $a$ under $f$. The set $A$ is called the domain of $f$ and $B$ is called the **codomain** of $f$

> Matrix Mappings
> If $A$ is an $m\times n$ matrix, then a **matrix mapping** would be 
$$
f: \mathbb{R}^n\to\mathbb{R}^m, f(\vec{x})=A(x)
$$
> We will write $f(x_1,\ldots,x_n)=(y_1\ldots y_m)$ instead of:
$$
f(\begin{bmatrix}
x_1 \\
\vdots \\
x_n
\end{bmatrix}) = 
\begin{bmatrix}
y_1 \\
\vdots \\
y_m
\end{bmatrix}
$$

> Theorem: Deconstructing matrix mappings
> If $A$ is an $m\times n$ matrix and $f:\mathbb{R}^n\to\mathbb{R}^m$ is defined by $f(\vec{x})=A\vec{x}$, then for all $\vec{x},\vec{y}\in\mathbb{R}^n, b,c,\in\mathbb{R}$, we have
$$
f(b\vec{x}+c\vec{y}) = bf(\vec{x})+cf(\vec{y})
$$
### Linear Mappings
> Definition: Linear Mappings
> A function $L:\mathbb{R}^n\to\mathbb{R}^n$ is a **linear mapping** if for ever $\vec{x},\vec{y}\in\mathbb{R}^n, b,c\in\mathbb{R}$, we have
$$
L(b\vec{x}+c\vec{y})=bL(\vec{x})+cL(\vec{y})
$$
> Two linear mappings $L:\mathbb{R}^n\to\mathbb{R}^m$ and $M:\mathbb{R}^n\to\mathbb{R}^m$ are said to be **equal** if $L(\vec{x})=M(\vec{x})$ for all $\vec{x}\in\mathbb{R}^n$. We write $L=M$
> A linear mapping $L:\mathbb{R}^n\to\mathbb{R}^n$ is sometimes called a linear operator (domain = codomain)

Ex: Prove that $L:\mathbb{R}^3\to\mathbb{R}^3$ defined by $L(x_1,x_2,x_3)=(3x_1-x_2, 2x_1+2x_3)$ is a linear mapping.
Solution: Let $x,y\in\mathbb{R}^3$, and $b,c\in\mathbb{R}$. Then
$$
\begin{align*}
L(b\vec{x}+c\vec{y})&=L(bx_1+cy_1, bx_2+cy_2, bx_3+cy_1) \\
&= (3(bx_1+cy_1)-(bx_2+cy_2), 2(bx_1+cy_1), 2(bx_3+xy_3)) \\
&= b(3x_1-2, 2x_1+2x_3) + c(3y_1-y_2,2y_1+2y_3) \\
&= bL(\vec{x})+cL(\vec{y})
\end{align*}
$$

Ex: Prove that $L:\mathbb{R}^2\to\mathbb{R}^2$ defined by $L(x_1,x_2)=(x_1^2-x_2^2, x_1x_2)$ is nonlinear.
Solution:
$$
L(1,2)=(-3,2)
$$
$$
2L(1,2) = (-6,4)\neq L(2,4)=(-12,8)
$$
> Theorem: Linear mapping of $\vec{0}$
> If $L:\mathbb{R}^n\to\mathbb{R}^m$ is a linear mapping, then $L(\vec{0})=\vec{0}$

> Theorem: Linear Mapping to Matrix Mapping
> Every linear mapping $L:\mathbb{R}^n\to\mathbb{R}^m$ can be represented as a matrix mapping, where the $i$-th column is the image of the $i$-th standard basis vector of $\mathbb{R}^n$. That is,
$$
[L]=[L(\vec{e}_1)\cdots L(\vec{e}_n)]
$$

> Definition: Standard Matrix
> Let $L:\mathbb{R}^n\to\mathbb{R}^m$ be a linear mapping. The matrix 
$$
[L]=[L(\vec{e_1})\cdots L(\vec{e_n})]
$$
> is called the **standard matrix** of $L$. It satisfies $L(\vec{x)=[L}\vec{x}]$.
### Rotations in $\mathbb{R}^2$
> Rotating a vector about the origin
$$
[R_\theta] = \begin{bmatrix}
\cos\theta &-\sin\theta \\
\sin\theta &\cos\theta
\end{bmatrix}
$$
> Theorem: 
> If $R_\theta:\mathbb{R}^2\to\mathbb{R}^2$ is a rotation with rotation $A=[R_\theta]$, then the columns of $A$ are orthogonal unit vectors.
### Reflections
> Definition: Reflection
> Let $refl_p:\mathbb{R}^n\to\mathbb{R}^n$ denote the mapping that sends a vector $\vec{x}$ to its mirror image in the hyperplane $P$ with the normal vector $\vec{n}$.
$$
refl_p(\vec{x})=\vec{x}-2proj_\vec{n}(\vec{x})
$$
## 3.3 | Special Subspaces
### Range and onto
> Definition: Range
> Let $L:R^n\to R^m$ be a linear mapping. The **range** of $L$ is defined by
$$
Range(L) = \{L(\vec{x})\in\mathbb{R}^m\mid \vec{x}\in\mathbb{R}^n\}
$$

Example: Consider the linear mapping $L(x_1,x_2)=(x_1+x_2, x_1-x_2, x_2)$ and the vectors
$$
\vec{y_1}=\begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}, \vec{y_2} = \begin{bmatrix}
2 \\
3 \\
1
\end{bmatrix}, \vec{y_3} = \begin{bmatrix}
3 \\
-1 \\
2
\end{bmatrix}
$$
$\vec{y_1}$ would be in the range of $L$, $y_2$ would not because the system would be inconsistent, $\vec{y_3}$ would be

> Theorem: Range is a Subspace 
> If $L:\mathbb{R}^n\to\mathbb{R}^m$ is a linear mapping, then $Range(L)$ is a subspace of $\mathbb{R}^m$
> (This can be proved by the Subspace Test)

> Definition: Onto / Surjective
> A linear mapping $L:\mathbb{R}^n\to\mathbb{R}^m$ is called **onto** or **surjective** of $Range(L)=\mathbb{R}^m$

Example: Prove that $L(x_1,x_2,x_3)=(x_1+x_2+x_3, 2x_1-2x_3, x_2+3x_3)$ is onto.
Proof: We need show that if we pick any vector $\vec{y}\in\mathbb{R}^3$, then we can find a vector $\vec{x}\in\mathbb{R}^3$ such that $L(\vec{x})=\vec{y}$
$$
\begin{align*}
x_1+x_2+x_3&=y_1 \\
2x_1-2x_3&=y_2 \\
x_2+3x_3&=y_3
\end{align*}
$$
$$
\begin{bmatrix}
1&1&1&|&y_1 \\
2&0&-2&|&y_2 \\
0&1&3&|&y_3
\end{bmatrix}
~
\begin{bmatrix}
1&0&0&|&-y_1+y_2+y_3 \\
0&1&0&|&3y_1-\frac{3}{2}y_2-2y_3 \\
0&0&1&|&-y_1+\frac{1}{2}y_2+y_3
\end{bmatrix}
$$
Thus, $Range(L)=\mathbb{R}^3$ since the system is consistent for all $\vec{y}$. Specifically, taking $\vec{x}$ to be the solutions of the matrix, we have $L(x_1,x_2,x_3)=(y_1,y_2,y_3)$. Thus, $L$ is onto.
### Kernel and one-to-one
> Let $L:\mathbb{R}^n\to\mathbb{R}^m$ be a linear mapping. The **kernel** (nullspace) of $L$ is the set of all vectors in the domain which are mapped to the zero vector in the codomain. That is,
$$
Ker(L)=\{\vec{x}\in\mathbb{R}^n\mid L(\vec{x})=\vec{0}\}
$$

Example: Given $L(x_1,x_2)=(2x_1-2x_2,-x_1+x_2)$ and the vectors
$$
L:\vec{x_1}=\begin{bmatrix}
0 \\
0
\end{bmatrix}, \vec{x}_2 = \begin{bmatrix}
2 \\
2
\end{bmatrix}, \vec{x}_3 = \begin{bmatrix}
3 \\
-1
\end{bmatrix}
$$
We have that $\vec{x_1},\vec{x_2}\in Ker(L), \vec{x_3}\notin Ker(L)$

> Theorem: Kernel is a subspace
> If $L:\mathbb{R}^n\to\mathbb{R}^m$ is a linear mapping, then $Ker(L)$ is a subspace of $\mathbb{R}^n$.
> (Can also be proven with subspace test)

> Definition: One-to-one
> A linear mapping $L:\mathbb{R}^n\to\mathbb{R}^m$ is called **one-to-one** (or **injective**) if $Ker(L)=\{\vec{0}\}$

> Theorem: One-to-one mapping is unique
> Let $L:\mathbb{R}^n\to\mathbb{R}^m$ be a linear mapping. $L$ is only one-to-one if and only if for every $\vec{u},\vec{v}\in\mathbb{R}^n$ such that $L(\vec{u}=L(\vec{v})$, we must have $\vec{u}=\vec{v}$.

If a mapping is both one-to-one and onto, it is called **bijective.**
### Column Space and Nullspace
> Theorem: Standard Matrix and kernel
> Let $L:\mathbb{R}^n\to\mathbb{R}^m$ be a linear mapping with standard matrix $[L]$. Then, $x\in Ker(L)$ if and only if $[L]\vec{x}=\vec{0}

> Theorem: Corollary
> Let $A\in M_{m\times n}(\mathbb{R})$. The set $\{\vec{x}\in\mathbb{R}^n\mid A\vec{x}=\vec{0}\}$ is a subspace of $\mathbb{R}^n$.

> Definition: Nullspace
> Let $A$ be an $m\times n$ matrix. The **nullspace** (kernel) of $A$ is defined by
$$
Null(A)=\{\vec{x}\in\mathbb{R}^n\mid A\vec{x}=\vec{0}\}
$$

> Theorem: Basis of nullspace
> Let $A$ be an $m\times n$ matrix. Suppose the vector equation of the solution set of $A\vec{x}=\vec{0}$ as determined by Gauss-Jordan is
$$
\vec{x}=t_1\vec{v_1}+\cdots+t_k\vec{v_k}
$$
> Then $\{\vec{v_1},\ldots,\vec{v_k}\}$ is a basis for $Null(A)$. 
### Rank-Nullity
> Theorem: System-Rank Theorem on Null
> If $A$ is an $m\times n$ matrix, then
$$
\dim(Null(A))=n-rank(A)
$$
> Definition: Nullity
$$
nullity(A) = \dim(Null(A))
$$

> Theorem: Range and Span
> If $L:\mathbb{R}^n\to\mathbb{R}^m$ is a linear mapping with standard matrix $[L]=A=[\vec{a_1},\cdots,\vec{a_n}]$, then
$$
Range(L)=Span\{\vec{a_1},\ldots,\vec{a_n}\} = Col(|L|)
$$

> Definition: Column Space
> Let $A=[\vec{a_1}\ldots\vec{a_m}]\in M_{m\times n}(\mathbb{R})$. The **column space** of $A$, denoted by $Col(A)$, is the subspace of $\mathbb{R}^m$ spanned by the columns of $A$. That is,
$$
Col(A)=Span\{\vec{a_1},\ldots,\vec{a_n}\}
$$

> Theorem: Column Spaces and Coefficient Matrices
> Let $A$ be an $m\times n$ matrix and let $\vec{b}\in\mathbb{R}^m$. Then $\vec{b}\in Col(A)$ if and only if the system $[A\mid \vec{b}]$ is consistent.

> Theorem: Basis for $Col(A)$
> Let $A=[\vec{a_1}\cdots\vec{a_n}]$ be an $m\times n$ matrix. Supposed that $rank(A)=r$ and that the RREF has leading ones in columns $j_1,\ldots,j_r$. Then $\{\vec{a_{j1}},\ldots,\vec{a_{jr}}\}$ is a basis for $Col(A)$.
$$
\dim(Col(A))=rank(A)
$$

> Theorem: Rank-Nullity Theorem:
> If $A$ is an $n\times n$ matrix, then
$$
\begin{align}
n &= rank(A)+ nullity(A) \\
&=\dim(Col(A))+\dim(Null(A))
\end{align}
$$

> Definition: **Row Space** and **Left Nullspace**
> Let $A$ be an $m\times n$ matrix. The **row space** of $A$ is defined by
$$
Row(A)=\{A^T\vec{x}\in\mathbb{R}^n\mid\vec{x}\in\mathbb{R}^m\}
$$
> The **left nullspace** of $A$ is defined by
$$
Null(A^T)=\{\vec{x}\in\mathbb{R}^m\mid A^T\vec{x}=\vec{0}\}
$$

> Theorem: Last fucking theorem in this godforsaken chapter
> Let $A$ be an $m\times n$ matrix. Then,
$$
\dim(Col(A))=\dim(Row(A))
$$
$$
rank(A)=rank(A^T)
$$
## 3.4 | Operations on Linear Mappings
> Definition: Addition and Scalar Multiplication (linear mappings as vectors/matrices)
> Let $L:\mathbb{R}^n\to\mathbb{R}^m, M:\mathbb{R}^n\to\mathbb{R}^m$ be linear mappings. We define the following:
$$
\begin{align}
(L+M)(\vec{x})&=L(\vec{x})+M(\vec{x}) \\
(cL)(\vec{x})&=cL(\vec{x})
\end{align}
$$
> Theorem: Linear mappings satisfy linear combinations
> If $L,M: \mathbb{R}^n\to\mathbb{R}^m$ are linear mappings and $c\in\mathbb{R}$, then $L+M, cL$ are linear mappings. Moreover,
$$
[L+M]=[L]+[M]\text{ and }[cL]=c[L]
$$
> Theorem: Linear Mapping Properties
> If $L,M,N\in\mathbb{L}(\mathbb{R}^n,\mathbb{R}^m)$ and $c,d\in\mathbb{R}$, then:
1. $L+M\in\mathbb{L}(\mathbb{R}^n,\mathbb{R}^m)$
2. $( L+ M) + N= L+ ( M+ N)$
3. $L+M=M+L$
4. There exists a linear mapping $O:\mathbb{R}^n\to\mathbb{R}^m$, such that $L+O=L$ for all $L.$ In particular, $O$ is the linear mapping defined by $O(\vec{x})=\vec{0}$ for all $\vec{x}\in\mathbb{R}^n.$ The mapping $O$ is called the zero mapping.
5. For any linear mapping $L:\mathbb{R}^n\to\mathbb{R}^m$, there exists a linear mapping $(-L):\mathbb{R}^n\to\mathbb{R}^m$ with the property that $L+(-L)=O.$ In particular, $(-L)$ is the linear mapping defined by $(-L)(\vec{x})=-L(\vec{x})$ for all $\overrightarrow{x}\in\mathbb{R}^n$
6. $cL\in\mathbb{L}(\mathbb{R}^n,\mathbb{R}^m)$
7. $c(dL)=(cd)L$
8. $(c+d)L= cL+ dL$
9. $c(L+M)=cL+cM$
10. $1L=L$

> Definition: Composition
> Let $L:\mathbb{R}^n\to\mathbb{R}^m$, $M:\mathbb{R}^m\to\mathbb{R}^p$ be linear mappings. The **composition** of $M,L$ is the function 
$$
(M\circ L)(\vec{x})=M(L(\vec{x}))
$$
> Theorem: Compositions can be decomposed
> If $L:\mathbb{R}^n\to\mathbb{R}^m$, $M:\mathbb{R}^m\to\mathbb{R}^p$ are linear mappings, then $M\circ L:\mathbb{R}^n\to\mathbb{R}^p$ is a linear mapping and
$$
[M\circ L]=[M][L]
$$
> Definition: Identity Mapping
> The linear mapping $Id:\mathbb{R}^n\to\mathbb{R}^n$ defined by $Id(\vec{x})=\vec{x}$ is called the **identity mapping.**
## 3.5 | Matrices with Complex Entries
## Unit 3 Recap
For a linear mapping $L:\mathbb{R}^n\to\mathbb{R}^m$,
Range, subspace of $\mathbb{R}^m$
$$
Range(L)=\{L(\vec{x}):\vec{x}\in\mathbb{R}^n\}
$$
Kernel, subspace of $\mathbb{R}^n$
$$
Ker(L)=\{\vec{x}\in\mathbb{R}^n:L(\vec{x})=\vec{0}\}
$$
For an $m\times n$, matrix, say $[L]$
Column Space, subspace of $\mathbb{R}^m$
$$
Col(A)=Span\{\vec{a_1},\ldots,\vec{a_n}\}
$$
Null Space, subspace of $\mathbb{R}^n$
$$
Null(A)=\{\vec{x}\in\mathbb{R}^n, L\vec{x}=\vec{0}\}
$$
System-Rank Theorem:
$$
\dim(Null(A))=n-rank(A)
$$
Nullity
$$
nullity(A) = \dim(Null(A))
$$
Matrix Multiplication:
$AB_{ij}$ = a i-th row $\cdot$ b i-th column
# 4 | Inverses and Determinants
## 4.1 | Matrix Inverses
> Definition: Left / Right Inverses
> Let $A$ be an $m\times n$ matrix. If $B$ is an $n\times m$ matrix such that $AB=I_m$, then $B$ is called a **right inverse** of $A$. If $C$ is an $n\times m$ matrix such that $CA=I_n$, then $C$ is called a **left inverse** of $A$.

How to find a right inverse of $A\in M_{m\times n}(\mathbb{R})$?
We want to find an $n\times m$ matrix $B=[\vec{b_1}\cdots\vec{b_m}]$ such that 
$$
\begin{align}
I_m&=AB \\
I_M&=A[\vec{b_1}\cdots\vec{b_m}] \\
[\vec{e_1}\cdots\vec{e_m}] &= [A\vec{b_1}\cdots A\vec{b_m}]
\end{align}
$$
Comparing columns, we see that we need to find $\vec{b_i}$ such that
$$
A\vec{b_i}=\vec{e_i}, 1\leq i\leq m
$$
This is the same as requiring that $\vec{e_i}$ belongs to $Col(A)$ for $1\leq i\leq m$. Since $Col(A)$ is a subspace of $\mathbb{R}^m$, this is the same to having $Col(A)=\mathbb{R}^m$. 

> Theorem:
> If $A$ is an $m\times n$ matrix, then
> 1. $A$ has a right inverse if and only if $rank(A)=m$
> 2. $A$ has a left inverse if and only if $rank(A)=n$

A has a left inverse if and only if
$$
\begin{align}
CA &= I_n \\
(CA)^T &= (I_n)^T \\
A^TC^T &= I_n
\end{align}
$$
So A has a left inverse $\iff$ a has a right inverse
$$
\begin{align}
rank(A^T)&=n \\
rank(A)&=n
\end{align}
$$
> Theorem: Matrix with left and right inverse
> If $A,B,C$ are $n\times n$ matrices such that $AB=I=CA$, then $B=C$

> Definition: Invertible
> Let $A$ be an $n\times n$ matrix. If $B$ is a matrix such that $AB=I=BA$, then $B$ is called the inverse of $A$. We write $B=A^{-1}$ and we say that $A$ is **invertible**

> Corollary:
> An $n\times n$ matrix is invertible if and only if $rank(A)=n$

> Theorem:
> If $A,B$ are $n\times n$ matrices such that $AB=I$, then $A,B$ are invertible. Moreover, $B=A^{-1}$ and $A=B^{-1}$

Example (FINALLY): Find the inverse of 
$$
A=\begin{bmatrix}
1&3&3 \\
1&4&3 \\
1&3&4
\end{bmatrix}
$$
Use the super-augmented matrix:
$$
\begin{bmatrix}
1&3&3&|&1&0&0\\
1&4&3&|&0&1&0 \\
1&3&4&|&0&0&1
\end{bmatrix} \sim
\begin{bmatrix}
1&0&0&|&7&-3&-3 \\
0&1&0&|&-1&1&0 \\
0&0&1&|&-1&0&1
\end{bmatrix}
$$
To confirm, we can check $AA^{-1}=I$

> Theorem:
> If $A$ and $B$ are invertible matrices and $c\in\mathbb{R}$ with $c\neq0$, then
1. $(cA)^{-1}= \frac{1}{c}A^{-1}$
2. $(A^T)^{-1} = (A^{-1})^T$
3. $(AB)^{-1}=B^{-1}A^{-1}$

> Theorem: 2x2 Matrix
$$
A= \begin{bmatrix}
a&b \\
c&d
\end{bmatrix} \in M_{2\times 2}(\mathbb{R})
$$
> Then $A$ is invertible if and only if $ad-bc\neq0$. Moreover, if $A$ is invertible,
$$
A^{-1} = \frac{1}{ad-bc} \begin{bmatrix}
d&-b \\
-c&a
\end{bmatrix}
$$
> Theorem: Invertible Matrix Theorem
> For any $n\times n$ matrix $A$, the following are equivalent.
> 1. $A$ is invertible
> 2. The RREF of $A$ is I
> 3. $rank(A)=n$
> 4. The system of equations $A\vec{x}=\vec{b}$ is consistent with a unique solution for all $\vec{b}\in\mathbb{R}^n$
> 5. The nullspace of $A$ is $\{\vec{0}\}$
> 6. The columns of $A$ form a basis for $\mathbb{R}^n$
> 7. The rows of $A$ form a basis for $\mathbb{R}^n$
> 8. $A^T$ is invertible.
## 4.2 | Elementary Matrices
> Definition: Elementary Matrix
> An $n\times n$ matrix $E$ is called an **elementary matrix** if it can be obtained by from the $n\times n$ identity matrix by performing exactly one elementary row operation

> Theorem: Invertibility of $E$
> If $E$ is an elementary matrix, then $E$ is invertible and $E^{-1}$ is also an elementary matrix

> Theorem: Matrix multiplication of $E$
> Let $A$ be an $m\times n$ matrix and $E$ be an $m\times m$ elementary matrix. Then,
> 1. If $E$ corresponds to the ERO $R_i+cR_j$, then $EA$ is the same as $R_i+cR_j$
> 2. If $E$ corresponds to the ERO $cR_i$, then $EA$ is the same as $cR_j$
> 3. If $E$ corresponds to the ERO $R_i\leftrightarrow R_j$, then $EA$ is the same as $R_i\leftrightarrow R_j$

> Theorem: Matrix multiplication doesn't change rank
$$
rank(EA)=rank(A)
$$

Turns out we can represent row reduction as elementary matrices!
> Theorem: EROs as matrices
> If $A$ is an $m\times n$ matrix with RREF $R$, then there exists $E_1,\ldots,E_k$ $m\times n$ elementary matrices such that $E_k\cdots E_2E_1A=R$. In particular:
$$
A=E_1^{-1}E_2^{-1}\cdots E_k^{-1}R
$$
$$
A^{-1}=E_1E_2\cdots E_k
$$

Example: Write $A, A^{-1}$ as the product of elementary matrices
$$
\begin{bmatrix}
-1&1 \\
2&-1
\end{bmatrix}
-R_1
\begin{bmatrix}
1&-1 \\
2&-1
\end{bmatrix}
R_2-2R_1
\begin{bmatrix}
1&-1 \\
0&1
\end{bmatrix}
R_1+R_2
\begin{bmatrix}
1&0 \\
0&1
\end{bmatrix}
=I
$$
$$
E_1=
\begin{bmatrix}
-1&0 \\
0&1
\end{bmatrix}
, E_2=
\begin{bmatrix}
1&0 \\
-2&-1
\end{bmatrix}
, E_3=
\begin{bmatrix}
1&1 \\
0&1
\end{bmatrix}
$$
Thus, we get
$$
E_3E_2E_1A=I
$$
$$
A^{-1}=E_3E_2E_1
$$
$$
A=E_1^{-1}E_2^{-1}E_3^{-1}
$$
## 4.3 | Determinants
### Determinants
> Definition: 2x2 Determinant
$$
A=\begin{bmatrix}
a&b \\
c&d
\end{bmatrix}
$$
> The **determinant** of $A$ is the following. If $\det(A)\neq0$, then $A$ is invertible.
$$
\det(A)=ad-bc
$$

> Definition: 3x3 Determinant
$$
A=\begin{bmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{bmatrix}
$$
$$
\det A=a_{11}a_{22}a_{33}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}+a_{13}a_{21}a_{32}+a_{12}a_{23}a_{31}-a_{13}a_{22}a_{31}
$$
> Simplifying this, we get
$$\begin{aligned}a_{11}a_{22}a_{33}&-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}+a_{13}a_{21}a_{32}+a_{12}a_{23}a_{31}-a_{13}a_{22}a_{31}\\&=a_{11}(a_{22}a_{33}-a_{23}a_{32})-a_{21}(a_{12}a_{33}-a_{13}a_{32})+a_{31}(a_{12}a_{23}-a_{13}a_{22})\\&=a_{11}\begin{vmatrix}a_{22}&a_{23}\\a_{32}&a_{33}\end{vmatrix}-a_{21}\begin{vmatrix}a_{12}&a_{13}\\a_{32}&a_{33}\end{vmatrix}+a_{31}\begin{vmatrix}a_{12}&a_{13}\\a_{22}&a_{23}\end{vmatrix}.\end{aligned}$$

> Definition: Cofactor
> Let $A$ be an $n\times n$ matrix with $n\geq 2$. Let $A(i,j)$ be the $(n-1)\times(n-1)$ matrix obtained from $A$ by deleting the $i$-th row and $j$-th column. The **cofactor of $a_{ij}$** is 
$$
C_{ij}(A)=(-1)^{i+j}\det(A(i,j))
$$

Example: Calculate the determinant of the given matrix using the cofactor
$$
\begin{bmatrix}
1&3&0 \\
2&0&4 \\
1&5&1
\end{bmatrix}
$$
We expand along Row 2
$$
\begin{align}
&=a_{21}(-1)^{2+1}\det A(2,1)+a_{22}(-1)^{2+2}\det A(2,2)+a_{23}(-1)^{2+3}\det A(2,3) \\
&=(2)(1)\det\begin{bmatrix}
3&0 \\
5&1
\end{bmatrix} + 0 + (4)(-1) \det\begin{bmatrix}
1&3 \\
1&5
\end{bmatrix} \\
&=-6-4(2) \\
&=-14
\end{align}
$$

> Definition: $n\times n$ determinant
> Let $A$ be an $n\times n$ matrix with $n\geq 2$. The **determinant** of $A$ is defined as
$$
\det A=\sum_{k=1}^n a_{k1}C_{k1}
$$
> where the determinant of a $1\times 1$ matrix is defined by $\det[c]=c$
### The Cofactor Expansion
> Theorem: Cofactor Expansion
> Let $A$ be an $n\times n$ matrix. For any $1\leq i\leq n$
$$
\det(A)=\sum_{k=1}^n a_{ik}C_{ik}
$$
> is called the **cofactor expansion across the i-th row**, OR for any $j\in[1,n]$,
$$
\det(A)=\sum{k=1}^n a_{kj}C_{kj}
$$
> is called the **cofactor expansion across the j-th column**

> Definition: Upper Triangular
> An $m\times n$ matrix $U$ is said to be **upper triangular** if $u_{ij}=0$ whenever $i>j$. An $m\times n$ matrix $L$ is said to be **lower triangular** if $l_{ij}=0$ whenever $i<j$

> Theorem: 
> If an $n\times n$ matrix $A$ is upper triangular or lower triangular, then
$$
\det A = a_{11}a_{22}\cdots a_{nn}
$$
### Determinants and Row Operations
> Theorem: Effects of EROs on determinants
> 1. $R_1=cR_1\implies \det(B)=c\det(A)$
> 2. $R_1\leftrightarrow R_2\implies \det(B)=-\det(A)$
> 	3. Corollary: If $n\times n$ matrix $A$ has two identical rows, then $\det(A)=0$
> 34. _1=R_1+cR_2\implies\det(B)=\det(A)$
### Determinants and Elementary Matrices
> Addition to the Invertible Matrix Theorem:
> An $n\times n$ matrix is invertible if and only if $\det(A)\neq0$

> Theorem:
1. $\det(EA)=\det(E)\det(A)$
2. If $A$ is an invertible, then $\det(A^{-1})=\frac{1}{\det{A}}$
3. If $A$ is an $n\times n$ matrix, then $\det(A)=\det(A^T)$

Example: Prove $P^{-1}AP=B\implies \det(A)=\det(B)$
$$
\begin{align}
\det(b)&=\det(P^{-1}AP) \\
&=\det(P^{-1})\det(A)\det(P) \\
&=\frac{1}{\det(P)}\det(A)\det(P) \\
&=\det(A)
\end{align}
$$
Example: Find a $2\times2$ matrix $A$ satisfying $A^T=A^{-1}$ and $\det(A)=-1$
$$
\begin{bmatrix}
1&0 \\
0&-1
\end{bmatrix}
$$
## 4.4 | Determinants and Systems of Equations
> Lemma:
> If $A$ is an $n\times n$ matrix with cofactors $C_{ij}$ and $i\neq j$, then 
$$
\sum_{k=1}^n (A)_{ik}C_{jk}=0
$$
> Theorem:
> If $A$ is an invertible $n\times n$ matrix, then $(A^{-1})_{ij}=\frac{1}{\det(A)}C_{ji}$

> Definition: Cofactor Matrix, Adjugate Matrix
> Let $A$ be an $n\times n$ matrix. 
> The **cofactor matrix** of $A$, denoted by $cof(A)$, of $A$ is the $n\times n$ matrix with entries
$$
(cof(A))_{ij}=C_{ij}
$$
> The **adjugate** of $A$ is the matrix, denoted by $(adj(A))$, is the $n\times n$ matrix with entries
$$
(adj(A))_{ij}=C_{ji}
$$
> The two are inverses of each other: $adj(A)=(cof(A))^T$

> Theorem: Cramer's Rule (OPTIONAL)
> If $A$ is an $n\times n$ invertible matrix, then the solution of $A\vec{x}=\vec{b}$ is given by
$$
x_i = \frac{\det(A_i)}{\det(A)}, 1\leq i\leq n
$$
> where $A_i$ is the matrix obtained from $A$ by replacing the $i$-th column of $A$ by $\vec{b}$
## 4.5 | Area and Volume
# 5 | Dimensions and Coordinates
## 5.1 | Bases and Dimension
> Definition: Basis
> Let $\mathbb{S}$ be a subspace of $\mathbb{R}^n$. A set $B$ contained in $\mathbb{S}$ is called a basis for $\mathbb{S}$ if $B$ is a linearly independent spanning set for $\mathbb{R}$.
> We define a basis for the zero subspace $\{\vec{0}\}$ to be the empty set.

> Theorem
> Every subset of $\mathbb{R}^n$ has a basis.

> Theorem
> If you add vectors to a basis, the basis is no longer a basis :o

> Theorem
> If $\dim\mathbb{S}=k$, then
> 1. A set of $>k$ vectors must be linearly dependent
> 2. A set of $<k$ vectors cannot span $\mathbb{S}$
> 3. A set of $k$ vectors is linearly independent if and only if it spans $\mathbb{S}$

> Theorem: Expanding sets to bases
> If $\mathbb{S}$ is a $k$-dimensional subspace of $\mathbb{R}^n$ and $\{\vec{v_1},\ldots,\vec{v_l}\}$ is a linearly independent set in  $\mathbb{S}$ with $l<k$, then there exist vectors $\{\vec{w_{l+1}},\ldots,\vec{w_k}\}$ that $\{\vec{v_1},\ldots,\vec{v_l}, \vec{w}_{l+1},\ldots,\vec{w_n}\}$ is a basis for  $\mathbb{S}$

> Theorem: Nested Subspaces
> Let  $\mathbb{S}_1$ and  $\mathbb{S}_2$ beg subspaces of $\mathbb{R}^n$ such that  $\mathbb{S}_1\subseteq\mathbb{S}_2$. Then,
$$
\dim\mathbb{S}_1\leq\dim\mathbb{S}_2
$$
. Moreover, $\mathbb{S}_1=\mathbb{S}_2$ if and only if $\dim\mathbb{S}_1=\dim\mathbb{S}_2$
## 5.2 | Coordinates
> Theorem:
> If $B=\{\vec{v_1},\ldots,\vec{v_k}\}$ is a basis for the subspace $\mathbb{S}$ of $\mathbb{R}^n$, then every $\vec{v}\in\mathbb{S}$ can be written as a unique linear combination of the vectors in $B$

> Definition: B- coordinates and B-coordinate vector (the coefficients of the linear combination)
> Let $B=\{\vec{v_1},\ldots\vec{v_k}\}$ be a basis for a subspace $\mathbb{S}$ of $\mathbb{R}^n$. If $\vec{v}=b_1\vec{v_1}+\cdots+b_k\vec{v_k}$, then $b_1,\ldots,b_k$ are called the **B-coordinates** of $\vec{v}$, and we define the **B-coordinate vector** of $\vec{v}$ as
$$
[\vec{v}]_B= \begin{bmatrix}
b_1 \\
\vdots \\
b_k
\end{bmatrix}
$$
> Theorem:
> If $\mathbb{S}$ is a subspace of $\mathbb{R}^n$ with basis $B=\{\vec{v_1},\ldots\vec{v_k}\}$, then for any $\vec{v},\vec{w}\in\mathbb{S}$ and $s,t\in\mathbb{R}$ we have
$$
[s\vec{v}+t\vec{w}]_B=s[\vec{v}]_S+t[\vec{w}]_B
$$

Example:
Consider the ordered basis 
$$
B=\{\begin{bmatrix}
2 \\
1
\end{bmatrix}, \begin{bmatrix}
-1 \\
2
\end{bmatrix}\}
$$
1. Compute $\vec{x}$ given that
$$
[\vec{x}]_B = \begin{bmatrix}
3 \\
-1
\end{bmatrix}
$$
$$
\vec{x}=3\vec{v_1}-\vec{v_2} = 3\begin{bmatrix}
2 \\
1
\end{bmatrix} - 1 \begin{bmatrix}
-1 \\
2
\end{bmatrix} = \begin{bmatrix}
7 \\
1
\end{bmatrix}
$$
2. Determine $[\vec{y}]_B$ for 
$$
\vec{y}= \begin{bmatrix}
1 \\
-12
\end{bmatrix}
$$
$$
\begin{bmatrix}
2&-1&|&-1 \\
1&2&|&12
\end{bmatrix} \sim
\begin{bmatrix}
1&0&|&2 \\
0&1&|&5
\end{bmatrix} \implies [\vec{y}]_B = 
\begin{bmatrix}
2 \\
5
\end{bmatrix}
$$

> Definition: Change of Coordinates Matrix
> Let $B=\{\vec{v_1},\ldots,\vec{v_n}\}$ and $C$ both be bases for a subspace $\mathbb{S}$. The **change of coordinates matrix** from B-coordinates to C-coordinates is defined by
$$
_cP_b=[[\vec{v_1}]_c\ldots[\vec{v_n}_c]]
$$
> and for any $\vec{x}\in\mathbb{S}$ we have
$$
[\vec{x}_C=_cP_b[\vec{x}]_B
$$

> Theorem:
> If $B$ and $C$ are bases for a $k$-dimensional subspace $\mathbb{S}$, then the change of coordinate matrices $_CP_B$ and $_BP_C$ satisfy
$$
(_CP_B)(_BP_C) = I = (_BP_C)(_CP_B)
$$
# 6 | Eigenvectors and Diagonalization
## 6.1 | Matrix of a Linear Mapping, Similar Matrices
> Definition: $B$-Matrix
> Let $B=\{\vec{v_1},\ldots,\vec{v_n}\}$ be a basis for $\mathbb{R}^n$ and let $L:\mathbb{R}^n\to\mathbb{R}^n$ be a linear operator. The **B-matrix** of $L$ is defined to be
$$
[L]_B=[[L(\vec{v_1})]_B\ldots [L(\vec{v_n})]_B]
$$
> It satisfies $[L(\vec{x})]_B = [L]_B[\vec{x}]_B$

Exercise: Determine $[L]_c$ where
$$
L(\begin{bmatrix}
x_1 \\
x_2
\end{bmatrix}) = \begin{bmatrix}
x_1+2x_2 \\
2x_1+x_2
\end{bmatrix}
$$
Solution:
$$
c=\{\vec{c_1},\vec{c_2}\} = \{\begin{bmatrix}
1 \\
1
\end{bmatrix}, \begin{bmatrix}
1 \\
-1
\end{bmatrix} \}
$$
$$
L(\vec{c_1})=L(\begin{bmatrix}
1 \\
1
\end{bmatrix}) = \begin{bmatrix}
3 \\
3
\end{bmatrix} = 3\begin{bmatrix}
1 \\
1
\end{bmatrix} + 0 \begin{bmatrix}
1 \\
-1
\end{bmatrix}
$$
$$
L(\vec{c_2}) = L(\begin{bmatrix}
1 \\
-1
\end{bmatrix}) = \begin{bmatrix}
-1 \\
1
\end{bmatrix} = 0\begin{bmatrix}
1 \\
1
\end{bmatrix} - 1 \begin{bmatrix}
1 \\
-1
\end{bmatrix}
$$
Therefore,
$$
[L]_c=[[L(\vec{c_1})]_c [L(\vec{c_2})]_c] = \begin{bmatrix}
3&0 \\
0&-1
\end{bmatrix}
$$
> Definition: Diagonal Matrix
> An $n\times n$ matrix $D$ is said to be a **diagonal matrix** if $d_{ij}=0$ for all $i\neq0$. We denote a diagonal matrix by
$$
diag(d_{11},d_{22},\ldots,d_{nn})
$$

Consider
$$
[L]_B=diag(1,2,0) = \begin{bmatrix}
1&0&0 \\
0&2&0 \\
0&0&0
\end{bmatrix}
$$
$$
b_1\vec{v_1}+b_2\vec{v_2}+b_3\vec{v_3}\to b_1\vec{v_1}+2b_2v_2+0\vec{v_3}
$$
What is $Range(L)=Col([L])$? $Range(L)=Span\{\vec{v_1},\vec{v_2}\}$
What is $Ker(L)=Null([L])$? $Ker(L)=Span\{\vec{v_3}\}$

> Definition: Similar Matrices
>  If $A$ and $B$ are $n\times n$ matrices such that $P^{-1}AP=B$ for some invertible matrix $P,$ then $A$ is said to be **similar** to $B$

> Theorem:
> If $A$ is similar to $B$, then
1. $rank(A)=rank(B)$
2. $\det(A)=\det(B)$
3. $tr(A)=tr(B)$
## 6.2 | Eigenvalues and Eigenvectors
### Eigenvalues / Eigenvectors
Intro: A geometrically natural basis
$$
L(\begin{bmatrix}
x_1 \\
x_2
\end{bmatrix}) = \begin{bmatrix}
\frac{11}{5}x_1 - \frac{2}{5}x_2 \\
-\frac{2}{5}x_1 + \frac{14}{5}x_2
\end{bmatrix}, B = \{\begin{bmatrix}
2 \\
1
\end{bmatrix}, \begin{bmatrix}
-1 \\
2
\end{bmatrix}\}
$$
If $L(\vec{b_1})=2\vec{b_1}, L(\vec{b_2})=3\vec{b_2}$, then
$$
[L(\vec{b_1})]_B = \begin{bmatrix}
2 \\
0
\end{bmatrix}, [L(\vec{b_2})])B = \begin{bmatrix}
0 \\
3
\end{bmatrix}
$$
and therefore, 
$$
[L]_B=
\begin{bmatrix}
2&0 \\
0&3
\end{bmatrix}
$$
$$
[\vec{x}]_B= \begin{bmatrix}
a \\
b
\end{bmatrix} \implies [L(\vec{x})]_B = \begin{bmatrix}
2&0 \\
0&3
\end{bmatrix} \begin{bmatrix}
a \\
b
\end{bmatrix}
$$
> Definition: Eigenvalue, eigenvector
> Let $A$ be an $n\times n$ matrix. 
> A scalar $\lambda$ is called the **eigenvalue** of $A$ is there exists a vector $\vec{v}\neq\vec{0}$ such that $A\vec{v}=\lambda\vec{v}$.
> A vector $\vec{v}\neq0$ satisfying $A\vec{v}=\lambda\vec{v}$ is called an **eigenvector** of $A$ corresponding to $\lambda$
> The pair $(\lambda, \vec{v})$ is called an **eigenpair**

Example
$$
A= \begin{bmatrix}
\frac{11}{5} & -\frac{2}{5} \\
-\frac{2}{5} & \frac{14}{5}
\end{bmatrix}
$$
$$
A \begin{bmatrix}
2 \\
1
\end{bmatrix} = \begin{bmatrix}
4 \\
2
\end{bmatrix} = 2 \begin{bmatrix}
2 \\
1
\end{bmatrix}
$$
$$
A \begin{bmatrix}
-1 \\
2
\end{bmatrix} = \begin{bmatrix}
-3 \\
6
\end{bmatrix} = 3 \begin{bmatrix}
-1 \\
2
\end{bmatrix}
$$
$$
\vec{v_1}= \begin{bmatrix}
2 \\
1
\end{bmatrix} \text{ is an eigenvector of A with eigenvalue }\lambda_1=2
$$
$$
\vec{v_2}= \begin{bmatrix}
-1 \\
2
\end{bmatrix} \text{ is an eigenvector of A with eigenvalue }\lambda_2=3
$$

> Definition: Characteristic Polynomial
> Let $A$ be an $n\times n$ matrix. The **characteristic polynomial** of $A$ is the $n$-th degree polynomial
$$
C_A(\lambda) = \det(A-\lambda I)
$$
> To denote this, we write $C(\lambda)$.

> Theorem
> A scalar $\lambda$ is an eigenvalue of an $n\times n$ matrix $A$ if and only if $C_A(\lambda)=0$

Example: Find the corresponding subspaces
For $\lambda_1=10$, we find all nonzero solutions to the system $(A-10I)\vec{x}=\vec{0}$.
$$
A-10I = \begin{bmatrix}
11&-2 \\
-2&14 \\
\end{bmatrix} - \begin{bmatrix}
10&0 \\
0&10
\end{bmatrix} = \begin{bmatrix}
1&-2 \\
-2&4
\end{bmatrix} \sim \begin{bmatrix}
1&-2 \\
0&0
\end{bmatrix}
$$
Thus, the general solution is 
$$
\vec{x}=s \begin{bmatrix}
2 \\
1
\end{bmatrix}, s\in\mathbb{R} \implies 
\{s\begin{bmatrix}
2 \\
1
\end{bmatrix}, s\in\mathbb{R}, s\neq0\}
$$
For $\lambda_2=15$, we do the same with $(A-15I)\vec{x}=\vec{0}$.
$$
A-15I= \begin{bmatrix}
11&-2 \\
-2&14
\end{bmatrix} - \begin{bmatrix}
15&0 \\
0&15
\end{bmatrix} = \begin{bmatrix}
-4&-2 \\
-2&-1
\end{bmatrix} \sim \begin{bmatrix}
1& \frac{1}{2} \\
0&0
\end{bmatrix}
$$
Thus, the general solution is
$$
\vec{x}=t \begin{bmatrix}
-\frac{1}{2} \\
1
\end{bmatrix} \implies -2\{\begin{bmatrix}
-1 \\
2
\end{bmatrix}, t\in\mathbb{R}, t\neq0\}
$$
### Eigenspaces
> Definition: Eigenspace
> Let $A$ be an $n\times n$ matrix with eigenvalue $\lambda$. We call the nullspace of $A-\lambda I$ the **eigenspace** of $\lambda.$ The eigenspace is denoted $E_\lambda$.

> Theorem
> If $A$ is an $n\times n$ upper or lower triangular matrix, then the eigenvalues of $A$ are the diagonal entries of $A$.

> Definition: Multiplicity
> Let $A$ be an $n\times n$ matrix with eigenvalue $\lambda_1$.
> The **algebraic multiplicity** of $\lambda_1$, denote $a_{\lambda 1}$, is the number of times that $\lambda_1$ is a root of the characteristic polynomial $C(\lambda)$. That is,
$$
C(\lambda)=(\lambda-\lambda_1)^kC_1(\lambda)\text{, where } C_1(\lambda_1)\neq0
$$
> The **geometric multiplicity** of $\lambda$, denoted $g_{\lambda 1}$, is the dimension of its eigenspace. That is,
$$
g_{\lambda 1} = \dim(E_{\lambda 1})
$$

> Lemma: 
> Let $A,B$ be similar matrices. Then, $A$ and $B$ have the same characteristic polynomial, and hence the same eigenvalues.

> Theorem:
> If $A$ is an $n\times n$ matrix with eigenvalue $\lambda_1$, then $1\leq g_{\lambda 1} \leq a_{\lambda 1}$
## 6.3 | Diagonalization
> Definition: Diagonalizable
> An $n\times n$ matrix $A\in M_{n\times n}(\mathbb{R})$ is said to be **diagonalizable** if $A$ is similar to a diagonal matrix $D\in M_{n\times n}(\mathbb{R})$. If $P^{-1}AP=D$, then we say that $P$ **diagonalizes** A.

> Theorem: Diagonalization Theorem
> An $n\times n$ matrix $A$ is diagonalizable over $\mathbb{R}$ if and only if there exists a basis $\{\vec{v_1}\cdots\vec{v_n}\}$ for $\mathbb{R}^n$ for eigenvectors of $A$.

> Theorem:
> If $A$ is an $n\times n$ matrix with eigenpairs $(\lambda_1, \vec{v_1}),\cdots,(\lambda_k,\vec{v_k})$, where $\lambda_i\neq\lambda_j$, for $i\neq j$, then $\{\vec{v_1},\cdots,\vec{v_k}\}$ is linearly independent.

> Theorem:
> If $A$ is an $n\times n$ matrix with distinct eigenvalues $\lambda_1,\cdots,\lambda_k$ and $B_i=\{\vec{v_{i,1}},\cdots,\vec{v_1}_{i,g\lambda_i}\}$ is a basis for the eigenspace of $\lambda_i$ for $1\leq i\leq k$, then $B_1\cup B_2\cup\cdots\cup B_k$ is a linearly independent set.

> Theorem: Diagonalizability Test
> If $A$ is an $n\times n$ matrix who's characteristic polynomial factors as
$$
C_A(\lambda)=(\lambda-\lambda_1)^{a\lambda_1}\cdots(\lambda-\lambda_k)^{a\lambda_k}
$$
. where $\lambda_1,\cdots,\lambda_k$ are the distinct eigenvalues of $A$, then $A$ is diagonalizable if and only if $g_{\lambda_i}=a_{\lambda_i}$ for $1\leq i\leq k$.

> Theorem:
> If $A$ is an $n\times n$ matrix with $n$ distinct eigenvalues, then $A$ is diagonalizable.

> ALGORITHM: Diagonalize / show not diagonalizable
> 1. Find and factor the characteristic polynomial $C(\lambda)=\det(A-\lambda I)$
> 2. Let $\lambda_1,\cdots\lambda_n$ denote the $n$ roots of $C(\lambda)$ repeated according to multiplicity. If any of these eigenvalues aren't real, then A is not diagonalizable over $\mathbb{R}$.
> 3. Find a basis for the eigenspace of each $\lambda_i$ by finding a basis for the nullspace of $A-\lambda_iI$
> 4. If $g_{\lambda_i}<a_{\lambda_i}$ for any $\lambda_i$, then $A$ is not diagonalizable. 
> Otherwise, form a basis $\{\vec{v_i},\cdots,\vec{v_n}\}$ for $\mathbb{R}^n$ eigenvectors of $A$. 
> Let $P=[\vec{v_1}\cdots\vec{v_n}]$. Then $P^{-1}AP=diag(\lambda_1\cdots\lambda_n)$ where $\lambda_i$ is an eigenvalue corresponding to the eigenvector $\vec{v_i}$ for $1\leq i\leq n$

Example: Show that $A$ is not diagonalizable
$$
a=\begin{bmatrix}
1&1 \\
0&1
\end{bmatrix}
$$
Solution:
$$
0=C(\lambda)= | \begin{bmatrix}
1-\lambda&1 \\
0&1-\lambda
\end{bmatrix} | = (\lambda-I)^2
$$
Hence, $\lambda_1=1$ is the only eigenvalue and $a_{\lambda_1}=2$. We then get
$$
A-\lambda_1 I= \begin{bmatrix}
0&1 \\
0&0
\end{bmatrix}
$$
So, a basis for $E_{\lambda_1}$ is $\{[1,0]\}$. Thus, $A$ is not diagonalizable because $g_{\lambda_1}=1<a_{\lambda_1}$

> Fact: 
> IF $\lambda$ is an eigenvalue of $A$, then it must be the case that $(A-\lambda I)\vec{x}=\vec{0}$ has infinitely many solutions. So if you're determining an eigenspace for a supposed eigenvalue $\lambda$ if $A$, and during row reduction you find that $A-\lambda I\sim I$, STOP!

> Theorem: USEFUL FOR CHECKING EIGENVALUES
> If $\lambda_1,\cdots,\lambda_{n}$ are the $n$ eigenvalues of an $n\times n$ matrix $A$ (repeated according to algebraic multiplicity), then
$$
\det(A)=\lambda_1\cdots\lambda_n\text{ and } tr(A)=\lambda_1+\cdots+\lambda_n
$$
## 6.4 | Powers of Matrices
> Theorem: 
> Let $A$ be an $n\times n$ matrix. If there exists a matrix $P$ and diagonal matrix $D$ such that $P^{-1}AP=D$, then
$$
A^k=PD^kP^{-1}
$$

Example: Calculate $A^{200}$, given
$$
A=\begin{bmatrix}
-2&2 \\
-3&5
\end{bmatrix}
$$
Solution: 
$$
0=\det(A-\lambda I) = \det \begin{bmatrix}
-2-\lambda&2 \\
-3&5-\lambda
\end{bmatrix} = \lambda^2-3\lambda-4 = (\lambda+1)(\lambda-4)
$$
Thus, the eigenvalues of $A$ are $\lambda_1=-1$ and $\lambda_2=4$
$$
\lambda_1=-1\implies A-\lambda_1  = \begin{bmatrix}
-1&2 \\
-3&6
\end{bmatrix}\sim \begin{bmatrix}
1&-2 \\
0&0 \\
\end{bmatrix} \implies B=\{\begin{bmatrix}
2 \\
1
\end{bmatrix}\}
$$
$$
\lambda_2=4\implies A-\lambda_2 I = \begin{bmatrix}
-6&2 \\
-3&1
\end{bmatrix}\sim \begin{bmatrix}
1& \frac{1}{3} \\
0&0
\end{bmatrix} \implies B = \{\begin{bmatrix}
1 \\
3
\end{bmatrix}\}
$$
Thus, we have that
$$
P = \begin{bmatrix}
2&1 \\
1&2
\end{bmatrix}, D = \begin{bmatrix}
-1&0 \\
0&4
\end{bmatrix} \implies P^{-1} = \frac{1}{5}\begin{bmatrix}
3&-1 \\
-1&2
\end{bmatrix}
$$
Hence,
$$
\begin{align}
A^{200}&=PD^{200}P^{-1} = \begin{bmatrix}
2&1 \\
1&3
\end{bmatrix} \begin{bmatrix}
1&0 \\
0&4^{200}
\end{bmatrix} \frac{1}{5} \begin{bmatrix}
3&-1 \\
-1&2
\end{bmatrix} \\
&=\frac{1}{5} \begin{bmatrix}
6-4^{200}& -2+2\cdot4^{200} \\
3-3\cdot4^{200}&-1+6\cdot4^{200}
\end{bmatrix}
\end{align}
$$
"operations on diagonal matrices are easy!" - carrie knoll