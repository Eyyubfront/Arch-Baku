import PageContainer from "../../companents/Pagecontainer"

import { Box, Button, Container, Stack, Typography, Grid } from "@mui/material";
import NavLink from "../../companents/Navlink"
import aboutphoto from "../../assets/abts.jpg"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import servcd from "../../assets/servcd.jpg"


import layh1 from "../../assets/servcsd1.jpg";
import layh2 from "../../assets/servcsd2.jpg";
import layh3 from "../../assets/servcsd3.jpg";
import layh4 from "../../assets/servcsd4.jpg";
import layh5 from "../../assets/servcsd5.jpg";
import layh6 from "../../assets/servcsd6.jpg";

const Servicesingle=()=>{
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
<NavLink to="/service:id" title="Xidmətlər" />
</Stack>
</Stack>


    </Box>

<Stack className="xebersing"    marginTop="30px"  flexDirection="row" justifyContent="center" gap="40px">


<Stack className="xbernonesing"  flexDirection="column">

    <Box>
        <Stack flexDirection="column" gap="10px">

    
<img className="servg" width="800px" src={servcd} alt="" />
<Typography  className="xeebertyp" width='700px'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit quis amet, ligula ultrices phasellus risus eget. Non eu tortor enim pharetra. Massa aliquam at consequat ultrices pellentesque donec tristique egestas ultricies. Aliquam vel in hendrerit egestas. Massa, euismod ut sit justo, tempor justo sed dictum sit. Malesuada viverra et viverra venenatis, sed phasellus leo scelerisque mi. Sagittis tortor arcu facilisis purus pulvinar. Lacus urna et aliquet cras pellentesque eu. Dolor lectus tortor odio velit vestibulum praesent neque dolor.
</Typography>

<Typography className="xeebertyp"  width='700px'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit quis amet, ligula ultrices phasellus risus eget. Non eu tortor enim pharetra. Massa aliquam at consequat ultrices pellentesque donec tristique egestas ultricies. Aliquam vel in hendrerit egestas. Massa, euismod ut sit justo, tempor justo sed dictum sit. Malesuada viverra et viverra venenatis, sed phasellus leo scelerisque mi. Sagittis tortor arcu facilisis purus pulvinar. Lacus urna et aliquet cras pellentesque eu. Dolor lectus tortor odio velit vestibulum praesent neque dolor.
</Typography>


<Typography className="xeebertyp" width='700px'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit quis amet, ligula ultrices phasellus risus eget. Non eu tortor enim pharetra. Massa aliquam at consequat ultrices pellentesque donec tristique egestas ultricies. Aliquam vel in hendrerit egestas. Massa, euismod ut sit justo, tempor justo sed dictum sit. Malesuada viverra et viverra venenatis, sed phasellus leo scelerisque mi. Sagittis tortor arcu facilisis purus pulvinar. Lacus urna et aliquet cras pellentesque eu. Dolor lectus tortor odio velit vestibulum praesent neque dolor.
</Typography>
<Typography className="xeebertyp" width='700px'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit quis amet, ligula ultrices phasellus risus eget. Non eu tortor enim pharetra. Massa aliquam at consequat ultrices pellentesque donec tristique egestas ultricies. Aliquam vel in hendrerit egestas. Massa, euismod ut sit justo, tempor justo sed dictum sit. Malesuada viverra et viverra venenatis, sed phasellus leo scelerisque mi. Sagittis tortor arcu facilisis purus pulvinar. Lacus urna et aliquet cras pellentesque eu. Dolor lectus tortor odio velit vestibulum praesent neque dolor.
</Typography>
</Stack>
    </Box>
</Stack>



<Stack className="xberbox"  marginTop="40px"  flexDirection="column">

<Box  className="xeberwosing" padding="3px" sx={{background:"#016B38;",color:"white"}} border="1px solid" width="300px">
    <Stack   flexDirection="row" gap="10px" alignItems="center">

<img   src={layh1} alt="" />
<Typography>
Tikinti
</Typography>
    </Stack>
</Box>

<Box  className="xeberwosing" padding="3px" border="1px solid" width="300px">
    <Stack flexDirection="row" gap="10px" alignItems="center">

<img src={layh2} alt="" />
<Typography>
Restavrasiya
</Typography>
    </Stack>
</Box>


<Box className="xeberwosing" padding="3px"   border="1px solid" width="300px">
    <Stack flexDirection="row" gap="10px" alignItems="center">

<img src={layh3} alt="" />
<Typography>
Texnikanın icarəsi
</Typography>
    </Stack>
</Box>


<Box className="xeberwosing" padding="3px" border="1px solid" width="300px">
    <Stack flexDirection="row" gap="10px" alignItems="center">

<img src={layh4} alt="" />
<Typography>
Təmir
</Typography>
    </Stack>
</Box>

<Box className="xeberwosing" padding="3px" border="1px solid" width="300px">
    <Stack flexDirection="row" gap="10px" alignItems="center">

<img src={layh5} alt="" />
<Typography>
Eksteryer və Landşaft dizaynı 
</Typography>
    </Stack>
</Box>
</Stack>
</Stack>



    
</PageContainer>
        </>
    )
}
export default Servicesingle