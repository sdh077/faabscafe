import { InputValidation } from "@/ui/Form/Input";

interface Valid {
    [key: string]: RegExp
}

const validationCheck: Valid = {
    'idCheck': /^(?=.*[a-zA-Z])(?=.*[\d])[A-Za-z\d]{5,15}$/,
    'num':/[0-9]/g, //숫자
    'onlyKor': /[^ㄱ-ㅎㅏ-ㅣ가-힣]/i, //한글
    'onlyKorEngNum': /[^\sㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]/i, //한글 + 영어 + 숫자
    'onlyEngKor':/[^a-zA-Zㄱ-ㅎ가-힣]*/i, //영어 + 한글
    'onlyEngNum':/[^a-z0-9]*/i,//영어 + 숫자
    'onlyNum':/[^0-9]/g, //숫자만
    'phone': /^(\d{0,3})(\d{0,4})(\d{0,4})$/g, //핸드폰자리수
    'hyphen': /(\-{1,2})$/g, //하이픈
    'notSpace' : /[\s]/gi,
}

export default validationCheck