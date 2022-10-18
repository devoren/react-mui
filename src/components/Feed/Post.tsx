import React from 'react';
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	Collapse,
	IconButton,
	IconButtonProps,
	styled,
	Typography,
} from '@mui/material';
import {
	ExpandMore as ExpandMoreIcon,
	Favorite,
	FavoriteBorder,
	MoreVert,
	Share,
} from '@mui/icons-material';
import { red } from '@mui/material/colors';

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

const Post = () => {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card sx={{ margin: 5 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
						O
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVert />
					</IconButton>
				}
				title="Orlean Steven"
				subheader="September 14, 2022"
			/>
			<CardMedia
				component="img"
				height="20%"
				image="https://images.unsplash.com/photo-1663258626167-c5231c92065e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
				alt="Paella dish"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					This impressive paella is a perfect party dish and a fun
					meal to cook together with your guests. Add 1 cup of frozen
					peas along with the mussels, if you like.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<Checkbox
					icon={
						<FavoriteBorder
							sx={{
								// color: red[600],
								'&.MuiTouchRipple-child': {
									backgroundColor: red,
								},
							}}
						/>
					}
					checkedIcon={
						<Favorite
							sx={{
								color: red[800],
							}}
						/>
					}
				/>
				<IconButton aria-label="share">
					<Share />
				</IconButton>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Method:</Typography>
					<Typography paragraph>
						Heat 1/2 cup of the broth in a pot until simmering, add
						saffron and set aside for 10 minutes.
					</Typography>
					<Typography paragraph>
						Heat oil in a (14- to 16-inch) paella pan or a large,
						deep skillet over medium-high heat. Add chicken, shrimp
						and chorizo, and cook, stirring occasionally until
						lightly browned, 6 to 8 minutes.
					</Typography>
					<Typography paragraph>
						Add rice and stir very gently to distribute. Top with
						artichokes and peppers, and cook without stirring, until
						most of the liquid is absorbed, 15 to 18 minutes. Reduce
						heat to medium-low, add reserved shrimp and mussels,
						tucking them down into the rice, and cook again without
						stirring, until mussels have opened and rice is just
						tender, 5 to 7 minutes more. (Discard any mussels that
						don&apos;t open.)
					</Typography>
					<Typography>
						Set aside off of the heat to let rest for 10 minutes,
						and then serve.
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default Post;
