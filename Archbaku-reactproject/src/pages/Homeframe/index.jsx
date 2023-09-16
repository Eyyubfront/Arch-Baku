import { Paper, Typography, Button, Box, Stack } from "@mui/material";

const Homeframe = ({ tittle, src }) => {
  return (
    <>
      <Box padding="20px" marginTop="50px" height="400px">
        <Stack flexDirection="column">
          <Typography component="h4" fontWeight="bold" textAlign="center">
            <img
              style={{
                width: "400px",
                objectFit: "contain",
                textAlign: "center", 
                
              }}
              src={src}
            />
          </Typography>


          <Stack flexDirection="row" gap="20px">
          <img
              style={{
                width: "100px",
                objectFit: "contain",
                textAlign: "center",
              }}
              src={src}
            />


<img
              style={{
                width: "100px",
                objectFit: "contain",
                textAlign: "center",
              }}
              src={src}
            />
          </Stack>
       
        </Stack>
      </Box>
    </>
  );
};
export default Homeframe;
