const getUser = (req,res)=>{
    res.json({
        "message": "landingpage"
    })
}

const postUser = (req,res)=>{
    res.json({
        "message": "post api"
    })
}

const deleteUser =  (req,res)=>{
    res.json({
        "message": "delete api"
    })
};

const updateUser = (req,res)=>{
    res.json({
        "message": "put api"
    })
};

const patchUser = (req,res)=>{
    res.json({
        "message": "patch api"
    })
}

module.exports = {
    getUser,
    postUser,
    deleteUser,
    updateUser,
    patchUser
}