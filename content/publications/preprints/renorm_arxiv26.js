window.SITE_CONTENT = window.SITE_CONTENT || { publications: [], talks: [], posts: [] };
window.SITE_CONTENT.publications.push({
  title: "Bandwidth-Cost Reduction for Photon-Matter Simulation at the Single-Photon Level",
  slug: "renorm_arxiv26",
  category: "Preprints",
  date: "2026-01-22",
  venue: "arXiv:2601.15945 [quant-ph]",
  authors: ["Romain Piron", "Akihito Soeda"],
  url: "https://arxiv.org/abs/2601.15945",
  note: "A renormalization treatment for light-matter Hamiltonian simulations with explicit IR and UV cutoffs.",
  abstract: "Simulations of quantum dynamics of traveling photons interacting with matter can be used to model and design photonic quantum-network components. Such simulations require selecting a finite set of photonic modes, where smaller sets are more desirable for computational efficiency. In this work, however, we show that opting for smaller subsets alters simulation results, if done naively. We therefore provide a consistency condition that can be used to calibrate the simulation input parameters to increase efficiency while preserving accuracy, simultaneously. This condition is then used to derive a simple prescription that reduces the propagation cost by two order of magnitude in a waveguide benchmark. Finally, we extend the same calibration principle to a two-dimensional atomic array, demonstrating the simultaneous benefits beyond analytically solvable waveguide models."
});
