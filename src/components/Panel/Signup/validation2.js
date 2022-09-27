import { object, string} from 'yup';

const Validation2 = object({
    email: string().email("Geçerli bir email girin").required("Zorunlu Alan"), 
    password: string().min(5, "Parolanız en az 5 karekter olmalıdır.").required("Zorunlu Alan"),
  });


  export default Validation2;