window.SITE_CONTENT = window.SITE_CONTENT || { publications: [], talks: [], posts: [] };
window.SITE_CONTENT.publications.push({
  title: "Mixed Grover: A Hybrid Version to Improve Grover's Algorithm for Unstructured Database Search",
  slug: "mg_tqe25",
  category: "Journal Articles",
  date: "2025-03-28",
  venue: "IEEE Transactions on Quantum Engineering, Volume 6",
  authors: ["Romain Piron", "Muhammad Idham Habibie", "Claire Goursaud"],
  url: "https://ieeexplore.ieee.org/abstract/document/10944580",
  note: "A hybrid multi-trial variant of Grover search reducing computational cost at high target success probability.",
  abstract: "In this article, we propose a new strategy to exploit Grover's algorithm for unstructured search problems. We first show that running Grover's routine with a reduced number of iterations while allowing several trials presents a complexity advantage while maintaining the same success probability. Then, through a theoretical analysis, we provide a generic procedure to parameterize the number of iterations per run and the maximum number of trials, given a target success probability and a database of size N. Finally, we show that this approach reduces the computational cost by at least 10% for p >= 0.999, independently of the database size."
});
