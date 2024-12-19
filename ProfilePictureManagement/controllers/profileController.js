import { ProfilePicture } from "../models/profileSchema.js";


export const uploadProfilePicture = async (req, res) => {
    try {
        const { userId, visibility, connections} = req.body;

        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded"
            });
        }

        const newProfilePicture = new ProfilePicture({
            userId,
            filename: req.file.filename,
            visibility,
            connections: visibility === 'connections' ? JSON.parse(connections) : [],
        });

        await newProfilePicture.save();

        res.status(201).json({
            message: "Profile picture uploaded successfully",
            profilePicture: newProfilePicture
        });
    } catch (e) {
        res.status(500).json({
            message: "Failed to upload profile picture"
        });
    }
};

export const updateProfilePicture=async (req,res) => {
    try{
    const pictureId = req.params.id; 
    const visibility = req.body.visibility; // 'public', 'private', 'connections' 
    const picture = await ProfilePicture.findById(pictureId); 
    if (picture) { 
        picture.visibility = visibility; 
    res.status(200).json({ message: 'Visibility updated successfully', picture }); 
   } 
    else { res.status(404).json({ message: 'Profile picture not found' }); }
    }catch(e){
        res.status(500).json({ message: 'Failed to update visibility' });
    }
}