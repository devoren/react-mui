import React, { useState } from 'react';
import { Box, createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import { Navbar, Rightbar, Sidebar } from './components/Bars';
import Feed from './components/Feed';
import { Stack } from '@mui/system';
import Add from './components/Button';

function App() {
	const [mode, setMode] = useState<PaletteMode | undefined>('light');
	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<Box bgcolor={'background.default'} color={'text.primary'}>
				<Navbar mode={mode} setMode={setMode} />
				<Stack
					direction="row"
					spacing={{ xs: 0, sm: 2 }}
					justifyContent="space-between"
					sx={{
						paddingX: { xs: 0, lg: '200px' },
					}}
				>
					<Sidebar setMode={setMode} mode={mode} />
					<Feed />
					<Rightbar />
				</Stack>
				<Add />
			</Box>
		</ThemeProvider>
	);
}

export default App;
