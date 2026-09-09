---
layout: post.njk
title: "How Long Would It Take to Undo This Design Decision?"
permalink: /blog/how-long-to-undo/
date: 2026-09-09
excerpt: "A design choice can create a supply dependency that takes years to reverse. That recovery time belongs in the original decision."
description: "An argument for considering supply dependencies and recovery time during design reviews, with a hypothetical example."
tags: ["design decisions", "supply chain risk"]
---
A drawing can leave a buyer with only one acceptable source. Before approving it, I want to know how long it would take to use something else.

That answer belongs in the design review. Once production depends on the choice, changing it can become a much harder proposition.

## A dependency begins before the purchase order

Consider a hypothetical manufacturer designing an industrial pump. The drawing specifies one producer's grade of seal material. It meets the operating requirements, and the team has test results supporting its use.

Now suppose the producer stops supplying it. The manufacturer has three months of stock. Using a replacement would take a year, including redesign work, endurance testing, and customer acceptance. Finding a willing seller wouldn't solve the immediate problem: the manufacturer still needs permission and evidence to use the substitute.

The example and figures below are hypothetical. The numbers illustrate the reasoning; they are not estimates for a particular product.

{% include "recovery-figure.njk" %}

## Stock buys time. Qualification changes the options.

In the starting example, stock runs out nine months before replacement supply is ready. Buying more stock would shorten that gap, provided the material can be stored and the business can afford to hold it. Qualifying an alternative beforehand would change how much work remains after the disruption.

Neither choice comes free. An alternative needs testing and a producer with capacity. Inventory ties up cash and may expire. A second distributor may buy from the same producer, leaving the original dependency intact.

Having one qualified source doesn't necessarily make that source more likely to fail. It leaves the business with fewer ways to respond if it does. I would examine those recovery options before spending more effort refining a supplier's risk score.

Sometimes the specified material is necessary, and accepting the dependency is reasonable. Someone should own that decision and explain what would cause the team to revisit it.

## Put recovery time into the design review

I would ask five questions:

1. What does this choice commit us to: a material, facility, process, tool, or approval?
2. Which requirements make that choice necessary, and could an alternative meet them?
3. What work would changing course require, and how long would it take?
4. Can stock or another workaround cover that time? If not, what happens to production?
5. Who accepts the remaining exposure, and when will they review it again?

Engineering needs to explain why the requirement exists. Procurement needs to establish whether another supply route is commercially available. Operations needs to say how long production can continue without replenishment. Together, they can decide whether to fund an alternative or carry the exposure.

Record the choice and its assumptions. Give the next team enough context to revisit it when a supplier closes a facility, demand rises, or a qualification estimate changes.

## Decide what the next data purchase is for

Before commissioning more analysis, I would name the decision it could change.

Evidence that two suppliers share a production facility might justify qualifying a third. A shorter qualification timeline might reduce the stock needed to cover an interruption. If another report would leave the response unchanged, I would question buying it.

For the pump manufacturer, the useful next step could be a funded qualification effort with an owner and a completion date. A more detailed description of the exposure would leave that work still to do.
