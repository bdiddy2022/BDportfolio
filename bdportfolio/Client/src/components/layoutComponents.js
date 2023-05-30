import { Box, Typography, Divider} from "@mui/material";

const skillSet = ["Skillset", "I am a results-oriented junior web developer with an approach that oscillates somewhere between fascination and excitement. My base skillset is built on JavaScript (Angular), Java (Springboot/Thymeleaf), and SQL (MySQL), and has since expanded to include React and MongoDB"];
const backgroundAndExperience = ["Background & Experience", `I studied Marine Engineering in college, and - after taking a hiatus to attend to my health - graduated with a bachelors degree in Facilities Engineering, my proudest achievement. I ran the gamut of engineering work, from shipboard generator swaps in Boston Harbor to working as a member of the design team for a multi-state project to bring high speed internet to underserved rural populations.`, `The skills that I developed during those years have turned out to be highly transferable to my new career path, and the persistence that I developed during my hiatus has been even more so`];



export const infoBox = (heading, info, boxWidth) => {

    return (
        <Box sx={
            {
                width: boxWidth,
                height: 'fit-content',
                border: 4,
                borderColor: '#ff4081',
                backgroundColor: "primary.dark",
                borderRadius: 3,
                padding: 2,
                margin: 3,
                textAlign: 'right'

            }
        }>
            <Typography variant="h3" color="background.paper" sx={{ p: 1, backgroundColor: '#ff4081', borderRadius: 3, width: 'max' }}>{heading}</Typography>
            <Divider sx={{ padding: 1, marginBottom: 2 }} />

            <Typography variant="h5" color="background.paper" >{info}</Typography>


        </Box>
    );
}

export const SkillsBox = () => {
    return infoBox(skillSet[0], skillSet[1], 350);
}

export const BackExperienceBox = () => {
    return infoBox(backgroundAndExperience[0], backgroundAndExperience[1] + backgroundAndExperience[2], 800);
}


export default {
    SkillsBox,
    BackExperienceBox,
};