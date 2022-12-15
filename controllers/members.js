import { Members } from "../models/members.js";


export const create = async (req, res) => {
    //console.log(req.body)
    try {
        const newMember = await Members(req.body).save();
        res.status(201).json(newMember)
        
    } catch (err) {
        res.status(400).json({
            err: err.message,
            code: err.code,
        });
    }
}

export const getAll = async (req, res) => {
    //console.log(req.query);
    try {
        const listMember = await Members.find()
        res.status(200).json(listMember)
        
    } catch (err) {
        res.status(400).json({
            err: err.message,
            code: err.code,
        });
    }
}
export const findByTitle = async (req, res) => {
    //console.log('query',req.query.name);

    try {
        const regex = new RegExp('^'+req.query.name,'i')
        const findByTitle = await Members.find({name:{$regex:regex}})
        //const findByTitle = await Member.find({name: req.query.name})
        res.status(200).json(findByTitle)
        
    } catch (err) {
        res.status(400).json({
            err: err.message,
            code: err.code,
        });
    }
} 
//const findByTitle = await Member.find({name: req.query.name})

export const read = async(req, res) => {
    try {
        const read = await Members.findOne({
            _id: req.params.id,
        })
        res.status(200).json(read)
    } catch (err) {
        res.status(400).json({
            err: err.message,
            code: err.code,
        });
    }
}

export const update = async (req, res) => {
    console.log(req.body)
    try {
        const updatedCard = await Members.findByIdAndUpdate(
            {_id: req.params.id},
            req.body,
            {new:true}
        );
        res.status(200).json(updatedCard)
        
    } catch (err) {
        res.status(400).json({
            err: err.message,
            code: err.code,
        });
    }
}

export const remove = async (req, res) => {
    console.log('req params',req.params);
    console.log('req body',req.body);
    console.log('req query',req.query);
    try {
        const deletedMember = await Members.findOneAndRemove({_id: req.params.id})
        res.status(200).json(deletedMember)
        
    } catch (err) {
        res.status(400).json({
            err: err.message,
            code: err.code,
        });
    }
}

export const removeAll = async (req, res) =>{
    try {
        const removeAll = await Members.deleteMany()
        res.status(200).json(removeAll)
        
    } catch (err) {
        res.status(400).json({
            err: err.message,
            code: err.code,
        });
    }
}

