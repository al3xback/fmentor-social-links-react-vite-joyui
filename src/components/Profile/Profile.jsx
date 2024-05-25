import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Stack from '@mui/joy/Stack';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';

import avatarImg from '../../assets/avatar.jpeg';
import styles from './Profile.module.css';

export default function Profile() {
	return (
		<Card
			sx={{
				alignItems: 'center',
				gap: '1.5rem',
				width: '100%',
				maxWidth: '20.625rem',
				bgcolor: 'custom.greyDark',
				margin: '2.5rem 0 3.75rem',
				'--Card-padding': '1.5rem',
				'--variant-borderWidth': 0,
				'--Card-radius': '12px',
				'@media (min-width: 48em)': {
					maxWidth: '22.125rem',
					'--Card-padding': '2.25rem'
				}
			}}
		>
			<img
				src={avatarImg}
				className={styles.image}
				width={80}
				height={80}
				alt='Jessica Randall'
			/>
			<Stack spacing='0.375rem' sx={{ textAlign: 'center' }}>
				<Typography
					level='h2'
					sx={{
						letterSpacing: 'normal',
						'--Typography-fontSize': '1.5rem',
						'--joy-fontWeight-xl': 600
					}}
				>
					Jessica Randall
				</Typography>
				<Typography
					sx={{
						fontWeight: 700,
						color: 'custom.green'
					}}
				>
					London, United Kingdom
				</Typography>
			</Stack>
			<Typography>
				&Prime;Front-end developer and avid reader.&Prime;
			</Typography>
			<List
				sx={{
					alignSelf: 'normal',
					'--List-gap': '1rem',
					'--List-padding': 0
				}}
			>
				{[
					'GitHub',
					'Frontend Mentor',
					'LinkedIn',
					'Twitter',
					'Instagram'
				].map((item) => (
					<ListItem
						key={item}
						sx={{
							flexDirection: 'column',
							alignItems: 'normal',
							'--ListItem-paddingY': 0,
							'--ListItem-paddingLeft': 0,
							'--ListItem-paddingRight': 0
						}}
					>
						<Link
							href='#'
							underline='none'
							variant='solid'
							sx={{
								justifyContent: 'center',
								p: '0.75rem',
								fontWeight: 600,
								'--joy-radius-xs': '8px',
								'&:hover': {
									color: 'custom.blackOff'
								}
							}}
						>
							{item}
						</Link>
					</ListItem>
				))}
			</List>
		</Card>
	);
}
