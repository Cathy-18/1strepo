import React from 'react';
import { Container, Typography, Button, Paper, List, ListItem, ListItemText } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Tasker
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to Tasker, your personal task manager app.
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Create, edit, and delete tasks" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Organize tasks by priority and due date" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Track your progress and stay productive" />
          </ListItem>
        </List>

        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Paper>
    </Container>
  );
};

export default Home;
