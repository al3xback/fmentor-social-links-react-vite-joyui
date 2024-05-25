import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

export default function Header() {
	return (
		<Box component='header'>
			<Typography
				level='h1'
				sx={{
					position: 'absolute',
					width: '1px',
					height: '1px',
					padding: 0,
					margin: '-1px',
					border: 0,
					overflow: 'hidden',
					clip: 'rect(0, 0, 0, 0)'
				}}
			>
				Social links profile
			</Typography>
		</Box>
	);
}
