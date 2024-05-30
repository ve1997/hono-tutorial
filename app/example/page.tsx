import { PostExampleClientComponent } from "@/app/example/components/PostExampleClientComponent";
import { GetExampleClientComponent } from "./components/GetExampleClientComponent";

export default function Example() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-gray-200 p-4">
			<GetExampleClientComponent />
			<PostExampleClientComponent />
		</div>
	);
}
