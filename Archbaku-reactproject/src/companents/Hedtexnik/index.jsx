import { Paper, Typography, Button, Box, Stack } from "@mui/material";

const Headtexnikcatg = ({ tittle, src }) => {
  return (
    <>
      <Box padding="20px" className="hedtexnikbox" marginTop="10px" height="400px">
        <Stack flexDirection="column">
          <Typography component="h4" fontWeight="bold" textAlign="center">
            <img
            className="hedasphot"
              style={{
                width: "300px",
                objectFit: "contain",
                textAlign: "center",
              }}
              src={src}
            />
          </Typography>
          <Typography
          className="lormbtns"
            sx={{
              position: "absolute",
              border: "1px solid white",
              padding: "15px",
              width: "300px",
              background: "white",
              top: "229px",
              textAlign: "center,",
              color: "black",
              fontSize: "20px",
              marginLeft: "38px",
            }}
          >
            {tittle}
          </Typography>
        </Stack>
      </Box>
    </>
  );
};
export default Headtexnikcatg;
