class Apiresponse{
    constructor(
        
        success = false,
        error =true,
        message,
        data,
    ){
        this.success = success
        this.error =error
        this.message = message
        this.data = data
    }
}
export default Apiresponse