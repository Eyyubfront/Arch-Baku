import PageContainer from "../../companents/Pagecontainer";
import { Box, Button, Container, Stack, Typography, Grid } from "@mui/material";
import Headxeb from "../../companents/Hedxeb";
import NavLink from "../../companents/Navlink";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import aboutphoto from "../../assets/abts.jpg"
import TextField from "@mui/material/TextField";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailIcon from "@mui/icons-material/Mail";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import locant from "../../assets/locantion.png";

const Contacts=()=>{
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
Əlaqə
</Typography>
</Stack>


<Stack marginLeft="100px" marginTop="30px" color="white" flexDirection="row" gap="10px">
<NavLink color="white" to="/" title="Əsas səhifə" />
<ArrowRightAltIcon/>
<NavLink to="/contact" title="Əlaqə" />
</Stack>
</Stack>


    </Box>


    <Box >
          <Container>
        
              <Stack className="oneiconsds" flexDirection="row" justifyContent="center"  gap="50px" marginTop="20px">
                <Stack flexDirection="row" alignItems="center" gap="20px">
                  <Box
                    border-radius="4px"
                    padding="5px"
                    border="1px dashed #016B38"
                  >
                    <PhoneInTalkIcon />
                  </Box>
                  <Stack flexDirection="column" gap="5px">
                    <Typography color="rgba(1, 107, 56, 1)">Telefon</Typography>
                    <Typography color="rgba(112, 112, 112, 1)">
                      +994 51 987 65 43
                    </Typography>
                  </Stack>
                </Stack>

                <Stack flexDirection="row" alignItems="center" gap="20px">
                  <Box
                    border-radius="4px"
                    padding="5px"
                    border="1px dashed #016B38"
                  >
                    <MailIcon />
                  </Box>
                  <Stack flexDirection="column" gap="5px">
                    <Typography color="rgba(1, 107, 56, 1)">Email</Typography>
                    <Typography color="rgba(112, 112, 112, 1)">
                      info@archbaku.az
                    </Typography>
                  </Stack>
                </Stack>

                <Stack flexDirection="row" alignItems="center" gap="20px">
                  <Box
                    border-radius="4px"
                    padding="5px"
                    border="1px dashed #016B38"
                  >
                    <FmdGoodIcon />
                  </Box>
                  <Stack flexDirection="column" gap="5px">
                    <Typography color="rgba(1, 107, 56, 1)">Ünvan</Typography>
                    <Typography color="rgba(112, 112, 112, 1)">
                      Bakı, Azərbaycan
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>


              <Stack className="icons" marginTop="40px" justifyContent="center" flexDirection="row" textAlign="center" gap="20px">

<Box sx={{borderRadius:"4px",border:"1px solid #016B38;",width:"31px",height:"31px"}} >
    <FacebookIcon sx={{color:" #016B38"}}/>
</Box>

<Box sx={{borderRadius:"4px",border:"1px solid #016B38;",width:"31px",height:"31px"}}>
    <InstagramIcon sx={{color:" #016B38"}}/>
</Box>


<Box sx={{borderRadius:"4px",border:"1px solid #016B38;",width:"31px",height:"31px"}}>
    <WhatsAppIcon sx={{color:" #016B38"}}/>
</Box>
</Stack>
      
            <Stack
            className="contactscolmn"
              padding="30px"
              flexDirection="row"
              marginTop="20px"
              alignItems="center"
              justifyContent="center"
            >

     
              <Stack gap="40px">
                <Typography textAlign="center"  className="ques" variant="h4">Bizimlə əlaqə saxlayın</Typography>
                <Stack flexDirection="row " className="questnt" alignItems="center" gap="40px">
                  <Stack flexDirection="column" gap="25px">
                    <TextField
                      sx={{ width: "300px" }}
                      id="outlined-basic"
                      label="Adınız və Soyadınız"
                      variant="outlined"
                    />
                    <TextField
                      sx={{ width: "300px" }}
                      id="outlined-basic"
                      label="Email ünvanı"
                      variant="outlined"
                    />
                    <TextField
                      sx={{ width: "300px" }}
                      id="outlined-basic"
                      label="Telefon nömrəsi"
                      variant="outlined"
                    />
                  </Stack>

                  <Stack
                    marginTop="10px"
                    gap="15px"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <TextField
                      id="outlined-basicz"
                      label="Mesajınız"
                      variant="outlined"
                    />
                    <Button
                    className="sendbtn"
                      sx={{
                        color: "white;",
                        padding: "10px",
                        border: "1px solid",
                        background: "rgba(176, 137, 104, 1)",
                        margin: "auto",
                      }}
                    >
                      Göndər <ArrowRightAltIcon />{" "}
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Container>
            <Box >
          <img className="locphoto" style={{ width: "100%" }} src={locant} alt="" />
        </Box>
        </Box>

        </PageContainer>
        </>
    )
}
export default Contacts