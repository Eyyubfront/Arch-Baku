import { Paper, Typography,Button, Box, Stack } from "@mui/material";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Headxeb = ({ tittle, src,text,date }) => {
  return (
    <>

  
    <Box
    text-decoration="none" 
    height="410px"
className="hedxebbox"
  background= "#FFF"
border="1px solid #B0BDB7"
box-shadow="0px 3px 8px 0px rgba(22, 31, 53, 0.15)" 

    >
  <Stack className="edxbebox" flexDirection="column" gap="10px">
      <Typography  component="h4" fontWeight="bold" textAlign="center">
      <img style={{ width: "50%", objectFit: "contain",textAlign:"center" }} src={src} />
      <Stack flexDirection="row" gap="15px" padding="15px">
      <QueryBuilderIcon sx={{color:"rgba(1, 107, 56, 1)"}}/>
      <Typography sx={{color:"rgba(94, 94, 94, 1)"}}>

      {date}
      </Typography>
      </Stack>
      <Box border="1px solid rgba(211, 220, 233, 1)" width="200px" margin="auto"></Box>
      </Typography>
      <Stack className="hedtit" flexDirection="column" gap="25px" padding="15px">

        <Typography variant="h5">
        {tittle}
        </Typography>
     <Typography  padding="5px" marginLeft="-10px">
     {text}
     </Typography>
        <Button className="nxtbtn" sx={{ color:"rgba(1, 107, 56, 1)",position:"absolute",marginTop:"150px"}} >Davami <ArrowRightAltIcon/> </Button>
      </Stack>
      <Typography sx={{position:"absolute",top:"330px",textAlign:"center,",color:"white",fontSize:"20px",marginLeft:"30px"}}>

      </Typography>
      </Stack>
    </Box>
        </>
  );
};
export default Headxeb;
