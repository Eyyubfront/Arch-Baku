import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Dialog,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailIcon from "@mui/icons-material/Mail";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";
import NavLink from "../Navlink";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <Close /> : <MenuIcon />}
        </IconButton>
        <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
          <Box p={4} height="calc(100% - 50px)">
            <Stack flexDirection="row" justifyContent="flex-end">
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setOpen(false)}
              >
                <Close />
              </IconButton>
            </Stack>
            <Stack
           
              flexDirection="column"
              height="100%"
              justifyContent="space-between"
            >
              <Stack gap={5}>
                <NavLink to="/" title="Əsas səhifə" />
                <NavLink to="/about" title="Haqqımızda" />
                <NavLink to="/projects" title="Layihələr" />
                <NavLink to="/service" title="Xidmətlər" />
                <NavLink to="/vakansiya" title="Vakansiyalar" />
                <NavLink to="/xeber" title="Xəbərlər" />
                <NavLink to="/contact" title="Əlaqə" />
              </Stack>
              <Stack flexDirection="column" gap="23px">
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

              <Stack flexDirection="column" gap="15px">
                <FacebookIcon />
                <InstagramIcon />
                <WhatsAppIcon />
              </Stack>
            </Stack>
          </Box>
        </Dialog>
      </Box>
    </>
  );
};

export default BurgerMenu;
