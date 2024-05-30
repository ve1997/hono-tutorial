import { client } from "@/app/lib/hono";
export async function GetExampleServerComponent() {
	const res = await client.api.hello.$get({
		query: {
			name: "User",
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
