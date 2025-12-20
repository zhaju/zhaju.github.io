```
STAT 230 - Probability
MWF 2:30PM - 3:20PM
DC 1351
Cecilia Cotton

15% quizzes (3/5) | 25% midterm | 15% midterm | 45% final
```

[Anthony Zhang](https://anthony-zhang.me/University-Notes/STAT230/STAT230.html)
# 1 | Introduction to Probability
## 1.1 | Definitions of Probability
This course is a probability course, not a statistics course (STAT 231)
- Probability = A discipline of mathematics concerned with describing and modeling uncertain events
- Statistics = The study of the collection, analysis, and interpretation of data as it relates to underlying probability models

Definitions of Probability (each has flaws)
1. Classical Probability:
	1. Flaw: not all events are equally likely
$$
P = \frac{\text{number of ways the event can occur}}{\text{the total number of possible outcomes}}
$$
2. Relative Frequency: Repeat the event a lot of times
	1. Flaw: we can never repeat an experiment indefinitely
3. Subjective Probability: Vibes
	1. Flaw: how do you resolve disagreements?
## 1.2 | Mathematical Probability Models
Probability Model = Sample Space + Probability Distribution + Event

> Definition: Sample Space
> A sample space $S$ is the set of all possible outcomes of a random experiment where only one outcome can occur in a single trial

> Definition: Probability Distribution
> A probability distribution on $S$ assigns probabilities (between 0 and 1) to outcomes

> Definition: Event
> An event $A$ is a subset of the sample space, and the probability of an event is the sum of the probabilities for each outcomes in $A$.

Sample Space
- Is **Discrete** if it's finite and **non-Discrete** if infinite
- Ex: Rolling a die. Let $a_i$ be the number of dots facing upward
$$
S=\{a_i\cdots a_6\} = \{1,2,3,4,5,6\}
$$
- Ex: Runtime of a computer program. 
$$
S=\{a_i:a_i<0, a_i\in\mathbb{R}\}
$$
- Ex: Flipping a coin (there can be multiple sample spaces)
	- $S_1=\{HH, HT, TH, TT\}$
	- $a_i=\text{\# tails}, S_2=\{a_0,a_1,a_2\}=\{0,1,2\}$
	- Are the outcomes the same? $S_3=\{a_{yes}, a_{no}\}$
	- $S_4=\{a_1, a_{yes}, a_{no}\}$ - not a sample space (overlapping outcomes)
	- $S_5=\{a_0\}$ - not a sample space (not all possibilities)

Event
- Ex: Rolling a die:
	- $S=\{1,2,3,4,5,6\}$
	- Simple event: Rolling a 1, $A_1=\{a_i\}=1$
	- Compound event: Rolling an even, $A=\{a_2,a_4,a_6\}=\{2,4,6\}$
- Ex: Runtime of a program
	- Event that the program takes >30 seconds
$$
A=\{t:t>30\}
$$
> Definition: Probability
> Let $S$ denote the set of all events on a sample space $S$. > A **probability** defined on $S$ is a real valued function that satisfies the following axioms
$$
P:S\to[0,1]
$$
> 1. Scale: Everything is normalized to a size of 1
> 2. Something Happens: $P(S)=1$
> 3. Infinite Additivity: $P(A_1)+P(A_2)=P(A_1\cup A_2)=P(A)$

Facts about the probability function
1. $P(\emptyset)=0$
	1. Proof: Define an infinite collection of events (all $\emptyset$, all disjoint, union is $\emptyset$) and use the Additivity axion
2. Finite Additivity:
$$
P(\cup_{i=1}^n A_i)=\sum_{n=1}^n P(A_i)
$$
	1. Proof: Extend to an infinite collection of disjoint events by adding infinite $\emptyset$ and the union stays the same
3. $P(\bar{A})=1-P(A)$
	1. Proof: Use the axiom that $P(S)=1$
## 1.3 | Counting in Uniform Probability Models
### Counting Rules
> Definition: Equally Likely Model
> Let $|A|$ denote the number of outcomes in an event $|A|$. Then, for an equally likely sample space:
$$
P(A)=\sum_{i:a_i\in A}P(A_i) = \frac{|A|}{|S|}
$$
> Note: This can only happen in a discrete sample set

> Counting Rules
> 1. Addition Rule
$$
|A\cup B|=|A|+|B|
$$
> 2. Multiplication Rule
$$
|A|=n_1n_2\cdots n_k = \prod_{i=1}^k n_i
$$

Example: Suppose that 3 of the numbers from 1-9 are chosen **without replacement** to form a 3 digit number. What is the probability that:
1. The number is bigger than 500?
$$
P(A)=\frac{5}{9}
$$
2. The number is even? (you could also count EEE, EOE, OEE, OOE)
$$
P(B)=\frac{4}{9}
$$
3. The number is larger than 700 and even?
Consider $P(>700 \cup \text{even})$
7xx : $1\times4\times7$
8xx: $1\times3\times7$
9xx: $1\times4\times7$
$S_{all}=\{d_1d_2d_3, d_1\neq d_2, d_2\neq d_3, d_1\neq d_3\}$
$|S_{all}|=9\times8\times7$
$$
P(C)=\frac{11\times7}{7\times8\times9}=\frac{11}{72}
$$
### Permutations and Combinations
> Definition: Permutation
> Given $n$ distinct objects, a **permutation** of size $k$ is an **ordered** subset of $k$ of the individuals. The number of permutations of size $k$ taken from $n$ objects is
$$
n^{(k)}=\frac{n!}{(n-k)!}
$$

> Definition: Combination
> Given $n$ distinct objects, a **combination** of size $k$ is an **unordered** subset of $k$ of the individuals. The number of permutations of size $k$ taken from $n$ objects is
$$
\binom{n}{k} = \frac{n^{(k)}}{k!}=\frac{n!}{(n-k)!k!}
$$

Suppose you have 20 distinct books, 7 of which are written by Mark Twain.
1. How many ways can you arrange 12 books on a shelf if the order they are on the shelf matters?
$$
|A| = 20^{(12)}=\frac{20!}{12!}
$$
2. How many ways can you arrange 12 books on a shelf if exactly 3 of them must be Mark Twain books?
$$
|B| = \binom{7}{3}\binom{13}{9}12!
$$
3. A monkey picks books at random from the 20 books and puts them on the shelf until it contains 12 books. What is the probability that at least 3 of the books on the shelf are written by Mark Twain?

Denote $C_i$ to be {number of Twain books}. Choose from 7 Twain and 13 non-Twain books:
$$
|C_0|=\binom{7}{0}\binom{13}{12} = 13
$$
$$
|C_1|=\binom{7}{1}\binom{13}{11}=\frac{7\times13\times12}{2}=546
$$
$$
|C_2|=\binom{7}{2}\binom{13}{10}=\frac{7\times6\times13\times12\times11}{2\times6}=6006
$$
$$
|S|=\binom{20}{12}=127970
$$
$$
P(C)=1 - \frac{13+546+6006}{127970} = \frac{119405}{125970}
$$
> Consider drawing 3 numbers with replacements from 10 digits. What is the probability that there's a repeated number?
$$
P(A)=1-P(\bar(A))=1- \frac{10\times9\times8}{10^3}
$$
$$
|A|+10+\binom{10}{2}2\times3=10+10\times9\times3\implies \frac{10+10(9)(3)}{10^3}
$$
> Melissa participates in a lottery in which she selects 7 numbers between 1 and 50, and then a computer randomly picks 7 numbers between 1 and 50. She wins if her selected numbers match 5 or more of the randomly selected numbers, in any order. What is the probability that Melissa wins?

S = {selections of computer numbers}
$$
|S|=\binom{50}{7}
$$
A = {Melissa wins} - consider 5, 6, 7 matches
$$
P(A) = \frac{\binom{7}{5}\binom{43}{2}+\binom{7}{6}\binom{43}{1}+\binom{7}{7}{\binom{43}{0}}}{\binom{50}{7}}
$$
**Make sure you decide whether or not order matters for everything!**

> Suppose a room contains n people. What is the probability at least two people in the room share a birthday? 
> Assumption: Suppose that each of the n people is equally likely to have any of the 365 days of the year as their birthday, so that all possible combinations of birthdays are equally likely.

Put a uniform model over $S_n$:
$$
S_n=\{(d_1,\ldots,d_n), d_i+\{1,\ldots,365\}\}
$$
$A_n$ = {at least 2 match}
$$
P(A_n)=1-P(\bar{A_n})=1- \frac{365^{(n)}}{365^n}
$$
### Multinomial Coefficient Theorem
> There are 4 passengers on an elevator that services 5 floors. Assume that each of the 4 passengers are equally likely to get off the elevator on any of the 5 floors. What is the probability that:
1. The passengers all get off on different floors?
(# ways to select 5 floors)
$$
P(A)=\frac{5(4)(3)(2)}{5^4}
$$
2. 2 passengers get off on floor two, and two get off on floor three?
(# ways to select 2 passengers)
$$
P(B)=\frac{\binom{4}{2}}{5^4}
$$
3. 2 passengers get off on one floor, and two passengers get off on another, different floor?
(# ways to select 2 passengers) x (# ways to select 2 floors)
$$
P(C)=\frac{\binom{4}{2}\times\binom{5}{2}}{5^4}
$$
4. Exactly 1 passenger gets off on floor 1
(# ways to select one passenger) x (# ways to select remaining floors)
$$
P(D) = \frac{\binom{4}{1}4^3}{5^4}
$$
5. Exactly one passenger gets off on floor 1 and exactly one gets off on floor 2
(# ways to select 2 passengers) x (# ways to assign them) x (# ways to select remaining floors)
$$
P(E) = \frac{\binom{4}{2}\times2\times3^2}{5^4}
$$

> Definition: Multinomial Coefficient Theorem
> Consider $n$ objects with consist of $k$ indistinguishable types. Suppose that there are $n_i$ objects of type $i$. Then, the number of distinguishable arrangements of the $n$ objects is
$$
\frac{n!}{n_1!n_2!\cdots n_k!}
$$

> Consider rearranging the letters at random in the name “ZENYATTA” to form a single ‘word’.
1. How many ways can this be done?
(# total permutations) / (# replacements)
$$
|A| = \frac{8!}{2!2!}
$$
2. What is the probability that all of the letters appear in alphabetic order?
(# alphabetical permutations) / (# total permutations)
$$
P(B)=\frac{1}{8!}
$$
3. What is the probability that the word begins and ends with “T”?
(# first letter is T) x (# last letter is T)
$$
P(C)= \frac{2}{8}\times \frac{1}{7}
$$

> 3 members of the C-S department, 2 members of the math department, and 3 members of the stats department sit down at random in a row of 8 seats.
4. What is the probability that each department’s members are sitting in consecutive seats?
(# permutations of faculties) x (# permutations in each faculty)
$$
P(A) = \frac{3!\times3!2!3!}{8!}
$$
2. What is the probability that members of the same department are sitting on both ends of the row?
P(CS on both ends) + P(Math both ends) + P(Stats both ends)
$$
P(B) = \frac{3(2)+2(1)+3(2)}{8\times7}
$$
Or, excluding order:
$$
P(B)=\frac{3(2)6!+2(1)6!+3(2)6!}{8!}
$$
> 5 floor and 5 people on an elevator, what is the probability that 2 people get off on one floor and 3 get off on the other?

$|A|$ = (# of ways to choose 2 floors) (# of ways to choose 3 people) (2 ways to permute people)
$$
P(A)=\frac{\binom{5}{2}\binom{5}{3}2}{5^5}
$$
# 2 | Probability Rules and Conditional Probability
## 2.1 | Use of Sets
### Venn Diagrams
> De Morgan's Laws (they generalize to summations)
$$
\overline{(A\cup B)}=\overline{A}\cap\overline{B}
$$
$$
\overline{(A\cap B)}=\overline{A}\cup\overline{B}
$$
## 2.2 | Addition Rules for Unions of Events
### Inclusion-Exclusion Principle
> Inclusion-Exclusion Rules:
> For arbitrary events $A$ and $B$:
$$
P(A\cup B)=P(A)+P(B)-P(A\cap B)
$$

Proof:
$$
A\cup B=A\cup(B\cap\overline{A})
$$
$$
P(A\cup B)=P(A)+P(B\cap\overline{A})
$$
$$
B=B\cap S = B\cap(A\cup\overline{A})=(H\cap A)\cup (B\cup \overline{A})
$$
$$
P(B)=P(B\cap A)+P(B\cap\overline{A})\implies P(B\cap\overline{A})+P(B)
$$
> Inclusion-Exclusion Principle (Generalized)
$$
PP(\cup_{i=1}^nA_)=\sum_iP(A_i)=\sum_{i<j}P(A_iA_j)+\sum_{i<j<k}P(A_iA_jA_k)-\sum_{i<j<k<l}P(A_IA_jA_kA_l)+\cdots
$$

Ex: At least one die shows 6
$$
S=\{(d_1,d_2), d_i\in\{1,\ldots,6\}\}
$$
|S| = 36
$A_1$ = P(first die shows 6)
$A_2$ = P(second die shows 6)
$$
P(A)=P(A_1)+P(A_2)-P(A_1A_2) = \frac{1}{6} + \frac{1}{6} - \frac{1}{36} = \frac{11}{36}
$$

Ex: 80% Tim Hortons, 63% Canadian Tire, 51% both
1. Canadian Tire and Tim Hortons
T = {TH}, C = {CT}
$$
P(T)=0.8, P(C)=0.63, P(T\cap C)=0.51
$$
$$
P(T\cup C)=P(T)+P(C)-P(T\cap C)=0.8+0.63-0.51
=0.92
$$
2. Canadian Tire but not Tim Hortons
We want $P(C\cap\overline{T})$
$$
P(C)=P(C\cap(T\cup\overline{T}))=P(C\cap T)+P(C\cap \overline{T})
$$
$$
P(C\cap\overline{T})=P(C)-P(C\cap T)=0.63-0.51=0.12
$$

Ex: Rearrange the letters in "FOOD"
1. $P(A)$, A = the event that the two O's appear together
S = {Distinguishable Arrangements assuming Os are indistinguishable}
$$
|S|= \frac{4!}{2!}=12
$$
$$
|A| = 3!
$$
$$
P(A)=\frac{3!}{12}=\frac{1}{2}
$$
2. $P(B)$, B = the event that the word starts with F
$$
|B|=\frac{3!}{2!}=3
$$
$$
P(B)=\frac{1}{4}
$$
3. $P(\overline{A}\cap\overline{B})$
$$
\begin{align}
P(\overline{A}\cap\overline{B})&=1-P\overline{(\overline{A}\cup\overline{B})} \\
&=1-P(A\cup B) \\
&=1-[P(A)+P(B)-P(A\cap B)] \\
&=1-[\frac{1}{2}+\frac{1}{4}-\frac{2}{12}] \\
&= \frac{5}{12}
\end{align}
$$
## 2.3 | Dependent and Independent Events
### Independence
> Definition: Independence
> Two events $A$ and $B$ are said to be **independent** of
$$
P(A\cap B)=P(A)P(B)
$$
> A sequences of events $A_1,A_2,\cdots$ are said to be **independent** if
$$
P(A_{i1}\cap A_{i2}\cap\cdots\cap A_{ik})=P(A_{i1})P(A_{i2})\cdots P(A_{ik})
$$
> for all possible subsets of size k, $i_1,i_2,\cdots i_K$. Events that are not independent are called **dependent.**

Ex: Consider rolling two fair die, and let
A = {sum is 10}, B = {first die is 6}, C = {sum is 7}
1. A and B are dependent
$$
P(A)=\frac{3}{36}, P(B)=\frac{1}{6}, P(A\cap B)=\frac{1}{36}\neq P(A)P(B)
$$
2. B and C are independent
$$
P(C)=\frac{1}{6}, P(B\cap C)=\frac{1}{36}=P(B)P(C)
$$
3. A and C are dependent
$$
P(A\cap C)=\emptyset\neq P(A)P(B)
$$
> Proposition: 
> If $A$ and $B$ are independent and mutually exclusive (disjoint), then either $P(A)=0$ or $P(B)=0$

Proof:
Suppose $A,B$ are independent and disjoint, then $P(A)P(B)=P(A\cap B)=P(\emptyset)=0$

> Remark: 
> Pairwise independence of events doesn't mean that the events are independent

Experiment: Roll two fair die
A = {first die = 1}, B = {second die = 1}, C = {sum = 7}
Each pair is independent, but
$$
P(A\cap B\cap C)=0\neq P(A)P(B)P(C)= (\frac{1}{6})^3
$$

> Proposition:
> If $A, B$ are independent, then $\overline{A},\overline{B}$; $A,\overline{B}$; $\overline{A},B$ are all pairwise independent.

Proof: Suppose $A,B$ are independent.
$$
\begin{align}
P(\overline{A}\cap\overline{B})&=1-P(A\cup B) \\
&=1-[P(A)+P(B)-P(A\cap B)] \\
&=1-[P(A)+P(B)-P(A)P(B))] \\
&=(1-P(A))(1-P(B)) \\
&=P(\overline(A)P(\overline{B})))
\end{align}
$$
## 2.4 | Conditional Probability and Product Rules
### Conditional Probability
> Definition: Conditional Probability
$$
P(A\mid B) \frac{P(A\cap B)}{P(B)}
$$
![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJFKpu7o38Tug2lv15J_WIQ9frESb1wZiSQ&s)

A = {sum is 10}, B = {first die is 6}, C = {sum is 7}
1. $P(A\mid B)$
$$
=\frac{P(A\cap B)}{P(B)}= \frac{\frac{1}{36}}{\frac{1}{6}}=\frac{1}{6}
$$
2. $P(B\mid A)$
$$
= \frac{P(A\cap B)}{P(B)} = \frac{\frac{1}{36}}{\frac{3}{36}}=\frac{1}{3}
$$
3. $P(A\mid C)$
$$
=\frac{P(A\cap C)}{P(C)}=\frac{0}{P(C)}=0
$$
4. $P(C\mid B)$
$$
=\frac{P(C\cap B)}{P(B)}=\frac{\frac{1}{36}}{\frac{1}{6}}=\frac{1}{6}
$$
> Definition: Independence and Conditionals
> Two events $A, B$ are independent if
$$
P(A\mid B)=P(A)
$$

Properties of conditional probability:
1. $0\leq P(A\mid B)\leq 1$
2. $P(\overline{A}\mid B)=1-P(A\mid B)$
3. If $A_1,A_2$ are disjoint, $P(A_1\cap A_2\mid B) = P(A_1\mid B)+P(A_2\mid B)$
4. $P(S\mid B)=1=P(B\mid B)$

Ex: Consider rearranging the letters in the word RACECAR
1. What is the probability that the random word ends in "R" given that it starts with "ACE"?
A = {word starts ACE}
R = {word ends R}
S = {distinguishable arrangements}
$$
|S|=\frac{7!}{2!2!2!}
$$
$$
P(R\mid A) = \frac{P(R\mid A)}{P(A)}=\frac{3!}{\frac{4!}{2!}} / \frac{\frac{7!}{2!2!2!}}{\frac{7!}{2!2!2!}} = \frac{1}{2}
$$
2. Is the event that the word starts with "ACE" independent of the event that it ends with an "R"?
$$
P(R)= \frac{\frac{6!}{2!2!}}{\frac{7!}{2!2!2!}} = \frac{2}{7} < P(R\mid A)
$$
No, they're dependent
### Product Rules
> Product Rule:
$$
P(A\cap B) = P(A\mid B)P(B) = P(B\mid A)P(A)
$$

Ex: Suppose a bag contains 12 red balls and 7 blue balls. Suppose that a ball is drawn at random, then, without replacement, a second ball is drawn at random.
1. What is the probability that both balls are red?
R1 = {first marble is red}
R2 = {second marble is red}
$$
P(R_1\cap R_2)=R(R_2\mid R_1)P(R_1) = \frac{11}{18}\times \frac{12}{19}
$$
Alternate solution:
S = {all selections of first 2 marbles}
$$
|S| = \binom{19}{2}
$$
$$
|R_1\cap R_2|=\binom{12}{2}
$$
2. What is the probability that the second ball is red?
$$
\begin{align}
P(R_@&=P(R_2\cap S)) \\
&=P(R_2\cap (R_1\cup \overline(R_1))) \\
&=P(R_2\cap R_1)+P(R_2\cap\overline{R_1})) \\
&=P(R_2\mid R_1)P(R_1)+P(R_2\mid\overline{R_1})P(\overline{R_1}) \\
&= \frac{11}{18} \frac{12}{19} + \frac{12}{18} \frac{7}{19} \\
&=\frac{12}{19} \frac{11+7}{18} \\
&=\frac{12}{19}
\end{align}
$$
### Law of Total Probability
> Definition: Partition
> A sequence of sets $B_1, B_2,\ldots B_k$ are said to partition the sample space $S$ if they partition the sample space $S$ I'm not writing the formal definition

> Theorem: Law of total probability:
> Suppose that $B_1,\ldots B_k$ partition $S$. Then for any event $A$,
$$
P(A)=P(A\mid B_1)P(B_1)+P(A\mid B_2)P(B_2)+\cdots+P(A\mid B_K)P(B_k)
$$

Usually we use $B, \overline{B}$ because that partitions any $S$:
$$
P(A)=P(A\mid B)P(B)+P(A\mid\overline{B})P(\overline{B})
$$

Example: A rare disease occurs in 0.3% of a population. A test has been developed for the disease. If the test is performed on an individual who has the disease, the probability of a positive test result (i.e. the test says that they have the disease) is 0.96. If the test is performed on an individual who does not have the disease, the probability of a positive test result is 0.05. Suppose the test is performed on a random individual in the population.
1. What is the probability that the test result will be positive?
D = {Disease}
T+ = {Test is positive}
$P(D)=0.003$
$P(T^+\mid D) = 0.96$
$P(T+\mid\overline{D}) = 0.05$
$$
\begin{align}
P(T^+) &= P(T^+\cap D)+P(T^+\overline{D}) \\
&=PT^+\mid D)P(D)+P(T^+\mid\overline{D})P(\overline{D}) \\
&=(0.96)(0.003)+(0.05)(0.997) \\
&=0.05
\end{align}
$$
2. Suppose the test comes back positive. What is the probability that the individual actually has the disease?
$$
P(D\mid T^+) = \frac{P(D\cap T^+)}{P(T^+)}=\frac{P(T^+\mid D)P(D)}{P(T^+)}=\frac{0.96(0.003)}{(0.96)(0.003)+(0.05)(0.997)}=0.05
$$
3. If the test comes back negative, what is the probability that the individual actually has the disease?
$$
\begin{align}
P(D\mid\overline{T^+}) &= \frac{P(D\cap\overline{T^+})}{P(\overline{T^+})} \\
&=\frac{P(\overline{T}\mid D)P(D)}{1-P(T^+)} \\
&= \frac{(1-P(D^+\mid D))P(D)}{1-P(T^+)} \\
&= \frac{(0.04)(0.003)}{1-0.05273} \\
&=1.2\times 10^{-4}
\end{align} 
$$
### Bayes Theorem
> Bae's Theorem
$$
P(B\mid A) = \frac{P(A\mid B)P(B)}{P(A\mid B)P(B) + P(A\mid\overline{B})P(\overline{B})}
$$

Gold Coin question
$$
P(GG\mid G) = \frac{P(G\mid GG)P(GG)}{P(G\mid GG)P(GG)+P(G\mid GS)} = \frac{2}{3}
$$
Two factories, Factory I and Factory II, produce phones for a phone brand “JimSang”. Factory I produces 60% of all JimSang phones, and Factory II produces the other 40 %. Of phones produced in Factory I, 10% are defective, and 20% of phones produced by Factory II are defective.  
1. What is the probability that a randomly selected JimSang phone is defective?  

D = {Defective phone}
$F_i$ = {Phone made in Factory i}
$$
P(F_i)=0.6,P(F_2)=0.4
$$
$$
P(D\mid F_1)=0.10, P(D\mid F_2)=0.20
$$
$$
P(D)=P(D\cap F_1)+P(D\cap F_2) = 0.6(0.10)+0.4(0.20) = 0.14
$$
2. A customer has purchased a phone, and it is not defective. What is the probability that it was produced in Factory II?
$$
P(F_2\mid \overline{D})\neq 1-P(F_2\mid D)
$$
$$
= \frac{P(\overline{D}\mid F_2)P(F_2)}{P(\overline{D})} = \frac{(1-P(D\mid F_2))P(F_2)}{1-P(D)} = (\frac{(1-0.2)0.4}{1-0.14}) = 0.37209
$$
# 3 | Univariate Discrete Probability Distributions
## 3.1 | Discrete Random Variables
Geometric Series Formula
$$
\sum_{i=0}^\infty r^i \frac{1}{1-r}
$$
Partial Geometric Series 
$$
\sum_{i=0}^k r^i = \frac{1-r^{k+1}}{1-r}
$$
Binomial Theorem
$$
(a+b)^n = \sum_{i=0}^n \binom{n}{i}a^ib^{n-i}
$$
Taylor Series for $e^x$
$$
e^x = \sum_{i=0}^\infty \frac{x^i}{i!}
$$
Example
$$
\sum_{i=1}^\infty (\frac{1}{2})^i = \frac{1}{1- \frac{1}{2}}-1 = 2-1 = 2
$$
> Definition: Random Variable
> A **random variable** is a function that maps the sample space $S$ into the set of real numbers $\mathbb{R}$. In other words:
$$
X: S\to \mathbb{R}
$$
> The values that a random variable takes is called the **range**, $X(S)$
> We say that a random variable is **discrete** if its range is finite, and **continuous** otherwise.

> Definition: Probability Mass Function
> The **probability function** of a discrete random variable $X$ is the function
$$
f_x(x)=P(X=x)
$$

Ex: Suppose that $X$ is the sum of the outcomes of a two dice roll. Calculate the probability function of X.
$$
X((d_1,d_2))=d_1+d_2
$$
$$
X(S)=\{2,3,\cdots,12\}
$$
$$
f_X(2)=P(x=2)=P(\{1,1\}) = \frac{1}{36}
$$
$$
f_X(3)=P(X=3)=P(\{(1,2),(2,1)\})=\frac{2}{36}
$$
$$
f_X(4) = \frac{3}{36}, f_X(5)=\frac{4}{36},\cdots
$$
Properties of the probability function
1. It's between 0 and 1
$$
0\leq f_X(x)\leq 1
$$
2. The sum of all probabilities is 1
$$
\sum_{x\in X(S)}f_X(x)=1
$$
## 3.2 | Functions of Random Variables
Cumulative Distribution Function (CDF)
$$
F_X(X)=P(X\leq x)
$$
When $X$ is discrete:
$$
P(X\leq x)=\sum_{y:y\leq x} f_X(y)
$$
Properties of the CDF
1. $0\leq F_X(x)\leq 1$
2. $F_X(x)\leq F_X(y)$ for $x<y$
3. $\lim_{x\to-\infty}F_X(x)=0$ and $\lim_{x\to\infty}F_X(x)=1$

Ex: Compute and graph $F_X(x)$ for a fair die roll
$$
f_x(x)=\frac{1}{6}, x\in\{1,\ldots,6\}
$$
$$
F_X(x)=P(X\leq x)
$$
CDF is CADLAG (continuous from the right, limited from the left)

Ex: $P(A)=0.9, P(B)=0.7, P(C)=0.4$
1. Compute the probability function on $X$
$$
X(S)=\{0,1,2,3\}
$$
$$
f_X(0)=P(\overline{A}+\overline{B}+\overline{C})=(0.1)(0.3)(0.6)=0.018
$$
$$
f_X(1)=P(A\cap\overline{B}\cap\overline{C})+P(\overline{A}\cap B\cap\overline{C})+P(\overline{A}\cap\overline{B}\cap C)
$$
$$
=(0.9)(0.3)(0.6)+(0.1)(0.7)(0.6)+(0.1)(0.3)(0.4)=0.216
$$
$$
f_X(2)=0.514, f_X(3)=0.252
$$
2. Compute the CDF
3. Compute P(at least 1 correct)
$$
P(X\geq1) = 1-F_X(0)=1-0.018=0.982
$$
## 3.3 | Expectation of a Random Variable
### Expected Values
> Definition: Expectation
> Suppose $X$ is a discrete random variable with probability function $f_X(x)$. Then $E(X)$ is called the **expected value** of $X$, and is defined by
$$
E(X)=\sum_{x\in X(S)}xf_x(x)
$$
> The expected value of $X$ is sometimes referred to as the **mean / full moment** of $X$

Ex: Compute $E(X)$ of a dice roll
$$
E(X)=\sum_{x\in X(S)}\times f_X(x) = \sum_{x=1}^6= \frac{21}{6} = 3.5
$$

Ex: Lotto 649

R = Return on $1 bet: $R(S)=\{-1, 499999\}$
$$
f_R(4,999,999) = \frac{1}{\binom{49}{6}} = 1-f_R(-1)
$$
$$
E[R] = (4,999,999)(\frac{1}{\binom{49}{6}})+(-1)(1-\frac{1}{\binom{49}{6}})\approx -0.642
$$
**Properties of Expectation**

> Property: Bounding
> If a random variable $X$ is bounded by $a\leq X(w)\leq b$, then
$$
a\leq E(X)\leq b
$$

If $g(x)=x^2$ and $X$ is the result of a fair six sided die roll, then compute $E[g(x)]$
$$
f_X(x) = \frac{1}{6}, x\in\{1,\ldots,6\}
$$
$$
E(x^2)=\sum_{x=1}^6 x^2 \frac{1}{6} = \frac{91}{6}\approx 15.1667 \implies E(x)=3.5
$$
> Property: Linearity of Expectation
> If $g(x)$ is a linear function $g(x)=ax+b$, then for a random variable $X$
$$
E[aX+b]=aE[x]+b
$$
> MISTAKE: It is not true in general that
$$
g(E[x])=E[g(x)]
$$
### Variance
1. Deviation
$$
E[(X-\mu)]=E[x]-\mu=0
$$
2. Absolute deviation
$$
E|X-\mu|
$$
3. Squared deviation:
$$
E(x-\mu)^2
$$
> Definition: Variance
> The **variance** of a random variable $X$ is denoted $Var(X)$, and is defined by
$$
Var(X)=E[(X-E[X]^2)]
$$

Shortcut to compute variance:
$\mu=E(x)$
$$
Var(x)=E[(x-\mu)^2]=E[x^2-2x\mu+\mu^2]=E[x^2]+e(-2x\mu)+E[\mu^2]
$$
$$
=E[x^2]-2\mu E(x)+\mu^2 = E(x^2)-\mu^2
$$
> Definition: Moments
> The $k^{th}$ moment of a random variable $X$ is defined by
$$
E(X^k)
$$
> Central Second Moment
$$
Var(X)=E[(X-E(X))^2]
$$

Suppose $X$ is a random variable such that $E(X^2)<\infty$. Then $E(X^2)\leq E(X))^2$

> Definition: Standard Deviation
$$
SD(X)=\sqrt{Var(X)}
$$
> Theorem: Lyapounov's Inequality
> If $E(X)=\mu$,
$$
E[|X-\mu|]\leq SD(X)
$$

Ex: Compute $Var(X), SD(X)$ for a die roll
$$
Var(X)=E(X^2)-(E(X)^2)= \frac{91}{6}-(3.5)^2=2.91667
$$
$$
SD(X)=\sqrt{Var(X)}=1.70
$$
> Theorem: Variance of a linear combination:
$$
Var(aX+b)=a^2Var(X)
$$

Variance Properties
1. For all random variables $X$:
$$
Var(X)\geq 0
$$
2. Larger values of $Var(X)$ indicate that the probability function / distribution of $X$ is more "spread out" around the mean
3. $Var(X)=0$ if and only if $P(X=E(X))=1$.
$$
0=Var(X)=E[(X-E(X))^2]=\sum_{X\in X(S)}(X-E(X))^2f_X(x)\implies f_X(x)=0
$$
## 3.4 | Moment Generating Functions
### Casino Day
**Roulette:** 

R = return on a Red bet of $1, $R(s)=\{1,-1\}$
$$
E[R] = \frac{1}{38}+(-1) \frac{20}{38} = -\frac{2}{38}
$$
D = return on first dozen bet, $D(S)=\{2,-1\}$
$$
E[D]=(2) \frac{12}{38}+(-1) \frac{26}{38} = -\frac{2}{38}
$$
N = return on "00" bet: $N(S)=\{35,-1\}$
$$
E[N]=35 \frac{1}{38}+(-1) \frac{37}{38}= -\frac{2}{38}
$$
All bets are EV $-0.053$, but variance is different
$$
Var(R)=E[R^2]-(E[R]^2)=1-(\frac{2}{38})^2=0.997
$$
$$
Var(D)=E[D^2]-(E(D))^2= 2^2 \frac{12}{38}+(-1)^2 \frac{26}{38}-(\frac{3}{38})^2 = 1.945
$$
**Craps:**
P(A before B) = $P(A, CA, CCA, \cdots)$
$$
=\sum_{i=0}^\infty P(C\cdots CA) = \sum_{i=0}^\infty r^ip = \frac{p}{1-r} = \frac{p}{p+q}
$$
P(winning in craps):
F = first roll
$F(S) = \{2,\ldots,12)$
$$
P(win) = \sum_{j=2}^{12}P(win\mid F=j)P(F=j)
$$
$$
= P(win \mid F=7,11)P(7,11)
$$
$$
+2[P(win\mid F=5)P(F=4)+P(win\mid F=5)P(F=5)+P(win\mid F=6)P(F=6)]
$$
$$
=\frac{8}{36}+2[\frac{\frac{3}{36}}{\frac{3}{36}+\frac{4}{36}} \frac{3}{36}+\frac{\frac{4}{36}}{\frac{4}{36}+\frac{5}{36}} \frac{4}{36}+\frac{\frac{5}{36}}{\frac{5}{36}+\frac{6}{36}} \frac{5}{36}]=0.4929
$$
$$
EV = 1(0.4929)-1(0.5071)=0.01414
$$
Odds bet
$$
O = E[R] = P \frac{\frac{3}{36}}{\frac{3}{36}+\frac{6}{36}}+(-1)[1- \frac{\frac{3}{36}}{\frac{3}{36}+\frac{6}{36}}]\implies p=2
$$
If point is 5 or 9: 3 to 2 (1.5 to 1)
If point is 6 or 8: 6 to 5 (1.2 to 1)
### Transformations of random variables
What is the probability that a 2 is rolled before an odd number?
N = { neither 2 nor odd }
$P(N) = \frac{1}{3}$
$$
P(2, N2, NN2,\ldots) = \sum_{j=0}^\infty P(N\cdots N2) = \sum_{j=0}^\infty(\frac{1}{3})^j \frac{1}{6} = \frac{1}{6}[\frac{1}{1- \frac{1}{3}}] = \frac{1}{6} \frac{3}{2} = \frac{1}{4}
$$

Remark: If $X$ is a discrete random variable with PMF $f_X(x)$ and $Y=g(X)$ for some $g:\mathbb{R}\to\mathbb{R}$, then $Y$ is a discrete random variable. Sometimes we wish to compute $f_Y(y)$ based on $f_X(x)$.
1. Determine $Y(S)$, the range of $Y$
2. For each $y\in Y(S)$, compute $f_y(y)$ by determining for which $x\in X(S) g(x)=y$, then computing
$$
f_Y(y) = \sum_{x:g(x)=y} f_X(x)
$$

Let $X$ denote the number of kings in a random 3 card hand. 
1. Calculate the PMF of $X$:
$$
f_X(0) = \frac{\binom{48}{3}}{\binom{52}{3}}\approx 0.782
$$
$$
f_X(1) = \frac{\binom{4}{1}\binom{48}{2}}{\binom{52}{3}}\approx 0.204
$$
$$
f_X(2)=\frac{\binom{4}{2}\binom{48}{1}}{\binom{52}{3}}\approx 0.013
$$
$$
f_X(3)= \frac{\binom{4}{3}\binom{48}{0}}{\binom{52}{3}}=\approx 0.001
$$
2. Let $Y=(X-1)^2$. Compute the PMF of $Y$
$f_Y(0)=P(X=1)=f_X(1)$
$f_Y(1)=P(X=0,2)=f_X(0)+f_X(2)=0.795$
$f_y(4)=P(X=3)=0.001$

3. Let $Z=2X+1$. Compute the PMF of $Z$
$f_Z(z)=F_X(\frac{{z-1}}{2})$

**Expectation and variance give a simple summary of distribution**
Skewness
$$
E[ \frac{X-E(X)}{\sqrt{Var(X)}} ]^3
$$
Kurtosis
$$
\frac{E(X-E(X))^4}{(E(X-E(X))^2)^2}
$$

There exist distributions without expectation: Suppose X is a random variable with probability mass function
$$
f_X(x) = \frac{6}{\pi^2} \frac{1}{x^2}, x=1,2,\cdots
$$
Then $E(X)=\infty$ and $Var(X)$ is not defined
### Moment generating functions
> Definition: Moment Generating Function (MGF)
> The MGF of a random variable $X$ is given by
$$
M_X(t)=E(e^{tX}), t\in\mathbb{R}
$$
> If $X$ is discrete with PMF $f_X(x)$, then
$$
M_X(t)=\sum_{x\in X(2)} e^{tx}f_X(x), t\in\mathbb{R}
$$
> An MGF is well defined if $M_X(t)<\infty$ for  $t\in[-\epsilon, \epsilon], \epsilon>0$

Properties of the MGF
1. Fubin's Theorem
$$
M_X(t)=\sum_{j=0}^\infty \frac{t^jE(x^j)}{j!}
$$
2. So long as $M_X(t)$ is defined in a neighborhood of the origin
$$
\frac{d}{dt^k}M_X(0)=E(X^k)
$$

Suppose $X$ is the outcome of a fair die roll. Use the MGF to compute its mean and variance.
$$
f_X(x) = \frac{1}{6}, x\in\{1,\ldots,6\}
$$
$$
M_X(t)=E[E^{tx}]=\sum_{x=1}^6 e^{tx} \frac{1}{6}
$$
$$
\frac{d}{dt}M_X(t)=\sum_{x=1}^6 \frac{xe^{tx}}{6}\implies \frac{d}{dt}M_X(0)
=\sum_{x=1}^6 = 3.5
$$
$$
\frac{d^2}{dt^2}M_X(t)=\sum_{x=1}^6 \frac{x^2e^{tx}}{6}\implies \frac{d^2}{dt^2}M_X(0)=\sum_{x=1}^6 \frac{x^2}{6} = \frac{91}{6}
$$
Suppose $X$ is the coin flips required to flip a heads. Compute the MGF of $X$:
$$
X(s)=\{1,2,3,\ldots\}, x\in X(S)
$$
$$
f_X(x)=P(X=x)=P(T\cdots TH)= (\frac{1}{2})^x
$$
$$
M_X(t)=E[e^{tx}]=\sum_{x=1}^\infty e^{tx}(\frac{1}{2})^x=\sum_{x=1}^\infty (\frac{e^t}{2})^x
$$
well defined if $\frac{e^t}{2}<1\implies t<\ln(2)$
well defined on $(-\infty,\ln(2))$, thus it's a good MGF because it contains the origin
$$
= \frac{1}{1- \frac{e^t}{2}}-1 = (1- \frac{e^t}{2})^{-1}-1
$$
$$
E(x)= \frac{d}{dt}M_X(0)
$$
$$
\frac{d}{dt}M_X(t)= \frac{d}{dt}[(1- \frac{e^t}{2})^{-1}-1]=-1(1-\frac{e^t}{2})^{-2}(-\frac{e^t}{2})
$$
Alternatively, you could make it look like a derivative:
$$
E(X) = \frac{1}{2}\sum_{x=1}^\infty x (\frac{1}{2})^{x-1}
$$
> Theorem: Uniqueness Theorem for MGFs
> Two functions with the same well-defined MGFs have the same probability distributions (because the MGF is just a transform of the probability distribution)

Suppose $X$ has the following MGF. Compute the distribution.
$$
M(t)=\frac{1}{4}+ \frac{11}{20}e^{-7t}+ \frac{1}{5}e^{11t}
$$
$$
X(S)=\{0,-7,11\}
$$
$$
f_X(0)=\frac{1}{4}, f_X(-7)=\frac{11}{20}, f_X(11)=\frac{1}{5}
$$
$$
M_X(t)=\sum_{x\in\{0,-7,11\}}e^{tx}f_X(x)=\frac{1}{4}e^0+\frac{11}{20}e^{-7t}+\frac{1}{5}e^{11t}
$$
> Theorem: MGFs are closed under linear combinations
$$
M_{aX+b}(t)=e^{tb}M_X(at)
$$

Ex: $E(X^2)=6, Var(X)=2, E(X)=?$
$$
Z=E(X)=E(x^2)-[Var(X)]^2=6-2^2=2
$$
## 3.5 | Special Discrete Probability Distributions
### Discrete Uniform Distribution
> Definition: Equality
$$
X\sim Y
$$
> Definition: Discrete Uniform Distribution
> Range is $[a,b]$
$$
X\sim DU(a,b)
$$

Supposed $X\sim DU(a,b)$. Compute $f_X(x), F_X(x)$
$$
X(S)=\{a,\ldots,b\}, |X(s)|=b-a+1
$$
$$
f_X(x)= \frac{1}{b-a+1}, x\in\{a,a+1,\ldots,b\}
$$
$$
\begin{align}
F_X(x)&= 0 &&(x<a) \\
&= \frac{[x]-a+1}{b-a+1} &&(a\leq x\leq b) \\
&= 1 &&(x\geq b)
\end{align}
$$
Mean and Variance of the Uniform Distribution
$$
E(X)=\frac{b+a}{2}
$$
$$
Var(X)=\frac{(b-a+1)^2-1}{2}
$$
Calculating the mean:
$$
E(X)=\sum_{x=a}^6 \frac{x}{a}= \frac{1}{n}\sum_{j=1}^n(a+j-1)=\frac{1}{n}[an + \frac{n(n+1)}{2}-n] = a + \frac{n+1}{2}-1 = \frac{b+a}{2}
$$
MGF
$$
M_X(t) = \frac{e^{at}-e^{(b+1)t}}{n(1-e^t)}
$$
Use the partial sum of geometric series:
$$
\sum_{j=a}^b (e^t)^j \frac{1}{n}
$$

### Hypergeometric Distribution
> Definition: Hypergeometric Distribution
> Yugioh reference :) Imagine drawing $n$ cards **without replacement** from an $N$ card deck with $r$ successes. The number of successes you draw is:
$$
X\sim hyp(N, r, n)
$$
> The name comes from the hypergeometric series / hypergeometric identity
	
Calculate the PMF of $X$:
$$
X(S)=\max\{0, n-(N-r)\}, \cdots,\min\{n,r\}
$$
$$
f_X(x)=P(X=x) = \frac{\binom{r}{x}\binom{N-r}{N-x}}{\binom{N}{n}}
$$
Probabilities of drawing a 5 card hand:
$$
P(J\leq 1)=P(J=0)+P(J=1) = \frac{\binom{4}{0}\binom{48}{8}}{\binom{52}{8}}+\frac{\binom{4}{1}\binom{48}{4}}{\binom{52}{5}}=0.958
$$
$$
P(J\geq 3)=P(J=3)+P(J=4) = \frac{\binom{4}{3}\binom{48}{2}}{\binom{52}{5}}+\frac{\binom{4}{4}\binom{48}{1}}{\binom{52}{5}}=0.00175
$$
### Binomial Distribution
> Definition: Binomial Distribution
> A **Bernoulli trial** is a single success/failure experiment where success has probability $p$
> A **Binomial Distribution** is the distribution of successes in $n$ Bernoulli trials
$$
X\sim Binominal(n,p)\sim Bin(n,p)
$$

Compute the PMF of a binomial distribution
$$
P(X=x)=\binom{n}{x} p^x(1-p)^{n-x}
$$
Mean and Variance
$$
E(X)=np
$$
### Negative Binomial Distribution
> Definition: Negative Binomial
> Preform Bernoulli trials with a probability of success $p$ until exactly $k$ successes are observed. Then if $X$ denotes the number of failures before $k$ successes
$$
X\sim NB(k,p)
$$
> If $y$ is the number of trials required, $y=x+k$

$$
X(S)=\{0,1,\ldots\}
$$
$$
Y(S)=\{k, k+1,\ldots\}
$$
Compute the probability function of a NB random variable:
$X\sim NB(k,p), X(S)=\{0,1,\ldots\}, x\in X(S)$
$$
F_X(x)=P(X=x)=\binom{x+k-1}{x} (1-p)^xp^k
$$
(number of sequences with $x$ failures and $k-1$ successes)
### Geometric Distribution
> Definition: Geometric Distribution
> Perform Bernoulli trials with probability of success $p$ until one success is observed. $X\sim NB(1,p)$ is written as $X\sim Geo(p)$
$$
F_X(x)=(1-p)^xp
$$

MGF of Geometric Distribution:
$$
M_X(t)= \frac{p}{1-(1-p)e^t}, t<log(\frac{1}{1-p})
$$
$X\sim Geo(p), f_X(x)=p(1-p)^x, x\in\{0,1,\ldots\}$
$$
M_X(t)=E[e^{tx}]=\sum_{x=0}^\infty e^{tx}p(1-p)^x=P\sum_{x=0}^\infty[e^t(1-p)]^x < \infty
$$
This is well-defined at the origin, and thus the uniqueness theorem applies
$$
=p \frac{1}{1-e^t(1-p)}= \frac{p}{1-e^t(1-p)}
$$

Mean and Variance
$$
E(X) = \frac{1-p}{p}=\frac{1}{p}-1, Var(x) = \frac{1-p}{p^2}
$$
$$
M_X(t)= \frac{p}{1-(1-p)e^t} \implies \frac{d}{dt}M_x(t)=-p(1-(1-p)e^t)^{-2}[-(1-p)e^t] = \frac{(1-p)e^t}{(1-(1-p)e^t)^2}
$$
$$
\implies \frac{d}{dt}M_X(0)=E(X)= \frac{1-p}{1-(1-p)} = \frac{1-p}{p}=\frac{1}{p}-1
$$
What is the probability that a coin takes more than 5 flips to show heads?
$X$ = # of tails before observing 1 heads $\sim Geo (\frac{1}{2})$
$$
P(Flips>5)=P(X\geq 5)=P(X>4)
$$
$$
=\sum_{x=5}^\infty(\frac{1}{2})(\frac{1}{2})^x
=(\frac{1}{2})(\frac{1}{2})^5\sum_{x=0}^\infty(\frac{1}{2})^x= (\frac{1}{2})(\frac{1}{2})^5 \frac{1}{1- \frac{1}{2}}= \frac{1}{2}^5
$$
Trivial Pursuit: What's the probability the number of rolls exceeds the mean?
$$
P(X>6)=P(X-1>5)=\sum_{x=6}^\infty(\frac{1}{6})(\frac{5}{6})^x=(\frac{1}{6})(\frac{5}{6})^X
$$
$$
=(\frac{1}{6})(\frac{5}{6})^6\sum_{x=0}^\infty (\frac{5}{6})^x = (\frac{1}{6})(\frac{5}{6})^6 \frac{1}{1-\frac{5}{6}} = \frac{5}{6}^ = 0.334
$$
Question: Suppose for a $p\in(0,1), X\sim NB(5,p)$ and $Y\sim Geo(p)$:
1. $E(X)>E(Y)$
$$
E(X)= \frac{5(1-p)}{p} > \frac{1-p}{p}=E(Y)
$$
2. For all $t>0, P(X>t)>P(Y>t)$
3. $Var(X)>Var(Y)$
$$
P(X=0)=p^5=P(Y=0)
$$
4. $P(X=0)\leq P(Y=0)$
$$
\{X>t\}\geq\{Y>t\}
$$

> Remark: Memory-less property of Geometric Distribution
> If $X\sim Geo(p)$, then
$$
P(X\geq t+s\mid S\geq t)=P(X\geq s)
$$
### Poisson
> Definition: Poisson Distribution (paramater is the mean)
> Binomial distribution as $n\to\infty$ and $p\to 0$
$$
f_X(x)=e^{-\lambda} \frac{\lambda^x}{x!}, x=0,1,2,3,\ldots
$$
$$
\sum_{x=0}^\infty f_X(x)=\sum_{x=0}^\infty e^{-\lambda} \frac{\lambda^x}{x!}=e^{-\lambda}e^\lambda=1
$$
> Remark: If $X\sim Poi(\lambda), E(X)=\lambda$

Example: Poisson approximation of Binomial
Suppose $\lambda\in(0,\infty)$. Consider a sequence of Binomial experiments each consisting of $n$ trials in which $p=p_n=\frac{\lambda}{n}$. Then for any fixed $x\in\{0,1,\ldots\}$
$$
\lim_{n\to\infty}\binom{n}{x}p^x_n(1-p_n)^{n-x}=e^{-\lambda} \frac{\lambda^x}{x!}
$$
Let $\lambda=np$. If $n$ is large and $p$ is close to zero,
$$
\binom{n}{x}p^x(1-p)^{n-x}\sim \frac{e^{-\lambda}\lambda^x}{x!}
$$

Ex: A bit error occurs for a given data transmission method independently in one out of every 1000 bits transferred. Suppose a 64 bit message is sent using the transmission system. What is the probability that there are exactly 2 bit errors? Approximate this using a Poisson approximation.  

X = # of errors $\sim Bin(64, \frac{1}{1000})$
$$
P(X=2)=\binom{64}{2}(\frac{1}{1000})^2(\frac{999}{1000})^{62}=0.001894
$$
$$
X\approx Poi(\frac{64}{1000})\implies P(X=2)\approx \exp(\frac{-64}{1000}\frac{64}{1000}^2 \frac{1}{2!})=0.001921
$$

If $X\sim Poi(\mu), Var(X)=\mu$ 

Shiny versions of Pokemon are possible to encounter and catch starting in Generation 2 (Pokemon Gold/Silver). Normal encounters with Pokemon while running in grass occur according to a Poisson process with rate 1 per minute on average. 1 in every 8192 encounters will be a Shiny Pokemon, on average.
1. If you run around in grass for 15 hours, what is the probability you will encounter at least one Shiny pokemon?
$X_{15}$ = # of shiny pokemon encountered in 15 hours
$$
\sim Poi(\frac{15\times60}{8192})
$$
$$
P(X\geq 1)=1-P(X=0)=1-e^{\frac{15\times60}{8192}}\frac{\lambda^x}{x!}
$$

2. How long would you have to run around in grass so that you have a better than 50 percent chance of encountering at least one Shiny pokemon?
$X_t$ = # of shiny pokemon after t hours
$$
\sim Poi( \frac{t\times60}{8192})
$$
$$
P(X_t\geq 1)=1-e^{\frac{-t\times60}{8192}}=0.5
$$
$$
t=-\frac{8192}{60}\ln0.5=94.63
$$
# 4 | Multivariate Discrete Probability Distributions
## 4.1 | Basic Terminology and Techniques
**Multiple (discrete) random variables**

Joint PMF
$$
f(x,y)=P(X=x, Y=y)
$$
If $A\subset\mathbb{R}^2$
$$
P((X,Y)\in A)=\sum_{(x,y)\in A}f(x,y)
$$
Marginal = add up on the margins to get the PMFs of $x, y$
$$
f_X(x)=P(X=x)=\sum_{y\in Y(S)}f(x,y)
$$

> Def: Independence of Random Variables
> Discrete random variables $X,Y$ with joint PMF $f(x,y)$ and marginal PMFs $f_X(x), f_Y(y)$ are said to be **independent variables** if
$$
f(x,y)=f_X(x)f_Y(y)
$$
$$
P(X=x,Y=y)=P(X=x)P(Y=y)
$$
> Let $f(x,y)=f_X(x)f_Y(y)$, then this is supported on 
$$
X(S)\times Y(S)=\{(x,y): x\in X(s), y\in Y(S)\}
$$
> Properties 
$$
0\leq f(x,y)\leq1
$$
$$
\text{some other thing but i was on twitter}
$$

Ex: $X,Y$ has the following joint PMF. 
$$
f(x,y)= \frac{1}{6}(\frac{1}{2})^x(\frac{2}{3})^y
$$
1. Compute the marginal PMFs $f_X(x), f_Y(y)$
$$
f_X(x)=\sum_{y+Y(s)}f(x,y)=\sum_{y=0}^\infty (\frac{1}{6})(\frac{1}{2})^x(\frac{2}{3})^y = \frac{1}{6}(\frac{1}{2})^x\sum_{y=0}^\infty (\frac{2}{3})^y=\frac{1}{2}(\frac{1}{2})^x\sim Geo(\frac{1}{2})
$$
$$
f_Y(y)=\sum_{x+X(s)}f(x,y)=\sum_{x=0}^\infty(\frac{1}{6})(\frac{1}{2})^x(\frac{2}{3})^y= \frac{2}{6}(\frac{2}{3})^y= \frac{1}{3}(\frac{2}{3})^y
\sim Geo(\frac{1}{3})
$$
2. Compute $P(X<Y)$
$$
\begin{align}
\sum_{(x,y) , x<y} f(x,y)&=\sum_{x=0}^\infty\sum_{y=x+1}^\infty(\frac{1}{6})(\frac{1}{2})^x(\frac{2}{3})^y \\
&=\sum_{x=0}^\infty(\frac{1}{6})(\frac{1}{2})^x\left( \sum_{y=x+1}^\infty(\frac{2}{3})^y \right) \\
&=\sum_{x=0}^\infty(\frac{1}{6})(\frac{1}{2})^x(\frac{2}{3})^{x+1}3 \\
&=\sum_{x=0}^\infty \frac{1}{2}(\frac{2}{3})(\frac{1}{3})^x \\
&=(\frac{1}{2})(\frac{2}{3})(\frac{3}{2}) \\
&=\frac{1}{2}
\end{align}
$$

If $X,Y$ are independent, their marginal PMFs satisfy
$$
f(0,0)=f_X(0)f_Y(0)
$$
Conditional Probability
$$
f_Y(y\mid x)=P(Y=y\mid X=x)=\frac{f(x,y)}{f_X(x)}
$$
## 4.2 | Multinomial Distribution
> Definition: Multinomial Distribution
> 1. Individual trials have $k$ possible outcomes with the i-th being denotes $p_i$
> 2. Trials are repeated $n$ times, so the i-th one occurs $X_i$ times
> Then, $X_1,\ldots X_k$ have a **Multinomial Distribution** with parameters $n$, $p_1m\ldots p_k$

Multinomial Distribution
$$
(X_1,\ldots X_K)\sim Multi(n, p_1,\ldots,p_k)
$$
$$
f(x_i,\ldots,x_k) = \frac{n!}{x_1!\cdots x_k}p_1^{x_1}\cdots p_1^{x_k}, x_1+\ldots+x_k=n
$$
$$
X_i\sim Bin(n, p_i)
$$
$$
X_i\mid X_j = m\sim Bin(n-m, \frac{p_i}{1-p_j})
$$
Roulette
$$
(B,R,G)\sim Multinomial(10, \frac{18}{38}, \frac{18}{38}, \frac{2}{38})
$$
$$
P(B=4, R=4, G=2)
$$
$$
P=(\frac{18}{38})^4(\frac{18}{38})^4(\frac{2}{38})^2 \frac{10!}{4!4!2!}
$$
General PMF
$$
f(x_1,\ldots,x_k)=\frac{n!}{x_1!x_2!\cdots x_k!}p_1^{x_1}\cdots p_1^{x_k}
$$
Properties
1. If $(X_1,\ldots,X_k)\sim Multi(n, p_1, \ldots, p_k)$, then $X_i\sim Bin(n, p_i)$
2. $X_i=n-\sum_{j\neq i}X_j$ so that $X_i$ are dependent
3. Suppose $(X_1,\ldots, X_m)\sim Multi(n, p_1, \ldots, p_k)$. Then
$$
X_i\mid X_j = m\sim Binom(n-m, \frac{p_i}{1-p_j})
$$
(Intuition: the "**margins**" of a multinomial are a binomial)

Ex: Roulette
$$
R\mid B =5\sim Bin(10-5, \frac{\frac{18}{38}}{1-\frac{18}{38}})\sim Bin(5, \frac{18}{20})
$$
$$
P(R=5\mid B=5)
$$
$$
=\binom{5}{5}=(\frac{18}{20})^5(\frac{2}{20})^0=(\frac{18}{20})^5=0.59
$$
Ex: 2 hearts, 2 spades, 1 diamond with replacement (w/o would be **multi-hypergeometric**)
$$
(C,D,H,S)\sim Multi(5, \frac{1}{4}, \frac{1}{4}, \frac{1}{4}, \frac{1}{4})
$$
$$
P(H=2, S=2, D=1) = (\frac{1}{4})^2(\frac{1}{4})^2(\frac{1}{4})(\frac{5!}{2!2!1!})
$$
Ex: Given 3 hearts in 5 cards, what is the possibility of no spades?
$$
S\mid H=3\sim Bin(2, \frac{\frac{1}{4}}{1-\frac{1}{4}})\sim Bin(2, \frac{1}{3})
$$
$$
P(S=0\mid H=3)= (\frac{2}{3})^2
$$
Ex: What if we add two distributions?
$$
H+S\sim Binom(5, \frac{1}{2})
$$
## 4.3 | Expectations, Covariance, Correlation
**Distributions of multivariate transformations:**
Suppose that
$$
h:\mathbb{R}^2\to\mathbb{R}
$$
Then, for jointly distributed random variables $X,Y, U=h(X,Y)$ is a random variables. If $X,Y$ have joint p.f. $f(x,y)$, then the probability function of $U$ is given by
$$
f_U(t)=P(U=t)=\sum_{(x,y):H(x,y)=t} f(x,y)
$$
Show that $X+Y\sim Poi(\mu+\lambda)$
$$
f_X(x)=\frac{e^{-\mu}\mu^x}{x!}
$$
$$
f_X(y)=\frac{e^{-\lambda}\lambda^y}{y!}
$$
$$
f(x,y)=\frac{e^{-\mu}\mu^x}{x!} \frac{e^{-\lambda}\lambda^y}{y!}
$$
$$
T=X+Y, T(S)=\{0,1,2,\ldots\}
$$
For $t\in T(S)$
$$
\begin{align}
P(T=t)&=P(X+Y=t) \\
&=P(X+Y=t \cap S) \\
&=P(X+Y=t\cap \cup_{x\in X(S)}\{X=x\}) \\
&=\sum_{x\in X(S)}P(X+Y=t\cap \{X=x\}) \\
&=\sum_{x=0}^\infty f(x,t-x) \\
&=\sum_{x=0}^t e^{-(\mu+\lambda)} \frac{\frac{\mu^x}{x!}\lambda^{t-x}}{(t-x)!} \\
&=\frac{e^{-\mu+\lambda}}{t!}\sum_{x=0}^t \frac{t!}{x!(t-x)!}\mu^x\lambda^{t-x} \\
&=\frac{e^{-\mu+\lambda}(\mu+\lambda)^t}{t!}
\end{align}
$$
Properties
1. Convolution formula
$$
P(X+Y=t)=\sum_{y\in Y(S)}f(t-y,y)=\sum_{x\in X(S)}f(x,t-x)
$$
2. Binomial is closed under addition
$$
Bin(n,p)+Bin(m,p)\sim Bin(n+m, p)
$$
3. Geometric + Geometric = Negative Binomial
$$
Geo(p)+Geo(p)\sim NB(2,p)
$$
Sums of independent:
- Poissons are Poisson
- Geometrics with same $p$ are NB
- Binomials with same $p$ are Binomial

> Definition: Multivariate Expectation
$$
E(g,(X,Y))=\sum_{(x,y)}g(x,y)f(x,y)
$$
$$
E(g(X_1,\ldots,X_n)))\sum_{(x_1,\ldots, x_n)}g(x_1,\ldots,x_n)(x_1,\ldots,x_n)
$$

Properties of EV of Jointly Distributed Random Variables
1. Closed under linear combinations
$$
E[a\cdot g_1(X,Y)+b\cdot g_2(X,Y)]=a\cdot E(g_1(X,Y))+b\cdot E(g_2(X,Y))
$$
2. Decomposing addition
$$
E(X+Y)=\sum_X xf_X(x)+\sum_y yf_Y(y)=E(X)+E(Y)
$$
> Covariance
$$
\begin{align}
Cov(X,Y)&=E[(X-E[X])(Y-E[Y])] \\
&=E[XY]-E[X]E[Y]
\end{align}
$$
> If $X,Y$ independent
$$
E[g(X)h(Y)]=E[g(X)]E[h(Y)]
$$
$$
Cov(X,Y)=0
$$
> Correlation
$$
corr(X,Y)=p=\frac{Cov(X,Y)}{SD(X)SD(Y)}
$$

Bilinear form property of $Cov$
$$
Cov(aX, bY)=abCov(X,Y)
$$
$$
Cov(X+Y, Z+W), = Cov(X,Z)+Cov(X,W)+Cov(Y,Z)+Cov(Y,W)
$$
If $X,Y$ independent, then
$$
M_{X+Y}(t)=M_X(t)M_Y(t)
$$
## 4.4 | Linear Combinations of Random Variables
Expectation of random variable combinations
$$
E(\sum_{i=1}^n a_iX_i)= \sum_{i=1}^n a_iE(x_i)
$$
Variance of random variable combinations
$$
\begin{align}
Var(\sum_{i=1}^n a_iX_i)&=\sum_{i=1}^n a_i^2Var(X_i)+\sum_{1\leq i\neq j\leq n} a_ia_j Cov(X_i, X_j) \\
&=\sum_{i=1}^na_i^2Var(X_I)+2\sum_{1\leq i\leq j\leq n}a_ia_jCov(X_i, X_j)
\end{align}
$$
Indicator (Bernoulli) Random Variables:
Let $A\subset S$ be an event. We say that $\mathbb{1}_A$ is the indicator random variable of event $A$
$$
\mathbb{1}_A = \begin{cases}
1 & w\in A \\
0 & w\in\overline{A}
\end{cases}
$$
Properties
$$
E(\mathbb{1}_A)=P(A)
$$
$$
Var(\mathbb{1}_A)=P(A)(1-P(A))
$$
$$
Cov(\mathbb{1}_A,\mathbb{1}_B)=P(A\cap B)-P(A)P(B)
$$
## 4.5 | Markov's Inequality, Chebyshev's Inequality, Law of Large Numbers
> Weak Law of Large Numbers:
> Suppose $X_1,\ldots X_n$ are independent RVs with mean $\mu$ and variance $\sigma^2$, and
$$
\overline{X}=\frac{1}{n}\sum_{i=1}^n X_i
$$
> is the sample mean. Then for all $\epsilon>0$,
$$
\lim_{n\to\infty} P(|\overline{X}-\mu|>\epsilon)=0
$$

> Markov's Inequality
> If $X$ is an RV with $E[|X|]<\infty$, then for any $\epsilon>0$,
$$
P(|X|>\epsilon)\leq \frac{E[|X|]}{\epsilon}
$$

> Chebyshev's Inequality
> If $X$ is a RV with $E(X)=\mu$, $Var(X)=\sigma^2$, then for any $\epsilon>0$
$$
P(|X|>\epsilon)\leq \frac{E[X^2]}{\epsilon^2}
$$
$$
P(|X-\mu|>\epsilon)\leq \frac{\sigma^2}{\epsilon^2}
$$

For 10 coin tosses, what's the probability that the sample mean $\overline{X}$ deviates by more than $0.01$ from $p=0.5, n=10$
$$
\overline{X}=\frac{1}{10}\sum_{i=1}^{10}X_i \sim Bin(10, 0.5)
$$
$$
\begin{align}
P(|\overline{X}-0.5|>0.01)&=1-P(\overline{X}_1+\cdots+\overline{X}_{10}=5) \\
&=1-P(X=5), X\sim Bin(10,0.5) \\
&=1-\binom{10}{5}10^5 \\
&=1- \frac{63}{256} \\
&\approx 0.75
\end{align}
$$
## 4.6 | Conditional Probability Distributions
Conditional distribution:
$$
f_{X\mid Y}(x\mid y)=P(X=x\mid Y=y) = \frac{f(x,y)}{f_Y(y)}
$$
Conditional mean:
$$
E[X\mid Y=y]=\sum_{x\in X(S)} xf_{X\mid Y}(x\mid y)
$$
$$
E[g(X,Y)\mid Y=y]=\sum_{x\in X(S)} g(x,y)f_{X\mid Y}(x\mid y)
$$
# 5 | Univariate Continuous Probability Distributions
## 5.1 | Continuous Random Variables
How to model continuous RVs?
1. Define the analog of the probability function (hard)
2. Model relative frequency from the histogram (calc)
## 5.2 | Functions of Random Variables
> Definition: Continuous RV $X$ has **probability density function (pdf)** $f(x)$ if
$$
f(x)\geq 0
$$
$$
\int_{-\infty}^\infty f(x)dx=1
$$
$$
P(a\leq X\leq b) = \int_a^b f(x)dx
$$
> Support of a pdf is
$$
supp(f)=\{x\in\mathbb{R} f(x)\neq 0\}
$$

> Definition: CDF of a random variable X is
$$
F_X(x)=P(X\leq x)
$$
> If $X$ is continuous with pdf $f(x)$, then
$$
F_X(x)=\int_{-\infty}^x f(y)dy
$$
> Moreover, by FTC part I:
$$
\frac{d}{dx}F_X(x)=f(x)
$$
> FTC part II:
$$
P(a\leq X\leq b)=F_X(b)-F_X(a)=\int_{-\infty}^b
f(y)dy-\int_{-\infty}^a f(y)dy=\int_a^b f(y)dy
$$
> Properties of the CDF of a continuous RV:
> 1. $F(x)$ is continuous
> 2. $\lim_{x\to\infty}F(x)=1, \lim_{x\to-\infty}F(x)=0$
> 3. $F(x)$ is differentiable except at a countable number of exceptional points
## 5.3 | Expectation of a Random Variable
> If $X$ is a continuous RV with pdf $f(x)$ and $g:\mathbb{R}\to\mathbb{R}$, then
$$
E(g(X))=\int_{\infty}^\infty g(x)f(x)dx
$$
> It follows that
$$
E(X)=\int_{-\infty}^\infty xf(x)dx
$$
$$
Var(X)=E([X-E(X)^2])=\int_{-\infty}^\infty (x-E(X))^2f(x)dx
$$

Cool things
1. Expectation still linear
$$
E[ag(x)+b]=aE[g(X)]+b
$$
2. Variance shortcut still works
$$
Var(X)=E(X^2)-(E(X))^2
$$

> Definition: Moment Generating Function
$$
M_X(t)=E[e^{tX}]=\int_{-\infty}^\infty e^{tx}f(x)dx
$$
## 5.4 | Special Continuous Probability Distributions
> Theorem: Let $X$ be a continuous random variable with pdf $f_X(x)$. Suppose that $g$ is a strictly monotonic differentiable function on the range of $X$. Then, the pdf of $Y=g(x)$ in the region where $f_Y(y)>0$ is given by the following, where $g^{-1}$ denotes the inverse of $g$
$$
f_Y(y)=f_X(g^{-1}(y)) |\frac{dg^{-1}(y)}{dy}|
$$

> Let $X$ be a continuous RV with pdf $f_X(x)$. Then, $Y=aX+b$ has pdf
$$
f_Y(y) \frac{1}{|a|}f_X(\frac{y-b}{a})
$$

> Definition: We say that $X$ has a (continuous) uniform distribution on $(a,b)$, or $X\sim U(a,b)$, if $X$ has pdf
$$
f(x)=
\begin{cases}
\frac{1}{b-a} & x\in (a,b) \\
0 & \text{otherwise}
\end{cases}
$$
> Properties
$$
E(X)=\frac{{a+b}}{2}
$$
$$
Var(X)=\frac{(b-a)^2}{12}
$$
$$
M_X(t)= \begin{cases}
\frac{{e^{tb}-e^{ta}}}{t(b-a)} & t\neq0 \\
1 & t=0
\end{cases}
$$

> Definition: We say that $X$ has an exponential distribution $(X\sim exp(\theta))$ if the density of $X$ is
$$
f(x)= \begin{cases}
\frac{1}{\theta}e^{-x/\theta} &x>0 \\
0 & x\leq 0
\end{cases}
$$

> Definition: Quantile / Percentile
> The 100 x q-th percentile (or $100\times q\%$ **quantile**) of the distribution of $X$ is the value $c_q$ such that
$$
F_X(c_q)=q
$$
> The quantile is the "inverse" if the CDF, and $F_X^{-1}$ is called the **quantile** function. The **median** of a distribution is its 50-th percentile.

> Definition: Normal Distribution
> $X\sim N(\mu, \sigma^2)$ with mean $\mu$ and variance $\sigma^2$ if the density is
$$
f(x)=\frac{1}{\sqrt{2\pi\sigma^2}} e^{\frac{-(x-\mu)^2}{2\sigma^2}}
$$

Properties
1. Symmetric about the mean:
$$
P(X\leq \mu+t)=P(X\geq\mu-t)
$$
2. Unimodal with a peak at $\mu$
3. (Standardization)
$$
Z\sim N(0,1) \text{ and } X=\sigma Z+\mu \implies X\sim N(\mu,\sigma^2) \implies Z=\frac{X-\mu}{\sigma}\sim N(0,1)
$$
4. mean $\mu$ and variance $\sigma^2$
5. MGF looks like the density (that's why it's special)
$$
M_X(t)=e^{\mu t+\frac{\sigma^2t^2}{2}}
$$

> Definition: Standard normal random variable
> $X\sim N(0,1)$ if
$$
\phi(x)=\frac{1}{\sqrt{2\pi}}e^{\frac{-x^2}{2}}
$$
> and the CDF is 
$$
\phi(x)=\int_{-\infty}^x \frac{1}{\sqrt{2\pi}} e^{\frac{-y^2}{2}}dy
$$

PROBLEM: Normal distribution has no elementary antiderivative ($e^{-x^2}$)! 
Evaluate them numerically with the table

> Definition: The 68-95-99.7 Rule: 
> If $X\sim N(\mu,\sigma^2)$, then the probability that $X$ is within $\{1,2,3\}$ standard deviations of the mean is:
$$
P(\mu-\sigma\leq X\leq \mu+\sigma)\sim .68
$$
$$
P(\mu-2\sigma\leq X\leq \mu+2\sigma)\sim .95
$$
$$
P(\mu-3\sigma\leq X\leq \mu+3\sigma)\sim .997
$$

> Theorem: Joint Density Function
> If $X_i\sim N(\mu_i,\sigma_i^2)$
$$
\sum_{i=1}^n a_iX_i\sim N(\sum_{i=1}^na_i\mu_i\sum_{i=1}^na_i^2\sigma_i^2)
$$

> Sample Mean
> Suppose that $X_1,\ldots,X_n$ are independent and that $X_i\sim N(\mu,\sigma^2)$
$$
\overline{X} = \frac{1}{n}\sum_{i=1}^n X_i\sim N(\mu, \frac{\sigma^2}{n})
$$
## 5.5 | Central Limit Theorem
> Theorem (Central Limit Theorem)
> Suppose $X_1,X_n$ are independent RVs, each with a common CDF $F$. Suppose further that $E(X_i)=\mu, Var(X_i)=\sigma^2<\infty$. Then
$$
P(\frac{\overline{X}-\mu}{\frac{\sigma}{\sqrt{n}}}\leq x)\to\phi(x)
$$
> as $n\to\infty$. In other words, if $n$ is large,
$$
\overline{X}\approx (\mu,\frac{\sigma^2}{n}), \sum_{i=1}^nX_i\approx N(n\mu, n\sigma)
$$

> Binomial to Normal
> If $X_n\sim Bin(n,p)$, then for large $n$
$$
\frac{X_n-np}{\sqrt{np(1-p)}}\approx N(0,1)
$$
> Poisson to Normal
> If $X_\lambda\sim Poi(\lambda)$, then for large $\lambda$

$$
\frac{X_\lambda-\lambda}{\sqrt{\lambda}}\approx N(0,1)
$$
Suppose that you are interested in buying some red potatoes from a local grocery store. The potatoes are priced at 1.60 per kilogram. The average weight of a red potato at the store is 200 grams with a standard deviation of 25 grams. The distribution of the weights of potatoes is unknown.
1. Suppose you take a random sample of 49 potatoes. What is the approximate probability that the average weight of the 49 potatoes sampled is between 195 and 205 grams (inclusive)?

Use CLT to approximate sample mean with normal distribution
$$
\overline{X}_{49}\approx N(200, \frac{25^2}{49})
$$
$$
P(195\leq \overline{X}_{49}\leq 205)=P(\frac{195-200}{\sqrt{\frac{25^2}{49}}}\leq Z\leq \frac{205-200}{\sqrt{\frac{25^2}{49}}})
$$
$$
=P(-1.4\leq Z\leq 1.4)=2\phi(1.4)-1\approx 0.838
$$
2. Now, suppose you take a random sample of 36 potatoes. What is the approximate probability that the random sample of 36 potatoes will cost more than 12.
$$
T_{36}=\sum_{i=1}^{36}x_i\approx N(36\times200, 36\times25^2)
$$
$$
C_{36}=\frac{1.60}{1000}\times T_{36}\approx N(\frac{1.60}{1000}\times36\times200, (\frac{1.60}{1000})^236\times25^2)
$$
$$
P(C_{36}>12)=P(Z>2)=0.0228
$$
3. Now, suppose that you only have 10 in cash, and you want to buy as many potatoes as you can with this 10. Determine the largest number of potatoes that you can select (randomly, of course), in order to be at least 85% certain that their overall cost will be at most 10.
$$
C_n\approx N(\frac{1.60}{1000}\times n\times 200, (\frac{1.60}{1000})^2\times n\times 25^2)
$$
$$
P(C_n\leq 10)\geq 0.85
$$
$$
P(Z\leq\frac{10-m_n}{\sqrt{v_n}})\geq 0.85
$$
$$
\frac{10-m_n}{\sqrt{v_n}}=x_{0..85}=1.04
$$
$$
n=30
$$
