import TryCatch from "../utils/TryCatch.js";
import getDataUrl from "../utils/urlGenerator.js";
import cloudinary from "cloudinary";
import {Event} from "../models/eventModel.js";

export const createanEvent = TryCatch(async (req, res) => {
    const { title, description } = req.body;
     
    const file = req.file;
    const fileUrl = getDataUrl(file);
    
    const cloud = await cloudinary.v2.uploader.upload(fileUrl.content);
    
    if (!file) return res.status(400).json({ msg: "Image file is required." });

    await Event.create({
        title,
        description,
        image: {
            id: cloud.public_id,
            url: cloud.secure_url,
        },
        owner: req.user._id,
    });

    res.json({msg: "Event created successfully" });
});

export const getAllEvents = TryCatch(async(req,res)=>{
    const events = await Event.find().sort({createdAt: -1})

    res.json(events);
});

export const getSingleEvent = TryCatch(async(req,res)=>{
    const event = await Event.findById(req.params.id).populate("owner", "-password").populate("participants");

    res.json(event);
})

export const deleteEvent = TryCatch(async(req,res)=>{
   const event = await Event.findById(req.params.id);
   if(!event) return res.status(404).json({msg: "Event not found."});
   if(req.user._id.toString() !== event.owner.toString()) return res.status(403).json(
    {msg: "You are not authorized to delete this event."}
);
    await cloudinary.v2.uploader.destroy(event.image.id);

    await event.deleteOne();

    res.json({msg: "Event deleted successfully" });
});