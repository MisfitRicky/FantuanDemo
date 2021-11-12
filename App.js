// import React, { Component, useState } from 'react';
// import FantuanImage from './FantuanImage';
// import {
//     requireNativeComponent,
//     AppRegistry,
//     Text,
//     StyleSheet,
//     View,
//     NativeModules,
//     TouchableOpacity
// } from 'react-native';

// var FantuanPhotoViewManager = NativeModules.FantuanImageManager;

// type Props = {};
// export default class ReactNativeCustomUIDemo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             titleText: "FantuanDemo",
//             loadDataButtonText: "加载数据",
//             clearCacheButtonText: "清除数据和缓存",
//             getCacheSizeText: "获取缓存大小",
//             getCacheLabelText: "--",
//         };
//     }

//     render() {
//             return (
//                     <View style={styles.container}>

//          <Text style={styles.titleLabel}>
//          {this.state.titleText}
//          </Text>

//          <View style={{flexDirection: "row",flexWrap: "wrap",}}>
//             <Text style={styles.button} 
//             onPress={()=>this.loadDataButtonAction()}>
//          {this.state.loadDataButtonText}
//          </Text>
//          <Text style={styles.button} 
//          onPress={()=>this.clearCacheButtonAction()}>
//          {this.state.clearCacheButtonText}
//          </Text>
//          </View>

//           <View style={{marginTop: 10, flexDirection: "row",flexWrap: "wrap",}}>
//             <Text style={styles.button} 
//             onPress={()=>this.getCacheSizeAction()}>
//          {this.state.getCacheSizeText}
//          </Text>

//          <Text style={styles.contentLabel}>
//          {this.state.getCacheLabelText}
//          </Text>
//          </View>

//           <FantuanImage style={{marginTop: 20,flex: 2}}
    
//           />
//          </View>
//         );
//     }

//     loadDataButtonAction = () => {
//      var models=new Array("https://i.picsum.photos/id/1084/200/200.jpg?hmac=xQYOwJzrnLV26FtETQNbcf3y4H2IUqFTWagLcKPfrbA","https://i.picsum.photos/id/781/200/200.jpg?hmac=QS4V9UziNCgGW5Nv84Kaun5Xgfx0l8qXNBmtPBClPJo","https://i.picsum.photos/id/416/200/200.jpg?hmac=QgMiXqHqKofoCv4h8lkrwRSOkn5Twkh15Dfl9Efvtwo","https://i.picsum.photos/id/962/200/200.jpg?hmac=XehF7z9JYkgC-2ZfSP05h7eyumIq9wNKUDoCLklIhr4","https://i.picsum.photos/id/403/200/200.jpg?hmac=GkAppJlJ6MSNvKNo7Hj3Z_I3QTbiwzOtyOJbh6jcZ0U","https://i.picsum.photos/id/143/200/200.jpg?hmac=zGj8dhmmqaaQZDcHhU9C0itdL12zcGTpuVdQiVrYiEQ","https://i.picsum.photos/id/661/200/200.jpg?hmac=pTRumV7JHMWLu9tuOU6quaMWqF-oxcymEOAvPNfXG4I","https://i.picsum.photos/id/24/200/200.jpg?hmac=Tw5b43UPAehS5e4JyB0qMQysvfLBmu_GZ_iafWou3m8","https://i.picsum.photos/id/820/200/200.jpg?hmac=dWVRjEMHD9jchbBs5tM-RR5xdXdBGAzIn1qI9WzpLs4","https://i.picsum.photos/id/556/200/200.jpg?hmac=5uOJ4fW7ElE2P5NfHlvz2zx4d99Ts2-lxy8tucygHLc","https://i.picsum.photos/id/556/200/200.jpg?hmac=5uOJ4fW7ElE2P5NfHlvz2zx4d99Ts2-lxy8tucygHLc","https://i.picsum.photos/id/834/200/200.jpg?hmac=vcoSQ7O6i2vxWANscm-9EGrw0MNqLzU3X0pQZ1o5ovI","https://i.picsum.photos/id/1081/200/200.jpg?hmac=jyxOLb8HFEGU9gP9khyXdMjr1zDV7sT6gv1_mYxlheY","https://i.picsum.photos/id/91/200/200.jpg?hmac=y-8iGl9dOkbHqADPlWuS-rWBHNBWWXlzKcsTDu2WeQo","https://i.picsum.photos/id/675/200/200.jpg?hmac=9STfESSQ22nwjFi-38ZsER3DM6mArzbYkLPEgq3cHXg","https://i.picsum.photos/id/110/200/200.jpg?hmac=aekmsQTsPRt4hCd1khMC5QVihAaBeTigUCpcDBzhXlY","https://i.picsum.photos/id/1080/200/200.jpg?hmac=0okKAdyiW9oTgR5PNZQrDYFtWu7HAt93nI93ZpfelUw","https://i.picsum.photos/id/197/200/200.jpg?hmac=QpHQ9OiY_-qagHPzHZgTw7I_nE3LevYjH_1k3-xLpPk","https://i.picsum.photos/id/1059/200/200.jpg?hmac=2w4ZTAuYGsSUL-ur3iVQO04H8398XxIaeLEGVBNRSLU","https://i.picsum.photos/id/398/200/200.jpg?hmac=vfIjMAWfannZLe4HsdciIJxPkZh7v4XA2OpWglmHARg","https://i.picsum.photos/id/254/200/200.jpg?hmac=wM9u9N0tgdWKFIr8MxBLr8rLoV0JjUUKLk32XFV8agQ","https://i.picsum.photos/id/845/200/200.jpg?hmac=KMGSD70gM0xozvpzPM3kHIwwA2TRlVQ6d2dLW_b1vDQ","https://i.picsum.photos/id/319/200/200.jpg?hmac=UVJeYSi6TAfErW8IEThVndqxRlYBeWaZRymD1KuysSg","https://i.picsum.photos/id/336/200/200.jpg?hmac=VZ7MzNM30jINYNf5Oj_8zqPLTDAyKDk6eXWTGnNb4bU","https://i.picsum.photos/id/173/200/200.jpg?hmac=avUVgEVHNuQ4yZJQhCWlX3wpnR7d_fGOKvwZcDMLM0I","https://i.picsum.photos/id/458/200/200.jpg?hmac=TMJKh7xYKczm-J8McTjX4hBnhjgraDPgaJFkINMU01Y","https://i.picsum.photos/id/458/200/200.jpg?hmac=TMJKh7xYKczm-J8McTjX4hBnhjgraDPgaJFkINMU01Y","https://i.picsum.photos/id/1055/200/200.jpg?hmac=23b3LoSYozZgCujiEcPGpgSvTaW35YghR4_EK2eJU9w","https://i.picsum.photos/id/865/200/200.jpg?hmac=YU_vd-bJ6z9YfrQwr6tDOm--FtikU1rNpyxItCoIOgQ","https://i.picsum.photos/id/497/200/200.jpg?hmac=pD3JCR-6DQCB69-sRAmzUn-m8I5V-ugaHUuCKh9gAFU","https://i.picsum.photos/id/314/200/200.jpg?hmac=bCAc2iO5ovLPrvwDQV31aBPS13QTyv33ut2H2wY4QXU","https://i.picsum.photos/id/163/200/200.jpg?hmac=mEG0MVDQnbY2PIFVIxZKgINnXrapgb5G5S1QMtMTt98","https://i.picsum.photos/id/1074/200/200.jpg?hmac=o1fm0jR_nE4yW-N80QpSF9JfnnRYhRraqaTaTbCGe1c","https://i.picsum.photos/id/676/200/200.jpg?hmac=hgeMQEIK4Mn27Q2oLRWjXo1rgxwTbk1CnJE954h_HyM","https://i.picsum.photos/id/149/200/200.jpg?hmac=ykhZe9T_HysK0voTz01NVBW7C8XlLYYT2EinqAhTA-0","https://i.picsum.photos/id/974/200/200.jpg?hmac=3skiM35hn9GtUF77ruZWI1mTtIROBBhkDIOmGwS7kpY","https://i.picsum.photos/id/216/200/200.jpg?hmac=7Weas8POu49YrmUyJ6tWdqVMx-hw6lryzl8HnHZBzjc","https://i.picsum.photos/id/674/200/200.jpg?hmac=8R8yi_1uaRGCT1W62tjUJFrEyMy2JCZzmrjrXclOens","https://i.picsum.photos/id/544/200/200.jpg?hmac=iIsE7MkJ1i0DzyQjD7hXFjiVpz8uukzJTk9XCNuWS8c","https://i.picsum.photos/id/538/200/200.jpg?hmac=oJRLJPsN8ZdWjPpKGEU-oqAZMBKa4JsTnuUSqgRbyP4","https://i.picsum.photos/id/140/200/200.jpg?hmac=EslZ18xRW6ewC17GDNdn7zvrEZUx37IhZq5iWo9b4g8","https://i.picsum.photos/id/436/200/200.jpg?hmac=axiGy-zt6-TD5Hu1AD_rhudOgkfr-VQElZPKE592Mwc","https://i.picsum.photos/id/642/200/200.jpg?hmac=MJkhEaTWaybCn0y7rKfh_irNHvVuqRHmxcpziWABTKw","https://i.picsum.photos/id/331/200/200.jpg?hmac=otNh1Xx2hk_Tng_SFa60ayddRGORvWnDKJ2wG1l0KIE","https://i.picsum.photos/id/368/200/200.jpg?hmac=ej5Lmr5qh7f88zx85PnlHj2GKfwrNNWf6-lACRJ34qI","https://i.picsum.photos/id/1023/200/200.jpg?hmac=MtNMS39i8o8sE6PiXNwABDxNtK4niBxaZWoX5KY3cyg","https://i.picsum.photos/id/492/200/200.jpg?hmac=XU2aUuiOp-6a1CXwWFsbEobU3xA-9upNSkJiJacygTM","https://i.picsum.photos/id/1072/200/200.jpg?hmac=jar1_w-0fdzV_d70mmk9VzkBQA9B_oSZuZs21we31ZE","https://i.picsum.photos/id/809/200/200.jpg?hmac=2U0kkZGtbw4L4bQc3aC8cZA6ywfn2MvR0d-YC4ITcI8","https://i.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g","https://i.picsum.photos/id/131/200/200.jpg?hmac=q40x2oH1ZEkSm4ghNQ71nzzO07pbbG7hmn4J4KEtG-8","https://i.picsum.photos/id/384/200/200.jpg?hmac=TAsUnIQnfLj13hjjp8604_rXNHrqCGlB2K8UQoWt1aM","https://i.picsum.photos/id/367/200/200.jpg?hmac=6NmiWxiENMBIeAXEfu9fN20uigiBudgYzqHfz-eXZYk","https://i.picsum.photos/id/153/200/200.jpg?hmac=FXa1bJkELmwUr7L-5-vUojuab9Z_jUSu2buDseEVnVc","https://i.picsum.photos/id/131/200/200.jpg?hmac=q40x2oH1ZEkSm4ghNQ71nzzO07pbbG7hmn4J4KEtG-8","https://i.picsum.photos/id/682/200/200.jpg?hmac=098XkPnTe9a41I6BtB9xV4t6L8c3ESkdowMLElFBR5A","https://i.picsum.photos/id/1023/200/200.jpg?hmac=MtNMS39i8o8sE6PiXNwABDxNtK4niBxaZWoX5KY3cyg","https://i.picsum.photos/id/231/200/200.jpg?hmac=lUSm6Na5VxIhLKub6Y3JaBOAwCjkimAi-zHEOInwL58","https://i.picsum.photos/id/84/200/200.jpg?hmac=6H-uafgNQmg74KSd7tSKVP1PWLigkAnXdB_PyFgxXNA","https://i.picsum.photos/id/134/200/200.jpg?hmac=a3L-JjVSGeG8w3SdNpzxdh8WSC0xHJXgeD6QryCK7pU","https://i.picsum.photos/id/997/200/200.jpg?hmac=J9wMccIJgdwcAV_BlxcoN1N_oKWGt4Wb8EqkKqp-4gE","https://i.picsum.photos/id/837/200/200.jpg?hmac=SKjv_7AKBkmWU8J2FbqdM9W6wDaumdxzryYpEQLl0GM","https://i.picsum.photos/id/938/200/200.jpg?hmac=92xbyQ6vbS3815L2g4uCHhtDVrdsdJfHq76-23joI3M","https://i.picsum.photos/id/871/200/200.jpg?hmac=RiUSuXl3prTnCTwjRX_be5hca7AJGWw75b50TxlMcFA","https://i.picsum.photos/id/518/200/200.jpg?hmac=nY2cAnZ0_ItWhhAsJ_XL3RsNkDo7_zobodK8FWIoCDM","https://i.picsum.photos/id/423/200/200.jpg?hmac=fXwRSSVHFlYgq9MfObWaWCb_p9L6ysOWda9lLOtAWc0","https://i.picsum.photos/id/696/200/200.jpg?hmac=JE4lFckorKxM41-eM1nTxXjpOeCf3aZkAxrLl3ZAYI0","https://i.picsum.photos/id/1018/200/200.jpg?hmac=uHjw5VeUXsbJBBE5Ywaumr-fxWyViVwI_GRwrA3AQ2Q","https://i.picsum.photos/id/922/200/200.jpg?hmac=2ePRMbZ5V-IoV8hGz1XNSAUmQLPTOtYIAxgBHVWD3cU","https://i.picsum.photos/id/892/200/200.jpg?hmac=lMI1NzfAzgWlBV0lCCLYXsxRxsq5Mwr-RK9K6AId4X4");
//       var arr = this.getRandomArrayElements(models, 20)
//         FantuanPhotoViewManager.updateTableView(arr);
//     }

//     clearCacheButtonAction = () => {
//       FantuanPhotoViewManager.clearCache();
//       this.setState({getCacheLabelText:'--'})
//     }

//     getCacheSizeAction = () => {
//        FantuanPhotoViewManager.getCacheSizeWithCallback((error, size) => {
//             if (error) {
//                 console.error(error);
//             } else {
//                 this.setState({getCacheLabelText:size})
//             }
//         })
//     }

//     getRandomArrayElements(arr, count) {
//       var shuffled = arr.slice(0),
//         i = arr.length,
//         min = i - count,
//         temp,
//         index;
//       while (i-- > min) {
//         index = Math.floor((i + 1) * Math.random());
//         temp = shuffled[index];
//         shuffled[index] = shuffled[i];
//         shuffled[i] = temp;
//       }
//       return shuffled.slice(min);
//     }

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     flexDirection: "column"
//   },
//   titleLabel: {
//    padding: 34,
//    fontFamily: "Cochin",
//    fontSize: 20,
//    fontWeight: "bold",
//    textAlign:'center',
//    justifyContent: 'center',
//   },
//   button: {
//     paddingVertical: 10,
//     borderRadius: 4,
//     backgroundColor: "oldlace",
//     marginHorizontal: "1%",
//     minWidth: "48%",
//     textAlign: "center",
//   },
//   contentLabel: {
//     paddingVertical: 10,
//     borderRadius: 4,
//     marginHorizontal: "1%",
//     minWidth: "48%",
//     textAlign: "center",
//   },

// });



// // AppRegistry.registerComponent('ReactNativeCustomUIDemo', () => ReactNativeCustomUIDemo);