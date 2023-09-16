import PageContainer from "../../companents/Pagecontainer"
import { Box, Button, Container, Stack, Typography, Grid } from "@mui/material";
import aboutphoto from "../../assets/abts.jpg"
import NavLink from "../../companents/Navlink";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import lahiye1 from "../../assets/lahiye1.jpg";
import lahiye2 from "../../assets/lahiye2.jpg";

import lahiye4 from "../../assets/lahiye4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import * as React from "react";
import { Autoplay } from "swiper/modules";

const Projectssingle=()=>{
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
Lahiyeler
</Typography>
</Stack>


<Stack marginLeft="100px" marginTop="30px" color="white" flexDirection="row" gap="10px">
<NavLink color="white" to="/" title="Əsas səhifə" />
<ArrowRightAltIcon/>
<NavLink to="/projects" title="Layihələr" />
</Stack>
</Stack>


    </Box>

    <Stack className="projextsings" flexDirection="row" padding="30px" justifyContent="center" gap="70px">


<Box>
    <Stack  flexDirection="column" gap="30px">
        

<img className="lhyse" src={lahiye2} width="772px" height="400px" alt="" />

<Typography variant="h5">
Layihənin adı
</Typography>

<Typography className="lormdx" width="700px" >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit quis amet, ligula ultrices phasellus risus eget. Non eu tortor enim pharetra. Massa aliquam at consequat ultrices pellentesque donec tristique egestas ultricies. Aliquam vel in hendrerit egestas. Massa, euismod ut sit justo, tempor justo sed dictum sit. Malesuada viverra et viverra venenatis, sed phasellus leo scelerisque mi. Sagittis tortor arcu facilisis purus pulvinar. Lacus urna et aliquet cras pellentesque eu. Dolor lectus tortor odio velit vestibulum praesent neque dolor.
</Typography>

<Typography className="lormdx" marginTop="100px" width="700px" >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit quis amet, ligula ultrices phasellus risus eget. Non eu tortor enim pharetra. Massa aliquam at consequat ultrices pellentesque donec tristique egestas ultricies. Aliquam vel in hendrerit egestas. Massa, euismod ut sit justo, tempor justo sed dictum sit. Malesuada viverra et viverra venenatis, sed phasellus leo scelerisque mi. Sagittis tortor arcu facilisis purus pulvinar. Lacus urna et aliquet cras pellentesque eu. Dolor lectus tortor odio velit vestibulum praesent neque dolor.
</Typography>

<Stack className="twoprojectsing" flexDirection="row" gap="30px">
<img className="ljd" src={lahiye2} width="272px"   alt="" />
<img className="ljd" src={lahiye2} width="272px"  alt="" />
</Stack>
<Typography className="lormdx" marginTop="100px" width="700px" >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit quis amet, ligula ultrices phasellus risus eget. Non eu tortor enim pharetra. Massa aliquam at consequat ultrices pellentesque donec tristique egestas ultricies. Aliquam vel in hendrerit egestas. Massa, euismod ut sit justo, tempor justo sed dictum sit. Malesuada viverra et viverra venenatis, sed phasellus leo scelerisque mi. Sagittis tortor arcu facilisis purus pulvinar. Lacus urna et aliquet cras pellentesque eu. Dolor lectus tortor odio velit vestibulum praesent neque dolor.
</Typography>

<Typography className="lormdx" marginTop="100px" width="700px" >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit quis amet, ligula ultrices phasellus risus eget. Non eu tortor enim pharetra. Massa aliquam at consequat ultrices pellentesque donec tristique egestas ultricies. Aliquam vel in hendrerit egestas. Massa, euismod ut sit justo, tempor justo sed dictum sit. Malesuada viverra et viverra venenatis, sed phasellus leo scelerisque mi. Sagittis tortor arcu facilisis purus pulvinar. Lacus urna et aliquet cras pellentesque eu. Dolor lectus tortor odio velit vestibulum praesent neque dolor.
</Typography>
    </Stack>
</Box>

















<Swiper
              padding="20px"
              spaceBetween={50}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
             
                <SwiperSlide>

                </SwiperSlide>
         
            </Swiper>











<Box>
<Stack flexDirection="column" gap="20px">
    <Typography variant="h5" color="#016B38">
    Digər layihələr
    </Typography>




<Stack flexDirection="row" gap="20px" alignItems="center">
    <img className="ljd" width="90px" src={lahiye1} alt="" />
    <Typography width="250px">
    Lorem ipsum dolor sit amet consectetur adipiscing elit
    </Typography>
</Stack>

<Box border="1px solid #E5E5E5"  width="427px">

</Box>


<Stack flexDirection="row" gap="10px" alignItems="center">
    <img className="ljd" width="90px" src={lahiye4} alt="" />
    <Typography width="250px">
    Lorem ipsum dolor sit amet consectetur adipiscing elit
    </Typography>
</Stack>

<Box border="1px solid #E5E5E5"  width="427px">

</Box>



<Stack flexDirection="row" gap="20px" alignItems="center">
    <img className="ljd" width="90px" src={lahiye1} alt="" />
    <Typography width="250px">
    Lorem ipsum dolor sit amet consectetur adipiscing elit
    </Typography>
</Stack>

<Box border="1px solid #E5E5E5"  width="427px">

</Box>


<Stack flexDirection="row" gap="20px" alignItems="center">
    <img className="ljd" width="90px" src={lahiye1} alt="" />
    <Typography width="250px">
    Lorem ipsum dolor sit amet consectetur adipiscing elit
    </Typography>
</Stack>

<Box border="1px solid #E5E5E5"  width="427px">

</Box>

<Stack flexDirection="row" gap="20px" alignItems="center">
    <img className="ljd" width="90px" src={lahiye2} alt="" />
    <Typography width="250px">
    Lorem ipsum dolor sit amet consectetur adipiscing elit
    </Typography>
</Stack>

<Box border="1px solid #E5E5E5"  width="427px">

</Box>



<Stack flexDirection="row" gap="20px" alignItems="center">
    <img className="ljd" width="90px" src={lahiye4} alt="" />
    <Typography width="250px">
    Lorem ipsum dolor sit amet consectetur adipiscing elit
    </Typography>
</Stack>



</Stack>
</Box>




























    </Stack>

</PageContainer>

        </>
    )
}
export default Projectssingle