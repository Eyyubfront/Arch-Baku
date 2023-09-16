import PageContainer from "../../companents/Pagecontainer"
import { Box,Button,Stack,Typography } from "@mui/material"
import aboutphoto from "../../assets/abts.jpg"

import NavLink from "../../companents/Navlink";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
const Vakansiya=()=>{
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
VAKANSİYALAR
</Typography>
</Stack>


<Stack marginLeft="100px" marginTop="30px" color="white" flexDirection="row" gap="10px">
<NavLink color="white" to="/" title="Əsas səhifə" />
<ArrowRightAltIcon/>
<NavLink to="/vakansiya" title="Vakansiyalar" />
</Stack>
</Stack>


    </Box>


<Box padding="30px">
    <Stack gap="10px">

    <Typography className="txts" variant="h5">
    Açıq vakansiyalar
    </Typography>

    <Typography className="txts" variant="h7" color= "#5E5E5E">
    2 vakansiya
    </Typography>
    </Stack>


<Box className="one" marginTop="30px" border="1px solid #DDD;" width="900px" padding="30px"> 
<Stack className="vakansiyaboxone" justifyContent="space-between" flexDirection="row">
 <Stack gap="30px" flexDirection="column">

<Typography variant="h5">
Kargüzarlıq
    </Typography>

<Stack className="karguzone" flexDirection="row" alignItems="center" gap="20px">


<Stack flexDirection="column">

    <Typography variant="h6">
    Elanın verilmə tarixi: 10.03.2022
    </Typography>

    <Typography variant="h6">
    Elanın bitmə tarixi: 10.04.2022
    </Typography>
    <Typography variant="h6">
    Əmək haqqı: Müsahibə əsasında
    </Typography>
</Stack>



<Stack flexDirection="column">

    <Typography variant="h6">
    Yaş həddi: 20-45
    </Typography>

    <Typography variant="h6">
    Təhsil:
    </Typography>
    <Typography variant="h6">
    İş təcrübəsi:
    </Typography>
</Stack>

</Stack>
 </Stack>
 <Link className="buttonsds1" to="/vakansiya:id">
<Button
                    className="alsdxbtn"
                    sx={{
                      border: "1px solid white",
                      width: "200px",
                      background: "#016B38;",
                      color: "white",
                      height:"50px"
                    }}
                  >
                  Müraciət et <ArrowRightAltIcon />{" "}
                  </Button>
</Link>




</Stack>
<Box marginTop="30px" border="1px solid #DDD"></Box>

<Stack  className="vakansiyaboxone"  flexDirection="column" gap="10px" marginTop="20px">

<Typography>
Tələblər
</Typography>

<Typography>
Gündəlik kargüzarlıq və ofis daxili işlərin yerinə yetirilməsi
</Typography>


<Typography>
Müştərilərlə qarşılıqlı müqavilələr, razılaşdırılma protokulunun və hesab fakturaların hazırlanması
</Typography>

<Typography>
Şirkətə daxil olan və şirkətdən göndərilən sənədlərin qeydiyyata alınması
</Typography>
<Typography>
Komandada işləmək bacarığı
</Typography>


</Stack>

</Box>



<Box  className="one"  marginTop="30px" border="1px solid #DDD;" width="900px" padding="30px"> 
<Stack className="vakansiyaboxone" justifyContent="space-between" flexDirection="row">
 <Stack gap="30px" flexDirection="column">

<Typography variant="h5">
Mühəndis
    </Typography>

<Stack className="karguzone" flexDirection="row" alignItems="center" gap="20px">


<Stack flexDirection="column">

    <Typography variant="h6">
    Elanın verilmə tarixi: 10.03.2022
    </Typography>

    <Typography variant="h6">
    Elanın bitmə tarixi: 10.04.2022
    </Typography>
    <Typography variant="h6">
    Əmək haqqı: Müsahibə əsasında
    </Typography>
</Stack>



<Stack flexDirection="column">

    <Typography variant="h6">
    Yaş həddi: 20-45
    </Typography>

    <Typography variant="h6">
    Təhsil:
    </Typography>
    <Typography variant="h6">
    İş təcrübəsi:
    </Typography>
</Stack>

</Stack>
 </Stack>

<Link className="buttonsds1" to="/vakansiya:id">
<Button
                    className="alsdxbtn"
                    sx={{
                      border: "1px solid white",
                      width: "200px",
                      background: "#016B38;",
                      color: "white",
                      height:"50px"
                    }}
                  >
                  Müraciət et <ArrowRightAltIcon />{" "}
                  </Button>
</Link>




</Stack>
<Box marginTop="30px" border="1px solid #DDD"></Box>

<Stack flexDirection="column" gap="10px" marginTop="20px">

<Typography>
Tələblər
</Typography>

<Typography>
Gündəlik kargüzarlıq və ofis daxili işlərin yerinə yetirilməsi
</Typography>


<Typography>
Müştərilərlə qarşılıqlı müqavilələr, razılaşdırılma protokulunun və hesab fakturaların hazırlanması
</Typography>

<Typography>
Şirkətə daxil olan və şirkətdən göndərilən sənədlərin qeydiyyata alınması
</Typography>
<Typography>
Komandada işləmək bacarığı
</Typography>


</Stack>

</Box>








</Box>



        </PageContainer>
        </>
    )
}
export default Vakansiya