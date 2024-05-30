"use client";
import { client } from "@/app/lib/hono";
import type { InferResponseType } from "hono";
import { useEffect, useState } from "react";

type ResType = InferResponseType<typeof client.api.hello.$get>;
export function GetExampleClientComponent() {
	const [data, setData] = useState<ResType | null>(null);
	useEffect(() => {
		client.api.hello
			.$get({
				query: {
					name: "User",
				},
			})
			.then((res) => res.json())
			.then((json) => setData(json));
	}, []);
	return (
		<div className="m-4 flex min-w-[400px] items-center justify-center rounded bg-white p-4 shadow-md">
			{data ? (
				<p className="text-gray-800 text-lg">{data.message}</p>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}
