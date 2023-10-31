import PageContainer from "../../companents/Pagecontainer"
import { Box,Typography,Stack } from "@mui/material"

import aboutphoto from "../../assets/abts.jpg"
import NavLink from "../../companents/Navlink"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import lahiye1 from "../../assets/lahiye1.jpg";
import lahiye2 from "../../assets/lahiye2.jpg";

import lahiye4 from "../../assets/lahiye4.jpg";
import { Link } from "react-router-dom";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import * as React from "react";
import { Autoplay } from "swiper/modules";

const Projects=()=>{
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











<Box padding="20px">

<Swiper
 className="lomd"
breakpoints={{
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    },
  }}
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Stack className="limecilm" gap="5px" flexDirection="row"  >
    <Typography> Hamısı</Typography> 
    <Box className="lnmd" border="1px solid #E5E5E5" width="1px" height="20px"></Box>

  
   

    
 

    
  
    
</Stack>
</SwiperSlide>
      <SwiperSlide>
        <Stack className="limecilm" gap="5px" flexDirection="row">
        <Typography> Tikinti</Typography> 
    <Box className="lnmd" border="1px solid #E5E5E5" width="1px" height="20px"></Box>

        </Stack>

      </SwiperSlide>
    
    
      <SwiperSlide>
      <Stack className="limecilm" gap="5px" flexDirection="row">
     
      <Typography> Restavrasiya</Typography> 
    <Box className="lnmd" border="1px solid #E5E5E5" width="1px" height="20px"></Box>

        </Stack>
      </SwiperSlide>




      <SwiperSlide>

      <Stack className="limecilm" gap="5px" flexDirection="row">
     
      <Typography> Layihələndirmə</Typography> 
    <Box className="lnmd" border="1px solid #E5E5E5" width="1px" height="20px"></Box>



       </Stack>
      </SwiperSlide>





      <SwiperSlide>

<Stack className="limecilm" gap="5px" flexDirection="row">


    
<Typography> Texnikanın icarəsi</Typography> 
    <Box className="lnmd" border="1px solid #E5E5E5" width="1px" height="20px"></Box>




 </Stack>
</SwiperSlide>



<SwiperSlide>

<Stack className="limecilm" gap="5px" flexDirection="row">


<Typography> Təmir</Typography> 
    <Box className="lnmd" border="1px solid #E5E5E5" width="1px" height="20px"></Box>




 </Stack>
</SwiperSlide>




<SwiperSlide>

<Stack gap="20px" flexDirection="row">


<Typography> Eksteryer və Landşaft</Typography> 




 </Stack>
</SwiperSlide>



  
    </Swiper>








</Box>










            <Swiper
            className="lomd"
            breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
      spaceBetween={10}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
    >

        
      <SwiperSlide>
        <Link to="/projects:id">


<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye2} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>
</SwiperSlide>


<SwiperSlide>
        <Link to="/projects:id">


<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye2} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>
</SwiperSlide>


<SwiperSlide>
        <Link to="/projects:id">


<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye2} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>
</SwiperSlide>


<SwiperSlide>
        <Link to="/projects:id">


<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye2} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>
</SwiperSlide>

<SwiperSlide>
    
<Link to="/projects:id">


<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye2} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>
</SwiperSlide>


<SwiperSlide>
<Link to="/projects:id">

<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye4} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>

</SwiperSlide>


   
    </Swiper>







    <Swiper  className="lomd"
     breakpoints={{
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={10}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        
      <SwiperSlide>
        <Link to="/projects:id">


<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye2} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>
</SwiperSlide>


<SwiperSlide>
        <Link to="/projects:id">


<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye2} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>
</SwiperSlide>


<SwiperSlide>
        <Link to="/projects:id">


<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye2} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>
</SwiperSlide>


<SwiperSlide>
        <Link to="/projects:id">


<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye2} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>
</SwiperSlide>



<SwiperSlide>
    
<Link to="/projects:id">


<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye2} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>
</SwiperSlide>


<SwiperSlide>
<Link to="/projects:id">

<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye4} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>

</SwiperSlide>


<SwiperSlide>
<Link to="/projects:id">

<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye4} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>

</SwiperSlide>


<SwiperSlide>
<Link to="/projects:id">

<Box className="pj" border="1px solid" width="210px">
    <img style={{width:"100%"}} src={lahiye4} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>

</SwiperSlide>


   
    </Swiper>



    <Swiper  className="lomd"
     breakpoints={{
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={10}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        
      <SwiperSlide>
        <Link to="/projects:id">


<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye2} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>
</SwiperSlide>


<SwiperSlide>
        <Link to="/projects:id">


<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye2} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>
</SwiperSlide>


<SwiperSlide>
        <Link to="/projects:id">


<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye2} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>
</SwiperSlide>


<SwiperSlide>
        <Link to="/projects:id">


<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye2} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>
</SwiperSlide>



<SwiperSlide>
    
<Link to="/projects:id">


<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye2} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>
</SwiperSlide>


<SwiperSlide>
<Link to="/projects:id">

<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye4} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>

</SwiperSlide>


<SwiperSlide>
<Link to="/projects:id">

<Box className="pj" width="210px">
    <img style={{width:"100%"}} src={lahiye4} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>

</SwiperSlide>


<SwiperSlide>
<Link to="/projects:id">

<Box className="pj" border="1px solid" width="210px">
    <img style={{width:"100%"}} src={lahiye4} alt="" />
<Box border="1px solid" marginTop="-51px"
sx={{background:"black",color:"white",opacity:"0.90"}} width="100%" padding="20px">
    <Typography>
    Lorem ipsum dolor sit amet
    </Typography>
</Box>

</Box>
</Link>

</SwiperSlide>



    </Swiper>











</PageContainer>

        </>
    )
}
export default Projects