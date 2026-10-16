// SWITCH 
//switch( key ) {
//    case value1:
//
//    break;
//    case value2:
//        default:
//            break;
//}
const month = "march";

switch (3) { // this is also same for string
    case 1 :
        console.log("January");
        break;
    case 2 :
        console.log("February");
        break;
    case 3 :
        console.log("March");
        break;// if we don't use break then it will execute the next case also and it will print all the cases after the matched case 
    default :
        console.log("Invalid month");
        break;
        
}