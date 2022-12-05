import React from "react";
import {
	Box,
	Fab,
	Modal,
	Tooltip,
	styled,
	Typography,
	Avatar,
	TextField,
	Stack,
	Button,
	ButtonGroup,
} from "@mui/material";
import {
	Add as AddIcon,
	DateRange,
	EmojiEmotions,
	Image,
	PersonAdd,
	VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

const UserBox = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	marginBottom: "20px",
});

const Add = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<>
			<Tooltip
				title="Add"
				sx={{
					position: "fixed",
					bottom: 20,
					left: { xs: "calc(50% - 25px)", md: 230 },
				}}
				onClick={() => setOpen(true)}
			>
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					width={400}
					height={280}
					bgcolor="background.default"
					color="text.primary"
					p={3}
					borderRadius={4}
				>
					<Typography
						variant="h6"
						color={"gray"}
						textAlign={"center"}
					>
						Create post
					</Typography>
					<UserBox>
						<Avatar
							alt="Orlean Steven"
							src="https://mui.com/static/images/avatar/1.jpg"
						/>
						<Typography fontWeight={500} variant={"inherit"}>
							Orlean Steven
						</Typography>
					</UserBox>
					<TextField
						sx={{ width: "100%" }}
						id="standard-multiline-static"
						multiline
						rows={3}
						placeholder="What's on your mind?"
						variant="standard"
					/>
					<Stack flexDirection={"row"} gap={1} mt={2} mb={3}>
						<EmojiEmotions color="primary" />
						<Image color="secondary" />
						<VideoCameraBack color="success" />
						<PersonAdd color="info" />
					</Stack>
					<ButtonGroup
						fullWidth
						variant="contained"
						aria-label="outlined primary button group"
					>
						<Button>Post</Button>
						<Button sx={{ width: "100px" }}>
							<DateRange />
						</Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
