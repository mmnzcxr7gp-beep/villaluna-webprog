import { Box, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import logo from '../../assets/styles/oopsiedy-logo.jpg';

const DashboardPage = () => {
  const stats = [
    { title: 'Total Users', value: '1,234' },
    { title: 'Average Age', value: '28.5' },
  ];

  const pieData = [
    { id: 0, value: 45, label: 'Active' },
    { id: 1, value: 30, label: 'Inactive' },
    { id: 2, value: 25, label: 'Pending' },
  ];

  const chartData = [
    { country: 'Jan', value: 120 },
    { country: 'Feb', value: 190 },
    { country: 'Mar', value: 300 },
    { country: 'Apr', value: 250 },
    { country: 'May', value: 350 },
    { country: 'Jun', value: 180 },
    { country: 'Jul', value: 320 },
  ];



  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f2ed 0%, #fef3c7 50%, #fefce8 100%)',
      pb: 12 
    }}>
      <Box sx={{ maxWidth: 1400, mx: 'auto', px: { xs: 3, md: 6 }, pt: 12 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 8 }}>
          <Box sx={{ 
            width: 64, 
            height: 64, 
            borderRadius: '50%', 
            bgcolor: '#fef3c7',
            border: '3px solid #92400e',
            p: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src={logo} 
              alt="Logo" 
              style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </Box>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 900,
              letterSpacing: '0.25em',
              lineHeight: 1,
              color: '#1e1b4b'
            }}
          >
            Dashboard
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 12, lg: 6 }} key={index}>
              <Card sx={{ 
                height: 200,
                border: '3px solid #1e1b4b',
                borderRadius: 4,
                bgcolor: '#fefce8',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': { 
                  borderColor: '#b45309',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  bgcolor: '#b45309'
                }
              }}>
                <CardContent sx={{ p: 4, height: '100%', pt: 6 }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      display: 'block',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.3em',
                      color: '#6b7280',
                      mb: 1,
                      textTransform: 'uppercase'
                    }}
                  >
                    {stat.title}
                  </Typography>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 900, 
                      color: '#1e1b4b',
                      lineHeight: 1
                    }}
                  >
                    {stat.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Charts Row */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ 
              border: '3px solid #1e1b4b',
              borderRadius: 4,
              bgcolor: '#fefce8',
              p: 4,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                bgcolor: '#f59e0b'
              }
            }}>
              <Typography 
                variant="h6" 
                component="h3" 
                sx={{ 
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  color: '#1e1b4b',
                  mb: 3,
                  textAlign: 'center',
                  textTransform: 'uppercase'
                }}
              >
                Users Distribution
              </Typography>
              <Box sx={{ height: 350, mx: 'auto' }}>
                <PieChart
                  series={[{ data: pieData }]}
                  height={350}
                  sx={{ ml: 0 }}
                  slotProps={{
                    legend: {
                      direction: 'column',
                      position: { vertical: 'bottom', horizontal: 'middle' },
                    },
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ 
              border: '3px solid #1e1b4b',
              borderRadius: 4,
              bgcolor: '#fefce8',
              p: 4,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                bgcolor: '#059669'
              }
            }}>
              <Typography 
                variant="h6" 
                component="h3" 
                sx={{ 
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  color: '#1e1b4b',
                  mb: 3,
                  textAlign: 'center',
                  textTransform: 'uppercase'
                }}
              >
                Monthly Sales
              </Typography>
              <Box sx={{ height: 350 }}>
                <BarChart
                  xAxis={[{ scaleType: 'band', data: chartData.map((d) => d.country) }]}
                  series={[{ data: chartData.map((d) => d.value) }]}
                  height={350}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Google Maps Section */}
        <Box sx={{ 
          border: '3px solid #1e1b4b',
          borderRadius: 4,
          bgcolor: '#fefce8',
          p: 4,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            bgcolor: '#8b5cf6'
          }
        }}>
          <Typography 
            variant="h6" 
            component="h3" 
            sx={{ 
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: '#1e1b4b',
              mb: 3,
              textAlign: 'center',
              textTransform: 'uppercase'
            }}
          >
            Metro Manila Users - Google Maps
          </Typography>
          <Box sx={{ height: 500, borderRadius: 3, overflow: 'hidden', bgcolor: '#e5e7eb' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7729.8!2d120.9667!3d14.5995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c832c2f8598b%3A0x3f8a5e5b6a4e5c5d!2sMakati%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1690000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Metro Manila Users Map"
            ></iframe>
          </Box>
          <Typography variant="body2" sx={{ mt: 3, textAlign: 'center', color: '#6b7280', fontWeight: 500 }}>
            Google Maps - Metro Manila view with user distribution markers
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
