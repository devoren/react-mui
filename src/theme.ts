import { createTheme } from "@mui/material";
export const theme = createTheme({
	palette: {
		primary: {
			main: "#34342d",
			light: "skyblue",
		},
		secondary: {
			main: "#3535ff",
		},
		otherColor: {
			main: "#7857dd",
		},
	},
});

declare module "@mui/material/styles" {
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
		otherColor?: {
			main?: string;
		};
	}
	interface Palette {
		otherColor?: {
			main?: string;
		};
	}
	interface PaletteOptions {
		otherColor?: {
			main?: string;
		};
	}
}
