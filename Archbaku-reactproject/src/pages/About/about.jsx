import PageContainer from "../../companents/Pagecontainer"
import aboutphoto from "../../assets/abts.jpg"
import { Box, Stack, Typography,Container,Grid } from "@mui/material"
import NavLink from "../../companents/Navlink"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import react5 from "../../assets/reactofive.jpg";

import Headwroks from "../../companents/Headworksd";
import workone from "../../assets/headwork/workone.jpg";
import worktwo from "../../assets/headwork/worktwo.jpg";
import workthree from "../../assets/headwork/workthree.jpg";
import workfoor from "../../assets/headwork/workfoor.jpg";
import workfive from "../../assets/headwork/workfive.png";
import worksix from "../../assets/headwork/worksix.png";


const headworks = [
    {
      id: 0,
      img: workone,
      tittle: "LAdil Mehdiyev ",
  
      text: "Insaat muhendisi  ",
      practice: " Is tecrubesi 2il",
    },
  
    {
      id: 1,
      img: worktwo,
      tittle: "Rafiq Rzayev",
      text: "Texnik uzre mutexesis ",
      practice: " Is tecrubesi 2il",
    },
  
    {
      id: 2,
      img: workthree,
      tittle: "Zaur Mikayılov",
      text: "Geodeziya üzrə mütəxəssis ",
      practice: " Is tecrubesi 2il",
    },
    {
      id: 3,
      img: workfoor,
      tittle: "Rəşad İbrahimov",
      text: "Geodeziya üzrə mütəxəssis ",
      practice: " Is tecrubesi 2il",
    },
    {
      id: 4,
      img: workfive,
      tittle: "Elnur Mehtiyev",
      text: "Geodeziya üzrə mütəxəssis ",
      practice: " Is tecrubesi 2il",
    },
    {
      id: 5,
      img: worksix,
      tittle: "Cəmil Bayramov",
      text: "Geodeziya üzrə mütəxəssis",
      practice: " Is tecrubesi 2il",
    },
  ];

const About=()=>{
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
HAQQIMIZDA
</Typography>
</Stack>


<Stack marginLeft="100px" marginTop="30px" color="white" flexDirection="row" gap="10px">
<NavLink color="white" to="/" title="Əsas səhifə" />
<ArrowRightAltIcon/>
              <NavLink  to="/about" title="Haqqımızda" />
</Stack>
</Stack>


    </Box>







    <Stack sx={{ py: "10px" }}>
          <Container>
            <Stack className="archk"  flexDirection="row"  gap="230px">
              <Box
               className="boxs1"
                sx={{
                  border: "1px solid #016B38; ",
                  height: "240px",
                  width: "300px",
                  position: "absolute"
                }}
              >
                <img
                   className="reacts5"
                  style={{
                    position: "absolute",
                    width: "300px",
                    top: "40px",
                    left: "30px",
                    border: "1px",
                    zIndex: "9",
                  }}
                  src={react5}
                  alt=""
                />
                <Box
                 className="boxs2"
                  sx={{
                    border: "1px solid #016B38; ",
                    height: "220px",
                    width: "280px",
                    left: "120px",
                    top: "100px",
                    position: "absolute",
                  }}
                ></Box>
              </Box>

              <Stack
              className="arctextsd"
                flexDirection="column"
                sx={{ marginLeft: "500px", marginTop: "50px" }}
                gap="15px"
              >
                <Typography variant="h3">Archbaku MMC</Typography>
                <Box
                 
                  sx={{
                    border: "1px solid #B08968; ",
                    width: "40px",
                    color: "rgba(176, 137, 104, 1)",
                  }}
                ></Box>
                <Typography sx={{width:"500px"}} className="arch">
                  Archbaku MMC 25 sentyabr 2019 cu ildən təcrübəli mütəxəssis
                  heyəti ilə xidmət göstərən tikinti şirkətidir. İqtisadiyyatın
                  ən önəmli sahələrindən biri olan infrastruktur sektorunda daim
                  yeniliklərə, inkişafa önəm vermişik. Bizim ən önəmli
                  missiyamız yüksək keyfiyyətli tikinti və mühəndislik
                  təcrübəmizdən istifadə edərək ən son texnikalarla
                  müştərilərimizin etimadını qazanmaqdır.
                </Typography>
            
              </Stack>
            </Stack>
          </Container>
        </Stack>















        <Stack marginTop="100px" sx={{ py: "10px" }}>
          <Container>
            <Stack className="archk" flexDirection="row" gap="30px">
                <Typography className="arch">
                  Archbaku MMC 25 sentyabr 2019 cu ildən təcrübəli mütəxəssis
                  heyəti ilə xidmət göstərən tikinti şirkətidir. İqtisadiyyatın
                  ən önəmli sahələrindən biri olan infrastruktur sektorunda daim
                  yeniliklərə, inkişafa önəm vermişik. Bizim ən önəmli
                  missiyamız yüksək keyfiyyətli tikinti və mühəndislik
                  təcrübəmizdən istifadə edərək ən son texnikalarla
                  müştərilərimizin etimadını qazanmaqdır.
                </Typography>
            
              <Box
                className="boxs1"
                sx={{
                  border: "1px solid #016B38; ",
                  height: "240px",
                  width: "1000px",
                  position: "relative",
                }}
              >
                <img
                className="reacts5"
                  style={{
                    position: "absolute",
                    width: "300px",
                    top: "40px",
                    left: "30px",
                    border: "1px",
                    zIndex: "9",
                  }}
                  src={react5}
                  alt=""
                />
                <Box
                   className="boxs2"
                  sx={{
                    border: "1px solid #016B38; ",
                    height: "220px",
                    width: "250px",
                    left: "120px",
                    top: "100px",
                    position: "absolute",
                  }}
                ></Box>
              </Box>

         
            </Stack>
          </Container>
        </Stack>







        <Box  className="personboxe" marginTop="7%"> 
          <Container>
            <Stack flexDirection="column" >
              <Typography 
              className="emed"
                padding="10px"
                sx={{
                  fontSize: "30px",
                 textAlign:"center"
                }}
              >
                ƏMƏKDAŞLAR
              </Typography>
              <Box
               className="emekdasd2"
                sx={{
                  border: "2px solid rgba(176, 137, 104, 1) ",
                  width: "40px",
                
                 marginLeft:"48%"
                }}
              ></Box>
            </Stack>
            <Grid my={2} mb={5} container spacing={2} justifyContent="center">
              {headworks.map((texnika) => {
                return (
                  <Grid key={texnika.id} item xs={12} sm={6} md={6} lg={4}>
                    <Headwroks
                      tittle={texnika.tittle}
                      date={texnika.date}
                      practice={texnika.practice}
                      text={texnika.text}
                      src={texnika.img}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
















</PageContainer>



        </>
    )
}
export default About