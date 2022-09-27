import { object, string, ref} from 'yup';

const Validation = object({
    email: string().email("Geçerli bir email girin").required("Zorunlu Alan"), 
    password: string().min(5, "Parolanız en az 5 karekter olmalıdır.").required("Zorunlu Alan"),
    confirmPassword: string().oneOf([ref("password")], "Parolalar uyuşmuyor").required("Zorunlu Alan"),   
  });


  export default Validation;