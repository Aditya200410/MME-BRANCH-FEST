import React, { useRef } from "react";
import { Stack, Button, Typography } from "@mui/material";
import Domain from "../components/Domain";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import { motion, AnimatePresence } from 'framer-motion';


function Home() {

  const land = useRef(null);
  const about = useRef(null);
  const domain = useRef(null);
  const contact = useRef(null);

  const ScrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const ScrollLand = () => {
    ScrollToRef(land);
  };

  const ScrollAbout = () => {
    ScrollToRef(about);
  };

  const ScrollDomain = () => {
    ScrollToRef(domain);
  };

  const ScrollContact = () => {
    ScrollToRef(contact);
  };

  return (
    <>
      <Stack sx={{ background: "#333333" }}>
        <Navbar
          onClick1={ScrollLand}
          onClick2={ScrollAbout}
          onClick3={ScrollDomain}
          onClick4={ScrollContact}
        />
        <Stack ref={land} sx={{background:`url(./a.jpeg)`,
      display: "flex",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100vw",
      }} >
          <Landing scrollToAbout={ScrollAbout} />
        </Stack>
        <Stack
          gap={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "6rem",
            paddingBottom: "6rem",
          }}
        >
          {/* about us.............. */}
          <Stack
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              ref={about}
              gap={2}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                color: "whitesmoke",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                border: "2px double white",
                padding: { xs: "20px 10px", sm: "30px 15px", md: "25px 30px" },
                borderRadius: "12px",
                background: "#0000007f",
              }}
            >
              <Stack
                sx={{
                  background: `url(./f.png)`,
                  height: { xs: "25rem", md: "300px" },
                  display: "flex",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  zIndex: "1",
                  width: { xs: "25rem", md: "350px" },
                }}
              ></Stack>
              <Stack
                gap={2}
                sx={{
                  flex: "3",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: "9",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "3.75rem", md: "50px" },
                    fontWeight: "bolder",
                    textAlign: "center",
                    width: "100%",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  MME Branch Farewell 2024
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "18px" },
                    fontWeight: "200",
                    textAlign: "center",
                    lineHeight: { md: "2" },
                    width: "100%",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  As we part ways, we know you carry our dreams,
To lands yet uncharted, where hope brightly gleams.
May success be your compass, happiness your guide,
And fulfill your companion, by your side'

Farewell is a bittersweet melody where the echoes of laughter and love remain, binding hearts across time and space. The department of Metallurgical and Materials Engineering presents you Dastaan ,a symphony of endings and new beginnings.
                  
                   </Typography>
                <Stack
                  gap={4}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                 <motion.button className="getstarted" whileHover={{ scale: 1 }} >
            <a href="https://forms.gle/ixFQBsAnhDuoBXDLA">REGISTER NOW</a>
          </motion.button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            ref={domain}
          >
             <Typography sx={{color:"white", fontSize:"5rem", borderBottom:"3px solid white", marginBottom:"20px", display:"flex", justifyContent: "center", fontWeight:"700", textAlign: "center"
            }}>
              Fixtures Of Functions
 </Typography>
 <Stack sx={{ width: { xs: "336px", md: "500px" }, height:"700px",display:"flex", justifyContent:"center", alignItems:"center" , borderRadius:"50px"}}>
  <Stack sx={{background: `url(./fixture.jpg)`, width:"100%", height:"100%", backgroundSize: "contain", backgroundRepeat:"no-repeat" , backgroundPosition:"center", borderRadius:"60px",}}>
  </Stack>
  
 
 </Stack>
 <Typography sx={{color:"white", fontSize:"5rem", borderBottom:"3px solid white", marginBottom:"20px", display:"flex", justifyContent: "center", fontWeight:"700", textAlign: "center"
            }}>
              Events
 </Typography>
            <Domain />
          </Stack>
          <Stack
            ref={contact}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Contact />
          </Stack>
        </Stack>
        <Stack width={"100%"}>
          <Footer />
        </Stack>
      </Stack>
    </>
  );
}

export default Home;
