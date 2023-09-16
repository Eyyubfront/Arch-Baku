import { Stack , Typography, Button, Box, Container } from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const CategoryCard = ({ tittle, src, text }) => {
  return (
    <Box   width="100%" padding="15px" className="categboxsd">
      <Container>

      <Stack className="cnetrsd" padding="10px"
    flexDirection="column" alignItems="center" >

      <Typography component="h4" fontWeight="bold" textAlign="center">
        <img
          style={{ width: "300px", objectFit: "contain", textAlign: "center" }}
          src={src}
        />
      </Typography>
      <Typography sx={{color:"white",fontSize:"20px",width:"300px",marginTop:"-60px"}} className="caetgtext">
        {tittle}
        {text}
      </Typography>
      <Button
        className="categbtnd"
        sx={{
          color: "#B08968;",
          fontSize: "20px",
      margin:"auto",
      marginTop:"20px"
        }}
      >
        Ətrafli <ArrowRightAltIcon />{" "}
      </Button>
      </Stack>
      </Container>
    </Box>
  );
};
export default CategoryCard;
