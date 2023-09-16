import PageContainer from "../../companents/Pagecontainer";
import { Box, Button, Container, Stack, Typography, Grid } from "@mui/material";
import NavLink from "../../companents/Navlink";
import react5 from "../../assets/reactofive.jpg";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailIcon from "@mui/icons-material/Mail";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Modal from "@mui/material/Modal";
import lcm from "../../assets/lcm.jpg";

import Homeframe from "../Homeframe";

import hedxeb1 from "../../assets/xeberone.jpg";
import hedxeb2 from "../../assets/xebertwo.jpg";
import hedxeb3 from "../../assets/xeberthree.jpg";
import hedxeb4 from "../../assets/xeberfive.jpg";

import workone from "../../assets/headwork/workone.jpg";
import worktwo from "../../assets/headwork/worktwo.jpg";
import workthree from "../../assets/headwork/workthree.jpg";
import workfoor from "../../assets/headwork/workfoor.jpg";
import workfive from "../../assets/headwork/workfive.png";
import worksix from "../../assets/headwork/worksix.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import texnika1 from "../../assets/texnika1.png";
import texnika2 from "../../assets/texnika2.png";
import texnika3 from "../../assets/texnika3.png";
import texnika4 from "../../assets/texnika4.png";

import layh1 from "../../assets/servcsd1.jpg";
import layh2 from "../../assets/servcsd2.jpg";
import layh3 from "../../assets/servcsd3.jpg";
import layh4 from "../../assets/servcsd4.jpg";
import layh5 from "../../assets/servcsd5.jpg";
import layh6 from "../../assets/servcsd6.jpg";

import lahiye1 from "../../assets/lahiye1.jpg";
import lahiye2 from "../../assets/lahiye2.jpg";

import lahiye4 from "../../assets/lahiye4.jpg";

import sturc from "../../assets/struc2.jpg";

import construct3 from "../../assets/construct3.png";

import locantion from "../../assets/locantion.png";

import CategoryCard from "../../companents/Categorycard";

import HeadCategroy from "../../companents/Headcateg";

import Headtexnikcatg from "../../companents/Hedtexnik";

import Headxeb from "../../companents/Hedxeb";

import Headwroks from "../../companents/Headworksd";

import vecterone from "../../assets/vecterone.png";

const lahiye = [
  {
    id: 0,
    img: lahiye1,
    tittle: "Lorem ipsum",
  },
  {
    id: 1,
    img: lahiye2,
    tittle: "Lorem ipsum",
  },

  {
    id: 2,
    img: lahiye1,
    tittle: "Lorem ipsum",
  },
  {
    id: 3,
    img: lahiye4,
    tittle: "Lorem ipsum",
  },
];

const xidmet = [
  {
    id: 0,
    img: layh1,
    tittle: "Tikinti",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
  },
  {
    id: 1,
    img: layh2,
    tittle: "Restavrasiya",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
  },

  {
    id: 2,
    img: layh3,
    tittle: "Layihələndirmə",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
  },
  {
    id: 3,
    img: layh4,
    tittle: "Texnikanın icarəsi",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
  },
  {
    id: 4,
    img: layh5,
    tittle: "Təmir",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
  },
  {
    id: 5,
    img: layh6,
    tittle: "Eksteryer və Landşaft dizaynı",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
  },
];

const texnika = [
  {
    id: 0,
    img: texnika1,
    tittle: "Lorem ipsum",
  },
  {
    id: 1,
    img: texnika2,
    tittle: "Lorem ipsum",
  },

  {
    id: 2,
    img: texnika3,
    tittle: "Lorem ipsum",
  },
  {
    id: 3,
    img: texnika4,
    tittle: "Lorem ipsum",
  },
];

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
  {
    id: 4,
    img: hedxeb4,
    date: "05.02.22",
    tittle: "Lorem ipsum",
    text: "Lorem ipsum text husnmco mncs smdwick nfiefifisfheijefnwenfewnff",
  },
  {
    id: 5,
    img: hedxeb4,
    date: "05.02.22",
    tittle: "Lorem ipsum",
    text: "Lorem ipsum text husnmco mncs smdwick nfiefifisfheijefnwenfewnff",
  },
  {
    id: 6,
    img: hedxeb4,
    date: "05.02.22",
    tittle: "Lorem ipsum",
    text: "Lorem ipsum text husnmco mncs smdwick nfiefifisfheijefnwenfewnff",
  },
];

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

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const butonsOpen = () => setOpen(true);
  const butonsClose = () => setOpen(false);

  return (
    <>
      <PageContainer>
        <Box
          className="lormimg"
          sx={{
            background: ` linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.8) 0%
              ),url(${sturc})`,
            height: "460px",

            position: "relative",
          }}
        >
          <Typography
            className="lrmtxts"
            sx={{
              fontSize: "30px",
              color: "white",
              position: "absolute",
              top: "130px",
              left: "440px",
            }}
            textAlign="center"
          >
            LOREM IPSUM DOLOR SIT{" "}
          </Typography>

          <Typography
            className="lrmtxts2"
            sx={{
              fontSize: "20px",
              color: "white",
              position: "absolute",
              top: "230px",
              left: "140px",
            }}
            textAlign="center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non velit
            sem est ipsum leo consequat ornare. Justo sit lacus, risus dictum.
            Nisi, quis orci viverra at quam porttitor et. Eu cras imperdiet
            nisl, feugiat lectus mi.{" "}
          </Typography>

          <Button
            className="btnsals"
            sx={{
              border: "1px solid white",
              py: "2",
              color: "white",
              position: "absolute",
              top: "330px",
              left: "640px",
            }}
          >
            Ətrafli <ArrowRightAltIcon />{" "}
          </Button>
        </Box>

        <Stack sx={{ py: "10px" }}>
          <Container>
            <Stack className="twosd" flexDirection="row" gap="130px">
              <Box
                className="boxs1"
                sx={{
                  border: "1px solid black ",
                  height: "240px",
                  width: "1430px",
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
                    border: "1px solid black ",
                    height: "220px",
                    width: "300px",
                    left: "120px",
                    top: "100px",
                    position: "absolute",
                  }}
                ></Box>
              </Box>

              <Stack
                className="twodslorm"
                flexDirection="column"
                sx={{ marginLeft: "500px", marginTop: "50px" }}
                gap="15px"
              >
                <Typography>HAQQIMIZDA</Typography>
                <Box
                  sx={{
                    border: "1px solid black ",
                    width: "40px",
                    color: "rgba(176, 137, 104, 1)",
                  }}
                ></Box>
                <Typography className="archftext">
                  Archbaku MMC 25 sentyabr 2019 cu ildən təcrübəli mütəxəssis
                  heyəti ilə xidmət göstərən tikinti şirkətidir. İqtisadiyyatın
                  ən önəmli sahələrindən biri olan infrastruktur sektorunda daim
                  yeniliklərə, inkişafa önəm vermişik. Bizim ən önəmli
                  missiyamız yüksək keyfiyyətli tikinti və mühəndislik
                  təcrübəmizdən istifadə edərək ən son texnikalarla
                  müştərilərimizin etimadını qazanmaqdır.
                </Typography>
                <Link to="/about">
                  <Button
                    className="alsdxbtn"
                    sx={{
                      border: "1px solid white",
                      width: "100px",
                      background: "rgba(176, 137, 104, 1)",
                      color: "white",
                    }}
                  >
                    Ətrafli <ArrowRightAltIcon />{" "}
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Container>
        </Stack>

        <Box
          className="layhpht"
          sx={{
            backgroundImage: ` linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.8) 0%
            ),url(${construct3})`,
            height: "610px",
            position: "relative",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Typography
            padding="10px"
            sx={{
              color: "white",
              fontSize: "30px",

              marginTop: "100px",
              textAlign: "center",
            }}
          >
            LAYİHƏLƏR
          </Typography>
          <Box
            className="lmnsda"
            sx={{
              border: "2px solid rgba(176, 137, 104, 1) ",
              width: "40px",
              position: "absolute",
              top: "70px",
              left: "49%",
            }}
          ></Box>

          <Button
            className="layhbtnd"
            sx={{
              border: "1px solid white",
              py: "2",
              color: "white",
              position: "absolute",
              top: "30px",
              left: "92%",
            }}
          >
            Ətrafli <ArrowRightAltIcon />{" "}
          </Button>

          <Grid
            className="layhsbox"
            my={2}
            mb={5}
            container
            spacing={2}
            justifyContent="center"
          >
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
              {lahiye.map((texnika) => (
                <SwiperSlide>
                  <Grid key={texnika.id} item xs={12} sm={6} md={4} lg={3}>
                    <CategoryCard tittle={texnika.tittle} src={texnika.img} />
                  </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Box>

        <Box>
          <Container>
            <Typography
              variant="h3"
              className="xdimet"
              padding="10px"
              sx={{ fontSize: "30px", marginLeft: "130px", marginTop: "100px" }}
            >
              XİDMƏTLƏR
            </Typography>
            <Box
              sx={{
                border: "2px solid rgba(176, 137, 104, 1) ",
                width: "40px",
                marginLeft: "150px",
              }}
            ></Box>

            <Grid
              className="sevcbox"
              my={2}
              mb={3}
              container
              spacing={2}
              justifyContent="center"
            >
              {xidmet.map((texnika) => {
                return (
                  <Grid key={texnika.id} item xs={12} sm={4} md={4}>
                    <HeadCategroy
                      tittle={texnika.tittle}
                      text={texnika.text}
                      src={texnika.img}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>

        <Box
          className="backimgs"
          sx={{
            backgroundImage: ` linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.8) 0%
            ),url(${lcm})`,
            position: "relative",
            height: "500px",
          }}
        >
          <Stack flexDirection="column" alignItems="center">
            <Typography
              padding="10px"
              sx={{
                fontSize: "40px",
                marginLeft: "40px",
                top: "10px",
                color: "white",
              }}
            >
              Texnikalar
            </Typography>
            <Box
              sx={{
                border: "2px solid rgba(176, 137, 104, 1) ",
                top: "80px",
                width: "40px",
                marginLeft: "30px",
                position: "absolute",
              }}
            ></Box>

            <Modal
              sx={{ marginLeft: "500px", position: "absolute", top: "200px" }}
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{ background: "white" }}
                border="1px solid"
                width="600px"
                height="500px"
                textAlign="center"
              >
                <Stack flexDirection="column" gap="10px">
                  <Typography>Ekskavator JCB</Typography>

                  <Typography>İcarə qiymət:</Typography>

                  <Stack justifyContent="center" flexDirection="row" gap="10px">
                    <Typography color="#016B38;">250 AZN/Gün</Typography>
                    <Box
                      border="1px solid #BEBEBE"
                      width="1px"
                      height="24px"
                    ></Box>
                    <Typography color="#016B38;">İcarə qiymət:</Typography>
                  </Stack>

                  <Stack gap="10px">
                    <Typography variant="h5">
                      Sifariş üçün formu doldurun
                    </Typography>
                    <TextField
                      sx={{ margin: "auto" }}
                      style={{ width: "300px" }}
                      id="outlined-basic"
                      label="Adınız və Soyadınız*"
                      variant="outlined"
                    />
                    <TextField
                      sx={{ margin: "auto" }}
                      style={{ width: "300px" }}
                      id="outlined-basic"
                      label="Telefon nömrəsi*"
                      variant="outlined"
                    />
                    <TextField
                      sx={{ margin: "auto" }}
                      style={{ width: "300px" }}
                      id="outlined-basic"
                      label="Şirkətinizin adı"
                      variant="outlined"
                    />
                  </Stack>

                  <Button
                    sx={{
                      margin: "auto",
                      background: "#016B38",
                      color: "white",
                      width: "200px",
                    }}
                    onClick={() => setShowModal(true)}
                  >
                    Sifariş et <ArrowRightAltIcon />
                  </Button>
                </Stack>
              </Box>
            </Modal>

            {showModal && (
              <Modal
                open={open}
                onClose={butonsClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  padding="30px"
                  sx={{ background: "white", textAlign: "center" }}
                  border="1px solid"
                  width="700px"
                  height="500px"
                >
                  <img src={vecterone} alt="" />
                  <Typography variant="h5" margin="auto" width="365px">
                    Təşəkkür edirik! Sorğunuz qəbul edildi.
                  </Typography>
                  <Typography textAlign="center">
                    Ən qısa zaman ərzində sizinlə əlaqə saxlayacayıq.
                  </Typography>
                </Box>
              </Modal>
            )}
            <Button
              className="hamisi"
              sx={{
                color: "white;",
                position: "absolute",
                top: "430px",
                border: "1px solid",
                background: "rgba(176, 137, 104, 1)",
                margin: "auto",
              }}
            >
              Hamisi <ArrowRightAltIcon />{" "}
            </Button>
          </Stack>

          <Box>
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
              {texnika.map((texnika) => (
                <SwiperSlide className="boxtexnik">
                  <Grid
                    key={texnika.id}
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    onClick={handleOpen}
                  >
                    <Headtexnikcatg
                      tittle={texnika.tittle}
                      text={texnika.text}
                      src={texnika.img}
                    />
                  </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>

        <Box>
          <Container>
            <Typography
              className="xdimet"
              padding="10px"
              variant="h5"
              sx={{
                width: "40px",
                marginLeft: "540px",
              }}
            >
              XƏBƏRLƏR
            </Typography>
            <Box
              className="xeberlins"
              sx={{
                border: "2px solid rgba(176, 137, 104, 1) ",
                width: "40px",
                marginLeft: "570px",
              }}
            ></Box>
            <Box marginTop="30px">
              <Link style={{ color: "black" }} to="/xeber">
                <Swiper
                  spaceBetween={50}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
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
            </Box>

            <Button
              className="hmrsr"
              sx={{
                color: "white;",
                border: "1px solid",
                background: "rgba(176, 137, 104, 1)",
                margin: " 0 auto",
                marginTop: "10px",
                textAlign: "center",
                display: "flex",
              }}
            >
              Hamisi <ArrowRightAltIcon />{" "}
            </Button>
            {/* </Stack> */}
          </Container>
        </Box>

        <Box className="workssdpersonsd">
          <Container>
            <Stack flexDirection="column" marginLeft="350px">
              <Typography
                variant="h3"
                className="emekdas"
                padding="10px"
                sx={{
                  fontSize: "30px",
                  marginLeft: "130px",
                  marginTop: "100px",
                }}
              >
                ƏMƏKDAŞLAR
              </Typography>
              <Box
                className="ldnsemek"
                sx={{
                  border: "2px solid rgba(176, 137, 104, 1) ",
                  width: "40px",
                  marginLeft: "240px",
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

        <Box sx={{ background: "#F6F6F6;" }} marginTop="30px">
          <Container>
            <Typography
              padding="10px"
              sx={{ fontSize: "30px", marginLeft: "10px", marginTop: "300px" }}
            >
              Əlaqə
            </Typography>
            <Box
              sx={{
                border: "2px solid rgba(176, 137, 104, 1) ",
                width: "40px",
                marginLeft: "20px",
              }}
            ></Box>
            <Stack
              className="contactscolmn"
              padding="30px"
              flexDirection="row"
              marginTop="20px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack flexDirection="column" gap="10px" marginTop="20px">
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

              <Box
                className="line"
                border="1px solid #DFDBDB"
                width="1px"
                height="267px"
              ></Box>

              <Stack gap="40px">
                <Typography className="ques" variant="h4">
                  Suallarınız var?
                </Typography>
                <Stack
                  flexDirection="row "
                  className="questnt"
                  alignItems="center"
                  gap="40px"
                >
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
        </Box>

        <Box>
          <img
            className="locphoto"
            style={{ width: "100%" }}
            src={locantion}
            alt=""
          />
        </Box>
      </PageContainer>
    </>
  );
};
export default Home;
