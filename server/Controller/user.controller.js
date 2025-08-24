const userSignup = async function (req,res) {
    console.log(req.body.data);
    
    res.status(400).json({message:"user created successfully" , success:true})
}



export {
    userSignup,
    
}