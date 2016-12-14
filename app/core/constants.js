
//var BASE_API_URL = "http://192.168.8.104:8084/api/v1";
var BASE_API_URL = "http://192.9.200.56:8084/api/v1";
//var BASE_API_URL = "http://eVis.com.ng/int/api/v1";

var Constants = {

    IntroConstants: {
        "API_KEY": "58340507169805616357"
    },

    Urls: {
        "profileRequestUrl": BASE_API_URL + "/user/profile",
        "companyDataUrl": BASE_API_URL + "/nuser/data/info",
        "loginUrl": BASE_API_URL + "/nuser/auth",
        "customerRegUrl": BASE_API_URL + "/nuser/reg",
        "customerRegVerifyCodeUrl": BASE_API_URL + "/nuser/reg/verify/{verifyCode}",
        "resendCustomerRegVerifyCodeUrl": BASE_API_URL + "/nuser/reg/verify/resend",
        "addMeterUrl": BASE_API_URL + "/user/meter/add",
        "verifyAddMeter": BASE_API_URL + "/user/meter/verify/{compId}/{meterno}/{verificationCode}",
        "verifyAddMeterOTPResendUrl": BASE_API_URL + "/user/meter/verify/{compId}/{meterno}/resend",
        "chartDataUrl": BASE_API_URL + "/user/meter/graph/all",
        "paymentHistoryUrl": BASE_API_URL + "/user/orders/{pageno}",
        "paymentHistoryDetailUrl": BASE_API_URL + "/user/order/{orderno}",
        "generateOrderUrl": BASE_API_URL + "/user/order/gen",
        "generateOrderNotificationUrl": BASE_API_URL + "/user/order/pay/{paymentReference}",
        "calculateFeeUrl": BASE_API_URL + "/user/order/fees",
        "getMeterUrl": BASE_API_URL + "/user/meter/{compId}/{meterno}",
        "paymentNotificationUrl": BASE_API_URL + "/user/pay/3d",
        "resetPasswordUrl": BASE_API_URL + "/nuser/profile/pwd/reset",
        "changePasswordUrl": BASE_API_URL + "/nuser/profile/pwd/change",
        "getOrderUrl" : BASE_API_URL + "/user/order/{orderId}",
        "sendTokenToMeterUrl": BASE_API_URL +  "/user/order/send/{orderId}",
        "promoCodeUrl": BASE_API_URL + "/user/promo/validate"
    },

    Messages: {
        "InvalidCredentials": "Invalid login credentials. Try again",
        "PASSWORD_CHANGE_SUCCESSFUL": "Password change was successful.",
        "PASSWORD_RESET_SUCCESSFUL": "Reset was successful. Check your email for new password.",
        "PaymentConfirmed": "Your payment was confirmed successfully.",
        "PasswordMismatch": "Passwords do not match.",
        "EmptyFields": "Please complete required fields to continue.",
        "InvalidOTP": "OTP code entered is invalid.",
        "OTPSent": "OTP code has been sent to your phone.",
        "VerificationFailed": "Could not verify registration.",
        "NetworkError": "Network Error. Check your connection.",
        "LoginFailed": "Login Failed. Try again",
        "MeterAdded": "Meter was added successfully.",
        "SuccessfulCustomerVerification": "Your Registration was completed successfully.",
        "SuccessfulMeterAddition": "Your meter was added successfully.",
        "CustomerRegSMS": "eVis Integration registration successful.Your authorization code is ",
        "MeterRegSMS": "eVis Integration registration successful.Your authorization code is ",
        "SendTokenToMeterMessage": "Token sent successfully to Meter",
        "amiEnabledMessage": "Sorry, this Meter does not support this action."
    },

    MeterConstants: {},

    SupportConstants: {

        "supportPhone": "+2348036083386",
        "supportMail": "support@powergenie.com.ng"

    },

    UserConstants: {},


    InterswitchConstants: {
        "paymentApiUrl": "https://sandbox.interswitchng.com",
        "passportApiUrl": "https://sandbox.interswitchng.com/passport",
        "clientId": "IKIAD9E020E4AAEFB08A8822851FB816C365A5B1BE42",
        "clientSecret": "b5X68Kni3v3jUPAVqwJvSCc4pfjssgrCW8BakJB3V+8="
    },

    DBKeys: {
        "DEVICE_ID": "DEVICE_ID",
        "TOKENS_KEY": "TOKENS_KEY",
        "PROFILE_KEY": "PROFILE_KEY",
        "METERS_KEY": "METERS_KEY",
        "PAYMENTS_KEY": "PAYMENTS_KEY",
        "CHART_KEY": "CHART_KEY",
        "WALLET_BALANCE": "WALLET_BALANCE",
        "AUTH_TOKEN": "AUTH_TOKEN",
        "API_KEY": "API_KEY",
        "COMPANY_KEY": "COMPANY_KEY",
        "CHANNELS_KEY": "CHANNELS_KEY",
        "CREDENTIALS": "CREDENTIALS",
        "AUTHENTICATED": "AUTHENTICATED",
        "LOCKSTATUS": "LOCKSTATUS",
        "PENDING_CHANGE_PASSWORD": "PENDING_CHANGE_PASSWORD"
    },

    PushKeys: {"SENDER_ID": "159474470399"},

    SMSKeys: {
        "SIGN_UP": "SIGN_UP",
        "ADD_METER": "ADD_METER"

    },

    TimeoutKeys: {
        "WAIT_TIME": 45000, //45secs
        "HTTP_CONNECT_TIMEOUT" : 20000
    },

    ResponseCodes: {
        "SUCCESS": "00",
        "FAILED_VERIFICATION": "17",
        "AUTHENTICATION_ERROR": "04",
        "PAYMENT_AUTH_ERROR" : "045"
    }

};

