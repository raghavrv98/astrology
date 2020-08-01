var nodemailer=require('nodemailer');

module.exports={
    sendMail:function(receiver,subject,msg,msgType='text'){
        console.log('receiver,subject,msg: ', receiver,subject,msg);
    var transporter=nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'astrolive.ashish@gmail.com',
            pass:'1qaz2wsx#EDC$RFV'
        }
    });

    if(msgType==='html'){
        var mailOptions={
            from:'astrolive.ashish@gmail.com',
            to:receiver,
            subject:subject,
            html:msg
        }
    }
    else{
        var mailOptions={
            from:'astrolive.ashish@gmail.com',
            to:receiver,
            subject:subject,
            text:msg
        }

    }

    transporter.sendMail(mailOptions,function(err,info){
        if(err)
            console.log(err)
        else
            console.log(info)
    });
  }
}