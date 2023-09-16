import { Paper, Typography,Button, Box, Stack } from "@mui/material";


const Headwroks = ({ tittle,text, src,practice }) => {
  return (
      <Box
    className="hedwrokbox"
  padding="70px"
marginTop="10px"
  height="400px"

    >

      <Stack flexDirection="column" >
     
      <Typography  component="h4" fontWeight="bold" textAlign="center">
      <img style={{ width: "100%", objectFit: "contain",textAlign:"center" }} src={src} />
      </Typography>
      <Stack marginTop="-21px" sx={{background:"rgba(0, 101, 52, 1)",color:"white"}}  border="1px solid" textAlign="center" padding="10px" flexDirection="column" gap="15px">

        {tittle}
        <Typography padding="5px">

        {text}
        </Typography>
        <Typography >

        {practice}
        </Typography>
      </Stack>

   

 
  
      </Stack>
    </Box>
  );
};
export default Headwroks;
