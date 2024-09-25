import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { HelloController } from "~/.server/hello/controller"


export const loader = async () => {
	const res = HelloController()
	return json(res )
}


export default function Hello() {
	const res = useLoaderData<typeof loader>()
	return (
		<>
			<p>Hello, World!</p>
			<p>{res.message}</p>
		</>
)
}