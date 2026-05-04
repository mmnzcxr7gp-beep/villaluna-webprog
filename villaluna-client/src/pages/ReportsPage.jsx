import { Box, Typography, Grid } from '@mui/material';
import { LineChart, PieChart } from '@mui/x-charts';

const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const lineDataset = [
  {
    label: 'Sales',
    data: [120, 190, 300, 250, 350, 180, 320],
  },
  {
    label: 'Orders',
    data: [80, 140, 200, 180, 220, 120, 250],
  },
];

const revenuePieData = [
  { id: 0, value: 45, label: 'Online Sales' },
  { id: 1, value: 30, label: 'Store Sales' },
  { id: 2, value: 15, label: 'Subscription' },
  { id: 3, value: 10, label: 'Events' },
];

const ReportsPage = () => {
  return (
    <Box sx={{ p: 6 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        fontWeight="900" 
        sx={{ 
          textTransform: 'uppercase', 
          letterSpacing: '0.22em', 
          color: '#18181b',
          mb: 6,
          textAlign: 'center'
        }}
      >
        Reports
      </Typography>
      
      <Grid container spacing={6}>
        <Grid item xs={12} lg={8}>
          <Box sx={{ 
            border: '2px solid #18181b', 
            borderRadius: '24px', 
            bgcolor: '#f8fafc',
            p: 6,
            boxShadow: '0 20px 25px -5px rgba(0 0 0, 0.1)'
          }}>
            <Typography 
              variant="h5" 
              component="h2" 
              fontWeight="800" 
              sx={{ 
                textTransform: 'uppercase', 
                letterSpacing: '0.15em', 
                color: '#18181b', 
                mb: 4
              }}
            >
              Monthly Sales Trend
            </Typography>
            <Box sx={{ height: 400, width: '100%' }}>
              <LineChart
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                series={lineDataset.map(({ label, data }) => ({ data, label }))}
                height={400}
                sx={{
                  '& .MuiChartsLegend-root': { mt: -2 },
                  '& .MuiLineElement-root': { strokeWidth: 3 },
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Box sx={{ 
            border: '2px solid #18181b', 
            borderRadius: '24px', 
            bgcolor: '#f8fafc',
            p: 6,
            boxShadow: '0 20px 25px -5px rgba(0 0 0, 0.1)',
            height: '100%'
          }}>
            <Typography 
              variant="h5" 
              component="h2" 
              fontWeight="800" 
              sx={{ 
                textTransform: 'uppercase', 
                letterSpacing: '0.15em', 
                color: '#18181b', 
                mb: 4,
                textAlign: 'center'
              }}
            >
              Revenue Distribution
            </Typography>
            <Box sx={{ height: 320, mx: 'auto', maxWidth: 300 }}>
              <PieChart
                series={[{ data: revenuePieData }]}
                height={320}
                sx={{ ml: 0 }}
                slotProps={{
                  legend: {
                    direction: 'row',
                    position: { vertical: 'bottom', horizontal: 'middle' },
                    padding: 0,
                  },
                }}
              />
            </Box>
            <Typography variant="body1" sx={{ mt: 2, textAlign: 'center', color: '#71717a', fontWeight: 500 }}>
              Total Revenue: $456,780
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReportsPage;
