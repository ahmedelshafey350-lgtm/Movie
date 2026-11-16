const initilState={
    lang:"en",
    isloadig:false
};

export default function languageReducr(state=initilState,action){
   
    switch(action.type)
    {
        case "set-Language" :
         return{
           ...state,
           lang:action.payLoad
         }
         case "SET_LOADER" :
            return{
                ...state,
                isloadig:action.payLoad

            }
        default:
        return (state)
    }

}