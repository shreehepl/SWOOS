import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
export const LogoImage = styled('img')({
  // width: 96.85,
  height: 48,
  marginLeft: '16px',
});
 
export const CustomIconButton = styled(IconButton)({
  color: 'rgba(111, 70, 199, 0.8)',
  marginRight: '10px',
});
 
export const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgba(155, 127, 218, 1)',
}));
 
export const StyledInputBase = styled(InputBase)({
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  outline: 'none',
  '&:focus': {
    borderColor: '#9B7FDA',
  },
});
 
export const containerStyle: React.CSSProperties = {
  position: 'relative',
  maxWidth: 100,
  maxHeight: 70,
};
 
export const backgroundStyle: React.CSSProperties = {
 
  opacity: 0.3,
  height: '50px',
  zIndex: 0,
 
};
 
export const convexLogoStyle: React.CSSProperties = {
  position: 'absolute',
  top: '2%',
  left: '5%',
  maxWidth: '45%',
  zIndex: 1,
};