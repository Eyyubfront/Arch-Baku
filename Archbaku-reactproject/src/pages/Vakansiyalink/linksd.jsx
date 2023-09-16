import PageContainer from "../../companents/Pagecontainer"
import { Box,Button,Stack,TextField,Typography ,MenuItem} from "@mui/material"
import aboutphoto from "../../assets/abts.jpg"

import NavLink from "../../companents/Navlink";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
const curiens=[
  {
    id:0,
    md:"Kisi"
  },
  {
    id:1,
    md:"Qadin"
  }
]

const curieswork=[

  {
    id:0,
    mn:"10il"
  }
  ,
  {
    id:1,
    mn:"5il"
  },
  {
    id:2,
    mn:"15il"
  },
  {
    id:3,
    mn:"25il"
  },
  {
    id:4,
    mn:"23il"
  },


]


const Vakansiyalink=()=>{
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



    <Box marginLeft="50px" marginTop="50px">
      <Typography className="construc" variant="h5" color=" #016B38;">
      Mühəndis
      </Typography>

      <Stack className="singtext" marginTop="20px" flexDirection="row" gap="40px">

      <Stack flexDirection="column">
        <Typography>
        Elanın verilmə tarixi: 10.03.2022
        </Typography>
        <Typography>
        Elanın bitmə tarixi: 10.04.2022
        </Typography>
      </Stack>



      <Stack flexDirection="column">
        <Typography>
        Əmək haqqı: Müsahibə əsasında
        </Typography>
        <Typography>
        Yaş həddi: 20-45
        </Typography>
      </Stack>


      <Stack flexDirection="column">
        <Typography>
        Təhsil:
        </Typography>
        <Typography>
        İş təcrübəsi:
        </Typography>
      </Stack>

      </Stack>






    </Box>

    <Box className="singtowslink" padding="40px" marginTop="100px" sx={{background:" #F6F6F6;"}}>
      <Typography className="melumat" variant="h4">
      Məlumatlar
      </Typography>

      <Box className="singlines" marginTop="40px" width="750px" border="1px solid  #DDD;"></Box>


<Box  className="sgsbox"  borderRadius="8px"  marginTop="50px" border="1px solid #DDD" width= "741px" 
height= "411px" padding="70px">
<Stack className="singbtns1" flexDirection="row" gap="20px">

  <Stack >
    <Typography>
    Adınız*
    </Typography>
    <TextField
   
                      style={{ width: "300px" }}
                      id="outlined-basic"
                    
                      variant="outlined"
                    />
  </Stack>


  <Stack>
    <Typography>
    Soyadınız*
    </Typography>
    <TextField
                      style={{ width: "300px" }}
                      id="outlined-basic"
                     
                      variant="outlined"
                    />
  </Stack>
</Stack>

<Stack className="singbtns1" justifyContent="center" flexDirection="row" gap="40px" marginTop="20px">


<TextField
 className="txtsdpbox"
          id="filled-select-currency"
          select
          label="Cinsiniz*"
          defaultValue="EUR"
          sx={{width:"200px"}}
          variant="filled"
        >
          {curiens.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.md}
            </MenuItem>
          ))}
        </TextField>

        
    
  
 
        <TextField
         className="txtsdpbox"
          id="filled-select-currency"
          select
          label="İş təcrübəsi**"
          defaultValue="EUR"
          sx={{width:"200px"}}
          variant="filled"
        >
          { curieswork  .map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.mn}
            </MenuItem>
          ))}
        </TextField>

</Stack>


<Stack className="singbtns1" marginTop="20px" flexDirection="row" gap="20px">

  <Stack>
    <Typography>
    Telefon*
    </Typography>
    <TextField
                      style={{ width: "300px" }}
                      id="outlined-basic"
                 
                      variant="outlined"
                    />
  </Stack>


  <Stack>
    <Typography>
    Email*
    </Typography>
    <TextField
                      style={{ width: "300px" }}
                      id="outlined-basic"
                  
                      variant="outlined"
                    />
  </Stack>
</Stack>





</Box>



<Stack className="cvd" padding="30px" flexDirection="column" gap="10px">
  <Typography className="cvtext">
    CV
  </Typography>
  <Button className="fayls" variant="outlined"sx={{width:"400px",height:"100px"}} > <CloudDownloadIcon/>Fayl yukle</Button>
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
               Göndər<ArrowRightAltIcon />{" "}
                  </Button>
</Stack>

    </Box>

        </PageContainer>
        
        
        </>
    )
}

export default Vakansiyalink