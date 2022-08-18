import {extend} from 'vee-validate'
import {required,email, numeric} from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message:"This field is required",

})
extend("email",{
  ...email,
  message:"This must be a valid email",
  }
)
extend("numeric",{
  ...numeric,
  message:"Numbers only",
})
