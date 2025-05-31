module.exports = {
	content: ["./**/*.html", "./**/*.templ", "./**/*.go"],
	darkmode: "class",
	theme: {
		extend: {
			extend: {
				colors: {
					border: "hsl(var(--color-border))",
					input: "hsl(var(--color-input))",
					background: "hsl(var(--color-background))",
					foreground: "hsl(var(--color-foreground))",
					primary: {
						DEFAULT: "hsl(var(--color-primary))",
						foreground: "hsl(var(--color-primary-foreground))",
					},
					secondary: {
						DEFAULT: "hsl(var(--color-secondary))",
						foreground: "hsl(var(--color-secondary-foreground))",
					},
					destructive: {
						DEFAULT: "hsl(var(--color-destructive))",
						foreground: "hsl(var(--color-destructive-foreground))",
					},
					muted: {
						DEFAULT: "hsl(var(--color-muted))",
						foreground: "hsl(var(--color-muted-foreground))",
					},
					accent: {
						DEFAULT: "hsl(var(--color-accent))",
						foreground: "hsl(var(--color-accent-foreground))",
					},
					popover: {
						DEFAULT: "hsl(var(--color-popover))",
						foreground: "hsl(var(--color-popover-foreground))",
					},
					card: {
						DEFAULT: "hsl(var(--color-card))",
						foreground: "hsl(var(--color-card-foreground))",
					},
					ring: "hsl(var(--color-ring))",
				},
				borderRadius: {
					sm: "calc(var(--radius) - 4px)",
					md: "calc(var(--radius) - 2px)",
					lg: "var(--radius)",
				},
				container: {
					center: true,
					padding: "2rem",
					screens: {
						"2xl": "var(--container-2xl)",
					},
				},
				// Add other theme properties here
			},
		},
	},
	plugins: [
		function({ addBase }) {
			addBase({
				"*": {
					"@apply border-border": {}, // This applies border-color: hsl(var(--border)) to all elements
				},
				body: {
					"@apply bg-background text-foreground": {},
					"font-feature-settings": '"rlig" 1, "calt" 1',
				},
			});
		},
	],
};
