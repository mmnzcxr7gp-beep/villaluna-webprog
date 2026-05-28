import { useState } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  TextField,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';

const drawerWidth = 240;

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, to: '' },
  { text: 'Reports', icon: <BarChartIcon />, to: 'reports' },
  { text: 'Users', icon: <PeopleIcon />, to: 'users' },
  { text: 'Articles', icon: <ArticleIcon />, to: 'articles' },
];

function DashLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    localStorage.removeItem('firstName');
    navigate('/', { replace: true });
  };

  const drawerContent = (
    <Box sx={{ pt: 2 }}>
      <Typography variant="h6" sx={{ px: 2, my: 2, fontWeight: 600 }}>
        Dashboard
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.to} sx={{ mt: 1 }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: '#b45309',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" fontWeight={600}>
            OopsieDaisy Admin
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <TextField
            size="small"
            placeholder="Search..."
            variant="outlined"
            sx={{
              mr: 2,
              bgcolor: 'white',
              borderRadius: 1,
              minWidth: { xs: 140, sm: 220 },
              '& .MuiOutlinedInput-root': {
                height: 36,
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: '#7c2d12',
              '&:hover': { bgcolor: '#431407' },
              textTransform: 'none',
              fontWeight: 600,
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawerContent}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: 8,
          mb: 4,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default DashLayout;
