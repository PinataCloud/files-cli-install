import { useState } from "react";
import { Button } from "./ui/button";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";

export function Code() {
	const [copied, setCopied] = useState(false);

	const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

	async function handleCopy() {
		setCopied(true);
		await wait();
		setCopied(false);
	}

	async function copyToClipboard() {
		navigator.clipboard
			.writeText("curl -fsSL https://cli.pinata.cloud/install | bash")
			.then(async () => await handleCopy())
			.catch(() => alert("Failed to copy"));
	}

	return (
		<div className="code-box">
			<code
				className="hidden sm:flex items-center p-8 rounded-md bg-secondary"
				id="codeSnippet"
			>
				curl -fsSL https://cli.pinata.cloud/install | bash
				<Button onClick={copyToClipboard} variant="link">
					{copied ? (
						<CheckIcon className="h-6 w-6" />
					) : (
						<CopyIcon className="h-6 w-6" />
					)}
				</Button>
			</code>
			<a
				className="hidden sm:block text-muted-foreground text-sm"
				href="/install"
			>
				View source
			</a>
		</div>
	);
}
