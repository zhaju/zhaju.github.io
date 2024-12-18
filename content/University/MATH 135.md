# 0 | Overview
Course Goals
- Understand the precise meaning of mathematical statements
- Learn to communicate effectively
- Get better at writing mathematical proofs
- Become comfortable with arithmetic and algebra over some common systems (eg. the integers modulo n)
# 1 | Intro to Mathematical Language 
## 1.1 Intro to Statements and Proofs
Definition
- Statement = True or False
- Proof = Rigorous argument establishing the truth of a statement with no doubt

> Ex: Can you convince someone else that your answer is correct?
> 1. For every positive integer $n, n^2+1$ is not a perfect square
> 2. For every positive integer $n, n^2+13$ is not a perfect square

Proof 1: Squares must differ by $2n+1$
Proof 2: Counterexample: $7^2-6^2=13$

Sets
- Set = a well-defined, unordered collection of distinct objects (elements / members)
	- Finite Sets = you can list all elements
	- Infinite Sets = must be specified ($\mathbb{N}$=natural, $\mathbb{Z}$=integers, $\mathbb{Q}$=rational, $\mathbb{R}$=real)
- Membership
	- $\in$ = belongs
	- $\notin$ = doesn't belong

Statement or not? (09/06)
- Statement = T/F
- Open Sentence = true dependent on variable
- Others: question, definition, expression

Building a statement
- Substitution: Giving a value to a variable
- Quantification: $=, >, <$

> Ex: For all integers $x, x^2-x\geq0$
## 1.2 | Domains and Quantifiers

Statements have four parts:
1. Quantifier
2. Variable
3. Domain 
4. Property 

Quantifiers:
- Universal: $\forall$
- Existential: $\exists$
## 1.3 | Negation and Nesting
Negation:
- Not: $\neg$

> Ex: Negation
$$
\neg(\forall n\in\mathbb{Z}, n\leq n^2) = \exists n\in\mathbb{Z}, n>n^2
$$
> Ex: Negating universal statements
$$
\neg(\forall x\in S, P(x)) = \exists x\in S, \neg P(x)
$$
> Ex: Negating existential statements
$$
\neg(\exists x\in S, P(x)) = \forall x\in S, \neg P(x)
$$

> Exercises
1. There is a real number r such that $r^2+1=0$
	1. $\exists r\in\mathbb{R}, r^2+1=0$
	2. $\forall r\in\mathbb{R}, r^2+1\neq0$
2. All natural numbers have an absolute value of at least 1
	1. $\forall n\in\mathbb{N}, |n|\geq1$
	2. $\exists n\in\mathbb{N}, |n|<1$
3. Every positive integer is even
	1. $\forall n\in\mathbb{Z}, \exists k\in\mathbb{Z}, n=2k$
	2. $\exists n\in\mathbb{Z}, \forall k\in\mathbb{Z}, n\neq2k$
4. Write each statement symbolically and determine if T/F
	1. For all real numbers x and y, $x^3-y^3=1$
		1. $\forall x,y\in\mathbb{Z}, x^3-y^3=1$
		2. False (0,0)
	2. There exist real numbers x and y such that $x^3-y^3=1$
		1. $\exists x,y\in\mathbb{R}, x^3-y^3=1$
		2. True (1,0)
	3. For all real numbers x, there exists a real number y such that $x^3-y^3=1$
		1. $\forall x\in\mathbb{R}, \exists  y\in\mathbb{R}, x^3-y^3=1$
		2. True 
	4. There exists a real number x such that for all real numbers y, $x^3-y^3=1$
		1. $\exists x\in\mathbb{R}, \forall y\in\mathbb{R}, x^3-y^3=1$
		2. Neg: $\forall x\in\mathbb{R}, \exists y\in\mathbb{R}, x^3-y^3\neq1$
		3. False (y=x)

Note about nested quantifiers
- If quantifiers are different types, order matters!
- ex: "there exists an x below every y" VS "every y has an x below it"
# 2 | Logical Analysis of Mathematical Statements
## 2.1 | Logical Operators

Logical Connectives / Logical Operators
- AND = $\land$
- OR = $\lor$
- NEG = $\neg$
- $IMPLIES$ = $\implies$

Truth Tables

Negation ("not")

| A   | $\neg A$ |
| --- | -------- |
| T   | F        |
| F   | T        |
Conjugation ("and")

| A   | B   | $A\land B$ |
| --- | --- | ---------- |
| T   | T   | T          |
| T   | F   | F          |
| F   | T   | F          |
| F   | F   | F          |
Disjunction ("or")

| A   | B   | $A\lor B$ |
| --- | --- | --------- |
| T   | T   | T         |
| T   | F   | T         |
| F   | T   | T         |
| F   | F   | F         |
> Logical Equivalence $(\equiv)$ = two statements with the same truth values

> De Morgan's Laws (DML):
$$
\neg(A\land B)\equiv(\neg A)\lor(\neg B))
$$
$$
\neg(A\lor B)\equiv(\neg A)\land(\neg B)
$$

> Ex 5: Prove DML with truth tables

| A   | B   | $\neg A$ | $\neg B$ | $(\neg A)\lor(\neg B)$ | $A\land B$ | $\neg(A\land B)$ |
| --- | --- | -------- | -------- | ---------------------- | ---------- | ---------------- |
| T   | T   | F        | F        | F                      | T          | F                |
| T   | F   | F        | T        | T                      | T          | T                |
| F   | T   | T        | F        | T                      | T          | T                |
| F   | F   | T        | T        | T                      | F          | T                |
Columns of $(\neg A)\lor(\neg B)$ and $\neg(A\land B)$ are equivalent

> Ex: Negate the following:

Statement; For all integers $x, x>0.5$ or $x<0.5$
$$
\exists x\in\mathbb{Z}, x\leq0.5\land x\geq0.5
$$
Statement; There exists a real number x such that $x>0$ and $x^3-x<0$\
$$
\forall x \in\mathbb{Z}, x\leq0 \lor x^3-x\geq0
$$
> Other Laws
- Double Negation Law:
	- $\neg(\neg A)\equiv A$
- Commutative Laws
	- $A\land B\equiv B\land A$
	- $A\lor B\equiv B\lor A$
- Associative Laws
	- $A\land(B\land C)\equiv(A\land B)\land C)$
	- $A\lor(B\lor C)\equiv(A\lor B)\lor C)$
-  Distributive Laws
	- $A\land(B\lor C)\equiv(A\land B)\lor(A\land C)$
	- $A\lor(B\land C)\equiv(A\lor B)\land(B\lor C)$

Logical Equivalence 
- Is transitive

> Ex 7: Prove
$$
\neg(A\land(\neg B))\equiv B\lor (\neg A)
$$

Proof with logical equivalence laws:
$$
\begin{align*}
\neg A\lor\neg(\neg B))&\equiv B\lor(\neg A) && \text{(De Morgan's Laws)}\\
\neg A\lor B &\equiv B\lor(\neg A) && \text{(Double Negative)}\\
B\lor(\neg A)&\equiv B\lor(\neg A) && \text{(Commutative Laws)}
\end{align*}
$$
## 2.2 | Implication

Implication:
$$
P\implies Q
$$
Inverse
$$
\neg P\implies Q
$$
Converse
$$
Q\implies P
$$
Contrapositive 
$$
\neg Q\implies \neg P
$$
Converse of Contrapositive = Contrapositive of Converse

> Truth Table: Implication

| A   | B   | $A\implies B$ |
| --- | --- | ------------- |
| T   | T   | T             |
| T   | F   | F             |
| F   | T   | T             |
| F   | F   | T             |
> Remark 2.4: The negation of an implication is AND
$$
\neg(A\implies B)\equiv(A\land\neg B)
$$

> Truth Table: If and only if (iff) - note this is the intersection of implication and converse

| A   | B   | $A\iff B$ |
| --- | --- | --------- |
| T   | T   | T         |
| T   | F   | F         |
| F   | T   | F         |
| F   | F   | T         |
# 3 | Proving Mathematical Statements
## 3.1 | Universally Quantified Statements

Direct Proof: Proof of the given statement without any logical tricks (contradiction, contrapositive)
Don't assume the statement is true

UNIVERSALLY QUANTIFIED STATEMENTS
$$
\forall x\in S, P(x)
$$
- Consider a general representative x from S, do not work with a particular element
- Argue (x) is true of this representative x
- You need a general argument that works for all x in S. This means you can only use properties common to all objects in S.
- Sometimes it is helpful to use casework, which allows you to make more assumptions. Make sure your cases cover all possible objects in S.

> Ex 1: Prove the following statements

1. For all real x and y, $x^4+x^2y+y^2\geq5x^2y-3y^2$

Proof: Let $x,y$ be real numbers. Then the following inequalities are equivalent.
$$
\begin{align*}
x^4-4x^2y+4y^2&\geq5x^2y-3y^2\\
x^4-4x^2y+4y^2&\geq0\\
(x^2-2y)^2&\geq0
\end{align*}
$$
2. For all real x and y, $max(x,y)= \frac{x+y+|x-y|}{2}$
Case 1: $x\geq y$
$$
\frac{x+y+x-y}{2}=\frac{2x}{2}=x=max(x,y)
$$
Case 2: $y<x$
$$
\frac{x+y-x+y}{2}=\frac{2y}{2}=y=max(x,y)
$$
3. For all real x, $|x-3|+2|x+2|\geq5$
Let x be a real number. Then x satisfies one of the following:
Case 1: $x\leq-2$
$$
-x+3-2x-4\geq5
$$
$$
-3x\geq6
$$
$$
x\leq2
$$
Case 2: $-2<x\leq3$
$$
-x+3+2x+4\geq5
$$
$$
x+7\geq5
$$
$$
(-2)+7\geq5
$$
Case 3: $x>3$
$$
x-3+2x+4\geq5
$$
$$
3x+1\geq5
$$
$$
3(3)+1\geq10
$$
Therefore, in each case we have $|x-3|+2|x+2|\geq5$ as needed.

> Ex 2: For each of the following statements, determine whether the statement is T/F, then prove/disprove

1. $\forall x\in\mathbb{R}, (x^2-1)^2>0$
	1. counterexample: x=1
2. $\forall x\in\mathbb{R}, \exists y\in\mathbb{R}, x>y$
	1. disproof: pick y=x-1
## 3.2 | Existentially Quantified Statements

PROVING EXISTENTIALLY QUANTIFIED STATEMENTS
$$
\exists x\in S, P(x)
$$
- Construct an object x and show that it works. This means verify x is a member of S and has property P(x)
- If it is possible to give x explicitly, then do so
- You are allowed to include details about how you found x (not necessary)
- TRIAL AND ERROR IS VALID

> Ex 2.1: There exists an integer $m$ such that 
$$
\frac{m-7}{2m=4}=5
$$

Proof: Let $m=-3$. Then $m$ is an integer, and when $m=-3$ we have:
$$
\frac{m-7}{2m+4}=\frac{(-3)-7}{2(3)+4}=\frac{-10}{2}=5
$$
> Ex 2.2: Statement: There exists a perfect square $k$ such that 
$$
k^2-\frac{31}{2}k=8
$$

Proof: Let $k=16$. We note that $k=16$ is a perfect square ($16=4^2$) and verify that when $k=16$ we have
$$
k^2-\frac{31}{2}k=(16)^2-\frac{31}{2}(16)=256-248=8
$$
## 3.3 | Statements Involving Implication

PROVING IMPLICATIONS
$$
A\implies B
$$
- Pretend we know A is true
- Use that fact to show that B is true
- Do not assume that B is true

> Ex 3.1: For all integers m, if $m^5$ is a perfect square, then $9m^{19}$ is a perfect square

Proof: Assume that $m^5$ is a perfect square. This means we can write $m^5=k^2$ for some $k\in\mathbb{Z}$.
It follows that 
$$
9m^{19}=9(m^5)^3m^4=9(k^2)^3m^4=3^2(k^3)^2(m^2)^2=(2k^3m^2)^2
$$
Since $3k^3m^2\in\mathbb{Z}$, we have shown that $9m^19$ is a perfect square.

> Ex 3.2: For all real numbers x, if $2^{2x}$ is an odd integer, then $2^{2x+3}+6$ is an even integer.

Proof: Let x be a real number. Assume that $2^{2x}$ is an odd integer. This means that $2^{2x}=2k+1$ for some integer k. 
It follows that 
$$
2^{2x+3}+6=2^32^{2x}+6=8(2k+1)+6=16k+8+6=16k+14=2(8k+7)
$$
Since $(8k+7)\in\mathbb{Z}$, we have shown that $2^{2x+3}+6$ is even.
## 3.4 | Divisibility
## 3.4.0 | Math Words
Math Words
- Definitions
- Propositions
- Theorems: deeper proposition
- Lemmas: used to prove a theorem
- Corollaries: side-effect of a theorem
## 3.4.1 | Definition of divisibility
The Integers
- The Set: $Z$
- The operations: Addition and Multiplication
- The ordering: $\ldots<-2<-2<0<1<2<\ldots$

Notes:
- Subtraction is the addition of a negative
- Given two integers, we can multiply, add, or subtract them another integer
- Instead of performing divisions in $\mathbb{Z}$, we talk about the notion of DIVISIBILITY

> Definition (Divisibility): 
> For $m,n\in\mathbb{Z}$, we say $m$ divides $n$ or $m|n$ if there exists an integer $k$ such that $n=km$
- We use $\nmid$ `\nmid` for non-divisibility

Examples
- For all integers $m,m|0$
- For all non-zero integers $n, 0\nmid n$

> Ex: Assuming $14|n$, prove $7|n$
- $n=14k=7(2k)$
- $\exists l, n=7l$
## 3.4.2 | Results about divisibility / TD & DIC

> Proposition (Transitivity of divisibility / TD):
> For all integers $a,b,c$, if $a|b$ and $b|c$ then $a|c$

> Proposition: For all integers $a,b,c$, if $a|b$ or $a|c$, then $a|bc$

Cool thing:
$$
(A\lor B)\implies C\equiv(A\implies C)\land(B\implies C))
$$
> Proposition (Divisibility of Integer Combinations):
> For all integers $a,b,c$, if $a|b$ and $a|c$, then for all integers $a|(bx+cy)$
$$
\forall a,b,c\in\mathbb{Z}, (a|b \land a|c)\implies(\forall x,y\in\mathbb{Z}, a|(bx+cy))
$$
> Exercise 2: Similar but different statements

For all $a,b,c$, if $a|(bx+cy)$ for all $x,y,$ then $a|b$ and $a|c$ - TRUE
$$
\forall a,b,c\in\mathbb{Z}, (\forall x,y\in\mathbb{Z}, a|(bx+cy))\implies(a|b \land a|c)
$$
For all $a,b,c$ and for all $x,y$, if $a|(bx+cy)$ then $a|b$ and $a|c$ - FALSE
$$
\forall a,b,c\in\mathbb{Z}, \forall x,y\in\mathbb{Z}, a|(bx+cy)\implies(a|b\land a|c)
$$
CAUTION: It is not true to say that $a|(b+c)\implies a|b$
## 3.5 | Proof by Contrapositive
$$
\text{Proving } A\implies B \text{ by proving } \neg B\implies\neg A
$$
> Example: $\forall m\in\mathbb{Z}$, if $m^2+4x-2$ is odd, then $m$ is odd.

Proof: We prove the contrapositive: If $m$ is even, then $m^2+4x-2$ is even.
Let $m=2k$ $$
\begin{align*}
m^2+4x-2&=(2k)^2+4(2k)-2\\
&=4k^2+8k-2\\
&=2(k^2+4k-2)
\end{align*}
$$Thus, $m^2+4x-2$ is even, proving the contrapositive and thus proving the statement.

Cool Thing: Method of Elimination
$$
A\implies(B\lor C)\equiv(A\land(\neg B))\implies C
$$
## 3.6 | Proof by Contradiction

Proof by Contradiction:
- A statement A must be either T or F. If we can prove that A cannot be False, we prove that it is true.
- Assume that A is false, then deduce something that we know to be untrue

CONTRAPOSITIVE
- Only used to establish the truth of an implication $A\implies B$
- May be a good option if you notice that $\neg B$ is a "more useful" hypothesis to work with than the given hypothesis A
	- Eg: $\neg$(M is odd) vs $m^2+4m-2$ is odd

CONTRADICTION
- Used to prove more general statements A
- Assume., for a contradiction that $\neg$A is true
- Look for a contradiction (often combining two contradictory statements)

> Exercise 2.1: For all $a,b\in\mathbb{Z}$, if $a\leq2$ then $a\nmid b$ or $a\nmid (b+1)$

Proof:
Let $a,b\in\mathbb{Z}$, we will prove the contrapositive:
If $a|b$ and $a|(b+1)$ then $a<2$

Assume that $a|b and a|(b+1)$. By divisibility of integer combinations (DIC), we have
$$
a|(b\cdot(-1)+(b+1)\cdot1)
$$
$$
a|1
$$
This means that $a=1,-1$, so $a<2$ as needed.
# 4 | Induction
## 4.1 | Notation for Summation, Products, and Recurrences
## 4.2 | Proof by Induction
Weak Induction:
1. Prove $P(1)$
2. $\forall k\in\mathbb{N}, P(k)\implies P(k+1)$
Then we can conclude $\forall n\in\mathbb{N}, P(n)$
## 4.3 | Proof by Strong Induction
Strong Induction:
Let $P(n)$ be an open sentence about a natural number n.
1. $P(1)$
2. $\forall k\in\mathbb{N},  P(1)\land P(2)\land\cdots P(k)\implies P(k+1)$
Then $P(n)$ is true for all $n\in\mathbb{N}$

> Exercise 8: 
- $x_1=4$
- $x_2=68$
- $x_m=2x_{m-1}+15x_{m-2}$ for $m>3$
We show that the terms also satisfy $x_n=2(-3)^n+10\cdot5^{n-1}$

Proof: Let $P(n)$ be the open sentence $x_n=2(-3)^n+10\cdot5^{n-1}$
We prove that $P(n)$ is true for all $n\in\mathbb{N}$ by induction on n
BASE CASES: Verify $P(1)$ and $P(2)$
We are given that $x_1=4$ and $x_2=68$. We verify that
$$
2(-3)^1+50
$$
INDUCTIVE STEP: Let $k$ be an arbitrary integer with $k\geq2$
Assume $P(1)\land P(2)\cdots\land P(k)$
This means we should assume that $x_i=2(-3)^i+10(5)^{i-1}$ for all integers $i$ in the range $1\leq i\leq k$
Since $k\geq2$, we have $k+1\geq3$ and so we get the following
$$
\begin{align*}
x_{k+1}&=2x_k+15x_{k+1} &&\text{sequence definition} \\
&= 2[2(-3)^k+10(5)^{k-1}]+15[2\cdot(-3)^{k-1}+10(5)^{k-2}] &&\text{inductive hypothesis} \\
&= 4(-3)^k+20(5)^{k-1}+30^{k-1}+150\cdot(5)^k && \text{expanding} \\
&= 4(-3)^k+4(5)^k+(-10)\cdot(-3)^k+6(5)^k && \text{exponent laws} \\
&= (-6)(-3)^k+10(5)^k && \text{grouping} \\
&= 2(-3)^{k+1}+10(5)^k &&\text{exponent laws}
\end{align*}
$$
By strong induction, the statement is true.
# 5 | Sets
## 5.1 | Set Definitions
Definition: A set is a collection of elements

Examples
1. $\mathbb{Z}={\ldots-2,-1,0,1,2,\ldots}$
2. $\mathbb{N}={1,2,\ldots}$
3. $\mathbb{R}$
4. $\mathbb{Q}=\set{a/b\in\mathbb{R}:a\in\mathbb{Z}\land b\in\mathbb{Z}\land b\neq0}$ - called the universe of discourse
5. $\set{}=\emptyset=$ empty set
	1. NOTE: $\set{\emptyset}$ is not the empty set, it's a set with one element (the empty set)
## 5.2 | Set Problems
> Example: In set notation, write the set of positive integer multiples of 7 less than 1000 
$$
\set{n\in\mathbb{N}:n<1000\land7|n}
$$
$$
\set{7k:k\in\mathbb{N}\land k\leq142}
$$
- st = : = "such that"

> Set of even numbers between 5 and 14
$$
\set{6,8,10,12,14} \set{n\in\mathbb{N}:5\leq n\leq14\land2|n}
$$
> All odd perfect squares
$$
\set{(2k+1)^2:k\in\mathbb{N}\lor k=0}
$$
> Sets of three integers which are the side lengths of a (non trivial) triangle
$$
\set{(a,b,c):a,b,c\in\mathbb{N}\land a<b+c \land b<a+c \land c<a+b}
$$
> All points on a circle of radius 8 centered at the origin
$$
\set{(x,y):x,y\in\mathbb{R}\land x^2+y^2=8^2}
$$
## 5.3 | Set Operations
Let S and T be sets. Define:
1. $\# S = |S|$ = size / cardinality of set S
2. $S\cup T=\set{x:x\in S\land x\in T}$ (Union)
3. $S\cap T=\set{x:x\in S\land x\in T}$ (Intersection)
4. $S-T={x\in S:x\notin T}$ (Set difference)
5. $\overline{S}$ or $S^c$ (With respect to universe U) the compliment of S, that is
$$
S^c=\set{x\in U:x\notin S}=U-S
$$
6. $S\times T=\set{(x,y):s\in S\land y\in T}$ (Cartesian Product)

> Example: $(1,2)\in\mathbb{Z}\times\mathbb{Z}, (2,1)\in\mathbb{Z}\times\mathbb{Z}$, but $(1,2)\neq(2,1)$

NOTE: $\mathbb(Z)\times\mathbb(Z)$ and $\set{(n,n):n\in\mathbb{Z}}$ ARE DIFFERENT SETS

> Example:
$$
\mathbb{Z}=\set{m\in\mathbb{Z}:2|m}\cup{2k+1:k\in\mathbb{Z}}
$$
$$
\emptyset={m\in\mathbb{Z}:2|m}\cap{2k+1:k\in\mathbb{Z}}
$$
## 5.4 | Relating Sets
Let S and T be sets. Then
1. $S\subset T$: S is a subset of T - every element of S is an element of T
2. $S\subsetneq T$: S is a proper / strict subset of T - every element of S is an element of T and some element of T is not in S
3. $S\supset T$: S contains / is a superset of T - every element of t is an element of S.
4. $S\supsetneq T$: S properly / strictly contains T. Every element of T is an element of S and some element of S is not in T.

> Definition: $S=T$ means $S\subset T$ and $T\subset S$ (is both superset and subset)

Example: $\set{1,2}=\set{2,1}$

> Question: Prove $\set{n\in\mathbb{N}:4|(n+1)}\subset{2k+1:k\in\mathbb{Z}}$

- Let $m\in\set{n\in\mathbb{N}:4(n+1)}$. 
- Then $4|(m+1)$
- Thus $\exists l \in\mathbb{Z}$ such that $4l=m+1$
- Now $m=2(2l)-1=2(2l)-2+2-1=2(2l-1)+1$
- Hence $m\in\set{2k+1:k\in\mathbb{Z}}$

> Question: Show $s=T$ if and only if $s\cap T=S\cup T$

- Suppose S=T. To show $S\cap T=S\cup T$, we need to show that $S\cap T\subset S\cup T$ and that $S\cap T\supset S\cup T$ 
- Suppose $x\in S\cap T$. Then $x\in S$ and $s\in T$. Hence $x\in S\cup T$
- Suppose that $s\in S\cup T$. Then $x\in S$ or $s\in T$. Since S=T we have in either case that $x\in S$ and $x\in T$. Thus $x\in S\cap T$. This shows that $S\cup T=S\cap T$ and completes the forward direction

Backwards
- Now assume that $S\cap T=S\cup T$. We want to show that $S=T$ which we do by showing that $S\subset T$ and $T\subset S$
- Suppose that $x\in S$. Then, $x\in S\cup T= S\cap T$. Hence $x\in T$
- Suppose that $s\in T$. Then $x\in S\cup T=s\cap T$. Hence $x\in S$
- Thus, $S=T$

> Definition (Disjoint Sets): Two sets S and T are disjoint when $S\cap T=\emptyset$
# 6 | GCD
## 6.1 | Definition of GCD

> (Proposition) Bounds by Divisibility:
> For all $a,b\in\mathbb{Z}$, if $b\mid a$ and $a\neq 0$, then $b\leq |a|$

PROOF: Let $a,b\in\mathbb{Z}, b\mid , a\neq 0$
Since $b\mid a, \exists k\in\mathbb{Z}: a=kb$
Since $a\neq0, k\neq0$
Since $k\in\mathbb{Z}$ and $k\neq0$, we have $|k|\geq1$. 
Using properties of absolute value 
$$
|a|=|kb|=|k||b|\geq 1\cdot|b|=|b|
$$
Since for all $x\in\mathbb{R}$ we have that $|x|\geq x$, we see that $|a|\geq|b|\geq b$
And so $b\leq|a|$ as needed.

When do $a, b$ have a GCD?
- When $a,b\neq 0$
## 6.2 | GCDs and Remainders
> (Proposition) Division Algorithm
> For all $a\in\mathbb{Z}, b\in\mathbb{Z}, b>0$, there must exist unique integers $q, r$ such that
$$
a+qb+r, 0\leq r<b
$$
## 6.3 | Euclidean Algorithm

> (Proposition) GCD with Remainders
> For all $a,b,q,r\in\mathbb{Z}$
$$
a=qb+r \implies gcd(a,b)=gcd(b,r)
$$
> Exercise: Calculate gcd(1239,735)

$$
\begin{align*}
1239&=1(735)+504 \\
735&=1(504)+231 \\
504 &= 2(231)=42 \\
231 &= 5(42) +21 \\
42 &= 2(21) +0
\end{align*}
$$
Thus, $gcd(1239,735)=21$. Reversing the steps:
$$
\begin{align*}
21 &= 231-5(42) \\
42 &= 504-2(231) \\
231 &= 735-1(504) \\
504 &= 1239-1(735)
\end{align*}
$$
Doing back-substitution:
$$
\begin{align*}
21&=231-5(42) \\ 
&= 231 - 5(504-2(231)) \\
&= 11(231)-5(504) \\
&=11(735-1(504))-5(504) \\
&=11(735)-16(504) \\
&=11(735)-16(1239-1(735)) \\
&=27(735)-16(1239)
\end{align*}
$$
> Follow-up Questions:
> 1. Does -63 divide?
$$
-63=-(3\times27)(735)+(3\times16)(1239)
$$
2. Does 25 divide?
	1. No: Suppose (for a contradiction) that $1239x+735y=25$ for some $x,y$. 
	2. Since $21\mid1239$ and $21\mid735$, we must have by DIC that $21\mid (1239x+735y)$. 
	3. But this means $21\mid25$, which is a contradiction. Thus, no $x,y$ exist.
## 6.4 | Different characterization of GCDs

> (Proposition) Bezout's Lemma: For all $a,b\in\mathbb{Z}$, there must exist $x,y\in\mathbb{Z}$ such that
$$
ax+by=gcd(a,b)
$$
> (Proposition) GCD Characterization Theorem:
> For all $a,b\in\mathbb{Z}$ and all $d\in\mathbb{Z}, d\geq0$, if
> 	1. d is a common divisor of $a,b$
> 	2. There exist common integers x and y such that $ax+by=d$
> Then d must be the GCD of a and b

PROOF:
Let $a,b,d\in\mathbb{Z}, d\geq0$. Suppose:
A) $d\mid a$ and $d\mid b$
B) $d=as+bt$ for some $x,t\in\mathbb{Z}$
We prove that $d=gcd(a,b)$ by definition of GCD

Case 1: $(a,b)=(0,0)$
Then $gcd(a,b)=gcd(0,0)=0$ by definition of GCD
By (B), $d=0s+0t=0$. So $d=0=gcd(a,b)$

Case 2: $(a,b)\neq0$
We know that $d\geq0$ and since d divides a nonzero number (either a or b), we must have $d\neq0$, so $d>0$
We have that $d$ is a common divisor of a and b from (A), so we prove it is the greatest among the common divisors.
Let $c$ be an arbitrary common divisor of a and b. We intend to prove that $c\leq d$
Since $c\mid a$ and $c\mid b$, $c\mid as+bt$
By (B), we have that $c\mid d$
Since $c\mid d$ and $d\neq 0$, we have $c\leq d$ by Bounds by Divisibility. Since $d>0, c\leq d$
Thus, $c\leq d$ as desired.
## 6.5 | Extended Euclidean Algorithm

Given $a,b\in\mathbb{Z}, 0<b\leq a$, the following algorithm calculates $gcd(a,b)$ and finds its integer combination

Find $d,x,y\in\mathbb{Z}$ such that $10x+4y=d=gcd(10,4)$

| x   | y   | r      | q   |
| --- | --- | ------ | --- |
| 1   | 0   | 10 (a) | 0   |
| 0   | 1   | 4(b)   | 0   |
To produce row $i$ for $i\geq3$
$q_i=\lfloor \frac{r_{i-2}}{r_{i-1}} \rfloor$
$q_3= \lfloor \frac{10}{4} \rfloor$

To obtain $x_i$, $y_i$, $r_i$
(Row 1) - q(Row 2)
$[1,0,10]-2[0,1,4]=[1,-2,2]$

| 1   | -2  | 2   | 2   |
| --- | --- | --- | --- |
Row 4

| -2  | 5   | 0   | 2   |
| --- | --- | --- | --- |
Stop when you find $r_i=0$
Consider the second last row, $[x_n, y_n, r_n, q_n]$
$r_n=gcd(a,b)=ax_n+by_n=r_n$

> Ex: EEA for $a=4145, 399$

| x    | y     | r    | q   |
| ---- | ----- | ---- | --- |
| 1    | 0     | 4145 | 0   |
| 0    | 1     | 399  | 0   |
| 10   | -10   | 155  | 10  |
| -2   | 21    | 89   | 2   |
| 3    | -31   | 66   | 1   |
| -5   | 52    | 23   | 1   |
| 13   | -135  | 20   | 2   |
| -18  | 187   | 3    | 1   |
| 121  | -1257 | 2    | 6   |
| -139 | 1444  | 1    | 1   |
| 399  | -4145 | 0    | 2   |
$gcd(4145, 399)=1$
$-139(4145)+1444(399)=1$
$d=1, x=-139, y=1444$

> (Proposition) Common Divisor GCD
$$
(c\mid a) \land (c\mid b)\implies c\mid gcd(a,b)
$$
## 6.6 | Coprime Integers

> Statement 1: Prove that $(5\mid n) \land (8\mid n)\implies 40\mid n$

PROOF (cool):
Let $n=5k, n=8m$
$1=8(2)+5(-3)$ (IMPORTANT)
$n=8(2)n+5(-2)n$
$n=8(2)(5k)+5(-3)(8m)$
$n=40(2k-3m)$

> Statement 2: Prove that $(4\mid n)\land (6\mid n)\implies 24\mid n$ is false

PROOF:
Counterexample: $n=12$

> (Theorem): Generalization of Statement 1
> For all $a,b,n$ with $a,b$ coprime, $(a\mid n)\land(b\mid n)\implies ab\mid n$

> (Theorem): Generalization of Statement 2
> For all $a,b,n$ with $a,b$ not coprime, the above is false, because you can take $\frac{n}{gcd(a,b)}$

**COPRIME INTEGERS**
> (Definition) Coprime / Relatively Prime Integers
> Two integers $a,b$ are coprime if $gcd(a,b)=1$ 

Results:
1. two distinct primes are always coprime
2. two composites can be coprime
3. 1 is coprime with everything
4. two consecutives are always coprime

> (Proposition) Coprime-ness Characterization Theorem
> For all $a,b\in\mathbb{Z}, gcd(a,b)=1$ if and only if there exists integers $s,t$ such that $as+bt=1$

PROOF: Let $a,b$ be integers
$(\implies)$
If $gcd(a,b)=1$, then Bezout's Lemma says there exists $s,t$ such that $as+bt=1$
$(\impliedby)$
If there exists $s,t$ such that $as+bt=1$, then $gcd(a,b)=1$ by GCD Characterization Theorem

> Exercise 3: Prove that for all $a,b,c\in\mathbb{Z}, gcd(ab,c)=1\iff gcd(a,c)=gcd(b,c)=1$

Let $a,b,c\in\mathbb{Z}$. 
$(\implies)$ Assume that $gcd(ab,c)=1$
By the CCT (or Bezout's Lemma), we can write $(ab)s+ct=1$ for some $s,t\in\mathbb{Z}$
It follows that $a(bs)+ct=1$ and $b(as)+ct=1$. 
Therefore, $gcd(a,c)=gcd(b,c)=1$ by CCT

$(\impliedby)$ Assume $gcd(a,c)=gcd(b,c)=1$
By the CCT (or BL), we can write $ax+cy=bu+cv=1$
It follows that $(ax+cy)(bu+cv)=axbu+axcv+cybu+cycv=(ab)(xu)+c(axv+byu+cyv)=1$
Therefore, $gcd(ab, c)=1$ by CCT

> Exercise 4: Prove or disprove $c\mid ab \implies (c\mid a)\lor(c\mid b)$

Counterexample: $a=4, b=3, c=6$
We can fix this by making $c$ coprime with $a$ or $b$
## 6.7 | Primes and prime factorizations

> Proposition: Prime Factorization
> Every natural number $n\geq2$ can be written as a product of primes

PROOF: We use induction

BASE CASE: $P(2)$ is true

INDUCTIVE STEP: Let $k\in\mathbb{N}, k\geq2$
Assume that $P(i)$ is true for all $i\in\mathbb{Z}, 2\geq i\geq k$
Now, consider $k+1$
If $k+1$ is prime, then $P(k+1)$ is true
If $k+1$ is not prime, then $k+1$ is composite. This means we can write $k+1=rs$ for some $r,s\in\mathbb{Z}, r,s\in(2,k)$. 
By the inductive hypothesis, $r,s$ can be written as a product of primes. It follows that $k+1=rs$ can be written as a product of primes. This means that $P(k+1)$ is true as well.
Therefore, $P(n)$ is true for all $n\geq2, n\in\mathbb{N}$ by induction.

> Proposition: Euclid's Theorem
> There are infinitely many primes.
 
PROOF: Multiply every prime together, then add 1

Proposition: Euclid's Lemma
For all $a,b\in\mathbb{Z}$ $p\mid ab$ for all prime numbers $p$, then $p\mid a$ or $p\mid b.$

Proposition: Fundamental Theorem of Arithmetic
Every natural number $n\geq2$ can be written as a unique product of prime factors
Alternatively, for all $n$ there exists a unique prime factorization of n:

## 6.8 | Finding Prime Factors
> Proposition: Finding a prime factor
> Every natural number $n\geq2$ is either prime or has a prime divisor that is less than or equal to $\sqrt{n}$

>Proposition: Divisors from Prime Factorization
>Let $n$ and $c$ be positive integers and suppose that $$
n=p_1^{a_1}p_2^{a_2}\cdots p_k^{a_k}
$$ Then $c$ is a divisor of $n$ if and only if $$
c=p_1^{\beta_1}p_2^{\beta_2}\cdots p_k^{\beta_k}
$$ for integers $\beta_1,\beta_2\cdots\beta_k$ satisfying $0\leq\beta_i\leq a_q$ for $i\in\{1,2,\ldots,k\}$

PROPERTIES:
- Number of factors is adding exponents
- GCD is taking min of exponents
- LCM is taking max of exponents

> Prove that $\forall a,b\in\mathbb{Z}, b^2\mid a^2\iff b\mid a$

Proof of the $(\impliedby)$ direction is trivial
Proof of the $(\implies)$ direction:
Let $a,b$ be positive integers.
$$
a=p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_k^{a_k} \text{  and  } b=p_1^{\beta_1}p_2^{\beta_2}\cdots p_k^{\beta_k}
$$
$$
a^2=p_1^{2\alpha_1}p_2^{2\alpha_2}\cdots p_k^{2\alpha_k} \text{  and  } b^2=p_1^{2\beta_1}p_2^{2\beta_2}\cdots p_k^{2\beta_k}
$$
Suppose $b^2 \mid a^2$. By DFPF, $0\leq2\beta_i\leq2\alpha_i$ for each index $i=1,2,\ldots k$
This also means that $0\leq\beta_i\leq\alpha_i$ for each index $i=1,2,\ldots k$
By DFPF, $b\mid a$.
# 7 | Linear Diophantine Equations
## 7.1 | The Existence of Solutions in 2 Variables

> Linear Diophantine Equation Theorem 1 (LDET 1)
> For all $a,b,c\in\mathbb{Z}, a,b\neq0,$ the linear Diophantine equation $$
ax+by=c
$$  has an integer solution if and only if $d\mid c$ where $d=gcd(a,b)$
## 7.2 | Finding All Solutions in 2 Variables

> Linear Diophantine Equation Theorem 2 (LDET 2)
> Let $a,b,\in\mathbb{Z}, a,b\neq0, g=gcd(a,b)$. If $(x_0,y_0)$ is a solution to $ax+by=x$, then the set of all solutions is given by
$$
\{(x,y): (x_0+\frac{b}{d}n, y_0- \frac{a}{d}n), n\in\mathbb{Z}\}
$$

REMARK: Let $d=gcd(a,b)$
1. By LDET 1, if $d\nmid c$, then $ax+by=c$ has no solutions
2. By LDET 1 and 2, if $d\mid c$, then $ax+by=c$ has infinitely many solutions
# 8 | Congruence and Mods
## 8.1 | Congruence

> Definition (Congruence)
> Let $m$ be a fixed positive integer. We say $a\equiv b \mod m$ if $m\mid(a-b)$
## 8.2 | Elementary Properties of Congruence

> Equivalence Properties
- Reflexive: $a=a$
- Commutative: $a=b\iff b=a$
- Transitive: $a=b \iff c=b$

> Propositions (Congruence is an Equivalence Relation)
> 1. $a\equiv a \mod m$
> 2. $a\equiv b\mod m \iff b\equiv a \mod m$
> 3. $(a\equiv b\mod m) \land (b\equiv c \mod m) \implies a\equiv c \mod m$

> Proposition (Congruence arithmetic)
> If $a_1\equiv b_1 \mod m$ and $a_2\equiv b_2 \mod m$, then
> 1. $a_1+a_1\equiv b_1+b_2 \mod m$
> 2. $a_1-a_2\equiv b_1-b_2 \mod m$
> 3. $a_1a_2\equiv b_1b_2\mod m$
## 8.3 | Congruence and Remainders

> "Cancellation Law" for integer arithmetic
> For all $a,b,c\in\mathbb{Z}, (ac=bc)\land(c\neq0)\implies(a=b)$

PROOF
$$
ac=bc\implies ac-bc=0 \implies c(a-b)=0\implies a-b=0\implies a=b
$$
> Proposition (Congruent iff same remainder)
> For some $m,a,b\in\mathbb{Z}, a\equiv b \mod m \iff  a,b$ have the same remainder divided by m
## 8.4 | Linear Congruence

> Definition (Linear Congruence)
> A linear congruence in the variable $x$ is a relation of the form
$$
ax\equiv c \mod m
$$
> $x$ is a solution to the congruence $\iff \exists y: ax+my=c$.

Solving Linear Congruences - Summary
- $ax\equiv c \mod m$ has a solution if and only if $ax+my=c$ has a solution
- The solutions to $ax+my=c$ are
$$
(a_0 + \frac{m}{d}n, y_0 - \frac{a}{d}n), n\in\mathbb{Z}
$$
	- Where $(x_0,y_0)$ is one solution and $d=gcd(a,m)$
- The $x$ coordinates of the solutions above are numbers of the form
$$
x_0 + \frac{m}{d}n, n\in\mathbb{Z}
$$
> Examples

1. $5x\equiv 7 \mod 20$
	1. $\gcd(5,20)=5$, and $5\nmid7$, so no solutions
2. $14x\equiv 8\mod 17$
	1. $gcd(14,17)=1, 1\mid 8$, so yes solutions
	2. We want some $14x+17y=8$
## 8.5 | Non-linear Congruence

> Example: Solve the congruence relation $x^2+x\equiv 2 \mod 8$
## 8.6 | Congruence Classes and Modular Arithmetic (mod m)

> Definition (Congruence Class)
> The congruence class modulo $m$ of the integer $a$ is the set of integers
$$
[a]=\{x\in\mathbb{Z}: x\equiv a \mod m)\}
$$

> Definition (The integers modulo $m$)
> The collection of the $m$ distinct congruence classes modulo $m$
$$
\mathbb{Z}_m=\{[0], [1], \cdots [m-1]\}
$$
> We do arithmetic in $\mathbb{Z}_m$ as follows (Modular Arithmetic). The operations are commutative, associative, and distributive.
$$
[a]+[b]=[a+b]
$$
$$
[a][b]=[ab]
$$

Facts about $\mathbb{Z}_m$
- $[0]$ is the additive identity in $\mathbb{Z}_m$
- $[1]$ is the multiplicative identity in $\mathbb{Z}_m$
- $[-a]$ is the additive inverse of $[a]$ in $\mathbb{Z}_m$
- $[a]$ may or may not have a multiplicative inverse in $\mathbb{Z}_m$
	- $[a]$ is invertible in $\mathbb{Z}_m$ if and only if $\gcd(a,m)=1$.
	- We write $[a]^{-1}=[b]$

> Theorem (Modular Arithmetic Theorem)
> For all $a,c\in\mathbb{Z}, a\neq0$, the equation
$$
[a][x]=[c] \mod m
$$
> has a solution if and only if $\gcd(a,b)\mid c$. Moreover, if $[x_0]$ is a particular solution and $d=\gcd(a,m)$, then there are $d$ solutions in $\mathbb{Z}_m$ and they are:
$$
[x_0], [x_0 + \frac{m}{d}], [x_0+2(\frac{m}{d})],...,[x_0+(d-1)(\frac{m}{d})]
$$

Example: Solve $[10][x]+[7]=[12]$ in $\mathbb{Z}_{15}$
$$
[10][x]=[5]
$$
$gcd(10,10=5)$ and $5\mid 5$ means 5 solutions
$$
[10][2]=[5]
$$
Since $\frac{m}{d} = \frac{15}{5} = 3$, by MAT the solution set is
$$
{[2],[5],[8],[11],[14]}
$$
## 8.7 | Fermat's Little Theorem (mod p)

> Theorem (Fermat's Little Theorem, F$\ell$T)
> For all primes $p$ and all integers $a$, if $p\nmid a$, then $a^{p-1}\equiv 1\mod p$

> Ex: Evaluate $7^{92}\mod{11}$

Since $11$ is prime and $11\nmid 7$, we know that $7^{11-1}=7^{10}\equiv1\mod 7$
$$
7^{92}=(7^{10})^9\cdot7^2\equiv 1\cdot49\equiv 5\mod 7
$$

> Ex: Prove that for all primes $p$, all integers $a$, and all non-negative integers $r,s$
$$
(p\nmid a) \land (r\equiv s \mod p-1) \implies a^r\equiv a^s\mod p
$$

Assume WLOG that $r\geq s$. Also note that $p-1>0$
Since $r\equiv s\mod p-1$, we have $r=s+(p-1)k$ for some $k\in\mathbb{Z}$.
Since $r-s\geq0$ and $p-1>0$, we also have $k\geq0$.
Since $p\nmid a$, we know $a^{p-1}\equiv 1\mod p$ by FLT
By exponent laws, we have
$$
a^r=a^{s+(p-1)k}=a^sa^{(p-1)k}=a^s(a^{p-1})^k
$$
By congruence and FLT, we have 
$$
a^s(a^{p-1})^k\equiv a^s(1)^k\equiv a^s\mod p
$$
## 8.8 | Chinese Remainder Theorem
> Ex: Find all solutions to the following:
$$
x\equiv 2 \mod 13
$$
$$
x\equiv 17 \mod 19
$$

For all $x\in\mathbb{Z}$, $x$ is a solution to the second congruence if and only if $x=17+29k$ for some $k\in\mathbb{Z}$
Such an $x$ is also a solution if and only if $17+29k\equiv2\mod 13$
For $k\in\mathbb{Z}$, 
$$
17+29k\equiv2\mod 13
$$
$$
29k\equiv-15\mod 13
$$
$$
3k\equiv-15\mod 13
$$
Since 3 is coprime with 13, we can divide both sides by 3
$$
k\equiv-5\mod 13
$$
$$
k\equiv8\mod 13
$$
$$
k=8+13l, l\in\mathbb{Z}
$$
Now, we translate this solution of $k$ into $x$
$$
x=17+29k
$$
$$
x=17+29(8+13l), l\in\mathbb{Z}
$$
$$
x=239+377l, l\in\mathbb{Z}
$$
$$
\{x\in\mathbb{N}:x\equiv249\mod 377\}
$$
> Theorem (Chinese Remainder Theorem)
> For $\gcd(m_1,m_2\cdots m_k)=1$, the simultaneous linear congruences in $x$
$$
x\equiv a_1\mod m_1
$$
$$
x\equiv a_2\mod m_2
$$
$$
\ldots
$$
$$
x\equiv a_k\mod m_k
$$
> have a unique solution modulo $m_1m_2\cdots m_k$. Thus, if $x_0$ is one particular solution, then the full solution set is all $x$ satisfying
$$
x\equiv x_0 \mod m_1m_2\cdots m_k
$$

Ex: 13a: Solve the following:
$$
3x\equiv2\mod 5
$$
$$
2x\equiv6\mod 7
$$
$3x\equiv2\mod 5\iff 2(3)x\equiv2(2)\mod 5\iff x\equiv4\mod 5$
$2x\equiv6\mod 7\iff x\equiv 3\mod 7$
Thus, this is the same as the following
$$
x\equiv4\mod 5
$$
$$
x\equiv3\mod 7
$$

Ex 13b: Solve the following
$$
x\equiv 4\mod 6
$$
$$
x\equiv 2\mod 8
$$
$x$ satisfies the first if and only if $x=4+6k, k\in\mathbb{Z}$
$x$ satisfies the second if and only if $4+4k\equiv2\mod 8$
$\gcd(6,8)=2$ and $2\mid(2-4)$, so there will be 2 solutions $k\mod 8$
## 8.9 | Splitting Modulus Theorem

> Theorem (Splitting Modulus Theorem)
> For all $a\in\mathbb{Z}$ and $m_1,m_2\in\mathbb{N}$, if $\gcd(m_1,m_2)=1$, then the simultaneous congruences
$$
x\equiv a\mod m_1
$$
$$
x\equiv a\mod m_2
$$
> have exactly the same solutions in the singular congruence 
$$
x\equiv a\mod m_1m_2
$$

Ex 14: Solve the following
$$
n^{12}\equiv5\mod 55
$$
Since $\gcd(5,11)=1$, we can say
$$
55\mid(n^{12}-5)\iff 5\mid(n^{12}-5)\land 11\mid(n^{12}-5)
$$
Thus
$$
n^{12}\equiv 5\mod 5
$$
$$
n^{12}\equiv 5\mod 11
$$
Congruence 1:
$$
(n^4)^3\equiv1\equiv5\mod 5
$$
Which is not a solution. However, if $n\equiv0 \mod 5$, then $n^{12}\equiv0\mod 5$.
Therefore, the solutions are 
$$
\{n\in\mathbb{Z}, n\equiv0\mod 5\}
$$
Congruence 2:
$$
n^{12}\equiv n^{11}n\equiv n(n)\equiv n^2\equiv 5\mod 11
$$
With trial and error, we have
$$
\{n\in\mathbb{Z},n\equiv 4,7\mod 11\}
$$
Putting this together, we have $n^{12}\equiv5\mod 55$ if and only if $n$ satisfies one of the following
$$
[n\equiv0\mod 5] \land [n\equiv 4\mod 11]
$$
$$
[n\equiv 0\mod 5] \land [n\equiv 7\mod 11]
$$
By CRT, each of (A) and (B) has a unique solution $\mod 55$
$$
n\equiv 15, 40\mod 55
	$$
# 9 | RSA Public-Key Encryption Scheme
## 9.1 | Public-Key Cryptography

> Cryptography is the practice and study of secure communication

Traditional Private-Key Cryptography
Alice and Bob want to communicate privately
1. Agree on a method (cryptosystem) and a key
2. Alice encrypts the message (plaintext) using a key and the cryptosystem rules
3. Alice sends the encrypted message (ciphertext) to bob
4. Bob decrypts it using the key and cryptosystem rules, recovering the plaintext
5. Alice and Bob hope that if an eavesdropped Eve intercepts the message, they can't recover the plaintext

Substitution Cipher
- How many different keys?
- $10!\equiv4\times10^{26}$

What makes a good cryptosystem?
- Practical and resistant to Cryptanalysis (finding weaknesses)
- Unbreakable in practice
- Unbreakable even if some evil person knows the cryptosystem and key
- How do we start setting up an encryption system without encrypting it?
	- A puts key in box with lock A
	- B puts key in box with lock A and B
	- A unlocks lock A
	- B unlocks lock B
	- Requires 3 transmissions

Public-key Idea
- A large number of users agree on the same cryptosystem
- Users have public encryption keys, but private decryption keys
- It mist be difficult to deduce decryption key from encryption key
## 9.2 | Implementing the RSA Scheme
Set-up
1. Choose distinct primes $p,q$. Set $n=pq$
2. Choose an integer $e$ satisfying
	1. $1<e\leq(p-1)(q-1)$
	2. $\gcd(e,(p-1)(q-1))=1$
3. Find the integer $d$ satisfying
	1. $ed\equiv1 \mod(p-1)(q-1)$
	2. $0<d<(p-1)(q-1)$
4. Publish the public key $(e,n)$
5. Secure the private key $(d,n)$

Example:
1. Choose $p=2, q=11$. $n=2\cdot11=22$
2. Choose $e$ satisfying
	1. $1<e\leq(2-1)(11-1)=10$
	2. $\gcd(e,10)=1$
	3. $e=3,7,9$
3. Find $d$ satisfying
	1. $3d\equiv 1\mod 10$
	2. $0<d\leq(p-1)(q-1)$
4. Publish $(e,n)=(3,22)$
5. Secure $(d,n)=(7,22)$

Encryption:
1. Generate message $M$ with $0\leq M<n$
2. Compute $C$ satisfying
	1. $M^e\equiv C\mod n$
	2. $0\leq C<n$
3. Send $C$

Example
1. Generate a message $M$, $0\leq M<n=22$. Choose $M=8$
2. Compute $C$ such that 
	1. $8^3\equiv C\mod 22$
	2. $0\leq C<22$
	3. $C=6$
3. Send $C=6$

Decryption
1. Compute $R$ satisfying
	1. $C^d\equiv R\mod n$
	2. $0\leq R<n$
2. Read message $R$

Example
1. Computer $R$ such that
	1. $C^d=6^7\equiv R(\mod 22)$
	2. $0\leq R<22$
2. $R=8$ :)
## 9.3 | Proving the RSA Scheme Works
Steps to prove that $R=M$
1. $R\equiv M^{ed}\mod pq$
2. $R=M^{ed}\mod p$ and $R=M^{ed}\mod q$
3. $R\equiv M^1\mod p$ and $R\equiv M^1\mod q$
4. $R\equiv M\mod pq$
5. $R\equiv M$
# 10 | Complex Numbers
## 10.1 | Standard Form
$$
\mathbb{N}\subsetneq\mathbb{Z}\subsetneq\mathbb{Q}\subsetneq\mathbb{R}\subsetneq\mathbb{C}
$$
> Definition ($\mathbb{C}$)
> A complex number is an expression of the form $z=x+yi, x,y\in\mathbb{R}$. The set of all complex numbers is
$$
\mathbb{C}=\{x+yi:x,y\in\mathbb{R}\}
$$

Define complex numbers $z=a+bi, w=c+di$
1. $a+bi=c+di\iff (a=c) \land (b=d)$
2. $\mathbb{R}\subseteq\mathbb{C}$ for our purposes
3. The **real part** of of $z$ is $Re(z)=a$, and the **imaginary part** is $Im(z)=b$, NOT $bi$
4. A complex number of the form $a+0i$ is **purely real**
5. A complex number of the form $0+bi$ is **purely imaginary**
	1. $0+0i$ is both purely real and purely imaginary :(
6. We often use short forms (omitting 0 coefficients)

> Definition (Addition and multiplication in $\mathbb{C}$)
> Let $z=a+bi$ and $w=c+di$
$$
z+w=(a+bi)+(c+di)=(a+c)+(b+d)i
$$
$$
zw=(a+bi)(c+di)=(ac-bd)+(ad+bc)i
$$

Inverses of Complex Numbers
Additive Inverse
$$
(2+i)+(-2-i)=0
$$
Multiplicative Inverse
$$
(2+i)(c+di)=(2c-d)+(2d+c)i=1+0i
$$
This gives the system of equations
$$
2c-d=1
$$
$$
2d+c=0
$$
$$
(c,d)=(\frac{2}{5}, -\frac{1}{5})
$$
Generalized Formula for Multiplicative Inverse
$$
z^{-1}=\frac a{a^2+b^2}-\frac b{a^2+b^2}i=\frac{a-bi}{a^2+b^2}.
$$
Subtraction and Division
- $z-w=z+(-w)$
- $\frac{z}{w}=z\cdot w^{-1}$ for $w\neq0+0i$

Exercise: Evaluate
$$
\frac{(1-2i)-(3+4i)}{5-6i}
$$
Solution:
$$
=\frac{(-2-6i)}{5-6i}=(-2-6i)(5-6i)^{-1}
$$
To find the inverse:
$$
(5-6i)^{-1}=\frac{5}{5^2+(-6)^2}+\frac{6}{5^2+(-6)^2}i = \frac{5}{61}+ \frac{6}{61}i
$$
Returning to the equation:
$$
(-2-6i)(5-6i)^{-1}=(-2-6i)( \frac{5}{61} + \frac{6}{61}i) = (-\frac{10}{61}-(-\frac{36}{61}))+(-\frac{12}{61}+(-\frac{30}{61}))i = \frac{26}{61} + -\frac{42}{61}i
$$
REMARK: Multiplying by the conjugate does cool things!

> Proposition (Properties of complex arithmetic)
> The following properties hold for all $z,w,u\in\mathbb{C}.$
> 1. Associativity of addition: $(z+w)+u=z+(w+u)$
> 2. Commutativity of addition: $z+w=w+z$
> 3. Additive identity: $z+0=z$ where $0=0+0i$
> 4. Additive inverses: $z$ has an additive inverse, denoted by $-z$, satisfying $z+(-z)=0.$ If $z=a+bi$ then $-z=-a-bi.$
> 5. Associativity of multiplication: $(zw)u=z(wu)$
> 6. Commutativity of multiplication: $zw=wz$
> 7. Multiplicative identity: $z1=z$ where $1=1+0i$
> 8. Multiplicative inverses: If $z\neq0$ then $z$ has a multiplicative inverse, denoted by $z^{-1}$, satisfying $zz^{-1}=1.$ If $z=a+bi\neq0$ then $z^-1=\frac{a-bi}{a^2+b^2}.$ 
> 9. Distributivity: $z(w+u)=zw+zu$
## 10.2 | Conjugate and Modulus

> Definition (Conjugate and Modulus)
> Let $z=a+bi$ be a complex number.
> 1. The complex conjugate of $z$, denoted by $\overline{z}=a-bi$
> 2. The modulus of z, denoted by $|z|=\sqrt{a^2+b^2}$

Example: Solve $z^2=i\overline{z}$ over $\mathbb{C}$
Solution: Consider $z=a+bi\in\mathbb{C}$ 
$$
z^2=(a^2-b^2)+(2ab)i
$$
$$
i\overline{z} = i(a+bi) = ai-bi^2 = b+ai
$$
We need $(a,b)$ such that
$$
(a^2-b^2)+(2ab)i=b+ai
$$
Or in other words
$$
a^2-b^2=b
$$
$$
2ab=a
$$
$b=\frac{1}{2}$ or $a=0$. If $b=\frac{1}{2}$:
$$
a^2-\frac{1}{4}=\frac{1}{2}
$$
$$
a^2=\frac{3}{4}
$$
$$
a=\pm \frac{\sqrt{3}}{2}
$$
If $a=0:$ 
$$
0-b^2=b
$$
$$
b=0, -1
$$
Thus, our possible values of $a,b$ are $(\frac{\sqrt{3}}{2}, \frac{1}{2}), (\frac{-\sqrt{3}}{2}, \frac{1}{2}), (0,0), (0,-1)$
Thus, our possible solutions are $0,i, \frac{\sqrt{3}}{2}+\frac{1}{2}i, \frac{-\sqrt{3}}{2}+\frac{1}{2}i$

> Proposition (Properties of Congruence)
> 1. $\overline{(\overline{z})}=z$
> 2. $\overline{z+w}=\overline{z}+\overline{w}$
> 3. $z+\overline{z}=2Re(z)$ and $z-\overline{z}=2Im(z)i$
> 4. $\overline{zw}=\overline{z}\cdot\overline{w}$
> 5. If $z\neq0$, then $\overline{z^{-1}}=(\overline{z})^{-1}$

> Proposition (Properties of Modulus)
> 1. $|z|=0$ if and only if $z=0$
> 2. $|\overline{z}|=|z|$
> 3. $\overline{z}\cdot z = |z|^2$
> 4. $|zw|=|z||w|$
> 5. If $z\neq0$ then $|z^{-1}|=|z|^{-1}$

Proving Triangle Inequality for modulus of complex numbers:
$$
|z+w|\leq|z|+|w|
$$
Consider
$$
\begin{align*}
|z+w|^2&=(z+w)\overline{(z+w)} \\
&=(z+w)(\overline{z}+\overline{w}) \\
&=z\overline{z}+z\overline{w}+w\overline{z}+w\overline{w} \\
&= |z|^2+z\overline{w}+\overline{z}w+|w|^2 \\
&= |z|^2+|w|^2+z\overline{w}+\overline{z\overline{w}} \\
&=|z|^2+|w|^2+2Re(z\overline{w}) \\
&\leq|z|^2+|w|^2+2|z\overline{w}| \\
&=|z|^2+|w|^2+2|z||w| \\
&\leq(|z|+|w|)^2
\end{align*}
$$
Since $|z+w|^2\leq(|z|+|w|)^2$, and since both are non-negative reals, then $|z+w|\leq|z|+|w|$
## 10.3 | Complex Plane and Polar Form

$(x,y)\in\mathbb{R}^2$ - $xy$ plane
$x=yi\in\mathbb{C}$ - complex plane

Geometry of $\mathbb{C}$
- $z=x+yi$
- $|x|=|Re(z)|$
- $|y|=|Im(z)$
- $|z|=\sqrt{x^2+y^2}$
- $\overline{z}=x-yi$ (conjugate)

> Example: Shade the region of the complex plane defined by
$$
\{\overline{z}+3+4i:z\in\mathbb{C}, 3<|z|\leq5\}
$$

It's an annulus (donut) centered at $(0,0)$ with inner radius 3 (non-inclusive) and outer radius 5, inverted across the real axis (no change), then shifted 3 across and 4 up.

Polar Form
- Standard Form: $(x,y)$
- Polar Form: $(r, \theta)$
	- $r=\sqrt{x^2+y^2}$
	- $\theta$ is the angle the line makes with the positive real axis

Cartesian to Polar
- $r=\sqrt{x^2+y^2}$
- $\theta = tan^{-1}(\frac{y}{x})$

Polar to Cartesian
- $x=r\cdot\cos(\theta)$
- $y=r\cdot\sin(\theta)$

> Definition (Polar Form)
> Take $r=|z|$ and $\theta\in\mathbb{R}$. Then, the number $z$ is represented as
$$
z=r(\cos\theta+i\sin\theta)
$$
> Proposition (Polar Multiplication in $\mathbb{C}$)
> For all complex numbers, we **multiply the moduli and add the arguments :)**
$$
z_1=r_1(\cos\theta_1+i\sin\theta_1)
$$
$$
z_2=r_2(\cos\theta_2+i\sin\theta_2)
$$
$$
z_1z_2=r_1r_2(\cos(\theta_1+\theta_2)+i\sin(\theta_1+\theta_2))
$$

Exercise 13: Multiplication in standard form
$$
(\sqrt{6}+\sqrt{2}i)(-3\sqrt{2}+3\sqrt{6}i) = (3\sqrt{12}-3\sqrt{12})+(18-6)i=-12\sqrt{3}+12i
$$
Polar form for $z_i=\sqrt{6}-\sqrt{2}i$: Since $|z_i|=\sqrt{6+2}=2\sqrt{2}$, we have
$$
z_1=2\sqrt{2}(\frac{\sqrt{6}+\sqrt{2}i}{2\sqrt{2}})=2\sqrt{2}(\frac{\sqrt{3}}{2}+ \frac{1}{2} i) = 2\sqrt{2}(\cos\frac{\pi}{6}+i\sin\frac{\pi}{6})
$$
Polar form for $z_2=-3\sqrt{2}+3\sqrt{6}i$: Since $|z_2|=\sqrt{18+54}=6\sqrt{2}$, we have
$$
z_2=6\sqrt{2}(\frac{-3\sqrt{2}+3\sqrt{6}i}{6\sqrt{2}})=6\sqrt{2}(-\frac{1}{2}+\frac{\sqrt{3}}{2}i)+6\sqrt{2}(\cos\frac{2\pi}{3}+i\sin\frac{2\pi}{3})
$$
## 10.4 | De Moivre's Theorem
Complex Exponentiation in $\mathbb{C}$
$$
z^n=(a+bi)^n
$$
Working with complex numbers is nicer. Let $z=r(\cos\theta+i\sin\theta)$
$$
\begin{align*}
z^2&=rr(\cos(\theta+\theta)+i\sin(\theta+\theta)) \\
&= r^2(\cos2\theta+i\sin2\theta) \\
z^3&=z^2z \\
&= r^2(\cos2\theta+i\sin2\theta)r(\cos\theta+i\sin\theta) \\
&= r^3(\cos(2\theta+\theta)+i\sin(2\theta+\theta))\\ 
&= r^3(\cos3\theta + i\sin3\theta)
\end{align*}
$$
> Proposition (De Moivre's Theorem)
> For all real numbers $\theta$ and all integers $n$, 
$$
(\cos\theta+i\sin\theta)^n+\cos(n\theta)+i\sin(n\theta)
$$

> Corollary (of De Moivre's Theorem)
> For all complex numbers $z=r(\cos\theta+i\sin\theta)$ and $n\in\mathbb{Z}$, if $|Z|=r\neq0$ or $n\neq0$ then
$$
z^n=r^n(\cos n\theta+i\sin n\theta)
$$

Proof of DMT
**Step 1: Proving the positive integers**
Consider $P(n): (\cos\theta+i\sin\theta)^n=\cos(n\theta)+i\sin(n\theta)$
First, we prove $P(n)$ for all $n\in\mathbb{N}$ by induction on $n$.

<u>Base Case: </u> Verify $P(0)$
When $n=0$, we have $(\cos\theta+i\sin\theta)^0=1$ and $\cos(0\times\theta)+i\sin(0\times\theta)=\cos0+i\sin0=1$
So $P(0)$ is true

<u>Inductive Step:</u> Let $k\in\mathbb{N}$. 
Assume $P(k)$, that is, $(\cos\theta+i\sin\theta)^k=\cos k\theta+i\sin k\theta$
For $n=k+1$, we have
$$
\begin{align*}
(\cos\theta+i\sin\theta)^{k+1}&=(\cos\theta+i\sin\theta)^k(\cos\theta+i\sin\theta)\\
&= (\cos k\theta+i\sin k\theta)(cos\theta+i\sin\theta) && \text{IH}\\
&= \cos(k+1)\theta+i\sin(k+1)\theta && \text{PM}\mathbb{C}
\end{align*}
$$
Therefore $P(k)\implies P(k+1)$, which completes our induction step.

**Step 2: Proving the negative integers**
Now consider an arbitrary $n<0, n\in\mathbb{Z}$. 
Then $n=-m$ for some $m\in\mathbb{N}$. Then
$$
\begin{align*}
(\cos\theta+i\sin\theta)^n&=(\cos\theta+i\sin\theta)^{-m} \\
&= \frac{1}{(\cos\theta+i\sin\theta)^m} \\
&= \frac{1}{\cos m\theta+i\sin m\theta} \\
&= \frac{\cos m\theta+i\sin m\theta}{(\cos m\theta+i\sin m\theta)(\cos m\theta- i\sin m\theta)} \\
&= \frac{\cos m\theta-i\sin m\theta}{\cos^2m\theta+\sin^2m\theta} \\
&= \cos m\theta-i\sin m\theta \\
&= \cos n\theta +i\sin n\theta
\end{align*}
$$

Exercise 15: Calculate $(1+\sqrt{3}i)^8$
Step 1: Find a polar form for $z=1=\sqrt{3}i$
We have $|z|=\sqrt{1+3}=2$ and so a polar form for $z$ is given by
$$
z=1+\sqrt{3}i=2(\frac{1+\sqrt{3}i}{2})=2(\frac{1}{2} + i\frac{\sqrt{3}}{2}) = 2(\cos(\frac{\pi}{3})+i\sin(\frac{\pi}{3}))
$$
Step 2: Find the power $z^8$ in polar form using DMT
$$
z^8=[2(\cos(\frac{\pi}{3}))+i\sin(\frac{\pi}{3}))]^8 = 2^8(cos(\frac{8\pi}{3})+i\sin(\frac{8\pi}{3})))
$$
Step 3: Find the standard form for $z^8$
$$
z^8=2^8(\cos(\frac{8\pi}{3})+i\sin(\frac{8\pi}{3})=2^8(-\frac{1}{2}+\frac{\sqrt{3}}{2}i)
=-128+128\sqrt{3}i$$
NOTATIONAL CONVENIENCE: 
Polar forms satisfy the usual exponent laws.
Let $e^{i\pi}=\cos\theta+i\sin\theta$. 
## 10.5 | Complex n-th Roots

$z^2=3+4i$ has two solutions: $z_1=2+i, z_2=-2-i$

Exercise 20: Determine all complex numbers $z$ satisfying $z^3=-8$
Consider $z=r(\cos\theta+i\sin\theta)$ in polar form. Then
$$
[r(\cos\theta+i\sin\theta)^3]=r^3(\cos3\theta+i\sin3\theta) \land -8=8(\cos\pi+i\sin\pi)
$$
These two complex numbers are equal if and only if 
$$
r^3=8
$$
$$
3\theta=pi+2k\pi, k\in\mathbb{Z}
$$
Solutions are
$$
z=\sqrt[3]{8}(\cos(\frac{\pi+2k\pi}{3})+i\sin(\frac{\pi+2k\pi}{3}))
$$
This isn't infinite because $\sin$ and $\cos$ are periodic

> Definition (Complex $n$th roots)
> Let $n\in\mathbb{N}$ and $a\in\mathbb{C}$. The solutions in $\mathbb{C}$ to the equation $z^n=a$ are called the complex $n$th roots of a

>Proposition (Complex $n$th roots theorem)
>For all complex numbers $a=r(\cos\theta+i\sin\theta)$ and all $n\in\mathbb{N}$, the complex $n$th roots of $a$ are given by
$$
\sqrt[n]{r}(\cos(\frac{\theta+2k\pi}{n})+i\sin(\frac{\theta+2k\pi}{n}))
$$

Example: Find the complex 3rd roots of $\alpha=8$
$$
z_0=1+\sqrt{3}i
$$
$$
z_1=2
$$
$$
z_3=1o\sqrt{3}i
$$
## 10.6 | Square Roots and the Quadratic Formula
	
> Proposition (Quadratic Formula)
> For $a,b,c\in\mathbb{C}, a\neq0$, the solutions to $az^2+bz+c=0$ are given by
$$
z=\frac{-b\pm w}{2a}
$$
> Where $w$ is a complex 2nd root of the complex number $b^2-3ac$

Example: Solve $z^2+2iz+3=0$
Solution: Using the quadratic formula, the solutions are of the dorm
$$
z=\frac{-b\pm w}{2a}=\frac{-2i\pm w}{2}
$$
where $w$ is a complex 2nd root of $b^2-4ac=(2i)^2-4(1)(3)=-16$
Since $-16=16(\cos\pi+i\sin\pi)$, we can take the 2nd root $w=\sqrt{16}({\cos(\frac{\pi}{2})}+i\sin(\frac{\pi}{2}))=4i$
Therefore, we have
$$
z=\frac{-2i\pm4i}{2}
$$
so the solutions are $z=i$ and $z=-3i$
## 10.7 | Real and Complex Polynomials and their Arithmetic

> Definition (Polynomial over $\mathbb{R}$ or $\mathbb{C}$)
> A polynomial in $x$ over $\mathbb{R}$ or $\mathbb{C}$ is written as
$$
a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0
$$
> We use the notation $\mathbb{R}[x]$ or $\mathbb{C}[x]$ to denote the set of all polynomials in $\mathbb{x}$ over $\mathbb{R}$ or $\mathbb{C}$

Addition, subtraction, multiplication is the same as $\mathbb{R}$
## 10.8 | Roots of Polynomials and Factoring Polynomials

> Theorem (Factor Theorem)
> For all $f(x)\in\mathbb{C}[x]$ and all $c\in\mathbb{C}$, the complex linear polynomial $x-c$ is a factor of $f(x)$ if and only if $f(c)=0$

> Theorem (Fundamental Theorem of Algebra)
> Every non-constant complex polynomial has a complex root.

> Proposition (Complex Polynomials of degree $n$ have $n$ roots)
> For all $n\geq1, n\in\mathbb{Z}$ and for all complex polynomials $f(z)$ of degree n, there exist complex numbers $c\neq0$ and $c_1, c_2,\cdots c_n$ such that 
$$
f(z)=c(z-c_1)(z-c_2)\cdots(z-c_n)
$$
> This is done by applying FTA $n$ times.

> Definition (Irreducible elements of $\mathbb{C}[z]$)
> Reducible polynomials can factor into positive-degree polynomials, irreducible polynomials can't.
> The irreducible polynomials in $\mathbb{C}[z]$ are the linear polynomials.

Examples:
- $f(z)=z+3i$ is irreducible
- $g(z)=5(z-2)$ is irreducible
- $h(z)=z^2+1=(z+)(z-i)$, so it is reducible

Exercise: Factor
$$
f(z)=z^3+(1-4i)z^2+(-4-4i)z-4
$$$f(-1)=0$, so by Factor Theorem, 
$$
f(z)=(z+1)(z^2-4iz-4)
$$
By Quadratic Formula, 
$$
b^2-4ac=(-4i)^2-4(1)(-4)=-16+16=0
$$
$$
z=\frac{-b\pm w}{2a}=\frac{4i\pm0}{2}=2i
$$
Therefore, 
$$
f(z)=(z+1)(z-2i)^2
$$
Irreducible elements of $\mathbb{R}[x]$
1. All linear polynomials are irreducible
2. A quadratic is reducible if and only if it has a real root
3. An odd-degree polynomial is always reducible and always has a root
4. An even-degree polynomial can be reducible regardless of whether or not they have a root

Factoring in $\mathbb{R}[x]$:
1. If a root if purely real, then that root is also a linear factor
2. If a root is not purely real, then its conjugate is also a root (Conjugate Roots Theorem)

> Proposition 
> All real polynomials can be written as a product of linear and quadratic factors


