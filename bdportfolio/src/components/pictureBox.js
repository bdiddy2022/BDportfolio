import { Box } from "@mui/material";

export const PictureBox = () => {
    return (
        <Box sx={
            {
                width: 400,
                height: 'fit-content',
                border: 4,
                borderColor: '#ff4081',
                backgroundColor: "primary.dark",
                borderRadius: 4,
                p: 1,
                margin: 2,
                alignContent: 'center',
                mt: 6,
                mb: 5

            }
        }>
            <img src={require('../ProfessionalHeadshot.jpg')}/>
          
        </Box>
    );
}

export default PictureBox;