const asyncHandler =(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(rea,res,next))
        .catch((err)=>next (err))
    }

}

export {asyncHandler}

// const asyncHandler = ()=>{}I
// const asyncHandler = (func)=> async () =>{}
// const asyncHandler = (fn)=>()=>{}



// *****************************   2nd method *****************************

//  const asyncHandler = (func)=> async (req,res,next) =>{
//     try{
//         await func(req, res,next)

//     }catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })

//     }
//  }