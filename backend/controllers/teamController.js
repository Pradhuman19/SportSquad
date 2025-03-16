import TryCatch from "../utils/TryCatch.js";
import { Team } from "../models/teamModel.js";
import { Event } from "../models/eventModel.js";

export const createTeam = TryCatch(async(req,res)=>{
    const {name, members} = req.body;
    
    const event = await Event.findById(req.params.id);

    if (!event) return res.status(404).json({ msg: "Event not found." });

    const team = await Team.create({
        name,
        members,
        leader: req.user._id,
        registeredEvent: req.params.id,
    });

    event.participants.push(team._id);
    await event.save();

    res.json({msg: "Team created successfully" });

});

export const getSingleTeam = TryCatch(async(req,res)=>{ 
    const team = await Team.findById(req.params.id);
    res.json(team);
});