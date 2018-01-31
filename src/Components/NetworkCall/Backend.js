const url='http://192.168.12.73:3001/api/';
   export async function saveUserData(userInfo)
    {
        console.log(userInfo);
        let userName=userInfo.userName;
        let userFirstName=userInfo.firstName;
        let userLastName=userInfo.lastName;
        let userEmail=userInfo.email;
        let userPassword=userInfo.password;
        console.log(userName,userFirstName,userLastName,userEmail,userPassword);
        var postUrl=url+'v1/user/createUser';
        console.log(postUrl);
        try {
            let response=await fetch(postUrl,{
                method: 'POST',
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: userName,
                    firstName: userFirstName,
                    lastName: userLastName,
                    email: userEmail,
                    password: userPassword
                })
            });
            return response.json();
        } catch (error) {
            return error;
        }
    }

    export async function authenticateUser(email,password)
    {
      //  console.log(userInfo);
      console.log("Email"+email);
      console.log("password"+password);
        var postUrl=url+'v1/user/authenticateUser';
        console.log(postUrl);
        try{
            let response=await fetch(postUrl,{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            return response.json();
        }
        catch(error){
            return error;
        }
    }

    export async function updateUserInfo(name,password,token)
    {
        console.log(token);
        console.log("inside the update user info");
        var postUrl=url+'v1/user/updateUserInfo';
        console.log(postUrl);
        try {
            let response=await fetch(postUrl,{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
                body: JSON.stringify({
                    name: name,
                    password: password
                })
            });
            return response.json();
        } catch (error) {
            return error;
        }
    }


    export async function updateUserImage(email,image,token)
    {
        console.log(token);
      //  console.log(image);
        console.log("inside the update user image");
        var postUrl=url+'v1/user/uploadUserImage';
        console.log(postUrl);
        try {
            let response=await fetch(postUrl,{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
                body: JSON.stringify({
                    email: email,
                    image: image
                })
            });
            return response.json();
        } catch (error) {
            return error;
        }
    }

    export async function getUserList(seed,page,result,token)
    {
        console.log(token);
        console.log(seed,page,result);
        console.log("inside get User List");
        var getUrl=url+'v1/user/getUserList/'+seed+'/'+page+'/'+result;
        console.log(getUrl);
        try {
            let response=await fetch(getUrl,{
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                }
            });
            return response.json();
        } catch (error) {
            return error;
        }
    }