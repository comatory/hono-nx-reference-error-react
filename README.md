# Test app

Application demonstrating issues with `ReferenceError: React is not defined` - [link](https://github.com/honojs/hono/issues/3931)

## What version of Hono are you using?

`4.6.14`

## What runtime/platform is your app running on? (with version if possible)

Cloudflare Workers

## What steps can reproduce the bug?

1. Node version 20.16.0
2. From root of the repo run: `pnpm nx serve app`
3. Open browser at `localhost:8787`

## What is the expected behavior?

No error during runtime.

## What do you see instead?

Application crashes with ReferenceError: React is not defined, see log. This happens both in dev mode and deployed application.
Editor is receiving errors from Typescript LSP next to JSX syntax: Cannot find name 'React'

## Additional information

- see [tsconfig.lib.json](./libs/app/tsconfig.lib.json) for the configuration

I am able to make the whole thing work by moving "compilerOptions" to `libs/app/tsconfig.json` (instead of `tsconfig.lib.json`). However, this would be considered anti-pattern for Nx as you're supposed to adjust configuration for the program code in *.lib.json config files (this avoids slow-downs once the monorepo gets too big).

I realize that my issue can also be caused by mis-configuration in Nx, or some specific versions of tooling I'm using. But I considered there's a higher chance of someone noticing it here than in Nx bug tracker. But I will follow-up in Nx if needed but would really appreciate 2nd set of eyes on this.
