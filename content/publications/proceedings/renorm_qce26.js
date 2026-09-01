window.SITE_CONTENT = window.SITE_CONTENT || { publications: [], talks: [], posts: [] };
window.SITE_CONTENT.publications.push({
  title: "Parameter Calibration for Reduced-Bandwidth Two-Photon Waveguide-QED Simulations",
  slug: "renorm_qce26",
  category: "Proceedings",
  date: "2026-07-25",
  award: "IEEE Quantum Week 2026 Best Paper Award: 2nd Place in the Quantum Photonics Track",
  venue: "To appear in the Proceedings of the 2026 IEEE International Conference on Quantum Computing and Engineering",
  authors: ["Romain Piron", "Akihito Soeda"],
  url: "https://arxiv.org/abs/2607.23036",
  note: "Practical application of renormalization techniques to callibrate the parameters of a reduced-bandwidth model for two-photon waveguide-QED simulations.",
  abstract: "Waveguide-QED platforms represent one potential approach to scalable quantum technologies, but their simulation remains computationally demanding due to the large number of frequency modes required to describe traveling photons. In practice, increasing the simulated bandwidth rapidly raises the numerical cost, leading to a trade-off between accuracy and tractability. The existing approaches formulated in time-domain indirectly control this trade-off through the choice of time step, which obscures the connection between discretization parameters and the represented spectral window. In this work, we introduce an end-to-end framework to explicitly control the effective bandwidth in waveguide-QED simulations of two-photon scattering. We show that truncating the frequency domain requires consistent shifts of the model parameters, and derive a systematic calibration procedure that preserves the physical accuracy of the reduced model. This enables tuning the central frequency and the bandwidth of the numerical spectrum, leading to a several-fold reduction in the Hilbert space dimension while maintaining physical accuracy. We discuss the limitations of this calibration and relate the finite-bandwidth viewpoint to time-domain discretizations."
});
