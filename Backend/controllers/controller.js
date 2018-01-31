
//importing the user model from the models
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var express= require('express');
var app=express();
app.set('superSecret','react-token-demo');
var bcrypt=require('bcrypt');
var request=require('request');
var atob = require('atob');
//var jwtDecode = require('jwt-decode');

exports.createUser=(request,response)=>{
    if(!request.body.email)
        response.json({
            message: "Please provide your email"
        })
    if(request.body.email)
    {
    var user=new User({
        userName: request.body.name,
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: request.body.password,
    });
    var salt = bcrypt.genSaltSync(10);
    var hash=bcrypt.hashSync(user.password,salt);
    user.password=hash;
    user.image='user.png';
    user.save((err,res)=>{
        if(err)
        {
            response.json({
                success: false,
                error:err,
                message: "Registration Failed!!!Please enter your correct credentials"
            })
        }
        else{
            response.json({
                success: true,
                data: res
            })
        }
    })
}
}


//requesting for authenticate the user requesting for the login access in the website
exports.authenticateUser=(req,res)=>{
    if(!req.body.email&&!req.body.password)
        res.json({
            message: 'Please provide your email && password'
        })
    if(req.body.email===''&&req.body.password==='')
    res.json({
        message: "Email & Password can't be empty"
    })
    if(req.body.email&&req.body.password)
    {
    User.findOne({email:req.body.email},(err,user)=>{
        if(err)
        {
            res.json({
                status: 'empty',
                error: "404 Page Not Found"
            })
        }
        if(!user){
            res.json({
                success:false,
                message:'Authentication failed. User not found' 
            })
        }
        else if(user){
            var result=bcrypt.compareSync(user.password,req.body.password);
            //check if password matches
            if(!bcrypt.compareSync(req.body.password,user.password)){
                var result=bcrypt.compareSync(user.password,req.body.password);
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong Password.'
                })
            }else{
                // if user is found and password is right
                 // create a token with only our given payload
                 // we don't want to pass in the entire user since that has the password
                 const payload ={
                     email: user.email,
                     password: user.password
                 };
                 var token=jwt.sign(payload,app.get('superSecret'),{
                     expiresIn: 3600 //expires in 1 hours
                 })

                 //return the information including token as JSON
                 res.json({
                     success: true,
                     data: user,
                     token: token
                 });
            }
        }
    })
}
else
{
    res.json({
        message: "please provide correct input"
    })
}

}


exports.uploadUserImage=(req,res)=>{
    if(req.body.email===''&&req.body.image==='')
        res.json({
            message: "Please provide complete information"
        })
    if(!req.body.email&&!req.body.image)
        res.json({
            message: "please give your correct input!!!"
        })
    if(req.body.email&&req.body.image)
    {
        User.findOne({email:req.body.email},(err,user)=>{
        if(err)
        {
            res.json({
                status:false,
                message: 'Image upload is failed for some reasons!!!'
            })
        }
        if(user){
            var userImage=user.image;
            console.log(userImage);
            var FileSystem=require('fs');
                console.log("uploaded image");
                let image=req.body.image;
                let imageGroup=req.body.email;

                //regex for checking the valid image
                var matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
                response = {};  //an empty response

                //validating the image
                if(matches.length !==3)
                return new Error("invalid image!!! Please try again");

                response.type =matches[1];
                console.log(matches[1]+" match 1");

                response.data=new Buffer(matches[2],'base64');


                var data=ValidImageExtension(image);

                function ValidImageExtension(data)
                {
                var imageName = imageGroup;
                if (data.indexOf('image/jpeg') > -1) {
                    return imageName + '.jpeg';
                }
                if (data.indexOf('image/png') > -1) {
                    return imageName + '.png';
                }
                if (data.indexOf('image/gif') > -1) {
                    return imageName + '.gif';
                }
                }

                //saving the image valid path. provide the path here.
                var imageName = './userImages' + '/' + data;

                console.log(imageName);

                //saving the image in the vaid path in the folder
                FileSystem.writeFile(imageName, response.data, function (error) {
                    // console.log(response.data);
                    if (error) {
                        res.json({
                            status:false,
                            message: error
                        })
                    }
                })
                User.findOneAndUpdate({email: req.body.email},{$set:{
                    image: data
                }},{new:true},(err,image)=>{
                    if(err){
                        res.json({
                            status: false,
                            message: 'updation failed!!!'
                        });
                    }
                    if(image)
                    {
                        res.json({
                            status:true,
                            message: 'Updated Successfully',
                            data:image
                        })
                    }

                })
                // var userData=updateImage.updateUserImage(data,req.body.email);
                //     res.json({
                //         status:true,
                //         data: user
                //     })
                    }
                })
            }
}


//updating the user data or informations
exports.updateUserDetails =(req,res)=>
{
    var token=req.headers['x-access-token'];
    const base64Url = token.split('.')[1];
    var tokenData = atob(base64Url);
    var userEmail=JSON.parse(tokenData).email;
    var userPassword=JSON.parse(tokenData).password;
    console.log("user"+userEmail)
    if(!req.body.name&&!req.body.password)
        res.json({
            message: "Please enter the complete information"
        })
    if(req.body.name&&req.body.password)
    {
        var updatedUserName    =req.body.name;
        var updatedFirstName   = req.body.firstName;
        var updatedLastName    = req.body.lastName;
        var updatedPassword =req.body.password;
        if(userPassword===updatedPassword)
        {
            console.log('inside the equals password');
            var updatedPasswordHash=userPassword;
        }
        if(userPassword!==updatedPassword)
        {
            console.log('not equals password');
            var salt = bcrypt.genSaltSync(10);
            var updatedPasswordHash=bcrypt.hashSync(updatedPassword,salt);
        }    
     User.findOneAndUpdate({email:userEmail},{$set:{
                userName:updatedUserName,
                firstName: updatedFirstName,
                lastName: updatedLastName,
                password:updatedPasswordHash,
            }},{new: true},(err,response)=>{
            if(err){
                res.json({
                    status: false,
                    message: 'updation failed!!!'
                });
            }
            if(response)
            {
                res.json({
                    status:true,
                    message: 'Updated Successfully',
                    data:response
                })
            }
        });
    }
}