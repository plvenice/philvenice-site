/* Hypothetical timing illustration. No probability model. */
function recoveryGap(stock, ready) {
  return { gap: Math.max(0, ready - stock), spare: Math.max(0, stock - ready) };
}
if (typeof module !== "undefined") module.exports = { recoveryGap };
if (typeof document !== "undefined") {
  const figure = document.querySelector(".recovery-figure");
  if (figure) {
    const get = (id) => figure.querySelector(`#${id}`);
    const stock = get("stock-months");
    const ready = get("recovery-months");
    const scenario = get("recovery-scenario");
    const months = (n) => `${n} month${n === 1 ? "" : "s"}`;
    const scenarios = {
      baseline: [3, 12, "Qualification starts after supply stops. Replacement supply takes 12 months; stock covers 3."],
      stock: [9, 12, "Extra inventory covers 9 months. The 12-month replacement effort is unchanged. Storage limits and carrying cost still need review."],
      qualified: [3, 2, "Prior qualification leaves 2 months to arrange replacement supply in this example. This assumes an independent producer with enough capacity; qualification alone does not guarantee availability."]
    };
    const details = {
      drawing: "The drawing calls out one producer's material. An alternative needs evidence that it meets the requirements and acceptance for use.",
      source: "In this example, one producer supplies the specified material. Buying through two distributors would still depend on that producer.",
      replacement: "Replacement lead time includes any remaining engineering work, testing, acceptance, and ramp-up until supply can cover demand. Prior qualification can remove some of that work.",
      production: "Usable stock keeps production supplied while replacement work proceeds. When stock runs out first, the remaining interval has no supply coverage in this example."
    };
    function render() {
      const s = Number(stock.value), r = Number(ready.value);
      const { gap, spare } = recoveryGap(s, r);
      get("stock-value").textContent = months(s);
      get("recovery-value").textContent = months(r);
      stock.setAttribute("aria-valuetext", months(s));
      ready.setAttribute("aria-valuetext", months(r));
      get("stock-bar").style.width = `${s / 24 * 100}%`;
      get("ready-bar").style.width = `${r / 24 * 100}%`;
      get("gap-bar").style.marginLeft = `${Math.min(s, r) / 24 * 100}%`;
      get("gap-bar").style.width = `${gap / 24 * 100}%`;
      get("stock-bar-label").textContent = `Stock covers ${months(s)}`;
      get("ready-bar-label").textContent = `Replacement supply ready in month ${r}`;
      get("gap-bar-label").textContent = gap ? `Uncovered interval: months ${s} to ${r}` : "No uncovered interval";
      const result = gap ? `${months(gap)} without supply coverage.` : spare ? `No supply gap. Stock covers ${months(spare)} beyond replacement readiness.` : "No supply gap, but no time to spare.";
      get("recovery-result").textContent = result;
      figure.querySelector(".recovery-chart").setAttribute("aria-label", `Stock covers ${months(s)}. Replacement supply ready in month ${r}. ${result}`);
    }
    function preset() {
      const [s, r, detail] = scenarios[scenario.value];
      stock.value = s; ready.value = r;
      get("scenario-detail").textContent = detail;
      render();
    }
    scenario.addEventListener("change", preset);
    for (const input of [stock, ready]) input.addEventListener("input", () => {
      scenario.value = "custom";
      get("scenario-detail").textContent = "Custom timing assumptions. Review capacity, qualification work, and inventory limits before applying them to a product.";
      render();
    });
    const nodes = figure.querySelectorAll("[data-chain]");
    nodes.forEach((button) => button.addEventListener("click", () => {
      nodes.forEach((node) => node.setAttribute("aria-pressed", String(node === button)));
      get("chain-detail").textContent = details[button.dataset.chain];
    }));
    get("recovery-reset").addEventListener("click", () => {
      scenario.value = "baseline";
      nodes[0].click();
      preset();
    });
    figure.querySelector(".recovery-controls").hidden = false;
    render();
  }
}
