```
ECON 102: Macroeconomics

Quizzes - 30% (5)
Assignments - 30% (2)
Final - 40% 
```

```r
# clear terminal
# CTRL + L

# remove all objects
rm(list = ls())

# set working directory
setwd("path/to/folder")
```
# 1 | Importing Data Files
## 1.0 | Key Terms
- **Data ﬁle:** A ﬁle in which datasets are stored. There are many types of formats, but the universal format for data ﬁles is the text format, because it can be read by all software.
- **Dataset:** A collection of observed variables.
- **Missing values:** They are missing observations in a dataset. In a data ﬁle, missing values are often represented by special characters.
- **Text ﬁle:** It is a non formatted ﬁle that can be opened by any text editor. The most common extensions for text ﬁles are .txt and .csv.
- **Time series:** It is a variable that we observe on a regular basis at different points in time. For example, the temperature in Toronto is a time series, because we observe it daily.
- **Variable:** It is the general term used when we refer to measures. For example, inﬂation, unemployment rate, temperature, and CO2 emission are four different variables.
## 1.1 | What is Macroeconomics?
The study of the economy of a whole
- Microeconomic decisions
- Aggregation of individual behaviour
- Link between theory and data
- Design of government policy
# 2 | Math Operations and Index Numbers
## 2.0 | Key Terms
- **Aggregation:** This is a technique used to combine multiple numbers to form a single one. The technique is used in time series analysis to reduce the frequency of a series: monthly to quarterly, quarterly to annual, etc.
- **Annualized growth rate:** A monthly growth rate is annualized if it is calculated over one year by assuming that it remains the same every month. The same technique can be used to annualize quarterly growth rates.
- **Flow variable:** A variable that is only defined over a period. A time period must therefore be associated with flow variables: income per month, consumption per quarter, etc.
- **Growth rate:** This is defined as the percentage change of a value between two consecutive periods.
- **Index numbers:** This is the ratio of the value of a variable at a given point in time over the value of the same variable at the base period, multiplied by 100. For example, if the base period is January 1960, the index is called index base 100 = January 1960.
- **Log-scale:** The logarithm scale is a nonlinear transformation of a series using the natural logarithm function. When a series is expressed in logarithm, differences between consecutive observations are interpreted as growth rates.
- **Stock variable:** A variable that measures a quantity at a given point in time. Since it is the result of an accumulation over a period, the date associated with stock variables is usually the last day of the period.
## 2.1 | Preparing Your Data
Stock Variables = amounts (liters)
Flow Variables = rates (liters / hour)

Consumption is a flow variable (value / month)
## 2.2 | Math Operations
**Units of Measurement**

**Growth Rates**
$$
g_t=\frac{X_t-X_{t-1}}{X_{t-1}} = \frac{X_t}{X_{t-1}}-1
$$
**Logarithm Scale**
$$
\log(ab)=\log(a)+\log(b)
$$
$$
\log(\frac{a}{b}) = \log(a)-\log(b)
$$
Growth Rate Approximation
$$
\log(X_t)-\log(X_{t-1})=\log(\frac{X_t}{X_{t-1}})=\log(1+g_t)\approx g_t
$$
(for sufficiently small g)
$$
g_t\approx\log(X_t)-\log(X_{t-1})
$$
Similarly,
$$
\log(X_tY_t)-\log(X_{t-1}Y_{t-1})\approx g_x+g_y
$$
Compounding normal growth rates: exponent by 12
Compounding log growth rate: multiply by 12
## 2.3 | Index Operations
"Base 100 = $t$" = taking percentage relative to $x_t$
# 3 | Visualization Techniques
## 3.0 | Key Terms
- **Bar plot:** This is a chart used to compare values of a small number of observations. The X-axis represents the observations and the y-axis represents their values characterized by the height of the bars. For example, a bar plot can be used to illustrate the population by province. In this case, each bar is a province and its height represents the population of the province.
- **Comovement:** This term characterizes the observed relationship between two series. A positive comovement means that the two series are moving in the same direction on average: they go up and down together. A negative comovement means that the two series move in opposite directions on average: when one series goes up, the other goes down. A comovement only characterizes observed relationships. The existence of a comovement does not imply that an actual relationship exists.
- **Histogram:** This is a particular bar chart used to illustrate the distribution of a series. The range of the series (its minimum value to its maximum value) is divided into intervals and the height of the bars corresponds to the number of observations included in each interval. For example, the histogram of personal income is used to illustrate the income distribution. If we divide the the range of income by intervals of 10 thousand, the height of the ﬁrst bar would be the number of individuals with income between 0 and 10 thousand, the height of the second would be the number of individuals with income between 10 and 20 thousand, and so on.
- **Line chart:** This is a chart showing the evolution of a series through time. The X-axis represents time, the y-axis represents the value of the observations and the points are connected by lines.
- **Relationship:** This term characterizes the link between two variables. A relationship exists if an underlined mechanism links the two variables. The relationship is direct if one variable is causing the other and it is indirect if one variable is causing the other through a third variable. The identiﬁcation of a relationship requires advanced statistical techniques and/or strong theoretical background. In this course, we are not equipped to identify relationships.
- **Scatter plot:** This is a chart used to illustrate comovements between two series. The X-axis represents the values of one series and the y-axis represents that values of another series. In general, the points are not connected by lines. However, if we want information about the evolution of the series over time, the points are connected and the date is added on top of each observation.
- **Short term ﬂuctuations:** This is the behaviour of a series over shorter periods of time. By shorter, we means shorter than the period spanned by our dataset. The types of short term ﬂuctuations will be covered in details in the next module. For now, we deﬁne as the movement of a series over a few months, few quarters or few years.
- **Trending behaviour:** This is the behaviour of a series on average over a long period of time. By long period, we mean the period spanned by our dataset. A positive trend means that the series in increasing on average over the period and a negative trend means that the series is decreasing on average over the period.
- **Volatility:** This term characterizes the intensity of the short term ﬂuctuations. If two series have the same measurement units and same scale, the one that ﬂuctuates with higher ups and lower downs is more volatle than the other. We cannot compare the volatility of two series with different measurement units and different scale.
## 3.1 | Visualizing Time Series
Using a log scale means that constant growth rates will display as a straight line

Types of charts
- Line charts
- Scatter plots
- Bar plots
- Histograms
# 4 | Time Series Decomposition
## 4.0 | Key Terms
- **Bias:** An error is biased if it is not equal to 0 on average. It is positively biased if its average is positive, it is negatively biased is it is negative on average, and it is unbiased if it is equal to 0 on average.
- **Cycle:** This is the medium low frequency of a time series. It represents the average movement of a series around its trend.
- **Detrended:** A series is detrended when its trend component has be removed. A line chart of such series should no longer show very low frequency ﬂuctuations.
- **High frequency:** This type of ﬂuctuations include the seasonal and irregular components only.
- **Irregular:** This is the very high frequency component of a time series also known as the residual. It is the least important component for this course because it is the most likely to be affected by measurement errors.
- **Low frequency:** This type of ﬂuctuations include the trend and the cyclical components only.
- **Measurement Error:** This is the error produced by the estimation of a variable. Every variable that we do not directly observe contains measurement errors.
- **Seasonally adjusted:** This means that the seasonal ﬂuctuations have be removed from the series. Such series is also called deseasonalized.
- **Seasonality:** This is the medium high frequency of a time series. It represents the common ﬂuctuations that we observe every year.
- **Trend:** This is the very low frequency of a time series. It represents the average behaviour of a series over a long period of time.
## 4.1 | Introduction
Decompose a time series into 4 components:
1. $T_t$ = trend (low freq)
2. $C_t$ = cyclical (medium low freq)
3. $S_t$ = seasonal (medium high freq)
4. $I_t$ = residual (high freq)

Additional components
1. $(T_t+C_t)$ and $(T_t\times C_t)$ (low freq)
2. $(S_t+I_t)$ and $(S_T\times I_t)$ (high freq)

Additive Model (simpler)
$$
X_t=T_t+C_t+S_t+I_t
$$
Multiplicative Model (best used for logs)
$$
X_t=T_t\times C_t\times S_t\times I_t
$$
$$
\begin{align}
\log(X_t)&=\log(T_t\times C_T\times S_t\times I_t) \\
&=\log(T_t)+\log(C_t)+\log(S_t)+\log I_t
\end{align}
$$
Trend = long run behavior (wouldn't make sense to say unemployment has a positive trend since it will never go above 1)
Cycle = observed movement around the observed trend on average

Adjusted = Data - Seasonal
## 4.2 | Trend (T)
Linear Trend
$$
T_1=a+bt
$$
Quadratic Trend
$$
T_1=a+bt+ct^2
$$
## 4.3 | Cycle (C)
Moving average of degree 5
$$
MA(5)_t=\frac{X_{t-2}+X_{t-1}+X_t+X_{t-1}+X_{T+2}}{5}
$$
## 4.4 | Seasonality (S)
Additive Model
- $(X_t-T_t)$: 0 means equal to trend, $>0$ means higher, $<0$ means lower
- $C_T$: 0 means equal to trend **on average**
- $S_t$: 0 means equal to low frequency component $(T_t+C_t)$ **on average**
- $I_T$: we don't care

Multiplicative Model
- Same, but log everything
## 4.5 | Measurement Errors
Unbiased error = equal to 0 on average
Biased error = not
## Quiz
Use midpoints for time periods (month, quarter, etc)
$$
\log(T_t)=a+bt
$$
Growth rate = $e^b-1$
# 5 | National Accounts
## 5.0 | Key Terms
- **Capital goods**: This is a type of highly durable good used to produce goods and services. It may include residential houses (we can rent it to others or to ourselves), office buildings, factories, machinery, etc.
- **Consumption**: This is the value of final goods and services purchased by households (C) or by the government (G).
- **Final goods and services**: These are goods and services purchased at the end of the production chain. It means that they are not intermediate goods and services.
- **Gross domestic product (GDP)**: This is a measure of the aggregate economic activity taking place inside an economy.
- **Gross national product (GNP)**: This is a measure of the aggregate economic activity generated by the citizens of an economy.
- **Intermediate goods and services**: These are goods and services used as input to produce other goods and/or services.
- **Investment (I)**: This is a flow variable that represents the value of capital goods purchased over a period. We need to distinguish gross investment, which is the purchase of new capital goods, from net investment, which represents the variation in the value of capital goods. Net investment is the gross investment minus the depreciation of existing capital goods.
- **Inflation rate**: This is the growth rate of the general price level estimated by a price index.
- **Net export (NX)**: This is equal to the value of goods produced domestically and sold to other economies (exports or X) minus the values of goods produced in other economies purchased by domestic residents (imports or M).
- **Nominal measure**: This a measure expressed in current dollars. Nominal wage is the amount of dollars received every week, nominal GDP is the dollar value of the production, nominal interest rate is the percentage return or payment on an amount expressed in current dollars.
- **Purchasing power**: This term refers to the individual's ability to purchase goods with a given amount of dollars. Therefore, when prices increase, the purchasing power of each dollar decreases.
- **Price index**: This is an index number defined as the ratio of two values of a given basket of goods from two different periods.
- **Quality adjustment bias**: This bias explains partly why the consumer price index (CPI) inflation may overstate the change in the cost of living. The measures ignore the fact that a fraction of price increases may be explained by quality improvement. That part of price increases is not an increase in the cost of living.
- **Quantity index**: This is an index number defined as the ratio of the value of two baskets of goods at a given set of prices.
- **Real measure**: This is a measure for which the effect of price movements has been removed. Therefore, it measures changes in quantity. For example, an increase of real GDP is interpreted as an increase in economic activity (production), and an increase in real wage implies a higher purchasing power for the workers, which is not necessary true for an increase in nominal wage.
- **Substitution bias**: This bias explains partly why the consumer price index (CPI) inflation may overstate the change in the cost of living. Since CPI uses a fixed basket of goods, substitutions from more expensive to less expensive goods as a response to changes in relative prices is not taken into account by the CPI.
## 5.1 | National Income Accounts
Three ways to calculate GDP:
1. **Product / Value added approach** = sum of value added for each producer = amount of output produced (excluding output used in intermediate stages)
2. **Income approach** = sum of income from each producer = wage + taxes + after-tax profit - variation of inventory
3. **Expenditure approach**:
$$
GDP=C+G+I+X-M
$$
	- $C$ = consumption
	- $G$  = government expenditure
	- $I$ = investment
	- $X$ = export
	- $M$ = import

Sources of error in GDP
1. Difficulty to measure the value of nonmarket goods
	1. Underground economy (illegal activities, legal activities that aren't reported for tax reasons)
	2. Goods and services produced without being sold in a market (home repairs, cooking, etc)
2. Difficulty to measure standard of living
	1. Quality of education and healthcare system
	2. Quality of environment, income inequality, etc

Change in Nominal GDP = change in Real GDP + change in price level
## 5.2 | Index Numbers in Macroeconomics
Paasche quality index fixes prices to the current period
$$
PQ_{t/0} = \frac{\sum_{i=1}^NP_{it}Q_{it}}{\sum_{i=1}^NP_{it}Q_{i0}}\times100
$$
- Base year = 0 
- $P_{it}$ = price at time $t$
- $Q_{it}$ = quantity at time $t$
- $N$ = number of goods

Growth rate
$$
X_t=X_{t-1}(1+g)
$$
- $g$ = growth rate of $X$ between $t-1$ and $t$

Laspeyres Quantity Index
$$
LQ_{t/0} = \frac{\sum_{i=1}^NP_{i0}Q_{it}}{\sum_{i=1}^NP_{i0}Q_{i0}}\times100
$$
Chained Paasche Index
$$
CPQ_{t/0} = PQ_{1/0}\times PQ_{2/1}\times\cdots\times PQ_{t/t-1}\times100
$$
Chained Laspeyres Index
$$
CPQ_{t/0} = LQ_{1/0}\times LQ_{2/1}\times\cdots\times LQ_{t/t-1}\times100
$$
Fisher Quantity Index (FQ)
$$
FQ_{t/0}=100\times\sqrt{PQ_{t/0}\times LQ_{t/0}}
$$
Chained Fisher Quantity Index (CFQ)
$$
CFQ_{t/0} = 100\times\sqrt{CPQ_{t/0}\times CLQ_{t/0}}
$$
**Price indices are the same thing but measuring price instead of quantity**
## 5.3 | Real vs Nominal and Cost of Living
$$
\text{Real value} = \frac{\text{Nominal value}}{\text{Price index}}
$$
$$
\text{GDP deflator} = \frac{\text{Nominal GDP}}{\text{Real GDP}}\times 100
$$
**Consumer Price Index** = Laspeyres price index

CPI for 2013 base 100 = 2012:
$$
CPI_{13/12} = \frac{P_{2013}\cdot Q_{2012}}{P_{2012}\cdot Q_{2012}}
$$
CPI (or any other index) cannot be used to compare the prices of different categories

Nominal vs Real interest rate
$$
r = \frac{1+i}{1+\pi}-1\sim i-\pi
$$
- $r$ = real interest rate
- $i$ = nominal interest rate
- $\pi$ = inflation rate
# 6 | Unemployment
## 6.0 | Key Terms
- **Acyclical**: This is the property of a series when there is no comovement between its cyclical component and the cyclical component of the real GDP.
- **Countercyclical**: This is the property of a series when there is a negative comovement between its cyclical component and the cyclical component of the real GDP.
- **Duration of unemployment (D)**: This term refers to the average duration of complete spells of unemployment for workers currently unemployed.
- **Employment (E)**: This is the number of workers who are currently employed (full or part time).
- **Employment rate (ER)**: This is the proportion of workers from the working age population that are employed (full or part time): E/WAP.
- **Harmonized unemployment rate (HUR)**: This is an adjusted version of the official unemployment rate. The purpose is have a measure that is comparable across countries.
- **Incidence of unemployment (I)**: This is the proportion of workers from the labour force who become unemployed at every period. It is the ﬂow variable that affects the stock of unemployment.
- **Labour force (LF)**: This the number of workers who are either unemployed or employed: LF=E+U.
- **Participation rate (PR)**: This is the proportion of workers from the working age population that are in the labour force: LF/WAP.
- **Procyclical**: This is the property of a series when there is a positive comovement between its cyclical component and the cyclical component of the real GDP.
- **Spell of unemployment**: This is the period of time from the moment a worker becomes unemployed until the moment he ﬁnds a job or exits the labour force.
- **Unemployment (U)**: This the number of workers who can work, are looking for a job, but are not employed. This is an approximate deﬁnition. The exact deﬁnition is more complicated and varies across countries.
- **Unemployment rate (UR)**: This is the proportion of workers from the labour force that are unemployed: U/LF.
- **Working age population (WAP)**: This is the population 15 years and older.
## 6.1 | Labor Force Characteristics
Definitions
- Population (WAP) = # of persons of working age (15+)
- Employment (E) = # employed workers (PT and FT)
- Unemployment (U) = # workers who are willing and able to work, but aren't
- Labor Force (LF) = Employment + Unemployment
- Outside labor force = Population - Employment (discouraged workers, retirees, students)
- Unemployment Rate (UR)
$$
UR = \frac{U}{LF}\times100\%
$$
- Participation Rate (PR)
$$
\frac{LF}{WAP} \times 100\%
$$
- Employment Rate (ER)
$$
ER = \frac{E}{WAP}\times 100\%
$$
Relationship
$$
UR = 1 - \frac{ER}{PR}
$$
Incidence and Duration of Unemployment
$$
UR = D \times I
$$
- Incidence = proportion of workers that become unemployed
$$
\frac{\text{New unemployed workers per month}}{LF}
$$
- Duration = average time each unemployed worker has been unemployed
- Steady State = # workers who become unemployed = # unemployed workers who become employed
# 7 | Income Inequality
## 7.0 | Key Terms
- **Decile:** When the population is divided into ten equal groups ordered with respect to a variable, the groups are called deciles. For example, the first income decile is one tenth (10%) of the population with the lowest income.
- **Economic growth:** This is the growth rate of the real per capital GDP.
- **Economic mobility:** This characterizes the ability for individuals to move from one part of the income distribution to another.
- **Gini coefficient:** This is a global measure of inequality. It goes from 0 (perfect equality) to 1 (perfect inequality).
- **Income share:** This is the proportion of total income that goes to an individual or a group. For example, if the income share of females is 55%, it means that 55% of the total income is earned by women.
- **Lorenz curve:** This is a line chart that illustrates the cumulative income share of the population as a function of the proportion of the population. For example, the points (0.05, 0.10) and (0.60, 0.50) on the Lorenz curve mean that 10% of the poorest individuals share 5% of total income of the economy and 50% share 60% of total income.
- **Low income measure (LIM):** This is equal to half the median of income. It is one of the measures of the poverty line. Individuals with income less than the LIM are considered below the poverty line.
- **Market basket measure (MBM):** This is the value of a basket of goods used in one definition of the poverty line. Individuals with income less than the MBM are considered below the poverty line.
- **Median:** This is a number that separates the distribution of a variable in two equal groups. For example, the median of income in Canada is \$40,000 if income is less then \$40,000 for 50% of the population and it is higher for the other 50%.
- **Per capita:** This is a Latin word that means by head. For example, the per capita income is the average income by individual.
- **Quintile:** When the population is divided into five equal groups ordered with respect to a variable, the groups are called quintiles. For example, the first income quintile is one fifth (20%) of the population with the lowest income.
## 7.1 | Income Inequality
Per Capita
$$
\text{Real per Capita GDP} = \frac{\text{Real GDP}}{\text{Population}}
$$
Gini Coefficient
$$
\frac{\int\text{(Line of perfect equality - Lorenz Curve)}}{\int\text{(Lorenz Curve)}}
$$
Gini Coefficient (Quintiles)
$$
G=0.8-0.4(h_1+h_2+h_3+h_4)
$$
Gini Coefficient (Deciles)
$$
G=0.9-0.2(h_1+\cdots+h_9)
$$
## 7.2 | Sources and Consequences of Inequality
Sources of inequality
1. Inequality in skills
2. Inequality in how skills are valued
3. Inequality in education
4. Technological advances
5. Value of education

Effect of inequality on growth
- Investment
- Education
- Taxation
- Political stability
- Level of criminality

Economic mobility
1. Accessibility of education
2. Accessibility of healthcare
# 8 | Economic Growth
## 8.0 | Key Terms
- **Bar density:** This is a way of representing the distribution of variables. In a bar density, the area of each bar represents the proportion of observations that lie in the interval determined by its base. It is an alternative to histograms for which the height of the bars represents the number of observations.
- **Conditional convergence:** This is a mechanism through which the standard of living of similar countries measured by the real per capita GDP converges to the same value. We observe conditional convergence when countries with low standard of living grow faster than similar countries with high standard of living. Being similar could mean having an equally educated or healthy population, having a similar political system, having an equivalent respect of human rights, and so on.
- **Convergence:** This is a mechanism through which the standard of living of countries measured by the real per capita GDP converges to the same value over a long period of time. We observe convergence when countries with lower standard of living grow faster.
- **Correlation:** This term is a synonym for comovement or observed relationship. A variable correlates with another if there is a positive or negative comovement between the two variables. To indicate the direction of the comovement, we say positive correlation when the variables move in the same direction and negative correlation if they move in opposite directions.
- **Economic growth:** This is the growth rate of the standard of living measured by the real per capita GDP over a long period of time.
- **Human development index (HDI):** This is an alternative measure of the aggregate standard of living. The index is based on education, life expectancy, the Gini coefficient, and the real per capita income.
- **Inequality adjusted HDI (IHDI):** This is an alternative measure of the aggregate standard of living. The index is a modified version of the human development index HDI. It is constructed by taking into account inequality in education and health.
- **Smooth density:** This is a line chart representing the distribution of a variable. It is approximately obtained by drawing a smooth line over a bar density. This tool is particularly useful to visualize multiple distributions on the same graph.
- **Standard of living:** This is a subjective concept that characterizes the well being of individuals. The determinants of the standard of living may include health, education, quality of air, freedom, security, income, etc. The real per capita GDP is often used as an indicator of the standard of living because it is correlated with its determinants.
- **Weighted distribution:** When we represent income distribution across countries using histograms, each country counts as one observation. To get a better representation of the distribution at the individual level, we need to take into account that the size of the population is not the same in each country. A weighted distribution will increase the importance of countries with larger population.
- **Welfare:** This is a subjective concept that characterizes the well being of a country at the aggregate level. Welfare depends on the standard of living or each individual and on how it is distributed in the population. For example, if the standard of living of some individuals increases and it decreases for others, it is not clear what happens to the welfare of the economy.
## 8.1 | Economic Growth
Real per capita GDP after T years
$$
X_t=(1+g)^tX_0
$$
$$
\log(X_t)=\log(X_0)+t\log(1+g)
$$
Proportion of poor countries has decreased
Inequality at the individual level has increased (less)
Inequality of real per capita GDP across countries has increased (more)

Convergence requires education, life expectancy, healthcare
# 9 | International Finance
## 9.0 | Key Terms
- **Canadian Effective Exchange Rate (CEER):** This is the trade weighted exchange rate of Canada and it is computed by the Bank of Canada.
- **Capital inflows:** This is the amount of domestic assets purchased by foreign investors over a period of time (flow variable). For example, a German investor buys Canadian government bonds.
- **Capital outflows:** This is the amount of foreign assets purchased by domestic investors over a period of time (flow variable). For example, a Canadian buys stocks from a US company.
- **Net capital outflows:** This is equal to the capital outflows minus the capital inflows.
- **Nominal exchange rate:** Also called exchange rate, this is the price of trading one currency for another. It can be expressed as domestic currency per unit of the foreign currency (e.g. the amount of Canadian dollars per US dollar) or the foreign currency per unit of the domestic currency (e.g. the amount of the US dollars per Canadian dollar).
- **Purchasing power parity (PPP):** This is a long term theory of real exchange rate. It argues that the cost of buying goods in two countries should eventually be the same. In other words, the real exchange rate should eventually be equal to 1.
- **Real exchange rate:** This is a measure of the relative cost of buying goods between two countries. It takes into account the nominal exchange rate and the price levels in both countries.
- **Trade weighted exchange rate or effective exchange rate:** This is an index that represents the average fluctuation of exchange rates between one country and its most important trading partners. This is also called multilateral exchange rate as opposed to regular exchange rates that are bilateral.
## 9.1 | Real Exchange Rate
Real exchange rate $(\epsilon)$
$$
\epsilon = e\times \frac{P^*}{P}
$$
$$
\frac{P^*}{P}=\frac{\text{real}}{\text{nominal}}
$$
- $e$ = nominal exchange rate
- $P^*$ = price level in foreign country
- $P$ = local price level

Purchasing power parity (PPP) series against the US (theoretically goes to 1)
$$
\frac{P_i}{P_{US}}
$$
Short-term fluctuations
- Price is determined by demand and supply
- Capital outflows (others purchase from Canada) vs inflows (Canada purchases from others)
- Supply of CAD determined by imports (Canada must trade CAD for USD) and capital outflows (Canada must trade CAD to buy int'l assets)
- Demand for CAD determined by exports (US must trade USD for CAD) and capital inflows (US must trade for CAD to buy Canadian assets)
$$
\text{Demand of CAD = Export - Import = Trade balance = Net Exports (NX)}
$$
$$
\text{Supply of CAD = S from capital outflows - D from capital inflows = Net Capital Outflows (NCO)}
$$
# 10 | The Monetary System
## 10.0 | Key Terms
- **Bank rate:** This is the interest rate paid by commercial banks when they borrow money from the Bank of Canada. This is also known as the discount rate.
- **Central bank:** This is an institution that manages the currency and money supply in an economy. For example, the central bank in Canada is the Bank of Canada and in the United Sates it is the Federal Reserve Bank.
- **Commodity money:** This is a type of money with intrinsic value. An example is gold because it can be used as money and to make jewels.
- **Currency:** This is the stock of bank notes and coins in circulation outside banks.
- **Fiat money:** This is a type of money with no intrinsic value. Bank notes represent fiat money: by yourself on a desert island, the notes would only be useful to start a fire.
- **Monetary base:** This is the value of all bank notes and coins inside and outside the banks plus the banks' deposits at the central bank. This is all known as the money base.
- **Monetary policy:** This is a policy implemented by a central bank to control the creation of money.
- **Money:** This is an item that can be used as medium of exchange, unit of account, and store of value.
- **Money supply:** This is the stock of money in an economy.
- **Overnight rate:** This is the interest rate on one-day loans between commercial banks.
- **Quantity equation:** The equation is , where  is the money supply,  is the velocity of money,  is the GDP deflator, and  is the real GDP.
- **Reserve:** This is the value of deposits not loaned out by commercial banks.
- **Reserve ratio:** This is the proportion of deposits kept as reserve by commercial banks.
- **Velocity of money:** This is the average number of times each dollar is used for transaction over a given period.
## 10.1 | The Stock of Money
Functions of money
- Medium of exchange = for trade
- Unit of account = sets prices
- Store of value = can save it

Two types of money
- Commodity money (eg. backed by gold)
- Fiat money (eg. USD)

M1 = money that includes stock of currency and deposits in chequable accounts (M1++ includes some non-chequable deposits)
M2 = M1 + saving bonds
M3 = monetary base = all notes and coins + deposits at the BoC
## 10.2 | The Bank of Canada
Bank of Canada roles
- Issue currency = only bank which can
- Banker of all banks = can lend to commercial banks
	- Bank rate = rate BoC charges commercial banks
	- Overnight rate = rate at which commercial banks borrow among themselves
	- Typically operates at (1%, 3%)
- Banker of the Canadian government = manages government accounts and national debt
- Monetary policy = controls the money supply

BoC Balance Sheet
- Canadian government direct and guaranteed securities = Bonds that the BoC has purchased from the market or government
- Securities purchased under resale agreements = Bonds purchased with a promise to resell them
- Notes in circulation = Total amount of dollar bills in circulation
- Canadian dollars deposits = Deposits from the Canadian government and commercial banks

Controlling money supply
- Reserve ratio = proportion of deposits not lent out by corporate banks
- Currency-to-deposit ratio = how much currency do people deposit

Different monetary policies
$$
\text{Operating band = [bank rate - 0.50\%, bank rate]}
$$
Market operations
- Open market operation = purchase government bonds to inject liquidity
- Quantitative easing (QE) = similar, but purchase / sell other assets
- Foreign exchange market operations = purchase USD and pay in CAD means money supply increases
- Sterilization = Forex + open market operations 
- Changing reserve requirements = higher reserve ratio means harder to make loans

Velocity of money
$$
V = \frac{P\times T}{M}=\frac{\text{Nominal GDP}}{\text{Money Supply}}
$$

Summary
- The ability of the Bank of Canada to control the money supply relies on the stability of the banking system. Less confidence in banks means people withdraw money. To prevent this, the Canada Deposit Insurance Corporation (CDIC) (owned by the federal government) insures deposits up to 100,000 dollars. 
- The velocity of money is not constant: it fluctuates over short periods of time and has a negative trend between 1970 and 2020 (1990 and 2020 for M1++).
- We observe a strong comovement between the cyclical component of money supply and the cyclical components of price level and nominal GDP. However, the direction of the comovement is not always positive. Also, positive comovements are sometimes observed with lags (one variable increases and the other follows after a few periods).
- We observe a strong positive comovement between the growth rate of money supply and the growth rates of nominal GDP and price level (inflation). The positive comovement is observed over short period of times and on average over longer periods.
- We observe little or no comovement between the growth rate of the money supply and the growth rate of real GDP.
- We observe a comovement between the cyclical components of the money supply and real GDP, but it is negative for some period and positive for others.
- Overall, the money supply affects the price level more than the real GDP. Although we can not be certain, we did not find evidence that the money supply only affect nominal variables. In other words, we could not find evidence that the money is neutral or super-neutral.
- The quantity equation is simple but the relationship between the four variables is complex. For example, if the Bank of Canada wants to increase the price level by increasing the money supply, it has to take into account the effect of the monetary policy on the price level and also on the velocity and real GDP: if the increase in the money supply is matched by a decrease of velocity, the policy may fail to affect the price level.
# 11 | Public Finance
## 11.0 | Key Terms
- **Accumulated deficit:** This it the sum of all past deficits (including the negative deficits) or minus the sum of all past surplus (including the negative surplus). It is also equal to the net debt minus the value of the government's non-financial assets.
- **Balanced budget:** When total expenditure and total revenue are equal (or if the deficit and surplus are equal to 0), we say that the budget is balanced.
- **Collective consumption:** This is a component of the government consumption expenditure that serves the interests of a society as a whole. It includes defence, justice, law enforcement etc.
- **Deficit:** This is equal to total expenditure minus total revenue. When the deficit is positive, the government spends more than its revenue and must borrow money.
- **Fiscal policy:** The purpose of this policy is to affect the economic activity by changing taxes and/or expenditures. For example, a government can support the economy in periods of recession by spending more or by reducing taxes.
- **Government transfer:** This is part of the government expenditure but it does not involve the purchase of goods or services. It includes social assistance, child benefits, old age benefits, etc.
- **Gross debt:** This is the value of all government bonds in circulation. It is also called the interest bearing debt because the interest payment is determined by it.
- **Individual consumption:** This is a component of the government consumption expenditure that serves the interests of individuals. It includes education, health, etc.
- **Net debt:** This is equal to the gross debt minus the government's financial assets. It is considered a better measure of the level of indebtedness because financial assets can be used to pay back part of the gross debt.
- **Surplus:** This is the negative of the deficit: revenue minus the expenditure. A negative surplus implies a positive deficit.
## 11.1 | Government Budget
Role of government is to manage
- Expenditure
- Revenue
- Deficit
- Debt
	- Gross debt = sum of all government bonds in circulation
	- Net debt = gross debt - government assets
	- Accumulated deficits = net debt - non-financial assets (media portrays this)
## 11.2 | Government and Economy
Fiscal policy = government changing expenditure or amount of taxes collected

Public policies
- Promote economic growth (strong system of justice, strong property rights, accessible and high-quality education to attract investors)
- Social programs (social assistance, child tax benefits, social housing, old age securities)
- Universal healthcare
- Minimum wage
- Public education
- Employment insurance
- Public goods (bridges, roads, etc)
- Environmental policies (global warming, air quality)
- Behaviours (mandatory seat belts / helmets, cigarette tax)
