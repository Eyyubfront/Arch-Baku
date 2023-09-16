import PageContainer from "../../companents/Pagecontainer"
import { Box, Button, Container, Stack, Typography, Grid } from "@mui/material";
import NavLink from "../../companents/Navlink"
import aboutphoto from "../../assets/abts.jpg"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import HeadCategroy from "../../companents/Headcateg";

import layh1 from "../../assets/servcsd1.jpg";
import layh2 from "../../assets/servcsd2.jpg";
import layh3 from "../../assets/servcsd3.jpg";
import layh4 from "../../assets/servcsd4.jpg";
import layh5 from "../../assets/servcsd5.jpg";
import layh6 from "../../assets/servcsd6.jpg";
import { Link } from "react-router-dom";







const xidmet = [
    {
      id: 0,
      img: layh1,
      tittle: "Tikinti",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
    },
    {
      id: 1,
      img: layh2,
      tittle: "Restavrasiya",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
    },
  
    {
      id: 2,
      img: layh3,
      tittle: "Layihələndirmə",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
    },
    {
      id: 3,
      img: layh4,
      tittle: "Texnikanın icarəsi",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
    },
    {
      id: 4,
      img: layh5,
      tittle: "Təmir",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
    },
    {
      id: 5,
      img: layh6,
      tittle: "Eksteryer və Landşaft dizaynı",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
    },
  ];
const Service=()=>{
    return(
        <>

<PageContainer>

<Box 
          sx={{
            backgroundImage: `url(${aboutphoto})`,
            position: "relative",
            height: "200px",
          }}  >


<Stack  flexDirection="column" padding='20px' >

<Stack flexDirection="row" gap="10px" marginLeft="100px" padding="20px">

            <Box border="2px solid #B08968;" width="1px" height="40px">

            </Box>

<Typography variant="h5" color="white">
Xidmetler
</Typography>
</Stack>


<Stack marginLeft="100px" marginTop="30px" color="white" flexDirection="row" gap="10px">
<NavLink color="white" to="/" title="Əsas səhifə" />
<ArrowRightAltIcon/>
<NavLink to="/service" title="Xidmətlər" />
</Stack>
</Stack>


    </Box>






    <Box>
          <Container>
            <Typography
            
            variant="h3"
            className="xdimet"
              padding="10px"
              sx={{ fontSize: "30px", marginLeft: "130px", marginTop: "100px" }}
            >
              XİDMƏTLƏR
            </Typography>
            <Box
              sx={{
                border: "2px solid rgba(176, 137, 104, 1) ",
                width: "40px",
                marginLeft: "150px",
              }}
            ></Box>

            <Link  to="/service:id">
            <Grid sx={{color:"black"}} className="sevcbox" my={2} mb={3} container spacing={2} justifyContent="center">
              {xidmet.map((texnika) => {
                return (
                  <Grid key={texnika.id} item xs={12} sm={4} md={4}>
                    <HeadCategroy
                      tittle={texnika.tittle}
                      text={texnika.text}
                      src={texnika.img}
                    />
                  </Grid>
                );
              })}
            </Grid>
            </Link>

          </Container>
        </Box>





















</PageContainer>





        </>
    )
}
export default Service