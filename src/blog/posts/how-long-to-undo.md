---
layout: post.njk
title: "How Long Would It Take to Undo This Design Decision?"
permalink: /blog/how-long-to-undo/
date: 2026-09-09
excerpt: "A design choice can create a supply dependency that takes years to reverse. That recovery time belongs in the original decision."
description: "An argument for considering supply dependencies and recovery time during design reviews, with a hypothetical example."
tags: ["design decisions", "supply chain risk"]
---
Before approving a design decision, I want one more question on the table: **if the supply behind this choice became unavailable, how long would it take us to change course?**

The answer belongs alongside performance, cost, and schedule. It tells us something about the commitment we are making and the choices we will have if conditions change.

## A dependency begins before the purchase order

Consider a hypothetical manufacturer designing an industrial pump. Its drawing specifies a particular grade of seal material from one producer. That material meets the operating requirements, and the team has test results supporting its use.

The choice may be justified. But suppose a replacement material would require redesign work, endurance testing, and customer acceptance. The manufacturer holds three months of stock. Working through an alternative could take a year.

These are illustrative assumptions, not a description of a particular company or incident.

If the producer stops supplying the material, procurement inherits a problem that buying alone cannot resolve. Finding another willing seller does not make a different material acceptable for use. The design and acceptance process determine which alternatives are real.

A supplier assessment might help estimate the chance of an interruption. It cannot, by itself, shorten that replacement process.

## One path means fewer ways to recover

Having one qualified source does not automatically make that source more likely to fail. It does make the consequences of losing it depend heavily on the available recovery paths.

In the hypothetical example, stock covers only part of the time needed to introduce a substitute. That gap deserves attention before production depends on the material.

There may be several responses: qualify another material, establish a second production route, hold additional stock where shelf life permits, or redesign the component. Each has costs and limitations. Two distributors buying from the same producer would not remove the underlying production dependency.

The decision is which response is justified by the exposure and the business's tolerance for interruption. Sometimes accepting the dependency will be reasonable. It should be a deliberate choice with an owner and a basis for revisiting it.

## Put recovery time into the design review

I would start with five questions:

1. **What does this choice commit us to?** Identify the material, process, facility, tooling, or approval that limits our options.
2. **Is that specificity necessary?** Establish which requirements demand it and where an alternative could meet the same need.
3. **What would changing course require?** Include engineering effort, testing, customer acceptance, capacity, and lead time.
4. **Can the business tolerate that interval?** Compare the recovery estimate with usable stock, available workarounds, and the consequences of interrupted production.
5. **Who accepts the dependency?** Name the decision owner, the basis for acceptance, and the conditions that should trigger another review.

These questions need engineering, procurement, and operations in the same conversation. Engineering can explain why the requirement exists. Procurement can examine supply routes and commercial feasibility. Operations can explain what an interruption would mean and how much time is available.

The output should be a decision someone can act on: fund qualification, change the requirement, secure a recovery option, or accept the exposure under stated conditions.

## Gather evidence for the choice

This is where risk data earns its place. Evidence about upstream production, substitution constraints, financial conditions, or qualification timelines is useful when it changes the choice or our confidence in it.

Before commissioning more analysis, I would ask what decision it is expected to inform. Would the result change whether we qualify an alternative? Would it alter how much stock we hold? Could it show that two apparent supply routes share a critical dependency?

If we cannot name a decision the information could affect, we should reconsider the scope of the analysis.

A useful design review leaves a record of the dependency, the estimated time to change course, the response selected, and who owns it. When circumstances change, the next team has a decision to revisit and enough context to understand why it was made.
