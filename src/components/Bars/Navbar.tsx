import React from "react";
import {
	Brightness4,
	Brightness7,
	Mail,
	Notifications,
	Search as SearchIcon,
} from "@mui/icons-material";
import LogoDev from "@mui/icons-material/LogoDev";
import {
	AppBar,
	Avatar,
	Badge,
	Box,
	IconButton,
	InputBase,
	Menu,
	MenuItem,
	PaletteMode,
	styled,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	backgroundColor: "white",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
	display: "flex",
	alignItems: "center",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 1),
	height: "100%",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	"& .MuiInputBase-input": {
		padding: theme.spacing(0.5, 1, 0.5, 0),
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	alignItems: "center",
	gap: "20px",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

interface INavBar {
	mode: PaletteMode | undefined;
	setMode: React.Dispatch<React.SetStateAction<PaletteMode | undefined>>;
}

const Navbar: React.FC<INavBar> = ({ mode, setMode }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="sticky" sx={{ paddingX: { xs: "0px", lg: "200px" } }}>
			<StyledToolbar>
				<Typography
					variant="h6"
					sx={{ display: { xs: "none", sm: "block" } }}
				>
					MUI APP
				</Typography>
				<LogoDev sx={{ display: { xs: "block", sm: "none" } }} />
				{matches ? (
					<IconButton
						onClick={() =>
							setMode(mode === "dark" ? "light" : "dark")
						}
						color="inherit"
					>
						{mode === "dark" ? <Brightness7 /> : <Brightness4 />}
					</IconButton>
				) : null}
				<Search>
					<SearchIconWrapper>
						<SearchIcon
							sx={{
								color: mode === "light" ? "#1976d2" : "#121212",
							}}
						/>
					</SearchIconWrapper>
					<StyledInputBase
						sx={{
							input: {
								"&::placeholder": {
									textOverflow: "ellipsis !important",
									color: "rgba(0,0,0,0.87)",
								},
							},
						}}
						placeholder="Search…"
						inputProps={{ "aria-label": "search" }}
					/>
				</Search>
				<Icons>
					<Badge badgeContent={1} color="error">
						<Mail />
					</Badge>
					<Badge badgeContent={3} color="error">
						<Notifications />
					</Badge>
					<Avatar
						sx={{ width: 30, height: 30 }}
						alt="Remy Sharp"
						src="https://mui.com/static/images/avatar/1.jpg"
						onClick={handleClick}
					/>
				</Icons>
				<UserBox onClick={handleClick}>
					<Avatar
						sx={{ width: 30, height: 30 }}
						alt="Remy Sharp"
						src="https://mui.com/static/images/avatar/1.jpg"
					/>
					<Typography variant="inherit">Orlean</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id="positioned-menu"
				aria-labelledby="positioned-button"
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuItem onClick={() => {}}>Profile</MenuItem>
				<MenuItem onClick={() => {}}>My account</MenuItem>
				<MenuItem onClick={() => {}}>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
