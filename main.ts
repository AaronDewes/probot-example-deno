import { run } from "npm:probot";
import app from "./app.ts";

const isDenoDeploy = Deno.env.get("DENO_DEPLOYMENT_ID") !== undefined;

if (!isDenoDeploy) {
  await import("https://deno.land/x/dotenv@v3.2.0/load.ts");
}

await run(app, {
  env: Deno.env.toObject(),
});
