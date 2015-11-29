function developmentEnv() {
    //this.SERVER_HOST = 'dev.midburn.com';
    this.SERVER_ADDRESS = 'http://dev.midburn.com:4000';
    //this.SERVER_ADDRESS = 'http://wepaint.eu-1.evennode.com';

}

const instance = new developmentEnv();
export default instance;
