# Probot + Deno example

This is an example on how to use Probot with Deno and Deno Deploy.

You can start the server with the following command:

```
deno task start
```

For development, use this instead:

```
deno task dev
```

On Deno Deploy, make sure to set the entry point of your app to main.ts. That
file contains a minimal wrapper to get Probot to work with Deno, you should
write your actual app code to app.ts.
