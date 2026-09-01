window.SITE_CONTENT = window.SITE_CONTENT || { publications: [], talks: [], posts: [] };
window.SITE_CONTENT.publications.push({
  title: "Scheduling Quantum Annealing for Active User Detection in a NOMA Network",
  slug: "scheduling_qce24",
  category: "Proceedings",
  date: "2025-01-10",
  venue: "Proceedings of the 2024 IEEE International Conference on Quantum Computing and Engineering",
  authors: ["Romain Piron", "Claire Goursaud"],
  url: "https://ieeexplore.ieee.org/abstract/document/10821335",
  note: "Universal control schedule for quantum annealing applied to active user detection in NOMA networks.",
  abstract: "Active user detection in a non-orthogonal multiple access (NOMA) network is a major challenge for 5G/6G applications. However, classical algorithms that can perform this task suffer either from complexity or reduced performances. This work aims at proposing a quantum annealing approach to overcome this trade-off. Firstly, we show that the maximum a posteriori decoder of the activity pattern of the network can be seen as the ground state of an Ising Hamiltonian. For N users in a network with perfect channels, we propose a universal control function to schedule the annealing process. Our approach avoids to continuously compute the optimal control function but still ensures high success probability while demanding a lower annealing time than a linear control function. This advantage holds even in the presence of imperfections in the network."
});
