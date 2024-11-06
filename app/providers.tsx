"use client";
import { ThemeProvider } from "./theme-provider";

function Providers({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disabledTransitionOnChange
			>
				{children}
			</ThemeProvider>
		</>
	);
}

export default Providers;
