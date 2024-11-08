import React from 'react';
import { Button, TextField, Card, CardContent, Typography, IconButton, Avatar } from '@mui/material';
import { AddCircle, Comment, ThumbUp, ThumbDown } from '@mui/icons-material';

const Forum = () => {
  return (
    <div className="min-h-screen bg-farmersmartPaleGreen p-4 md:p-8 font-roboto">
      <header className="text-center text-2xl md:text-4xl font-montserrat font-bold text-farmersmartDarkGreen mb-6 md:mb-8">
        Farmersmart Forum
      </header>

      <section className="mb-6 md:mb-8 text-center">
        <Button
          variant="contained"
          color="success"
          startIcon={<AddCircle />}
          className="bg-farmersmartGreen text-white"
          // disabled={!userIsFarmerOrPartner} // Replace with a conditional check based on the user role
        >
          Create New Post
        </Button>
      </section>

      <main className="space-y-4 md:space-y-6">
        {/* Example Post */}
        <Card className="bg-white shadow-lg">
          <CardContent>
            <div className="flex flex-col md:flex-row items-center md:items-start mb-4">
              <Avatar className="bg-farmersmartLightGreen mb-2 md:mb-0">F</Avatar>
              <div className="md:ml-3 text-center md:text-left">
                <Typography variant="h6" className="text-farmersmartDarkGreen font-bold">
                  Farmer Adam Adam
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Posted on 08/11/2024
                </Typography>
              </div>
            </div>
            <Typography variant="body1" className="text-gray-800 mb-4">
              Here is a discussion topic on crop rotation techniques that might be helpful for better yields...
            </Typography>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
              <div className="flex items-center space-x-2">
                <IconButton color="primary">
                  <ThumbUp />
                </IconButton>
                <IconButton color="secondary">
                  <ThumbDown />
                </IconButton>
                <Typography variant="body2" color="textSecondary">
                  5 Likes
                </Typography>
              </div>
              <Button
                variant="text"
                startIcon={<Comment />}
                className="text-farmersmartGreen"
              >
                Comment
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Example Comment Section */}
        <div className="ml-4 md:ml-8 mt-4 space-y-4">
          {/* Comment Input */}
          <TextField
            variant="outlined"
            placeholder="Write a comment..."
            fullWidth
            className="mb-2"
          />
          <Button
            variant="contained"
            color="success"
            className="bg-farmersmartGreen text-white"
          >
            Submit
          </Button>

          {/* Sample Comments */}
          <div className="space-y-4">
            <Card className="bg-gray-100 p-3">
              <div className="flex flex-col md:flex-row items-center mb-2">
                <Avatar className="bg-farmersmartYellow mb-2 md:mb-0">C</Avatar>
                <div className="md:ml-3 text-center md:text-left">
                  <Typography variant="body1" className="font-semibold text-farmersmartDarkGreen">
                    Eve
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Commented on 08/11/2024
                  </Typography>
                </div>
              </div>
              <Typography variant="body2" className="text-gray-700">
                Thanks for the insights! I'll definitely try these techniques.
              </Typography>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Forum;
