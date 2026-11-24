# Game Theory: An Overview

## 1. Introduction

Game theory is the mathematical study of strategic interaction: situations where the outcome for each participant depends not only on their own choices but also on the choices of others. It provides a formal language for analyzing conflict, cooperation, competition, and negotiation.

Although its roots reach back to earlier work on probability and economics, modern game theory began with **John von Neumann** and **Oskar Morgenstern**, whose 1944 book *Theory of Games and Economic Behavior* laid its foundations. In the 1950s, **John Nash** generalized the field with his concept of equilibrium, and later scholars such as Reinhard Selten, John Harsanyi, Thomas Schelling, and Robert Aumann extended it into economics, political science, biology, and computer science.

## 2. Core Concepts

| Term | Definition |
|------|------------|
| **Player** | A decision-maker in the game (person, firm, nation, algorithm, organism). |
| **Strategy** | A complete plan of action specifying what a player does in every situation they might face. |
| **Payoff** | The value (utility, profit, fitness) a player receives from a given outcome. |
| **Strategy profile** | A list of strategies, one for each player. |
| **Rationality** | The assumption that players act to maximize their own expected payoff. |
| **Common knowledge** | Facts that everyone knows, everyone knows that everyone knows, and so on. |
| **Information set** | What a player knows at the moment they must make a decision. |

## 3. Ways of Representing a Game

### 3.1 Normal (Strategic) Form

A matrix showing the payoffs for every combination of strategies. Best for simultaneous-move games.

Example: a two-player game, with payoffs listed as (Row, Column).

|  | Column: Left | Column: Right |
|---|:---:|:---:|
| **Row: Up** | (3, 3) | (0, 5) |
| **Row: Down** | (5, 0) | (1, 1) |

### 3.2 Extensive Form

A game tree showing the order of moves, what each player knows at each point, and the resulting payoffs. Best for sequential games.

### 3.3 Characteristic Function Form

Used in cooperative game theory: it assigns a value to every possible coalition of players.

## 4. Classifications of Games

- **Cooperative vs. non-cooperative:** Can players make binding agreements? Non-cooperative theory studies individual strategies; cooperative theory studies coalitions and how to divide gains.
- **Simultaneous vs. sequential:** Do players move at the same time (or without seeing others' moves), or in turn?
- **Zero-sum vs. non-zero-sum:** In zero-sum games, one player's gain is exactly another's loss. In non-zero-sum games, mutual gains or losses are possible.
- **Perfect vs. imperfect information:** Do players know the full history of play?
- **Complete vs. incomplete information:** Do players know the others' payoffs and types?
- **One-shot vs. repeated:** Is the game played once, or many times (finitely or infinitely)?
- **Discrete vs. continuous strategies:** Are choices finite options or values on a continuum, such as prices or quantities?

## 5. Solution Concepts

### 5.1 Dominant Strategies

A strategy is **strictly dominant** if it yields a higher payoff than any alternative regardless of what the other players do. Rational players will play dominant strategies when they have them. Iteratively eliminating strictly dominated strategies can simplify many games.

### 5.2 Nash Equilibrium

A strategy profile is a **Nash equilibrium** if no player can improve their payoff by unilaterally changing their strategy, given the strategies of the others.

Key facts:

- Every finite game has at least one Nash equilibrium, possibly in **mixed strategies** (Nash, 1950).
- A game may have multiple equilibria, which raises the question of **equilibrium selection**.
- A Nash equilibrium is not necessarily efficient or socially optimal.

### 5.3 Mixed Strategies

A **mixed strategy** is a probability distribution over pure strategies. In the classic matching pennies game, the only equilibrium has each player randomizing 50/50. In a mixed equilibrium, each player randomizes so as to make the others indifferent among their own choices.

### 5.4 Subgame Perfect Equilibrium

In sequential games, some Nash equilibria rely on **non-credible threats**. A **subgame perfect equilibrium** requires that players' strategies form a Nash equilibrium in every subgame, and it is typically found by **backward induction**: solve the last decision first, then work backward to the start.

### 5.5 Bayesian Nash Equilibrium

For games of incomplete information, players have private information ("types"). A **Bayesian Nash equilibrium** specifies a strategy for each type of each player, such that each type's strategy maximizes expected payoff given beliefs about the others' types.

### 5.6 Other Refinements and Concepts

- **Perfect Bayesian equilibrium:** combines sequential rationality with belief updating via Bayes' rule.
- **Trembling-hand perfection:** equilibria robust to small mistakes.
- **Correlated equilibrium:** players follow signals from a shared randomizing device.
- **Pareto efficiency:** an outcome where no one can be made better off without making someone worse off.
- **Minimax theorem:** in two-player zero-sum games, a player's maximin value equals their minimax value (von Neumann, 1928).

## 6. Classic Games

### 6.1 The Prisoner's Dilemma

Two suspects are interrogated separately. Each can **cooperate** (stay silent) or **defect** (betray the other). Payoffs (years of freedom gained, higher is better):

|  | B cooperates | B defects |
|---|:---:|:---:|
| **A cooperates** | (3, 3) | (0, 5) |
| **A defects** | (5, 0) | (1, 1) |

Defection is a dominant strategy for both, so the unique Nash equilibrium is (Defect, Defect), even though (Cooperate, Cooperate) would leave both better off. The dilemma captures tensions in arms races, pollution, overfishing, and price wars.

### 6.2 Stag Hunt

Two hunters can hunt a stag together (high payoff, but requires both) or hunt a hare alone (modest, safe payoff). There are two pure equilibria: (Stag, Stag) is payoff-dominant, while (Hare, Hare) is risk-dominant. The game illustrates **coordination** and **trust**.

### 6.3 Chicken (Hawk-Dove)

Two drivers head toward each other. Each may swerve or go straight. If both go straight, the result is catastrophic. The equilibria involve one player yielding while the other stands firm, which makes commitment and reputation central. It is a model for brinkmanship and for animal contests.

### 6.4 Battle of the Sexes

A couple wants to spend the evening together but prefers different activities. There are two pure equilibria (both attend one event or the other) and one mixed equilibrium. It models coordination with conflicting preferences.

### 6.5 Matching Pennies

A zero-sum game in which one player wins if the coins match and the other wins if they differ. There is no pure-strategy equilibrium, and the unique equilibrium is for each player to mix 50/50. The same logic underlies penalty kicks in soccer and serve placement in tennis.

### 6.6 Ultimatum and Dictator Games

In the **ultimatum game**, a proposer offers a split of a sum and a responder accepts or rejects (rejection means both get nothing). Standard theory predicts a tiny offer will be accepted, but experiments consistently show that offers near 50% are common and low offers are often rejected, pointing to fairness norms.

### 6.7 Cournot and Bertrand Competition

- **Cournot:** firms simultaneously choose quantities. The equilibrium price lies between the monopoly and competitive levels.
- **Bertrand:** firms simultaneously choose prices. With identical products, equilibrium price falls to marginal cost.

## 7. Repeated Games and Cooperation

When a game is played repeatedly, the **shadow of the future** can sustain cooperation.

- **Finitely repeated Prisoner's Dilemma:** with a known last round, backward induction predicts defection in every round.
- **Infinitely (or indefinitely) repeated games:** cooperation can be an equilibrium if players are sufficiently patient, enforced by punishment strategies such as *grim trigger* (cooperate until the other defects, then defect forever).
- **Folk theorems:** in infinitely repeated games, a very wide range of payoffs can be supported as equilibria.
- **Tit-for-Tat:** in Robert Axelrod's computer tournaments in the early 1980s, this simple strategy (cooperate first, then copy the opponent's last move) performed remarkably well. It is *nice*, *retaliatory*, *forgiving*, and *clear*.

## 8. Cooperative Game Theory

When players can form binding agreements, the focus shifts to which coalitions form and how to divide the surplus.

- **The core:** the set of allocations that no coalition can improve upon by breaking away.
- **Shapley value:** assigns each player their average marginal contribution across all orderings of players. It is the unique solution satisfying efficiency, symmetry, the dummy-player property, and additivity.
- **Nash bargaining solution:** selects the outcome that maximizes the product of players' gains over their disagreement payoffs.
- **Stable matching:** the Gale-Shapley algorithm finds stable pairings, and it underlies systems for matching medical residents to hospitals and students to schools.

## 9. Information and Signaling

When some players know more than others, strategy involves **information itself**.

- **Adverse selection:** hidden characteristics lead to market failure (Akerlof's "market for lemons").
- **Moral hazard:** hidden actions after a contract is made.
- **Signaling:** an informed party takes a costly action to credibly reveal its type (Spence's job-market signaling model, where education signals ability).
- **Screening:** an uninformed party designs choices that induce others to reveal their types.
- **Cheap talk:** communication that costs nothing and is not binding, which can still convey information when interests are partially aligned.

## 10. Mechanism Design

Often called "reverse game theory," **mechanism design** asks: given the outcome we want, how should we design the rules so that self-interested players produce it?

- **Auctions:** first-price, second-price (Vickrey), English, and Dutch auctions. In a Vickrey auction, bidding one's true value is a dominant strategy.
- **Revelation principle:** any outcome achievable by some mechanism can be achieved by a mechanism in which players truthfully report their private information.
- **Incentive compatibility:** the design requirement that honesty (or desired behavior) is in each player's own interest.
- **Applications:** spectrum auctions, kidney exchange, school choice, ad auctions, congestion pricing, and voting systems.

## 11. Evolutionary Game Theory

Evolutionary game theory drops the assumption of rational calculation. Strategies are inherited traits or learned behaviors, and payoffs correspond to reproductive fitness or imitation success.

- **Evolutionarily stable strategy (ESS):** a strategy that, if adopted by a population, cannot be invaded by a rare mutant strategy (Maynard Smith and Price, 1973).
- **Replicator dynamics:** strategies that earn above-average payoffs grow in frequency.
- **Examples:** hawk-dove contests in animal conflict, cooperation among unrelated individuals, and the evolution of social norms.

## 12. Behavioral Game Theory

Experiments show that real people often deviate from the classical rational-agent model. Documented patterns include:

- **Fairness and inequity aversion:** willingness to sacrifice payoff to punish unfair offers.
- **Reciprocity:** rewarding kindness and punishing unkindness.
- **Bounded rationality:** limited depth of reasoning, captured by *level-k* and *cognitive hierarchy* models.
- **Quantal response:** players choose better options with higher probability but make errors.
- **Social preferences and norms:** altruism, spite, and conformity.

These findings do not make game theory irrelevant; they refine it by building richer payoff functions and decision models.

## 13. Applications

| Field | Examples |
|-------|----------|
| **Economics** | Oligopoly pricing, auctions, contract design, market regulation, bargaining |
| **Political science** | Voting systems, coalition formation, arms control, deterrence, campaign strategy |
| **Biology** | Animal conflict, cooperation, sex ratios, signaling, host-parasite dynamics |
| **Computer science** | Algorithmic game theory, network routing, blockchain incentives, multi-agent AI, security games |
| **Law** | Litigation and settlement, regulatory compliance, antitrust |
| **Business** | Pricing strategy, negotiation, entry deterrence, supply chains |
| **Environmental policy** | Climate agreements, common-pool resource management ("tragedy of the commons") |
| **Sports** | Penalty kicks, play-calling, tournament design |

## 14. Limitations and Criticisms

- **Strong rationality assumptions:** real decision-makers have limited cognition and information.
- **Multiple equilibria:** theory often cannot say which equilibrium will occur.
- **Sensitivity to modeling choices:** small changes to the rules or information structure can change predictions.
- **Common knowledge requirements:** the assumption that everyone knows the game and everyone else's rationality is demanding.
- **Payoff measurement:** assigning numerical utilities to real outcomes is difficult.
- **Computational complexity:** finding Nash equilibria is computationally hard in general (PPAD-complete).

## 15. Key Figures

| Name | Contribution |
|------|--------------|
| **John von Neumann** | Minimax theorem; co-founded the field |
| **Oskar Morgenstern** | Co-authored *Theory of Games and Economic Behavior* |
| **John Nash** | Nash equilibrium; bargaining solution |
| **Reinhard Selten** | Subgame perfection; trembling-hand perfection |
| **John Harsanyi** | Games of incomplete information |
| **Lloyd Shapley** | Shapley value; stable matching |
| **Thomas Schelling** | Focal points, commitment, strategy of conflict |
| **Robert Aumann** | Repeated games; correlated equilibrium |
| **John Maynard Smith** | Evolutionary game theory and the ESS |
| **Robert Axelrod** | Tournaments on the evolution of cooperation |
| **Roger Myerson, Leonid Hurwicz, Eric Maskin** | Mechanism design |

## 16. Further Reading

- von Neumann, J., & Morgenstern, O. (1944). *Theory of Games and Economic Behavior.*
- Nash, J. (1950). "Equilibrium Points in N-Person Games." *PNAS.*
- Schelling, T. (1960). *The Strategy of Conflict.*
- Axelrod, R. (1984). *The Evolution of Cooperation.*
- Fudenberg, D., & Tirole, J. (1991). *Game Theory.*
- Osborne, M., & Rubinstein, A. (1994). *A Course in Game Theory.*
- Dixit, A., & Nalebuff, B. (1991). *Thinking Strategically.* (an accessible introduction)
- Camerer, C. (2003). *Behavioral Game Theory.*

## 17. Glossary

- **Backward induction:** solving a sequential game from the last move to the first.
- **Best response:** the strategy that maximizes a player's payoff given the others' strategies.
- **Credible threat:** a threat that it would be in the threatener's interest to carry out.
- **Focal point:** a solution that players tend to choose because it seems natural or prominent.
- **Grim trigger:** cooperate until the other player defects, then defect forever.
- **Pareto dominance:** outcome A Pareto-dominates B if A makes at least one player better off and no one worse off.
- **Pure strategy:** a strategy with no randomization.
- **Zero-sum game:** a game in which the players' payoffs always sum to a constant.