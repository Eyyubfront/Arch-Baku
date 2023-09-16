import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailIcon from "@mui/icons-material/Mail";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Archbaku from "../../assets/Archlogo.png";
import NavLink from "../Navlink";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Grid,
  AppBar,
} from "@mui/material";
import BurgerMenu from "../Burgermenu";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0A4227;",
          py: 2,
        }}
      >
        <Container>
          <Stack
            flexDirection="row"
            gap="3px"
            justifyContent="space-between"
            sx={{
              backgroundColor: "#0A4227;",
              color: "white",
            }}
          >
            <Stack
              sx={{ display: { xs: "none", md: "flex" } }}
              flexDirection="row"
              gap="23px"
            >
              <Stack flexDirection="row" gap="3px">
                <PhoneInTalkIcon />
                <Typography>+994 51 324 10</Typography>
              </Stack>
              <Stack flexDirection="row" gap="3px">
                <MailIcon />
                <Typography>@infoarcbaku.az</Typography>
              </Stack>
              <Stack flexDirection="row" gap="3px">
                <FmdGoodIcon />
                <Typography>Baki,Azerbaycan</Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{ display: { xs: "none", md: "flex" } }}
              flexDirection="row"
              gap="15px"
            >
              <FacebookIcon />
              <InstagramIcon />
              <WhatsAppIcon />
            </Stack>
          </Stack>
        </Container>
      </Box>

      <AppBar
        sx={{
          background: "#fff",
          position: "sticky",
          top: "0",
          zIndex: 99,
        }}
      >
        <Container>
          <Box
            className="apsbd"
            sx={{
              background: "white",
              // top: 0,
              // zIndex: 9999,
              // width: "100% !important",
              // marginTop: "50px",
              // height: "100px",
              // position: "sticky",
              position: "static",
            }}
          >
            <Stack  justifyContent="space-between"   flexDirection="row" alignItems="center">
              <Stack py={3} flexDirection="row" gap="4px">
                <img src={Archbaku} alt="" />

                <Stack
                  sx={{ display: { xs: "none", md: "flex" } }}
                  flexDirection="column"
                  gap="3px"
                 
                >
                  <Typography color="#0A4227">Archbaku MMc</Typography>
                  <Typography color="#0A4227">lahiye & tikinti</Typography>
                </Stack>
              </Stack>

              <Stack
                justifyContent="space-between"
                gap="80px"
                flexDirection="row"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <NavLink to="/" title="Əsas səhifə" />
                <NavLink to="/about" title="Haqqımızda" />
                <NavLink to="/projects" title="Layihələr" />
                <NavLink to="/service" title="Xidmətlər" />

                <NavLink to="/vakansiya" title="Vakansiyalar" />

                <NavLink to="/xeber" title="Xəbərlər" />
                <NavLink to="/contact" title="Əlaqə" />
              </Stack>
              <BurgerMenu />
            </Stack>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
