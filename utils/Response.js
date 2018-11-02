class Response {
  constructor(data={},status=200,message='success',timestamp=new Date()){
    this.data = data;
    this.status = status;
    this.message = message;
    this.timestamp = timestamp;
  }

}
module.exports = Response