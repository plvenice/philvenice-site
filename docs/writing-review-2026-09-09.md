# Writing review, September 9, 2026

## 1. Issues found

- “protect production, preserve alternatives, and account for the time it takes to recover”: abstract three-part homepage promise. Replaced with the specific problem of dependency and changing course.
- “This is a place to develop that reasoning”: meta-commentary. Replaced with the position that recovery time belongs in design decisions.
- “The question I keep coming back to is practical”: announces practicality instead of demonstrating it. Replaced with examples of decisions.
- “what should we actually change?”: unnecessary intensifier in the About copy. Removed in the rewrite.
- “The aim is to help organizations build the capability to make better supply chain decisions themselves”: indirect construction. Replaced with “The aim is to help teams make those decisions themselves.”
- “a problem worth exploring together”: vague invitation. Contact copy now asks where a team is getting stuck.
- “The answer belongs alongside performance, cost, and schedule”: generic triad after an abstract opening. The new opening starts with the drawing and buyer.
- “The design and acceptance process determine which alternatives are real”: vague qualifier. The example now names permission and evidence to use the substitute.
- “This is where risk data earns its place”: formulaic transition. Replaced with the decision a data purchase could change.
- Repeated “I would” framing and similar paragraph lengths: varied pacing, shortened the opening, and consolidated the example.
- Bold emphasis on the opening question and every numbered question: removed. The five questions remain a useful checklist.
- “This is a place,” “What you'll find here,” and “Gather evidence for the choice”: generic framing replaced with specific editorial positions or direct descriptions.

## 2. Rewritten version

The following is the complete rendered main content of the edited pages, including the figure's static fallback. Interactive explanations also appear in src/js/recovery.js.

### index.html

Phil Venice · Supply chain risk & decisions

What should we change

to reduce the risk?

I write about using supply chain risk data to decide what to do next.
    My focus is on choices that can leave a business dependent on one source,
    and what it would take to change course.

Read the first essay

About Phil

The question behind the work

How long would it take to undo this decision?

A drawing can narrow the supply base years before a buyer places an order.
    By the time supply stops, qualifying a replacement may take longer than the business can wait.

I want that recovery time considered while the design is still open to change.

Explore the dependency and recovery timeline →

Writing

How Long Would It Take to Undo This Design Decision?

September 9, 2026

A design choice can create a supply dependency that takes years to reverse. That recovery time belongs in the original decision.

design decisions

supply chain risk

### about/index.html

About

I'm Phil Venice.

My background is in supply chain risk management, third-party risk, and enterprise
    program leadership. I spent 11 years at Boeing and now work in product management at LMI.

I want supply chain risk work to end in a decision: change a requirement, qualify
    another source, buy stock, or accept the exposure with an explanation.

The choices made before a shortage

A buyer can find another supplier and still be unable to use its product. The drawing
    may specify a particular material. Testing a substitute may take longer than the stock
    on hand will last. Understanding the supplier is only part of the job.

That is why I write about design decisions and recovery time. I want to help teams
    recognize a supply dependency while they can still do something about it.

What I write about

My essays examine how engineering and procurement decisions affect the options
    available to a business. I use public sources and hypothetical examples to work through
    the tradeoffs. The aim is to help teams make those decisions themselves.

This is my personal writing. Views are my own.

Read the essays

or

get in touch

.

### contact/index.html

Get in touch

If your team has plenty of supply chain data but is struggling to decide what to do
    with it, I’d like to hear where you’re getting stuck.

You can also reach me about writing or speaking.

✉  plvenice@gmail.com

in  linkedin.com/in/plvenice

### blog/index.html

Writing

What to do about supply chain risk.

Design choices can limit how a business responds to a shortage. These essays examine what can be done before and after that happens.

How Long Would It Take to Undo This Design Decision?

September 9, 2026

A design choice can create a supply dependency that takes years to reverse. That recovery time belongs in the original decision.

design decisions

supply chain risk

### blog/how-long-to-undo/index.html

← All writing

How Long Would It Take to Undo This Design Decision?

September 9, 2026

A drawing can leave a buyer with only one acceptable source. Before approving it, I want to know how long it would take to use something else.

That answer belongs in the design review. Once production depends on the choice, changing it can become a much harder proposition.

A dependency begins before the purchase order

Consider a hypothetical manufacturer designing an industrial pump. The drawing specifies one producer's grade of seal material. It meets the operating requirements, and the team has test results supporting its use.

Now suppose the producer stops supplying it. The manufacturer has three months of stock. Using a replacement would take a year, including redesign work, endurance testing, and customer acceptance. Finding a willing seller wouldn't solve the immediate problem: the manufacturer still needs permission and evidence to use the substitute.

The example and figures below are hypothetical. The numbers illustrate the reasoning; they are not estimates for a particular product.

Explore the example

From the drawing to a production gap

Select a link in the chain to see what it constrains.

1. Drawing

One material specified

2. Supply

One qualified producer

3. Replacement

Testing before use

4. Production

Stock buys time

The drawing calls out one producer's material. An alternative needs evidence that it meets the requirements and acceptance for use.

Compare a decision

Custom timing assumptions

Starting point: qualify after disruption

Hold more stock

Qualify an alternative beforehand

Qualification starts after supply stops. Replacement supply takes 12 months; stock covers 3.

Stock coverage:

3 months

Replacement supply ready:

12 months

Reset example

Supply stops · month 0

Month 24

Stock covers 3 months

Replacement supply ready in month 12

Uncovered interval: months 3 to 12

9 months without supply coverage.

Assumes supply stops completely at month 0, demand stays constant, stock is usable, and replacement supply covers demand once ready. Gap = replacement lead time minus stock coverage, with a minimum of zero. This is a timing illustration, not a prediction of downtime or failure probability.

The chart shows the starting example. Enable JavaScript to change the assumptions. Qualifying an alternative beforehand is illustrated as 2 months to supply readiness: 3 months of stock would cover that interval.

Stock buys time. Qualification changes the options.

In the starting example, stock runs out nine months before replacement supply is ready. Buying more stock would shorten that gap, provided the material can be stored and the business can afford to hold it. Qualifying an alternative beforehand would change how much work remains after the disruption.

Neither choice comes free. An alternative needs testing and a producer with capacity. Inventory ties up cash and may expire. A second distributor may buy from the same producer, leaving the original dependency intact.

Having one qualified source doesn't necessarily make that source more likely to fail. It leaves the business with fewer ways to respond if it does. I would examine those recovery options before spending more effort refining a supplier's risk score.

Sometimes the specified material is necessary, and accepting the dependency is reasonable. Someone should own that decision and explain what would cause the team to revisit it.

Put recovery time into the design review

I would ask five questions:

What does this choice commit us to: a material, facility, process, tool, or approval?

Which requirements make that choice necessary, and could an alternative meet them?

What work would changing course require, and how long would it take?

Can stock or another workaround cover that time? If not, what happens to production?

Who accepts the remaining exposure, and when will they review it again?

Engineering needs to explain why the requirement exists. Procurement needs to establish whether another supply route is commercially available. Operations needs to say how long production can continue without replenishment. Together, they can decide whether to fund an alternative or carry the exposure.

Record the choice and its assumptions. Give the next team enough context to revisit it when a supplier closes a facility, demand rises, or a qualification estimate changes.

Decide what the next data purchase is for

Before commissioning more analysis, I would name the decision it could change.

Evidence that two suppliers share a production facility might justify qualifying a third. A shorter qualification timeline might reduce the stock needed to cover an interruption. If another report would leave the response unchanged, I would question buying it.

For the pump manufacturer, the useful next step could be a funded qualification effort with an owner and a completion date. A more detailed description of the exposure would leave that work still to do.

## 3. What changed

Replaced abstract framing with the buyer's constraint and specific decisions. Preserved the hypothetical pump, three months of starting stock, and twelve-month replacement assumption. Added a dependency chain and an adjustable timeline. Retained the distinction between failure probability and recovery consequences. The alternative-qualified preset assumes two months to supply readiness and explicitly requires independent capacity.

## 4. Second-pass audit

Reviewed the revised prose and figure labels. Removed the remaining generic Contact invitation and replaced the repeated homepage triads. The five questions are retained as a parallel checklist. Technical qualifications about material suitability, capacity, and timing remain because they affect the argument. No em dashes or inflated vocabulary remain in the rendered main text. The writing uses a hypothetical example without claims about private employer incidents.
