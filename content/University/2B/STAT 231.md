```
Rohit Gajendragadkar

R Assignments (3) - 2%
Tutorial Quizzes (2) - 7%
Term Test 1 - 20%
Final - 60%
```
# 1 | Introduction to Statistical Sciences
## 1.1 | Empirical Studies and Statistical Sciences
Review: Binomial, Poisson, Multinomial, Normal / Gaussian, Uniform, Exponential
## 1.2 | Data Collection
Populations and Processes
- Population = collection of units
- Process = mechanism by which units are picked over period of time

Variates = Characteristics of units represented by variables ($x,y,z$)
- Continuous (**measurable**, weight)
- Categorical (hair colors)
- Discrete (**countable**, presence vs absence of disease)
- Ordinal (small, medium, large)
- Complex (open-ended response)

Attributes = function of a variate defined for all units
- Ex: proportion of adults in Ontario who own a smartphone
- Ex: average drop in blood pressure due to a medical treatment

Approaches to data collection
- Sample Surveys
- General polls ("this poll is said to be accurate to within $\pm 3\%$" 19 times out of 20")

Experiments and Observational studies
- It would be unethical to assign a person to drink and smoke all day
- Experiments are conducted with **random assignment**
	- Eliminates **bias** (a systematic favoring of one outcome over another)
	- Guards against **confounding factors**
## 1.3 | Data Summaries
### Numerical Summaries
Summarizing numerical data
1. Measures of location (mean, median, mode)
2. Measures of variability and dispersion (sample variance, STD, range, IQR)
3. Measures of shape (skewness, kurtosis)

**Measures of location**
Sample mean (average)
$$
\overline{y} = \frac{{y_1+y_2+\ldots+y_n}}{n}=\frac{1}{n}\sum_{i=1}^n y_i
$$
Median (50th percentile)
$$
\hat{m}=Q(0.5)
$$
Mode = most commonly occurring datapoint

> Order statistics
$$
y_{(1)}\leq y_{(2)}\leq\ldots\leq y_{(n)}
$$
> Let $y=\{y_1,y_2,\cdots y_n\}$. For $p\in(0,1),$ let $m=(n+1)p$. The $p^{th}$ quantile (or $100p^{th}$ percentile) of $y$ is defined as
$$
q(p)=\frac{y_{(\lfloor m\rfloor)}+y_{(\lceil m\rceil)}}{2}
$$
> For an odd number of observations, the median is defined as
$$
\hat{m}=y_{(\frac{n+1}{2})}
$$
> For an even number,
$$
\hat{m}=\frac{1}{2}(y_{(\frac{n}{2})}+y_{(\frac{n}{2}+1)})
$$

**Measures of variability**
> Sample Variance (where $\bar{x}$ is the sample mean)
$$
s^2=\frac{1}{n-1}\sum_{i=1}^n(x_i-\bar{x})^2
$$
> Sample standard deviation
$$
s=\sqrt{s^2}
$$
> Sample range:
$$
R=\max(y)-\min(y)
$$
> Sample inter-quartile range:
$$
IQR = q(0.75)-q(0.25)
$$

Summary: Measure of variability
- Always non-negative
- Range, sample variance, sample std deviation are all susceptible to outliers
- IQR is is more robust, since it discards the most extreme 50%

> Histograms
> Given a dataset $x=\{x_1,x_2,\ldots, x_n\}$, split its range into $k$ non-overlapping intervals  (bins) $l_j=[a_{j-1}, a_j)$ for $j=1,2,\ldots,k$ with $a_0\leq\min(x), a_k>\max(x)$
> 
> For each bin $l_j$, let $f_j=\#\{x\in x\mid x\in l_j\}$ be the number of observations which fall into each bin. $\sum_{j=1}^kf_j=n$, since each observation in the dataset is counted exactly once.
> 
> The proportionality constant for the $j^{th}$ interval is usually 1 (frequency histogram), or $\frac{1}{n(a_j-a_{j-1})}$ (relative frequency / density histogram.

**Measures of shape**
> Skewness = measures the symmetry / asymmetry of a distribution
- **Right/positively** skewed if most values are on the left side and there's a longer **tail on the right**. In this case, $mean > median$
- **Left/positively** skewed if most values are on the right side and there's a longer **tail on the left**. In this case, $mean < median$
- **Symmetric** if neither

> Sample Skewness
$$
g_1=\frac{\frac{1}{n}\sum_{i=1}^n(x_i-\bar{x})^3}{(\frac{1}{n}\sum_{i=1}^n(x_i-\bar{x})^2)^{3/2}}
$$
- The denominator is always positive and accounts for the "scale"
- The numerator is positive (negative) if the contributions from the values over (under) $\bar{x}$ are larger in magnitude, i.e. there is a long right (left) tail.

> Kurtosis = measures the "heaviness" of the tails: how frequent the more extreme values are

> Sample Kurtosis
$$
g_2=\frac{\frac{1}{n}\sum_{i=1}^n(x_i-\bar{x})^4}{(\frac{1}{n}\sum_{i=1}^n)(x_i-\bar{x})^2)^2}
$$
- Kurtosis is always positive, and the numerator is larger when extreme values are common
- If kurtosis $>3$ ($<3$), we say that the data has “heavier” (lighter) tails than normally distributed data

Summary: Measures of shape
- Measures of shape tell us what the relative frequency histogram should look like, eg. $g_1\approx 0, g_2\approx 3$ means the data looks similar to a normal distribution
- Measures of shape should be invariant under linear transformations $(x\to ax+b)$
### Graphical Summaries
> Empirical cumulative distribution function (ecdf)
> Given a dataset $x$, for all $t\in\mathbb{R}$
$$
\hat{F}(t)=\frac{\#\{x\in x\mid x\leq t\}}{n}
$$
> (what fraction of the data is within a certain range)

Properties
- Is a stepwise increasing function
- Helps us determine
	- If the data could have been generate by a specific probability model
	- If two datasets are similar
- Remarks
	- Horizontal separation means one dataset is consistently larger
	- Steeper ecdf means less variability (more values concentrated in a smaller range)
	- ecdf is the "integral" of the relative frequency histogram
	- cdf is the "integral" of the pdf
## 1.4 | Probability Distributions and Statistical Models
Box Plots / Five number summary
$$
y_{(1)}, q(0.25), q(0.5), q(0.75), y_{(n)}
$$
- Lower whisker = $q(0.25)-1.5\times IQR$
- Upper whisker = $q(0.75)+1.5\times IQR$
- $IQR = q(0.75)-q(0.25)$
- Anything outside the whiskers is considered an outlier

Other plots
- Run chart (to show change over time)
- Scatter plot (to show relationship between two variables)

Numerical Summaries
> Sample correlation coefficient
$$
r = \frac{\sum_{i=1}^n(x_i-\bar{x})(y_i-\bar{y})}{\sqrt{\sum_{i=1}^n(x_i-\bar{x})^2}\sqrt{\sum_{i=1}^n(x_i-\bar{y})^2}}
$$
- Numerator is positive when $x_i,y_i$ are above or below the mean at the same time
- Numerator is negative when one is above and one is below
- The denominator (multiplying the std) accounts for the scale of the data

Takeaways
- $|r|$ close to 1 in a linear relationship
- $r$ close to 1 with a positive relationship, and -1 with a negative relationship
- $r\approx0$ when no linear relationship or a non-linear relationship

Explanatory vs response variables (independent means something else)
- $x$ explanatory (independent) variate
- $y$ response (dependent) variate
## 1.5 | Data Analysis and Statistical Inference
Data Analysis and Statistical Inference
- Descriptive statistics + Exploratory data analysis
- Statistical inference
	- Estimation
	- Hypothesis testing
	- Prediction

Motivation of Ch 2: Take random variable $X\sim Ber(p)$ - one Bernoulli trial
$$
P(X=1)=P
$$
$$
P(X=0)=1-P
$$

Motivation of ECDF (stepwise chart)
$$
S=\{0,1,1,0,1\}
$$
$$
\hat{F(t)}=\frac{\#\{x\in S\mid x\leq t\}}{|S|}
$$
Law of Large Numbers: ECDF converges to true CDF as $n\to\infty$
# 2 | Statistical Models and Maximum Likelihood Estimation
## 2.1 | Choosing a Statistical Model
**STAT 230 Review**
> Cumulative Distribution Function (cdf) (non-decreasing)
$$
F(x)=P(X\leq x)
$$
> Probability Mass Function (pmf)
$$
f(x)=\begin{cases}
P(X=x)&x\in range(x) \\
0&x\notin range(x)
\end{cases}
$$
> Probability Density Function (pdf)
$$
F(x)=\int_{-\infty}^xf(t)dt
$$

Splitting up expectation and variance
$$
E(\sum_{i=1}^n a_Ix_i) = \sum_{i=1}^na_iE(X_i)
$$
$$
Var(\sum_{i=1}^na_ix_i)=\sum_{i=1}^na_i^2Var(x_i)
$$

**Statistical Models**
> Uppercase = random variable / Lowercase = observed value
> Let $Y_1\cdots Y_n$ be a collection of **independent and identically distributed (iid)** random variables 
> The observed data $\{y_1,y_2,\cdots\}$ are **realizations** of random variables

Sample Mean
$$
\bar{Y} = \frac{1}{n}(Y_1+\cdots+Y_n)
$$
Suppose that for each $Y_i$, $E(Y_i)=\mu, Var(Y_i)=\sigma^2$. Then
$$
E(\bar{Y})=\mu;\quad Var(\bar{Y})=\frac{\sigma^2}{n}
$$
Derivation
$$
E(\bar{Y})=E\left( \frac{1}{n}\sum_{i=1}^n y_i \right)=\frac{1}{n}\sum_{i=1}^nE(Y_i)=\mu
$$
$$
Var(\bar{Y})=Var\left( \frac{1}{n}\sum_{i=1}^ny_i \right) = \frac{1}{n^2}\sum_{i=1}^nVar(Y_i)=\frac{\sigma^2}{n}
$$
Sample Variance
$$
S^2= \frac{1}{n-1}\sum_{i=1}^n(Y_i-\bar{Y})^2
$$
Simplify
$$
\begin{align}
(n-1)S^2&=\sum_{i=1}^n(Y_i-\bar{Y})^2 \\
&=\sum_{i=1}^nY_i^2-2Y_i\bar{Y}+\bar{Y}^2 \\
&=(\sum_{i=1}^nY_i^2)-2\bar{Y}(\sum_{i=1}^nY_i)+n\bar{Y}^2 \\
&=(\sum_{i=1}^nY_i^2)-n\bar{Y}^2 \\
(n-1)E(S^2)&=(\sum_{i=1}^nE(Y_i^2))-nE(\bar{Y}^2) \\
&=(\sum_{i=1}^nE(Y_i)^2)-nE(\bar{Y}^2) \\
&=(\sum_{i=1}^n\mu^2+\sigma^2)-n(\mu^2+\frac{\sigma^2}{n}) \\
&=n\mu^2+n\sigma^2-n\mu^2-\sigma^2 \\
&=(n-1)\sigma^2 \\
E(S^2)&=\sigma^2
\end{align}
$$

Example: Smoking habits of teens
$Y\sim Bin(500,\theta)$
$$
f(y;\theta)=P(Y=y;\theta)=\binom{500}{y}\theta^y(1-\theta)^y\quad y=0,1,\cdots,500
$$

Example: Lifetime of brake pads
$Y\sim Exp(\theta)$
“What proportion of brake pads fail within the first 100,000 km?”
$$
P(Y\leq100)=\int_0^{100}f(y;\theta)dy=1-e^\frac{100}{\theta}
$$
## 2.2 | Point Estimates and Maximum Likelihood Estimation
**Choosing a statistical model**
Determined by
- Background knowledge/assumptions
- Past experience
- A current dataset

Parametric family = family of distributions indexed by some parameter $\theta$
- $Bin(n,p)\mid p\in[0,10]\}\quad \theta=p$
- $\{N(\mu, \sigma^2\mid \mu\in\mathbb{R}, \sigma^2\geq0\}\quad \theta=\binom{\mu}{\sigma^2}$

> Point Estimate
> A **point estimate** of a parameter is the value of a function of the observed data $y_1,\cdots,y_n$ and known quantities such as the sample size $n$. We use denote a point estimate of $\theta$ as $\hat{\theta}$

$\hat\theta = \hat\theta(y_1,\cdots,y_n)=\hat\theta(y)$ depends on the sample $\{y_1,\cdots,y_n\}$.
Any function which only depends on the observed data and not any unknown parameters is called a **statistic**

> Likelihood Function
> The likelihood function for $\theta$ is defined as
$$
L(\theta; y)=P(Y=y; \theta), \theta\in\Theta
$$
> $\Theta$ = parameter space = set of possible values for $\theta$
> NOTE: this is a function of $\theta$, NOT the observed data

> Maximum Likelihood Estimate
> The value of $\theta$ which maximizes $L(\theta; y)$ for some given data $y$ is called the MLE, and is denoted $\hat\theta=\hat\theta(y)$
> The MLE is an example of a point estimate and a statistic

> Relative Likelihood Function
$$
R(\theta)=\frac{L(\theta)}{L(\hat\theta)}\quad \theta\in\Theta
$$
> Log-Likelihood Function
$$
\ell(\theta)=\log(L(\theta))\quad \theta\in\Theta
$$
> Log Concavity
> A function $f:\mathbb{R}^n\to\mathbb{R}^+$ is logarithmically concave if $\log\circ f$ is a concave function

**Likelihood examples:**
- Write out the PMF $L(\theta;y)$ using the selected distribution
- Simplify (can separate all constants because they get differentiated away)
- Log everything to get the log-likelihood function $\ell(\theta)$
- To find MLE, solve $\ell'(\theta)=0$
- Plug in $\theta=\hat\theta$ and solve for $\hat\theta$
## 2.3 | Likelihood Functions for Continuous Distributions
Recall: Likelihood for $\theta$ when data $Y$ are iid with common pmf $f(\cdot;\theta)$
$$
L(\theta;y)=P(Y=y;\theta)=\prod_{i=1}^nf(y_i;\theta)
$$
Ex: Exponential Distribution (mean = $\theta$)
$$
Y\sim Exp(\theta)
$$
$$
f(y;\theta)=\frac{1}{\theta}e^{-y/\theta}
$$
Derive the likelihood function
$$
\begin{align}
L(\theta;y)&=\prod_{i=1}^nf(y_i;\theta) \\
&=\prod_{i=1}^n \frac{1}{\theta}e^{-y_i/\theta} \\
&=\theta^{-n}e^{\frac{-\sum_{i=1}^ny_i}{\theta}} \\
\ell(\theta;y)&=-n\log\theta-\frac{\sum_{i=1}^ny_i}{\theta}
\end{align}
$$
Obtain the MLE by solving $\ell'(\theta)=0$
$$
\begin{align}
\ell'(\theta)&=-\frac{n}{\theta}+\frac{\sum_{i=1}^ny_i}{\theta^2} \\
0&=-\frac{n}{\hat\theta}+\frac{\sum_{i=1}^ny_i}{\hat\theta^2} & \text{Plugging in }\theta=\hat\theta \\
\hat\theta&=\frac{\sum_{i=1}^ny_I}{n}=\bar{y}
\end{align}
$$
Ex: Gaussian distribution
$$
Y\sim G(\mu,\sigma)
$$
To maximize $\ell(\mu,\sigma)$, solve
$$
\frac{\partial\ell}{\partial \mu}=0;\quad \frac{\partial\ell}{\partial\sigma}=0
$$
MLE of $\mu$
$$
\begin{align}
\frac{\partial\ell}{\partial\mu}(\mu,\sigma)&=-\frac{1}{2\sigma^2}\sum_{i=1}^n
2(y_i-\mu)(-1) \\
&=\frac{1}{\hat\sigma}\sum_{i=1}^n(y_i-\mu\hat) \\
0&=\sum_{i=1}^n(y_i-\hat\mu) \\
0&=n\bar{y}-n\hat\mu \\
\hat\mu=\bar{y}
\end{align}
$$
MLE of $\sigma$
$$
\begin{align}
\frac{\partial}{\partial\sigma}\ell(\mu,\sigma)&=-\frac{n}{\theta}-\frac{1}{2}(-2)\theta^{-3}\left( \sum_{i=1}^n(y_i-\mu)^2 \right) \\
0&=-\frac{n}{\hat\sigma}+\frac{1}{\hat\sigma^3}\left( \sum_{i=1}^n(y_i-\hat\mu)^2 \right) \\
\frac{n}{\hat\sigma}&=\frac{1}{\hat\sigma^3}(n\sum_{i=1}^n(y_i-\hat\mu)^2) \\
\hat\sigma&=\frac{1}{n}\sum_{i=1}^n(y_i0\bar{y})^2 \\
\hat\sigma&=\sqrt{\frac{1}{n}\sum_{i=1}^n(y_i-\bar y)^2}
\end{align}
$$
Given $\sum y_i$ and $\sum y_i^2$, we can rewrite the formula for $\sigma$ as
$$
\frac{1}{n}\sqrt{n\sum y_i^2-(\sum y_i)^2}
$$
Derivation: Expand the bracket
## 2.4 | Likelihood Functions for Multinomial Models
nah
## 2.5 | Invariance Properties of Maximum Likelihood Estimates
> Invariance Property of the MLE
> Let $g:\mathbb{R}^j\to\mathbb{R}^M$ be any function. Suppose that $\hat\theta=(\hat\theta_1,\cdots,\hat\theta_k)$ is the maximum likelihood estimate for $\theta=(\theta_1,\cdots,\theta_k)$. Then, $g(\hat\theta)$ is the maximum likelihood estimation for $g(\theta)$.

Ex: Proportion of individuals over 2m in height (Gaussian MLE)
$$
\begin{align}
P(Y>2)&=P(\frac{{Y-\mu}}{\sigma}>\frac{{2-\mu}}{\sigma}) \\
&=P(Z> \frac{{2-\mu}}{2}) \\
&=1-\phi(\frac{2-\mu}{\sigma})
\end{align}
$$

Ex: Observed vs Expected Frequencies (Poisson)
$$
\hat\theta=\frac{1}{2608}\sum_{j=1}^{14}j\times f_j=3.8415
$$
Expected frequency of $j$ particle emissions
$$
e_j(\theta)=n\times P(Y=j; \theta)=n\times \frac{e^{-\theta}\theta^i}{j!}
$$
Expected frequencies
$$
e_3\approx 525.313
$$
Other way
$$
\vec{y}=(0,0,\ldots,1,1,\ldots)
$$
$$
\hat\theta=\bar{y}=\frac{\sum y_i}{2608}
$$
$$
\begin{align}
e_{\geq 14}&=n\times P(Y\geq 14, \hat\theta) \\
&=\sum_{k=14}^\infty P(Y-k, \hat\theta) \\
&=1-\sum_{k=0}^{13} P(Y=k. \hat\theta)
\end{align}
$$
## 2.6 | Checking the Model
Graphical Checks
- Superimposing plots
	- Relative frequency histogram VS (theoretical) pdf
	- ecdf VS (theoretical) cdf
- New check: (Gaussian) QQ (quantile-quantile) plot
	- Motivation: straighten the ecdf plot (easier to check if a line is straight)

> QQ Plots
> For a CRV $X$ with a strictly increasing cdf with $F_X\in(0,1)$, define the theoretical quantile function:
$$
Q_X(p)=F^{-1}_X(p)
$$
> The quantile function is the inverse function of the cdf of $X$. 
> $Q_X(p)$ is the unique number which solves the equation
$$
P(X\leq Q(p))=p
$$

QQ Plots tell us about tail behavior of a dataset
- Grows faster than a straight line = heavy tail
- Grows slower than a straight line = light tail
- Grows like a straight line = normal distribution

**Step 1:** Propose a probability model for the observed data $Y$ with common pmf/pdf $f(y;\theta)$
**Step 2:** Write down the likelihood and log-likelihood functions
$$
L(\theta,y)=\prod_{i=1}^nf(y_i;\theta);\quad \ell(\theta,y)=\log L(\theta;y)=\sum_{i=1}^n\log f(y_i\theta)
$$
**Step 3:** Find the unique MLE $\hat\theta$ by maximizing $\ell(\theta)$. $\hat\theta$ is the unique solution to
$$
\frac{d}{d\theta}\ell(\theta)=0
$$
**Step 4:** Perform diagnostic checks (checking model assumptions, checking observed vs empirical frequencies, graphical checks)

Binomial / Bernoulli model: $n$ trials of an experiment resulting in success or failure
- Each trial is **independent** with **same probability** of success
- **Cannot** use numerical / graphical summaries (binary outcomes)

Poisson: Assumes **independence, individuality, homogeneity**
- **Can** use graphical checks

Exponential: How long to wait for a next occurrence (has the **memoryless** property) 
- **Can** use graphical (QQ plot should have a U-shape)

Gaussian / Normal: Used a lot
- Symmetric about mean (no skew), Sample mean $\approx$ sample median
- Sample skewness close to 0, sample kurtosis close to 3
- 68% of data within 1 std of mean, 95% within 2, 99.7% within 3
- **Can** use graphical checks
# 3 | Planning and Conducting Empirical Studies
## 3.1 | Empirical Studies
Aspects of Empirical Studies (PPDAC)
- Problem formulation
- Planning of an experiment
- Data collection
- Analysis of the data
- Conclusions
## 3.2 | The Steps of PPDAC
**Problem**
Descriptive problem: Learn an **attribute** of a population
Causative problem: Establish the existence (or non-existence) of a **causal** relationship between two variates. The explanatory variate $x$ **causes** a change in the response variate $y$
Predictive problems: We want to **predict** the value of a variate for some unit.

> Target population / process
> The collection of units to which the experimenters conducting the empirical study wish the conclusions to apply.

**Plan**
> Study population / process
> The collection of units available to be included in the study
> **Sample** = selecting a few units from the population with a **sampling protocol**

> Study error
> Attribute in the study population / process - attribute in target population / process

> Sample error
> Attribute in the sample - attribute in study population / process

> Measurement error
> Measured variate value - true variate value

**Data**
Data management = tracking and measuring data over long periods of time

**Analysis and Conclusion**
- Select an appropriate model
- Describe the Problem in terms of model parameters and properties
- Conclusion step answers questions posed in Problem
- Quantify or discuss potential errors in Plan, as well as limitations in conclusions

**All models are wrong, but some are useful**
- Models are simplifications of reality
# 4 | Estimation
## 4.1 | Statistical Models and Estimation
This chapter:
- How to estimate **an interval** for the unknown parameter $\theta$?
- How to quantify the probability that $\theta$ is in our constructed interval?

Recall: Point Estimates
Likelihood function for random variables with common pmf/pdf $f(y;\theta)$:
$$
L(\theta; y)=\prod_{i=1}^n f(y_i;\theta)
$$
A "good" guess for $\theta$ is the value $\hat\theta$ which **maximizes** the likelihood function

> Definition
> **A (point) estimator** $\tilde\theta$ is a random variable which is a function
$$
\tilde\theta=g(Y_1,Y_2,\cdots,Y_n) = g(Y)
$$
> of the random variables $Y_1,\cdots,Y_n$. The distribution of $\tilde\theta$ is called the **sampling distribution** of the estimator.

Recall: Normal / Gaussian Distribution
**Any linear combination of independent normal RVs is still normal**
$$
\sum_{i=1}^n a_iX_i\sim G(\sum_{i=1}^n)a_i\mu_i,\sqrt{\sum_{i=1}^n a_i^2\sigma^2_i}
$$
Example:
$$
X\sim G(1,3)\quad Y\sim G(-4,4)\quad 2X-2Y\sim?
$$
$$
\mu = 2(1)-2(-4) = 10
$$
$$
\sigma=\sqrt{2^2(3^2)+2^2(4^2)}=\sqrt{36+64}=10
$$
Recall: Central Limit Theorem
> Suppose $Y_1,\cdots,Y-n$ are iid, with $E(Y_i)=\mu, Var(Y_i)=\sigma^2$ with $0<\sigma^2<\infty$. Then, as $n\to\infty$,
$$
\sqrt{n}(\frac{{\bar{Y}-\mu}}{\sigma})\to G(0,1)
$$

Takeaway: For large n,
$$
\sqrt{n}(\frac{{\bar{y}-\mu}}{\sigma})\approx Z\implies \bar{Y}\approx\mu+ \frac{\sigma}{\sqrt{n}}Z\sim G(\mu, \frac{\sigma}{\sqrt{n}})
$$
Suppose we have a sequence of RVs $X_1,\cdots,X_n,\cdots$, then we say that ${X_i}^\infty_{i=1}$ **converges in distribution** to $X$, or $(X_n\to X)$ if
$$
F_{X_n}(t)\to F_X(t)\quad n\to\infty
$$
## 4.2 | Estimators and Sampling Distributions
> Interval Estimator 
> An **interval estimator** is a **random interval** of the form
$$
[L(Y), U(Y)]
$$
- $L(Y)$ = random **lower bound**
- $U(Y)$ = random **upper bound**

Coverage Probability:
$$
p = P(\theta\in[L(Y), U(Y)])
$$
- We want it to be **high** - tells us we are very likely to have lower and upper bounds
- We want the interval estimator to be **narrow** - constrains the value of $\theta$ more
- We fix this coverage to be some number $p$ - common choices include 0.9, 0.95, 0.99
- Then we construct a narrow interval estimator with coverage probability $p$.

> Definition
> Suppose $[L(Y), U(Y)]$ is an interval estimator for $\theta$, with coverage probability $p$. Then, the interval estimate
$$
[L(y),U(y)]
$$
> is called a $100 p\%$ confidence interval for $\theta$

**The confidence interval is a realization of the (random) interval estimator**
- Since it's a function of observed data, we can't make probability statements about it
- **Interpretation:** If we were to collect a sample many times, the true $\theta$ will lie in approximately $100p\%$ of the confidence intervals we construct.

Example:
Suppose $Y_1,\cdots,Y_n\sim^{iid} G(\mu,\sigma)$ with $\mu$ unknown but $\sigma$ known. Construct an interval estimator for $\mu$ with coverage probability $p$.
$$
\bar{Y}\sim G(\mu, \frac{\sigma}{\sqrt{n}})\implies \sqrt{n}(\frac{\bar{Y}-\mu}{\sigma})\sim G(0,1)
$$
Our interval estimator is
$$
[\bar{Y}-b \frac{\sigma}{\sqrt{n}}, \bar{Y}-a \frac{\sigma}{\sqrt{n}}]
$$
Choose $a,b$ so the resulting intervals are as narrow as possible
If we choose $a=Q_Z(x)$ for some $x\in(0,1-p)$, then $b=Q_Z(p+x)$
The narrowest interval is obtained when
$$
a=Q_Z(\frac{1-p}{2}), b=Q_Z(\frac{1+p}{2})
$$
When $p=0.95$, $a=Q_Z(0.025)=-1.96, b=Q_Z(0.975)=1.96$
$$
[\bar{Y}-1.96 \frac{\sigma}{\sqrt{n}}, \bar{Y}+1.96 \frac{\sigma}{\sqrt{n}}]
$$
is an interval estimator for $\mu$ with coverage probability of 0.95. 
**If we performed this experiment infinitely, $\mu$ should be in the interval for 95% of experiments**

Example:
For a $G(\mu, 0.07)$ model with mean $\bar{y}=1.7443, n=150$, the 95% CI is
$$
[1.7443-1.96\times \frac{0.07}{\sqrt{150}}, 1.7443+1.96\times \frac{0.07}{\sqrt{150}}]
$$
- The width depends on $a, b, n$
- As $n\to\infty$, the width $\to 0$, since more data is better
- If we want a higher coverage probability, the interval becomes **wider** (coverage probability of 1 means the interval would be the whole real line).

> Pivotal Quantity
> A pivotal quantity
$$
Q=Q(Y;\theta)
$$
> is a function of the data $Y$ and the unknown parameter $\theta$ with known distribution.

To make an interval estimator, fix the coverage probability to be $p$. Choose $a,b$ such that
$$
p=P(a\leq Q(Y;\theta)\leq b)=P(L(Y)\leq\theta\leq U(Y))
$$
## 4.3 | Interval Estimation Using the Likelihood Function
^
## 4.4 | Confidence Intervals and Pivotal Quantities
**Gaussian example:** $Y_1, \cdots,Y_n\sim^{iid} Poi(\theta)$, $\tilde\theta=\hat Y$

By CLT,
$$
Q^*_n(Y;\theta)=\sqrt{n}(\frac{\tilde\theta-\theta}{\sqrt{\theta}})\to^d G(0,1)
$$
Takeaway
$$
[\tilde\theta- c \frac{g(\tilde\theta)}{\sqrt{n}},\tilde\theta+c \frac{g(\tilde\theta)}{\sqrt{n}}]
$$
with $c=Q_Z(\frac{1+p}{2})$ is an interval estimator for $\theta$ with asymptotic coverage probability $p$. 
A $100p\%$ confidence interval for $\theta$ replaces $\tilde\theta$ with $\hat\theta$

**Binomial example:** $Y\sim Bin(n,\theta)$. MLE is $\hat\theta=\frac{Y}{n}$

Using the Normal approximation,
$$
Y\sim G(n\theta, \sqrt{n\theta(1-\theta)})
$$
Dividing by $n$:
$$
\tilde\theta = \frac{Y}{n}\sim G(\theta, \sqrt{\frac{\theta(1-\theta)}{n}})\implies \sqrt{n}(\frac{\tilde\theta-\theta}{\sqrt{\theta(1-\theta)}})\sim G(0,1)
$$
We have $g(\theta)=\sqrt{\theta(1-\theta)}$
A $p$-coverage probability interval estimator is given by
$$
\frac{Y}{n}\pm c\times\sqrt{ \frac{\frac{Y}{n}(1- \frac{Y}{n})}{n}}
$$
A $100p\%$ confidence interval replaces $Y$ with $y$

**Word problem:** Coin has probability $\theta$ of heads and flips 65/100 heads. What is a 95% confidence interval for $\theta$?

Model: $Y\sim Bin(100,\theta)$, observed data $y=65$, compute $\hat\theta=0.65$
$$
0.65\pm 1.96\times \sqrt{\frac{0.65\times0.35}{100}} = [0.556, 0.743]
$$

**Exponential example:** $Y_1,\cdots,Y_n\sim Exp(\theta)$.. MLE is $\tilde\theta=\hat Y$
$$
E(\tilde\theta)=\theta, sd=\frac{\theta}{\sqrt{n}}
$$
By CLT,
$$
\sqrt{n}(\frac{\tilde\theta-\theta}{\theta})\sim G(0,1)
$$
Interval estimator
$$
\hat{Y}\pm C\times \frac{\bar{Y}}{\sqrt{n{}}}
$$
**Word problem:** Lightbulb lifetime follows an exponential distribution with mean life $\theta$. A sample of 50 were collected, with an average of $\bar{y}=4996.2$. Give a 90% CI for $\theta$.

Model: $Y_1,\cdots,Y_{50}\sim^{iid} Exp(\theta)$ so our MLE is $\hat\theta=bar y=4996.2$. A 90% CI is
$$
4996.2\pm 1.64\times \frac{4996.2}{\sqrt{50}} = [3833.997, 6158.403]
$$

**Sample Size / Margin of Error**: Candidate $A$ needs $>50\%$ votes to win. Let $Y$ be the number of $A$ voters, $Y\sim Bin(n,\theta)$

Point estimator for $\hat\theta = \frac{Y}{n}$ has width
$$
2c\sqrt{\frac{\tilde\theta(1-\tilde\theta)}{n}}\leq^{want} 2\delta
$$
$$
n\geq (\frac{c}{\delta})^2\tilde\theta(1-\tilde\theta)
$$
RHS is maximized when $\tilde\theta=0.5$, so choosing
$$
n\geq \frac{1}{4}(\frac{c}{\delta})^2
$$
always guarantees that the width of the confidence interval is less than $2\delta$ - **the margin of error is** $\pm\delta$

Tradeoff: Larger sample size means more accuracy because narrower confidence intervals, but is more expensive
## 4.5 | The Chi-squared and $t$ Distributions
Recap: Pivotal Quantities
- $G(\mu,\sigma)$ with $\sigma$ known (exact)
- $Poi(\theta)$ (asymptotic)
- $Exp(\theta)$ (asymptotic)
- $Bin(n,\theta)$ (asymptotic)

We use these because it's hard to find the exact sampling distribution of our estimator $\tilde\theta$
A drawback is that these estimators attain the coverage probability if $n\to\infty$ but are inaccurate otherwise

> Chi-squared distribution
> A random variable X has a chi-squared distribution with k degrees of freedom, denoted $X\sim\chi^2(k)$ if it has PDF
$$
f(x;k) = \frac{1}{2^{\frac{k}{2}}\Gamma(\frac{k}{2})} x^{\frac{k}{2}-1}e^{-\frac{x}{2}}
$$
> The fraction is a constant, ensuring that the integral over the range of $X$ equals 1

Properties
- $k=1$ - vertical asymptote at the y-axis
- $k=2$ - same pdf as $Exp(2)$
- $k\geq 3$ - unimodal but asymmetric
- Always **right-skewed**
- For large $k$,
$$
\chi^2(k)\sim G(k, \sqrt{2k})
$$
> Theorem
> Let $Z\sim G(0,1)$ be a standard normal RV. Then
$$
Z^2\sim \chi^2(1)
$$

Recall: MGF of a random variable $X$
$$
M_X(t)=E(e^{tX})
$$
- Uniqueness: If $X,Y$ have the same MGF, they have the same distribution
- If $X,Y$ independent, then $M_{X+Y}(t)=M_X(t)+M_Y(t)$

> Theorem
> Let $W_i\sim\chi^2(k_i)$ for $i=1,\cdots,n$ and $W_i$ independent. Let $S=\sum_{i=1}^n W_i$. Then,
$$
S\sim\chi^2(\sum_{i=1}^n k_i)
$$
> Corollary
> Suppose $Z_1,\cdots, Z_n\sim^{iid} G(0,1)$. Let $S=\sum_{i=1}^n Z_i$. Then,
$$
S\sim\chi^2(n)
$$
> Sample Variance Estimator
$$
S^2=\frac{1}{n-1}\sum_{i=1}^n(Y_i-\hat{Y})^2
$$
> Theorem
> Let $Y_1,\cdots,Y_n\sim^{iid}G(\mu,\sigma)$ and $S^2$ be the sample variance estimator. Then,
$$
\frac{(n-1)S^2}{\sigma^2}\sim \chi^2(n-1)
$$

Recall $G(0,1)\sim(\frac{Y_i-\mu}{\sigma})$, but if you square and sum them, you get the chi-squared
So we have that
$$
X^2(n)\sim \frac{(n-1)S^2}{\sigma}+\chi^2(1)
$$
because $S^2,\bar{Y}$ are **independent** when the data comes from a normal distribution.

> Student's t distribution
> A random variable $X$ has a t distribution with k degrees of freedom if it has pdf
$$
f(x;k) = \frac{\Gamma(\frac{{k+1}}{2})}{\sqrt{k\pi}\Gamma(\frac{k}{2})} (1+ \frac{x^2}{k})^{-\frac{(k+1)}{2}}
$$
> The fraction is again, a constant

Properties: Looks similar to a Gaussian
- Unimodal, with a peak at 0
- Symmetric about the y-axis
- As $k\to\infty$, the density of $t(k)$ approaches the density of $G(0,1)$
- **Heavy tailed**: Tails decay polynomially while Gaussian tails decay exponentially

> Theorem
> Let $Z\sim G(0,1)$ and $U\sim\chi^2(k)$ independently. Let
$$
T=\frac{Z}{\sqrt{\frac{U}{K}}}
$$
> Then $T\sim t(k)$.

Takeaways
- We use the chi-square distribution to construct a pivotal quantity $\sigma$ in a Gaussian model
- The chi-square distribution is the limiting distribution for likelihood ratios
- We can use the t distribution to construct a pivotal quantity for $\mu$ in a Gaussian model when $\sigma$ is **unknown**
## 4.6 | Likelihood-Based Confidence Interval
> Definition
> For any $p\in[0,1]$, the 100p% likelihood interval for $\theta$ is the set
$$
\{\theta\in\Theta: R(\theta)\geq p\}
$$
> where $R(\theta)$ is the relative likelihood function

The relative likelihood function depends only on $\sum y_i$ instead of the individual $y_i$. Then, we say$\sum Y_i$ is a **sufficient** statistic for $\theta$.

`uniroot(f, interval = (a,b))` finds a root on $(a,b)$, but returns an error if $f$ has the same sign at both endpoints.

Log-relative likelihood function
$$
r(\theta)=\log R(\theta)
$$
100p% likelihood ratio for $\theta$
$$
\{\theta\in\Theta:R(\theta)\geq p\}=\{\theta\in\Theta:r(\theta)\geq\log(P)\}
$$
**Random Variables:** 
$\tilde{L}(\theta)$ = random likelihood
$\tilde R(\theta)$ = random relative likelihood

> Wilk's theorem special case:
> As $n\to\infty$,
$$
\land(\theta_0)\to^dx^2(1)
$$

Likelihood ratio statistic
$$
\land(\theta)=-2\log(\frac{L(\theta; Y)}{L(\hat\theta; Y)})
$$
A 100% likelihood interval for $\theta$ is a 100q% confidence interval for $\theta$, where
$$
q=2\phi(\sqrt{-2\log p})-1
$$
($\phi$) is the quantile function of a standard normal
Backwards: if we want our likelihood interval to correspond to a 100q% CI,
$$
p=e^{-\frac{\phi^{-1}(\frac{1+q}{2})^2}{2}}
$$
## 4.7 | Confidence Intervals for Parameters in the $G(\mu,\sigma)$ Model
**Interval estimators for $\sigma$ in a $G(\mu,\sigma)$ model**
$$
\sigma: [\sqrt{\frac{(n-1)S^2}{b}}, \sqrt{\frac{(n-1)S^2}{a}}]
$$
$$
\sigma^2:[\frac{(n-1)S^2}{b}, \frac{(n-1)S^2}{a}]
$$
Interval Width
$$
(n-1)S^2(\frac{1}{a}-\frac{1}{b})
$$
One-sided intervals
$$
\sigma:[0,\sqrt{\frac{(n-1)S^2}{a}}]
$$
Quantiles of chi-squared (`qchisq` in R)
$$
Q_{\chi^2(n)}(p)
$$
Pivotal quantity of $G(\mu,\sigma)$
$$
\sqrt{n}(\frac{\bar{Y}-\mu}{\sigma})\sim G(0,1)
$$
**Interval estimator for $\mu$ in $G(\mu,\sigma)$ model ($\sigma$ unknown)**
$$
\mu:[\bar{Y}-c \frac{S}{\sqrt{n}}, \bar{Y}+c \frac{S}{\sqrt{n}}]
$$
Prediction intervals in $G(\mu,\sigma)$ models
Pivotal Quantity
$$
\bar{Y}\sim G(\mu, \frac{\sigma}{\sqrt{n}})\implies \frac{\bar{Y}-Y_{n+1}}{S\sqrt{1+\frac{1}{n}}}\sim t(n-1)
$$
Prediction interval estimator for $Y_{n+1}$
$$
Y_{n+1}: [\bar{Y}-c\times S\sqrt{1+\frac{1}{n}}, \bar{Y}+c\times S\sqrt{1+\frac{1}{n}}]
$$
# 5 | Hypothesis Testing
## 5.1 | Introduction
Chapter 4: estimate the value or (or give a range for) the parameter $\theta$
Chapter 5: is $\theta=\theta_0$ a reasonable value?

> Hypothesis
> Suppose we have $Y_1,\cdots,Y_n\sim^{id} f(y;\theta)$. A **hypothesis** is a restriction on the value of the parameter $\theta$

> Null hypothesis ($H_0$)
> The "default" or "neutral" hypothesis, assumed to be true. 

> Alternative hypothesis ($H_A, H_1$)
> A hypothesis that competes with the null hypothesis, suspected to be true. Often the negation of $H_0$

> Test Statistic / Discrepancy Measure $(D)$
> A non-negative function of the data $T$ constructed to measure the degree of "(dis)agreeement" between the data $Y$ and null hypothesis $H_0$
- $D\approx 0$ = agreement 
- $D>0$ = disagreement

> p-value / observed significant level
> Probability of observing something as (or more) extreme than what was observed. $D$ = theoretical discrepancy, $d$ = observed discrepancy 
$$
p=P(D\geq d; H_0)
$$

> Significance Level ($\alpha$)
> Threshold such that if $p\leq \alpha$, we **reject** $H_0$, else we **fail to reject** $H_0$. Common choices are $\alpha=0.01, 0.05, 0.10$
> "How unlucky you're willing to be" - how unlikely of a guess you're willing to take on before being fine with a false positive

Ex: flipping a coin 100 times yields 56 heads (Binomial)
$$
D=|Y-50|
$$
$$
\begin{align}
p&=(|Y-50|\geq 6; H_0)  \\
&=P(Y\geq 56; H_0) + P(Y\leq 44; H_0) \\
&=0.27
\end{align}
$$
Example: Problem 5.2
$$
Y\sim Poi(\theta)\quad H_0:\theta=10\quad H_A:\theta>10
$$
Test statistic
$$
D=\max(0,Y-10)=\max(0,15)=15
$$
p-value (calculated assuming $H_0$ is true)
$$
\begin{align}
P(\max(0, Y-10)\geq15) &= P(Y-10\geq 15)  \\
&= P(Y\geq 25) \\
&= 1 - P(Y<24) \\
&= 4\times 10^{-5} < 0.1\%
\end{align}
$$
Gaussian approximation
$$
Y\sim G(10,\sqrt{10})
$$
$\sigma= \sqrt{10}\approx3$, so 25 is roughly 5 STD above the mean
## 5.2 | Hypothesis Testing for Parameters in the $G(\mu,\sigma)$ Model
**Steps of hypothesis testing**
1. **Model**: the data are
$$
Y_1,\cdots,Y_n\sim^{iid} f(y;0)
$$
2. **Null hypothesis**: restrict the value of $\theta$
$$
\theta=\theta_0
$$
3. **Discrepancy measures**: small = agreement, large = disagreement
$$
D=D(Y)
$$
4. **Data**: compute the observed value of the test statistic / discrepancy measure
$$
d=D(y)
$$
5. **p-value**: compute the probability (under $H_0$ of observing something something more extreme)
$$
p=P(D\geq d; H_0)
$$
6. **Interpretation: reject / fail to reject**: decide if evidence against $H_0$ is strong enough to reject or fail to reject

| Alternative hypothesis | Discrepancy measure                                | p-value             |
| ---------------------- | -------------------------------------------------- | ------------------- |
| $\mu\neq\mu_0$         | $D^{\neq}(y)=\| \frac{\bar{y}-\mu_0}{s/\sqrt{n}}\|$ | $p=2(1-P(T\leq d))$ |
| $\mu>\mu_0$            | $D^>(y)=\frac{\bar{y}-\mu_0}{s/\sqrt{n}}$          | $p=1-P(T\leq d)$    |
| $\mu<\mu_0$            | $D^<(y)=\frac{\mu_0-\bar{y}}{s/\sqrt{n}}$          | $p=1-P(T\leq d)$    |

**Interval estimation**
Two-sided tests, $c=Q_{t(n-1)}(1-\frac{\alpha}{2})$
$$
p<\alpha\iff \mu_0\notin[\bar{y}-c\times \frac{s}{\sqrt{n}}, \bar{y}+c\times \frac{s}{\sqrt{n}}]
$$
One-sided test, $a=Q_{t(n-1)}(1-\alpha)$
$$
\mu:(-\infty, \bar{y}+a\times \frac{s}{\sqrt{n}})
$$
Interval estimation, $l(y)$ is a $100(1-\alpha)\%$ CI for $\theta$
$$
p<\alpha\iff \theta_0\notin l(y)
$$
**Hypothesis Testing**
**Test statistic** for $\sigma$ in $G(\mu, \sigma)$ models: ($S$ = sample variance, $\sigma_0$ = hypothetical variance)
$$
U=\frac{(n-1)S^2}{\sigma_0^2}\sim \chi^2(n-1)
$$
**p-value**
$$
p=2\times\min(P(U\leq u), P(U\geq u))
$$
**Hypothesis Testing with Gaussian Pivotal Quantities**
$$
D=| \frac{\bar{Y}-\theta_0}{\theta_0/\sqrt{n}}|
$$
$$
p=P(|Z|\geq d) = 2(1-P(Z\leq d)) = 2(1-\phi(d))
$$
## 5.3 | Likelihood Ratio Test of Hypothesis
**Discrepancy measure / Likelihood ratio statistic**
$$
\land=-2\log(\frac{L(\theta; Y)}{L(\hat\theta; Y)}) = \lambda
$$
**p-value** 
$$
p\approx P(W\geq\lambda) = 2(1-P(Z\leq\sqrt{\lambda}))
$$
**Likelihood ratio test statistic**
Under the null hypothesis, $\land\sim\chi^2(1)$
$$
\begin{align}
\land(\theta)&=-2\log R(\theta) \\
&=-2(n(\tilde\theta-\theta)-n\bar{Y}[\log(\theta)-\log(\tilde\theta)])
\end{align}
$$
**HT and interval estimation**
$100(1-\alpha)\%$ CI for $\sigma$
$$
\sigma^2:[\frac{(n-1)s^2}{b}, \frac{(n-1)s^2}{a}]
$$
$$
a=Q_{\chi^2(n-1)}(\frac{\alpha}{2}), =Q_{\chi^2(n-1)}(\frac{1-\alpha}{2})
$$
# 6 | Gaussian Response Models
## 6.1 | Introduction
We know how to:
- **Model:** Variate $Y$, probability model indexed by parameter $\theta$
- **Data:** Collect a sample $y_1,\cdots,y_n$ which are realizations of iid RVs $Y_1,\cdots,Y_n$
- **Estimation:** Estimate the value of $\theta$ with points and intervals
- **Test:** Test hypotheses of the form $\theta=\theta_0$

In an empirical study, the goal is to learn about the **response variate** (weight)
They can be studied alone, or in combination with **covariates** or **explanatory variates** (height, gender)

> Gaussian Response Model
> Distribution of the response variate $Y$ given the associated vector of covariates $x=(x_1,\cdots x_K)$, for an individual unit, is of the form
$$
Y\sim G(\mu(x),\sigma(x))
$$
$$
Y_i=\mu(x_i)+e_i,\quad\quad e_i\sim^{iid}G(0,\sigma)
$$

Linear Model
$$
\mu(x_i)=\beta_0+\sum_{j=1}^k\beta_jx_{ij}
$$
## 6.2 | Simple Linear Regression
Simple Linear Regression
$$
Y_i\sim G(\alpha+\beta x_i, \sigma)\quad\quad i=1,2,\cdots,n
$$
$$
f_i(y;\alpha,\beta,\sigma)= \frac{1}{\sqrt{2\pi\sigma}}e^{\frac{(y-(\alpha+\beta x_i))^2}{2\sigma^2}}
$$
MLE
$$
\hat\beta = \frac{\sum_{i=1}^n(y_i-\bar{y})x_i}{\sum_{i=1}^n(x_i-\bar{x})x_i} = \frac{S_{xy}}{S_{xx}}
$$
$$
\hat\alpha = \bar{y}-\hat\beta\bar{x}
$$
$$
\hat\sigma^2=\frac{1}{n}\sum_{i=1}^n(y_i-(\hat\alpha+\hat\beta x_i))^2
$$
$$
S_{xx}=\sum_{i=1}^n(x_i-\bar{x})^2;\quad S_{yy}=\sum_{i=1}^n(y_i-\bar{y})^2;\quad S_{xy}=\sum_{i=1}^n(x_i-\bar{x})(y_i-\bar{y})
$$
**Least Squares Estimation**
Sum of squared errors (SSE)
$$
g(\alpha,\beta)=\sum_{i=1}^n(y_i-(\alpha+\beta x_i))^2
$$
Parameters
- $\alpha$ = **mean response** for a unit with covariate $x=0$
- $\beta$ = **change in mean response** from increasing the covariate (ie. $x\to x+1$)

Pivotal quantity for CI / HT involving $\beta$
$$
\frac{\tilde\beta-\beta}{\sigma/\sqrt{S_{xx}}}\sim G(0,1)
$$
Estimator
$$
S^2_e= \frac{1}{n-2}\sum_{i=1}^n (S_{yy}-\hat\beta S_{xy})
$$
100p% CI, with $c=Q_{t(n-2)}(\frac{1+p}{2})$
$$
\hat\beta\pm c\times \frac{s_e}{\sqrt{S_{xx}}}
$$
Test statistic
$$
d=| \frac{\tilde\beta}{s_e / \sqrt{S_{xx}}} |
$$
p-value
$$
P(D\geq d; H_0)=P(|T|\geq d) = 2(1-P(T\leq d))
$$
$T\sim t(n-2)$, and $P(T\leq d)$ is computed with `pt(d, df = n-2)`

**NEW STUFF**
Using the pivotal quantity
$$
\frac{(n-2)S_2^e}{\sigma^2}\sim \chi^2(n-2)
$$
Interval estimator ($a=Q_{\chi^2(n-2)}(\frac{1-p}{2}), \quad b=Q_{\chi^2(n-2)}(\frac{1-p}{2})$)
$$
[ \frac{(n-2)s_e^2}{b}, \frac{(n-2)s_e^2}{a} ]
$$
100p& CI:
$$
[ \sqrt{\frac{(n-2)s_e^2}{b}}, \sqrt{\frac{(n-2)s_e^2}{a}} ]
$$
> Mean response function
> Maps the covariate value $x$ to the mean response for that covariate. In SLR:
$$
\mu(x)=\alpha+\beta x
$$
> Has MLE $\hat\mu(x)$ with estimator $\tilde\mu(x)$
$$
\tilde\mu(x)=\sum_{i=1}^n b_iY_i
$$
$$
\tilde\mu(x)\sim G(\mu(x), \sigma\sqrt{\frac{1}{n}+\frac{(x-\bar{x})^2}{s_{xx}}})
$$

Pivotal Quantity
$$
\frac{\tilde\mu(x)-\mu(x)}{S_e\sqrt{\frac{1}{n}+\frac{(x-\bar{x})^2}{s_{xx}}}} \sim t(n-2)
$$
**100p% CI $(c=Q_{t(n-2)}(\frac{1+p}{2}))$**
$$
\hat\mu(x)\pm \sqrt{\frac{1}{n}+\frac{(x-\bar{x})^2}{s_{xx}}}
$$
Pivotal Quantity for $\alpha$
$$
\tilde\alpha\sim G(\alpha, \sigma\sqrt{\frac{1}{n}+\frac{\bar{x}^2}{s_{xx}}})
$$
100p% CI
$$
\hat\alpha\pm c\times s_e\sqrt{\frac{1}{n}+\frac{\bar{x}^2}{s_{xx}}}
$$
**Prediction interval for new data $(c=Q_{t(n-2)}(\frac{1+p}{2}))$**
$$
\hat\mu(x)\pm c\times s_e\sqrt{1+\frac{1}{n}+\frac{(x-\bar{x})^2}{s_{xx}}}
$$
## 6.3 | Checking the Model
Assumptions
- Mean response function is linear ($\mu(x)=\alpha+\beta x$)
- **Homoscedasticity**  / homogenous variance assumption = Random errors are independent with common std $\sigma$

Residuals (not independent)
$$
\hat{r}_i=y_i-\hat\mu(x_i)
$$
$$
\hat{r}_i = y_i-(\hat{a}+\hat{b}x_i) = (y_i-\bar{y}) - \hat\beta(x_i-\bar{x})
$$
Standardized residuals
$$
\hat{r}_i^*=\frac{\hat{r_i}}{s_e}
$$
Residual plots for model checking
1. Plot $(x_i, \hat{r}_i^*)$ for $i=1,\cdots,n$
2. Plot ($\hat{\mu}_i, \hat{r}_i^*$) for $i=1,\cdots,n$ and $\hat\mu_i=\hat\mu(x_i)$
	1. Should be scattered evenly  within a horizontal band above and below $\pm 3$. Even number should be above and below 0
	2. **If not, the linearity assumption is likely violated** (U shape implies quadratic model)
3. Plot a QQ plot of $\hat{r_i}^*$
	1. Should resemble a straight line with more variability at the ends
	2. **If not straight or slope $\neq$ 1, variance is likely not constant (heteroscedasticity)**
## 6.4 | Comparison of Two Population Means
Parameter estimation when $\sigma_1=\sigma_2=\sigma$
$$
\ell(\mu_1,\mu_2,\sigma; y_1,y_2)=\log C-(n_1+n_2)\log\sigma - \frac{1}{2\sigma^2\sum_{j=1}}^2\sum_{i=1}^{n_j}(y_{ji}-\mu_j)^2
$$
Pooled sample variance
$$
s_p^2=\frac{(n_1-1)s_1^2+(n_2-1)s_s^2}{n_1+n_2-2}
$$
**Two-sample t-test**
Discrepancy for: $H_0:\mu_1=\mu_2$
$$
d=| \frac{\bar{y_1}-\bar{y_2}}{s_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}} |
$$
p-value
$$
p=P(D\geq d; H_0)=2(1-P(T\leq d))
$$
**Two sample t-test when $\sigma_1\neq \sigma_2$**
No nice distribution, must use estimator
# 7 | Multinomial Models and Goodness of Fit Tests
## 7.1 | Likelihood Ratio Tests for Multinomial
Expected frequency ($\alpha$ are the params)
$$
E_j=n\times\theta_j(\tilde\alpha)
$$
$$
Y_j=n\times\tilde\theta_j
$$
LRT statistic
$$
\Lambda=2\sum_{i=1}^k y_i\log(\frac{y_j}{e_j})
$$
p-value; ($W\sim\chi^2(k-1-p$)
$$
p=1-P(W\leq\lambda)
$$
**Problems**
To find restricted MLE, write down likelihood in terms of $\alpha$
$$
H_0:\theta_1=\alpha^2, \theta_2=\cdots
$$
$$
L(\alpha, y) = [(\alpha^2)^{y_1}]\times\cdots
$$
Observed value of test statistic:
- Create expected / observed frequency table
- Calculate p-value
## 7.2 | Goodness of Fit Tests
Pearson's goodness of fit (Pearson's chi-squared) test statistic:
$$
d=\sum_{j=1}^k \frac{(y_j-e_j)^2}{e_j}
$$
p-value; $W\sim\chi^2(k-1-p)$
$$
\text{p-value} = P(D\geq d; H_0)\approx P(W\geq d)
$$
## 7.3 | Two-Way Contingency Tables
**Testing for independence**
Row-totals
$$
r_i=\sum_{j=1}^n y_{ij}
$$
Column-totals
$$
c_j=\sum_{i=1}^a y_{ij}
$$
LRT statistic
$$
\Lambda=2\sum_{i=1}^a\sum_{j=1}^by_{ij}\log(\frac{y_{ij}}{e_{ij}})
$$
Maximizing both terms
$$
\tilde{\alpha_i}=\frac{r_i}{n};\quad \tilde{\beta_j}=\frac{c_j}{n}
$$
$$
E_{ij}=n\times\tilde\alpha_i\tilde\beta_j = \frac{r_ic_j}{n}
$$
p-value $W\sim\chi^2((a-1)(b-1))$
$$
\text{p-value} = P(\Lambda\geq\lambda; H_0)=P(W\geq\lambda)
$$
**Testing for equality**
$$
\tilde\theta_i = \frac{Y_i}{n}=(\frac{Y_{i1}}{n_i}, \cdots, \frac{Y_{ib}}{n_i})
$$
Likelihood function
$$
L(\theta_0)=\prod_{\ell=1}^b \theta_{0\ell}^{Y_{+j}}
$$
ML estimators
$$
\tilde\theta_{0j}\frac{Y_{+j}}{n}
$$
LRT statistic
$$
\Lambda=2\sum_{i=1}^a\sum_{j=1}^by_{ij}\log(\frac{y_{ij}}{e_{ij}})
$$
p-value $W\sim\chi^2((a-1)(b-1))$
$$
\text{p-value} = P(\Lambda\geq\lambda; H_0)=P(W\geq\lambda)
$$
Expected frequencies
$$
e_{ij} = \frac{n_iy_{+j}}{n} = \frac{\text{(row i total)}\times\text{(column j total)}}{n}
$$
