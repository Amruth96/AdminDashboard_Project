import React from 'react';
import { Grid, Card, CardContent, Typography, LinearProgress } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Widgets = () => {
  const data = [
    { name: 'Jan', uv: 4000, pv: 8400 },
    { name: 'Feb', uv: 7000, pv: 8766 },
    { name: 'Mar', uv: 8000, pv: 2000 },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">User Registration</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Progress</Typography>
            <LinearProgress variant="determinate" value={90} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Widgets;
