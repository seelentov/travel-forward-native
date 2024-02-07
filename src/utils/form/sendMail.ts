import { Alert } from "react-native";
import { Email } from "./Email";

export const sendMail = (formTitle: string, body: string) => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "noreply@travelforvard.ru",
    Password: "C439FAB11A18E286B2BDC308CA8F7A6D1EAB",
    To: 'discont-tour12@yandex.ru',
    From: "discounttoura@gmail.com",
    Subject: formTitle,
    Body: body
  })
    .then((message: any) => {
      if (errorIncludes.some(errorInclude => message.includes(errorInclude))) {
        console.log(message);
        return Alert.alert('', `Ошибка: ${message}`)
      }
      return Alert.alert('', 'Сообщение успешно отправлено!')
    })
    .catch((error) => {
      console.log(error);
      Alert.alert('', `Ошибка: ${error}`)
    });
}


const errorIncludes: string[] = [
  'Failture', 
  'Mailbox name not allowed', 
  'Authentication required'
]