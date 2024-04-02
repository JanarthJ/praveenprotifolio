import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Img1 from '../../assets/slider1.JPG'
import Img2 from '../../assets/slider2.JPG';
import Img3 from '../../assets/slider3.JPG';
import Img4 from '../../assets/slider4.JPG';
import Img5 from '../../assets/slider5.JPG';
import Img6 from '../../assets/slider6.JPG';
// import Img7 from '../../assets/slider7.JPG';
import Img8 from '../../assets/slider8.JPG';
import Img9 from '../../assets/slider9.jpg';
import Img10 from '../../assets/slider10.jpg';
import Img11 from '../../assets/slider11.jpg';
import Img12 from '../../assets/slider12.jpg';
import Img13 from '../../assets/slider13.jpg';
import Img14 from '../../assets/slider14.jpg';
// import Img15 from '../../assets/slider15.jpg';
// import Img16 from '../../assets/slider16.jpg';
import Img17 from '../../assets/slider17.JPG';
import Img18 from '../../assets/slider18.JPG';
import Img19 from '../../assets/slider19.JPG';
import Img20 from '../../assets/slider20.JPG';


import "./slider.css";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: Img1,
  },
  {
    label: 'Bird',
    imgPath:
      Img2,
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
     Img3,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      Img4,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      Img5,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      Img6,
  },
  {
    // label: 'Goč, Serbia',
    // imgPath:
    //   Img7,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      Img8,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      Img9,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      Img10,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      Img11,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      Img12,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      Img13,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      Img14,
  },
  // {
  //   label: 'Goč, Serbia',
  //   imgPath:
  //     Img15,
  // },
  // {
  //   label: 'Goč, Serbia',
  //   imgPath:
  //     Img16,
  // },
  {
    label: 'Goč, Serbia',
    imgPath:
      Img17,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      Img18,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      Img19,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      Img20,
  },
];

function Imgslider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className='slidermainDiv'>
      <div className='sliderMainHeading'> Photography</div>
    <Box sx={{ maxWidth: '100%', flexGrow: 1, margin:'auto' }}>
      <Paper
        
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'black',
          color:'white'
        }}
      >
        <Typography>
          {images[activeStep].label}
          {" "} <u>View More</u>
        </Typography>
        
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  // height: '50%',
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper 
        style={{backgroundColor:'black', color:'white'}}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            style={{color:'white'}}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} style={{color:'white'}}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    </div>
  );
}

export default Imgslider;
