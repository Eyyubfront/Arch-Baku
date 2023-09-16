import hedxeb1 from "../../assets/xeberone.jpg";
import hedxeb2 from "../../assets/xebertwo.jpg";
import hedxeb3 from "../../assets/xeberthree.jpg";
import hedxeb4 from "../../assets/xeberfive.jpg";
import PageContainer from "../../companents/Pagecontainer";
import { Box, Button, Container, Stack, Typography, Grid } from "@mui/material";
import Headxeb from "../../companents/Hedxeb";
import NavLink from "../../companents/Navlink";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import aboutphoto from "../../assets/abts.jpg"
import { Link } from "react-router-dom";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import * as React from "react";
import { Autoplay } from "swiper/modules";
const xeber = [
    {
      id: 0,
      img: hedxeb1,
      date: "05.02.22",
      tittle: "Lorem ipsum",
      text: "Lorem ipsum text husnmco mncs smdwick nfiefifisfheijefnwenfewnff",
    },
    {
      id: 1,
      img: hedxeb2,
      date: "05.02.22",
      tittle: "Lorem ipsum",
      text: "Lorem ipsum text husnmco mncs smdwick nfiefifisfheijefnwenfewnff",
    },
  
    {
      id: 2,
      img: hedxeb3,
      date: "05.02.22",
      tittle: "Lorem ipsum",
      text: "Lorem ipsum text husnmco mncs smdwick nfiefifisfheijefnwenfewnff",
    },
    {
      id: 3,
      img: hedxeb4,
      date: "05.02.22",
      tittle: "Lorem ipsum",
      text: "Lorem ipsum text husnmco mncs smdwick nfiefifisfheijefnwenfewnff",
    },
  ];
  

const Xeber=()=>{
    return(
        <>
        <PageContainer>
        <Box 
          sx={{
            backgroundImage: `url(${aboutphoto})`,
            position: "relative",
            height: "200px",
          }}  >


<Stack flexDirection="column" padding='20px' >

<Stack flexDirection="row" gap="10px" marginLeft="100px" padding="20px">

            <Box border="2px solid #B08968;" width="1px" height="40px">

            </Box>

<Typography variant="h5" color="white">
Xeberler
</Typography>
</Stack>


<Stack marginLeft="100px" marginTop="30px" color="white" flexDirection="row" gap="10px">
<NavLink color="white" to="/" title="Əsas səhifə" />
<ArrowRightAltIcon/>
<NavLink to="/xeber" title="Xəbərlər" />
</Stack>
</Stack>


    </Box>

        <Box>
          <Container>
            <Typography
              className="xdimetm"
              padding="10px"
              variant="h5"
              sx={{ 
                 
                  textAlign:"center" }}
            >
              XƏBƏRLƏR
            </Typography>
            <Box
            className="xdimetdlin"
              sx={{
                border: "2px solid rgba(176, 137, 104, 1) ",
                width: "40px",
                marginLeft: "570px",
              }}
            ></Box>
            
            <Link  style={{color:"black"}} to="/xeber:id">

            <Swiper
            className="mopd"
                spaceBetween={150}
                slidesPerView={4}
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
                {xeber.map((texnika) => (
                  <SwiperSlide>
                    <Headxeb
                      tittle={texnika.tittle}
                      date={texnika.date}
                      text={texnika.text}
                      src={texnika.img}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
</Link>

            <Link style={{color:"black"}} className="lnks"  to="/xeber:id">

            <Swiper
              className="mopd"
                 spaceBetween={150}
                 slidesPerView={4}
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
                {xeber.map((texnika) => (
                  <SwiperSlide>
                    <Headxeb
                      tittle={texnika.tittle}
                      date={texnika.date}
                      text={texnika.text}
                      src={texnika.img}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
</Link>

<Link style={{color:"black"}} to="/xeber:id">

<Swiper
   className="mopd"
                 spaceBetween={150}
                 slidesPerView={4}
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
                {xeber.map((texnika) => (
                  <SwiperSlide>
                    <Headxeb
                      tittle={texnika.tittle}
                      date={texnika.date}
                      text={texnika.text}
                      src={texnika.img}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
</Link>

          </Container>
        </Box>


        </PageContainer>

        </>
    )
}
export default Xeber