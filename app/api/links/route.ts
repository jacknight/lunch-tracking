import { existsSync, readFileSync, writeFileSync } from 'fs';

export const POST = async (req: Request) => {
	try {
		const json = await req.json();
		writeFileSync('/tmp/links.json', JSON.stringify(json));
		return new Response(JSON.stringify({success: true}));
	}
	catch {
		return new Response(JSON.stringify({success: false}));
	}
}

export const GET = () => {
	try {
		if (existsSync('/tmp/links.json')) {
			const links = JSON.parse(readFileSync('/tmp/links.json', 'utf8'));
			return new Response(JSON.stringify({success: true, links}));
		}
		return new Response(JSON.stringify({success: false}));
	}
	catch {
		return new Response(JSON.stringify({success: false}));
	}
}
