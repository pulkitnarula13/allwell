const { FamilyMember } = require("../models/familyMember");
// const { Address } = require("../models/address");
const { Patient } = require("../models/patient");

const upload = require("../utils/upload");
const ROLE = require("../config/roles");

/**
 * @description API to add family member to database
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
const addFamilyMember = async (req, res) => {
    try {
        const data = req.body;
  
        // const uploadMemberImage = await upload(
        //     `${Date.now() + "" + data.name}`,
        //     data.familyMemberImage,
        //     "jpg",
        //     "patient",
        //     data.patient
        //   );
  
        const memberData = await FamilyMember.create({
            name: data.name,
            email: data.email.toLowerCase(),
            dob: data.dob,
            healthNumber: data.msp,
            relationship: data.relationship,
            profilePicture: ''

        });

        console.log(memberData);
    
        return res.status(201).json({
            message: "Family member created succesfully",
            data: memberData,
        });
    } 

    catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: error.message,
        });

    }
};
  

/**
 * @description API to update family member in database
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
const updateFamilyMember = (req, res) => {
    const id = req.params.id;

    FamilyMember.findOneAndUpdate({ _id: id }, req.body, {
        returnOrignal: false,
        }).then((result) => {
            res.status(200).json({
            message: "Succesfully updated the family member",
            data: result,
        });
    });
};



/**
 * @description API to get all family members from the database
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
const getAllFamilyMembers = (req, res) => {
    const id = req.params.id;

    FamilyMember.find()
    // .populate({
    //   path: "patient",
    // })
    .then((result) => {
        return res.status(200).json({
            message: `Family member found succesfully`,
            data: result,
        });
    })
    .catch((error) => {
        return res.status(404).json({
            message: error.message,
        });
    });
};


/**
 * @description API to get a family member by id
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
const getFamilyMemberById = (req, res) => {
    const id = req.params.id;

    FamilyMember.findById(id)
    .then((result) => {
        return res.status(200).json({
            message: `Family member found succesfully`,
            data: result,
        });
    })
    .catch((error) => {
        return res.status(404).json({
            message: error.message,
        });
    });
};

/**
 * @description API to get all family members of a patient
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
const getMembersByPatient = (req, res) => {
    FamilyMember.find({ creatorPatient: req.params.id }).populate({
      path: "patient"
    })
    .then((result) => {
        return res.status(200).json({
            message: "Succesfully fetched all family members of given patient",
            data: result,
        });
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message,
        });
    });
};

/**
 * @description API to delete a family member by id
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
const deleteFamilyMember = (req, res) => {
    const id = req.params.id;
    FamilyMember.findByIdAndDelete(id)
    .then((result) => {
        return res.status(200).json({
            message: "Family member succesfully deleted",
        });
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message,
        });
    });
};

module.exports = {
  addFamilyMember,
  updateFamilyMember,
  deleteFamilyMember,
  getMembersByPatient,
  getFamilyMemberById,
  getAllFamilyMembers,
};
