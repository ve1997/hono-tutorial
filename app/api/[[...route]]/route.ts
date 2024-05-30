import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";

const app = new Hono().basePath("/api");

const route = app
	.get(
		"/hello",
		zValidator(
			"query",
			z.object({
				name: z.string(),
			}),
		),
		(c) => {
			const { name } = c.req.valid("query");
			return c.json({
				message: `Hi ${name}`,
			});
		},
	)
	.post(
		"/world",
		zValidator(
			"json",
			z.object({
				text: z.string(),
			}),
		),
		(c) => {
			const { text } = c.req.valid("json");
			return c.json({
				message: `Hello ${text}`,
			});
		},
	);

export const GET = handle(app);
export const POST = handle(app);
export type AppType = typeof route;
