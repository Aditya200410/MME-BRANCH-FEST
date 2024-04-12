import React from 'react';
import { Stack, Typography, Box, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {

    const post_holder = [
        { pic: "./dinesh.jpg", title: '	Dr. Dinesh Kumar Mishra', post: "Assistant Professor", club: "METALLURGICAL & MATERIALS ENGINEERING", Phno: "+91-8763457107", email: "dkmishra_mme@vssut.ac.in" },
        { pic: "./manila.jpg", title: '	Dr. Manila Mallik', post: "Assistant Professor", club: "METALLURGICAL & MATERIALS ENGINEERING", Phno: "+91-9437261616" },
        { pic: "./gourahari.png", title: 'GOURAHARI SIR', post: "Assistant Professor", club: "METALLURGICAL & MATERIALS ENGINEERING", Phno: "+91-9559795599" },
        { pic: "./nilakantha.jpg", title: 'Mr. Nilakantha Sahu', post: "Assistant Professor", club: "METALLURGICAL & MATERIALS ENGINEERING", Phno: "+91 7894004383" },
        { pic: "./renu.jpg", title: 'Dr. Renu Prava Dalai', post: "Assistant Professor", club: "METALLURGICAL & MATERIALS ENGINEERING", Phno: "+91 94395 77301", },
        { pic: "./subhadra.jpg", title: 'Ms. Subhadra Sahoo', post: "Assistant Professor", club: "METALLURGICAL & MATERIALS ENGINEERING", Phno: "",  },
   
    ];

    const post = [
         ]

    const createBox = (pic, title, post, club, Phno, email) => (
        <Box
            sx={{
                width: { xs: '25rem', md: '21.875rem' },
                padding: "1.5rem 1.125rem",
                border: '.0625rem solid #010e16',
                boxShadow: '0 .625rem 2.1875rem #010e16',
                borderRadius: '.625rem',
                textAlign: 'center',
                color: '#fff',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                
                '&:hover': {
                    transform: "scale(1.05)",
                }
            }}
        >
            <Stack
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: "0.5rem",
                    flex: '1',
                    objectFit: 'fill',
                }}
            >
                <img src={pic} alt='pictures' style={{ width: "7rem", height: '7rem', borderRadius: "50%", objectFit: "fill" }} />
            </Stack>
            <Stack
            gap={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '2',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: '.125rem', sm: '.375rem' },
                    textAlign: 'center',
                    zIndex: '9',
                    background: 'transparent',
                    padding: '1rem',
                    height: "9.375rem",
                    color: 'whitewhite'
                }}>
                <Typography variant="h4" sx={{ fontWeight: 'bolder', color: 'white', fontSize: { xs: "1.875rem", md: '1.375rem' }, fontFamily: 'Poppins, sans-serif' }} >{title}</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'lighter', color: 'white', fontSize: { xs: "1.25rem", md: '1rem' }, fontFamily: 'Poppins, sans-serif' }}>{post}</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'lighter', color: 'white', fontSize: { xs: "1.25rem", md: '1rem' }, fontFamily: 'Poppins, sans-serif' }}>{club}</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'lighter', color: 'white', fontSize: { xs: "1.25rem", md: '1rem' }, fontFamily: 'Poppins, sans-serif' }} >Phone No. : {Phno}</Typography>
               
            </Stack>
        </Box >
    );

    return (
        <>
            <Stack
                gap={4}
                sx={{
                    width: "90%",
                    borderRadius: '.625rem',
                    textAlign: 'center',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >
                <Typography variant='h3' sx={{
                    fontSize: { xs: '3.75rem', md: '50px' },
                    fontWeight: 'bolder',
                    textAlign: 'center',
                    width: '100%',
                    fontFamily: 'Poppins, sans-serif',
                    paddingBottom: '1rem',
                    borderBottom: '2px solid white'
                }}>
                    Contact Us
                </Typography>
                <Stack gap={6} sx={{ width: '100%', display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: { xs: "1.25rem", md: '1.125rem' } }}>Branch Faculty OF METALLURGICAL & MATERIALS ENGINEERING :</Typography>
                    <Stack gap={6} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                        {post_holder.map(contact => createBox(contact.pic, contact.title, contact.post, contact.club, contact.Phno, contact.email, contact.link))}
                    </Stack>
                </Stack>
                
            </Stack >

        </>
    );
};

export default Contact;
