import React from 'react';
import Box from '@mui/material/Box';
import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	PaletteMode,
	Switch,
} from '@mui/material';
import {
	AccountBox,
	Article,
	Group,
	Home,
	ModeNight,
	Person,
	Settings,
	Storefront,
} from '@mui/icons-material';

interface ISideBar {
	mode: PaletteMode | undefined;
	setMode: React.Dispatch<React.SetStateAction<PaletteMode | undefined>>;
}

const Sidebar: React.FC<ISideBar> = ({ mode, setMode }) => {
	return (
		<Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<Box position={'fixed'}>
				<List>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#">
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<ListItemText primary="Homepage" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#">
							<ListItemIcon>
								<Article />
							</ListItemIcon>
							<ListItemText primary="Pages" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#">
							<ListItemIcon>
								<Group />
							</ListItemIcon>
							<ListItemText primary="Groups" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#">
							<ListItemIcon>
								<Storefront />
							</ListItemIcon>
							<ListItemText primary="Marketplace" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#">
							<ListItemIcon>
								<Person />
							</ListItemIcon>
							<ListItemText primary="Friends" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#">
							<ListItemIcon>
								<Settings />
							</ListItemIcon>
							<ListItemText primary="Settings" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#">
							<ListItemIcon>
								<AccountBox />
							</ListItemIcon>
							<ListItemText primary="Profile" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#">
							<ListItemIcon>
								<ModeNight />
							</ListItemIcon>
							<Switch
								onChange={() =>
									setMode(mode === 'light' ? 'dark' : 'light')
								}
							/>
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Sidebar;
