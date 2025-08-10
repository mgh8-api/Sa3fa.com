import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: true,                 // listen on 0.0.0.0 inside container
    port: 8080,                 // keep in sync with Traefik service port
    strictPort: true,
    allowedHosts: ["sa3fa.com", "www.sa3fa.com"],
    hmr: {
      host: "sa3fa.com",        // hostname the browser should use
      protocol: "wss",          // behind HTTPS -> use secure WS
      clientPort: 443,          // IMPORTANT: browser connects to 443 via Traefik
      // do NOT set `port: 443` here, or Vite will try to bind to 443
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
}));
