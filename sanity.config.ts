import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  apiVersion: "2023-14-06",
  basePath: "/admin",
  dataset: "production",
  plugins: [deskTool()],
  projectId: "amogvu9l",
  schema: { types: schemas },
  title: "Portfolio",
});

export default config;
