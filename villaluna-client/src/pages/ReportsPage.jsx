import { useRef } from 'react';
import { Box, Typography, Card, CardContent, Stack, Button, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import PrintIcon from '@mui/icons-material/Print';
import { LineChart, PieChart } from '@mui/x-charts';

const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

const monthlyOutput = [120, 160, 210, 180, 230, 260, 240, 280];

const categoryShare = [
  { id: 0, value: 40, label: 'Operations' },
  { id: 1, value: 25, label: 'Sales' },
  { id: 2, value: 20, label: 'Marketing' },
  { id: 3, value: 15, label: 'Support' },
];

const ReportsPage = () => {
  // This ref points to the part we want to print as PDF.
  const printRef = useRef(null);

  const handlePrintReport = () => {
    if (!printRef.current) return;

    const reportContent = printRef.current.innerHTML;
    const printWindow = window.open('', '_blank', 'width=1100,height=800');

    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Monthly Dashboard Report</title>
          <style>
            body {
              font-family: Arial, Helvetica, sans-serif;
              margin: 24px;
              color: #111827;
              background: #ffffff;
            }
            .report-wrapper {
              max-width: 1000px;
              margin: 0 auto;
            }
            .report-title {
              font-size: 28px;
              font-weight: 700;
              margin-bottom: 6px;
              color: #0f172a;
            }
            .report-subtitle {
              font-size: 14px;
              color: #475569;
              margin-bottom: 24px;
            }
            .section-card {
              border: 1px solid #e2e8f0;
              border-radius: 10px;
              padding: 16px;
              margin-bottom: 16px;
              background: #fff;
            }
            .section-title {
              font-size: 18px;
              font-weight: 600;
              margin-bottom: 8px;
              color: #1e3a8a;
            }
            .summary-grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(220px, 1fr));
              gap: 12px;
            }
            .summary-item {
              border: 1px solid #e5e7eb;
              border-radius: 8px;
              padding: 10px;
              background: #f8fafc;
            }
            .summary-label {
              font-size: 12px;
              color: #64748b;
            }
            .summary-value {
              font-size: 18px;
              font-weight: 700;
              color: #0f172a;
            }
            @media print {
              body {
                margin: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="report-wrapper">
            ${reportContent}
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: '#f8fafc', minHeight: '100vh' }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={2}
        mb={3}
      >
        <Box>
          <Typography variant="h4" fontWeight={700} color="primary.main">
            Reports Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            View monthly report output and category performance.
          </Typography>
        </Box>

        <Button variant="contained" startIcon={<PrintIcon />} onClick={handlePrintReport}>
          Print / Save as PDF
        </Button>
      </Stack>

      <Box ref={printRef} sx={{ bgcolor: '#fff', p: { xs: 2, md: 3 }, borderRadius: 2 }}>
        <Typography className="report-title" variant="h5" fontWeight={700} mb={0.5}>
          Monthly Performance Report
        </Typography>
        <Typography className="report-subtitle" variant="body2" color="text.secondary" mb={3}>
          This report shows monthly output trends, category share, and summary details for management review.
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Card className="section-card" elevation={0} sx={{ border: '1px solid #e2e8f0' }}>
              <CardContent>
                <Typography className="section-title" variant="h6" color="primary.main" mb={1}>
                  Monthly Report Output
                </Typography>
                <Box sx={{ height: 320 }}>
                  <LineChart
                    height={300}
                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                    series={[{ data: monthlyOutput, label: 'Output', color: '#2563eb' }]}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Card className="section-card" elevation={0} sx={{ border: '1px solid #e2e8f0' }}>
              <CardContent>
                <Typography className="section-title" variant="h6" color="primary.main" mb={1}>
                  Report Category Share
                </Typography>
                <Box sx={{ height: 300 }}>
                  <PieChart
                    height={280}
                    series={[
                      {
                        data: categoryShare,
                        innerRadius: 45,
                      },
                    ]}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={12}>
            <Card className="section-card" elevation={0} sx={{ border: '1px solid #e2e8f0' }}>
              <CardContent>
                <Typography className="section-title" variant="h6" color="primary.main" mb={2}>
                  Summary Details
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box className="summary-grid">
                  <Box className="summary-item">
                    <Typography className="summary-label">Average Monthly Output</Typography>
                    <Typography className="summary-value">210 Units</Typography>
                  </Box>
                  <Box className="summary-item">
                    <Typography className="summary-label">Highest Output Month</Typography>
                    <Typography className="summary-value">August</Typography>
                  </Box>
                  <Box className="summary-item">
                    <Typography className="summary-label">Top Category</Typography>
                    <Typography className="summary-value">Operations</Typography>
                  </Box>
                  <Box className="summary-item">
                    <Typography className="summary-label">Report Status</Typography>
                    <Typography className="summary-value">On Track</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ReportsPage;
