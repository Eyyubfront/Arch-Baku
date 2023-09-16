import Archbaku from "../../assets/Archlogo.png";
import { Stack,Typography,Box } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NavLink from "../Navlink";
import footone from "../../assets/footone.png"
import foottwo from "../../assets/foottwo.png"
import footthree from "../../assets/footthree.png"

import footsix from "../../assets/footsix.png"
import footseven from "../../assets/footseven.png"
import footeight from "../../assets/footeight.png"
import footnight from "../../assets/footnight.png"


import lahiye1 from "../../assets/lahiye1.jpg";
import lahiye2 from "../../assets/lahiye2.jpg";

import lahiye4 from "../../assets/lahiye4.jpg";
const Footer=()=>{
    return(
        <>

<Stack padding="40px " sx={{background:"rgba(11, 85, 49, 1)",color:"white"}} className="stc" flexDirection="column">


<Stack className="fothedclmn" flexDirection="row" pad justifyContent="space-between" >



<Stack marginTop="50px" gap="30px">


<Stack className="fotrsclmn" color="white" py={3} flexDirection="row" gap="4px">

<img className="arcs"  src={Archbaku} alt="" />

<Stack  flexDirection="column" gap="3px">

<Typography>
Archbaku  MMc
</Typography>
<Typography>
lahiye & tikinti
</Typography>
</Stack>
    </Stack>

    <Typography className="lrmfts" width="300px">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non velit sem est ipsum leo consequat ornare. Justo sit lacus, risus dictum.
    </Typography>

<Stack className="icons" flexDirection="row" textAlign="center" gap="30px">

<Box sx={{borderRadius:"4px",border:"1px solid #FFF;",width:"31px",height:"31px"}} >
    <FacebookIcon/>
</Box>

<Box sx={{borderRadius:"4px",border:"1px solid #FFF;",width:"31px",height:"31px"}}>
    <InstagramIcon/>
</Box>


<Box sx={{borderRadius:"4px",border:"1px solid #FFF;",width:"31px",height:"31px"}}>
    <WhatsAppIcon/>
</Box>
</Stack>
</Stack>

<Stack flexDirection="column" alignItems="center" gap="30px">

<Typography padding="10px" sx={{color:"white",fontSize:"30px",marginTop:"50px"}}>LAYİHƏLƏR</Typography>
<Box sx={{border:"2px solid rgba(176, 137, 104, 1) ",width:"40px",marginLeft:"30px"}}></Box>
<Stack className="lahynav" flexDirection="row" alignItems="center" gap="50px">

<Stack flexDirection="column" gap="13px">
<NavLink   to="/" title="Əsas səhifə" />
            <NavLink  to="/about" title="Haqqımızda" />
            <NavLink to="/projects" title="Layihələr"/>
            <NavLink to="/service" title="Xidmətlər" />
</Stack>

<Stack  flexDirection="column" gap="3px">
<NavLink to="/vakansiya" title="Vakansiyalar" />
            <NavLink to="/xeber" title="Xəbərlər" />
            <NavLink to="/contact" title="Əlaqə" />
</Stack>
</Stack>

</Stack>



<Stack  flexDirection="column" alignItems="center" gap="10px">
<Typography padding="10px" sx={{color:"white",fontSize:"30px",marginTop:"50px"}}>Son layihələr</Typography>
<Box sx={{border:"2px solid rgba(176, 137, 104, 1) ",width:"40px",marginLeft:"30px"}}></Box>
















<Stack className="fotphoto" flexDirection="row" gap="5px" item xs={12} md={6} sm={4}>
    <img className="fot" width="100px" src={lahiye1} alt="" />
    <img className="fot" width="100px" src={lahiye2} alt="" />
    <img className="fot" width="100px" src={lahiye4} alt="" />
    <img className="fot" width="100px" src={lahiye1} alt="" />
  
</Stack>

<Stack className="fotphoto" marginTop="10px" gap="5px" flexDirection="row" item xs={12} md={6} sm={4}>
<img className="fot" width="100px" src={lahiye2} alt="" />
    <img className="fot" width="100px" src={lahiye1} alt="" />
    <img className="fot" width="100px" src={lahiye2} alt="" />
    <img className="fot" width="100px" src={lahiye4} alt="" />
</Stack>


</Stack>
</Stack>
<Box className="lnds"  border="1px solid rgba(180, 180, 180, 1)" width="1300px" margin="auto" marginTop="100px">

</Box>
<Stack className="fottext" marginTop="100px" flexDirection="row" justifyContent="space-between" alignItems="center">

<Typography>© 2022 Archbaku.az. Müəllif hüquqları qorunur</Typography>
<Typography>Site by JEDAI</Typography>
</Stack>
</Stack>


        </>
    )
}

export default Footer