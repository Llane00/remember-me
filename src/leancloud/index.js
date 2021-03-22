import {appid, appkey, serverURL} from './appKey.js'

const AV = require('leancloud-storage');
// const { Query, User } = AV;

AV.init({
  appId: appid,
  appKey: appkey,
  serverURL: serverURL
});

// export default AV;

// const TestObject = AV.Object.extend('TestObject');
// const testObject = new TestObject();
// testObject.set('words', 'Hello world!');
// testObject.save().then((testObject) => {
//   console.log('保存成功。')
// })

// const thirdPartyData = {
//   access_token: 'ACCESS_TOKEN',
//   expires_in: 7200,
//   refresh_token: 'REFRESH_TOKEN',
//   openid: 'OPENID',
//   scope: 'SCOPE',
// };
// AV.User.loginWithAuthData(thirdPartyData, 'weixin', { failOnNotExist: true }).then((s) => {
//   // 登录成功
//   console.log("登录成功")
//   console.log(s)
// }, (error) => {
//   // 登录失败
//   // 检查 error.code == 211，跳转到用户名、手机号等资料的输入页面
//   console.log("登录失败")
//   console.log(error)
// });
