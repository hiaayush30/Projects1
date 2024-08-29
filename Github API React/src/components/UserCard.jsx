/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useNavigate } from 'react-router-dom';
import { useSingleUser } from '../context/SingleUserContext';

export default function UserCard({ user }) {
  const navigate = useNavigate();
  const { url, setUrl } = useSingleUser();
  const handleClick = () => {
    setUrl(user.url);
    navigate(`/user/${user.login}`);
  }
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Card sx={{ maxWidth: 250 }} className='m-5 min-w-52 flex flex-col justify-between hover:scale-105 transition-all shadow-black hover:shadow-2xl'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={user.avatar_url}
            alt={user.login}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.login}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a target='_blank' href={user.html_url}>
              Github <GitHubIcon />
            </a>
          </Button>
          <Button size="small" color="primary" onClick={handleClick}>
            More Info <ReadMoreIcon />
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}