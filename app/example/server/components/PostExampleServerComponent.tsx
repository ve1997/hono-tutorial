import { client } from "@/app/lib/hono";
export async function PostExampleServerComponent() {
	const res = await client.api.world.$post({
		json: {
			text: "User",
		},
	});
	const json = await res.json();
	return (
		<div>
			Server Component
			<p>{json.message}</p>
		</div>
	);
}
