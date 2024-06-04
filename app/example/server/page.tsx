import { client } from "@/app/lib/hono";
export default async function Page() {
	const res = await client.api.hello.$get({
		query: {
			name: "User",
		},
	});
	const data = await res.json();
	return (
		<div className="m-4 flex min-w-[400px] flex-col items-center justify-center rounded bg-white p-4 shadow-md">
			<h1 className="mb-4 font-bold text-2xl text-gray-800">Hello, Hono!</h1>
			<p className="text-gray-700 text-lg">
				Welcome to Hono! This is an example page.
			</p>
			<p className="text-gray-700 text-lg">
				API Response: <strong>{data.message}</strong>
			</p>
		</div>
	);
}
