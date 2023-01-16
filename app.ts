import { Probot } from "npm:probot";

export default function mainApp(app: Probot): void {
    app.on("issues.opened", async (context) => {
      // `context` extracts information from the event, which can be passed to
      // GitHub API calls. This will return:
      //   { owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!' }
      const params = context.issue({ body: "Hello World!" });
  
      await context.octokit.issues.createComment(params);
      return;
    });
  }