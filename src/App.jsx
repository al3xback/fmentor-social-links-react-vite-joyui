import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Stack from '@mui/joy/Stack';

import Header from './components/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Footer from './components/Footer.jsx';

const customColors = {
	green: '#c5f82a',
	greenDark: '#b1df26',
	grey: '#333',
	greyDark: '#1f1f1f',
	blackOff: '#141414',
	white: '#fff'
};

const customTheme = extendTheme({
	fontSize: {
		md: '0.875rem'
	},
	colorSchemes: {
		light: {
			palette: {
				custom: {
					...customColors
				},
				background: {
					body: customColors.blackOff
				},
				text: {
					primary: customColors.white,
					secondary: customColors.white
				},
				primary: {
					solidColor: customColors.white,
					solidBg: customColors.grey,
					solidHoverBg: customColors.green,
					solidActiveBg: customColors.greenDark
				}
			}
		}
	},
	components: {
		JoyLink: {
			styleOverrides: {
				root: {
					marginInline: 0
				}
			}
		}
	}
});

function App() {
	return (
		<CssVarsProvider theme={customTheme}>
			<CssBaseline />

			<Header />
			<Stack component='main' direction='row' sx={{ flex: 'auto' }}>
				<Stack
					direction='row'
					sx={{
						flex: 'auto',
						justifyContent: 'center',
						alignItems: 'center',
						padding: '0 1rem'
					}}
				>
					<Profile />
				</Stack>
			</Stack>
			<Footer />
		</CssVarsProvider>
	);
}

export default App;
