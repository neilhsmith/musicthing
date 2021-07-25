// https://www.npmjs.com/package/browser-or-node
// Copied manually for learning purposes.

export const isBrowser =
  typeof window !== "undefined" && typeof window.document !== "undefined";

export const isWebWorker =
  typeof window.self === "object" &&
  window.self.constructor &&
  window.self.constructor.name === "DedicatedWorkerGlobalScope";

export const isNode =
  typeof process !== "undefined" &&
  process.versions != null &&
  process.versions.node != null;

export const isJsDom = () =>
  (typeof window !== "undefined" && window.name === "nodejs") ||
  navigator.userAgent.includes("Node.js") ||
  navigator.userAgent.includes("jsdom");
