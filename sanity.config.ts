import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  apiVersion: "2023-14-06",
  basePath: "/admin",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  projectId: "amogvu9l",
  schema: { types: schemas },
  title: "Portfolio",
});

export default config;
