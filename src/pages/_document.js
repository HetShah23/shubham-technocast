import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
				<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />

				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

				<meta name="msapplication-TileColor" content="#1d4794" />
				<meta name="msapplication-TileImage" content="/favicon.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
