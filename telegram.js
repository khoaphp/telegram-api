// send OTP + _idLog
axios.get('https://api.telegram.org/bot'+botTele_Token+'/sendMessage?chat_id='+userTeleId+'&text='+"" + otp)
.then(function (response) {
    // handle success
    console.log(response);
    if(response.data.ok==true){
        res.json({result:1, idLog:newLog._id});
    }else{
        res.json({result:0, message:"[0] OTP Telegram sent error!"});
    }
})
.catch(function (error) {
    // handle error
    res.json({result:0, message:"[1] OTP Telegram sent error!"});
})

// BotFather
// get user Id: @Get_Channel_User_Telegram_ID_Bot