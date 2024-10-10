import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	const data = await fetch("https://files-cli-install.vercel.app/script.sh");
	const file = await data.blob();
	const headers = new Headers();
	headers.set("Content-Type", "application/octet-stream");
	headers.set("Content-Disposition", 'attachment; filename="install.sh"');
	return new Response(file, {
		status: 200,
		headers: headers,
	});
};
