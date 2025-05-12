export default {
  fetch() {
    return new Response("Worker is running!");
  },
};

// Cloudflare Pages config
export const config = {
  // Build specific settings
  build: {
    command: "npm run build",
    environment: {
      NODE_VERSION: "20",
    },
  },
};
