import eye1 from "../../img/implants/eye/1.jpg";
import eye2 from "../../img/implants/eye/2.jpg";
import eye3 from "../../img/implants/eye/3.jpg";
import eye4 from "../../img/implants/eye/4.jpg";
import foot1 from "../../img/implants/foot/1.png";
import foot2 from "../../img/implants/foot/2.jpg";
import foot3 from "../../img/implants/foot/3.jpg";
import foot4 from "../../img/implants/foot/4.jpg";
import hand1 from "../../img/implants/hand/1.jpg";
import hand2 from "../../img/implants/hand/2.jpg";
import hand3 from "../../img/implants/hand/3.jpg";
import hand4 from "../../img/implants/hand/4.jpg";
import intohand1 from "../../img/into the body/intohand/1.jpg";
import intohand2 from "../../img/into the body/intohand/2.gif";
import intohead1 from "../../img/into the body/intohead/1.jpg";
import intohead2 from "../../img/into the body/intohead/2.jpg";
import intohead3 from "../../img/into the body/intohead/2.jpg";
import complect_r1 from "../../img/origin complect/r/1.jpg";
import complect_r2 from "../../img/origin complect/r/2.jpg";
import complect_t1 from "../../img/origin complect/t/1.jpg";
import complect_t2 from "../../img/origin complect/t/2.jpg";
import complect_m1 from "../../img/origin complect/m/1.jpg";
import complect_m2 from "../../img/origin complect/m/2.jpg";
import robo_f1 from "../../img/utilits/f_fist/1.jpg";
import robo_f2 from "../../img/utilits/f_fist/2.jpg";
import robo_f3 from "../../img/utilits/f_fist/3.jpg";
import robo_f4 from "../../img/utilits/f_fist/4.jpg";
import robo_f5 from "../../img/utilits/f_fist/5.jpg";
import robo_s1 from "../../img/utilits/s_fist/1.jpg";
import robo_s2 from "../../img/utilits/s_fist/2.jpg";
import robo_s3 from "../../img/utilits/s_fist/3.jpg";
import robo_s4 from "../../img/utilits/s_fist/4.jpg";
import robo_g_f_1 from "../../img/utilits/g_f/1.jpg";
import robo_g_f_2 from "../../img/utilits/g_f/2.jpg";
import robo_g_f_3 from "../../img/utilits/g_f/3.jpg";
import robo_g_s_1 from "../../img/utilits/g_s/1.jpg";
import robo_g_s_2 from "../../img/utilits/g_s/2.jpg";
import robo_g_s_3 from "../../img/utilits/g_s/3.jpg";
import robo_g_th_1 from "../../img/utilits/g_th/1.jpg";
import robo_g_th_2 from "../../img/utilits/g_th/2.jpg";
import robo_g_th_3 from "../../img/utilits/g_th/3.jpg";
import robo_g_fr_1 from "../../img/utilits/g_fr/1.jpg";
import robo_g_fr_2 from "../../img/utilits/g_fr/2.jpg";
import robo_g_fr_3 from "../../img/utilits/g_fr/3.jpg";
import robo_g_fr_4 from "../../img/utilits/g_fr/4.jpg";

let initialstate = {
  ind_imp :[
    {id: 1, name: 'Eye-implant', price: 100,  photourl: [eye1, eye2, eye3, eye4], pieces: 0, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {id: 2, name: 'Foot-implant', price: 200, photourl: [foot1, foot2, foot3, foot4], pieces: 0, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {id: 3, name: 'Hand-implant', price: 1500, photourl: [hand1, hand2, hand3, hand4], pieces: 0, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
  ],
  intobody_imp:[
    {id: 1, name: 'Intohand-implant', price: 100, photourl: [intohand1, intohand2], pieces: 0, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {id: 2, name: 'Intohead-implant', price: 200,  photourl: [intohead1, intohead2, intohead3], pieces: 0, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
  ],
  complect_imp:[
    {id: 1, name: 'Kits R 11', price: 100, photourl: [complect_r1, complect_r2], pieces: 0, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {id: 2, name: 'Kits T 22', price: 100, photourl: [complect_t1, complect_t2], pieces: 0, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {id: 2, name: 'Kits M 33', price: 100, photourl: [complect_m1, complect_m2], pieces: 0, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
  ],
  utilits:[
    {id: 1, name: 'Robo-fist C 10', price: 100, photourl: [robo_f1, robo_f2, robo_f3, robo_f4, robo_f5], pieces: 0, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {id: 2, name: 'Robo-fists C 20', price: 200, photourl: [robo_s1, robo_s2, robo_s3, robo_s4], pieces: 0, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {id: 3, name: 'Cyber glasses 12', price: 300, photourl: [robo_g_f_1, robo_g_f_2, robo_g_f_3], pieces: 0, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {id: 4, name: 'Cyber glasses M 8', price: 300, photourl: [robo_g_s_1, robo_g_s_2, robo_g_s_3], pieces: 0, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {id: 5, name: 'Cyber glasses M 16', price: 300, photourl: [robo_g_th_1, robo_g_th_2, robo_g_th_3], pieces: 0, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {id: 6, name: 'Cyber glasses M 32', price: 300, photourl: [robo_g_fr_1, robo_g_fr_2, robo_g_fr_3, robo_g_fr_4], pieces: 0, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
  ],
  Basket: [],
  Common_counter : 0
}
const GoodsDataReducer = (state=initialstate, action) =>{
      if (action.type === 'SendMessage'){
        let body =  action.text;
        return{
          ...state,
          Messages: [...state.Messages, {id: 5, message: body}]
        }
    }
  else if (action.type === 'UpCounter'){
        let new_value = state.Common_counter + 1;
        return{
          ...state,
          Common_counter: new_value
    }
  }
  /*/&& state.Bascket.find(own_g => own_g.id === action.goodid).id === action.goodid/*/
      else if (action.type === 'GetGood'){
        let path = action.category;
        state.Common_counter = state.Common_counter + action.goodprice;
        state[path].find(own_g => own_g.id === action.goodid).pieces = action.goodpieces + 1;
        if(state.Basket.length !== 0 && state.Basket.findIndex(own_g => own_g.id === action.goodid && own_g.category === action.category) !== -1){
          state.Basket.find(good => good.id === action.goodid && good.category === action.category).pieces = action.goodpieces + 1;//не может найти с таким же id так как его нет
          return{
            ...state
          }
        }else{
          return{
            ...state,
            Basket: [...state.Basket, {id: action.goodid, name: action.goodname, price: action.goodprice, pieces: action.goodpieces + 1, category: action.category}]
          }
        }
      }
      else if (action.type === 'PullOutGood')
      {
        let path = action.category;
        if (action.goodpieces>0 && state.Common_counter>=0) {
          state.Common_counter = state.Common_counter - action.goodprice;
          state[path].find(own_g => own_g.id === action.goodid).pieces = action.goodpieces - 1;
          if (state.Basket.length !== 0 && state.Basket.findIndex(own_g => own_g.id === action.goodid  && own_g.category === action.category) !== -1){
            state.Basket.find(good => good.id === action.goodid && good.category === action.category).pieces = action.goodpieces - 1;
            state.Basket.forEach(function(el, i){
              if (el.pieces === 0) state.Basket.splice(i, 1)
            })
            return {
              ...state
            }
          } else{
            return {
              ...state,
              Basket: [...state.Basket, {
                id: action.goodid,
                name: action.goodname,
                price: action.goodprice,
                pieces: action.goodpieces - 1
              }]
            }
          }
        }else{
          return {
            ...state
          }
        }
      }
    else {
      return state;
    }
}
export const CounterUppercreater = () =>{
  return{
    type: 'UpCounter'
  }
}
export const GetInBascketCreater = (obj) =>{
  return{
    type: 'GetGood', goodid: obj.id, goodprice: obj.price, goodpieces: obj.pieces, goodname: obj.name, category: obj.category
  }
  debugger;
}
export const PullOutBascketCreater = (obj) =>{
  return{
    type: 'PullOutGood', goodid: obj.id, goodprice: obj.price, goodpieces: obj.pieces, goodname: obj.name, category: obj.category
  }
}
/*/
export const Common_counter_pumperC = (obj) =>{
  return{
    type: 'CommonCounterPumper', goodprice: obj.price
  }
}

export const GetInBascketCreaterС = (obj) => {
  return (dispatch) => {
    dispatch(Common_counter_pumperC(obj));
  }}
else if (action.type === 'CommonCounterPumper')
        {
          return {
            ...state,
            Common_counter: state.Common_counter + action.goodprice
          }
        }
/*/
export default GoodsDataReducer;