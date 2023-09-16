import { Paper, Typography,Button, Box, Stack } from "@mui/material";

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const HeadCategroy = ({ tittle, src,text }) => {
  return (
    <Box
  padding="30px"
  border="1px solid"
  className="hedbox"
  textAlign="center"
    >
        <Stack flexDirection="column">

      <Typography marginLeft="-110px" padding="20px"  component="h4" fontWeight="bold" textAlign="center">
      <img style={{ width: "20%", objectFit: "contain",textAlign:"center" }} src={src} />
        <Typography marginLeft="40px">
        {tittle}

        </Typography>
      </Typography>
      <Typography className="tkdnd" sx={{position:"absolute",top:"830px",textAlign:"center,",color:"white",fontSize:"20px",marginLeft:"50px"}}>

      </Typography>
      {text}
        <Button sx={{color:"black"}} >Ətrafli <ArrowRightAltIcon/> </Button>
        </Stack>
    </Box>
  );
};
export default HeadCategroy;
